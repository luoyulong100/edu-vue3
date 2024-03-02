<template>
  <el-header>
    <!-- 图标 -->
    <el-icon @click="isCollapse = !isCollapse">
      <IEpExpand v-show="isCollapse" />
      <IEpFold v-show="!isCollapse" />
    </el-icon>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="32" :src="userInfo.portrait" />
        <el-icon class="el-icon--right">
          <IEpArrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>{{ userInfo.userName }}</el-dropdown-item>
          <el-dropdown-item divided @click="handleUserLogout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script setup lang="ts">
import { useTokenStore } from '@/stores/myToken'
import { getInfo, userLogout } from '@/aip/users'
import { isCollapse } from './isCollapse'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useTokenStore()
const userInfo = ref({ portrait: '', userName: '' })

//用户数据
const isGetInfo = () => {
  getInfo().then((res) => {
    userInfo.value = res.data.content
  })
}

//退出登录
const handleUserLogout = async () => {
  await ElMessageBox.confirm('确认登出？', '退出询问', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      userLogout()
      store.saveToken('')
      router.push({ name: 'Login' })
      ElMessage.success('已退出！')
    })
    .catch(() => {
      console.log('111')

      return new Promise(() => {})
    })
}

onMounted(() => {
  isGetInfo()
})
</script>

<style scoped lang="scss">
.el-header {
  display: flex;
  align-items: center;
  background-color: #dedfe0;
  .el-icon {
    margin-right: 17px;
    :hover {
      color: #409eff;
    }
  }
}
.el-dropdown {
  margin-left: auto;
  :focus {
    outline: 0; //取消用户代理样式表
  }
  .el-dropdown-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
