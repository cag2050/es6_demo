<template>
<div>Array方法使用：对象里面存数组
    <div>控制台查看输出部分</div>
</div>
</template>
<script>
export default {
    name: 'Destructuring',
    data() {
        return {

        }
    },
    mounted: function () {
        this.$nextTick(function (){
            var data = [];
            var obj = {
                'uid': '',
                'nick': '魔力盒MCN',
                'profile_url': '',
                'icon': '',
                'status': 0,
                'create_time': '1122221',
                'modify_time': ''
            }
            var obj2 = {
                'uid': '',
                'nick': '魔力盒MCN2333',
                'profile_url': '',
                'icon': '',
                'status': 0,
                'create_time': '',
                'modify_time': ''
            }
            data.push(obj)
            data.push(obj2)
            let objAll = {a:'1'};
            objAll.data = data;
            console.log('Array.isArray(data) =')
            console.log(Array.isArray(data))
            console.log('objAll =')
            console.log(objAll)
            console.log('objAll.data.length =')
            console.log(objAll.data.length)
        })
    }
}
</script>