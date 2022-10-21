<script setup>
 import data_quizz from "@/data/quizz.json"
 import Quizz from "@/components/Quizz.vue"
 import LayoutFull from "@/layouts/LayoutFull.vue"
const getAlimentation = ()=>{
    const {alimentation} = data_quizz;
    console.log("🚀 ~ file: QuizzPage.vue ~ line 5 ~ getAlimentation ~ alimenation", alimentation)
    return alimentation
}
const questions =  getAlimentation().questions
console.log("🚀 ~ file: QuizzPage.vue ~ line 9 ~ questions", questions)
</script>

<template>
        <div class="absolute bg-bv-blue-bg h-80 w-full"></div>
        <LayoutFull class="pt-5 pb-52">
            Accueil > <span>Bien dans mon corps</span>
            

            <div class="grid grid-cols-12 mt-5">
                <div class="col-start-3 col-end-11">
                    <h2>Qwizz - Alimentation</h2>
                    
                    <p class="text-bv-grey-2 mt-5 ">Savez-vous vraiment tout ce qu’il faut savoir pour avoir une alimentation saine ? 
                    On vous met au défi !</p>
                    <Quizz class=" mt-5" :q_data="questions" />
                </div>
                
            </div>
        </LayoutFull>
    
</template>