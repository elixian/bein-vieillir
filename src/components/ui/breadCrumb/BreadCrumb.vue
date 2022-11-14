<template>
  <div class="absolute w-full m-auto top-20 left-0 z-10" v-if="route.meta.breadcrumb">
    <ol class="flex gap-2 m-auto max-w-8xl p-8 pl-44 pr-44">
      <li class="chevron flex justify-end pr-2 pl-2">
        <router-link class="hover:underline" to="/">Accueil</router-link>
      </li>
      <li
        class="chevron flex justify-end pr-1 pl-1 "
        v-for="(ariane, i) in route.meta.breadcrumb"
        :key="i"
        @mouseup="goTo(ariane.link)"
      >
        {{ ariane.name }}
      </li>
    </ol>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const route = ref(useRoute());
const router = useRouter();
console.log("🚀 ~ file: BreadCrumb.vue ~ line 12 ~ route", route);

function goTo(name) {
  console.log("🚀 ~ file: BreadCrumb.vue ~ line 21 ~ goTo ~ name", name);

  if (name) {
    router.push({ name: name });
  }
}
</script>

<style lang="scss" scoped>
.chevron:not(:last-child) {
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
    
  }
  &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    left: 100%;
    transform: translateY(50%);
    background: url(@images/icones/chevron-right.svg) no-repeat;
  }
}

li:last-child {
  font-weight: bold;
}
</style>
