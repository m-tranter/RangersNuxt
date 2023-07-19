export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`From: ${from.path}`);
  console.log(`To: ${to.path}`);
})
