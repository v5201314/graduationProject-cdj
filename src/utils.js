import axios from 'axios'
import { SERVE_URL_DD } from './static';
//分页查询一个表的数据
export function getData(tabalName, size, begin, permissions) {
    return axios.get(
        SERVE_URL_DD +
        "/SelectAllData" +
        `?permissions=${permissions}` +
        `&end=${size}` +
        `&tabalName=${tabalName}` +
        `&begin=${begin}`
    )
        .then(
            (response) => {
                return response.data
            },
            (error) => {
                //用户名存在的话就显示错误信息
                this.$message.error(error);
            }
        )

}

//查询一个表的所有数据
export function getTotal(tabalName,permissions) {
    return axios.get(
        SERVE_URL_DD +
        "/SelectAllCount" +
        `?permissions=${permissions}` +
        `&tabalName=${tabalName}`

    )
        .then(
            (response) => {
                return response.data
            },
            (error) => {
                //用户名存在的话就显示错误信息
                this.$message.error(error);
            }
        )

}

//删除某个表中的某个数据id
export function deleteData(api,id) {
    return axios.get(
        SERVE_URL_DD +
        `/${api}` +
        `?id=${id}` 

    )
        .then(
            (response) => {
                return response.data
              
            },
            (error) => {
                //用户名存在的话就显示错误信息
                this.$message.error(error);
            }
        )

}