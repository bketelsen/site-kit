<script>
  import { onMount } from "svelte";
  import Snack from "../components/Snack.svelte";
  export let router = {};
  let snack;
  let title = "";
  onMount(() => {
    preload();
  });

  async function preload() {
    snack = await fetch(`/content/snacks/${router.params.slug}.json`).then(r =>
      r.json()
    );
    title = snack.title;
  }
</script>

<style></style>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<Snack {snack} />
