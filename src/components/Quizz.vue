<script setup>
import { computed, ref, unref } from "vue";
import { storeToRefs } from 'pinia'
import {useQuizzStore} from '@/stores/quizz'
import { mapState } from 'pinia'


const props = defineProps({ q_data: Object });
const index = ref(0);
const selected = ref(null);
const nextButton = ref(0);

const isGoodAnswer = ref(0);
// Enregistrer le resultat a la validation
const goodanswersList = ref([]);


// +++++++++++++++++++++++++++++++++++++++++++++ TEST PINIA ++++++++++++++++++++++++++++++++++
const {setScore,getScore} = useQuizzStore();
setScore({hello:1, msg:45})
console.log("🚀 ~ file: Quizz.vue ~ line 18 ~ getScore", getScore())
const test = getScore()
// +++++++++++++++++++ END TEST +++++++++++++++++++++++++++




// function checkResponse
function checkResponse() {
  GoodAnswer()
  goodanswersList.value.push(
    isGoodAnswer.value
  );
  nextButton.value = 1;
}

function GoodAnswer (){
  isGoodAnswer.value=  props.q_data[index.value].response === +selected.value;
}

function nextQuestion() {
  index.value = index.value + 1;
  nextButton.value = !nextButton.value;
  selected.value = null;
}

const percentStage = computed(()=>{
    return (index.value + 1) / props.q_data.length *100
    
})

const isEnd = computed(()=>{
  return props.q_data.length === index.value+1
})



// Styles function border and background

function classRessult (currentId){
  return{
    green : (currentId=== props.q_data[index.value].response) && nextButton.value,
    red : (currentId !== props.q_data[index.value].response && selected.value == currentId) && nextButton.value
  }
}

function selectGoodResponse(){
  return props.q_data[index.value].choix.filter(n=> n.id ===props.q_data[index.value].response )[0]
}






</script>

<template>
  <div class="shadow-lg p-5 bg-white rounded-lg">
    <div>
        <!-- {{test}} -->
        <div :key="q_data[index].id ">
            <p class="text-center text-bv-green font-bold">Question 
              <transition name="slide-fade" mode="out-in">
                <span>{{ index +1 }} </span>
              </transition>
                sur {{q_data.length}}</p>
          <h3 class="mt-4">{{ q_data[index].title }}</h3>
          
        </div>
   
    <div class="relative h-2 overflow-hidden rounded-lg mb-8 mt-8 bg-bv-blue-bg">
        <div id="stepper" class="bg-bv-green rounded-lg h-2" :style="{width:percentStage+'%'}"> </div>
    </div>
    <transition name="slide-fade" mode="out-in">
        <div :key="q_data[index].id">
          <!-- <div v-for="n in q_data.choix" :key="n.id">{{n.choice}}</div> -->
          <div class="flex flex-col gap-4">
            <template v-for="n in q_data[index].choix" :key="n.id">
              <label class="flex gap-4 h-20 items-center border p-5 rounded-lg hover:bg-bv-blue-bg transition cursor-pointer" :class="classRessult(n.id)" :for="n.id">
                <input
                  type="radio"
                  :value="n.id"
                  :name="q_data.id"
                  :id="n.id"
                  v-model="selected"
                />
                <span>{{ n.choice }}</span>
                <!-- Affichage des puces réponses -->
                <span v-if="nextButton" class="ml-auto"  >   <!-- Si le boutton next est actif -->
                 
                  <img v-if="q_data[index].response === n.id"  src="@images/icones/green-check.svg" alt="">      <!-- Si la reponse attendue == réponse selected -->
                   <!-- if not good answer et que la reponse est fausse -->
                  <img v-if="!isGoodAnswer && (q_data[index].response != n.id) && selected === n.id" class="ml-auto"  src="@images/icones/false.svg" alt="">  
                </span>
               
                
              </label>
              
            </template>
          </div>
        </div>
       
      </transition>
      <div class="mt-5" v-if=" nextButton"  >
        <span class=" block  p-5 bg-bv-blue-bg" v-if="(selected === q_data[index].response) " >
          <span class="flex gap-3 mb-3"><h3>Bonne réponse !</h3> <img src="@images/icones/green-check.svg" alt=""></span>
          <P v-html="q_data[index].tips"></P>
        </span>
        <span class=" block  p-5 bg-bv-blue-bg" v-else >
          <span class="flex gap-3 mb-3"><h3>Bien essayé !</h3> <img src="@images/icones/false.svg" alt=""></span>
          <p class="font-bold mb-2">La réponse était: {{selectGoodResponse().choice}}</p>
          <P v-html="q_data[index].tips"></P>
        </span>
        
         
        </div>
    </div>

    <!-- ================ CONTROLS BUTTONS =============== -->
    <div class="flex justify-end gap-5 mt-8">
        <a class="underline p-3 mr-3" v-if=" index>0" href="#" @click.prevent="index--">
            Retour à la question précédente
        </a>
        <button
          v-if="!nextButton "
          class="flex gap-3 items-center rounded-lg p-3 mr-3 bg-bv-purple text-white"
          @click.prevent="checkResponse"
        >
          <span>Je valide mon choix</span><img class="h-3" src="@images/icones/coche.png" alt="">
        </button>
        <button
          v-else-if="!isEnd "
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
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  // transform: translateX(10px);
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

.green{
  border-color:#3F8627;
  background:rgba(63, 134, 39, 0.08) ;
}
.red{
  border-color:#FA7561;
  background:rgba(250, 117, 97, 0.08) ;
}
</style>
