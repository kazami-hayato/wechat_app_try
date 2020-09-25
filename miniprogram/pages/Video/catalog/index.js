// pages/Video/catalog/index.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    catalog: {
      type: Array,
      value: [{"id":"wqe"}],
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    catalogMap: {
      type: Object,
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    catalogDict: {
      type: Object,
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    toView: 'red',
    scrollTop: 100
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scroll: function(e) {
      // console.log(e)
    },
  },

  /**
   * 生命周期函数--监听页面显示
   */

})
