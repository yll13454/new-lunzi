<template>
        <svg class="g-icon" aria-hidden="true">
                <use :xlink:href="`#i-${name}`"></use>
        </svg>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style scoped>
.g-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  vertical-align: middle;
}
</style>