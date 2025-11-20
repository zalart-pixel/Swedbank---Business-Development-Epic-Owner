<template>
  <div class="tool-page">
    <button class="logout-btn" @click="handleLogout">← Logout</button>
    <iframe :src="'/calculator/calculator.html'" title="Office Space Calculator" class="calculator-frame"></iframe>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'calculator-auth'
})

const { logout } = useCalculatorAuth()

const handleLogout = () => {
  logout()
  navigateTo('/calculator')
}
</script>

<style scoped>
.tool-page {
  position: relative;
  min-height: 100vh;
  background: #f9fafb;
  overflow: hidden;
}

.logout-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 16px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  z-index: 100;
  transition: background 0.2s;
  font-size: 14px;
}

.logout-btn:hover {
  background: #dc2626;
}

.calculator-frame {
  width: 100%;
  height: 100vh;
  border: none;
  display: block;
}
</style>
