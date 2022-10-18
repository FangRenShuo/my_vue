/**
 * 整个项目api 的管理
 * 
 */

import request from "./request";
 export default{
     //home 组件 左侧表格数据获取
     getTableData(params){
         return request({
            url:'/home/getTableData',
            method:'get', 
            data:params,
            mock:true    
         })
     },
     getCountData(){
         return request({
            url:'/home/getCountData',
            method:'get', 
            mock:true,
         })
     },
      getchartData(){
        return request({
            url:'/home/getChartData',
            method:'get', 
            mock:true,
         })
     },
      getUserData(params){
            return request({
                url:'/user/getUser',
                method:'get',
                mock:false,
                data:params
                //data:{
                    // total:0,
                    // page:1,
                // }
            })
      },
      addUser(params){
        return request({
            url:'/user/add',
            method:'post',
         //这个mock如果是true的话 用的就是线上factmock的数据
            mock:false,
            data:params
            //data:{total:0,page:1,// }
        })
      },
      editUser(params){
        return request({
            url:'/user/edit ',
            method:'post',
            mock:false,
            data:params
        })  
    },
       deleteUser(params){
        return request({
            url:'/user/delete',
            method:'get',
            mock:false,
            data:params
        })  
    },
    //根据用户名不同 返回不一样的菜单列表
    getMenu(params){
        return request({
            url:'/permission/getMenu',
            method:'post',
            mock:false,
            data:params
        })
    }
 }