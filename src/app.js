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
import gtabs from './tabs'
import gtabshead from './tabs-head'
import gtabsbody from './tabs-body'
import gtabsitem from './tabs-item'
import gtabspane from './tabs-pane'
import gicon from './g-icon'
import gpopover from './popover'

Vue.use(plugin)
 

new Vue({
    el:'#app',
    data: {
        selectedTab:'sports'
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
        'g-tabs-head':gtabshead,
        'g-tabs-body':gtabsbody,
        'g-tabs-item':gtabsitem,
        'g-tabs-pane':gtabspane,
        'g-tabs':gtabs,
        'g-icon':gicon,
        'g-popover':gpopover
    },
    created(){
        
    },
    methods: {
        clickme(){
            this.$toast('我是最棒！',{
                enableHtml:false,
                position:'bottom'
            })
        },
        yyy(){

        }
    },
})

