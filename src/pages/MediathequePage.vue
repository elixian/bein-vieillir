<script setup>
import LayoutFull from "@/layouts/LayoutFull.vue";
</script>

<template>
  <div class="bg-bv-blue-bg pt-8 pb-8">
    <LayoutFull>
      <div class="breadcrumb col-span-full mb-10">
        <router-link class="hover:text-bv-green transition" to="/"
          >Accueil</router-link
        >
        >
        <span class="font-bold">Médiathèque</span>
      </div>
      <div class="grid grid-cols-12">
        <div class="col-start-2 col-end-12">
          <h1 class="text-3xl text-bv-green mb-5">Médiathèque</h1>
          <p class="text-lg">
            Ici sont réunies toutes les brochures grand public Bien vieillir
            présentes sur le site. Elles s’adressent aux seniors et personnes
            âgées, mais aussi aux aidants et sont gratuites, disponibles en
            téléchargement et à la commande. Réalisées avec différents
            partenaires, elles apportent les clés pour un vieillissement en
            santé.
          </p>
        </div>
      </div>
    </LayoutFull>
  </div>
</template>
