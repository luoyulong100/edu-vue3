<template>
  <div class="common-layout">
    <el-container>
      <appAside />
      <el-container class="header-and-main">
        <appHeader />
        <el-main>
          <el-scrollbar>
            <!-- 路由出口 -->
            <RouterView />
          </el-scrollbar>
        </el-main>
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
  height: 100vh;
}
.el-main {
  background-color: #f4f4f5;
  padding-right: 0;
}
</style>
