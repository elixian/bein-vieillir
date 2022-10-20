<template>
    <div class="longcard flex rounded-lg shadow-lg h-52  overflow-hidden cursor-pointer">
        <div class="w-[255px] flex-shrink-0 overflow-hidden bg-red-300 ">
            <img class=" w-[255px] h-full" :src="getImageUrl(url)" alt="">
        </div>
       
        <div class="p-5 flex flex-col gap-5 bg-white">
            <h3>{{title}}</h3>
            <p class="text-bv-grey-2 ">{{content}}</p>
        </div>
    </div>
</template>

<script setup>

function getImageUrl(name) {
   return new URL(`/src/assets/images/myhead/${name}`, import.meta.url).href

}



const props = defineProps({
  "url": String,
  'title': String,
  'content':String
});
</script>

<style lang="scss" scoped>
img{
    transition: transform 0.8s ease-in-out;
}
.longcard:hover img{

    
    transform:scale(1.08);
   
}
</style>