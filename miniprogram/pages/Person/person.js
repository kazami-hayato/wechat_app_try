//person.js
import {getStudentInfo} from "../../apis/auth";

const app = getApp()

Page({
    data: {
        person: {
            info: undefined
        }
    },
    handleClick(e) {
        wx.navigateTo({
            url: '/pages/Consult/consult'
        })
    },
    onShow(e) {
        const that = this;
        getStudentInfo().then(res => {
            that.setData({
                'person.info': res.data
            })
        })
    },
    goChangeInfo(e){
        wx.navigateTo({
            url:'/pages/ChangeInfo/change'
        })
    },
    goChangePwd(e){
        wx.navigateTo({
            url:'/pages/ChangePwd/password'
        })
    },
    goAbout(e){
        wx.navigateTo({
            url:'/pages/About/about'
        })
    },
})
