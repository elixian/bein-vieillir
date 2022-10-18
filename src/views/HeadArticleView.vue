<script setup>
import LongCard from "@/components/ui/LongCard.vue";
import myhead_data from "../data/myhead.json";

const { stress,psychologie } = myhead_data;
console.log("🚀 ~ file: HeadArticleView.vue ~ line 6 ~ stress", psychologie);
</script>

<template>
  <article
    class="grid relative grid-cols-12 auto-rows-min h-[403px] bg-bv-beige pt-9 pr-44 pl-44 z-0"
  >
    <img
      class="absolute bottom-0 right-2 -z-10"
      src="@images/myhead/bg-alpiniste.svg"
      alt=""
    />
    <div class="breadcrumb col-span-full mb-14">
      <router-link class="hover:text-bv-green transition" to="/"
        >Accueil</router-link
      >
      > <span>Ma tête</span>
    </div>
    <div class="2xl:col-span-5 col-span-7">
      <h2 class="text-bv-green text-2xl">
        Bien dans ma tête, pourquoi est-ce important ?
      </h2>
      <p class="2xl:col-span-7 col-span-5 mt-8 w-3/4">
        Bouger tous les jours, échanger avec d’autres, stimuler l’esprit sont
        des habitudes qui permettent de rester dans le mouvement et de préserver
        sa forme et son moral.
      </p>
    </div>
  </article>
  <article class="grid grid-cols-12 pr-44 pl-44 pt-10">
    <div class="col-start-3 col-span-8">
      <h2 class="mb-5">Stress</h2>
      <LongCard
        v-for="(s, i) in stress"
        :key="i"
        class="mb-5"
        :url="s.url"
        :title="s.title"
        :content="s.content"
      />
      <div class="flex rounded-lg shadow-lg h-52 bg-blue-200 overflow-hidden cursor-pointer">
        <div class="flex-shrink-0">
          <img class="h-full" src="@images/computer.svg" alt="" />
        </div>

        <div class="p-5 flex flex-col">
          <h4>{{ title }}</h4>
          <p>{{ content }}</p>
        </div>
      </div>


      <h2 class="mb-5 mt-12">Psychologie</h2>
      <LongCard
        v-for="(psy, id) in psychologie"
        :key="id"
        class="mb-5"
        :url="psy.url"
        :title="psy.title"
        :content="psy.content"
      />
    </div>
  </article>
</template>
