<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderNav from "@/components/HeaderNav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <HeaderNav />
  <main >
    <section class="pt-[104px]">
      <RouterView />
    </section>
  </main>
  <Footer />
</template>
