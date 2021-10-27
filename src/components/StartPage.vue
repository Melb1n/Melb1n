<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center">
        <img
          src="../assets/discgolfbasket.png"
          alt="Basget logo"
          style="max-width: 40%"
        />
      </div>
    </div>
    <div class="row">
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <router-link to="/game">
          <button class="btn btn-outline-dark me-md-2" type="button">
            New Game
          </button>
        </router-link>
        <button class="btn btn-outline-dark" type="button">Stats</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "main-page",
};
</script>
