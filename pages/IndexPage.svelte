<script>
  import { onMount } from "svelte";

  import FeaturedTutorials from "../components/FeaturedTutorials.svelte";
  import FeaturedCourses from "../components/FeaturedCourses.svelte";
  import FeaturedSnacks from "../components/FeaturedSnacks.svelte";

  export let router = {};
  let snacks;
  let tutorials;
  let courses;
  onMount(() => {
    preload();
  });

  async function preload() {
    snacks = await fetch(`/content/snacks/index.json`).then(r => r.json());
    tutorials = await fetch(`/content/tutorials/index.json`).then(r =>
      r.json()
    );
    courses = await fetch(`/content/courses/index.json`).then(r => r.json());
  }
</script>

<style>

</style>

<svelte:head>
  <title>Crostini Snacks</title>
</svelte:head>

<FeaturedSnacks {snacks} title="Featured Snacks" />

<FeaturedTutorials {tutorials} title="Featured Tutorials" />

<FeaturedCourses {courses} title="Featured Courses" />
