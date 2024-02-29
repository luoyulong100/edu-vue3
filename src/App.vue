<script setup lang="ts">
import { RouterView } from 'vue-router'
import request from './utils/request'

request({
  method: 'GET',
  url: '/front/ad/getAdList'
}).then((res) => {
  console.log('res---', res)
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
