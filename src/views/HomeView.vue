<script setup>
import BadgesTag from "@/components/ui/BadgesTag.vue";
import followArrow from "@/components/ui/FollowArrow.vue";
import CardShadow from "@/components/CardShadow.vue";
</script>

<template>
  <main>
    <section class="pt-[104px]">
      <article
        class="grid grid-cols-12 gap-5 h-[620px] bg-bv-beige pr-44 pl-44 pt-16"
      >
        <div class="col-span-6">
          <h1>J'avance en âge <span class="text-bv-green">en santé</span></h1>
          <p class="text-bv-purple">
            Obtenez via des conseils, des témoignages et des avis d’experts,
            toutes les clés pour avancer en âge sereinement.
          </p>
        </div>
      </article>
      <!--      A NE PAS LOUPER             -->
      <article class="grid grid-cols-12 gap-5 pr-44 pl-44 pt-32">
        <h2 class="col-span-full">À ne pas louper</h2>
        <!-- <div class="col-span-full grid grid-cols-12 gap-5 h-[406px]"> -->
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
            <img class="rounded-t-md w-full" src="@/assets/images/woman-horses.png" alt="">
            <CardShadow class="mt-3">
                  <template v-slot:badge>Ma vie sociale</template>
                  <template v-slot:title
                    >Vie associative ou citoyenne : et si je m'engageais ? </template
                  >
            </CardShadow>
          </div>
          <div class="col-span-4">
            <img class="rounded-t-md w-full" src="@/assets/images/stetoscope.png" alt="">
            <CardShadow class="mt-3">
                  <template v-slot:badge>Témoignage</template>
                  <template v-slot:title
                    >Être bien accompagné à ma sortie d'hospitalisation</template
                  >
            </CardShadow>
          </div>
          <div class="col-span-4">
            <img class="rounded-t-md w-full" src="@/assets/images/woman-horses.png" alt="">
            <CardShadow class="mt-3">
                  <template v-slot:badge>Ma vie sociale</template>
                  <template v-slot:title
                    >Vie associative ou citoyenne : et si je m'engageais ? </template
                  >
            </CardShadow>
          </div>
             
        <!-- </div> -->
      </article>
    </section>
  </main>
</template>
