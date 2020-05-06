<template>
    <div class="layout" :class="layoutClass" >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'LunZiLayout',
        data() {
            return {
                layoutClass:{
                    hasSide:false
                }
            }
        },
        mounted() {
            // console.log(this.$children);
            this.$children.forEach(vm => {
                if(vm.$options.name === 'LunziAside'){
                    this.layoutClass.hasSide = true
                }
            });
        },
    }
</script>

<style lang="scss" scoped>
.layout{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSide{
        flex-direction: row;
    }
}
</style>