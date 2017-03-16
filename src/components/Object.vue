<template>
<div>Object方法使用：对象里面存对象
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
            var data = {};
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
            data.mcn1 = obj;
            data.mcn2 = obj2;
            console.log(data);
            console.log(Object.keys(data).length);
            for( let i in data) {
                console.log(data[i]);
            }

        })
    }
}
</script>