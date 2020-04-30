<template>
    <div class="row" :style="rowstyle" :class="rowclass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LunziRow',
    props: {
        gutter: [String, Number],
        align: {
            type: String,
            validator (value) {
                return ['left', 'right', 'center'].includes(value)
            }
        }
    },
    mounted () {
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter;
        })
    },
    computed: {
        rowstyle () {
            let { gutter } = this;
            return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' };
        },
        rowclass () {
            let { align } = this;
            console.log(align);

            return [align && `align-${align}`];
        }
    },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>