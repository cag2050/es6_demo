<template>
<div>解构赋值（Destructuring）：
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
            console.log('解构赋值（Destructuring）:')
            console.log('let [head,...tail] = [1,2,3,4];');
            let [head,...tail] = [1,2,3,4];
            console.log('tail =')
            console.log(tail)
            console.log('对象的解构赋值')
            var obj = { one:'1',two:'2',three:'3'}
            console.log("var obj = { one:'1',two:'2',three:'3'}")
            let {one,two,three:threeRename} = obj;
            console.log('let {    one,    two,three:threeRename} = obj; 等价于=')
            console.log('let {one:one,two:two,three:threeRename} = obj;')
            console.log('one = '+one)
            console.log('two = '+two)
            console.log('threeRename = '+threeRename)
            console.log('如果定义的变量，和对象的属性同名，不需要再定义一个变量，相当于 let one = obj.one')
            console.log('如果定义的变量，和对象的属性不同名，需要在冒号后面定义一个变量，相当于 let threeRename = obj.three。注意，冒号后是新定义的变量')

        })
    }
}
</script>