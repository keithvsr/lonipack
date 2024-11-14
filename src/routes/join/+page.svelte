<script lang="ts">
  import type { ActionData } from "./$types";
  type PageProps = { form: ActionData };

  let { form }: PageProps = $props();
</script>

<h2>Join the pack!</h2>
<p>
  Thanks for your interest in joining the pack - full membership will be
  available soon!
</p>
{#if form && form.error}
  <p>
    Looks like there was an issue submitting your email. Try again or just check
    back to see when membership is available :)
  </p>
  <div class="error">
    <p>Error: {form.error}</p>
    {#if form.message && form.message !== ""}
      <p>Detail: {form.message}</p>
    {/if}
  </div>
{:else if form && form.status === "success"}
  <div>
    <p>Thanks for submitting - We'll see you back soon!</p>
    <p>Email: {form.email}</p>
  </div>
{:else}
  <div>
    <p>
      If you'd like to be notified when stuff really gets going, add your email
      below. It's not required! You just will be notified when you can set up a
      full account on lonipack.com
    </p>
  </div>
{/if}

<form method="post">
  <fieldset>
    <legend>Leave your email</legend>
    <p>
      <label for="joinee-email">
        Email:
        <input type="email" name="email" id="joinee-email" />
      </label>
    </p>
    <button type="submit">Save</button>
  </fieldset>
</form>

<p>Or go <a href="/">back to home</a></p>

<style>
  .error {
    border: 1px solid red;
    border-radius: 1rem;
    padding-left: 0.75rem;
  }

  div {
    margin-bottom: 1rem;
  }
</style>
