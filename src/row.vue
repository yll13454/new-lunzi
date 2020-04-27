<template>
    <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}" >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'LunziRow',
        props:{
            gutter:[String,Number]
        },
        mounted() {
            this.$children.forEach((vm)=>{
                vm.gutter = this.gutter;
                console.log(vm.gutter)
            })
        },
    }
</script>

<style lang="scss" scoped>
.row{
    display: flex;
    border: 1px solid red;
}
</style>