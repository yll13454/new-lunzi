<template>
    <div class="toast">
        <slot></slot>
        <div class="line" ></div>
        <div class="close" v-if="closeButton" @click="onClicClose" >
            {{closeButton.text}}
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            autoClose:{
                type:Boolean,
                default:false
            },
            autoCloseDelay:{
                type:Number,
                default:5
            },
            closeButton:{
                type:Object,
                default:()=>{
                    return {
                        text:'关闭',
                        callback:(toast)=>{
                            console.log('1212');
                        }
                    }
                }
            }
        },
        mounted() {
            if(this.autoClose){
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay*1000);
            }
        },
        methods: {
            close(){
                console.log('weqeq');
                
                this.$el.remove()
                this.$destroy()
            },
            log(){
                console.log('打印我');
                
            },
            onClicClose(){ 
                this.close()
                if(this.closeButton.callback && typeof(this.closeButton.callback)==='function' ){
                    this.closeButton.callback(this);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.toast{
    position: fixed;
    display: flex;
    top:0;
    left:50%;
    transform: translateX(-50%);
    color:white;
    height:40px;
    align-items: center;
    padding:0 16px;
    font-size: 14px;
    background: rgba(0,0,0,0.74);
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    border-radius: 4px;
}
.close{

}
.line{
    height:100%;
    border-left:1px solid red;
    margin:0 16px;
}
</style>