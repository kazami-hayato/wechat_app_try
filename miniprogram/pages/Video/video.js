// miniprogram/pages/Video/video.js
import polyv from '../../utils/polyv.js';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: '',
        current: '1',
        // pane

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
        let vid = '3828390191faee6d7d4f9b9acb8b646d_3';

        /*获取视频数据*/
        let obj = {
            vid: vid,
            viewerInfo: {
                viewerId: '38770077709', // 播放观看日志学员ID
                viewerName: 'polyv' // 播放观看日志学员昵称
            },
            callback: videoInfo => {
                if (videoInfo.type === 'error') {
                    console.log('videoInfo', videoInfo);
                    return;
                }

                this.setData({
                    src: videoInfo.src[0],
                });
            }
        };

        this.player = polyv.getVideo(obj);
        // setInterval(() => {
        //   const data = this.player.j2s_realPlayStatus();
        //   console.info(data, '---data---');
        // }, 3000);
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
        this.player.destroy();

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

    },

    timeupdate: function (e) {
        this.player.timeUpdate(e);
    },

    handleChange({detail}) {
        const that = this
        that.setData({
            current: detail.key
        });
        that.setData({})
    },


})
