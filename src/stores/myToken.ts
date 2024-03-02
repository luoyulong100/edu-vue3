import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Token {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: string
  user_id: string
}
export const useTokenStore = defineStore('myToken', () => {
  const tokenJson = ref('')

  const token = computed<Token>(() => {
    try {
      return JSON.parse(tokenJson.value || window.localStorage.getItem('tokenInfo') || '{}')
    } catch (err) {
      ElMessage.error('Json字符串格式不正确，转化对象时失败...')
      window.localStorage.setItem('tokenInfo', '')
      throw err
    }
  })

  function saveToken(data: string) {
    tokenJson.value = data
    window.localStorage.setItem('tokenInfo', data)
  }

  return { token, saveToken }
})
