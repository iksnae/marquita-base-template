<script>
  import { onMount } from 'svelte';
  
  // State for loaded configurations
  let siteConfig = null;
  let pagesConfig = null;
  let isLoading = true;
  
  onMount(async () => {
    try {
      // Load configuration files
      const siteResponse = await fetch('/config/site.json');
      const pagesResponse = await fetch('/config/pages.json');
      
      // Parse the JSON
      siteConfig = await siteResponse.json();
      pagesConfig = await pagesResponse.json();
      
      console.log('Loaded site config:', siteConfig);
      console.log('Loaded pages config:', pagesConfig);
    } catch (error) {
      console.error('Error loading configuration:', error);
    } finally {
      isLoading = false;
    }
  });
</script>

<div class="py-12">
  <!-- Loading State -->
  {#if isLoading}
    <div class="flex justify-center items-center py-12">
      <div class="text-xl text-gray-600">Loading configuration...</div>
    </div>
  {:else}
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 mb-12 shadow-lg text-white">
      <h1 class="text-4xl font-bold mb-4">
        <!-- AI-EDIT-POINT: Hero Title -->
        {siteConfig ? siteConfig.name : 'Welcome to Marquita Base Template'}
      </h1>
      <p class="text-xl mb-6">
        <!-- AI-EDIT-POINT: Hero Subtitle -->
        {siteConfig ? siteConfig.tagline : 'A starting point for building your business website with SvelteKit and AI assistance'}
      </p>
      <div class="flex flex-wrap gap-4">
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
          <p>Failed to load site configuration</p>
        </div>
      {/if}
      
      {#if pagesConfig?.home}
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Home Page Configuration</h3>
          <pre class="bg-gray-100 p-4 rounded overflow-x-auto">{JSON.stringify(pagesConfig.home, null, 2)}</pre>
        </div>
      {:else}
        <div class="bg-white p-6 rounded-lg shadow-md">
          <p>Failed to load page configuration</p>
        </div>
      {/if}
    </section>
  {/if}
</div>
