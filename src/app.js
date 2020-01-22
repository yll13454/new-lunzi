import Vue from 'vue'
import gbutton from './button.vue'
import gbuttongroup from './button-group.vue'

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
    }
})

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies);
const expect = chai.expect;

{
    const Constructor = Vue.extend(gbutton);
    const vm = new Constructor({
        propsData:{
            icontype:'setting'
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use')
    let herf = useElement.getAttribute('xlink:href');
    expect(herf).to.eq('#i-setting')
    vm.$el.remove();
    vm.$destroy();
}
{
    const Constructor = Vue.extend(gbutton);
    const vm = new Constructor({
        propsData:{
            icontype:'setting',
            loading:true,
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let herf = useElement.getAttribute('xlink:href');
    expect(herf).to.eq('#i-loading')
    vm.$el.remove();
    vm.$destroy();
}
{
    let div = document.createElement('div');
    document.body.appendChild(div)
    const Constructor = Vue.extend(gbutton);
    const vm = new Constructor({
        propsData:{
            icontype:'setting',
            iconPosition:'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('2')
    div.remove();
    vm.$el.remove();
    vm.$destroy();
}
{
    let div = document.createElement('div');
    document.body.appendChild(div)
    const Constructor = Vue.extend(gbutton);
    const vm = new Constructor({
        propsData:{
            icontype:'setting',
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1')
    div.remove();
    vm.$el.remove();
    vm.$destroy();
}
{
    const Constructor = Vue.extend(gbutton);
    const vm = new Constructor({
        propsData:{
            icontype:'setting',
            loading:true,
        }
    })
    vm.$mount()
    let spy = chai.spy(()=>{})
    vm.$on('click',spy)
    vm.$el.click()
    expect(spy).to.have.been.called()
    vm.$el.remove();
    vm.$destroy();
}