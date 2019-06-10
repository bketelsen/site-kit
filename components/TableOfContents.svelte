<script>
  import { afterUpdate } from "svelte";

  export let item;
  export let h2s = [];
  afterUpdate(() => {
    var parser = new DOMParser();
    if (item != null) {
      var htmlDoc = parser.parseFromString(item.html, "text/html");
      h2s = htmlDoc.getElementsByTagName("h2");
    }
  });
</script>

<nav class="panel">
  <p class="panel-heading has-text-white has-background-black-bis">
  Table of Contents
  </p>

  {#each h2s as h2}
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    <a href="#{h2.id}">{h2.innerHTML}</a>
  </a>
  {/each}
</nav>