! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).ArtplayerVue = e()
}(this, (function() {
  "use strict";
  var t = function(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t
  };
  var e = function(t, e) {
    if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  };

  function r(t, e) {
    for(var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
  }
  var n = function(t, e, n) {
    return e && r(t.prototype, e), n && r(t, n), t
  };
  var o = function(t) {
    if(void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  };
  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

  function i(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports
  }
  var a = i((function(t) {
    function e(r, n) {
      return t.exports = e = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t
      }, e(r, n)
    }
    t.exports = e
  }));
  var c = function(t, e) {
      if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && a(t, e)
    },
    s = i((function(t) {
      function e(r) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = e = function(t) {
          return typeof t
        } : t.exports = e = function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, e(r)
      }
      t.exports = e
    }));
  var l = function(t, e) {
      return !e || "object" !== s(e) && "function" != typeof e ? o(t) : e
    },
    u = i((function(t) {
      function e(r) {
        return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, e(r)
      }
      t.exports = e
    }));
  ! function(t, e) {
    void 0 === e && (e = {});
    var r = e.insertAt;
    if(t && "undefined" != typeof document) {
      var n = document.head || document.getElementsByTagName("head")[0],
        o = document.createElement("style");
      o.type = "text/css", "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t))
    }
  }('.art-undercover{background:#000;position:fixed;top:0;left:0;display:none;height:100%;width:100%;opacity:.9;z-index:10}.art-video-player{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;margin:0 auto;z-index:20;width:100%;height:100%;outline:0;zoom:1;font-family:Roboto,Arial,Helvetica,sans-serif;color:#eee;background-color:#000;text-align:left;direction:ltr;font-size:14px;line-height:1.3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-ms-touch-action:manipulation;touch-action:manipulation;-ms-high-contrast-adjust:none}.art-video-player *{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.art-video-player ::-webkit-scrollbar{width:5px}.art-video-player ::-webkit-scrollbar-thumb{background-color:#666}.art-video-player ::-webkit-scrollbar-thumb:hover{background-color:#ccc}.art-video-player .art-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1.5}.art-video-player .art-icon svg{fill:#fff}.art-video-player img{max-width:100%;vertical-align:top}@supports ((-webkit-backdrop-filter:initial) or (backdrop-filter:initial)){.art-video-player .art-backdrop-filter{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);background-color:rgba(0,0,0,.7)!important}}.art-video-player .art-video{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;width:100%;height:100%;background-color:#000;cursor:pointer}.art-video-player .art-subtitle{display:none;position:absolute;z-index:20;bottom:10px;width:100%;padding:0 20px;text-align:center;color:#fff;font-size:20px;pointer-events:none;text-shadow:.5px .5px .5px rgba(0,0,0,.5)}.art-video-player .art-subtitle p{word-break:break-all;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:5px 0 0;line-height:1.2}.art-video-player .art-bilingual p:nth-child(n+2){-webkit-transform:scale(.6);transform:scale(.6);-webkit-transform-origin:center top;transform-origin:center top}.art-video-player.art-subtitle-show .art-subtitle{display:block}.art-video-player.art-control-show .art-subtitle{bottom:50px}.art-video-player .art-danmuku{z-index:30}.art-video-player .art-danmuku,.art-video-player .art-layers{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;overflow:hidden;pointer-events:none}.art-video-player .art-layers{display:none;z-index:40}.art-video-player .art-layers .art-layer{pointer-events:auto}.art-video-player.art-layer-show .art-layers{display:block}.art-video-player .art-mask{display:none;z-index:50;left:0;top:0;right:0;bottom:0;width:100%;height:100%;overflow:hidden;pointer-events:none}.art-video-player .art-mask,.art-video-player .art-mask .art-state{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute}.art-video-player .art-mask .art-state{right:30px;bottom:55px;width:60px;height:60px;opacity:.6}.art-video-player.art-mask-show .art-mask,.art-video-player .art-mask .art-state{display:-webkit-box;display:-ms-flexbox;display:flex}.art-video-player .art-loading{display:none;position:absolute;z-index:70;left:0;top:0;right:0;bottom:0;width:100%;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;pointer-events:none}.art-video-player.art-loading-show .art-loading{display:-webkit-box;display:-ms-flexbox;display:flex}.art-video-player .art-bottom{position:absolute;z-index:60;left:0;right:0;bottom:0;height:100px;padding:55px 10px 0;opacity:0;visibility:hidden;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;pointer-events:none;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom}.art-video-player .art-bottom .art-progress{position:relative;pointer-events:auto}.art-video-player .art-bottom .art-progress .art-control-progress{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:4px;cursor:pointer}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner{position:relative;height:50%;width:100%;background:hsla(0,0%,100%,.2)}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;height:100%;width:0;background:hsla(0,0%,100%,.4)}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played{position:absolute;z-index:20;left:0;top:0;right:0;bottom:0;height:100%;width:0}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight{position:absolute;z-index:30;left:0;top:0;right:0;bottom:0;height:100%;pointer-events:none}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span{display:inline-block;position:absolute;left:0;top:0;width:7px;height:100%;background:#fff;pointer-events:auto}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{display:none;position:absolute;z-index:40;top:-5px;left:-6.5px;width:13px;height:13px;border-radius:50%}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator.art-show-indicator{display:block}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip{display:none;position:absolute;z-index:50;top:-25px;left:0;height:20px;padding:0 5px;line-height:20px;color:#fff;font-size:12px;text-align:center;background:rgba(0,0,0,.7);border-radius:3px;font-weight:700;white-space:nowrap}.art-video-player .art-bottom .art-progress .art-control-progress:hover .art-control-progress-inner{height:100%}.art-video-player .art-bottom .art-progress .art-control-progress:hover .art-control-progress-inner .art-progress-indicator,.art-video-player .art-bottom .art-progress .art-control-progress:hover .art-control-progress-inner .art-progress-tip{display:block}.art-video-player .art-bottom .art-progress .art-control-thumbnails{display:none;position:absolute;bottom:8px;left:0;pointer-events:none;background-color:rgba(0,0,0,.7)}.art-video-player .art-bottom .art-progress .art-control-loop{display:none;position:absolute;width:100%;height:100%;left:0;top:0;right:0;bottom:0;pointer-events:none}.art-video-player .art-bottom .art-progress .art-control-loop .art-loop-point{position:absolute;left:0;top:-2px;width:2px;height:8px;background:hsla(0,0%,100%,.75)}.art-video-player .art-bottom .art-controls{position:relative;pointer-events:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:40px;padding:5px 0}.art-video-player .art-bottom .art-controls,.art-video-player .art-bottom .art-controls .art-controls-left,.art-video-player .art-bottom .art-controls .art-controls-right{display:-webkit-box;display:-ms-flexbox;display:flex}.art-video-player .art-bottom .art-controls .art-control{opacity:.9;font-size:12px;height:36px;min-width:36px;line-height:36px;text-align:center;cursor:pointer;white-space:nowrap}.art-video-player .art-bottom .art-controls .art-control .art-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;float:left;height:36px;width:36px}.art-video-player .art-bottom .art-controls .art-control:hover{opacity:1}.art-video-player .art-bottom .art-controls .art-control-onlyText{padding:0 10px}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel{position:relative;float:left;width:0;height:100%;-webkit-transition:margin .2s cubic-bezier(.4,0,1,1),width .2s cubic-bezier(.4,0,1,1);transition:margin .2s cubic-bezier(.4,0,1,1),width .2s cubic-bezier(.4,0,1,1);overflow:hidden}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle{position:absolute;top:50%;left:0;width:12px;height:12px;border-radius:12px;margin-top:-6px;background:#fff}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:before{left:-54px;background:#fff}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:after{left:6px;background:hsla(0,0%,100%,.2)}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:after,.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:before{content:"";position:absolute;display:block;top:50%;height:3px;margin-top:-2px;width:60px}.art-video-player .art-bottom .art-controls .art-control-volume:hover .art-volume-panel{width:60px}.art-video-player .art-bottom .art-controls .art-control-quality{position:relative;z-index:30}.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys{display:none;position:absolute;bottom:35px;width:100px;padding:5px 0;text-align:center;color:#fff;background:rgba(0,0,0,.8);border-radius:3px}.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys .art-quality-item{height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-shadow:0 0 2px rgba(0,0,0,.5)}.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys .art-quality-item:hover{background-color:hsla(0,0%,100%,.1)}.art-video-player .art-bottom .art-controls .art-control-quality:hover .art-qualitys{display:block}.art-video-player.art-control-show .art-bottom,.art-video-player.art-hover .art-bottom{opacity:1;visibility:visible}.art-video-player.art-destroy .art-progress-indicator,.art-video-player.art-destroy .art-progress-tip,.art-video-player.art-error .art-progress-indicator,.art-video-player.art-error .art-progress-tip{display:none!important}.art-video-player .art-notice{display:none;font-size:14px;position:absolute;z-index:80;left:0;top:0;padding:10px;width:100%;pointer-events:none}.art-video-player .art-notice .art-notice-inner{display:inline-block;padding:5px 10px;color:#fff;background:rgba(0,0,0,.6);border-radius:3px}.art-video-player.art-notice-show .art-notice{display:-webkit-box;display:-ms-flexbox;display:flex}.art-video-player .art-contextmenus{display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:absolute;z-index:120;left:0;top:0;min-width:200px;padding:5px 0;background:rgba(0,0,0,.9);border-radius:3px}.art-video-player .art-contextmenus .art-contextmenu{cursor:pointer;font-size:12px;display:block;color:#fff;padding:10px 15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-shadow:0 0 2px rgba(0,0,0,.5);border-bottom:1px solid hsla(0,0%,100%,.1)}.art-video-player .art-contextmenus .art-contextmenu a{color:#fff;text-decoration:none}.art-video-player .art-contextmenus .art-contextmenu span{display:inline-block;padding:0 7px}.art-video-player .art-contextmenus .art-contextmenu span.art-current,.art-video-player .art-contextmenus .art-contextmenu span:hover{color:#00c9ff}.art-video-player .art-contextmenus .art-contextmenu:hover{background-color:hsla(0,0%,100%,.1)}.art-video-player .art-contextmenus .art-contextmenu:last-child{border-bottom:none}.art-video-player.art-contextmenu-show .art-contextmenus,.art-video-player .art-settings{display:-webkit-box;display:-ms-flexbox;display:flex}.art-video-player .art-settings{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;z-index:90;left:0;top:0;height:100%;width:100%;opacity:0;visibility:hidden;pointer-events:none;overflow:hidden}.art-video-player .art-settings .art-setting-inner{position:absolute;top:0;right:-300px;bottom:0;width:300px;height:100%;font-size:12px;background:rgba(0,0,0,.9);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;overflow:auto}.art-video-player .art-settings .art-setting-inner .art-setting-body{overflow-y:auto;width:100%;height:100%}.art-video-player .art-settings .art-setting-inner .art-setting-body .art-setting{border-bottom:1px solid hsla(0,0%,100%,.1);padding:10px 15px}.art-video-player .art-settings .art-setting-inner .art-setting-body .art-setting .art-setting-header{margin-bottom:5px}.art-video-player .art-settings .art-setting-radio{display:-webkit-box;display:-ms-flexbox;display:flex}.art-video-player .art-settings .art-setting-radio .art-radio-item{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 2px}.art-video-player .art-settings .art-setting-radio .art-radio-item button{height:22px;width:100%;border:none;outline:none;color:#fff;background:hsla(0,0%,100%,.2);border-radius:2px}.art-video-player .art-settings .art-setting-radio .art-radio-item.current button,.art-video-player .art-settings .art-setting-radio .art-radio-item button:active{background-color:#00a1d6}.art-video-player .art-settings .art-setting-range input{width:100%;height:3px;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:hsla(0,0%,100%,.5)}.art-video-player .art-settings .art-setting-checkbox{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.art-video-player .art-settings .art-setting-checkbox input{height:14px;width:14px;margin-right:5px}.art-video-player .art-settings .art-setting-upload{display:-webkit-box;display:-ms-flexbox;display:flex}.art-video-player .art-settings .art-setting-upload .art-upload-btn{width:80px;height:22px;line-height:22px;border:none;outline:none;color:#fff;background:hsla(0,0%,100%,.2);border-radius:2px;text-align:center}.art-video-player .art-settings .art-setting-upload .art-upload-value{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:22px;line-height:22px;padding-left:10px}.art-video-player.art-setting-show .art-settings{opacity:1;visibility:visible;pointer-events:auto}.art-video-player.art-setting-show .art-settings .art-setting-inner{right:0}.art-video-player .art-info{display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:absolute;left:10px;top:10px;z-index:100;width:350px;min-height:150px;padding:10px;color:#fff;font-size:12px;font-family:Noto Sans CJK SC DemiLight,Roboto,Segoe UI,Tahoma,Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;background:rgba(0,0,0,.9)}.art-video-player .art-info .art-info-item{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:5px}.art-video-player .art-info .art-info-item .art-info-title{width:100px;text-align:right}.art-video-player .art-info .art-info-item .art-info-content{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:5px}.art-video-player .art-info .art-info-close{position:absolute;top:5px;right:5px;cursor:pointer}.art-video-player.art-info-show .art-info{display:-webkit-box;display:-ms-flexbox;display:flex}.art-video-player.art-hide-cursor *{cursor:none!important}.art-video-player[data-aspect-ratio] video{-webkit-box-sizing:content-box;box-sizing:content-box;-o-object-fit:fill;object-fit:fill}.art-video-player.art-fullscreen-web{position:fixed;z-index:9999;width:100%!important;height:100%!important;left:0;top:0;right:0;bottom:0}.art-fullscreen-rotate{position:fixed;z-index:9999;width:100%;height:100%;left:0;top:0;right:0;bottom:0;background:#000}.art-video-player .art-mini-header{display:none;position:absolute;z-index:110;left:0;top:0;right:0;height:35px;line-height:35px;color:#fff;background:rgba(0,0,0,.5);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;opacity:0;visibility:hidden;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.art-video-player .art-mini-header .art-mini-title{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:move}.art-video-player .art-mini-header .art-mini-close{width:35px;text-align:center;font-size:22px;cursor:pointer}.art-video-player.art-is-dragging{opacity:.7}.art-video-player.art-mini{position:fixed;z-index:9999;width:400px;height:225px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.2);box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.2)}.art-video-player.art-mini .art-mini-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.art-video-player.art-mini.art-hover .art-mini-header{opacity:1;visibility:visible}.art-video-player.art-mini .art-mask .art-state{position:static}.art-video-player.art-mini .art-bottom,.art-video-player.art-mini .art-contextmenu,.art-video-player.art-mini .art-danmu,.art-video-player.art-mini .art-info,.art-video-player.art-mini .art-layers,.art-video-player.art-mini .art-notice,.art-video-player.art-mini .art-setting,.art-video-player.art-mini .art-subtitle{display:none!important}.art-auto-size{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.art-video-player[data-flip=horizontal] .art-video{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.art-video-player[data-flip=vertical] .art-video{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.art-video-player .art-control-selector{position:relative}.art-video-player .art-control-selector .art-selector-list{display:none;position:absolute;bottom:35px;width:100px;padding:5px 0;text-align:center;color:#fff;background:rgba(0,0,0,.8);border-radius:3px}.art-video-player .art-control-selector .art-selector-list .art-selector-item{height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-shadow:0 0 2px rgba(0,0,0,.5)}.art-video-player .art-control-selector .art-selector-list .art-selector-item:hover{background-color:hsla(0,0%,100%,.1)}.art-video-player .art-control-selector:hover .art-selector-list{display:block}:root{--balloon-color:rgba(16,16,16,0.95);--balloon-font-size:12px;--balloon-move:4px}button[aria-label][data-balloon-pos]{overflow:visible}[aria-label][data-balloon-pos]{position:relative;cursor:pointer}[aria-label][data-balloon-pos]:after{text-indent:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;font-style:normal;text-shadow:none;font-size:var(--balloon-font-size);background:var(--balloon-color);border-radius:2px;color:#fff;content:attr(aria-label);padding:.5em 1em;white-space:nowrap;line-height:1.2}[aria-label][data-balloon-pos]:after,[aria-label][data-balloon-pos]:before{opacity:0;pointer-events:none;-webkit-transition:all .18s ease-out .18s;transition:all .18s ease-out .18s;position:absolute;z-index:10}[aria-label][data-balloon-pos]:before{width:0;height:0;border:5px solid transparent;border-top:5px solid var(--balloon-color);content:""}[aria-label][data-balloon-pos]:hover:after,[aria-label][data-balloon-pos]:hover:before{opacity:1;pointer-events:none}[aria-label][data-balloon-pos][data-balloon-pos=up]:after{margin-bottom:10px}[aria-label][data-balloon-pos][data-balloon-pos=up]:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:before{bottom:100%;left:50%;-webkit-transform:translate(-50%,var(--balloon-move));transform:translate(-50%,var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:before{-webkit-transform:translate(-50%);transform:translate(-50%)}');
  var p = i((function(t, e) {
      t.exports = function() {
        function t(e) {
          return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          })(e)
        }
        var e = Object.prototype.toString,
          r = function(r) {
            if(void 0 === r) return "undefined";
            if(null === r) return "null";
            var o = t(r);
            if("boolean" === o) return "boolean";
            if("string" === o) return "string";
            if("number" === o) return "number";
            if("symbol" === o) return "symbol";
            if("function" === o) return function(t) {
              return "GeneratorFunction" === n(t)
            }(r) ? "generatorfunction" : "function";
            if(function(t) {
                return Array.isArray ? Array.isArray(t) : t instanceof Array
              }(r)) return "array";
            if(function(t) {
                return !(!t.constructor || "function" != typeof t.constructor.isBuffer) && t.constructor.isBuffer(t)
              }(r)) return "buffer";
            if(function(t) {
                try {
                  if("number" == typeof t.length && "function" == typeof t.callee) return !0
                } catch (t) {
                  if(-1 !== t.message.indexOf("callee")) return !0
                }
                return !1
              }(r)) return "arguments";
            if(function(t) {
                return t instanceof Date || "function" == typeof t.toDateString && "function" == typeof t.getDate && "function" == typeof t.setDate
              }(r)) return "date";
            if(function(t) {
                return t instanceof Error || "string" == typeof t.message && t.constructor && "number" == typeof t.constructor.stackTraceLimit
              }(r)) return "error";
            if(function(t) {
                return t instanceof RegExp || "string" == typeof t.flags && "boolean" == typeof t.ignoreCase && "boolean" == typeof t.multiline && "boolean" == typeof t.global
              }(r)) return "regexp";
            switch(n(r)) {
              case "Symbol":
                return "symbol";
              case "Promise":
                return "promise";
              case "WeakMap":
                return "weakmap";
              case "WeakSet":
                return "weakset";
              case "Map":
                return "map";
              case "Set":
                return "set";
              case "Int8Array":
                return "int8array";
              case "Uint8Array":
                return "uint8array";
              case "Uint8ClampedArray":
                return "uint8clampedarray";
              case "Int16Array":
                return "int16array";
              case "Uint16Array":
                return "uint16array";
              case "Int32Array":
                return "int32array";
              case "Uint32Array":
                return "uint32array";
              case "Float32Array":
                return "float32array";
              case "Float64Array":
                return "float64array"
            }
            if(function(t) {
                return "function" == typeof t.throw && "function" == typeof t.return && "function" == typeof t.next
              }(r)) return "generator";
            switch(o = e.call(r)) {
              case "[object Object]":
                return "object";
              case "[object Map Iterator]":
                return "mapiterator";
              case "[object Set Iterator]":
                return "setiterator";
              case "[object String Iterator]":
                return "stringiterator";
              case "[object Array Iterator]":
                return "arrayiterator"
            }
            return o.slice(8, -1).toLowerCase().replace(/\s/g, "")
          };

        function n(t) {
          return t.constructor ? t.constructor.name : null
        }

        function o(t, e) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ["option"];
          return i(t, e, n), a(t, e, n),
            function(t, e, n) {
              var c = r(e),
                s = r(t);
              if("object" === c) {
                if("object" !== s) throw new Error("[Type Error]: '".concat(n.join("."), "' require 'object' type, but got '").concat(s, "'"));
                Object.keys(e).forEach((function(r) {
                  var c = t[r],
                    s = e[r],
                    l = n.slice();
                  l.push(r), i(c, s, l), a(c, s, l), o(c, s, l)
                }))
              }
              if("array" === c) {
                if("array" !== s) throw new Error("[Type Error]: '".concat(n.join("."), "' require 'array' type, but got '").concat(s, "'"));
                t.forEach((function(r, c) {
                  var s = t[c],
                    l = e[c] || e[0],
                    u = n.slice();
                  u.push(c), i(s, l, u), a(s, l, u), o(s, l, u)
                }))
              }
            }(t, e, n), t
        }

        function i(t, e, n) {
          if("string" === r(e)) {
            var o = r(t);
            if("?" === e[0] && (e = e.slice(1) + "|undefined"), !(-1 < e.indexOf("|") ? e.split("|").map((function(t) {
                return t.toLowerCase().trim()
              })).filter(Boolean).some((function(t) {
                return o === t
              })) : e.toLowerCase().trim() === o)) throw new Error("[Type Error]: '".concat(n.join("."), "' require '").concat(e, "' type, but got '").concat(o, "'"))
          }
        }

        function a(t, e, n) {
          if("function" === r(e)) {
            var o = e(t, r(t), n);
            if(!0 !== o) {
              var i = r(o);
              throw "string" === i ? new Error(o) : "error" === i ? o : new Error("[Validator Error]: The scheme for '".concat(n.join("."), "' validator require return true, but got '").concat(o, "'"))
            }
          }
        }
        return o.kindOf = r, o
      }()
    })),
    f = function() {
      function t() {
        e(this, t)
      }
      return n(t, [{
        key: "on",
        value: function(t, e, r) {
          var n = this.e || (this.e = {});
          return (n[t] || (n[t] = [])).push({
            fn: e,
            ctx: r
          }), this
        }
      }, {
        key: "once",
        value: function(t, e, r) {
          var n = this;

          function o() {
            n.off(t, o);
            for(var i = arguments.length, a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c];
            e.apply(r, a)
          }
          return o._ = e, this.on(t, o, r)
        }
      }, {
        key: "emit",
        value: function(t) {
          for(var e = ((this.e || (this.e = {}))[t] || []).slice(), r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
          for(var i = 0; i < e.length; i += 1) e[i].fn.apply(e[i].ctx, n);
          return this
        }
      }, {
        key: "off",
        value: function(t, e) {
          var r = this.e || (this.e = {}),
            n = r[t],
            o = [];
          if(n && e)
            for(var i = 0, a = n.length; i < a; i += 1) n[i].fn !== e && n[i].fn._ !== e && o.push(n[i]);
          return o.length ? r[t] = o : delete r[t], this
        }
      }]), t
    }(),
    d = window.navigator.userAgent,
    h = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d),
    y = /^((?!chrome|android).)*safari/i.test(d),
    b = /MicroMessenger/i.test(d);

  function v(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
    return e.querySelector(t)
  }

  function g(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
    return Array.from(e.querySelectorAll(t))
  }

  function m(t, e) {
    return t.classList.add(e)
  }

  function w(t, e) {
    return t.classList.remove(e)
  }

  function x(t, e) {
    return t.classList.contains(e)
  }

  function O(t, e) {
    return e instanceof Element ? t.appendChild(e) : t.insertAdjacentHTML("beforeend", String(e)), t.lastElementChild || t.lastChild
  }

  function k(t, e, r) {
    return t.style[e] = r, t
  }

  function j(t, e) {
    return Object.keys(e).forEach((function(r) {
      k(t, r, e[r])
    })), t
  }

  function P(t, e) {
    var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
      n = window.getComputedStyle(t, null).getPropertyValue(e);
    return r ? parseFloat(n) : n
  }

  function S(t) {
    return Array.from(t.parentElement.children).filter((function(e) {
      return e !== t
    }))
  }

  function R(t, e) {
    S(t).forEach((function(t) {
      return w(t, e)
    })), m(t, e)
  }

  function E(t, e) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "up";
    h || (t.setAttribute("aria-label", e), t.setAttribute("data-balloon-pos", r))
  }

  function D(t) {
    var e = t.getBoundingClientRect(),
      r = window.innerHeight || document.documentElement.clientHeight,
      n = window.innerWidth || document.documentElement.clientWidth,
      o = e.top <= r && e.top + e.height >= 0,
      i = e.left <= n && e.left + e.width >= 0;
    return o && i
  }

  function $(t, e) {
    return t.composedPath && t.composedPath().indexOf(e) > -1
  }
  var T = function(t) {
    return -1 !== Function.toString.call(t).indexOf("[native code]")
  };
  var z = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    },
    A = i((function(t) {
      function e(r, n, o) {
        return z() ? t.exports = e = Reflect.construct : t.exports = e = function(t, e, r) {
          var n = [null];
          n.push.apply(n, e);
          var o = new(Function.bind.apply(t, n));
          return r && a(o, r.prototype), o
        }, e.apply(null, arguments)
      }
      t.exports = e
    }));

  function C(t) {
    var e = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = u(t);
      if(e) {
        var o = u(this).constructor;
        r = Reflect.construct(n, arguments, o)
      } else r = n.apply(this, arguments);
      return l(this, r)
    }
  }
  var L = function(t) {
    c(n, t);
    var r = C(n);

    function n(t, i) {
      var a;
      return e(this, n), a = r.call(this, t), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o(a), i || a.constructor), a.name = "ArtPlayerError", a
    }
    return n
  }(i((function(t) {
    function e(r) {
      var n = "function" == typeof Map ? new Map : void 0;
      return t.exports = e = function(t) {
        if(null === t || !T(t)) return t;
        if("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
        if(void 0 !== n) {
          if(n.has(t)) return n.get(t);
          n.set(t, e)
        }

        function e() {
          return A(t, arguments, u(this).constructor)
        }
        return e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), a(e, t)
      }, e(r)
    }
    t.exports = e
  }))(Error));

  function M(t, e) {
    if(!t) throw new L(e);
    return t
  }

  function q(t) {
    return "WEBVTT \r\n\r\n".concat(t.replace(/{[\s\S]*?}/g, "").replace(/\{\\([ibu])\}/g, "</$1>").replace(/\{\\([ibu])1\}/g, "<$1>").replace(/\{([ibu])\}/g, "<$1>").replace(/\{\/([ibu])\}/g, "</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2").concat("\r\n\r\n"))
  }

  function F(t) {
    return URL.createObjectURL(new Blob([t], {
      type: "text/vtt"
    }))
  }

  function H(t) {
    var e = new RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$", "i");

    function r() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return t.split(/[:.]/).map((function(t, e, r) {
        if(e === r.length - 1) {
          if(1 === t.length) return ".".concat(t, "00");
          if(2 === t.length) return ".".concat(t, "0")
        } else if(1 === t.length) return (0 === e ? "0" : ":0") + t;
        return 0 === e ? t : e === r.length - 1 ? ".".concat(t) : ":".concat(t)
      })).join("")
    }
    return "WEBVTT\n\n".concat(t.split(/\r?\n/).map((function(t) {
      var n = t.match(e);
      return n ? {
        start: r(n[1].trim()),
        end: r(n[2].trim()),
        text: n[5].replace(/{[\s\S]*?}/g, "").replace(/(\\N)/g, "\n").trim().split(/\r?\n/).map((function(t) {
          return t.trim()
        })).join("\n")
      } : null
    })).filter((function(t) {
      return t
    })).map((function(t, e) {
      return t ? "".concat(e + 1, "\n").concat(t.start, " --\x3e ").concat(t.end, "\n").concat(t.text) : ""
    })).filter((function(t) {
      return t.trim()
    })).join("\n\n"))
  }

  function I(t) {
    return t.includes("?") ? I(t.split("?")[0]) : t.includes("#") ? I(t.split("#")[0]) : t.trim().toLowerCase().split(".").pop()
  }

  function W(t, e) {
    var r = document.createElement("a");
    r.style.display = "none", r.href = t, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r)
  }
  var V = function(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for(var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
  };
  var B = function(t) {
    if(Array.isArray(t)) return V(t)
  };
  var N = function(t) {
    if("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
  };
  var U = function(t, e) {
    if(t) {
      if("string" == typeof t) return V(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? V(t, e) : void 0
    }
  };
  var _ = function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  };
  var X = function(t) {
      return B(t) || N(t) || U(t) || _()
    },
    Y = Object.defineProperty,
    Z = Object.prototype.hasOwnProperty;

  function J(t, e) {
    return Z.call(t, e)
  }

  function Q(t) {
    for(var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
    return r.reduce((function(t, e) {
      return Object.getOwnPropertyNames(e).forEach((function(r) {
        M(!J(t, r), "Target attribute name is duplicated: ".concat(r)), Y(t, r, Object.getOwnPropertyDescriptor(e, r))
      })), t
    }), t)
  }

  function G() {
    for(var t = function(t) {
        return t && "object" === s(t) && !Array.isArray(t)
      }, e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
    return r.reduce((function(e, r) {
      return Object.keys(r).forEach((function(n) {
        var o = e[n],
          i = r[n];
        Array.isArray(o) && Array.isArray(i) ? e[n] = o.concat.apply(o, X(i)) : !t(o) || !t(i) || i instanceof Element ? e[n] = i : e[n] = G(o, i)
      })), e
    }), {})
  }

  function K() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return new Promise((function(e) {
      return setTimeout(e, t)
    }))
  }

  function tt(t, e, r) {
    var n;

    function o() {
      for(var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      var c = function() {
        n = null, t.apply(r, i)
      };
      clearTimeout(n), n = setTimeout(c, e)
    }
    return o.clearTimeout = function() {
      clearTimeout(n)
    }, o
  }

  function et(t, e) {
    var r, n, o = !1;
    return function i() {
      for(var a = arguments.length, c = new Array(a), s = 0; s < a; s++) c[s] = arguments[s];
      if(o) return r = c, void(n = this);
      o = !0, t.apply(this, c), setTimeout((function() {
        o = !1, r && (i.apply(n, r), r = null, n = null)
      }), e)
    }
  }

  function rt(t, e, r) {
    return Math.max(Math.min(t, Math.max(e, r)), Math.min(e, r))
  }

  function nt(t) {
    var e = Math.floor(t / 3600),
      r = Math.floor((t - 3600 * e) / 60),
      n = Math.floor(t - 3600 * e - 60 * r);
    return (e > 0 ? [e, r, n] : [r, n]).map((function(t) {
      return t < 10 ? "0".concat(t) : String(t)
    })).join(":")
  }

  function ot(t) {
    return t.replace(/[&<>'"]/g, (function(t) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      } [t] || t
    }))
  }
  var it = Object.freeze({
    __proto__: null,
    query: v,
    queryAll: g,
    addClass: m,
    removeClass: w,
    hasClass: x,
    append: O,
    remove: function(t) {
      return t.parentNode.removeChild(t)
    },
    setStyle: k,
    setStyles: j,
    getStyle: P,
    sublings: S,
    inverseClass: R,
    tooltip: E,
    isInViewport: D,
    includeFromEvent: $,
    ArtPlayerError: L,
    errorHandle: M,
    srtToVtt: q,
    vttToBlob: F,
    assToVtt: H,
    getExt: I,
    download: W,
    def: Y,
    has: J,
    proxyPropertys: Q,
    mergeDeep: G,
    sleep: K,
    debounce: tt,
    throttle: et,
    clamp: rt,
    secondToTime: nt,
    escape: ot,
    userAgent: d,
    isMobile: h,
    isSafari: y,
    isWechat: b
  });

  function at(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function ct(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? at(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }
  var st = "boolean",
    lt = "string",
    ut = "number",
    pt = "object",
    ft = "function";

  function dt(t, e, r) {
    return M(e === lt || t instanceof Element, "".concat(r.join("."), " require '").concat(lt, "' or 'Element' type"))
  }
  var ht = {
      html: dt,
      disable: "?".concat(st),
      name: "?".concat(lt),
      index: "?".concat(ut),
      style: "?".concat(pt),
      click: "?".concat(ft),
      mounted: "?".concat(ft),
      tooltip: "?".concat(lt),
      selector: "?".concat("array"),
      onSelect: "?".concat(ft)
    },
    yt = {
      container: dt,
      url: lt,
      poster: lt,
      title: lt,
      theme: lt,
      lang: lt,
      volume: ut,
      isLive: st,
      muted: st,
      autoplay: st,
      autoSize: st,
      autoMini: st,
      loop: st,
      flip: st,
      rotate: st,
      playbackRate: st,
      aspectRatio: st,
      screenshot: st,
      setting: st,
      hotkey: st,
      pip: st,
      mutex: st,
      light: st,
      backdrop: st,
      fullscreen: st,
      fullscreenWeb: st,
      subtitleOffset: st,
      miniProgressBar: st,
      localVideo: st,
      localSubtitle: st,
      networkMonitor: st,
      plugins: [ft],
      whitelist: ["".concat(lt, "|").concat(ft, "|").concat("regexp")],
      layers: [ht],
      contextmenu: [ht],
      controls: [ct(ct({}, ht), {}, {
        position: function(t, e, r) {
          var n = ["top", "left", "right"];
          return M(n.includes(t), "".concat(r.join("."), " only accept ").concat(n.toString(), " as parameters"))
        }
      })],
      quality: [{
        default: "?".concat(st),
        name: lt,
        url: lt
      }],
      highlight: [{
        time: ut,
        text: lt
      }],
      thumbnails: {
        url: lt,
        number: ut,
        width: ut,
        height: ut,
        column: ut
      },
      subtitle: {
        url: lt,
        style: pt,
        encoding: lt,
        bilingual: st
      },
      moreVideoAttr: pt,
      icons: pt,
      customType: pt
    },
    bt = {
      propertys: ["audioTracks", "autoplay", "buffered", "controller", "controls", "crossOrigin", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup", "muted", "networkState", "paused", "playbackRate", "played", "preload", "readyState", "seekable", "seeking", "src", "startDate", "textTracks", "videoTracks", "volume"],
      methods: ["addTextTrack", "canPlayType", "load", "play", "pause"],
      events: ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"]
    },
    vt = function t(r) {
      e(this, t);
      var n = r.constructor.kindOf,
        o = r.option.whitelist;
      this.state = !r.isMobile || o.some((function(t) {
        switch(n(t)) {
          case "string":
            return "*" === t || r.userAgent.indexOf(t) > -1;
          case "function":
            return t(r.userAgent);
          case "regexp":
            return t.test(r.userAgent);
          default:
            return !1
        }
      }))
    },
    gt = function() {
      function t(r) {
        var n = this;
        e(this, t), this.art = r, r.option.container instanceof Element ? this.$container = r.option.container : (this.$container = v(r.option.container), M(this.$container, "No container element found by ".concat(r.option.container))), M(r.constructor.instances.every((function(t) {
          return t.template.$container !== n.$container
        })), "Cannot mount multiple instances on the same dom element"), r.whitelist.state ? this.desktop() : this.mobile()
      }
      return n(t, [{
        key: "query",
        value: function(t) {
          return v(t, this.$container)
        }
      }, {
        key: "desktop",
        value: function() {
          var t = this.art.option,
            e = t.theme,
            r = t.backdrop;
          this.$container.innerHTML = '<div class="art-undercover"></div><div class="art-video-player art-subtitle-show art-layer-show" style="--theme: '.concat(e, '"><video class="art-video"></video><div class="art-subtitle"></div><div class="art-danmuku"></div><div class="art-layers"></div><div class="art-mask"><div class="art-state"></div></div><div class="art-bottom"><div class="art-progress"></div><div class="art-controls"><div class="art-controls-left"></div><div class="art-controls-right"></div></div></div><div class="art-loading"></div><div class="art-notice"><div class="art-notice-inner"></div></div><div class="art-settings"><div class="art-setting-inner"><div class="art-setting-body"></div></div></div><div class="art-info"><div class="art-info-panel"><div class="art-info-item"><div class="art-info-title">Player version:</div><div class="art-info-content">3.5.27</div></div><div class="art-info-item"><div class="art-info-title">Video url:</div><div class="art-info-content" data-video="src"></div></div><div class="art-info-item"><div class="art-info-title">Video volume:</div><div class="art-info-content" data-video="volume"></div></div><div class="art-info-item"><div class="art-info-title">Video time:</div><div class="art-info-content" data-video="currentTime"></div></div><div class="art-info-item"><div class="art-info-title">Video duration:</div><div class="art-info-content" data-video="duration"></div></div><div class="art-info-item"><div class="art-info-title">Video resolution:</div><div class="art-info-content"><span data-video="videoWidth"></span> x <span data-video="videoHeight"></span></div></div></div><div class="art-info-close">[x]</div></div><div class="art-mini-header"><div class="art-mini-title"></div><div class="art-mini-close">xD7</div></div><div class="art-contextmenus"></div></div>'), this.$undercover = this.query(".art-undercover"), this.$player = this.query(".art-video-player"), this.$video = this.query(".art-video"), this.$subtitle = this.query(".art-subtitle"), this.$danmuku = this.query(".art-danmuku"), this.$bottom = this.query(".art-bottom"), this.$progress = this.query(".art-progress"), this.$controls = this.query(".art-controls"), this.$controlsLeft = this.query(".art-controls-left"), this.$controlsRight = this.query(".art-controls-right"), this.$layer = this.query(".art-layers"), this.$loading = this.query(".art-loading"), this.$notice = this.query(".art-notice"), this.$noticeInner = this.query(".art-notice-inner"), this.$mask = this.query(".art-mask"), this.$state = this.query(".art-state"), this.$setting = this.query(".art-settings"), this.$settingInner = this.query(".art-setting-inner"), this.$settingBody = this.query(".art-setting-body"), this.$info = this.query(".art-info"), this.$infoPanel = this.query(".art-info-panel"), this.$infoClose = this.query(".art-info-close"), this.$miniHeader = this.query(".art-mini-header"), this.$miniTitle = this.query(".art-mini-title"), this.$miniClose = this.query(".art-mini-close"), this.$contextmenu = this.query(".art-contextmenus"), r && (m(this.$settingInner, "art-backdrop-filter"), m(this.$info, "art-backdrop-filter"), m(this.$contextmenu, "art-backdrop-filter")), this.art.isMobile && m(this.$container, "art-mobile")
        }
      }, {
        key: "mobile",
        value: function() {
          this.$container.innerHTML = '<div class="art-video-player"><video class="art-video"></video></div>', this.$player = this.query(".art-video-player"), this.$video = this.query(".art-video")
        }
      }, {
        key: "destroy",
        value: function(t) {
          t ? this.$container.innerHTML = "" : m(this.$player, "art-destroy")
        }
      }]), t
    }(),
    mt = {
      "Video info": "统计信息",
      Close: "关闭",
      "Light Off": "关灯",
      "Light On": "开灯",
      "Video load failed": "加载失败",
      Volume: "音量",
      Play: "播放",
      Pause: "暂停",
      Rate: "速度",
      Mute: "静音",
      Flip: "翻转",
      Rotate: "旋转",
      Horizontal: "水平",
      Vertical: "垂直",
      Reconnect: "重新连接",
      "Hide subtitle": "隐藏字幕",
      "Show subtitle": "显示字幕",
      "Hide danmu": "隐藏弹幕",
      "Show danmu": "显示弹幕",
      "Show setting": "显示设置",
      "Hide setting": "隐藏设置",
      Screenshot: "截图",
      "Play speed": "播放速度",
      "Aspect ratio": "画面比例",
      Default: "默认",
      Normal: "正常",
      Open: "打开",
      "Switch video": "切换",
      "Switch subtitle": "切换字幕",
      Fullscreen: "全屏",
      "Exit fullscreen": "退出全屏",
      "Web fullscreen": "网页全屏",
      "Exit web fullscreen": "退出网页全屏",
      "Mini player": "迷你播放器",
      "PIP mode": "画中画模式",
      "Exit PIP mode": "退出画中画模式",
      "PIP not supported": "不支持画中画模式",
      "Fullscreen not supported": "不支持全屏模式",
      "Local Subtitle": "本地字幕",
      "Local Video": "本地视频",
      "Subtitle offset time": "字幕偏移时间",
      "No subtitles found": "未发现字幕"
    },
    wt = {
      "Video info": "統計訊息",
      Close: "關閉",
      "Light Off": "關燈",
      "Light On": "開燈",
      "Video load failed": "載入失敗",
      Volume: "音量",
      Play: "播放",
      Pause: "暫停",
      Rate: "速度",
      Mute: "靜音",
      Flip: "翻轉",
      Rotate: "旋轉",
      Horizontal: "水平",
      Vertical: "垂直",
      Reconnect: "重新連接",
      "Hide subtitle": "隱藏字幕",
      "Show subtitle": "顯示字幕",
      "Hide danmu": "隱藏彈幕",
      "Show danmu": "顯示彈幕",
      "Show setting": "顯示设置",
      "Hide setting": "隱藏设置",
      Screenshot: "截圖",
      "Play speed": "播放速度",
      "Aspect ratio": "畫面比例",
      Default: "默認",
      Normal: "正常",
      Open: "打開",
      "Switch video": "切換",
      "Switch subtitle": "切換字幕",
      Fullscreen: "全屏",
      "Exit fullscreen": "退出全屏",
      "Web fullscreen": "網頁全屏",
      "Exit web fullscreen": "退出網頁全屏",
      "Mini player": "迷你播放器",
      "PIP mode": "畫中畫模式",
      "Exit PIP mode": "退出畫中畫模式",
      "PIP not supported": "不支持畫中畫模式",
      "Fullscreen not supported": "不支持全屏模式",
      "Local Subtitle": "本地字幕",
      "Local Video": "本地視頻",
      "Subtitle offset time": "字幕偏移時間",
      "No subtitles found": "未發現字幕"
    },
    xt = function() {
      function t(r) {
        e(this, t), this.art = r, this.languages = {
          "zh-cn": mt,
          "zh-tw": wt
        }, this.init()
      }
      return n(t, [{
        key: "init",
        value: function() {
          var t = this.art.option.lang.toLowerCase();
          this.language = this.languages[t] || {}
        }
      }, {
        key: "get",
        value: function(t) {
          return this.language[t] || t
        }
      }, {
        key: "update",
        value: function(t) {
          this.languages = G(this.languages, t), this.init()
        }
      }]), t
    }();
  var Ot = i((function(t) {
    ! function() {
      var e = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
        r = t.exports,
        n = function() {
          for(var t, r = [
              ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
              ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
              ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
              ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
              ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], n = 0, o = r.length, i = {}; n < o; n++)
            if((t = r[n]) && t[1] in e) {
              for(n = 0; n < t.length; n++) i[r[0][n]] = t[n];
              return i
            } return !1
        }(),
        o = {
          change: n.fullscreenchange,
          error: n.fullscreenerror
        },
        i = {
          request: function(t) {
            return new Promise(function(r, o) {
              var i = function() {
                this.off("change", i), r()
              }.bind(this);
              this.on("change", i);
              var a = (t = t || e.documentElement)[n.requestFullscreen]();
              a instanceof Promise && a.then(i).catch(o)
            }.bind(this))
          },
          exit: function() {
            return new Promise(function(t, r) {
              if(this.isFullscreen) {
                var o = function() {
                  this.off("change", o), t()
                }.bind(this);
                this.on("change", o);
                var i = e[n.exitFullscreen]();
                i instanceof Promise && i.then(o).catch(r)
              } else t()
            }.bind(this))
          },
          toggle: function(t) {
            return this.isFullscreen ? this.exit() : this.request(t)
          },
          onchange: function(t) {
            this.on("change", t)
          },
          onerror: function(t) {
            this.on("error", t)
          },
          on: function(t, r) {
            var n = o[t];
            n && e.addEventListener(n, r, !1)
          },
          off: function(t, r) {
            var n = o[t];
            n && e.removeEventListener(n, r, !1)
          },
          raw: n
        };
      n ? (Object.defineProperties(i, {
        isFullscreen: {
          get: function() {
            return Boolean(e[n.fullscreenElement])
          }
        },
        element: {
          enumerable: !0,
          get: function() {
            return e[n.fullscreenElement]
          }
        },
        isEnabled: {
          enumerable: !0,
          get: function() {
            return Boolean(e[n.fullscreenEnabled])
          }
        }
      }), r ? t.exports = i : window.screenfull = i) : r ? t.exports = {
        isEnabled: !1
      } : window.screenfull = {
        isEnabled: !1
      }
    }()
  }));
  Ot.isEnabled;

  function kt(t, e) {
    var r = t.i18n,
      n = t.notice,
      o = t.template.$video;
    t.once("ready", (function() {
      Ot.isEnabled ? function(t, e) {
        var r = t.template.$player;
        Y(e, "fullscreen", {
          get: function() {
            return Ot.isFullscreen
          },
          set: function(n) {
            n ? Ot.request(r).then((function() {
              m(r, "art-fullscreen"), e.aspectRatioReset = !0, t.emit("resize"), t.emit("fullscreen", !0)
            })) : Ot.exit().then((function() {
              w(r, "art-fullscreen"), e.aspectRatioReset = !0, e.autoSize = t.option.autoSize, t.emit("resize"), t.emit("fullscreen")
            }))
          }
        })
      }(t, e) : o.webkitSupportsFullscreen ? function(t, e) {
        var r = t.template.$video;
        Y(e, "fullscreen", {
          get: function() {
            return r.webkitDisplayingFullscreen
          },
          set: function(e) {
            e ? (r.webkitEnterFullscreen(), t.emit("fullscreen", !0)) : (r.webkitExitFullscreen(), t.emit("fullscreen"))
          }
        })
      }(t, e) : Y(e, "fullscreen", {
        get: function() {
          return !1
        },
        set: function() {
          n.show = r.get("Fullscreen not supported")
        }
      })
    })), Y(e, "fullscreenToggle", {
      set: function(t) {
        t && (e.fullscreen = !e.fullscreen)
      }
    })
  }

  function jt(t, e) {
    var r = t.i18n,
      n = t.notice,
      o = t.template.$video;
    document.pictureInPictureEnabled ? function(t, e) {
      var r = t.template.$video,
        n = t.events.proxy,
        o = t.notice;
      r.disablePictureInPicture = !1, Y(e, "pip", {
        get: function() {
          return document.pictureInPictureElement
        },
        set: function(t) {
          t ? r.requestPictureInPicture().catch((function(t) {
            throw o.show = t, t
          })) : document.exitPictureInPicture().catch((function(t) {
            throw o.show = t, t
          }))
        }
      }), n(r, "enterpictureinpicture", (function() {
        t.emit("pip", !0)
      })), n(r, "leavepictureinpicture", (function() {
        t.emit("pip")
      }))
    }(t, e) : o.webkitSupportsPresentationMode ? function(t, e) {
      var r = t.template.$video;
      r.webkitSetPresentationMode("inline"), Y(e, "pip", {
        get: function() {
          return "picture-in-picture" === r.webkitPresentationMode
        },
        set: function(e) {
          e ? (r.webkitSetPresentationMode("picture-in-picture"), t.emit("pip", !0)) : (r.webkitSetPresentationMode("inline"), t.emit("pip"))
        }
      })
    }(t, e) : Y(e, "pip", {
      get: function() {
        return !1
      },
      set: function() {
        n.show = r.get("PIP not supported")
      }
    }), Y(e, "pipToggle", {
      set: function(t) {
        t && (e.pip = !e.pip)
      }
    })
  }
  var Pt = function t(r) {
    var n;
    e(this, t),
      function(t, e) {
        var r = t.option,
          n = t.template.$video;
        Y(e, "url", {
          get: function() {
            return n.src
          },
          set: function(e) {
            var o = r.type || I(e),
              i = r.customType[o];
            o && i ? K().then((function() {
              t.loading.show = !0;
              var r = i.call(t, n, e, t);
              Y(t, o, {
                value: r
              })
            })) : (n.src = e, t.option.url = e, t.emit("url", e))
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.option,
          n = t.events.proxy,
          o = t.template,
          i = o.$player,
          a = o.$video,
          c = t.i18n,
          s = t.notice,
          l = 0;
        n(a, "click", (function() {
          e.toggle = !0
        })), bt.events.forEach((function(e) {
          n(a, e, (function(e) {
            t.emit("video:".concat(e.type), e)
          }))
        })), t.on("video:canplay", (function() {
          l = 0, t.loading.show = !1
        })), t.once("video:canplay", (function() {
          t.loading.show = !1, t.controls.show = !0, t.mask.show = !0, t.emit("ready")
        })), t.on("video:ended", (function() {
          r.loop ? (e.seek = 0, e.play = !0, t.controls.show = !1, t.mask.show = !1) : (t.controls.show = !0, t.mask.show = !0)
        })), t.on("video:error", (function() {
          l < 5 ? K(1e3).then((function() {
            l += 1, e.url = r.url, s.show = "".concat(c.get("Reconnect"), ": ").concat(l)
          })) : (t.loading.show = !1, t.controls.show = !1, m(i, "art-error"), K(1e3).then((function() {
            s.show = c.get("Video load failed"), t.destroy(!1)
          })))
        })), t.once("video:loadedmetadata", (function() {
          e.autoSize = r.autoSize, t.isMobile && (t.loading.show = !1, t.controls.show = !0, t.mask.show = !0)
        })), t.on("video:loadstart", (function() {
          t.loading.show = !0
        })), t.on("video:pause", (function() {
          t.controls.show = !0, t.mask.show = !0
        })), t.on("video:play", (function() {
          t.mask.show = !1
        })), t.on("video:playing", (function() {
          t.mask.show = !1
        })), t.on("video:seeked", (function() {
          t.loading.show = !1
        })), t.on("video:seeking", (function() {
          t.loading.show = !0
        })), t.on("video:timeupdate", (function() {
          t.mask.show = !1
        })), t.on("video:waiting", (function() {
          t.loading.show = !0
        }))
      }(r, this),
      function(t, e) {
        var r = t.option,
          n = t.storage,
          o = t.template.$video;
        Object.keys(r.moreVideoAttr).forEach((function(t) {
          o[t] = r.moreVideoAttr[t]
        })), r.muted && (o.muted = r.muted), r.volume && (o.volume = rt(r.volume, 0, 1));
        var i = n.get("volume");
        i && (o.volume = rt(i, 0, 1)), r.poster && (o.poster = r.poster), r.autoplay && (o.autoplay = r.autoplay), o.controls = !1, e.url = r.url
      }(r, this),
      function(t, e) {
        var r, n = ["mini", "pip", "fullscreen", "fullscreenWeb", "fullscreenRotate"];
        (r = n).forEach((function(n) {
          t.on(n, (function() {
            e[n] && r.filter((function(t) {
              return t !== n
            })).forEach((function(t) {
              e[t] && (e[t] = !1)
            }))
          }))
        })), Y(e, "normalSize", {
          get: function() {
            return n.every((function(t) {
              return !e[t]
            }))
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.i18n,
          n = t.notice,
          o = t.constructor.instances,
          i = t.option.mutex,
          a = t.template.$video;
        Y(e, "play", {
          set: function(c) {
            if(c) {
              var s = a.play();
              s.then && s.then().catch((function(t) {
                throw n.show = t, t
              })), i && o.filter((function(e) {
                return e !== t
              })).forEach((function(t) {
                t.player.pause = !0
              })), n.show = r.get("Play"), t.emit("play")
            } else e.pause = !0
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.template.$video,
          n = t.i18n,
          o = t.notice;
        Y(e, "pause", {
          get: function() {
            return r.paused
          },
          set: function(i) {
            i ? (r.pause(), o.show = n.get("Pause"), t.emit("pause")) : e.play = !0
          }
        })
      }(r, this), Y(n = this, "toggle", {
        set: function(t) {
          t && (n.playing ? n.pause = !0 : n.play = !0)
        }
      }),
      function(t, e) {
        var r = t.notice;
        Y(e, "seek", {
          set: function(n) {
            e.currentTime = n, t.emit("seek", e.currentTime), e.duration && (r.show = "".concat(nt(e.currentTime), " / ").concat(nt(e.duration)))
          }
        }), Y(e, "forward", {
          set: function(t) {
            e.seek = e.currentTime + t
          }
        }), Y(e, "backward", {
          set: function(t) {
            e.seek = e.currentTime - t
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.template.$video,
          n = t.i18n,
          o = t.notice,
          i = t.storage;
        Y(e, "volume", {
          get: function() {
            return r.volume || 0
          },
          set: function(e) {
            r.volume = rt(e, 0, 1), o.show = "".concat(n.get("Volume"), ": ").concat(parseInt(100 * r.volume, 10)), 0 !== r.volume && i.set("volume", r.volume), t.emit("volume", r.volume)
          }
        }), Y(e, "muted", {
          get: function() {
            return r.muted
          },
          set: function(e) {
            r.muted = e, t.emit("volume", r.volume)
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.template.$video;
        Y(e, "currentTime", {
          get: function() {
            return r.currentTime || 0
          },
          set: function(t) {
            r.currentTime = rt(t, 0, e.duration)
          }
        })
      }(r, this),
      function(t, e) {
        Y(e, "duration", {
          get: function() {
            return t.template.$video.duration || 0
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.i18n,
          n = t.notice;

        function o(o, i, a) {
          if(o !== e.url) {
            URL.revokeObjectURL(e.url);
            var c = e.playing;
            e.url = o, t.once("video:canplay", (function() {
              e.playbackRate = !1, e.aspectRatio = !1, e.flip = "normal", e.autoSize = !0, e.currentTime = a, c && (e.play = !0)
            })), i && (n.show = "".concat(r.get("Switch video"), ": ").concat(i)), t.emit("switch", o)
          }
        }
        Y(e, "switchQuality", {
          value: function(t, r) {
            return o(t, r, e.currentTime)
          }
        }), Y(e, "switchUrl", {
          value: function(t, e) {
            return o(t, e, 0)
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.template,
          n = r.$video,
          o = r.$player,
          i = t.i18n,
          a = t.notice;
        Y(e, "playbackRate", {
          get: function() {
            return o.dataset.playbackRate
          },
          set: function(r) {
            if(r) {
              if(r === o.dataset.playbackRate) return;
              var c = [.5, .75, 1, 1.25, 1.5, 1.75, 2];
              M(c.includes(r), "'playbackRate' only accept ".concat(c.toString(), " as parameters")), n.playbackRate = r, o.dataset.playbackRate = r, a.show = "".concat(i.get("Rate"), ": ").concat(1 === r ? i.get("Normal") : "".concat(r, "x")), t.emit("playbackRate", r)
            } else e.playbackRate && (e.playbackRate = 1, delete o.dataset.playbackRate, t.emit("playbackRate"))
          }
        }), Y(e, "playbackRateReset", {
          set: function(t) {
            if(t) {
              var r = o.dataset.playbackRate;
              r && (e.playbackRate = Number(r))
            }
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.template,
          n = r.$video,
          o = r.$player,
          i = t.i18n,
          a = t.notice;
        Y(e, "aspectRatio", {
          get: function() {
            return o.dataset.aspectRatio || ""
          },
          set: function(e) {
            e || (e = "default");
            var r = ["default", "4:3", "16:9"];
            if(M(r.includes(e), "'aspectRatio' only accept ".concat(r.toString(), " as parameters")), "default" === e) k(n, "width", null), k(n, "height", null), k(n, "padding", null), delete o.dataset.aspectRatio;
            else {
              var c = e.split(":"),
                s = n.videoWidth,
                l = n.videoHeight,
                u = o.clientWidth,
                p = o.clientHeight,
                f = s / l,
                d = c[0] / c[1];
              if(f > d) {
                var h = d * l / s;
                k(n, "width", "".concat(100 * h, "%")), k(n, "height", "100%"), k(n, "padding", "0 ".concat((u - u * h) / 2, "px"))
              } else {
                var y = s / d / l;
                k(n, "width", "100%"), k(n, "height", "".concat(100 * y, "%")), k(n, "padding", "".concat((p - p * y) / 2, "px 0"))
              }
              o.dataset.aspectRatio = e
            }
            a.show = "".concat(i.get("Aspect ratio"), ": ").concat("default" === e ? i.get("Default") : e), t.emit("aspectRatio", e)
          }
        }), Y(e, "aspectRatioReset", {
          set: function(t) {
            if(t && e.aspectRatio) {
              var r = e.aspectRatio;
              e.aspectRatio = r
            }
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.option,
          n = t.notice,
          o = t.template.$video,
          i = document.createElement("canvas");
        Y(e, "getDataURL", {
          value: function() {
            return new Promise((function(t, e) {
              try {
                i.width = o.videoWidth, i.height = o.videoHeight, i.getContext("2d").drawImage(o, 0, 0), t(i.toDataURL("image/png"))
              } catch (t) {
                n.show = t, e(t)
              }
            }))
          }
        }), Y(e, "getBlobUrl", {
          value: function() {
            return new Promise((function(t, e) {
              try {
                i.width = o.videoWidth, i.height = o.videoHeight, i.getContext("2d").drawImage(o, 0, 0), i.toBlob((function(e) {
                  t(URL.createObjectURL(e))
                }))
              } catch (t) {
                n.show = t, e(t)
              }
            }))
          }
        }), Y(e, "screenshot", {
          value: function() {
            e.getDataURL().then((function(e) {
              W(e, "".concat(r.title || "artplayer", "_").concat(nt(o.currentTime), ".png")), t.emit("screenshot", e)
            }))
          }
        })
      }(r, this), kt(r, this),
      function(t, e) {
        var r = t.template.$player;
        Y(e, "fullscreenWeb", {
          get: function() {
            return x(r, "art-fullscreen-web")
          },
          set: function(n) {
            n ? (m(r, "art-fullscreen-web"), e.aspectRatioReset = !0, t.emit("resize"), t.emit("fullscreenWeb", !0)) : (w(r, "art-fullscreen-web"), e.aspectRatioReset = !0, e.autoSize = t.option.autoSize, t.emit("resize"), t.emit("fullscreenWeb"))
          }
        }), Y(e, "fullscreenWebToggle", {
          set: function(t) {
            t && (e.fullscreenWeb = !e.fullscreenWeb)
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.template,
          n = r.$container,
          o = r.$player;
        Y(e, "fullscreenRotate", {
          get: function() {
            return x(n, "art-fullscreen-rotate")
          },
          set: function(r) {
            if(r) {
              m(n, "art-fullscreen-rotate"), e.autoSize = !0;
              var i = document.body,
                a = i.clientHeight,
                c = i.clientWidth,
                s = o.clientHeight,
                l = o.clientWidth;
              if(c / a < l / s) {
                var u = Math.min(a / l, c / s).toFixed(2);
                k(o, "transform", "rotate(90deg) scale(".concat(u, ",").concat(u, ")")), t.emit("resize"), t.emit("fullscreenRotate", !0)
              }
            } else w(n, "art-fullscreen-rotate"), e.autoSize = t.option.autoSize, k(o, "transform", null), t.emit("resize"), t.emit("fullscreenRotate")
          }
        }), Y(e, "fullscreenRotateToggle", {
          set: function(t) {
            t && (e.fullscreenRotate = !e.fullscreenRotate)
          }
        })
      }(r, this), jt(r, this),
      function(t, e) {
        var r = t.template.$video;
        Y(e, "loaded", {
          get: function() {
            return e.loadedTime / r.duration
          }
        }), Y(e, "loadedTime", {
          get: function() {
            return r.buffered.length ? r.buffered.end(r.buffered.length - 1) : 0
          }
        })
      }(r, this),
      function(t, e) {
        Y(e, "played", {
          get: function() {
            return e.currentTime / e.duration
          }
        })
      }(0, this),
      function(t, e) {
        var r = t.template.$video;
        Y(e, "playing", {
          get: function() {
            return !!(r.currentTime > 0 && !r.paused && !r.ended && r.readyState > 2)
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.template,
          n = r.$container,
          o = r.$player,
          i = r.$video;
        Y(e, "autoSize", {
          get: function() {
            return x(n, "art-auto-size")
          },
          set: function(r) {
            if(r) {
              var a = i.videoWidth,
                c = i.videoHeight,
                s = n.getBoundingClientRect(),
                l = s.width,
                u = s.height,
                p = a / c,
                f = l / u;
              if(m(n, "art-auto-size"), f > p) k(o, "width", "".concat(u * p / l * 100, "%")), k(o, "height", "100%");
              else {
                var d = l / p / u * 100;
                k(o, "width", "100%"), k(o, "height", "".concat(d, "%"))
              }
              t.emit("autoSize", {
                width: e.width,
                height: e.height
              })
            } else w(n, "art-auto-size"), k(o, "width", null), k(o, "height", null), t.emit("autoSize")
          }
        })
      }(r, this),
      function(t, e) {
        Y(e, "rect", {
          get: function() {
            return t.template.$player.getBoundingClientRect()
          }
        }), ["bottom", "height", "left", "right", "top", "width"].forEach((function(t) {
          Y(e, t, {
            get: function() {
              return e.rect[t]
            }
          })
        })), Y(e, "x", {
          get: function() {
            return e.left + window.pageXOffset
          }
        }), Y(e, "y", {
          get: function() {
            return e.top + window.pageYOffset
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.template.$player,
          n = t.i18n,
          o = t.notice;
        Y(e, "flip", {
          get: function() {
            return r.dataset.flip
          },
          set: function(i) {
            i || (i = "normal");
            var a = ["normal", "horizontal", "vertical"];
            M(a.includes(i), "'flip' only accept ".concat(a.toString(), " as parameters")), "normal" === i ? delete r.dataset.flip : (e.rotate = !1, r.dataset.flip = i);
            var c = i.replace(i[0], i[0].toUpperCase());
            o.show = "".concat(n.get("Flip"), ": ").concat(n.get(c)), t.emit("flip", i)
          }
        }), Y(e, "flipReset", {
          set: function(t) {
            if(t && e.flip) {
              var r = e.flip;
              e.flip = r
            }
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.template.$undercover;
        Y(e, "light", {
          get: function() {
            return "none" !== P(r, "display", !1)
          },
          set: function(e) {
            k(r, "display", e ? "block" : "none"), t.emit("light", e)
          }
        })
      }(r, this),
      function(t, e) {
        var r = t.i18n,
          n = t.option,
          o = t.storage,
          i = t.events.proxy,
          a = t.template,
          c = a.$player,
          s = a.$miniClose,
          l = a.$miniTitle,
          u = a.$miniHeader,
          p = "",
          f = !1,
          d = 0,
          h = 0,
          y = 0,
          b = 0;
        i(u, "mousedown", (function(t) {
          f = !0, d = t.pageX, h = t.pageY, y = e.left, b = e.top
        })), i(document, "mousemove", (function(t) {
          if(f) {
            m(c, "art-is-dragging");
            var e = b + t.pageY - h,
              r = y + t.pageX - d;
            k(c, "top", "".concat(e, "px")), k(c, "left", "".concat(r, "px")), o.set("top", e), o.set("left", r)
          }
        })), i(document, "mouseup", (function() {
          f = !1, w(c, "art-is-dragging")
        })), i(s, "click", (function() {
          e.mini = !1, f = !1, w(c, "art-is-dragging")
        })), O(l, n.title || r.get("Mini player")), Y(e, "mini", {
          get: function() {
            return x(c, "art-mini")
          },
          set: function(r) {
            if(r) {
              e.autoSize = !1, p = c.style.cssText, m(c, "art-mini");
              var i = o.get("top"),
                a = o.get("left");
              if(i && a) k(c, "top", "".concat(i, "px")), k(c, "left", "".concat(a, "px")), D(u) || (o.del("top"), o.del("left"), e.mini = !0);
              else {
                var s = document.body,
                  l = s.clientHeight - e.height - 50,
                  f = s.clientWidth - e.width - 50;
                o.set("top", l), o.set("left", f), k(c, "top", "".concat(l, "px")), k(c, "left", "".concat(f, "px"))
              }
              e.aspectRatio = !1, e.playbackRate = !1, t.emit("mini", !0)
            } else c.style.cssText = p, w(c, "art-mini"), k(c, "top", null), k(c, "left", null), e.aspectRatio = !1, e.playbackRate = !1, e.autoSize = n.autoSize, t.emit("mini")
          }
        }), Y(e, "miniToggle", {
          set: function(t) {
            t && (e.mini = !e.mini)
          }
        })
      }(r, this),
      function(t, e) {
        var r = [];
        Y(e, "loop", {
          get: function() {
            return r
          },
          set: function(n) {
            if(Array.isArray(n) && "number" == typeof n[0] && "number" == typeof n[1]) {
              var o = rt(n[0], 0, Math.min(n[1], e.duration)),
                i = rt(n[1], o, e.duration);
              i - o >= 1 ? (r = [o, i], t.emit("loop", r)) : (r = [], t.emit("loop"))
            } else r = [], t.emit("loop")
          }
        }), t.on("video:timeupdate", (function() {
          r.length && (e.currentTime < r[0] || e.currentTime > r[1]) && (e.seek = r[0])
        }))
      }(r, this),
      function(t, e) {
        var r = t.template,
          n = r.$video,
          o = r.$player,
          i = t.i18n,
          a = t.notice;
        Y(e, "rotate", {
          get: function() {
            return Number(o.dataset.rotate) || 0
          },
          set: function(r) {
            r || (r = 0);
            var c = [-270, -180, -90, 0, 90, 180, 270];
            if(M(c.includes(r), "'rotate' only accept ".concat(c.toString(), " as parameters")), 0 === r) delete o.dataset.rotate, k(n, "transform", null);
            else {
              e.flip = !1, o.dataset.rotate = r;
              var s = function() {
                  var t = n.videoWidth,
                    e = n.videoHeight;
                  return t > e ? e / t : t / e
                },
                l = 0,
                u = 1;
              switch(r) {
                case -270:
                  l = 90, u = s();
                  break;
                case -180:
                  l = 180;
                  break;
                case -90:
                  l = 270, u = s();
                  break;
                case 90:
                  l = 90, u = s();
                  break;
                case 180:
                  l = 180;
                  break;
                case 270:
                  l = 270, u = s()
              }
              k(n, "transform", "rotate(".concat(l, "deg) scale(").concat(u, ")"))
            }
            a.show = "".concat(i.get("Rotate"), ": ").concat(r, "°"), t.emit("rotate", r)
          }
        }), Y(e, "rotateReset", {
          set: function(t) {
            if(t && e.rotate) {
              var r = e.rotate;
              e.rotate = r
            }
          }
        })
      }(r, this), Q(r, this)
  };
  var St = function(t, e) {
      for(; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
      return t
    },
    Rt = i((function(t) {
      function e(r, n, o) {
        return "undefined" != typeof Reflect && Reflect.get ? t.exports = e = Reflect.get : t.exports = e = function(t, e, r) {
          var n = St(t, e);
          if(n) {
            var o = Object.getOwnPropertyDescriptor(n, e);
            return o.get ? o.get.call(r) : o.value
          }
        }, e(r, n, o || r)
      }
      t.exports = e
    })),
    Et = function() {
      function t(r) {
        e(this, t), this.id = 0, this.art = r, this.add = this.add.bind(this)
      }
      return n(t, [{
        key: "add",
        value: function(t) {
          var e = this,
            r = "function" == typeof t ? t(this.art) : t;
          if(this.$parent && this.name && !r.disable) {
            var n = r.name || "".concat(this.name).concat(this.id);
            M(!J(this, n), "Cannot add an existing name [".concat(n, "] to the [").concat(this.name, "]")), this.id += 1;
            var o = document.createElement("div");
            m(o, "art-".concat(this.name)), m(o, "art-".concat(this.name, "-").concat(n));
            var i = Array.from(this.$parent.children);
            o.dataset.index = r.index || this.id;
            var a = i.find((function(t) {
              return Number(t.dataset.index) >= Number(o.dataset.index)
            }));
            a ? a.insertAdjacentElement("beforebegin", o) : O(this.$parent, o), r.html && O(o, r.html), r.style && j(o, r.style), r.tooltip && E(o, r.tooltip), r.click && this.art.events.proxy(o, "click", (function(t) {
              t.preventDefault(), r.click.call(e.art, e, t)
            })), r.selector && ["left", "right"].includes(r.position) && this.selector(r, o), r.mounted && r.mounted.call(this.art, o), 1 === o.childNodes.length && 3 === o.childNodes[0].nodeType && m(o, "art-control-onlyText")
          }
        }
      }, {
        key: "selector",
        value: function(t, e) {
          var r = this,
            n = this.art.events,
            o = n.hover,
            i = n.proxy;
          m(e, "art-control-selector");
          var a = document.createElement("div");
          m(a, "art-selector-value"), O(a, t.html), e.innerText = "", O(e, a);
          var c = t.selector.map((function(t) {
              return '<div class="art-selector-item">'.concat(t.name, "</div>")
            })).join(""),
            s = document.createElement("div");
          m(s, "art-selector-list"), O(s, c), O(e, s);
          var l = function() {
            s.style.left = "-".concat(P(s, "width") / 2 - P(e, "width") / 2, "px")
          };
          o(e, l), i(e, "click", (function(e) {
            if(x(e.target, "art-selector-item")) {
              var n = e.target.innerText;
              if(a.innerText === n) return;
              var o = t.selector.find((function(t) {
                return t.name === n
              }));
              a.innerText = n, l(), o && (t.onSelect && t.onSelect.call(r.art, o), r.art.emit("selector", o))
            }
          }))
        }
      }, {
        key: "show",
        get: function() {
          return x(this.art.template.$player, "art-".concat(this.name, "-show"))
        },
        set: function(t) {
          var e = this.art.template.$player,
            r = "art-".concat(this.name, "-show");
          t ? m(e, r) : w(e, r), this.art.emit(this.name, t)
        }
      }, {
        key: "toggle",
        set: function(t) {
          t && (this.show = !this.show)
        }
      }]), t
    }();

  function Dt(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function $t(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? Dt(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dt(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function Tt(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function zt(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? Tt(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tt(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function At(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Ct(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? At(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function Lt(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Mt(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? Lt(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function qt(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Ft(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? qt(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qt(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function Ht(t, e) {
    var r = t.template.$progress,
      n = t.player,
      o = r.getBoundingClientRect().left,
      i = rt(e.pageX - o, 0, r.clientWidth),
      a = i / r.clientWidth * n.duration;
    return {
      second: a,
      time: nt(a),
      width: i,
      percentage: rt(i / r.clientWidth, 0, 1)
    }
  }

  function It(t) {
    return function(e) {
      var r = e.option,
        n = r.highlight,
        o = r.theme,
        i = e.events.proxy,
        a = e.player;
      return Ft(Ft({}, t), {}, {
        html: '<div class="art-control-progress-inner"><div class="art-progress-loaded"></div><div class="art-progress-played" style="background: '.concat(o, '"></div><div class="art-progress-highlight"></div><div class="art-progress-indicator" style="background: ').concat(o, '"></div><div class="art-progress-tip art-tip"></div></div>'),
        mounted: function(t) {
          var r = !1,
            o = v(".art-progress-loaded", t),
            c = v(".art-progress-played", t),
            s = v(".art-progress-highlight", t),
            l = v(".art-progress-indicator", t),
            u = v(".art-progress-tip", t);

          function p(t, e) {
            "loaded" === t && k(o, "width", "".concat(100 * e, "%")), "played" === t && (k(c, "width", "".concat(100 * e, "%")), k(l, "left", "calc(".concat(100 * e, "% - ").concat(P(l, "width") / 2, "px)")))
          }
          n.forEach((function(t) {
            var e = rt(t.time, 0, a.duration) / a.duration * 100;
            O(s, '<span data-text="'.concat(t.text, '" data-time="').concat(t.time, '" style="left: ').concat(e, '%"></span>'))
          })), p("loaded", a.loaded), e.on("video:progress", (function() {
            p("loaded", a.loaded)
          })), e.on("video:timeupdate", (function() {
            p("played", a.played)
          })), e.on("video:ended", (function() {
            p("played", 1)
          })), i(t, "mousemove", (function(r) {
            k(u, "display", "block"), $(r, s) ? function(r) {
              var n = Ht(e, r).width,
                o = r.target.dataset.text;
              u.innerHTML = o;
              var i = u.clientWidth;
              n <= i / 2 ? k(u, "left", 0) : n > t.clientWidth - i / 2 ? k(u, "left", "".concat(t.clientWidth - i, "px")) : k(u, "left", "".concat(n - i / 2, "px"))
            }(r) : function(r) {
              var n = Ht(e, r),
                o = n.width,
                i = n.time;
              u.innerHTML = i;
              var a = u.clientWidth;
              o <= a / 2 ? k(u, "left", 0) : o > t.clientWidth - a / 2 ? k(u, "left", "".concat(t.clientWidth - a, "px")) : k(u, "left", "".concat(o - a / 2, "px"))
            }(r)
          })), i(t, "mouseout", (function() {
            k(u, "display", "none")
          })), i(t, "click", (function(t) {
            if(t.target !== l) {
              var r = Ht(e, t),
                n = r.second;
              p("played", r.percentage), a.seek = n
            }
          })), i(l, "mousedown", (function() {
            r = !0
          })), i(document, "mousemove", (function(t) {
            if(r) {
              var n = Ht(e, t),
                o = n.second,
                i = n.percentage;
              m(l, "art-show-indicator"), p("played", i), a.seek = o
            }
          })), i(document, "mouseup", (function() {
            r && (r = !1, w(l, "art-show-indicator"))
          }))
        }
      })
    }
  }

  function Wt(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Vt(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? Wt(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function Bt(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Nt(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? Bt(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bt(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function Ut(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function _t(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? Ut(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ut(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function Xt(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Yt(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? Xt(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xt(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function Zt(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Jt(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? Zt(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zt(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function Qt(t) {
    return function(e) {
      return Jt(Jt({}, t), {}, {
        mounted: function(t) {
          var r = e.option.thumbnails,
            n = e.template.$progress,
            o = e.events,
            i = o.proxy,
            a = o.loadImg,
            c = !1,
            s = !1;
          i(n, "mousemove", (function(o) {
            c || (c = !0, a(r.url).then((function() {
              s = !0
            }))), s && (k(t, "display", "block"), function(o) {
              var i = Ht(e, o).width,
                a = r.url,
                c = r.height,
                s = r.width,
                l = r.number,
                u = r.column,
                p = n.clientWidth / l,
                f = Math.floor(i / p),
                d = Math.ceil(f / u) - 1,
                h = f % u || u - 1;
              k(t, "backgroundImage", "url(".concat(a, ")")), k(t, "height", "".concat(c, "px")), k(t, "width", "".concat(s, "px")), k(t, "backgroundPosition", "-".concat(h * s, "px -").concat(d * c, "px")), i <= s / 2 ? k(t, "left", 0) : i > n.clientWidth - s / 2 ? k(t, "left", "".concat(n.clientWidth - s, "px")) : k(t, "left", "".concat(i - s / 2, "px"))
            }(o))
          })), i(n, "mouseout", (function() {
            k(t, "display", "none")
          }))
        }
      })
    }
  }

  function Gt(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Kt(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? Gt(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gt(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function te(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function ee(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? te(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function re(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function ne(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? re(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function oe(t) {
    var e = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = u(t);
      if(e) {
        var o = u(this).constructor;
        r = Reflect.construct(n, arguments, o)
      } else r = n.apply(this, arguments);
      return l(this, r)
    }
  }
  var ie = function(t) {
    c(o, t);
    var r = oe(o);

    function o(t) {
      var n;
      e(this, o), (n = r.call(this, t)).name = "control";
      var i = t.option,
        a = t.player,
        c = t.template.$player;
      return n.delayHide = tt((function() {
        a.playing && n.show && (m(c, "art-hide-cursor"), w(c, "art-hover"), n.show = !1)
      }), 3e3), n.cancelDelayHide = n.delayHide.clearTimeout, t.once("ready", (function() {
        n.add(It({
          name: "progress",
          disable: i.isLive,
          position: "top",
          index: 10
        })), n.add(Qt({
          name: "thumbnails",
          disable: !i.thumbnails.url || i.isLive,
          position: "top",
          index: 20
        })), n.add(function(t) {
          return function(e) {
            return ne(ne({}, t), {}, {
              mounted: function(t) {
                var r = e.player,
                  n = O(t, '<span class="art-loop-point"></span>'),
                  o = O(t, '<span class="art-loop-point"></span>');
                e.on("loop", (function(e) {
                  e ? (k(t, "display", "block"), k(n, "left", "calc(".concat(e[0] / r.duration * 100, "% - ").concat(n.clientWidth, "px)")), k(o, "left", "".concat(e[1] / r.duration * 100, "%"))) : k(t, "display", "none")
                }))
              }
            })
          }
        }({
          name: "loop",
          disable: !1,
          position: "top",
          index: 30
        })), n.add(function(t) {
          return function(e) {
            return Mt(Mt({}, t), {}, {
              mounted: function(t) {
                var r = e.events.proxy,
                  n = e.icons,
                  o = e.i18n,
                  i = e.player,
                  a = O(t, n.play),
                  c = O(t, n.pause);

                function s() {
                  k(a, "display", "flex"), k(c, "display", "none")
                }

                function l() {
                  k(a, "display", "none"), k(c, "display", "flex")
                }
                E(a, o.get("Play")), E(c, o.get("Pause")), r(a, "click", (function() {
                  i.play = !0
                })), r(c, "click", (function() {
                  i.pause = !0
                })), i.playing ? l() : s(), e.on("video:playing", (function() {
                  l()
                })), e.on("video:pause", (function() {
                  s()
                }))
              }
            })
          }
        }({
          name: "playAndPause",
          disable: !1,
          position: "left",
          index: 10
        })), n.add(function(t) {
          return function(e) {
            return _t(_t({}, t), {}, {
              mounted: function(t) {
                var r = e.events.proxy,
                  n = e.icons,
                  o = e.player,
                  i = e.i18n,
                  a = !1,
                  c = O(t, n.volume),
                  s = O(t, n.volumeClose),
                  l = O(t, '<div class="art-volume-panel"></div>'),
                  u = O(l, '<div class="art-volume-slider-handle"></div>');

                function p(t) {
                  var e = l.getBoundingClientRect().left;
                  return rt(t.pageX - e - 6, 0, 54) / 48
                }

                function f() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .7;
                  if(o.muted || 0 === t) k(c, "display", "none"), k(s, "display", "flex"), k(u, "left", "0");
                  else {
                    var e = 48 * t;
                    k(c, "display", "flex"), k(s, "display", "none"), k(u, "left", "".concat(e, "px"))
                  }
                }
                E(c, i.get("Mute")), k(s, "display", "none"), e.isMobile && k(l, "display", "none"), f(o.volume), e.on("video:volumechange", (function() {
                  f(o.volume)
                })), r(c, "click", (function() {
                  o.muted = !0
                })), r(s, "click", (function() {
                  o.muted = !1
                })), r(l, "click", (function(t) {
                  o.muted = !1, o.volume = p(t)
                })), r(u, "mousedown", (function() {
                  a = !0
                })), r(t, "mousemove", (function(t) {
                  a && (o.muted = !1, o.volume = p(t))
                })), r(document, "mouseup", (function() {
                  a && (a = !1)
                }))
              }
            })
          }
        }({
          name: "volume",
          disable: !1,
          position: "left",
          index: 20
        })), n.add(function(t) {
          return function(e) {
            return Nt(Nt({}, t), {}, {
              mounted: function(t) {
                function r() {
                  var r = "".concat(nt(e.player.currentTime), " / ").concat(nt(e.player.duration));
                  r !== t.innerText && (t.innerText = r)
                }
                r(), ["video:loadedmetadata", "video:timeupdate", "video:progress"].forEach((function(t) {
                  e.on(t, r)
                }))
              }
            })
          }
        }({
          name: "time",
          disable: i.isLive,
          position: "left",
          index: 30
        })), n.add(function(t) {
          return function(e) {
            var r = e.option.quality,
              n = r.find((function(t) {
                return t.default
              })) || r[0];
            return ee(ee({}, t), {}, {
              html: n ? n.name : "",
              selector: r,
              onSelect: function(t) {
                e.player.switchQuality(t.url, t.name)
              }
            })
          }
        }({
          name: "quality",
          disable: 0 === i.quality.length,
          position: "right",
          index: 10
        })), n.add(function(t) {
          return function(e) {
            return Kt(Kt({}, t), {}, {
              tooltip: e.i18n.get("Screenshot"),
              mounted: function(t) {
                var r = e.events.proxy,
                  n = e.icons,
                  o = e.player;
                O(t, n.screenshot), r(t, "click", (function() {
                  o.screenshot()
                }))
              }
            })
          }
        }({
          name: "screenshot",
          disable: !i.screenshot,
          position: "right",
          index: 20
        })), n.add(function(t) {
          return function(e) {
            return Vt(Vt({}, t), {}, {
              tooltip: e.i18n.get("Hide subtitle"),
              mounted: function(t) {
                var r = e.events.proxy,
                  n = e.icons,
                  o = e.i18n,
                  i = e.subtitle;
                O(t, n.subtitle), r(t, "click", (function() {
                  i.toggle = !0
                })), e.on("subtitle", (function(e) {
                  E(t, o.get(e ? "Hide subtitle" : "Show subtitle"))
                }))
              }
            })
          }
        }({
          name: "subtitle",
          disable: !i.subtitle.url,
          position: "right",
          index: 30
        })), n.add(function(t) {
          return function(e) {
            return Yt(Yt({}, t), {}, {
              tooltip: e.i18n.get("Show setting"),
              mounted: function(t) {
                var r = e.events.proxy,
                  n = e.icons,
                  o = e.i18n,
                  i = e.setting;
                O(t, n.setting), r(t, "click", (function() {
                  i.toggle = !0
                })), e.on("setting", (function(e) {
                  E(t, o.get(e ? "Hide setting" : "Show setting"))
                }))
              }
            })
          }
        }({
          name: "setting",
          disable: !i.setting,
          position: "right",
          index: 40
        })), n.add(function(t) {
          return function(e) {
            return Ct(Ct({}, t), {}, {
              tooltip: e.i18n.get("PIP mode"),
              mounted: function(t) {
                var r = e.events.proxy,
                  n = e.icons,
                  o = e.i18n,
                  i = e.player;
                O(t, n.pip), r(t, "click", (function() {
                  i.pipToggle = !0
                })), e.on("pip", (function(e) {
                  E(t, o.get(e ? "Exit PIP mode" : "PIP mode"))
                }))
              }
            })
          }
        }({
          name: "pip",
          disable: !i.pip,
          position: "right",
          index: 50
        })), n.add(function(t) {
          return function(e) {
            return zt(zt({}, t), {}, {
              tooltip: e.i18n.get("Web fullscreen"),
              mounted: function(t) {
                var r = e.events.proxy,
                  n = e.icons,
                  o = e.i18n,
                  i = e.player;
                O(t, n.fullscreenWeb), r(t, "click", (function() {
                  i.fullscreenWebToggle = !0
                })), e.on("fullscreenWeb", (function(e) {
                  E(t, o.get(e ? "Exit web fullscreen" : "Web fullscreen"))
                }))
              }
            })
          }
        }({
          name: "fullscreenWeb",
          disable: !i.fullscreenWeb,
          position: "right",
          index: 60
        })), n.add(function(t) {
          return function(e) {
            return $t($t({}, t), {}, {
              tooltip: e.i18n.get("Fullscreen"),
              mounted: function(t) {
                var r = e.events.proxy,
                  n = e.icons,
                  o = e.i18n,
                  i = e.player;
                O(t, n.fullscreen), r(t, "click", (function() {
                  i.fullscreenToggle = !0
                })), e.on("fullscreen", (function(e) {
                  E(t, o.get(e ? "Exit fullscreen" : "Fullscreen"))
                }))
              }
            })
          }
        }({
          name: "fullscreen",
          disable: !i.fullscreen,
          position: "right",
          index: 70
        })), i.controls.forEach((function(t) {
          n.add(t)
        }))
      })), n
    }
    return n(o, [{
      key: "add",
      value: function(t) {
        var e = "function" == typeof t ? t(this.art) : t,
          r = this.art.template,
          n = r.$progress,
          i = r.$controlsLeft,
          a = r.$controlsRight;
        switch(e.position) {
          case "top":
            this.$parent = n;
            break;
          case "left":
            this.$parent = i;
            break;
          case "right":
            this.$parent = a;
            break;
          default:
            M(!1, "Control option.position must one of 'top', 'left', 'right'")
        }
        Rt(u(o.prototype), "add", this).call(this, e)
      }
    }]), o
  }(Et);

  function ae(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function ce(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ae(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function se(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function le(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? se(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function ue(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function pe(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ue(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ue(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function fe(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function de(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? fe(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fe(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function he(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function ye(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? he(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function be(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function ve(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? be(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function ge(t) {
    var e = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = u(t);
      if(e) {
        var o = u(this).constructor;
        r = Reflect.construct(n, arguments, o)
      } else r = n.apply(this, arguments);
      return l(this, r)
    }
  }
  var me = function(t) {
    c(n, t);
    var r = ge(n);

    function n(t) {
      var o;
      e(this, n), (o = r.call(this, t)).name = "contextmenu";
      var i = t.option,
        a = t.template,
        c = a.$player,
        s = a.$contextmenu,
        l = t.events.proxy;
      return o.$parent = s, t.once("ready", (function() {
        o.add(function(t) {
          return function(e) {
            var r = e.i18n,
              n = e.player;
            return ce(ce({}, t), {}, {
              html: "".concat(r.get("Play speed"), ':<span data-rate="0.5">0.5</span><span data-rate="0.75">0.75</span><span data-rate="1.0" class="art-current">').concat(r.get("Normal"), '</span><span data-rate="1.25">1.25</span><span data-rate="1.5">1.5</span><span data-rate="2.0">2.0</span>'),
              click: function(t, e) {
                var r = e.target.dataset.rate;
                r && (n.playbackRate = Number(r), t.show = !1)
              },
              mounted: function(t) {
                e.on("playbackRate", (function(e) {
                  var r = g("span", t).find((function(t) {
                    return Number(t.dataset.rate) === e
                  }));
                  r && R(r, "art-current")
                }))
              }
            })
          }
        }({
          disable: !i.playbackRate,
          name: "playbackRate",
          index: 10
        })), o.add(function(t) {
          return function(e) {
            var r = e.i18n,
              n = e.player;
            return le(le({}, t), {}, {
              html: "".concat(r.get("Aspect ratio"), ':<span data-ratio="default" class="art-current">').concat(r.get("Default"), '</span><span data-ratio="4:3">4:3</span><span data-ratio="16:9">16:9</span>'),
              click: function(t, e) {
                var r = e.target.dataset.ratio;
                r && (n.aspectRatio = r, t.show = !1)
              },
              mounted: function(t) {
                e.on("aspectRatio", (function(e) {
                  var r = g("span", t).find((function(t) {
                    return t.dataset.ratio === e
                  }));
                  r && R(r, "art-current")
                }))
              }
            })
          }
        }({
          disable: !i.aspectRatio,
          name: "aspectRatio",
          index: 20
        })), o.add(function(t) {
          return function(e) {
            return pe(pe({}, t), {}, {
              html: e.i18n.get("Video info"),
              click: function(t) {
                e.info.show = !0, t.show = !1
              }
            })
          }
        }({
          disable: !1,
          name: "info",
          index: 30
        })), o.add(function(t) {
          return de(de({}, t), {}, {
            html: '<a href="https://artplayer.org" target="_blank">ArtPlayer 3.5.27</a>'
          })
        }({
          disable: !1,
          name: "version",
          index: 40
        })), o.add(function(t) {
          return function(e) {
            var r = e.i18n,
              n = e.player;
            return ye(ye({}, t), {}, {
              html: r.get("Light Off"),
              click: function(t) {
                n.light = !n.light, t.show = !1
              },
              mounted: function(t) {
                e.on("light", (function(e) {
                  t.innerText = r.get(e ? "Light On" : "Light Off")
                }))
              }
            })
          }
        }({
          disable: !i.light,
          name: "light",
          index: 50
        })), o.add(function(t) {
          return function(e) {
            return ve(ve({}, t), {}, {
              html: e.i18n.get("Close"),
              click: function(t) {
                t.show = !1
              }
            })
          }
        }({
          disable: !1,
          name: "close",
          index: 60
        })), i.contextmenu.forEach((function(t) {
          o.add(t)
        })), l(c, "contextmenu", (function(t) {
          t.preventDefault(), o.show = !0;
          var e = t.clientX,
            r = t.clientY,
            n = c.getBoundingClientRect(),
            i = n.height,
            a = n.width,
            l = n.left,
            u = n.top,
            p = s.getBoundingClientRect(),
            f = p.height,
            d = p.width,
            h = e - l,
            y = r - u;
          e + d > l + a && (h = a - d), r + f > u + i && (y = i - f), j(s, {
            top: "".concat(y, "px"),
            left: "".concat(h, "px")
          })
        })), l(c, "click", (function(t) {
          $(t, s) || (o.show = !1)
        })), t.on("blur", (function() {
          o.show = !1
        }))
      })), o
    }
    return n
  }(Et);

  function we(t) {
    var e = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = u(t);
      if(e) {
        var o = u(this).constructor;
        r = Reflect.construct(n, arguments, o)
      } else r = n.apply(this, arguments);
      return l(this, r)
    }
  }
  var xe = function(t) {
    c(n, t);
    var r = we(n);

    function n(t) {
      var o;
      e(this, n), (o = r.call(this, t)).name = "info";
      var i = t.template,
        a = i.$infoPanel,
        c = i.$infoClose,
        s = i.$video;
      (0, t.events.proxy)(c, "click", (function() {
        o.show = !1
      }));
      var l = null,
        u = g("[data-video]", a);
      return t.on("destroy", (function() {
        clearTimeout(l)
      })), t.on("info", (function(t) {
        clearTimeout(l), t && function t() {
          u.forEach((function(t) {
            var e = s[t.dataset.video];
            t.innerText = "number" == typeof e ? e.toFixed(2) : e
          })), l = setTimeout((function() {
            t()
          }), 1e3)
        }()
      })), o
    }
    return n
  }(Et);

  function Oe(t) {
    var e = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = u(t);
      if(e) {
        var o = u(this).constructor;
        r = Reflect.construct(n, arguments, o)
      } else r = n.apply(this, arguments);
      return l(this, r)
    }
  }
  var ke = function(t) {
    c(o, t);
    var r = Oe(o);

    function o(t) {
      var n;
      e(this, o), (n = r.call(this, t)).name = "subtitle";
      var i = t.option.subtitle,
        a = t.template.$subtitle;
      return j(a, i.style), i.url && n.init(i.url), i.bilingual && m(a, "art-bilingual"), n
    }
    return n(o, [{
      key: "style",
      value: function(t, e) {
        var r = this.art.template.$subtitle;
        return "object" === s(t) ? j(r, t) : k(r, t, e)
      }
    }, {
      key: "update",
      value: function() {
        var t = this.art.template.$subtitle;
        t.innerHTML = "", this.activeCue && (t.innerHTML = this.activeCue.text.split(/\r?\n/).map((function(t) {
          return "<p>".concat(ot(t), "</p>")
        })).join(""), this.art.emit("subtitleUpdate", this.activeCue.text))
      }
    }, {
      key: "switch",
      value: function(t) {
        var e = this,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = this.art,
          o = n.i18n,
          i = n.notice;
        return this.init(t, r).then((function(t) {
          return r.name && (i.show = "".concat(o.get("Switch subtitle"), ": ").concat(r.name)), e.art.emit("subtitleSwitch", t), t
        }))
      }
    }, {
      key: "init",
      value: function(t) {
        var e = this,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = this.art,
          o = n.notice,
          i = n.events.proxy,
          a = n.option.subtitle,
          c = n.template,
          s = c.$subtitle,
          l = c.$video,
          u = c.$track;
        if(!u) {
          var p = document.createElement("track");
          p.default = !0, p.kind = "metadata", l.appendChild(p), this.art.template.$track = p, i(this.textTrack, "cuechange", this.update.bind(this))
        }
        return fetch(t).then((function(t) {
          return t.arrayBuffer()
        })).then((function(n) {
          var o = new TextDecoder(r.encoding || a.encoding).decode(n);
          switch(e.art.emit("subtitleLoad", t), r.ext || I(t)) {
            case "srt":
              return F(q(o));
            case "ass":
              return F(H(o));
            case "vtt":
              return F(o);
            default:
              return t
          }
        })).then((function(t) {
          return s.innerHTML = "", e.url === t || (URL.revokeObjectURL(e.url), e.art.template.$track.src = t), t
        })).catch((function(t) {
          throw o.show = t, t
        }))
      }
    }, {
      key: "url",
      get: function() {
        return this.art.template.$track.src
      }
    }, {
      key: "textTrack",
      get: function() {
        return this.art.template.$video.textTracks[0]
      }
    }, {
      key: "activeCue",
      get: function() {
        return this.textTrack.activeCues[0]
      }
    }, {
      key: "bilingual",
      get: function() {
        return x(this.art.template.$subtitle, "art-bilingual")
      },
      set: function(t) {
        var e = this.art.template.$subtitle;
        t ? m(e, "art-bilingual") : w(e, "art-bilingual")
      }
    }]), o
  }(Et);
  var je = function() {
      function t(r) {
        var n = this;
        e(this, t), this.destroyEvents = [], this.proxy = this.proxy.bind(this), this.hover = this.hover.bind(this), this.loadImg = this.loadImg.bind(this), r.whitelist.state && r.once("ready", (function() {
          ! function(t, e) {
            var r = t.controls,
              n = t.template.$player;
            e.proxy(document, ["click", "contextmenu"], (function(e) {
              $(e, n) ? (t.isFocus = !0, t.emit("focus")) : (t.isFocus = !1, t.emit("blur"))
            })), t.on("blur", (function() {
              r.delayHide()
            }))
          }(r, n),
          function(t, e) {
            var r = t.controls,
              n = t.template.$player;
            e.hover(n, (function() {
              m(n, "art-hover"), t.emit("hover", !0)
            }), (function() {
              w(n, "art-hover"), t.emit("hover")
            })), t.on("hover", (function(t) {
              t || r.delayHide()
            }))
          }(r, n),
          function(t, e) {
            var r = t.template,
              n = r.$player,
              o = r.$video,
              i = t.player,
              a = t.controls;
            e.proxy(n, "mousemove", (function(e) {
              t.emit("mousemove", e)
            })), t.on("mousemove", (function(t) {
              a.cancelDelayHide(), w(n, "art-hide-cursor"), a.show = !0, i.pip || t.target !== o || a.delayHide()
            }))
          }(r, n),
          function(t, e) {
            var r = t.option,
              n = t.player,
              o = et((function() {
                n.normalSize && (n.autoSize = r.autoSize), n.aspectRatioReset = !0, t.emit("resize")
              }), 500);
            e.proxy(window, ["orientationchange", "resize"], (function() {
              o()
            }))
          }(r, n),
          function(t, e) {
            if(t.isMobile && !t.option.isLive) {
              var r = t.player,
                n = t.notice,
                o = t.template.$video,
                i = !1,
                a = 0,
                c = 0;
              e.proxy(o, "touchstart", (function(t) {
                1 === t.touches.length && (i = !0, a = t.touches[0].clientX)
              })), e.proxy(document, "touchmove", (function(t) {
                if(1 === t.touches.length && i) {
                  var e = rt((t.touches[0].clientX - a) / o.clientWidth, -1, 1);
                  c = rt(r.currentTime + 60 * e, 0, r.duration), n.show = "".concat(nt(c), " / ").concat(nt(r.duration))
                }
              })), e.proxy(document, "touchend", (function() {
                i && c && (r.seek = c), i = !1, a = 0, c = 0
              }))
            }
          }(r, n),
          function(t, e) {
            var r = t.player,
              n = t.option.autoMini,
              o = t.template.$container,
              i = tt((function() {
                t.emit("view", D(o))
              }), 200);
            e.proxy(window, "scroll", (function() {
              i()
            })), t.on("view", (function(t) {
              n && (r.mini = !t)
            }))
          }(r, n)
        }))
      }
      return n(t, [{
        key: "proxy",
        value: function(t, e, r) {
          var n = this,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if(Array.isArray(e)) return e.map((function(e) {
            return n.proxy(t, e, r, o)
          }));
          t.addEventListener(e, r, o);
          var i = function() {
            return t.removeEventListener(e, r, o)
          };
          return this.destroyEvents.push(i), i
        }
      }, {
        key: "hover",
        value: function(t, e, r) {
          e && this.proxy(t, "mouseenter", e), r && this.proxy(t, "mouseleave", r)
        }
      }, {
        key: "loadImg",
        value: function(t) {
          var e = this;
          return new Promise((function(r, n) {
            var o;
            if(t instanceof HTMLImageElement) o = t;
            else {
              if("string" != typeof t) return n(new L("Unable to get Image"));
              (o = new Image).src = t
            }
            return o.complete || (e.proxy(o, "load", (function() {
              return r(o)
            })), e.proxy(o, "error", (function() {
              return n(new L("Failed to load Image: ".concat(o.src)))
            }))), r(o)
          }))
        }
      }, {
        key: "destroy",
        value: function() {
          this.destroyEvents.forEach((function(t) {
            return t()
          }))
        }
      }]), t
    }(),
    Pe = function() {
      function t(r) {
        var n = this;
        e(this, t), this.keys = {};
        var o = r.option,
          i = r.player,
          a = r.events.proxy;
        o.hotkey && r.once("ready", (function() {
          n.add(27, (function() {
            i.fullscreenWeb && (i.fullscreenWeb = !1)
          })), n.add(32, (function() {
            i.toggle = !0
          })), n.add(37, (function() {
            i.backward = 5
          })), n.add(38, (function() {
            i.volume += .1
          })), n.add(39, (function() {
            i.forward = 5
          })), n.add(40, (function() {
            i.volume -= .1
          })), a(window, "keydown", (function(t) {
            if(r.isFocus) {
              var e = document.activeElement.tagName.toUpperCase(),
                o = document.activeElement.getAttribute("contenteditable");
              if("INPUT" !== e && "TEXTAREA" !== e && "" !== o && "true" !== o) {
                var i = n.keys[t.keyCode];
                i && (t.preventDefault(), i.forEach((function(t) {
                  return t.call(r)
                })), r.emit("hotkey", t))
              }
            }
          }))
        }))
      }
      return n(t, [{
        key: "add",
        value: function(t, e) {
          this.keys[t] ? this.keys[t].push(e) : this.keys[t] = [e]
        }
      }]), t
    }();

  function Se(t) {
    var e = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = u(t);
      if(e) {
        var o = u(this).constructor;
        r = Reflect.construct(n, arguments, o)
      } else r = n.apply(this, arguments);
      return l(this, r)
    }
  }
  var Re = function(t) {
    c(n, t);
    var r = Se(n);

    function n(t) {
      var o;
      return e(this, n), (o = r.call(this, t)).name = "layer", o.$parent = t.template.$layer, t.once("ready", (function() {
        t.option.layers.forEach((function(t) {
          o.add(t)
        }))
      })), o
    }
    return n
  }(Et);

  function Ee(t) {
    var e = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = u(t);
      if(e) {
        var o = u(this).constructor;
        r = Reflect.construct(n, arguments, o)
      } else r = n.apply(this, arguments);
      return l(this, r)
    }
  }
  var De = function(t) {
      c(n, t);
      var r = Ee(n);

      function n(t) {
        var o;
        return e(this, n), (o = r.call(this, t)).name = "loading", O(t.template.$loading, t.icons.loading), o
      }
      return n
    }(Et),
    $e = function() {
      function t(r) {
        e(this, t), this.art = r, this.time = 2e3, this.timer = null
      }
      return n(t, [{
        key: "show",
        set: function(t) {
          var e = this.art.template,
            r = e.$player,
            n = e.$noticeInner;
          n.innerText = t instanceof Error ? t.message.trim() : t, m(r, "art-notice-show"), clearTimeout(this.timer), this.timer = setTimeout((function() {
            n.innerText = "", w(r, "art-notice-show")
          }), this.time)
        }
      }]), t
    }();

  function Te(t) {
    var e = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = u(t);
      if(e) {
        var o = u(this).constructor;
        r = Reflect.construct(n, arguments, o)
      } else r = n.apply(this, arguments);
      return l(this, r)
    }
  }
  var ze = function(t) {
    c(n, t);
    var r = Te(n);

    function n(t) {
      var o;
      return e(this, n), (o = r.call(this, t)).name = "mask", O(t.template.$state, t.icons.state), o
    }
    return n
  }(Et);

  function Ae(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }
  var Ce = function r(n) {
    var o = this;
    e(this, r);
    var i = function(e) {
      for(var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2 ? Ae(Object(n), !0).forEach((function(r) {
          t(e, r, n[r])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }({
      loading: '<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"/><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(0 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-1s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(30 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(60 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(90 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(120 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(150 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(180 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(210 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(240 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(270 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(300 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#ffffff" transform="rotate(330 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect></svg>',
      state: '<svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" style="filter: drop-shadow(0px 1px 1px black);" viewBox="0 0 24 24"><path d="M20,2H4C1.8,2,0,3.8,0,6v12c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V6C24,3.8,22.2,2,20,2z M15.6,12.8L10.5,16 C9.9,16.5,9,16,9,15.2V8.8C9,8,9.9,7.5,10.5,8l5.1,3.2C16.3,11.5,16.3,12.5,15.6,12.8z"/></svg>',
      play: '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><path d="M17.982 9.275L8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z"></path></svg>',
      pause: '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zM15 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z"></path></svg>',
      volume: '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><path d="M10.188 4.65L6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zM14.446 3.778a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"></path><path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"></path></svg>',
      volumeClose: '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"></path><path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"></path></svg>',
      subtitle: '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48"><path d="M0 0h48v48H0z" fill="none"/><path d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/></svg>',
      screenshot: '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50">\t<path d="M 19.402344 6 C 17.019531 6 14.96875 7.679688 14.5 10.011719 L 14.097656 12 L 9 12 C 6.238281 12 4 14.238281 4 17 L 4 38 C 4 40.761719 6.238281 43 9 43 L 41 43 C 43.761719 43 46 40.761719 46 38 L 46 17 C 46 14.238281 43.761719 12 41 12 L 35.902344 12 L 35.5 10.011719 C 35.03125 7.679688 32.980469 6 30.597656 6 Z M 25 17 C 30.519531 17 35 21.480469 35 27 C 35 32.519531 30.519531 37 25 37 C 19.480469 37 15 32.519531 15 27 C 15 21.480469 19.480469 17 25 17 Z M 25 19 C 20.589844 19 17 22.589844 17 27 C 17 31.410156 20.589844 35 25 35 C 29.410156 35 33 31.410156 33 27 C 33 22.589844 29.410156 19 25 19 Z "/></svg>',
      setting: '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="2"></circle><path d="M19.164 8.861L17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path></svg>',
      fullscreen: '<svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 36 36">\t<path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>\t<path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>\t<path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>\t<path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path></svg>',
      fullscreenWeb: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="36" width="36">\t<path d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z" fill-rule="evenodd"></path></svg>',
      pip: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="32" width="32"><path d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z"></path></svg>'
    }, n.option.icons);
    Object.keys(i).forEach((function(t) {
      Y(o, t, {
        get: function() {
          var e = document.createElement("i");
          return m(e, "art-icon"), m(e, "art-icon-".concat(t)), O(e, i[t]), e
        }
      })
    }))
  };

  function Le(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Me(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? Le(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function qe(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Fe(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? qe(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function He(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Ie(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? He(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : He(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function We(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function Ve(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? We(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : We(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function Be(t) {
    var e = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = u(t);
      if(e) {
        var o = u(this).constructor;
        r = Reflect.construct(n, arguments, o)
      } else r = n.apply(this, arguments);
      return l(this, r)
    }
  }
  var Ne = function(t) {
      c(n, t);
      var r = Be(n);

      function n(t) {
        var o;
        e(this, n), (o = r.call(this, t)).name = "setting";
        var i = t.option,
          a = t.template,
          c = a.$setting,
          s = a.$settingBody,
          l = t.events.proxy;
        return o.$parent = s, i.setting && (t.once("ready", (function() {
          l(c, "click", (function(t) {
            t.target === c && (o.show = !1)
          })), o.add(function(t) {
            return function(e) {
              var r = e.i18n,
                n = e.player;
              return Me(Me({}, t), {}, {
                html: '<div class="art-setting-header">'.concat(r.get("Flip"), '</div><div class="art-setting-radio"><div class="art-radio-item current"><button type="button" data-value="normal">').concat(r.get("Normal"), '</button></div><div class="art-radio-item"><button type="button" data-value="horizontal">').concat(r.get("Horizontal"), '</button></div><div class="art-radio-item"><button type="button" data-value="vertical">').concat(r.get("Vertical"), "</button></div></div>"),
                click: function(t, e) {
                  var r = e.target.dataset.value;
                  r && (n.flip = r)
                },
                mounted: function(t) {
                  e.on("flip", (function(e) {
                    var r = g("button", t).find((function(t) {
                      return t.dataset.value === e
                    }));
                    r && R(r.parentElement, "current")
                  }))
                }
              })
            }
          }({
            disable: !i.flip,
            name: "flip"
          })), o.add(function(t) {
            return function(e) {
              var r = e.i18n,
                n = e.player;
              return Fe(Fe({}, t), {}, {
                html: '<div class="art-setting-header">'.concat(r.get("Rotate"), ': <span class="art-rotate-value">0°</span></div><div class="art-setting-radio"><div class="art-radio-item"><button type="button" data-value="90">+90°</button></div><div class="art-radio-item"><button type="button" data-value="-90">-90°</button></div></div>'),
                click: function(t, e) {
                  var r = e.target.dataset.value;
                  if(r) {
                    var o = n.rotate + Number(r);
                    n.rotate = 360 === o || -360 === o ? 0 : o
                  } else n.rotate = 0
                },
                mounted: function(t) {
                  var r = v(".art-rotate-value", t);
                  e.on("rotate", (function(t) {
                    r.innerText = "".concat(t || 0, "°")
                  }))
                }
              })
            }
          }({
            disable: !i.rotate,
            name: "rotate"
          })), o.add(function(t) {
            return function(e) {
              var r = e.i18n,
                n = e.player;
              return Ie(Ie({}, t), {}, {
                html: '<div class="art-setting-header">'.concat(r.get("Aspect ratio"), '</div><div class="art-setting-radio"><div class="art-radio-item current"><button type="button" data-value="default">').concat(r.get("Default"), '</button></div><div class="art-radio-item"><button type="button" data-value="4:3">4:3</button></div><div class="art-radio-item"><button type="button" data-value="16:9">16:9</button></div></div>'),
                click: function(t, e) {
                  var r = e.target.dataset.value;
                  r && (n.aspectRatio = r)
                },
                mounted: function(t) {
                  e.on("aspectRatio", (function(e) {
                    var r = g("button", t).find((function(t) {
                      return t.dataset.value === e
                    }));
                    r && R(r.parentElement, "current")
                  }))
                }
              })
            }
          }({
            disable: !i.aspectRatio,
            name: "aspectRatio"
          })), o.add(function(t) {
            return function(e) {
              var r = e.i18n,
                n = e.player,
                o = e.events.proxy;
              return Ve(Ve({}, t), {}, {
                html: '<div class="art-setting-header">'.concat(r.get("Play speed"), ': <span class="art-subtitle-value">1.0</span>x</div><div class="art-setting-range"><input class="art-subtitle-range" value="1" type="range" min="0.5" max="2" step="0.25"></div>'),
                mounted: function(t) {
                  var r = v(".art-setting-range input", t),
                    i = v(".art-subtitle-value", t);
                  o(r, "change", (function() {
                    var t = r.value;
                    i.innerText = t, n.playbackRate = Number(t)
                  })), e.on("playbackRate", (function(t) {
                    t && r.value !== t && (r.value = t, i.innerText = t)
                  }))
                }
              })
            }
          }({
            disable: !i.playbackRate,
            name: "playbackRate"
          }))
        })), t.on("blur", (function() {
          o.show = !1
        }))), o
      }
      return n
    }(Et),
    Ue = function() {
      function r() {
        e(this, r), this.name = "artplayer_settings"
      }
      return n(r, [{
        key: "get",
        value: function(t) {
          var e = JSON.parse(localStorage.getItem(this.name)) || {};
          return t ? e[t] : e
        }
      }, {
        key: "set",
        value: function(e, r) {
          var n = Object.assign({}, this.get(), t({}, e, r));
          localStorage.setItem(this.name, JSON.stringify(n))
        }
      }, {
        key: "del",
        value: function(t) {
          var e = this.get();
          delete e[t], localStorage.setItem(this.name, JSON.stringify(e))
        }
      }, {
        key: "clean",
        value: function() {
          localStorage.removeItem(this.name)
        }
      }]), r
    }();

  function _e(t) {
    var e = t.i18n,
      r = t.subtitle,
      n = t.events.proxy;
    return {
      title: "Subtitle",
      name: "subtitleOffset",
      index: 20,
      html: '<div class="art-setting-header">'.concat(e.get("Subtitle offset time"), ': <span class="art-subtitle-value">0</span>s</div><div class="art-setting-range"><input class="art-subtitle-range" value="0" type="range" min="-5" max="5" step="0.5"></div>'),
      mounted: function(e) {
        var o = v(".art-setting-range input", e),
          i = v(".art-subtitle-value", e);
        n(o, "change", (function() {
          var e = o.value;
          i.innerText = e, t.plugins.subtitleOffset.offset(Number(e))
        })), t.on("subtitle:switch", (function() {
          o.value = 0, i.innerText = 0
        })), t.on("subtitleOffset", (function(t) {
          r.update(), o.value !== t && (o.value = t, i.innerText = t)
        }))
      }
    }
  }

  function Xe(t) {
    var e = t.constructor.utils.clamp,
      r = t.setting,
      n = t.notice,
      o = t.template,
      i = t.i18n,
      a = t.player;
    r.add(_e);
    var c = [];
    return t.on("subtitle:switch", (function() {
      c = []
    })), {
      name: "subtitleOffset",
      offset: function(r) {
        if(o.$track && o.$track.track) {
          var s = Array.from(o.$track.track.cues),
            l = e(r, -5, 5);
          s.forEach((function(t, r) {
            c[r] || (c[r] = {
              startTime: t.startTime,
              endTime: t.endTime
            }), t.startTime = e(c[r].startTime + l, 0, a.duration), t.endTime = e(c[r].endTime + l, 0, a.duration)
          })), n.show = "".concat(i.get("Subtitle offset time"), ": ").concat(r, "s"), t.emit("subtitleOffset", r)
        } else n.show = "".concat(i.get("No subtitles found")), t.emit("subtitleOffset", 0)
      }
    }
  }

  function Ye(t) {
    var e = t.events.proxy,
      r = t.template,
      n = t.player,
      o = t.option,
      i = t.setting,
      a = t.i18n;

    function c(e) {
      if(e) {
        var i = r.$video.canPlayType(e.type);
        if("maybe" === i || "probably" === i) {
          var a = URL.createObjectURL(e);
          o.title = e.name, n.switchUrl(a, e.name), t.emit("localVideo", e)
        } else M(!1, "Playback of this file format is not supported")
      }
    }

    function s(t) {
      var r = O(t, '<input type="file">');
      k(t, "position", "relative"), j(r, {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "0",
        top: "0",
        opacity: "0"
      }), e(r, "change", (function() {
        c(r.files[0])
      }))
    }
    return e(r.$player, "dragover", (function(t) {
      t.preventDefault()
    })), e(r.$player, "drop", (function(t) {
      t.preventDefault(), c(t.dataTransfer.files[0])
    })), t.once("ready", (function() {
      i.add({
        title: "Local Video",
        name: "localVideo",
        index: 30,
        html: '<div class="art-setting-header">'.concat(a.get("Local Video"), '</div><div class="art-setting-upload"><div class="art-upload-btn">').concat(a.get("Open"), '</div><div class="art-upload-value"></div></div>'),
        mounted: function(e) {
          var r = v(".art-upload-btn", e),
            n = v(".art-upload-value", e);
          t.on("localVideo", (function(t) {
            n.textContent = t.name, n.title = t.name
          })), s(r)
        }
      })
    })), {
      name: "localVideo",
      attach: s
    }
  }

  function Ze(t) {
    var e = t.events.proxy,
      r = t.subtitle,
      n = t.setting,
      o = t.i18n;

    function i(n) {
      var o = O(n, '<input type="file">');
      k(n, "position", "relative"), j(o, {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "0",
        top: "0",
        opacity: "0"
      }), e(o, "change", (function() {
        ! function(e) {
          if(e) {
            var n = I(e.name);
            ["ass", "vtt", "srt"].includes(n) ? (r.switch(URL.createObjectURL(e), {
              name: e.name,
              ext: n
            }), t.emit("localSubtitle", e)) : M(!1, "Only supports subtitle files in .ass, .vtt and .srt format")
          }
        }(o.files[0])
      }))
    }
    return t.once("ready", (function() {
      n.add({
        title: "Local Subtitle",
        name: "localSubtitle",
        index: 40,
        html: '<div class="art-setting-header">'.concat(o.get("Local Subtitle"), '</div><div class="art-setting-upload"><div class="art-upload-btn">').concat(o.get("Open"), '</div><div class="art-upload-value"></div></div>'),
        mounted: function(e) {
          var r = v(".art-upload-btn", e),
            n = v(".art-upload-value", e);
          t.on("localSubtitle", (function(t) {
            n.textContent = t.name, n.title = t.name
          })), i(r)
        }
      })
    })), {
      name: "localSubtitle",
      attach: i
    }
  }

  function Je(t) {
    var e = t.layers,
      r = t.player,
      n = t.option.theme;
    return e.add({
      name: "miniProgressBar",
      style: {
        display: "none",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "2px",
        background: n
      },
      mounted: function(e) {
        t.on("control", (function(t) {
          e.style.display = t ? "none" : "block"
        })), t.on("destroy", (function() {
          e.style.display = "none"
        })), t.on("video:timeupdate", (function() {
          e.style.width = "".concat(100 * r.played, "%")
        }))
      }
    }), {
      name: "miniProgressBar"
    }
  }

  function Qe(t) {
    var e = 1e4,
      r = 0,
      n = 0,
      o = 0,
      i = null;

    function a() {
      r = 0, n = 0, o = 0, cancelAnimationFrame(i), i = null
    }

    function c() {
      i || function a() {
        t.isDestroy || (i = requestAnimationFrame((function() {
          var i = Date.now();
          if(o) {
            var c = i - o;
            n += c, t.player.playing || (r += c)
          }
          o = i, t.emit("networkMonitor", r / n), n >= e && (r = 0, n = 0), a()
        })))
      }()
    }
    return t.on("play", c), t.on("pause", a), {
      name: "networkMonitor",
      reset: a,
      start: c,
      sample: function(t) {
        e = t
      }
    }
  }
  var Ge = function() {
      function t(r) {
        var n = this;
        e(this, t), this.art = r, this.id = 0;
        var o = r.option;
        o.subtitle.url && o.subtitleOffset && this.add(Xe), !o.isLive && o.miniProgressBar && this.add(Je), o.localVideo && this.add(Ye), o.localSubtitle && this.add(Ze), o.networkMonitor && this.add(Qe), r.option.plugins.forEach((function(t) {
          n.add(t)
        }))
      }
      return n(t, [{
        key: "add",
        value: function(t) {
          this.id += 1;
          var e = t.call(this, this.art),
            r = e && e.name || t.name || "plugin".concat(this.id);
          return M(!J(this, r), "Cannot add a plugin that already has the same name: ".concat(r)), Y(this, r, {
            value: e
          }), this
        }
      }]), t
    }(),
    Ke = function t(r) {
      e(this, t);
      var n = r.option,
        o = r.events.proxy,
        i = r.template.$video;
      bt.events.forEach((function(t) {
        o(i, t, (function(t) {
          r.emit("video:".concat(t.type), t)
        }))
      })), Object.keys(n.moreVideoAttr).forEach((function(t) {
        i[t] = n.moreVideoAttr[t]
      })), n.muted && (i.muted = n.muted), n.volume && (i.volume = rt(n.volume, 0, 1)), n.poster && (i.poster = n.poster), n.autoplay && (i.autoplay = n.autoplay), i.controls = !0;
      var a = n.type || I(n.url),
        c = n.customType[a];
      a && c ? (c(i, n.url, r), r.emit("customType", a)) : (i.src = n.url, r.emit("url", i.src))
    };

  function tr(t) {
    var e = function() {
      if("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if(Reflect.construct.sham) return !1;
      if("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var r, n = u(t);
      if(e) {
        var o = u(this).constructor;
        r = Reflect.construct(n, arguments, o)
      } else r = n.apply(this, arguments);
      return l(this, r)
    }
  }
  var er = 0,
    rr = [],
    nr = function(t) {
      c(i, t);
      var r = tr(i);

      function i(t) {
        var n;
        return e(this, i), (n = r.call(this)).option = p(G(i.option, t), yt), n.isFocus = !1, n.isDestroy = !1, n.userAgent = d, n.isMobile = h, n.isWechat = b, n.whitelist = new vt(o(n)), n.template = new gt(o(n)), n.events = new je(o(n)), n.whitelist.state ? (n.storage = new Ue(o(n)), n.icons = new Ce(o(n)), n.i18n = new xt(o(n)), n.notice = new $e(o(n)), n.player = new Pt(o(n)), n.layers = new Re(o(n)), n.controls = new ie(o(n)), n.contextmenu = new me(o(n)), n.subtitle = new ke(o(n)), n.info = new xe(o(n)), n.loading = new De(o(n)), n.hotkey = new Pe(o(n)), n.mask = new ze(o(n)), n.setting = new Ne(o(n)), n.plugins = new Ge(o(n))) : n.mobile = new Ke(o(n)), er += 1, n.id = er, rr.push(o(n)), n
      }
      return n(i, [{
        key: "destroy",
        value: function() {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.events.destroy(), this.template.destroy(t), rr.splice(rr.indexOf(this), 1), this.isDestroy = !0, this.emit("destroy")
        }
      }], [{
        key: "instances",
        get: function() {
          return rr
        }
      }, {
        key: "version",
        get: function() {
          return "3.5.27"
        }
      }, {
        key: "env",
        get: function() {
          return '"production"'
        }
      }, {
        key: "config",
        get: function() {
          return bt
        }
      }, {
        key: "utils",
        get: function() {
          return it
        }
      }, {
        key: "scheme",
        get: function() {
          return yt
        }
      }, {
        key: "Emitter",
        get: function() {
          return f
        }
      }, {
        key: "validator",
        get: function() {
          return p
        }
      }, {
        key: "kindOf",
        get: function() {
          return p.kindOf
        }
      }, {
        key: "option",
        get: function() {
          return {
            container: "#artplayer",
            url: "",
            poster: "",
            title: "",
            theme: "#f00",
            volume: .7,
            isLive: !1,
            muted: !1,
            autoplay: !1,
            autoSize: !1,
            autoMini: !1,
            loop: !1,
            flip: !1,
            rotate: !1,
            playbackRate: !1,
            aspectRatio: !1,
            screenshot: !1,
            setting: !1,
            hotkey: !0,
            pip: !1,
            mutex: !0,
            light: !1,
            backdrop: !0,
            fullscreen: !1,
            fullscreenWeb: !1,
            subtitleOffset: !1,
            miniProgressBar: !1,
            localVideo: !1,
            localSubtitle: !1,
            networkMonitor: !1,
            layers: [],
            contextmenu: [],
            controls: [],
            quality: [],
            highlight: [],
            plugins: [],
            whitelist: [],
            switcher: [],
            thumbnails: {
              url: "",
              number: 60,
              width: 160,
              height: 90,
              column: 10
            },
            subtitle: {
              url: "",
              style: {},
              encoding: "utf-8",
              bilingual: !1
            },
            moreVideoAttr: {
              controls: !1,
              preload: y ? "auto" : "metadata"
            },
            icons: {},
            customType: {},
            lang: navigator.language.toLowerCase()
          }
        }
      }]), i
    }(f);

  function or(t, e) {
    var r = Object.keys(t);
    if(Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter((function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.push.apply(r, n)
    }
    return r
  }

  function ir(e) {
    for(var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? or(Object(n), !0).forEach((function(r) {
        t(e, r, n[r])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : or(Object(n)).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }
  return console.log("%c ArtPlayer %c 3.5.27 %c https://artplayer.org", "color: #fff; background: #5f5f5f", "color: #fff; background: #4bc729", ""), {
    data: function() {
      return {
        instance: null
      }
    },
    props: {
      option: {
        type: Object,
        required: !0
      },
      getInstance: Function
    },
    mounted: function() {
      var t = this;
      this.instance = new nr(ir(ir({}, this.option), {}, {
        container: this.$refs.artRef
      })), this.$nextTick((function() {
        t.$emit("getInstance", t.instance)
      }))
    },
    beforeDestroy: function() {
      this.instance && this.instance.destroy && this.instance.destroy()
    },
    render: function(t) {
      return t("div", {
        ref: "artRef"
      })
    }
  }
}));
