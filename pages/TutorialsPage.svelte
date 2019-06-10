<script>
  import { onMount } from "svelte";

  import { Link } from "svero";
  import FeaturedTutorials from "../components/FeaturedTutorials.svelte";
  export let router = {};
  let tutorials;
  onMount(() => {
    preload();
  });

  async function preload() {
    tutorials = await fetch(`/content/tutorials/index.json`).then(r =>
      r.json()
    );
  }
</script>

<style>

</style>

<svelte:head>
  <title>Tutorials</title>
</svelte:head>

<FeaturedTutorials {tutorials} title="Featured Tutorials" />
