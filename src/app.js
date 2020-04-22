import Vue from 'vue'
import gbutton from './button.vue'
import gbuttongroup from './button-group.vue'
import ginput from './input'

new Vue({
    el:'#app',
    data: {
        message:'hi',
        loading1:false,
        loading2:false
    },
    components:{
        'g-button':gbutton,
        'g-button-group':gbuttongroup,
        'g-input':ginput
    }
})

