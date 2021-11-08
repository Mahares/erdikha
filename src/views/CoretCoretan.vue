<template>
  <div class="container">
    <div class="form">
      <label for="goal">Goal</label>
      <input type="text" id="goal" v-model="enteredValue" />
      <button v-on:click="addGoals()">Add Goal</button>
    </div>
    <ul>
      <li v-for="goal in goals" :key="goal.id">{{ goal }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CoretCoretan",

  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
};
</script>

<style scoped>
.form {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 26);
  background-color: #fff;
}

label,
input {
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
}

label {
  font-weight: bold;
}

ul {
  list-style: none;
  margin: 1rem;
  padding: 0;
}

li {
  margin: 1rem 0;
  padding: 1px;
  border: 1px solid #ccc;
}
</style>
