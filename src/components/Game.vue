<template>
  <div class="container m5">
    <b-table striped hover :items="tableRow1"></b-table>
    <div class="row">
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <button
          class="btn btn-outline-dark"
          type="button"
          @click="deleteThrow()"
        >
          <i class="bi bi-backspace"></i>
        </button>
        <button
          class="btn btn-outline-dark"
          type="button"
          @click="canScoreAdd ? addThrow(1) : null"
        >
          1
        </button>
        <button
          class="btn btn-outline-dark"
          type="button"
          @click="canScoreAdd ? addThrow(2) : null"
        >
          2
        </button>
        <button
          class="btn btn-outline-dark"
          type="button"
          @click="canScoreAdd ? addThrow(3) : null"
        >
          3
        </button>
        <button
          class="btn btn-outline-dark"
          type="button"
          @click="canScoreAdd ? addThrow(4) : null"
        >
          4
        </button>
        <button
          class="btn btn-outline-dark"
          type="button"
          @click="canScoreAdd ? addThrow(5) : null"
        >
          5
        </button>
      </div>
      <div>
        <h1>Total Score: {{ totalScore }}</h1>
        <br />
        <h2>Next distance is : {{ this.distance }} m</h2>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
      <router-link to="/">
        <button class="btn btn-outline-dark" type="button">Discard</button>
      </router-link>
      <button class="btn btn-outline-dark" type="button" v-if="!canScoreAdd">
        Save results
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "game",
  data: function () {
    return {
      rounds: [],
      distance: 10,
      result: [],
      row: [],
    };
  },
  computed: {
    tableRow1: function () {
      console.log("computing row 1");
      let result = [];
      let score = [];
      let throws = [];
      score.push("Score:");
      throws.push("Throws:");
      for (let i = 0; i < this.rounds.length; i++) {
        console.log("looping" + i);
        throws.push(this.rounds[i].throws);
        score.push(this.rounds[i].score);
      }

      result.push(score);
      result.push(throws);
      console.log("result: ");
      console.log(result);
      return result;
    },
    totalScore: function () {
      let sum = 0;
      for (let i = 0; i < this.rounds.length; i++) {
        sum = sum + this.rounds[i].score;
      }
      return sum;
    },
    canScoreAdd: function () {
      if (this.rounds.length < 20) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    addThrow: function (i) {
      let card = [];
      card.distance = this.distance;
      card.throws = i;
      card.score = this.distance * i;
      console.log("Card: ");
      console.log(card);
      this.rounds.push(card);
      this.calculateDistance(i);
    },
    deleteThrow: function () {
      let removed = this.rounds.pop();
      this.distance = removed.distance;
    },
    calculateDistance: function (throws) {
      let dist = 0;
      if (throws == 5) {
        dist = 10;
      }
      if (throws == 4) {
        dist = 9;
      }
      if (throws == 3) {
        dist = 8;
      }
      if (throws == 2) {
        dist = 7;
      }
      if (throws == 1) {
        dist = 6;
      }
      if (throws == 0) {
        dist = 5;
      }
      this.distance = dist;
    },
  },
};
</script>
