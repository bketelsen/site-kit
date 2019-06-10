<script>
  import { Link } from "svero";
  import SignIn from './SignIn.svelte';
	import {loggedIn$} from '../Firebase.js'
  export let title;
	/* Make something more observable */
  const user = loggedIn$;

  let pathname = "";
  // Those contains useful information about current route status
  function popState(e) {
	  pathname = window.location.pathname;
  }
  function isSelected(link, p) {
    if (link === p) {
      return "selected";
    }
  }
</script>

<style>

</style>

<svelte:window on:popstate={popState} />

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
      <span class="navbar-item">
        <Link class="navbar-item" href="/"><h1>{title}</h1></Link>
      </span>

    <a
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <span class="navbar-item">
        <Link class="navbar-item" href="/snacks">Snacks</Link>
      </span>
      <span class="navbar-item">
        <Link class="navbar-item" href="/tutorials">Tutorials</Link>
      </span>
      <span class="navbar-item">
        <Link class="navbar-item" href="/courses">Courses</Link>
      </span>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">More</a>

        <div class="navbar-dropdown">
          <span class="navbar-item">
            <Link class="navbar-item" href="/about">About</Link>
          </span>
          <a class="navbar-item">Contact</a>
          <hr class="navbar-divider" />
          <a class="navbar-item">Report an issue</a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
        <Link class="button is-primary" href="/signup">Sign Up</Link>
        <Link class="button is-light" href="/login">Log In</Link>
        </div>
      </div>
    </div>
  </div>
</nav>
