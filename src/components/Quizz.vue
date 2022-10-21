<script setup>
import { computed, ref, unref } from "vue";

const props = defineProps({ q_data: Object });
console.log("🚀 ~ file: Quizz.vue ~ line 3 ~ props", props);
const index = ref(0);

const selected = ref(null);

const nextButton = ref(0);

// Enregistrer le resultat a la validation
const goodanswers = ref([]);

// function checkResponse
function checkResponse() {
  goodanswers.value.push(
    props.q_data[index.value].response === +selected.value
  );
  nextButton.value = 1;
}

function nextQuestion() {
  index.value = index.value + 1;
  nextButton.value = !nextButton.value;
  selected.value = null;
}

const percentStage = computed(()=>{
    console.log("🚀 ~ file: Quizz.vue ~ line 31 ~ percentStage ~ props.q_data.length / index.value", (index.value + 1) / props.q_data.length *10 )
    return (index.value + 1) / props.q_data.length *100
    
})
</script>

<template>
  <div class="shadow-lg p-5 bg-white rounded-lg">
    <div>

      <transition name="slide-fade" mode="out-in">
        
        <div :key="q_data[index].id">
            <p class="text-center text-bv-green font-bold">Question {{ index +1 }} sur {{q_data.length}}</p>
          <h3>{{ q_data[index].title }}</h3>
        </div>
    </transition>
    <div class="relative h-2 overflow-hidden rounded-lg mb-8 mt-8 bg-bv-blue-bg">
        <div id="stepper" class="bg-bv-green rounded-lg h-2" :style="{width:percentStage+'%'}"> </div>
    </div>
    <transition name="slide-fade" mode="out-in">
        <div :key="q_data[index].id">
          <!-- <div v-for="n in q_data.choix" :key="n.id">{{n.choice}}</div> -->
          <div class="flex flex-col gap-4">
            <template v-for="n in q_data[index].choix" :key="n.id">
              <label class="border p-6 rounded-lg hover:bg-bv-blue-bg cursor-pointer" :for="n.id">
                <input
                  type="radio"
                  :value="n.id"
                  :name="q_data.id"
                  :id="n.id"
                  v-model="selected"
                />
                {{ n.choice }}
              </label>
            </template>
          </div>
        </div>
      </transition>
      <!-- <p>v-model : {{ selected }}</p> -->
    </div>
    <div class="flex justify-end gap-5 mt-8">
        <a class="underline p-3 mr-3" href="#" @click.prevent="index--">
            Retour à la question précédente
        </a>
        <button
          v-if="!nextButton"
          class="flex gap-3 items-center rounded-lg p-3 mr-3 bg-bv-purple text-white"
          @click.prevent="checkResponse"
        >
          <span>Je valide mon choix</span><img class="h-3" src="@images/icones/coche.png" alt="">
        </button>
        <button
          v-else
          class=" flex gap-4 bg-bv-purple text-white border rounded-lg p-3 mr-3"
          @click.prevent="nextQuestion()"
        >
          <span>Je passe à la question suivante!</span><img src="@images/icones/arrow-right.svg" alt=""> 
        </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


#stepper{
  position:absolute;
  top:0;
  left:0;

  width: 0%;
  z-index: 1;
//   background:#3F8627;
  transition: width 1s ease-out;
}

@keyframes fluidStep{
  100%{
    width: 100%;
  }
}
</style>
