import {request, setConfig} from './wx-promise-request';

const {$Toast} = require('../components/iview/base/index');

const url = "https://www.hbuvt.com/apis/v1/frontend"

export const getCourses = (exam_id) => {
    return request({
        url: url + "/course/all/testkxy",
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
