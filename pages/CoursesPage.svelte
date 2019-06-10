<script>
  import { onMount } from "svelte";
  import { Link } from "svero";
  import FeaturedCourses from "../components/FeaturedCourses.svelte";

  export let router = {};

  let courses;
  onMount(() => {
    preload();
  });

  async function preload() {
    courses = await fetch(`/content/courses/index.json`).then(r => r.json());
  }
</script>

<style>

</style>

<svelte:head>
  <title>Courses</title>
</svelte:head>

<FeaturedCourses {courses} title="Featured Courses" />
