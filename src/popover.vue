<template>
    <div>
        <div ref="contentWrapper" v-if="visible" class="contentWrapper"  > 
            <slot name="content" ></slot>
        </div>
        <div ref="triggerWrapper" @click="onClick"  >
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'LunziPopover',
        data() {
            return {
                visible: false
            }
        },
        methods: {
            onClick(){
                this.visible = !this.visible
                if(this.visible){
                    setTimeout(() => {
                        document.body.appendChild(this.$refs.contentWrapper)
                        let {height , top , left , width } = this.$refs.triggerWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.top = top + 'px'
                        this.$refs.contentWrapper.style.left = left + 'px'
                        
                        
                        let onClickDocument = (e)=>{
                            console.log(e);
                            this.visible = false;
                            document.body.removeEventListener('click',onClickDocument)
                            console.log('document关闭');
                        }
                        document.body.addEventListener('click',onClickDocument)
                    },0)

                }else{
                    console.log('vm关闭');
                    
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.contentWrapper{
    position:absolute;
    border:1px solid green;
    transform: translateY(-100%);
}
</style>