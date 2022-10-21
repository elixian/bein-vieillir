<script setup>
import { ref,unref } from "vue";

const props = defineProps({ q_data: Object });
console.log("🚀 ~ file: Quizz.vue ~ line 3 ~ props", props);
const index = ref(0);

const selected = ref("")



// Enregistrer le resultat a la validation
const goodanswers = ref([])

// function checkResponse
function checkResponse(){
   
    console.log(props.q_data[index.value].response === +selected.value)
    goodanswers.value.push(props.q_data[index.value].response === +selected.value)
}

</script>

<template>
  <div>
    <h1>QUIZZ</h1>

    <div>
      <transition name="slide-fade" mode="out-in">
        <div :key="q_data[index].id">
            <h2>{{ q_data[index].title }}</h2>
            <!-- <div v-for="n in q_data.choix" :key="n.id">{{n.choice}}</div> -->
            <template v-for="n in q_data[index].choix" :key="n.id">
              <input type="radio" :value="n.id" :name="q_data.id" :id="n.id" v-model="selected"/>
              <label :for="n.id">{{ n.choice }}</label>
            </template>
        </div>
      </transition>
      <p>v-model : {{selected}}</p>
    </div>
    <button @click.prevent="index--">Previous</button>
    <button @click.prevent="checkResponse">Valider ma réponse</button>
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
