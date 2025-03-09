<script>
  import { onMount } from 'svelte';
  
  // Load configuration from JSON files
  let siteConfig;
  let pagesConfig;
  
  onMount(async () => {
    try {
      const [siteResponse, pagesResponse] = await Promise.all([
        fetch('/config/site.json'),
        fetch('/config/pages.json')
      ]);
      
      siteConfig = await siteResponse.json();
      pagesConfig = await pagesResponse.json();
    } catch (error) {
      console.error('Error loading configuration:', error);
    }
  });
</script>

<div class="py-12">
  <!-- Hero Section -->
  <section class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 mb-12 shadow-lg text-white">
    <h1 class="text-4xl font-bold mb-4">
      <!-- AI-EDIT-POINT: Hero Title -->
      Welcome to Marquita Base Template
    </h1>
    <p class="text-xl mb-6">
      <!-- AI-EDIT-POINT: Hero Subtitle -->
      A starting point for building your business website with SvelteKit and AI assistance
    </p>
    <div class="flex space-x-4">
      <a href="/docs" class="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
        Documentation
      </a>
      <a href="/getting-started" class="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors">
        Get Started
      </a>
    </div>
  </section>
  
  <!-- Features Section -->
  <section class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-center">Key Features</h2>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3">AI-Assisted Management</h3>
        <p class="text-gray-600">
          Update your website through natural language conversations with AI assistants.
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3">GitHub Pages Deployment</h3>
        <p class="text-gray-600">
          Automatic deployment to GitHub Pages for free, reliable hosting.
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3">Configuration-Driven</h3>
        <p class="text-gray-600">
          Simple JSON configuration files make it easy to update content.
        </p>
      </div>
    </div>
  </section>
  
  <!-- Configuration Demo Section -->
  <section class="bg-gray-50 p-8 rounded-lg">
    <h2 class="text-3xl font-bold mb-6">Configuration Demo</h2>
    
    {#if siteConfig}
      <div class="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 class="text-xl font-semibold mb-3">Site Configuration</h3>
        <pre class="bg-gray-100 p-4 rounded overflow-x-auto">{JSON.stringify(siteConfig, null, 2)}</pre>
      </div>
    {:else}
      <div class="bg-white p-6 rounded-lg shadow-md mb-6">
        <p>Loading site configuration...</p>
      </div>
    {/if}
    
    {#if pagesConfig?.home}
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3">Home Page Configuration</h3>
        <pre class="bg-gray-100 p-4 rounded overflow-x-auto">{JSON.stringify(pagesConfig.home, null, 2)}</pre>
      </div>
    {:else}
      <div class="bg-white p-6 rounded-lg shadow-md">
        <p>Loading page configuration...</p>
      </div>
    {/if}
  </section>
</div>
