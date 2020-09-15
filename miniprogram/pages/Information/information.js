// favorite.js
const app = getApp()

Page({
    data: {
        array: ['全部', '新闻', '通知', '法律法规'],
        index: 0,
        notices: [
            {
                title: '这是一则通知',
                type: '新闻',
                author: 'zerk',
                content: 'weq',
                datetime: '2020-07-01 14:22:11'
            },
            {
                title: '这是一则通知',
                type: '新闻',
                author: 'zerk',
                content: 'weq',
                datetime: '2020-07-01 14:22:11'
            },
            {
                title: '这是一则通知',
                type: '新闻',
                author: 'zerk',
                content: 'weq',
                datetime: '2020-07-01 14:22:11'
            }
        ],
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
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
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
