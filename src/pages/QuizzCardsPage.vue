<script setup>
 import data_quizz from "@/data/quizzcards.json"
 import QuizzCards from "@/components/QuizzCards.vue"
 import LayoutFull from "@/layouts/LayoutFull.vue"
 import { onMounted} from 'vue';

onMounted(()=>{
    window.scrollTo(0, -100)
})
const getAlimentation = ()=>{
    const {module} = data_quizz;
    return module
}
const questions =  getAlimentation().questions

</script>

<template>
        <div class="absolute bg-bv-blue-bg h-80 w-full"></div>
        <LayoutFull class="pt-5 pb-52">
            

            <div class="grid grid-cols-12 mt-5 pt-14">
                <div class="col-start-3 col-end-11">
                    <h2 class="text-bv-green">Découvrez des articles et des conseils sur mesure !</h2>
                    
                    <p class="text-bv-grey-2 mt-5 ">Répondez à 4 questions, et nous vous proposerons des contenus adaptés à vos besoins et vos attentes...</p>
                    <QuizzCards class=" mt-5" :q_data="questions" />
                </div>
                
            </div>
        </LayoutFull>
    
</template>