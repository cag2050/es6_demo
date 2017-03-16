<template>
<div>Object.assign方法使用：
    <div>控制台查看输出部分</div>
</div>
</template>
<script>
export default {
    name: 'Object_assign',
    data() {
        return {

        }
    },
    mounted: function () {
        this.$nextTick(function (){
            let obj = { a:'1',b:'2'}
            console.log('obj =')
            console.log(obj)
            let newObj = Object.assign(obj,{a:'111'})
            console.log('newObj =')
            console.log(newObj)
        })
    }
}
</script>