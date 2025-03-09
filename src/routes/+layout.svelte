<script>
  import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto">
      <h1 class="text-xl font-bold">Marquita Base Template</h1>
    </div>
  </header>
  
  <main class="flex-grow container mx-auto p-4">
    <slot />
  </main>
  
  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto">
      <p>© 2025 Marquita Project</p>
    </div>
  </footer>
</div>
