<template>
    <div class="col" :class="colclass" 
    :style="colstyle"  >
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value)=>{
        let keys = Object.keys(value);
                    let valid = true;
                    keys.forEach((key)=>{
                        if(!['span','offset'].includes(key)){
                            valid = false;
                        }
                    })
                    return valid;
    }
    export default {
        name:'LunziCol',
        props:{
            span:[String,Number],
            offset:[String,Number],
            ipad:{type:Object,validator},
            narrowPc:{type:Object,validator},
            pc:{type:Object,validator},
            widePc:{type:Object,validator},
        },
        data() {
            return {
                gutter:0,
            }
        },
        methods: {
            createdClass(obj,str=''){
                if(!obj){return []}
                let array = []
                if(obj.span){array.push(`col-${str}${obj.span}`)}
                if(obj.offset){array.push(`offset-${str}${obj.offset}`)}
                return array
            }
        },
        computed: {
            colstyle(){
                let { gutter } = this;
                return {paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'};
            },
            colclass(){
                let { span , offset , ipad , narrowPc, pc, widePc } = this;
                let createdclass = this.createdClass
                return [
                    createdclass({span,offset}),
                    ...createdclass(ipad,'ipad-'),
                    ...createdclass(narrowPc, 'narrow-pc-'),
                    ...createdclass(pc, 'pc-'),
                    ...createdclass(widePc, 'wide-pc-'),
                ];
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
    @media (min-width: 577px){
        $class-prefix:col-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }

        $class-prefix:offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
    @media (min-width: 769px){ // 770
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
}
</style>