// pages/Home/Component/CourseBoard/courseBoard.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        course_name: String,
        exam_time: String,
        watch_sum: String,
        total_sum: String,
        exam_sum: String,
        main_finished: String

    },

    /**
     * 组件的初始数据
     */
    data: {
        showContent: 'board-hidden',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        openCollapse(e) {
            const that = this
            if (that.data.showContent === 'board-hidden') {
                that.setData({
                    'showContent': ''
                })
            } else {
                that.setData({
                    'showContent': 'board-hidden'
                })
            }
        },
        goVideo(e) {
            wx.navigateTo({
                url: '/pages/Video/video'
            })
        },
    }
})
