<script setup>
import { ref, onMounted } from "vue";
import menus from "@/data/menu";
import MegaMenu from "./MegaMenu.vue";
import LayoutFull from "@/layouts/LayoutFull.vue";


let megaMenu = ref(null);

// let subMenu = ref(0);

function setAutoHideNav() {
  const header = document.getElementById("header");

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 400) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  };
}
function setMegaMenu(index) {
  megaMenu.value = menus[index];
}

onMounted(() => {
  setAutoHideNav();
});
</script>

<template>
  <header
    id="header"
    class="h-20 bg-white fixed w-full top-0 left-0 right-0 bottom-0 z-10"
  >
    <LayoutFull class="h-full">
      <!-- USE DATA -->

      <div class="flex h-full items-center align-middle gap-8">
        <img src="@/assets/images/logo-bien-vieillir.svg" alt="" srcset="" />
        <ul class="main-nav flex flex-grow justify-evenly gap-5">
          <li
            v-for="(menu, i) in menus"
            :key="i"
            @click="setMegaMenu(i)"
            class="hover:text-bv-green transition-colors duration-300"
          >
            <router-link :to="menu.url" v-if="menu.url">{{
              menu.title
            }}</router-link>
            <span v-else> {{ menu.title }}</span>
            <span v-if="menu.mega"
              ><img src="@/assets/images/icones/triangle.svg" alt=""
            /></span>
          </li>
        </ul>
        <div class="options flex gap-4">
          <div
            class="flex items-center justify-center bg-slate-50 rounded w-14 h-14"
          >
            <img src="@/assets/images/icones/loop.svg" alt="icone loupe" />
          </div>
          <img
            src="@/assets/images/icones/accessibilite.svg"
            alt="icone oeil"
          />
        </div>
      </div>
    </LayoutFull>
    <mega-menu :megaMenu="megaMenu" @mouseleave="megaMenu = null"></mega-menu>
  </header>
</template>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid #ebeef8;
}
ul.main-nav li {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

nav li {
  cursor: pointer;
}

#header {
  transition: all 0.5s ease-in-out;
  &.hide {
    top: -400px;
  }
}
</style>
