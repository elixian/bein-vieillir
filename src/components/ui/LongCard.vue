<template>
    <div class="longcard flex rounded-lg shadow-lg h-52  overflow-hidden cursor-pointer">
        <div class="w-[255px] flex-shrink-0 overflow-hidden bg-red-300 ">
            <img class=" w-[255px] h-full" :src="`../src/assets/images/myhead/${url}`" alt="">
        </div>
       
        <div class="p-5 flex flex-col  bg-white">
            <h4>{{title}}</h4>
            <p>{{content}}</p>
        </div>
    </div>
</template>

<script setup>
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

    
    transform:scale(1.1);
   
}
</style>