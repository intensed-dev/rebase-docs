<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <section class="home-section">
    <p v-if="eyebrow" class="home-section__eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="home-section__description">{{ description }}</p>
    <div class="home-section__content">
      <slot />
    </div>
  </section>
</template>
