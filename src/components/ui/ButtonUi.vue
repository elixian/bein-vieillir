<template>
<button class=" w-fit bg-bv-purple hover:bg-bv-blue-hover transition duration-300 leading-3 p-4 pr-8 pl-8 h-12 rounded-lg text-white" @mouseup="changeRoute($event)">
    <slot/>
</button>

</template>

<script setup >
import {defineProps} from 'vue';
import {useRouter } from 'vue-router'
const props = defineProps({
    path: String
})
const router = useRouter();


function changeRoute(e){
    if(props.path){
        router.push({path: props.path})
    } 
     e.preventDefault();
    
}

</script>