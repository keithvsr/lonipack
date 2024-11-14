<script lang="ts">
  import type { LayoutData } from "./$types";
  import type {Snippet} from "svelte"

  import favicon from "$lib/assets/favicon.ico";
  import "$lib/styles/index.css";

  type LayoutProps =  { data: LayoutData, children: Snippet }

  let { data, children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Welcome to the Lonipack</title>
</svelte:head>

{#if data.user}
<div id="logged-in-msg"><p>Welcome {data.user.name}</p>
<form action="/logout" method="post">
  <button type="submit">Logout</button>
</form>
</div>
{/if}
{@render children()}

<style>
  #logged-in-msg{
    position: absolute;
    top: 0;
    right: 1rem;
  }
</style>
