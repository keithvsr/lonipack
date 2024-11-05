<script lang="ts">
  import headshot from "$lib/assets/bwuh-resize.jpg";
</script>

<h1>Welcome to the Lonipack!</h1>
<p>Thanks for visiting!</p>
<div class="headshot">
  <img src={headshot} alt="The Dogfather" />
</div>
<p>
  Care to <a href="join">join</a>?
</p>

<style>
  div.headshot {
    max-width: 400px;
    margin: 0 auto;
  }

  div.headshot > img {
    aspect-ratio: 1/1;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: left;
  }

  @media (max-width: 600px) {
    h1,
    p {
      text-align: center;
    }

    h1 {
      font-size: 1.75rem;
    }
  }
</style>
