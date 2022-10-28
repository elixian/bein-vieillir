<template>
    <label class=" flex flex-col items-center p-4 gap-4 border border-bv-grey-2 rounded-lg min-h-full cursor-pointer" :for="data.id">
        <div class="h-10 w-10 rounded-full bg-slate-100  "><slot name="image"></slot></div>
        <p class="flex-grow"><slot name="label"></slot></p>
        <slot name="input"><input type="checkbox" :value="data.id" :id="data.id" aria-label="test"
@input="(e)=> $emit('modelValue', e.target.value)"></slot>
        
    </label>
</template>

<script setup>
import { computed } from "vue-demi"

    const props = defineProps({
        data:Object
    })

    computed(()=>{

    })
</script>
