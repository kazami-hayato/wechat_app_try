// pages/Video/exam/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        exams_score:{
            type:Array,
            observer: function (newVal, oldVal, changedPath) {
                // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串
                // 通常 newVal 就是新设置的数据， oldVal 是旧数据
                console.log(newVal)
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        exams: [
            {title: '阶段测评一'},
            {title: '阶段测评一'},
            {title: '阶段测评一'},
            {title: '阶段测评一'},
            {title: '综合测评'}

        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        go(e){
            console.log(e.currentTarget.dataset['index'])
            //go
        }
    }
})
