<script>
  import Hero from "./Hero.svelte";

  import TableOfContents from "./TableOfContents.svelte";
  import Header from "./Header.svelte";
  import Content from "./Content.svelte";
  export let course;
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
        <Hero item={course} herotype="is-info" />
        <Header item={course} />
        <Content item={course} />
      </div>
      <div class="column">
        <TableOfContents item={course} />
      </div>
    </div>
  </div>
</section>
