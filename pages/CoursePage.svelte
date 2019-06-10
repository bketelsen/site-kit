<script>
  import { onMount } from "svelte";
  import Course from "../components/Course.svelte";
  export let router = {};
  let course;
  let title = "";
  onMount(() => {
    preload();
  });

  async function preload() {
    course = await fetch(`/content/courses/${router.params.slug}.json`).then(
      r => r.json()
    );
    title = course.title;
  }
</script>

<style>

</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Course {course} />
