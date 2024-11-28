<script lang="ts">
  import { onMount } from 'svelte';
  
  let isLoggedIn = false;
  let username = '';

  onMount(async () => {
    // Check authentication status on component mount
    const token = localStorage.getItem('token');
    if (token) {
      const response = await fetch('/api/auth/verify', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        isLoggedIn = true;
        username = data.username;
      }
    }
  });

  async function handleLogout() {
    localStorage.removeItem('token');
    isLoggedIn = false;
    window.location.href = '/';
  }
</script>

<nav class="bg-gray-800 p-4">
  <div class="container mx-auto flex justify-between items-center">
    <a href="/" class="text-xl font-bold">Pattern Memory</a>
    <div class="space-x-4">
      {#if isLoggedIn}
        <span>Welcome, {username}!</span>
        <a href="/profile" class="hover:text-gray-300">Profile</a>
        <button on:click={handleLogout} class="hover:text-gray-300">Logout</button>
      {:else}
        <a href="/login" class="hover:text-gray-300">Login</a>
        <a href="/register" class="hover:text-gray-300">Register</a>
      {/if}
    </div>
  </div>
</nav>