// miniprogram/pages/Video/video.js
import polyv from '../../utils/polyv.js';
import {getCourseInfo} from "../../apis/auth";

const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: '',
        current: '3',
        catalog: [],
        catalogMap: {},
        catalogDict: {},
        playList: [],
        exams_score:[1,2,3,4,5],
        process:[]
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

        getCourseInfo().then(res => {
            const catalogDict = JSON.parse(res.data.catalogdict || '{}');
            const catalogMap = JSON.parse(res.data.catalogmap || '{}');
            const catalogTree = JSON.parse(res.data.catalogtree || '{}');
            this.setData({
                catalog:catalogTree['catalogtree'],
                catalogMap:catalogMap,
                catalogDict:catalogDict['catalogdict']
            })
            this.data.catalog = catalogTree['catalogtree'];
            this.data.catalogMap = catalogMap;
            this.data.catalogDict = catalogDict['catalogdict'];
            let current=''
            console.log(catalogMap)
            // console.log(this.data)
            // this.getPlayList(this.data.catalog);
            // if (this.data.playList.length === 0) {
            //     this.getPlayedPlayList(this.data.catalog);
            // }
            // console.log(this.data.playList)
        })

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
        this.setData({
            current: detail.key
        });
        this.setData({})
    },
    /**
     * @Author lau
     * @Description 获取播放列表
     * @Date 2020-02-07 19:24:14 星期五
     */
    getPlayList(catalog) {

        for (let i = 0; i < catalog.length; i++) {
            if (this.data.catalogDict[catalog[i]['id']]['vid'] && (!this.data.catalogMap[catalog[i]['id']]
                || (this.data.catalogMap[catalog[i]['id']] && this.data.catalogMap[catalog[i]['id']]['finish']))) {
                if (this.data.catalogDict[catalog[i]['id']]['vid'].trim() !== '') {
                    this.data.playList.push({
                        'vid': this.data.catalogDict[catalog[i]['id']]['vid'],
                        'id': catalog[i]['id'],
                        'label': this.data.catalogDict[catalog[i]['id']]['label']
                    })
                }
            } else if (catalog[i].children) {
                this.getPlayList(catalog[i]['children'])
            }
        }
    },
    /**
     * @Author lau
     * @Description 获取播放列表
     * @Date 2020-03-29 13:10:23 Sunday
     */
    getPlayedPlayList(catalog) {
        for (let i = 0; i < catalog.length; i++) {
            if (this.data.catalogDict[catalog[i]['id']]['vid']) {
                if (this.data.catalogDict[catalog[i]['id']]['vid'].trim() !== '') {
                    this.data.playList.push({
                        'vid': this.data.catalogDict[catalog[i]['id']]['vid'],
                        'id': catalog[i]['id'],
                        'label': this.data.catalogDict[catalog[i]['id']]['label']
                    })
                }
            } else if (catalog[i].children) {
                this.getPlayedPlayList(catalog[i]['children'])
            }
        }
    },

})
