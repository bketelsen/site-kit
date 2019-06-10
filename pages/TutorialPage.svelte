<script>
  import { onMount } from "svelte";
  import Tutorial from "../components/Tutorial.svelte";
  export let router = {};
  let tutorial;
  let title = "";
  onMount(() => {
    preload();
  });

  async function preload() {
    tutorial = await fetch(
      `/content/tutorials/${router.params.slug}.json`
    ).then(r => r.json());
    title = tutorial.title;
  }
</script>

<style>

</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Tutorial {tutorial} />
