<script>
  import { onMount } from "svelte";

  import FeaturedSnacks from "../components/FeaturedSnacks.svelte";
  export let router = {};
  let snacks;
  onMount(() => {
    preload();
  });

  async function preload() {
    snacks = await fetch(`/content/snacks/index.json`).then(r => r.json());
  }
</script>

<style>

</style>

<svelte:head>
  <title>Snacks</title>
</svelte:head>

<FeaturedSnacks {snacks} title="Featured Snacks" />
