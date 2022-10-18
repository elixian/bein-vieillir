<script setup>
import FollowArrow from "@/components/ui/FollowArrow.vue"
import BadgesTag from "./ui/BadgesTag.vue";

</script>

<template>
    <div class="card flex flex-col  ">
        <slot name="image"></slot>
        <div class=" flex flex-col p-5">
            <BadgesTag class="mt-3"><slot name='badge'></slot></BadgesTag>
            <h3 class="mt-2"><slot name='title'></slot></h3>
            <p class="mt-2 text-bv-grey-2 flex-grow align-bottom"><slot name='content'></slot></p>
            <followArrow class="self-end"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card{
        background: #ffff;
        filter: drop-shadow(0px 2px 16px rgba(45, 47, 127, 0.05));
        
    }
</style>