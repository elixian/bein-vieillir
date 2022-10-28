<script setup>
const {percentStage}= defineProps({
    percentStage:Number
})

</script>

<template>
    <div class="relative h-2 overflow-hidden rounded-lg mb-8 mt-8 bg-bv-blue-bg">
        <div id="stepper" class="bg-bv-green rounded-lg h-2" :style="{width:percentStage+'%'}"> </div>
    </div>
</template>


<style scoped lang="scss">
#stepper{
  position:absolute;
  top:0;
  left:0;

  width: 0%;
  z-index: 1;
//   background:#3F8627;
  transition: width 1s ease-out;
}

</style>