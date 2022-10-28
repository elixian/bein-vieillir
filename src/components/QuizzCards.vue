<script setup>
import { computed, ref, unref } from "vue";

import StepperUi from "./ui/StepperUi.vue";
import CheckboxCard from "./ui/CheckboxCard.vue";

const props = defineProps({ q_data: Object });

const selectedCards = ref([])

const index = ref(0);


   function updateValue(e){
    console.log(e);
    selectedCards.value.find(v => v == e)? selectedCards.value = selectedCards.value.filter(n => n != e): selectedCards.value.push(+e)

    
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
          {{selectedCards}}
        </div>
   
    <stepper-ui :percentStage="percentStage"></stepper-ui>
    <transition name="slide-fade" mode="out-in">
        <div :key="q_data[index].id">
          <!-- <div v-for="n in q_data.choix" :key="n.id">{{n.choice}}</div> -->
          <div class="grid grid-cols-4 gap-4">
            <template v-for="n in q_data[index].choix" :key="n.id">
              
                <checkbox-card :data="n" v-on:modelValue="updateValue($event)">
                    <template v-slot:image>
                        <img src="@images/quizzCards/game-society.svg" alt="">
                    </template>
                    <template v-slot:label>
                            {{n.choice}}
                    </template>
                    <template v-slot:input>
                        
                    </template>
                </checkbox-card>
              
            </template>
          </div>
        </div>
       
      </transition>
   
    </div>

    <!-- ================ CONTROLS BUTTONS =============== -->
    <div class="flex justify-end gap-5 mt-8">
        <!-- <a class="underline p-3 mr-3" v-if=" index>0" href="#" @click.prevent="index--">
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
        </button> -->
    </div>
  </div>
</template>