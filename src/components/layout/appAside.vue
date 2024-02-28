import type { setBlockTracking } from 'vue';
<template>
  <el-aside>
    <el-menu>
      <el-sub-menu>
        <template #title>
          <el-icon><IEpSetting /></el-icon> <span> 权限管理 </span>
        </template>
        <el-menu-item>
          <el-icon><IEpSetting /></el-icon> <span> 菜单列表 </span>
        </el-menu-item>
        <el-menu-item>
          <el-icon><IEpSetting /></el-icon> <span> 资源列表 </span>
        </el-menu-item>
        <el-menu-item>
          <el-icon><IEpSetting /></el-icon> <span> 角色列表 </span>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item>
        <el-icon><IEpSetting /></el-icon> <span> 用户管理 </span>
      </el-menu-item>

      <el-menu-item>
        <el-icon><IEpSetting /></el-icon> <span> 课程管理 </span>
      </el-menu-item>

      <el-sub-menu>
        <template #title>
          <el-icon><IEpSetting /></el-icon> <span> 广告管理 </span>
        </template>
        <el-menu-item>
          <el-icon><IEpSetting /></el-icon> <span> 广告列表 </span>
        </el-menu-item>
        <el-menu-item>
          <el-icon><IEpSetting /></el-icon> <span> 广告位管理 </span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.el-aside {
  background-color: #eee;
  height: 100vh;
  width: auto;
}
.el-menu {
  background-color: #eee;
  width: 200px;
}
</style>
