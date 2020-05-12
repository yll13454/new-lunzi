import Toast from './toast'

let currentCoast
export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message,taostOptions) {
            
            if(currentCoast){
                currentCoast.close()
            }
            currentCoast = createCoast(
                {
                    Vue,
                    propsData : taostOptions,
                    message,
                    onClose(){
                        currentCoast = undefined;
                    }
                }
            )
        }
    }
}

function createCoast({Vue,propsData,message,onClose}) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast
}