import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'
import { objectToString } from '@vue/shared'

export const useQuizzStore = defineStore('quizz', () => {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const quizz = ref([])

function getScore(){
  return quizz.value
}
  function setScore(_obj){
    
    quizz.value.push(_obj)
    quizz.value.push("_obj")
    // quizz.score = {_obj,{ff:5,rr:3}} 
  
  }


  return { getScore, setScore }
})
