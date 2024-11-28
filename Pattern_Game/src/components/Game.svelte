<script lang="ts">
  import { onMount } from 'svelte';

  // Game state
  let pattern: string[] = [];
  let playerPattern: string[] = [];
  let level = 1;
  let isPlaying = false;
  let isShowingPattern = false;
  let score = 0;

  // Available colors with brighter highlight values
  const colors = [
    { base: '#ff0000', active: '#ff6666', name: 'red' },    // Brighter red
    { base: '#0000ff', active: '#6666ff', name: 'blue' },   // Brighter blue
    { base: '#00ff00', active: '#66ff66', name: 'green' },  // Brighter green
    { base: '#ffff00', active: '#ffff66', name: 'yellow' }  // Brighter yellow
  ];

  // Generate a new pattern for the current level
  function generatePattern() {
    pattern = [];
    for (let i = 0; i < level + 2; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      pattern.push(randomColor.name);
    }
  }

  // Show the pattern to the player
  async function showPattern() {
    isShowingPattern = true;
    for (const colorName of pattern) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Highlight the color
      const element = document.querySelector(`[data-color="${colorName}"]`);
      element?.classList.add('active');
      await new Promise(resolve => setTimeout(resolve, 500));
      element?.classList.remove('active');
    }
    isShowingPattern = false;
  }

  // Handle player's color selection
  function handleColorClick(colorName: string) {
    if (isShowingPattern) return;
    
    playerPattern.push(colorName);
    
    // Check if the pattern is correct so far
    if (playerPattern[playerPattern.length - 1] !== pattern[playerPattern.length - 1]) {
      endGame();
      return;
    }

    // Check if the pattern is complete
    if (playerPattern.length === pattern.length) {
      score += level * 100;
      level++;
      playerPattern = [];
      startRound();
    }
  }

  // Start a new round
  async function startRound() {
    generatePattern();
    await showPattern();
  }

  // Start the game
  function startGame() {
    level = 1;
    score = 0;
    isPlaying = true;
    startRound();
  }

  // End the game
  async function endGame() {
    isPlaying = false;
    // Save high score if logged in
    const token = localStorage.getItem('token');
    if (token) {
      await fetch('/api/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ score })
      });
    }
  }

  // Share buttons click handlers
  function shareOnFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  }

  function shareOnTwitter() {
    window.open(`https://twitter.com/intent/tweet?text=I scored ${score} points in Pattern Memory! Can you beat my score?&url=${encodeURIComponent(window.location.href)}`, '_blank');
  }
</script>

<div class="container mx-auto p-4">
  <div class="text-center mb-8">
    <h2 class="text-2xl font-bold mb-4">Level: {level} | Score: {score}</h2>
    {#if !isPlaying}
      <button
        on:click={startGame}
        class="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded"
      >
        Start Game
      </button>
    {/if}
  </div>

  <div class="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
    {#each colors as color}
      <button
        data-color={color.name}
        class="h-32 rounded transition-all duration-200 shadow-lg border-4 border-gray-700"
        style="background-color: {color.base};"
        on:click={() => handleColorClick(color.name)}
        disabled={!isPlaying || isShowingPattern}
      />
    {/each}
  </div>

  <div class="flex justify-center space-x-4 mb-8">
    <button
      on:click={shareOnFacebook}
      class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
    >
      Share on Facebook
    </button>
    <button
      on:click={shareOnTwitter}
      class="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded"
    >
      Share on X
    </button>
  </div>

  <div class="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-4">How to Play</h3>
    <div class="space-y-4">
      <div>
        <h4 class="font-semibold mb-2">Game Objective:</h4>
        <p>Test and improve your memory by repeating increasingly complex color patterns.</p>
      </div>
      
      <div>
        <h4 class="font-semibold mb-2">Rules:</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>Watch the sequence of colors carefully as they light up</li>
          <li>After the sequence ends, click the colors in the same order they appeared</li>
          <li>Each correct sequence advances you to the next level</li>
          <li>Each level adds one more color to remember</li>
          <li>Making a mistake ends the game</li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-2">Scoring:</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>Each completed level earns you points: Level × 100</li>
          <li>Higher levels = More points</li>
          <li>Create an account to save your high scores!</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  .active {
    transform: scale(1.1);
    filter: brightness(2);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    border-color: white !important;
  }

  button[disabled] {
    cursor: not-allowed;
    opacity: 0.8;
  }
</style>