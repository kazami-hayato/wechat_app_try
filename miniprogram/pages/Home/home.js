//home.js
import {getCourses, getCourses} from "../../apis/auth";

const app = getApp()

Page({
    data: {
        person: {
            avatar: 'https://www.hbuvt.com/cdn/photos/testkxy.jpeg',
            info: {
                real_name: '孔祥宜',
                exam_id: 'testkxy',
                major: '计算机',
                iscollege: '高起本',
                id_card: '41231323173',
                main_school: '主考学校',
                sub_school: '主考分校'
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
    upper(e) {
        console.log(e)
    },

    lower(e) {
        console.log(e)
    },

    scroll(e) {
        console.log(e)
    },

    scrollToTop() {
        this.setAction({
            scrollTop: 0
        })
    },
    tap() {
    },

    changeProperty: function (e) {
        const propertyName = e.currentTarget.dataset.propertyName;
        const newData = {};
        newData[propertyName] = e.detail.value
        this.setData(newData)
    },
    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    },
    onShow(e) {
        const that = this;
        getCourses().then(res => {
            let courses=res.data
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

})
