<script setup>
const entryStore = useEntryStore();
const { getTime, formatDate } = entryStore;
</script>
<template>
  <div
    v-for="item in items"
    v-bind:key="item.sys.id"
    tabindex="0"
    class="linkDiv ranger-event-card card card-item flex-md-row align-items-center"
  >
    <NuxtLink :href="`rangersevents/events/${item.sys.slug}`"
      ><span class="innerLink"
        ><span class="visually-hidden">{{ item.title }}</span></span
      ></NuxtLink
    >
    <div
      class="col-12 col-md-5 thumbnail-container d-flex justify-content-center px-2"
    >
      <img
        v-if="item.image != null"
        class="img-fluid rounded featured-img"
        v-bind:src="`https://www.cheshireeast.gov.uk/${item.image.asset.sys.uri}`"
        v-bind:alt="item.title"
      />
    </div>
    <div
      class="card-body col-12 col-md-7 text-center text-md-start ps-md-4 ps-xl-2"
    >
      <h2 class="fs-4">{{ item.entryTitle }}</h2>
      <template
        v-if="
          formatDate(item.dateStartEnd.from) ===
          formatDate(item.dateStartEnd.to)
        "
      >
        <p>{{ formatDate(item.dateStartEnd.from) }}.</p>
        <p>
          <strong>Time:</strong> {{ getTime(item.dateStartEnd.from) }} -
          {{ getTime(item.dateStartEnd.to) }}.
        </p>
      </template>
      <template v-else>
        <p>
          From {{ getTime(item.dateStartEnd.from) }} on
          {{ formatDate(item.dateStartEnd.from) }}.
        </p>
        <p>
          Until {{ getTime(item.dateStartEnd.to) }} on
          {{ formatDate(item.dateStartEnd.to) }}.
        </p>
      </template>
      <p>{{ item.excerpt }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: ['items'],
};
</script>
