<script setup>
import {ref} from "vue"
import LayoutFull from "@/layouts/LayoutFull.vue"
const props = defineProps({
    megaMenu : Object
})
</script>

<style lang="scss" scoped>
.sub-menu{
    background: linear-gradient(to right,  rgb(241 245 249) 35%, white 35%, white 100%);
}
</style>

<template>
  
     <div
      class="sub-menu absolute flex top-20 left-0 h-[340px] w-full shadow-lg z-40  "
      v-if="megaMenu?.mega" 
    >
    <LayoutFull class="grid grid-cols-12 gap-5 mt-0 mb-0" >

        <div class="know-more pt-8 pr-8 col-span-5 h-full bg-slate-100 ">
                <h2 class="text-bv-green">{{megaMenu.title}}</h2>
                <p class="leading-7 mt-6">
                  {{megaMenu.mega.subtitle}}
                </p>
                <router-link class="flex gap-2 items-center justify-end mt-16" :to="megaMenu.mega.link.url">{{megaMenu.mega.link.label}}<span
                    ><img src="@/assets/images/icones/chevron-right.svg" alt="" /></span
                ></router-link>
          
          </div>
          <div class="sub-menu_link col-span-7 flex  pl-8 pt-8 bg-white ">
              <nav class=" flex gap-16" >
                <div class=" " v-for="sub in megaMenu.mega.submenu" :key="sub.title">
                    <h4 class="flex items-center"><span class=" w-2 border-2 border-bv-green mr-2"></span> {{sub.title}}</h4>
                <ul class="mt-6 leading-8 text-bv-grey-2" >
                  <li v-for="(link,i) in sub.links" :key="i">
                    <router-link :to="link.href">{{link.label}}</router-link>
                    </li>
          
                </ul>
                </div>
          
              </nav>
          </div>
    </LayoutFull>
     
    </div>
</template>