<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const isAdminLoggedIn = useState('isAdminLoggedIn')
const router = useRouter()

onMounted(() => {
  if (!isAdminLoggedIn.value) {
    router.push('/')
  }
})

watch(isAdminLoggedIn, (newVal) => {
  if (!newVal) {
    router.push('/')
  }
})
</script>

<template>
  <div class="calculator-page">
    <div v-if="isAdminLoggedIn" class="calculator-wrapper">
      <div class="calculator-header">
        <h1>Office Space Calculator</h1>
        <p>Modify room sizes and create your space layout</p>
      </div>
      <div class="calculator-content">
        <!-- Calculator tool will be embedded here -->
        <div class="placeholder">
          <p>Calculator tool loading...</p>
        </div>
      </div>
    </div>
    <div v-else class="not-authorized">
      <p>You must be logged in as admin to access the calculator.</p>
    </div>
  </div>
</template>

<style scoped>
.calculator-page {
  padding: 2rem;
}

.calculator-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.calculator-header {
  margin-bottom: 2rem;
}

.calculator-header h1 {
  font-size: 1.875rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem 0;
  color: #000;
}

.calculator-header p {
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.016em;
  color: #666;
  margin: 0;
}

.calculator-content {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #f0f0f0;
  padding: 2rem;
}

.placeholder {
  text-align: center;
  padding: 4rem 2rem;
  color: #999;
}

.not-authorized {
  text-align: center;
  padding: 2rem;
  color: #d32f2f;
}
</style>
