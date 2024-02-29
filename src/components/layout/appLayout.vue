<template>
  <div class="common-layout">
    <el-container>
      <appAside />
      <el-container class="header-and-main">
        <appHeader />
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import appAside from './appAside.vue'
import appHeader from './appHeader.vue'
</script>

<style lang="scss" scoped>
.header-and-main {
  flex-direction: column; //整体垂直显示
}
</style>
