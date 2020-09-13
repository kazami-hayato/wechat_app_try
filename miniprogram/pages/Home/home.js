//home.js
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
            courses: [
                {
                    course_name: '测试课程1',
                    exam_time: '未定',
                    watch_time: 0,
                    total_time: 0,
                    finished_exam: 0,
                    total_exams: 0,
                    final_exam: 0,
                    total_final_exams: 0
                },
                {
                    course_name: '测试课程2',
                    exam_time: '未定',
                    watch_time: 0,
                    total_time: 0,
                    finished_exam: 0,
                    total_exams: 0,
                    final_exam: 0,
                    total_final_exams: 0
                }
            ]
        },
        recommend:
            [
                {
                    title: '沙拉',
                    src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2868086659,687271532&fm=26&gp=0.jpg'
                },
                {
                    title: '烧烤',
                    src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2910643299,2019005270&fm=26&gp=0.jpg'
                },
                {
                    title: '烤鱼',
                    src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3476624165,2756264362&fm=26&gp=0.jpg'
                },
                {
                    title: '小炒黄牛肉',
                    src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1435288785,2283988937&fm=15&gp=0.jpg'
                },
                {
                    title: '羊蝎子火锅',
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582290238653&di=366731853b335f4e7ffd8842a6512698&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181220%2F3655cef2d7b74c39b4f821548ed98d52.jpeg'
                }],
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
        for (let i = 0; i < order.length; ++i) {
            if (order[i] === this.data.toView) {
                this.setData({
                    toView: order[i + 1],
                    scrollTop: (i + 1) * 200
                })
                break
            }
        }
    },

    changeProperty: function (e) {
        var propertyName = e.currentTarget.dataset.propertyName
        var newData = {}
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
    }

})
