import {request, setConfig} from './wx-promise-request';

const app = getApp();
console.log(app)
const {$Toast} = require('../components/iview/base/index');
const url = app.globalData.url
const exam_id = app.globalData.exam_id

export const getCourses = () => {
    return request({
        url: url + "/course/all/" + exam_id,
        header: {
            'content-type': 'application/json',
        },
    })
        .then(res => res.data
        )
        .catch(error => {
            $Toast({
                content: '请求课程数据出错请联系客服',
                type: 'error',
                duration: 2
            });
        })
}

export const getStudentInfo = () => {
    return request({
        url: url + "/person_info/" + exam_id,
        header: {
            'content-type': 'application/json',
        },
    })
        .then(res => res.data
        )
        .catch(error => {
            $Toast({
                content: '请求课程数据出错请联系客服',
                type: 'error',
                duration: 2
            });
        })
}

export const getCourseInfo = () => {
    return request({
        url: url + "/courses/fetchById",
        header: {
            'content-type': 'application/json',
        },
        data:{
            exam_id: exam_id,
            course_id:'03708'
        }
    })
        .then(res => res.data
        )
        .catch(error => {
            $Toast({
                content: '请求课程数据出错请联系客服',
                type: 'error',
                duration: 2
            });
        })

}
