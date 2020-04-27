import Vue from 'vue'
import gbutton from './button.vue'
import gbuttongroup from './button-group.vue'
import ginput from './input'
import Row from './row'
import Col from './col'

new Vue({
    el:'#app',
    data: {
        message:'hi',
        loading1:false,
        loading2:false,
        message2:''
    },
    components:{
        'g-button':gbutton,
        'g-button-group':gbuttongroup,
        'g-input':ginput,
        'g-row':Row,
        'g-col':Col
    },
    created(){
        setTimeout(() => {
            let event = new Event('change');
            let inputElement = this.$el.querySelector('input');
            inputElement.dispatchEvent(event);
            console.log('hi');
        }, 3000);
    },
    methods: {
        inputChange(e){
            console.log(e);
        }
    },
})

