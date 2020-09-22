import {request, setConfig} from './wx-promise-request';

const app = getApp();
console.log(app)
const {$Toast} = require('../components/iview/base/index');
const url = app.globalData.url
const exam_id = app.globalData.exam_id


export const getExamination = (params) => {
    return request({
        url: url + `/stuexam?exam_id=${params.exam_id}&course_id=${params.course_id}&exam_type=${params.exam_type}`,
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
// 保存进度，完成考试，提交试卷等接口，将试卷的json提交至后台
export const saveExamination = params => {
    return httpInstance.post(`/stuexam?exam_id=${params.exam_id}&course_id=${params.course_id}&exam_type=${params.exam_type}`,params.content)
        .then(res => res.data)
}


export const updateExaminationGrad = params => {
    return httpInstance.put(`/stucourse`,params).then(res => res.data)
}

// 拿到一张全新试卷
export const reExamination = params => {return httpInstance.get(`/origin_exam?&exam_id=${params.exam_id}&course_id=${params.course_id}&exam_type=${params.exam_type}`).then(res => res.data)}
//校验IP
export const verifyIp = ip => {return httpInstance.get(`/authentication?ip=${ip}`).then(res => res.data)}
