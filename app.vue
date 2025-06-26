<template>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
const { data } = useContent().getFoo();
</script>
