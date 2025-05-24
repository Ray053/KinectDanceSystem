<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-form">
        <h2>登入</h2>
        <form @submit.prevent="handleLogin">
          <input 
            v-model="username" 
            type="text" 
            placeholder="使用者名稱" 
            required
          />
          <button type="submit" :disabled="isLoading">
            {{ isLoading ? '登入中...' : '登入' }}
          </button>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

const handleLogin = async () => {
  if (!username.value) {
    errorMessage.value = '請輸入使用者名稱';
    return;
  }
  
  isLoading.value = true;
  errorMessage.value = '';
  
  try {
    // 這裡簡化為只要輸入用戶名就可以登入
    // 在實際應用中，您應該向後端API發送請求驗證用戶憑證
    
    // 模擬API請求延遲
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // 存儲用戶信息到本地存儲
    const user = {
      id: Date.now().toString(),
      username: username.value,
      role: 'student',
      createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    
    // 跳轉到課程頁面
    router.push('/admin/courses');
  } catch (error) {
    console.error('登入錯誤:', error);
    errorMessage.value = '登入時發生錯誤，請稍後再試';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
}

.login-container {
  width: 600px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 12px;
  background: linear-gradient(116deg, rgba(255, 255, 255, 0.20) 33.48%, rgba(153, 153, 153, 0.20) 96.52%);
  box-shadow: 0px 0px 8.7px 0px rgba(255, 255, 255, 0.50) inset;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.login-form h2 {
  margin-bottom: 20px;
  color: white;
}

.login-form form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form input {
  margin-bottom: 15px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
}

.login-form button {
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  max-width: 300px;
  transition: background-color 0.3s;
}

.login-form button:hover {
  background-color: #0056b3;
}

.login-form button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.error-message {
  color: #ff6b6b;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}
</style>