<script lang="ts">
  import { onMount } from 'svelte';
  
  export let message: string;
  export let type: 'success' | 'error' = 'success';
  export let duration = 3000;
  
  let visible = true;
  
  onMount(() => {
    setTimeout(() => {
      visible = false;
    }, duration);
  });
</script>

{#if visible}
  <div
    class="fixed top-4 right-4 p-4 rounded shadow-lg transition-opacity duration-300"
    class:bg-green-500={type === 'success'}
    class:bg-red-500={type === 'error'}
  >
    <p class="text-white">{message}</p>
  </div>
{/if}

<style>
  div {
    z-index: 1000;
  }
</style>