<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  type PageProps = { form: ActionData };

  const { form }: PageProps = $props();
</script>

<form use:enhance method="post">
  <label
    ><p>Email or Username</p>
    <input type="text" name="credential" placeholder="Email or Username" />
  </label>
  <label
    ><p>Password</p>
    <input type="password" name="password" placeholder="password" />
  </label>
  <button type="submit">Login</button>
</form>

{#if form?.incomplete}
  <p class="error">Username and password are required.</p>
{/if}

{#if form?.message}
  <p class="error">{form.message}</p>
{/if}
