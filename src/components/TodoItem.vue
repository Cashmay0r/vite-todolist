<template>
  <div class="w-full border border-solid border-black p-5 h-20" v-text="'Item ' + number"></div>
</template>

<script>
  export default {
    props: {
      number: {
        type: Number,
        required: true,
      },
    },
  };
</script>

<style></style>
