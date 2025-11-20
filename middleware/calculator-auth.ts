export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useCalculatorAuth()
  
  if (to.path.includes('/calculator/tool') && !isAuthenticated.value) {
    return navigateTo('/calculator')
  }
})
