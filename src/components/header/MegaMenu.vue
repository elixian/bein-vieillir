<script setup>
import {ref} from "vue"
const props = defineProps({
    megaMenu : Object
})
</script>

<template>
  
     <div
      class="sub-menu absolute flex top-20 left-0 h-[340px] w-full shadow-lg z-10 bg-white"
      v-if="megaMenu?.mega" 
    >
      <div class="know-more pl-44 pt-8 pr-16 bg-slate-100 h-full w-1/3">
        <h2 class="text-bv-green">{{megaMenu.title}}</h2>
    
        <p class="leading-7 mt-6">
          {{megaMenu.mega.subtitle}}
        </p>
        <router-link class="flex gap-2 items-center justify-end mt-16" :to="megaMenu.mega.link.url">{{megaMenu.mega.link.label}}<span
            ><img src="@/assets/images/icones/chevron-right.svg" alt="" /></span
        ></router-link>
     
      </div>
      <div class="sub-menu_link flex gap-16 pl-8 pt-8 ">
          <nav>
            <template v-for="sub in megaMenu.mega.submenu" :key="sub.title">
                <h4 class="flex items-center"><span class=" w-2 border-2 border-bv-green mr-2"></span> {{sub.title}}</h4>
            <ul class="mt-6 leading-8 text-bv-grey-2" >
              <li v-for="(link,i) in sub.links" :key="i">
                <router-link :to="link.href">{{link.label}}</router-link>
                </li>
             
            </ul>
            </template>
            
          </nav>
      </div>
    </div>
</template>