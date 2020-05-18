<template>
    <div class="tabs-head" >
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions" >
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'LunziTabsHead',
        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
            })
        },
    }
</script>

<style lang="scss" scoped>
.tabs-head{
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    transition: all 1s;
    >.line{
        position:absolute;
        bottom: 0;
        border-bottom:2px solid blue;
    }
    >.actions{
        margin-left: auto
    }
}
</style>