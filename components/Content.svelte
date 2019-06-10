<script>
  import { afterUpdate } from "svelte";
  //    import * as remark from "remark";
  export let item;
  let slideshow;
  let current = 0;
  export let h2s = [];
  afterUpdate(() => {
    var parser = new DOMParser();
    if (item != null) {
      var htmlDoc = parser.parseFromString(item.html, "text/html");
      h2s = htmlDoc.getElementsByTagName("h2");
    }
    //   slideshow = remark.create();
  });
</script>

<div id="contents">

  {#if item}
    {@html item.html}
  {/if}
</div>
