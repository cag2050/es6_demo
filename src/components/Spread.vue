<template>
<div>{{ msg }}
    <div>控制台查看输出部分</div>
    <div>将字符串'123'转为数组 [...'123'] = {{ toArray }}</div>
    <div>[1,...[2,3,4],5] = {{ toString }}</div>
</div>
</template>
<script>
export default {
  name: 'Spread',
  data() {
    return {
      msg: '扩展运算符（spread）是三个点（...）。'
    };
  },
  mounted: function () {
    this.$nextTick(function () {
        this.consoleArray()
        console.log('将数组转为用逗号分隔的参数序列，类似于es5中apply')
        console.log('...[1,2,3] =')
        console.log(...[1,2,3])
        console.log('1,...[2,3,4],5 =')
        console.log(1,...[2,3,4],5)
        console.log('将字符串转为真正的数组')
        console.log("[...'123'] =")
        console.log([...'123'])
        console.log('扩展运算符内部调用的是数据结构的Iterator接口。只要具有Iterator接口的对象，都可以使用扩展运算符')
        let map = new Map([
            [1,'one'],
            [2,'two'],
            [3,'three']
        ]);
        console.log('...map.keys() =')
        console.log(...map.keys())
        console.log('[...map.keys()] =')
        console.log([...map.keys()])
    })
  },
  computed: {
    toArray: function () {
     return [...'123']
    },
    toString: function () {
     return [1,...[2,3,4],5]
    }
  },
  methods: {
    consoleArray: function () {
        console.log('执行methods中consoleArray函数')
        console.log('...[1,2,3] =')
        console.log(...[1,2,3])
        console.log('{...[1,2,3]} =')
        console.log({...[1,2,3]})
    }
  }
};
</script>