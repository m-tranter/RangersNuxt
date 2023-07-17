<template>
  <nav role="navigation" aria-label="Results data navigation">
    <ul class="pagination d-flex flex-wrap mb-2 ms-0">
      <li class="page-item" v-bind:class="{ disabled: pageIndex === 0 }">
        <button
          class="page-link"
          type="button"
          v-on:click="goToPage(pageIndex)"
        >
          Previous
        </button>
      </li>
      <li
        v-for="pageBtn in pageBtns"
        class="page-item"
        v-bind:class="{ disabled: pageIndex === pageBtn - 1 }"
        v-bind:key="pageBtn"
      >
        <button class="page-link" type="button" v-on:click="goToPage(pageBtn)">
          {{ pageBtn }}
        </button>
      </li>
      <li
        class="page-item"
        v-bind:class="{ disabled: pageIndex + 1 === pageCount }"
      >
        <button
          class="page-link"
          type="button"
          v-on:click="goToPage(pageIndex + 2)"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { storeToRefs } from 'pinia';
const entryStore = useEntryStore();
const { goToPage } = entryStore;
const {pageIndex, pageBtns, pageCount } = storeToRefs(entryStore);
</script>
<script>
export default {
  name: 'pagination',
};
</script>
