<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
const hello = ref('Hello App')
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
