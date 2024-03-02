<template>
  <div class="login">
    <el-form :model="form" ref="formRef" label-position="top" size="large" :rules="rules">
      <h2>登录</h2>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="isLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useTokenStore } from '@/stores/myToken'
import { login } from '@/aip/users'
import type { FormInstance, FormRules } from 'element-plus'
import { ref } from 'vue'

const form = ref({
  phone: '18201288771',
  password: '111111'
})
const formRef = ref<FormInstance>()
const isLoading = ref(false)
const store = useTokenStore()
const router = useRouter()
const route = useRoute()

//定义表单校验规则
const rules = ref<FormRules>({
  phone: [
    {
      required: true,
      message: '电话号码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
      message: '手机号码不正确',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 18,
      message: '密码长度需要6~18位'
    }
  ]
})

//登录事件
const onSubmit = async () => {
  isLoading.value = true
  //表单校验
  await formRef.value?.validate().catch((err) => {
    ElMessage.error('表单校验失败...')
    isLoading.value = false
    throw err
  })
  //发送登录请求
  const data = await login(form.value).then((res) => {
    if (!res.data.success) {
      ElMessage.error('登录信息有误！')
      isLoading.value = false
      throw new Error('登录信息有误！')
    }
    return res.data
  })
  //保存token信息
  store.saveToken(data.content)
  isLoading.value = false
  //登陆
  ElMessage.success('登录成功！')
  router.push((route.query.redirect as string) || '/')
}
</script>

<style scoped lang="scss">
.login {
  background-color: #e9e9eb;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 300px;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    .el-form-item {
      margin-top: 20px;
    }
    .el-button {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
