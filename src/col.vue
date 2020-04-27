<template>
    <div class="col" :class="" 
    :style="colstyle"  >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'LunziCol',
        props:{
            span:[String,Number],
            offset:[String,Number],
        },
        data() {
            return {
                gutter:0,
            }
        },
        computed: {
            colstyle(){
                let { gutter } = this;
                return {paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'};
            },
            colclass(){
                let { span , offset } = this;
                return [span && `col-${span}`,offset && `offset-${offset}`];
            }
        },
    }
</script>

<style lang="scss" scoped >
.col{
    width:50%;
    height:48px;
    $class-prefix:col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
            width:($n/24)*100%;
        }
    }
    $class-prefix:offset-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
            margin-left:($n/24)*100%;
        }
    }
}
</style>