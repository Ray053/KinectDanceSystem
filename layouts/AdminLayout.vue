<template>
    <div class="admin-layout">
      <!-- 側邊導航 -->
      <aside class="sidebar" :class="{ 'collapsed': sidebarCollapsed }">
        <div class="sidebar-header">
          <div class="logo-container">
            <img src="/assets/logo.png" alt="Logo" class="logo" v-if="!sidebarCollapsed" />
            <!-- <img src="/logo-icon.svg" alt="Logo" class="logo-icon" v-else /> -->
          </div>
          <button @click="toggleSidebar" class="collapse-btn">
            <PanelLeftClose v-if="sidebarCollapsed" class="icon" />
            <PanelLeft v-else class="icon" />
          </button>
        </div>
  
        <nav class="sidebar-nav">
          <ul>
            <li>
              <router-link to="/admin/courses" class="nav-link" :class="{ active: currentRoute === 'courses' }">
                <BookOpen class="nav-icon" />
                <span v-if="!sidebarCollapsed">課程</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/learning-history" class="nav-link" :class="{ active: currentRoute === 'learning-history' }">
                <History class="nav-icon" />
                <span v-if="!sidebarCollapsed">學習歷程</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/motion-analysis" class="nav-link" :class="{ active: currentRoute === 'motion-analysis' }">
                <Activity class="nav-icon" />
                <span v-if="!sidebarCollapsed">動作分析</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/user-management" class="nav-link" :class="{ active: currentRoute === 'user-management' }">
                <Users class="nav-icon" />
                <span v-if="!sidebarCollapsed">用戶管理</span>
              </router-link>
            </li>
          </ul>
        </nav>
  
        <div class="sidebar-footer">
          <button class="logout-btn" @click="logout">
            <LogOut class="nav-icon" />
            <span v-if="!sidebarCollapsed">登出</span>
          </button>
        </div>
      </aside>
  
      <!-- 主要內容 -->
      <main class="main-content">
        <header class="top-header">
          <div class="page-title">
            <h1>{{ pageTitle }}</h1>
          </div>
          <div class="user-profile">
            <span class="username">{{ username }}</span>
            <div class="avatar">{{ userInitials }}</div>
          </div>
        </header>
  
        <div class="page-content">
          <!-- 使用 router-view 渲染子路由 -->
          <router-view></router-view>
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { 
    BookOpen, 
    History, 
    Activity, 
    Users, 
    LogOut,
    PanelLeft,
    PanelLeftClose
  } from 'lucide-vue-next';
  
  const route = useRoute();
  const router = useRouter();
  
  // 側邊欄狀態
  const sidebarCollapsed = ref(false);
  const username = ref('使用者');
  const userInitials = ref('User');
  
  // 當前路由
  const currentRoute = computed(() => {
    const path = route.path;
    if (path.includes('/courses')) return 'courses';
    if (path.includes('/learning-history')) return 'learning-history';
    if (path.includes('/motion-analysis')) return 'motion-analysis';
    if (path.includes('/user-management')) return 'user-management';
    return 'courses';
  });
  
  // 頁面標題
  const pageTitle = computed(() => {
    switch (currentRoute.value) {
      case 'courses': return '課程管理';
      case 'learning-history': return '學習歷程';
      case 'motion-analysis': return '動作分析';
      case 'user-management': return '用戶管理';
      default: return '課程管理';
    }
  });
  
  // 切換側邊欄
  const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value;
    
    // 儲存偏好設定到 localStorage
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed.value.toString());
  };
  
  // 登出
  const logout = () => {
    // 清除用戶資訊
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // 導向登入頁面
    router.push('/login');
  };
  
  // 獲取用戶名稱首字母
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2);
  };
  
  onMounted(() => {
    // 從 localStorage 讀取側邊欄狀態
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState !== null) {
      sidebarCollapsed.value = savedState === 'true';
    }
    
    // 從 localStorage 讀取用戶資訊
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        username.value = user.username || '使用者';
        userInitials.value = getInitials(user.username || 'User');
      } catch (e) {
        console.error('解析用戶資訊時出錯:', e);
      }
    }
  });
  </script>
  
  <style scoped>
  .admin-layout {
    display: flex;
    min-height: 100vh;
    background-color: #f7f8fa;
  }
  
  /* 側邊導航欄 */
  .sidebar {
    width: 250px;
    background-color: #1a1a1a;
    color: #fff;
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    overflow: hidden;
  }
  
  .sidebar.collapsed {
    width: 70px;
  }
  
  .sidebar-header {
    height: 64px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
  }
  
  .logo {
    height: 28px;
  }
  
  .logo-icon {
    height: 28px;
    width: 28px;
  }
  
  .collapse-btn {
    border: none;
    background: transparent;
    color: #fff;
    cursor: pointer;
    padding: 6px;
    border-radius: 4px;
  }
  
  .collapse-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .icon {
    width: 20px;
    height: 20px;
  }
  
  .sidebar-nav {
    flex: 1;
    padding: 16px 0;
    overflow-y: auto;
  }
  
  .sidebar-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    color: #adb5bd;
    text-decoration: none;
    transition: all 0.2s ease;
    border-radius: 6px;
    margin: 4px 8px;
  }
  
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
  
  .nav-link.active {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-weight: 500;
  }
  
  .nav-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
  
  .sidebar.collapsed .nav-icon {
    margin-right: 0;
  }
  
  .sidebar-footer {
    padding: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .logout-btn {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
    background-color: transparent;
    color: #adb5bd;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .logout-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
  
  /* 主內容區域 */
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .top-header {
    height: 64px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  
  .page-title h1 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
  
  .user-profile {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .username {
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }
  
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #4f46e5;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
  }
  
  .page-content {
    flex: 1;
    padding: 24px;
    overflow-y: auto;
  }
  
  /* 響應式設計 */
  @media (max-width: 768px) {
    .sidebar {
      position: fixed;
      z-index: 100;
      height: 100vh;
      transform: translateX(-100%);
    }
    
    .sidebar.open {
      transform: translateX(0);
    }
    
    .top-header {
      padding: 0 16px;
    }
  }
  </style>