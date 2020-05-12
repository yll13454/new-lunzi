import Vue from 'vue'
import gbutton from './button.vue'
import gbuttongroup from './button-group.vue'
import ginput from './input'
import Row from './row'
import Col from './col'
import glayout from './layout'
import gheader from './header'
import gcontent from './content'
import gfooter from './footer'
import gaside from './aside'
import plugin from './plugin'

Vue.use(plugin)
 

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
        'g-col':Col,
        'g-layout':glayout,
        'g-header':gheader,
        'g-content':gcontent,
        'g-footer':gfooter,
        'g-aside':gaside,
    },
    created(){

    },
    methods: {

    },
    methods: {
        clickme(){
            this.$toast('我是最棒！',{
                enableHtml:false,
                position:'bottom'
            })
        }
    },
})

