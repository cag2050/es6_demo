<template>
<div>解构赋值（Destructuring）：</div>
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
            console.log('解构赋值（Destructuring）:')
            console.log('let [head,...tail] = [1,2,3,4];');
            let [head,...tail] = [1,2,3,4];
            console.log('tail =')
            console.log(tail)
        })
    }
}
</script>