// miniprogram/pages/Course/course.js
import {getCourses, getStudentInfo} from "../../apis/auth";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      person: {
        info: {
          // real_name: '孔祥宜',
          // exam_id: 'testkxy',
          // major: '计算机',
          // iscollege: '高起本',
          // id_card: '41231323173',
          // main_school: '主考学校',
          // sub_school: '主考分校'
        },
        courses: []
      },
      indicatorDots: false,
      vertical: false,
      autoplay: false,
      circular: false,
      interval: 2000,
      duration: 500,
      previousMargin: 0,
      displayNum: 2,
      nextMargin: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(e) {
    const that = this;
    getStudentInfo().then(res => {
      that.setData({
        'person.info': res.data
      })
    })
    getCourses().then(res => {
      let courses = res.data
      console.log(courses)
      courses.forEach(course => {
        let num = 0
        if (course.test1 > 0) num += 1
        if (course.test2 > 0) num += 1
        if (course.test3 > 0) num += 1
        if (course.test4 > 0) num += 1
        course['exam_sum'] = num
        course['main_finished'] = 0
        if (course.main_test > 0) course['main_finished'] = 1
      })
      // console.log(courses)
      that.setData({
        'person.courses': courses
      })
    });

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
