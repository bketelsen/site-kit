<script>
  import Hero from "./Hero.svelte";
  import Header from "./Header.svelte";
  import Content from "./Content.svelte";
  import TableOfContents from "./TableOfContents.svelte";

  import { onMount } from "svelte";
  export let snack;


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
        <Hero item={snack} herotype="is-success" />
        <Header item={snack} />
        <Content item={snack} />
      </div>
      <div class="column"><TableOfContents item={snack} /></div>
    </div>
  </div>
</section>
