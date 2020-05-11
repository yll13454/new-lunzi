<template>
    <div class="toast" ref="wrapper" :class="positionClass" >
        <div class="message">
            <slot v-if="!enableHtml" ></slot>
            <div v-else v-html="$slots.default[0]" class="aaa" ></div>
        </div>
        <div class="line" ref="line" ></div>
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
            },
            enableHtml:{
                type:Boolean,
                deafault:false
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top','bottom','middle'].indexOf(value)>=0
                }
            }
        },
        mounted() {
            if(this.autoClose){
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay*1000);
            }
            this.$nextTick(()=>{
                this.$refs.line.style.height=`${this.$refs.wrapper.getBoundingClientRect().height}px`
                console.log(this.$refs.wrapper.getBoundingClientRect().height);
                
            })
        },
        computed: {
            positionClass() {
                return {
                    [`position-${this.position}`]:true
                }
            },
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
    left:50%;
    color:white;
    min-height:40px;
    align-items: center;
    padding:0 16px;
    font-size: 14px;
    background: rgba(0,0,0,0.74);
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    border-radius: 4px;
    &.position-top{
        top:0;
        transform: translateX(-50%);
    }
    &.position-middle{
        top:50%;
        transform: translate(-50%,-50%);
    }
    &.position-bottom{
        bottom:0;
        transform: translateX(-50%);
    }
    .close{
        flex-shrink: 0;
    }
    .message{
        padding:6px 0;
    }
    .line{
        height:100%;
        border-left:1px solid red;
        margin:0 16px;
    }
}

</style>