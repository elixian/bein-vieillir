<script setup>
import BadgesTag from "@/components/ui/BadgesTag.vue";
import followArrow from "@/components/ui/FollowArrow.vue";
import CardShadow from "@/components/CardShadow.vue";
</script>

<template>

      <article
        class="relative grid grid-cols-12 gap-28 h-[620px] bg-bv-beige pr-44 pl-44  items-center"
      >
        <div class="2xl:col-span-7 col-span-5">
          <h1 class="text-bv-purple">Bien vieillir <span class="text-bv-green">en toute sérénité </span></h1>
          <p class="text-bv-purple pt-4 max-w-fit">
            Obtenez via des conseils, des témoignages  et des avis d’experts,
            toutes les clés pour avancer en âge sereinement.
          </p>
        </div>
        <div class="2xl:col-span-5  col-span-7 flex justify-between">
          <div class="relative">
            <img class="h-72" src="@images/couple.png" alt="">
            <img class="absolute -bottom-4 " src="@images/arrow-twist.svg" alt="">
            <img class="absolute bottom-24 -right-24" src="@images/bulle-dialog.svg" alt="">
            <img class="absolute top-2 -right-20" src="@images/ampoule.png" alt="">
          </div>
            
        </div>
        <div class="absolute flex justify-evenly  items-center gap-8 bottom-0 right-1/2 translate-y-1/2 translate-x-1/2 h-36 w-2/3 pr-9 pl-9 bg-white shadow-lg rounded-lg">
            <img src="@images/Group-186.png" alt="">
            <p class="font-bold">Vous voulez faire le plein d'idées et de conseils pour rester en forme ?</p>
            <button class=" bg-bv-purple leading-3 p-4 pr-8 pl-8 h-12 rounded-lg text-white">Je découvre les activités</button>
        </div>
      </article>
      <!--      A NE PAS LOUPER             -->
      <article class="grid grid-cols-12 gap-5 pr-44 pl-44 pt-32">
        <h2 class="col-span-full border-l-bv-green border-l-8  pl-2">À ne pas louper</h2>
        
          <div class="col-span-7 flex">
            <img
              src="../assets/images/drink-water.png"
              alt="femme qui boit de l'eau"
            />

            <CardShadow class="pl-5">
              <template v-slot:badge>Article</template>
              <template v-slot:title
                >Canicule: J'adore les bons réflexes</template
              >
              <template v-slot:content
                >En cas de fortes chaleurs, il y a des risques pour votre santé
                et celle de vos proches.</template
              >
            </CardShadow>
          </div>
          <div class="col-span-5 flex flex-col">
            <div class="flex flex-col gap-3">
              <CardShadow class="">
                <template v-slot:badge>Actualité</template>
                <template v-slot:title
                  >Le 39 77 numéro gratuit contre la maltraitance</template
                >
              </CardShadow>
              <CardShadow class="">
                <template v-slot:badge>Tag title</template>
                <template v-slot:title
                  >J’adapte mon logement en fonction de ma mobilité</template
                >
              </CardShadow>
            </div>
            
          </div>
          <div class="col-span-4">
            <CardShadow >
              <template v-slot:image>
                <img class="rounded-t-md w-full" src="@/assets/images/woman-horses.png" alt="">
              </template>
                  <template v-slot:badge>Ma vie sociale</template>
                  <template v-slot:title
                    >Vie associative ou citoyenne : et si je m'engageais ? </template
                  >
            </CardShadow>
          </div>
          <div class="col-span-4">
           
            <CardShadow >
              <template v-slot:image>
                <img class="rounded-t-md w-full" src="@/assets/images/stetoscope.png" alt="">
              </template>
                  <template v-slot:badge>Témoignage</template>
                  <template v-slot:title
                    >Être bien accompagné à ma sortie d'hospitalisation</template
                  >
            </CardShadow>
          </div>
          <div class="relative flex flex-col gap-3 col-span-4 bg-slate-200 p-5 pt-[109px] mt-12 rounded-md">
            <img class="absolute -top-4 left-1/4" src="@/assets/images/computer.svg" alt="">
            <div class="flex w-fit p-2  pl-3 pr-3 bg-blue-600 rounded-[40px] text-white ">
              Quizz
            </div>
            <h3>Je teste mes connaissances en matière d’alimentation</h3>
            <div class="flex gap-2 align-middle p-5 pt-3 pb-3 rounded-md bg-white w-max"><img class="w-[13px] -rotate-90" src="@/assets/images/icones/triangle.svg" alt=""> Relever le défi</div>
          </div>
        <!-- ===== Bien viellir a ma manière ==== -->
         <div class="col-span-full flex flex-grow p-44 pt-16 pb-20  gap-14 h-[355px] bg-bv-blue-bg justify-center items-center ">
            <div class="relative h-full  flex-grow">
              <img class=" absolute bottom-0 " src="@/assets/images/ppl-computing.png" alt="">
              <img class="absolute top-0 left-40" src="@/assets/images/sun.png" alt="">
            </div>
            <div class="flex flex-col justify-between h-full">
              <h2 class="text-bv-purple">Bien vieillir à ma manière !</h2>
              <p class="text-bv-grey-2 mt-5 flex-grow  ">Je réponds à un court questionnaire <br/>  et je découvre les articles, conseils et activités qui me correspondent !</p>
              <button class="bg-bv-purple text-white rounded-xl p-8 pt-4 pb-4 mt-8 w-fit ">Je réponds au questionnaire</button>
            </div>
         </div>
         <!-- =========== Pourbienvieillir.fr =========== -->
         <div class=" col-span-full flex justify-between pt-28">
            <div class="relative pt-3">
              <h2>Pourbienvieillir.fr, <br/> c'est ... </h2>
              <img class="absolute right-0 -bottom-2" src="@/assets/images/arrow-twist.svg" alt="flèche">
            </div>
            <div class="flex  gap-[50px] justify-evenly flex-grow ">
              <div> <h1 class="text-bv-green">30 000</h1> <p class="font-bold">conseils et astuces <br/>
              pour vieillir en sérénité</p></div>
              <div> <h1 class="text-bv-green">10 000</h1> <p class="font-bold">activités partout en France</p></div>
              <div> <h1 class="text-bv-green">200</h1> <p class="font-bold">Quizz dédiés au bien vieillir</p></div>
            </div>
       
         </div>
      </article>

</template>
