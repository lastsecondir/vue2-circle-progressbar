<template>
  <div class="circle-progressbar">
    <div class="circle-progressbar__text">
      <slot>
        <div v-if="showDefaultText" class="circle-progressbar__text-default">
          {{ value.toFixed(0) }}%
        </div>
      </slot>
    </div>

    <svg :viewBox="`0 0 ${containerWidth} ${containerWidth}`">
      <path
        pathLength="100"
        :d="d"
        :fill="backgroundColor"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
      />

      <path
        :stroke-dasharray="strokeDasharray"
        stroke-dashoffset="-25"
        pathLength="100"
        :d="d"
        fill="none"
        :stroke="progressColor"
        :stroke-width="strokeWidth"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: () => 0,
      validator: val => +val >= 0 && +val <= 100,
    },
    strokeColor: {
      type: String,
      default: () => 'lightgrey',
    },
    progressColor: {
      type: String,
      default: () => '#FE7A67',
    },
    backgroundColor: {
      type: String,
      default: () => 'white',
    },
    strokeWidth: {
      type: Number,
      default: () => 20,
    },
    containerWidth: {
      type: Number,
      default: () => 200,
    },
    showDefaultText: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    strokeDasharray() {
      return `${this.value} ${100 - this.value}`;
    },
    d() {
      const fullWidth = this.containerWidth - this.strokeWidth;
      const halfWidth = (this.containerWidth / 2) - this.strokeWidth;

      return `m ${this.strokeWidth / 2} ${this.containerWidth / 2} a ${halfWidth} ${halfWidth} 0 1 1 ${fullWidth} 0 a ${halfWidth} ${halfWidth} 0 1 1 -${fullWidth} 0`;
    },
  },
};
</script>

<style scoped>
.circle-progressbar {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.circle-progressbar__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

.circle-progressbar__text-default {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: inherit;
}
</style>
