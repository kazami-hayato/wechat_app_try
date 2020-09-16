// miniprogram/pages/Grade/grade.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        columns: [
            {
                key: 'course_name',
                title: '课程名称',
                width: 100,
                fixed: 'left',
                align: 'center'
            },
            {
                key: 'watch_score',
                title: '视频得分',
                width: 50,
            }, {
                key: 'exam_score',
                width: 50,
                fixed: 'left',
                title: '测验得分'
            }, {
                key: 'final_exam',
                width: 50,
                title: '综合测验'
            },
            {
                key: 'total_score',
                width: 50,
                title: '总分'
            }
        ],
        rows: [
            {course_name: '测试课程1', watch_score: 12, exam_score: 22, final_exam: 22, total_score: 33},
            {course_name: '测试课程1', watch_score: 12, exam_score: 22, final_exam: 22, total_score: 33},
            {course_name: '测试课程1', watch_score: 12, exam_score: 22, final_exam: 22, total_score: 33},

        ],
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
    onShow: function () {

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
