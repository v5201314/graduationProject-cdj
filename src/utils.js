import axios from 'axios'
import { SERVE_URL } from './static';
export function abbreviatedInfor_pagination(name,size,current){
    axios.get(SERVE_URL+name+`?q=${this.keyWord}`).then(
            response=>{
                console.log('请求成功了',response.data.items);
                return response
            },
            error=>{
                console.log('请求失败了',error.message);
            }
        )
}