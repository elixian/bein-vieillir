<template>
    <div class="relative flex flex-col items-center p-4 gap-4  min-h-full cursor-pointer transition select-none " @click="toggleCLass">
    
    <div class="h-10 w-10 rounded-full bg-slate-100"><slot name="image"></slot></div>
    <p class="flex-grow  select-none">
        <slot  name="label"></slot>
    </p>
    <slot name="input"><input class="flex-grow select-none pointer-events-none" type="checkbox" :value="data.id" :id="data.id" aria-label="test"
@input="(e)=> $emit('modelValue', e.target.value)"></slot>
<label class="absolute top-0 lef-0 h-full w-full  z-10 border border-bv-grey-2 rounded-lg cursor-pointer " :for="data.id" ></label>
    </div>

</template>

<script setup>
import { computed } from "vue-demi"

    const props = defineProps({
        data:Object
    })

    function toggleCLass(e){
        console.log("🚀 ~ file: CheckboxCard.vue ~ line 23 ~ toggleCLass ~ e", e)
        e.target.parentElement.classList.toggle('selected')
       
        
    }


</script>


<style lang="scss" scoped>
input:checked + label{
    background: rgba(0, 166, 226, 0.1);
    border : 3px solid #3455DB;
}
.selected{
    label{
        background: rgba(0, 166, 226, 0.1);
    border : 3px solid #3455DB;
    }
   
 
    & > div {
        background: white;
    }
}

</style>