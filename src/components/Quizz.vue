<script setup>
import { ref, unref } from "vue";

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
</script>

<template>
  <div class="shadow-lg p-5 bg-white rounded-lg">
    <div>

      <transition name="slide-fade" mode="out-in">
        
        <div :key="q_data[index].id">
            <p>Question {{ index +1 }} sur {{q_data.length}}</p>
          <h3>{{ q_data[index].title }}</h3>
        </div>
    </transition>
    <div class="border border-spacing-3 border-bv-green mb-4"></div>
    <transition name="slide-fade" mode="out-in">
        <div :key="q_data[index].id">
          <!-- <div v-for="n in q_data.choix" :key="n.id">{{n.choice}}</div> -->
          <div class="flex flex-col gap-4">
            <template v-for="n in q_data[index].choix" :key="n.id">
              <label class="border p-3 rounded-lg hover:bg-bv-blue-bg cursor-pointer" :for="n.id">
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
      <p>v-model : {{ selected }}</p>
    </div>
    <a class="underline p-3 mr-3" href="#" @click.prevent="index--">
        Retour à la question précédente
    </a>
    <button
      v-if="!nextButton"
      class="border rounded-r-lg p-3 mr-3"
      @click.prevent="checkResponse"
    >
      Valider ma réponse
    </button>
    <button
      v-else
      class="border rounded-r-lg p-3 mr-3"
      @click.prevent="nextQuestion()"
    >
      Question suivante
    </button>
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
</style>
