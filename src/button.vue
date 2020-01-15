<template>
        <button class="g-button" :class="`icon-${iconposition}`" @click="$emit('click')">
            <div class="content">
                <slot></slot>
            </div>
            <g-icon class="icon" :name="icontype" v-if="icontype && !loading" /></g-icon>
            <g-icon class="icon loading" name="loading" v-if="loading" /></g-icon>
        </button>
</template>

<script>
import gicon from "./g-icon";
export default {
    props:{
      icontype:{},
      loading:{
          type:Boolean,
          default:false
      },
      iconposition:{
          type:String,
          default:'left',
          validator(value){
              return value === 'left' || value === 'right'
          }
      }
  },
  components: {
    "g-icon": gicon
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@keyframes spin{0%{transform:rotate(0deg);}
100%{transform:rotate(360deg);}
}
.g-button{font-size:var(--font-size);height:var(--button-height);padding:0 1em;border-radius:var(--border-radius);background:var(--button-bg);display:inline-flex;justify-content:center;align-items:center;vertical-align: middle;border:1px solid black;
&:hover{border-color:var(--border-color-hover);}
&:active{background-color:var(--border-active-bg);}
&:focus{outline:none;}
&.icon-right{>.content{order:1;}>.icon{order:2;margin-left: .3em;margin-right: 0;}}
&.icon-left{>.content{order:2;}>.icon{order:1;margin-right: .3em}}
.loading{animation:spin .5s infinite linear;}
}
</style>