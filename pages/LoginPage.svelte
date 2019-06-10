<script>
  export let router = {};
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<section class="hero is-fullheight is-medium is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <article class="card is-rounded">
          <div class="card-content">
            <h1 class="title">

              <img
                src="https://via.placeholder.com/150x50"
                alt="logo"
                width="200" />
            </h1>
            <p class="control has-icons-left">
              <input class="input" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
                <i class="fa fa-envelope" />
              </span>
            </p>
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" />
              <span class="icon is-small is-left">
                <i class="fa fa-lock" />
              </span>
            </p>
            <p class="control">
              <label class="checkbox">
                <input type="checkbox" />
                Remember me
              </label>
            </p>
            <p class="control">
              <button class="button is-primary is-medium is-fullwidth">
                <i class="fa fa-user" />
                Login
              </button>
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
