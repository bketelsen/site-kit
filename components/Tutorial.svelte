<script>
  import Hero from "./Hero.svelte";
  import Header from "./Header.svelte";
  import Content from "./Content.svelte";

  import TableOfContents from "./TableOfContents.svelte";
  export let tutorial;
</script>

<style>
  .tile.is-parent {
    padding: 0.75rem;
    padding-top: 0.75rem;
    padding-right: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 0.75rem;
  }
</style>

<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-three-quarters">
        <Hero item={tutorial} herotype="is-warning" />
        <Header item={tutorial} />
        <Content item={tutorial} />
      </div>
      <div class="column"><TableOfContents item={tutorial} /></div>
    </div>
  </div>
</section>


