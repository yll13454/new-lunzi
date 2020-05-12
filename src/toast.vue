<template>
    <div class="wrapper" :class="positionClass" >
        <div class="toast" ref="wrapper" >
            <div class="message">
                <slot v-if="!enableHtml" ></slot>
                <div v-else v-html="$slots.default[0]" class="aaa" ></div>
            </div>
            <div class="line" ref="line" ></div>
            <div class="close" v-if="closeButton" @click="onClicClose" >
                {{closeButton.text}}
            </div>
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
                default:1
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
            this.execAutoClose();
            this.updateStyles();
        },
        computed: {
            positionClass() {
                return {
                    [`position-${this.position}`]:true
                }
            },
        },
        methods: {
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay*1000);
                }
            },
            updateStyles(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height=`${this.$refs.wrapper.getBoundingClientRect().height}px`
                    // console.log(this.$refs.wrapper.getBoundingClientRect().height);
                })
            },
            close(){
                this.$el.remove()
                this.$emit('close')
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
@keyframes fade-in{
    0%{opacity:0;}
    100%{opacity:1;}
}
@keyframes slide-down{
    0%{opacity:0;transform:translateY(-100%)}
    100%{opacity:1;transform:translateY(0%)}
}
@keyframes slide-up{
    0%{opacity:0;transform:translateY(100%)}
    100%{opacity:1;transform:translateY(0%)}
}

.wrapper{
    position: fixed;
    left:50%;
    transform: translateX(-50%);
    &.position-top{
        top:0;
        .toast{
            animation:slide-down 300ms;
            border-bottom-left-radius:4px;
            border-bottom-right-radius:4px;
        }
    }
    &.position-middle{
        top:50%;
        transform: translate(-50%,-50%);
        .toast{
            animation:fade-in 300ms;
            border-radius: 4px;
        }
    }
    &.position-bottom{
        bottom:0;
        .toast{
            animation:slide-up 300ms;
            border-top-left-radius:4px;
            border-top-right-radius:4px;
        }
    }
}
.toast{
    display: flex;
    left:50%;
    color:white;
    min-height:40px;
    align-items: center;
    padding:0 16px;
    font-size: 14px;
    background: rgba(0,0,0,0.74);
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
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