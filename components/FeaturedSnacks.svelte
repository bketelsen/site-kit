<script>
  import { Link } from "svero";
  export let title;
  export let snacks;
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

{#if snacks}
  <section class="section">
    <div class="container">
      <div class="tile is-ancestor">
        {#each snacks as item}
          <div class="tile is-4 is-parent">
            <div class="tile is-child">
              <article class="tile is-child notification is-success">
                <p class="title">
                  <span class="icon">
                    <i class="fas fa-cookie-bite" />
                  </span>
                   {item.title}
                </p>
                <div class="content"> {item.description} </div>
                <div class="tags">
                  {#each item.categories as category}
                    <span class="tag">#{category}</span>
                  {/each}
                </div>
                <Link
                  class="button is-link is-fullwidth"
                  href="/snacks/{item.basename}">
                  View
                </Link>
              </article>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}
