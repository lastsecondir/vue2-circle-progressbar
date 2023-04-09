<template>
  <div class="container">
    <div v-for="item in items">
      <CircleProgressbar v-bind="item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          value: 0,
        },
        {
          value: 20,
        },
        {
          value: 50,
        },
        {
          value: 75,
        },
        {
          value: 90,
        },
        {
          value: 100,
        },
      ]
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.container > div {
  width: 200px;
}
</style>
