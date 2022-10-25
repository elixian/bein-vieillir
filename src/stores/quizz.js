import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'

export const useQuizzStore = defineStore('quizz', () => {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const score = reactive({
    test:0
  })




  return { score }
})
