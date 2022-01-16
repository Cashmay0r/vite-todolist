<template>
  <div class="flex flex-col justify-center items-center h-full">
    <h1>Home</h1>
    <p v-text="counter"></p>
    <button @click="this.$store.commit('increment')">Increment</button>
    <div v-for="num in counter" :key="num">
      <TodoItem :number="num"></TodoItem>
    </div>
  </div>
</template>
<script>
  import {computed} from '@vue/reactivity';
  import TodoItem from '../components/TodoItem.vue';
  export default {
    components: {TodoItem},
    computed: {
      counter() {
        return this.$store.state.count;
      },
    },
  };
</script>
<style lang=""></style>
