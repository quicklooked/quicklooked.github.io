(self.webpackChunklite=self.webpackChunklite||[]).push([[9152],{76668:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>d});var r=t(67294),a=t(12291),o=t(86280),i=t(72351),u=t(44059),l=t(61250),c=t(27737),f=t(67616),m=function(n){return Math.round(1e3*n)};const d=function(n){var e=n.to,t=n.from,d=r.useRef(null),v=(0,i.Av)(),g=(0,l.dh)(),h=(0,a.v9)((function(n){return n.debug.originalSpanCarrier})),p=(0,a.v9)((function(n){return n.tracing}),a.wU),s=p.originalSpan,w=p.tracer,k=(0,o.rZ)(),b=k.loading,C=k.viewerId;return r.useEffect((function(){if(w&&!b&&C)if(d.current||e.pathname===t.pathname){if(d.current){var n,r,a,o,i=d.current.pathname,l=d.current.time,p=Date.now();d.current=null;var k={to:null!==(n=null===(r=g(e.pathname))||void 0===r?void 0:r.route.name)&&void 0!==n?n:"unknown",from:null!==(a=null===(o=g(i))||void 0===o?void 0:o.route.name)&&void 0!==a?a:"unknown",loggedIn:(0,c.j)(C)},I={tags:k};h&&(I.childOf=s),w.startSpan("client.navigation",I).setBeginMicros(m(l)).setEndMicros(m(p)).finish(),v&&v.reportClientNav(k,new f.jb(l,p)),u.t.log("client navigation",{duration:p-l,to:e.pathname,toRouteName:k.to,from:i,fromRouteName:k.from,loggedIn:k.loggedIn})}}else d.current={pathname:t.pathname,time:Date.now()}}),[w,e.pathname,t.pathname,b,C]),null}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/reporting.de94a6c0.chunk.js.map