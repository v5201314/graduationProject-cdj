<template>
  <div>
    <!--底部-->
    <div class="bottomBody">
      <div class="wrapper">
        <div class="di">
          <ul>
            <li>关于我们</li>
            <li><a href="#">公司简介</a></li>
            <li><a href="#">领导致辞</a></li>
            <li><a href="#">机构设置</a></li>
            <li><a href="#">地理位置</a></li>
            <li><a href="#">图片介绍</a></li>
          </ul>
        </div>
        <div class="di">
          <ul>
            <li>我们的产品</li>
            <li><a href="#">产品名称第一</a></li>
            <li><a href="#">汇源果汁</a></li>
            <li><a href="#">哇哈哈矿泉水</a></li>
          </ul>
        </div>
        <div class="di">
          <ul>
            <li>市场活动与促销</li>
            <li><a href="#">年底促销</a></li>
            <li><a href="#">6.18年中大促销</a></li>
          </ul>
        </div>
        <div class="di">
          <ul>
            <li>服务支持</li>
            <li><a href="#">售后服务</a></li>
            <li><a href="#">资料下载</a></li>
            <li><a href="#">招商加盟</a></li>
          </ul>
        </div>
        <div class="di">
          <ul>
            <li>合作伙伴</li>
            <li><a href="#">网易</a><a href="#">搜狐</a></li>
            <li><a href="#">新浪</a><a href="#">加盟</a></li>
            <li><a href="#">中信</a><a href="#">腾讯</a></li>
          </ul>
        </div>
        <div class="hou">
          <div class="qrCode">
            <img src="@/assets/qrcode.png" />
            <div class="contact">
              <a href="#"><img src="@/assets/lian1.jpg" /></a>
              <a href="#"><img src="@/assets/lian2.jpg" /></a>
              <a href="#"><img src="@/assets/lian3.jpg" /></a>
              <a href="#"><img src="@/assets/lian4.jpg" /></a>
              <a href="#"><img src="@/assets/lian5.jpg" /></a>
              <a href="#"><img src="@/assets/lian6.jpg" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <!--声明-->
    <div class="fawuBody">
      <div class="wrapper">
        <div></div>
        <div>
          <p class="number">400-123-123456</p>
        </div>
        <div>
          <p class="">
            © 20010-20011 版权所有 2003 -2010 &emsp;&emsp; yusheng.cn &emsp;
            毕业设计作品！四川电子机械职业技术学院！
          </p>
        </div>
        <a href="#" class="returnTop"><img src="@/assets/returnTop.png" /></a>
      </div>
    </div>
    <!--声明-->
  </div>
</template>

<script>
export default {
  name: "UserFooter",
};
</script>

<style>
/*底部代码*/
.bottomBody {
  width: 100%;
  height: 300px;
  background-color: #4d4d4d;
}
.bottomBody .wrapper {
  height: 300px;
  padding: 19px;
  display: flex;
}
.bottomBody .di {
  width: 103px;
  height: 202px;
  border-right: 1px solid #666;
  margin-right: 19px;
}
.bottomBody .di ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 18px;
}
.bottomBody .di ul li a {
  font-size: 12px;
  margin-right: 18px;
  color: #b4b4b4;
}
.bottomBody .di ul li:first-child {
  margin-bottom: 24px;
  font-size: 12px;
  color: #fcfcfc;
}
.bottomBody .di ul li {
  margin-bottom: 10px;
}
.bottomBody .di ul li a:hover {
  color: #f25d28;
}
.bottomBody .wrapper .hou {
  width: 149px;
  height: 202px;
  padding: 12px 0 0 36px;
}
.bottomBody .wrapper .qrCode {
  width: 149px;
  height: 190px;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.bottomBody .wrapper .qrCode .contact {
  width: 131px;
  display: flex;
  justify-content: space-between;
}

.fawuBody {
  width: 100%;
  height: 100px;
  background-color: #333;
}
.fawuBody .wrapper {
  height: 100px;
  padding-top: 11px;
  display: flex;
  justify-content: space-between;
  padding-right: 100px;
  color: #fff;
  position: relative;
}
.fawuBody .wrapper div:nth-child(n + 2) {
  align-self: center;
}
.fawuBody .wrapper .returnTop {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translate(-50%, 0);

  width: 113px;
  height: 38px;

  text-align: center;
  line-height: 33px;
}

.fawuBody .wrapper .number {
  font-size: 20px;
}

.triangle span {
  font-size: 1px;
  margin-right: 10px;
}
</style>