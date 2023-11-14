<template>
    <table id="tab1">
      <tr class="tableHeader">
        <th>序列</th>
        <th>商品名</th>
        <th>分类</th>
        <th>数量</th>
        <th>操作</th>
      </tr>
      <tr v-for="(data, index) in showData" :key="data.id">
        <td class="ge">{{ index }}</td>
        <td class="ge">{{ data.commodityName }}</td>
        <td class="ge">{{ data.commodityClassify }}</td>        
        <td class="ge">{{ data.commodityTotal }}</td>        
        <td class="ge">
          <el-button type="primary" @click="userDetailsButton(data.id)"
            >详情</el-button
          >
        </td>
      </tr>
  
      <el-dialog
        class="xiangxi"
        title="商品详细信息"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <el-descriptions class="margin-top" :column="4" :size="size">
          <template slot="extra">
            <el-dialog
              width="30%"
              title="此操作不可逆,确认下架该商品？"
              :visible.sync="innerVisible"
              append-to-body
            >
              <el-button
                type="primary"
                @click="deleteUserButton(userDetails.id)"
                style="float: right"
                >确 定</el-button
              >
              <el-button @click="innerVisible = false">取 消</el-button>
            </el-dialog>
            <el-button type="danger" size="small" @click="innerVisible = true"
              >下架商品</el-button
            >
          </template>
  
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-user"></i>
              商品名
            </template>
            {{ commodityDetails.commodityName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-mobile-phone"></i>
              分类
            </template>
            {{ commodityDetails.commodityClassify }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-location-outline"></i>
              数量
            </template>
            {{ commodityDetails.commodityTotal }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              售价
            </template>
            {{ commodityDetails.commodityPrice }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <i class="el-icon-office-building"></i>
              商品介绍
            </template>
           {{ commodityDetails.commodityIntroduce }}
          </el-descriptions-item>
        </el-descriptions>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </table>
  </template>
  
  <script>
  import { deleteData } from '@/utils';
  export default {
    name: "AdminCommodity",
    props: ["showData"],
    data() {
      return {
        dialogVisible: false,
        innerVisible: false,
        size: "",
        commodityDetails: {},
      };
    },
    methods: {
      chakan(id) {
        console.log(id);
      },
      handleClose(done) {
        this.$confirm("确认关闭？")
          .then((_) => {
            done();
          })
          .catch((_) => {});
      },
      //点击详情按钮触发
      userDetailsButton(id) {
        this.dialogVisible = true;
        this.commodityDetails= this.showData.filter((user)=>{
          return user.id==id
        })[0]
      
      },
      //下架商品
      deleteUserButton(id) {
        this.innerVisible = false;
        this.dialogVisible = false;
        deleteData('DeleteCommodity',id)
        this.$message.success('下架成功');
        location.reload()
    },
    },
  };
  </script>
  
  <style lang="less">
  #tab1 {
   
    .xiangxi {
      tr {
        height: 60px;
        td {
          border-radius: 5px;
          div {
            line-height: 60px;
            text-align: center;
            span{
              border-radius:5px ;
           
            }
            span:nth-child(1) {
              background-color: rgb(38, 191, 225);
            }
            span:nth-last-child(1) {
              background-color: rgb(203, 217, 235);
            }
          }
        }
      }
    }
  }
  </style>