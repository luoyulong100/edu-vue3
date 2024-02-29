import type { setBlockTracking } from 'vue';
<template>
  <el-aside>
    <el-scrollbar>
      <el-menu router unique-opened :collapse="isCollapse">
        <a href="/" class="logo">
          <img src="@/assets/logo.svg" alt="" />
          <h1>MyPage</h1>
        </a>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><IEpSetting /></el-icon> <span> 权限管理 </span>
          </template>
          <el-menu-item index="/menus">
            <el-icon><IEpSetting /></el-icon> <span> 菜单列表 </span>
          </el-menu-item>
          <el-menu-item index="/resources">
            <el-icon><IEpSetting /></el-icon> <span> 资源列表 </span>
          </el-menu-item>
          <el-menu-item index="/roles">
            <el-icon><IEpSetting /></el-icon> <span> 角色列表 </span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/users">
          <el-icon><IEpSetting /></el-icon> <span> 用户管理 </span>
        </el-menu-item>

        <el-menu-item index="/course">
          <el-icon><IEpSetting /></el-icon> <span> 课程管理 </span>
        </el-menu-item>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><IEpSetting /></el-icon> <span> 广告管理 </span>
          </template>
          <el-menu-item index="/advertisement">
            <el-icon><IEpSetting /></el-icon> <span> 广告列表 </span>
          </el-menu-item>
          <el-menu-item index="/advertising-space">
            <el-icon><IEpSetting /></el-icon> <span> 广告位管理 </span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import { isCollapse } from './isCollapse'
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #eee;
  height: 100vh;
  width: auto;
}
.el-menu {
  background-color: #eee;
  border-right: none;
  width: 200px;
  &.el-menu--collapse {
    width: 60px;
    & h1 {
      display: none; //隐藏“MyPage”h1标签
    }
  }
}
.logo {
  display: flex;
  justify-content: center; //水平居中
  align-items: center; //垂直居中
  height: 60px;
  text-decoration: none; //隐藏链接下划线
  color: #000;
  img {
    width: 32px;
    height: 32px;
  }
}
</style>
