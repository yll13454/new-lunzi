<template>
    <div class="wrapper" error="{error}">
        <input type="text" 
        :value="value" 
        :disabled="disabled" 
        :readonly="readonly" 
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)" >
        <template v-if="error">
            <icon name="error" class="icon-error" ></icon>
            <span class="errorMassage">{{error}}</span>
        </template>
    </div>
</template>

<script>
import Icon from './g-icon'
    export default {
        name:"LunziInput",
        components:{Icon},
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                defaule:false
            },
            readonly:{
                type:Boolean,
                defaule:false
            },
            error:{
                type:String,
            }
        }
    }
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red:#F1453D;
.wrapper{
    display: inline-flex;
    align-items: center;
    margin-top: 8px;
    font-size: 12px;
    :not(:last-child){margin-right: .5rem}
    >input{
        height:32px;
        font-size: initial;
        border-radius:5px;
        background: #FFFFFF;
        border: 1px solid rgba(102,102,102,1);
        padding: .5rem;
        outline: none;
        &:hover{
            border-color: $border-color;
        }
        &:focus{
            box-shadow: inset 1px 2px $box-shadow-color;
        }
        &[disabled],&[readonly]{
            cursor: not-allowed;
            border-color: #bbb;
        }
    }
    .icon-error{fill: $red}
    .errorMassage{color: $red;}

}
</style>