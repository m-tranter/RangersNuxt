export default defineNuxtRouteMiddleware((to) => {
  console.log(to.path);
  if (to.path.startsWith('/_') || to.path.startsWith('/events')) {
    return navigateTo('/rangersnuxt' + to.path)
  }
})
