webpackJsonp([1],[,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(12),a=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={name:"App",components:{qcut:a.default},data:function(){return{fixed:!0,file:null,ratio:[2,3]}},methods:{addImg:function(t){this.file=t.target.files[0]},cut1:function(){document.getElementById("qcut1").innerHTML='<img src="'+this.$refs.qcut1.getCropData()+'" />'},cut2:function(){document.getElementById("qcut2").innerHTML='<img src="'+this.$refs.qcut2.getCropData()+'" />'}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};s.addEvents=function(t,e,i){t.addEventListener?s.addEvents=function(t,e,i){t.addEventListener(e,i,!1)}:s.addEvents=function(t,e,i){t.attachEvent("on"+e,function(){i.call(t,arguments)})},s.addEvents(t,e,i)},e.default={props:["isFixed","fixedRatio","fileObj"],data:function(){return{base64:"",cropper_width:0,cropper_height:0,img_width:0,img_height:0,bg_width:0,bg_height:0,old_bg_width:0,old_bg_height:0,disX:0,disY:0,translateX:0,translateY:0,init_translateX:-1,init_translateY:-1,init_centerX:-1,init_centerY:-1,scaleBase:1,scaleX:1,scaleY:1,drag:null,cut_width:100,cut_height:100,fixed:!1,fixedNumber:[3,4],fixedRate:0,old_cut_width:100,old_cut_height:100,cut_translateX:0,cut_translateY:0,cut_maxLeft:0,cut_maxTop:0,cut_moving:!1}},filters:{format:function(t){return parseInt(t)}},methods:{cut_center:function(){this.cut_translateX=.5*(this.cropper_width-this.cut_width),this.cut_translateY=.5*(this.cropper_height-this.cut_height)},init_cut:function(){this.fixed&&(this.fixedRate=this.fixedNumber[0]/this.fixedNumber[1],this.cut_height=this.cut_width/this.fixedRate),this.cut_center()},limitRange:function(){this.cut_maxLeft=this.cropper_width-this.cut_width,this.cut_maxTop=this.cropper_height-this.cut_height},getPosition:function(t){var e=t||window.event,i=document.documentElement.scrollLeft||document.body.scrollLeft,s=document.documentElement.scrollTop||document.body.scrollTop;return{x:e.pageX||e.clientX+i,y:e.pageY||e.clientY+s}},initEvent:function(){var t=this;s.addEvents(this.$refs.cropper,"mousewheel",function(e){var i=0;e||(e=window.event),e.wheelDelta?(i=e.wheelDelta/120,window.opera&&(i=-i)):e.detail&&(i=-e.detail/3),""!=t.base64&&(i<0?t.scaleBase+=.01:t.scaleBase-=.01,t.scaleBase=t.scaleBase<=0?0:t.scaleBase,t.scaleX=t.scaleBase,t.scaleY=t.scaleBase),e.preventDefault()}),s.addEvents(this.$refs.cropper,"mousedown",function(e){var i=t.getPosition(e),s=i.x,a=i.y;"cropper-drag"==e.target.id?(t.disX=s-t.translateX,t.disY=a-t.translateY):"point"==e.target.className?(t.disX=s-e.target.offsetLeft,t.disY=a-e.target.offsetTop,t.old_cut_width=t.$refs.cut_cover.offsetWidth,t.old_cut_height=t.$refs.cut_cover.offsetHeight,t.old_cut_translateX=t.$refs.cut_cover.offsetLeft,t.old_cut_translateY=t.$refs.cut_cover.offsetTop):(t.disX=s-e.target.offsetLeft,t.disY=a-e.target.offsetTop),t.drag=e.target}),s.addEvents(this.$refs.cropper,"mousemove",function(e){if(null===t.drag)return!1;var i=t.getPosition(e),s=i.x,a=i.y;if("cropper-drag"==t.drag.id&&(t.translateX=s-t.disX,t.translateY=a-t.disY),"cut_cover"==t.drag.id){t.cut_moving=!0;var h=s-t.disX,n=a-t.disY;t.cut_translateX=h,t.cut_translateY=n}"point1"==t.drag.id&&(t.cut_width=t.old_cut_width-(s-t.disX+5),t.fixed?t.cut_height=t.cut_width/t.fixedRate:t.cut_height=t.old_cut_height-(a-t.disY+5),t.cut_translateX=t.old_cut_translateX+(t.old_cut_width-t.cut_width),t.cut_translateY=t.old_cut_translateY+(t.old_cut_height-t.cut_height)),"point2"==t.drag.id&&(t.cut_height=t.old_cut_height-(a-t.disY+5),t.fixed&&(t.cut_width=t.cut_height*t.fixedRate),t.cut_translateX=t.old_cut_translateX+(t.old_cut_width-t.cut_width),t.cut_translateY=t.old_cut_translateY+(t.old_cut_height-t.cut_height)),"point3"==t.drag.id&&(t.cut_width=s-t.disX+5,t.fixed?t.cut_height=t.cut_width/t.fixedRate:t.cut_height=t.old_cut_height-(a-t.disY+5),t.cut_translateY=t.old_cut_translateY+(t.old_cut_height-t.cut_height)),"point4"==t.drag.id&&(t.cut_width=s-t.disX+5,t.fixed&&(t.cut_height=t.cut_width/t.fixedRate)),"point5"==t.drag.id&&(t.cut_width=s-t.disX+5,t.fixed?t.cut_height=t.cut_width/t.fixedRate:t.cut_height=a-t.disY+5),"point6"==t.drag.id&&(t.cut_height=a-t.disY+5,t.fixed&&(t.cut_width=t.cut_height*t.fixedRate)),"point7"==t.drag.id&&(t.cut_width=t.old_cut_width-(s-t.disX+5),t.fixed?t.cut_height=t.cut_width/t.fixedRate:t.cut_height=a-t.disY+5,t.cut_translateX=t.old_cut_translateX+(t.old_cut_width-t.cut_width)),"point8"==t.drag.id&&(t.cut_width=t.old_cut_width-(s-t.disX+5),t.fixed&&(t.cut_height=t.cut_width/t.fixedRate),t.cut_translateX=t.old_cut_translateX+(t.old_cut_width-t.cut_width))}),s.addEvents(this.$refs.cropper,"mouseup",function(){t.cut_moving=!1,t.drag=null})},initBgImgPosition:function(){if(this.img_width<=this.cropper_width&&this.img_height<=this.cropper_height)this.bg_width=this.img_width,this.bg_height=this.img_height;else{this.cropper_width/this.cropper_height>=this.img_width/this.img_height?(this.bg_height=this.cropper_height,this.bg_width=this.img_width/(this.img_height/this.cropper_height)):(this.bg_width=this.cropper_width,this.bg_height=this.img_height/(this.img_width/this.cropper_width))}0==this.old_bg_width&&(this.old_bg_width=this.bg_width,this.old_bg_height=this.bg_height),this.translateX=.5*(this.cropper_width-this.bg_width),this.translateY=.5*(this.cropper_height-this.bg_height),-1==this.init_translateX&&(this.init_translateX=this.translateX,this.init_translateY=this.translateY)},toBase64:function(t){var e=this,i=new FileReader;i.onload=function(t){var i=t.target.result,s=new Image;s.onload=function(){e.img_width=this.width,e.img_height=this.height,e.scaleBase=1,e.scaleX=1,e.scaleY=1,e.old_bg_width=0,e.init_translateX=-1,e.initBgImgPosition(),e.base64=i},s.src=i},i.readAsDataURL(t)},addImg:function(t){this.toBase64(t.target.files[0])},getCropData:function(){return this.cut4()},cut4:function(){if(""==this.base64)return!1;var t=this.bg_width*this.scaleBase,e=this.bg_height*this.scaleBase,i=this.init_translateX-this.translateX,s=this.init_translateY-this.translateY,a=this.init_centerX-i,h=this.init_centerY-s,n=a-.5*t,c=h-.5*e,r=document.createElement("canvas"),o=r.getContext("2d");if(r.width=this.cut_width,r.height=this.cut_height,this.img_width<=this.cropper_width&&this.img_height<=this.cropper_height)o.drawImage(this.$refs.cut_img,(this.cut_translateX-n)/this.scaleBase,(this.cut_translateY-c)/this.scaleBase,this.cut_width/this.scaleBase,this.cut_height/this.scaleBase,0,0,r.width,r.height);else{if(this.cropper_width/this.cropper_height>=this.img_width/this.img_height)var d=this.cropper_height/this.img_height;else var d=this.cropper_width/this.img_width;o.drawImage(this.$refs.cut_img,(this.cut_translateX-n)/this.scaleBase/d,(this.cut_translateY-c)/this.scaleBase/d,this.cut_width/this.scaleBase/d,this.cut_height/this.scaleBase/d,0,0,r.width,r.height)}return r.toDataURL("image/png",1)},cut3:function(){var t=this;if(""==this.base64)return!1;var e=this.bg_width*this.scaleBase,i=this.bg_height*this.scaleBase;console.log("实际的宽度："+e),console.log("实际的高度："+i),console.log("初始化底图片translateX:"+this.init_translateX),console.log("初始化底图片translateY:"+this.init_translateY),console.log("当前图片translateX:"+this.translateX),console.log("当前图片translateY:"+this.translateY),console.log(this.init_translateX-this.translateX);var s=this.init_translateX-this.translateX,a=this.init_translateY-this.translateY;console.log("dis_x:"+s),console.log("dis_y:"+a),console.log("初始化底图片中心坐标x:"+this.init_centerX),console.log("初始化底图片中心坐标y:"+this.init_centerY);var h=this.init_centerX-s,n=this.init_centerY-a;console.log("缩放后的图片中心点x:"+h),console.log("缩放后的图片中心点y:"+n);var c=h-.5*e,r=n-.5*i;console.log("缩放后的x的偏移："+c),console.log("缩放后的y的偏移："+r);var o=document.createElement("canvas"),d=o.getContext("2d");o.width=e,o.height=i,d.drawImage(this.$refs.cut_img,0,0,this.img_width,this.img_height,0,0,o.width,o.height),setTimeout(function(){var e=document.createElement("canvas"),i=e.getContext("2d");e.width=t.cut_width,e.height=t.cut_height,i.drawImage(o,t.cut_translateX-c,t.cut_translateY-r,t.cut_width,t.cut_height,0,0,t.cut_width,t.cut_height),console.log(e.toDataURL())},200)},cut2:function(){var t=this;if(""==this.base64)return!1;console.log(this.$refs.front.getBoundingClientRect());var e=document.createElement("canvas"),i=e.getContext("2d");e.width=this.$refs.front_img.offsetWidth*this.scaleBase,e.height=this.$refs.front_img.offsetHeight*this.scaleBase,i.drawImage(this.$refs.cut_img,0,0,this.bg_width,this.bg_height,0,0,e.width,e.height),setTimeout(function(){var i=document.createElement("canvas"),s=i.getContext("2d");s.scale(t.scaleBase,t.scaleBase),i.width=t.cut_width,i.height=t.cut_height;var a=-t.translateX/t.scaleBase*.5,h=-t.translateY/t.scaleBase*.5;console.log(a),console.log(h),s.drawImage(e,a,h,t.cut_width,t.cut_height,0,0,t.cut_width,t.cut_height),console.log(i.toDataURL())},200)},cut1:function(){if(""==this.base64)return!1;var t=document.createElement("canvas"),e=t.getContext("2d");t.width=this.$refs.front_img.offsetWidth*this.scaleBase,t.height=this.$refs.front_img.offsetHeight*this.scaleBase,e.drawImage(this.$refs.cut_img,0,0,this.bg_width,this.bg_height,0,0,t.width,t.height),console.log(t.toDataURL());var i=document.createElement("canvas");i.width=this.cut_width,i.height=this.cut_height;var s=(i.getContext("2d"),this.cut_translateX-this.translateX),a=this.cut_translateY-this.translateY;console.log(s),console.log(a)},cut:function(){var t=this;if(""==this.base64)return!1;var e=document.createElement("canvas"),i=document.createElement("canvas"),s=e.getContext("2d"),a=i.getContext("2d");e.width=this.$refs.front_img.offsetWidth*this.scaleBase,e.height=this.$refs.front_img.offsetHeight*this.scaleBase,i.width=this.cut_width,i.height=this.cut_height,console.log(this.$refs.front_img.offsetWidth*this.scaleBase),s.drawImage(this.$refs.cut_img,0,0,this.bg_width,this.bg_height,0,0,e.width,e.height),console.log(e.toDataURL()),setTimeout(function(){a.drawImage(e,-t.frontX,-t.frontY,t.cut_width*t.scaleBase,t.cut_height*t.scaleBase,0,0,t.cut_width,t.cut_height),console.log(i.toDataURL())},200)}},mounted:function(){this.cropper_width=this.$refs.cropper.offsetWidth,this.cropper_height=this.$refs.cropper.offsetHeight,this.init_centerX=.5*this.cropper_width,this.init_centerY=.5*this.cropper_height,this.init_cut(),this.initEvent()},computed:{frontX:function(){return this.translateX-this.cut_translateX},frontY:function(){return this.translateY-this.cut_translateY}},watch:{isFixed:{handler:function(t){""!==t&&(this.fixed=t,this.init_cut())},immediate:!0},fixedRatio:{handler:function(t){t&&(this.fixedNumber=t,this.init_cut())},immediate:!0},fileObj:function(t){null!==t&&void 0!==t&&""!==t&&this.toBase64(t)}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=i(5),h=s(a),n=i(9),c=s(n);new h.default({render:function(t){return t(c.default)}}).$mount("#app")},,,,,function(t,e,i){"use strict";function s(t){i(10)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),h=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);var c=i(15),r=i(1),o=s,d=r(h.a,c.a,!1,o,null,null);e.default=d.exports},function(t,e){},,function(t,e,i){"use strict";function s(t){i(13)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(3),h=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);var c=i(14),r=i(1),o=s,d=r(h.a,c.a,!1,o,"data-v-6c0e47e4",null);e.default=d.exports},function(t,e){},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"cropper",staticClass:"cropper"},[""!=t.base64?i("div",{staticClass:"bg",style:{width:t.bg_width+"px",height:t.bg_height+"px",transform:"scale("+t.scaleX+","+t.scaleY+") translate3d("+t.translateX/t.scaleBase+"px,"+t.translateY/t.scaleBase+"px,0px)"}},[i("img",{ref:"cut_img",attrs:{src:t.base64}})]):t._e(),t._v(" "),i("div",{staticClass:"cropper-drag cropper-move",attrs:{id:"cropper-drag"}}),t._v(" "),i("div",{ref:"cut_cover",staticClass:"cut_cover",style:{width:t.cut_width+"px",height:t.cut_height+"px",left:t.cut_translateX+"px",top:t.cut_translateY+"px"},attrs:{id:"cut_cover"}},[i("div",{staticClass:"img_cover"},[""!=t.base64?i("div",{ref:"front",staticClass:"front",style:{width:t.bg_width+"px",height:t.bg_height+"px",transform:"scale("+t.scaleX+","+t.scaleY+") translate3d("+t.frontX/t.scaleBase+"px,"+t.frontY/t.scaleBase+"px,0px)"}},[i("img",{ref:"front_img",attrs:{src:t.base64}})]):t._e()]),t._v(" "),t.cut_moving?t._e():[i("div",{attrs:{id:"tip"}},[t._v(t._s(t._f("format")(t.cut_width))+"x"+t._s(t._f("format")(t.cut_height)))]),t._v(" "),i("span",{staticClass:"point",attrs:{id:"point1"}}),t._v(" "),i("span",{staticClass:"point",attrs:{id:"point2"}}),t._v(" "),i("span",{staticClass:"point",attrs:{id:"point3"}}),t._v(" "),i("span",{staticClass:"point",attrs:{id:"point4"}}),t._v(" "),i("span",{staticClass:"point",attrs:{id:"point5"}}),t._v(" "),i("span",{staticClass:"point",attrs:{id:"point6"}}),t._v(" "),i("span",{staticClass:"point",attrs:{id:"point7"}}),t._v(" "),i("span",{staticClass:"point",attrs:{id:"point8"}})]],2)])},a=[],h={render:s,staticRenderFns:a};e.a=h},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("input",{attrs:{id:"file",type:"file",accept:"image/png,image/jpeg,image/gif,image/jpg"},on:{change:t.addImg}}),i("br"),t._v("\n  =============================\n  "),i("br"),t._v("自由裁图：\n  "),i("div",{staticStyle:{width:"200px",height:"300px"}},[i("qcut",{ref:"qcut1",attrs:{"file-obj":t.file}})],1),t._v(" "),i("span",{attrs:{id:"qcut1"}}),t._v(" "),i("button",{on:{click:t.cut1}},[t._v("裁图")]),i("br"),t._v("\n  ============================== "),i("br"),t._v("\n  等比裁图\n  "),i("div",{staticStyle:{width:"300px",height:"300px"}},[i("qcut",{ref:"qcut2",attrs:{"is-fixed":t.fixed,"fixed-ratio":t.ratio,"file-obj":t.file}})],1),t._v(" "),i("span",{attrs:{id:"qcut2"}}),t._v(" "),i("button",{on:{click:t.cut2}},[t._v("裁图")]),i("br"),t._v("\n  ============================== "),i("br")])},a=[],h={render:s,staticRenderFns:a};e.a=h}],[4]);