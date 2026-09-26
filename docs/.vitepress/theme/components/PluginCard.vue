<script setup lang="ts">
defineProps<{
  name: string
  description: string
  category?: string
  status?: string
  source: string
}>()
</script>

<template>
  <article class="plugin-card">
    <div class="plugin-card__top">
      <span v-if="category" class="plugin-card__category">{{ category }}</span>
      <span v-if="status" class="plugin-card__status">{{ status }}</span>
    </div>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <a class="plugin-card__link" :href="source" target="_blank" rel="noreferrer">
      View source <span aria-hidden="true">↗</span>
    </a>
  </article>
</template>
