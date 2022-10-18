<template>
  <header
    class="h-[104px] bg-white fixed w-full top-0 left-0 right-0 bottom-0 pr-44 pl-44 z-10"
  >
    <div class="flex h-full items-center align-middle">
      <img src="@/assets/images/logo-bien-vieillir.svg" alt="" srcset="" />

      <ul class="main-nav flex flex-grow justify-evenly gap-5 ">
        <li v-for=" name, i in dataMenu" :key="i" @click="subMenu = i===1 &&!subMenu"  class="hover:text-bv-green transition-colors duration-300 ">
          <router-link to="/" v-if="i===0">{{name.label}}</router-link>
          <span v-else> {{name.label}}</span>
          <span v-if="name.img"><img src="@/assets/images/icones/triangle.svg" alt="" /></span>
        </li>

      </ul>
      <div class="options flex gap-4">
        <div
          class="flex items-center justify-center bg-slate-50 rounded w-14 h-14"
        >
          <img src="@/assets/images/icones/loop.svg" alt="icone loupe" />
        </div>
        <img src="@/assets/images/icones/accessibilite.svg" alt="icone oeil" />
      </div>
    </div>
    
      <!-- *******  MEGA MENU  ******* -->
    <div
      class="sub-menu absolute flex top-[104px] left-0 h-[340px] w-full shadow-lg z-10 bg-white"
      v-if="subMenu" @mouseleave.prevent="subMenu=0"
    >
      <div class="know-more pl-44 pt-8 pr-16 bg-slate-100 h-full w-1/3">
        <h2 class="text-bv-green">Ma tête</h2>

        <p class="leading-7 mt-6">
          Une bonne estime de soi nous aide à reconnaitre nos besoins et à les
          exprimer, elle nous donne le pouvoir de dire non.
        </p>
        <router-link class="flex gap-2 items-center justify-end mt-16" to="/matete">En savoir plus<span
            ><img src="@/assets/images/icones/chevron-right.svg" alt="" /></span
        ></router-link>
     
      </div>
      <div class="sub-menu_link flex gap-16 pl-8 pt-8 ">
          <nav>
            <h4 class="flex items-center"><span class=" w-2 border-2 border-bv-green mr-2"></span> Stress</h4>
            <ul class="mt-6 leading-8 text-bv-grey-2">
              <li>Continuer à apprendre</li>
              <li>Stress et émotions</li>
            </ul>
          </nav>
          <nav>
            <h4 class="flex items-center"><span class=" w-2 border-2 border-bv-green mr-2"></span>Psychologie</h4>
            <ul class="mt-6 leading-8 text-bv-grey-2">
              <li>Penser à soi</li>
              <li>Amour et affection</li>
              <li>Entourage et bien-être</li>
              <li>Alimentation plaisir</li>
              <li>Le corps et la tête</li>
            </ul>
          </nav>
          <nav>
            <h4 class="flex items-center"><span class=" w-2 border-2 border-bv-green mr-2"></span>Mémoire</h4>
            <ul class="mt-6 leading-8 text-bv-grey-2">
              <li>Tchat sur la mémoire</li>
              <li>Mémoire active</li>
            </ul>
          </nav>
      </div>
    </div>
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


</style>

<script setup>
import { ref} from "vue"
let subMenu = ref(0);

let dataMenu = ref([
  {label:'Actualité', img:0, url:'/'},
  {label:'Ma tête', img:1},
  {label:'Mon corps', img:1},
  {label:'Mon logement', img:1},
  {label:'Les autres', img:1},
  {label:'Pour les pros', img:1},
  

])
</script>
