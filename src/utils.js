import axios from 'axios'
export function abbreviatedInfor_pagination(name,size,current){
    axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
            response=>{
                console.log('请求成功了',response.data.items);
                return response.data.items
            },
            error=>{
                console.log('请求失败了',error.message);
                this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
            }
        )
}