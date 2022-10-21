<script setup>
 import data_quizz from "@/data/quizz.json"
 import Quizz from "@/components/Quizz.vue"
const getAlimentation = ()=>{
    const {alimentation} = data_quizz;
    console.log("🚀 ~ file: QuizzPage.vue ~ line 5 ~ getAlimentation ~ alimenation", alimentation)
    return alimentation
}
const questions =  getAlimentation().questions
console.log("🚀 ~ file: QuizzPage.vue ~ line 9 ~ questions", questions)
</script>

<template>
    <div>
        <Quizz :q_data="questions" />
    </div>
</template>