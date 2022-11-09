<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderNav from "@/components/header/HeaderNav.vue";
import Footer from "./components/Footer.vue";
import Propulsed from "./components/Propulsed.vue";
import BreadCrumb from "./components/ui/breadCrumb/BreadCrumb.vue";
</script>

<template>
  <HeaderNav />
  <main >
    <section class="pt-20">
      <bread-crumb />
      <RouterView />
    </section>
  </main>
  <Propulsed/>
  <Footer />
</template>
