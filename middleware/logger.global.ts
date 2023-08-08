export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Incoming request: ${to.path}`);
})
