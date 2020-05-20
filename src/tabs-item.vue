<template>
    <div class="tabs-item" :class="classes" @click="onClick" :data-name="name" >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'LunziTabsItem',
        inject:['eventBus'],
        data() {
            return {
                active:false
            }
        },
        props:{
            name:{
                type:String,
                required:true
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        computed: {
            classes(){
                return {
                    active:this.active,
                    disabled:this.disabled
                }
            }
        },
        created() {
            if (this.eventBus) {
                this.eventBus.$on('update:selected',(name)=>{
                    this.active = name === this.name;
                })
            }
        },
        methods: {
            onClick(){
                if(this.disabled){return}
                this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this)
            }
        },
    }
</script>

<style lang="scss" scoped>
.tabs-item{
    padding:.3em .5em; 
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
        color:blue;
        font-weight: bold;
    }
    &.disabled{
        color: gray;
        cursor: not-allowed;
    }
}
</style>