<template>
  <div>
    <MyHeader />
    <div class="container mx-auto my-2">
      <slot />
    </div>
    <MyFooter />
  </div>
</template>

<script setup>
  const entryStore = useEntryStore();
  const {getEntries} = entryStore;
  getEntries();
</script>

