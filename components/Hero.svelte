<script>
  export let herotype;
  export let item;
</script>

<section class="hero {herotype}">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {#if item}{item.title}{/if}
      </h1>
      <h2 class="subtitle"> 
        {#if item}{item.subtitle}{/if}
      </h2>
    </div>
  </div>
</section>
