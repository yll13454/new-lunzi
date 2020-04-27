<template>
    <div class="row" :style="rowstyle" >
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
            })
        },
        computed: {
            rowstyle(){
                let { gutter } = this;
                return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'};
            }
        },
    }
</script>

<style lang="scss" scoped>
.row{
    display: flex;
}
</style>