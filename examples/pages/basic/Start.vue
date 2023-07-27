<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  SzMap.ready().then(() => {
    const viewer = new SzMap.Viewer('viewer-container')
  })
})

</script>
<template>
  <div>
    <div id="viewer-container" class="map" style="height: 500px;"></div>
  </div>
</template>
<style scoped>
.map {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>



