webpackJsonp([1],[,,function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(12),a=function(t){return t&&t.__esModule?t:{default:t}}(s);i.default={name:"App",components:{qcut:a.default},data:function(){return{fixed:!0,file:null,ratio:[2,3]}},methods:{addImg:function(t){this.file=t.target.files[0]},cut1:function(){document.getElementById("qcut1").innerHTML='<img src="'+this.$refs.qcut1.getCropData()+'" />'},cut2:function(){document.getElementById("qcut2").innerHTML='<img src="'+this.$refs.qcut2.getCropData()+'" />'}}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={};s.addEvents=function(t,i,e){t.addEventListener?s.addEvents=function(t,i,e){t.addEventListener(i,e,!1)}:s.addEvents=function(t,i,e){t.attachEvent("on"+i,function(){e.call(t,arguments)})},s.addEvents(t,i,e)},i.default={props:["isFixed","fixedRatio","fileObj"],data:function(){return{base64:"",cropper_width:0,cropper_height:0,img_width:0,img_height:0,bg_width:0,bg_height:0,old_bg_width:0,old_bg_height:0,disX:0,disY:0,translateX:0,translateY:0,init_translateX:-1,init_translateY:-1,init_centerX:-1,init_centerY:-1,scaleBase:1,scaleX:1,scaleY:1,drag:null,cut_width:100,cut_height:100,fixed:!1,fixedNumber:[3,4],fixedRate:0,old_cut_width:100,old_cut_height:100,cut_translateX:0,cut_translateY:0,cut_maxLeft:0,cut_maxTop:0,cut_moving:!1}},filters:{format:function(t){return parseInt(t)}},methods:{init_cut:function(){this.fixed&&(this.fixedRate=this.fixedNumber[0]/this.fixedNumber[1],this.cut_height=this.cut_width/this.fixedRate)},limitRange:function(){this.cut_maxLeft=this.cropper_width-this.cut_width,this.cut_maxTop=this.cropper_height-this.cut_height},getPosition:function(t){var i=t||window.event,e=document.documentElement.scrollLeft||document.body.scrollLeft,s=document.documentElement.scrollTop||document.body.scrollTop;return{x:i.pageX||i.clientX+e,y:i.pageY||i.clientY+s}},initEvent:function(){var t=this;s.addEvents(this.$refs.cropper,"mousewheel",function(i){var e=0;i||(i=window.event),i.wheelDelta?(e=i.wheelDelta/120,window.opera&&(e=-e)):i.detail&&(e=-i.detail/3),""!=t.base64&&(e<0?t.scaleBase+=.01:t.scaleBase-=.01,t.scaleBase=t.scaleBase<=0?0:t.scaleBase,t.scaleX=t.scaleBase,t.scaleY=t.scaleBase),i.preventDefault()}),s.addEvents(this.$refs.cropper,"mousedown",function(i){var e=t.getPosition(i),s=e.x,a=e.y;"cropper-drag"==i.target.id?(t.disX=s-t.translateX,t.disY=a-t.translateY):"point"==i.target.className?(t.disX=s-i.target.offsetLeft,t.disY=a-i.target.offsetTop,t.old_cut_width=t.$refs.cut_cover.offsetWidth,t.old_cut_height=t.$refs.cut_cover.offsetHeight,t.old_cut_translateX=t.$refs.cut_cover.offsetLeft,t.old_cut_translateY=t.$refs.cut_cover.offsetTop):(t.disX=s-i.target.offsetLeft,t.disY=a-i.target.offsetTop),t.drag=i.target}),s.addEvents(this.$refs.cropper,"mousemove",function(i){if(null===t.drag)return!1;var e=t.getPosition(i),s=e.x,a=e.y;if("cropper-drag"==t.drag.id&&(t.translateX=s-t.disX,t.translateY=a-t.disY),"cut_cover"==t.drag.id){t.cut_moving=!0;var h=s-t.disX,n=a-t.disY;h=h<=0?0:h>=t.cut_maxLeft?t.cut_maxLeft:h,n=n<=0?0:n>=t.cut_maxTop?t.cut_maxTop:n,t.cut_translateX=h,t.cut_translateY=n}"point1"==t.drag.id&&(t.cut_width=t.old_cut_width-(s-t.disX+5),t.fixed?t.cut_height=t.cut_width/t.fixedRate:t.cut_height=t.old_cut_height-(a-t.disY+5),t.cut_translateX=t.old_cut_translateX+(t.old_cut_width-t.cut_width),t.cut_translateY=t.old_cut_translateY+(t.old_cut_height-t.cut_height)),"point2"==t.drag.id&&(t.cut_height=t.old_cut_height-(a-t.disY+5),t.fixed&&(t.cut_width=t.cut_height*t.fixedRate),t.cut_translateX=t.old_cut_translateX+(t.old_cut_width-t.cut_width),t.cut_translateY=t.old_cut_translateY+(t.old_cut_height-t.cut_height)),"point3"==t.drag.id&&(t.cut_width=s-t.disX+5,t.fixed?t.cut_height=t.cut_width/t.fixedRate:t.cut_height=t.old_cut_height-(a-t.disY+5),t.cut_translateY=t.old_cut_translateY+(t.old_cut_height-t.cut_height)),"point4"==t.drag.id&&(t.cut_width=s-t.disX+5,t.fixed&&(t.cut_height=t.cut_width/t.fixedRate)),"point5"==t.drag.id&&(t.cut_width=s-t.disX+5,t.fixed?t.cut_height=t.cut_width/t.fixedRate:t.cut_height=a-t.disY+5),"point6"==t.drag.id&&(t.cut_height=a-t.disY+5,t.fixed&&(t.cut_width=t.cut_height*t.fixedRate)),"point7"==t.drag.id&&(t.cut_width=t.old_cut_width-(s-t.disX+5),t.fixed?t.cut_height=t.cut_width/t.fixedRate:t.cut_height=a-t.disY+5,t.cut_translateX=t.old_cut_translateX+(t.old_cut_width-t.cut_width)),"point8"==t.drag.id&&(t.cut_width=t.old_cut_width-(s-t.disX+5),t.fixed&&(t.cut_height=t.cut_width/t.fixedRate),t.cut_translateX=t.old_cut_translateX+(t.old_cut_width-t.cut_width))}),s.addEvents(this.$refs.cropper,"mouseup",function(){t.cut_moving=!1,t.drag=null})},initBgImgPosition:function(){if(this.img_width<=this.cropper_width&&this.img_height<=this.cropper_height)this.bg_width=this.img_width,this.bg_height=this.img_height;else{this.cropper_width/this.cropper_height>=this.img_width/this.img_height?(this.bg_height=this.cropper_height,this.bg_width=this.img_width/(this.img_height/this.cropper_height)):(this.bg_width=this.cropper_width,this.bg_height=this.img_height/(this.img_width/this.cropper_width))}0==this.old_bg_width&&(this.old_bg_width=this.bg_width,this.old_bg_height=this.bg_height),this.translateX=.5*(this.cropper_width-this.bg_width),this.translateY=.5*(this.cropper_height-this.bg_height),-1==this.init_translateX&&(this.init_translateX=this.translateX,this.init_translateY=this.translateY)},toBase64:function(t){var i=this,e=new FileReader;e.onload=function(t){var e=t.target.result,s=new Image;s.onload=function(){i.img_width=this.width,i.img_height=this.height,i.scaleBase=1,i.scaleX=1,i.scaleY=1,i.old_bg_width=0,i.init_translateX=-1,i.initBgImgPosition(),i.base64=e},s.src=e},e.readAsDataURL(t)},addImg:function(t){this.toBase64(t.target.files[0])},getCropData:function(){return this.cut4()},cut4:function(){if(""==this.base64)return!1;var t=this.bg_width*this.scaleBase,i=this.bg_height*this.scaleBase,e=this.init_translateX-this.translateX,s=this.init_translateY-this.translateY,a=this.init_centerX-e,h=this.init_centerY-s,n=a-.5*t,c=h-.5*i,r=document.createElement("canvas"),o=r.getContext("2d");if(r.width=this.cut_width,r.height=this.cut_height,this.img_width<=this.cropper_width&&this.img_height<=this.cropper_height)o.drawImage(this.$refs.cut_img,(this.cut_translateX-n)/this.scaleBase,(this.cut_translateY-c)/this.scaleBase,this.cut_width/this.scaleBase,this.cut_height/this.scaleBase,0,0,this.cut_width,this.cut_height);else{if(this.cropper_width/this.cropper_height>=this.img_width/this.img_height)var d=this.cropper_height/this.img_height;else var d=this.cropper_width/this.img_width;o.drawImage(this.$refs.cut_img,(this.cut_translateX-n)/this.scaleBase/d,(this.cut_translateY-c)/this.scaleBase/d,this.cut_width/this.scaleBase/d,this.cut_height/this.scaleBase/d,0,0,this.cut_width,this.cut_height)}return r.toDataURL("image/png",1)},cut3:function(){var t=this;if(""==this.base64)return!1;var i=this.bg_width*this.scaleBase,e=this.bg_height*this.scaleBase;console.log("实际的宽度："+i),console.log("实际的高度："+e),console.log("初始化底图片translateX:"+this.init_translateX),console.log("初始化底图片translateY:"+this.init_translateY),console.log("当前图片translateX:"+this.translateX),console.log("当前图片translateY:"+this.translateY),console.log(this.init_translateX-this.translateX);var s=this.init_translateX-this.translateX,a=this.init_translateY-this.translateY;console.log("dis_x:"+s),console.log("dis_y:"+a),console.log("初始化底图片中心坐标x:"+this.init_centerX),console.log("初始化底图片中心坐标y:"+this.init_centerY);var h=this.init_centerX-s,n=this.init_centerY-a;console.log("缩放后的图片中心点x:"+h),console.log("缩放后的图片中心点y:"+n);var c=h-.5*i,r=n-.5*e;console.log("缩放后的x的偏移："+c),console.log("缩放后的y的偏移："+r);var o=document.createElement("canvas"),d=o.getContext("2d");o.width=i,o.height=e,d.drawImage(this.$refs.cut_img,0,0,this.img_width,this.img_height,0,0,o.width,o.height),setTimeout(function(){var i=document.createElement("canvas"),e=i.getContext("2d");i.width=t.cut_width,i.height=t.cut_height,e.drawImage(o,t.cut_translateX-c,t.cut_translateY-r,t.cut_width,t.cut_height,0,0,t.cut_width,t.cut_height),console.log(i.toDataURL())},200)},cut2:function(){var t=this;if(""==this.base64)return!1;console.log(this.$refs.front.getBoundingClientRect());var i=document.createElement("canvas"),e=i.getContext("2d");i.width=this.$refs.front_img.offsetWidth*this.scaleBase,i.height=this.$refs.front_img.offsetHeight*this.scaleBase,e.drawImage(this.$refs.cut_img,0,0,this.bg_width,this.bg_height,0,0,i.width,i.height),setTimeout(function(){var e=document.createElement("canvas"),s=e.getContext("2d");s.scale(t.scaleBase,t.scaleBase),e.width=t.cut_width,e.height=t.cut_height;var a=-t.translateX/t.scaleBase*.5,h=-t.translateY/t.scaleBase*.5;console.log(a),console.log(h),s.drawImage(i,a,h,t.cut_width,t.cut_height,0,0,t.cut_width,t.cut_height),console.log(e.toDataURL())},200)},cut1:function(){if(""==this.base64)return!1;var t=document.createElement("canvas"),i=t.getContext("2d");t.width=this.$refs.front_img.offsetWidth*this.scaleBase,t.height=this.$refs.front_img.offsetHeight*this.scaleBase,i.drawImage(this.$refs.cut_img,0,0,this.bg_width,this.bg_height,0,0,t.width,t.height),console.log(t.toDataURL());var e=document.createElement("canvas");e.width=this.cut_width,e.height=this.cut_height;var s=(e.getContext("2d"),this.cut_translateX-this.translateX),a=this.cut_translateY-this.translateY;console.log(s),console.log(a)},cut:function(){var t=this;if(""==this.base64)return!1;var i=document.createElement("canvas"),e=document.createElement("canvas"),s=i.getContext("2d"),a=e.getContext("2d");i.width=this.$refs.front_img.offsetWidth*this.scaleBase,i.height=this.$refs.front_img.offsetHeight*this.scaleBase,e.width=this.cut_width,e.height=this.cut_height,console.log(this.$refs.front_img.offsetWidth*this.scaleBase),s.drawImage(this.$refs.cut_img,0,0,this.bg_width,this.bg_height,0,0,i.width,i.height),console.log(i.toDataURL()),setTimeout(function(){a.drawImage(i,-t.frontX,-t.frontY,t.cut_width*t.scaleBase,t.cut_height*t.scaleBase,0,0,t.cut_width,t.cut_height),console.log(e.toDataURL())},200)}},mounted:function(){this.cropper_width=this.$refs.cropper.offsetWidth,this.cropper_height=this.$refs.cropper.offsetHeight,this.init_centerX=.5*this.cropper_width,this.init_centerY=.5*this.cropper_height,this.init_cut(),this.limitRange(),this.initEvent()},computed:{frontX:function(){return this.translateX-this.cut_translateX},frontY:function(){return this.translateY-this.cut_translateY}},watch:{isFixed:{handler:function(t){""!==t&&(this.fixed=t,this.init_cut())},immediate:!0},fixedRatio:{handler:function(t){t&&(this.fixedNumber=t,this.init_cut(),this.limitRange())},immediate:!0},fileObj:function(t){null!==t&&void 0!==t&&""!==t&&this.toBase64(t)}}}},function(t,i,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=e(5),h=s(a),n=e(9),c=s(n);new h.default({render:function(t){return t(c.default)}}).$mount("#app")},,,,,function(t,i,e){"use strict";function s(t){e(10)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(2),h=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);var c=e(15),r=e(1),o=s,d=r(h.a,c.a,!1,o,null,null);i.default=d.exports},function(t,i){},,function(t,i,e){"use strict";function s(t){e(13)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(3),h=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);var c=e(14),r=e(1),o=s,d=r(h.a,c.a,!1,o,"data-v-0b48e453",null);i.default=d.exports},function(t,i){},function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"cropper",staticClass:"cropper"},[""!=t.base64?e("div",{staticClass:"bg",style:{width:t.bg_width+"px",height:t.bg_height+"px",transform:"scale("+t.scaleX+","+t.scaleY+") translate3d("+t.translateX/t.scaleBase+"px,"+t.translateY/t.scaleBase+"px,0px)"}},[e("img",{ref:"cut_img",attrs:{src:t.base64}})]):t._e(),t._v(" "),e("div",{staticClass:"cropper-drag cropper-move",attrs:{id:"cropper-drag"}}),t._v(" "),e("div",{ref:"cut_cover",staticClass:"cut_cover",style:{width:t.cut_width+"px",height:t.cut_height+"px",left:t.cut_translateX+"px",top:t.cut_translateY+"px"},attrs:{id:"cut_cover"}},[e("div",{staticClass:"img_cover"},[""!=t.base64?e("div",{ref:"front",staticClass:"front",style:{width:t.bg_width+"px",height:t.bg_height+"px",transform:"scale("+t.scaleX+","+t.scaleY+") translate3d("+t.frontX/t.scaleBase+"px,"+t.frontY/t.scaleBase+"px,0px)"}},[e("img",{ref:"front_img",attrs:{src:t.base64}})]):t._e()]),t._v(" "),e("div",{attrs:{id:"tip"}},[t._v(t._s(t._f("format")(t.cut_width))+"x"+t._s(t._f("format")(t.cut_height)))]),t._v(" "),t.cut_moving?t._e():[e("span",{staticClass:"point",attrs:{id:"point1"}}),t._v(" "),e("span",{staticClass:"point",attrs:{id:"point2"}}),t._v(" "),e("span",{staticClass:"point",attrs:{id:"point3"}}),t._v(" "),e("span",{staticClass:"point",attrs:{id:"point4"}}),t._v(" "),e("span",{staticClass:"point",attrs:{id:"point5"}}),t._v(" "),e("span",{staticClass:"point",attrs:{id:"point6"}}),t._v(" "),e("span",{staticClass:"point",attrs:{id:"point7"}}),t._v(" "),e("span",{staticClass:"point",attrs:{id:"point8"}})]],2)])},a=[],h={render:s,staticRenderFns:a};i.a=h},function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("input",{attrs:{id:"file",type:"file",accept:"image/png,image/jpeg,image/gif,image/jpg"},on:{change:t.addImg}}),t._v("\n  =============================\n  "),e("br"),t._v("自由裁图：\n  "),e("div",{staticStyle:{width:"200px",height:"300px"}},[e("qcut",{ref:"qcut1",attrs:{"file-obj":t.file}})],1),t._v(" "),e("span",{attrs:{id:"qcut1"}}),t._v(" "),e("button",{on:{click:t.cut1}},[t._v("裁图")]),e("br"),t._v("\n  ============================== "),e("br"),t._v("\n  等比裁图\n  "),e("div",{staticStyle:{width:"300px",height:"300px"}},[e("qcut",{ref:"qcut2",attrs:{"is-fixed":t.fixed,"fixed-ratio":t.ratio,"file-obj":t.file}})],1),t._v(" "),e("span",{attrs:{id:"qcut2"}}),t._v(" "),e("button",{on:{click:t.cut2}},[t._v("裁图")]),e("br"),t._v("\n  ============================== "),e("br")])},a=[],h={render:s,staticRenderFns:a};i.a=h}],[4]);