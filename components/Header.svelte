<script>
  export let item;
</script>

    <div class="box">
      <article class="media">
        <div class="media-content">
          <figure class="image is-16x9">
            <img
              src="https://bulma.io/images/placeholders/640x360.png"
              alt="Image" />
          </figure>
        </div>
      </article>
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              {#if item}<strong>{item.author}</strong>{/if}
              {#if item}<small>@{item.twitter}</small>{/if}
              <small>31m</small>
              <br />
              {#if item}{item.description}{/if}
            </p>
          </div>
        </div>
        <div class="media-right">
          <span class="icon">
            {#if item}<a href="{item.repo}"><i class="fas fa-code-branch" /></a> {/if}
          </span>
        </div>
      </article>
    </div>
