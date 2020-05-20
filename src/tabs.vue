<template>
    <div >
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
    export default {
        name:'LunziTabs',
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            }
        },
        data(){
            return{
                eventBus:new Vue()
            }
        },
        provide(){
            return {
                eventBus:this.eventBus
            }
        },
        mounted() {
            if (this.$children === 0) {
                console && console.warn && console.warn('子组件应该是tabs-head')
            }
            this.$children.forEach(vm=>{
                if(vm.$options.name === 'LunziTabsHead'){
                    vm.$children.forEach(childrenvm=>{
                        if(childrenvm.$options.name === 'LunziTabsItem'
                        && childrenvm.name === this.selected)
                        this.eventBus.$emit('update:selected',this.selected,childrenvm)
                    })
                }
            })
        },
        methods: {
            // yyy(){
            //     console.log('111')
            // }
        },
    }
</script>

<style lang="scss" scoped>

</style>