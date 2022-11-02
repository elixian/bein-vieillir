<template>
  <layout-full>
    <div class>
      Accueil > <span>Bien dans mon corps</span> >
      <span class="font-bold">Votre résultat</span>
    </div>

    <div class="grid grid-cols-12 gap-5 mt-10">
      <div class="flex flex-col gap-5 col-start-3 col-span-8">
        <h2>Vos résultats</h2>
        <div class="relative rounded-lg bg-bv-blue-bg text-center p-10">
          <div class="flex flex-col gap-5">
            <h1>Presque</h1>
            <div class="text-bv-green text-5xl font-bold">{{ result }}</div>
            <p class="w-2/5 m-auto">
              On a encore quelques petites choses à vous apprendre !
            </p>
          </div>
          <img
            class="absolute bottom-0 left-14"
            src="@images/man-result.png"
            alt="homme avec barbe"
          />
          <img
            class="absolute bottom-0 right-10"
            src="@images/woman-result.png"
            alt="homme avec barbe"
          />
        </div>
        <div class="p-5">
          <img class="float-left mr-5" src="@images/sport-1.png" alt="" />
          <div class="pt-2">
            <h2>Votre corps</h2>
            <p>
              Tout exercice, qui met votre corps en mouvement et l’amène à
              dépenser de l’énergie, est à prendre en compte : jardiner,
              bricoler, monter des escaliers, descendre une station plus tôt
              dans les transports en commun, faire les courses à pied ou
              promener son chien… Alors, multipliez les prétextes pour « bouger
              » !
            </p>
          </div>
        </div>

        <div>
          <h2 class="mb-5 pl-2 border-l-8 border-l-bv-green">
            Du contenu pour améliorer votre condition physique
          </h2>
          <div class="grid grid-cols-2 gap-5">
            <card-shadow>
              <template v-slot:image>
                <img
                  class="rounded-t-md w-full"
                  src="@/assets/images/horses.png"
                  alt=""
                />
              </template>
              <template v-slot:badge>Actualité</template>
              <template v-slot:title
                >Nos astuces pour faire de l’activité physique</template
              >
            </card-shadow>
            <card-shadow>
              <template v-slot:image>
                <img
                  class="rounded-t-md w-full"
                  src="@/assets/images/stretch.png"
                  alt=""
                />
              </template>
              <template v-slot:badge>Bien-être</template>
              <template v-slot:title>Gymnastique sur chaise</template>
            </card-shadow>
            <card-shadow>
              <template v-slot:image>
                <img
                  class="rounded-t-md w-full"
                  src="@/assets/images/yoga.png"
                  alt=""
                />
              </template>
              <template v-slot:badge>Actualité</template>
              <template v-slot:title>Trouver votre atelier</template>
            </card-shadow>
            <card-shadow >
              <template v-slot:image>
                <img
                  class="rounded-t-md w-full"
                  src="@/assets/images/jogger.png"
                  alt=""
                />
              </template>
              <template v-slot:badge>Actualité</template>
              <template v-slot:title>Trouver votre atelier</template>
            </card-shadow>
          </div>
        </div>
      </div>
    </div>
  </layout-full>
</template>

<script setup>
import LayoutFull from "@/layouts/LayoutFull.vue";
import { useQuizzStore } from "@/stores/quizz";
import CardShadow from "@/components/CardShadow.vue";
import { computed } from "vue-demi";

const { getScore } = useQuizzStore();
const totalQuestions = getScore().length;
const countScore = getScore().filter((n) => n.result === true).length;

const result = computed(() => {
  return `${countScore}/${totalQuestions} `;
});
</script>
