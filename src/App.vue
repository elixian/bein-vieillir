<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderNav from "@/components/HeaderNav.vue";
import Footer from "./components/Footer.vue";
import Propulsed from "./components/Propulsed.vue";
</script>

<template>
  <HeaderNav />
  <main >
    <section class="pt-[104px]">
      <RouterView />
    </section>
  </main>
  <Propulsed/>
  <Footer />
</template>
