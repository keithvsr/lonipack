<script lang="ts">
  import type { LayoutData } from "./$types";
  import type {Snippet} from "svelte"

  import favicon from "$lib/assets/favicon.png";
  import "$lib/styles/index.css";

  let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Welcome to the Lonipack</title>
</svelte:head>

{@render children()}
