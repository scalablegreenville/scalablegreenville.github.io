_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1gNS":function(e,t,a){e.exports={container:"PositionSection_container__2Mzve",description:"PositionSection_description__3Vpdi",descriptionWrapper:"PositionSection_descriptionWrapper__1zXlF",illustration:"PositionSection_illustration__2x_zl",apiOptions:"PositionSection_apiOptions__3srkV"}},"8dqH":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/story",function(){return a("h1Gf")}])},JIvC:function(e,t,a){e.exports={container:"HistorySection_container__2vkuQ",wrapper:"HistorySection_wrapper__2l8zr",description:"HistorySection_description__2xfqS",historyGraphicWrapper:"HistorySection_historyGraphicWrapper__3Pk10"}},PGlZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a("q1tI");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var n=new Map,o=new Map,c=0;function s(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(a=e.root)?(o.has(a)||(c+=1,o.set(a,c.toString())),o.get(a)):"0":e[t]);var a})).toString()}function l(e,t,a){if(void 0===a&&(a={}),!e)return function(){};var i=function(e){var t=s(e),a=n.get(t);if(!a){var i,r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var a,n=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=n),null==(a=r.get(t.target))||a.forEach((function(e){e(n,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:o,elements:r},n.set(t,a)}return a}(a),r=i.id,o=i.observer,c=i.elements,l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(c.delete(e),o.unobserve(e)),0===c.size&&(o.disconnect(),n.delete(r))}}function m(e){return"function"!==typeof e.children}var p=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).node=null,a._unobserveCb=null,a.handleNode=function(e){a.node&&(a.unobserve(),e||a.props.triggerOnce||a.props.skip||a.setState({inView:!!a.props.initialInView,entry:void 0})),a.node=e||null,a.observeNode()},a.handleChange=function(e,t){e&&a.props.triggerOnce&&a.unobserve(),m(a.props)||a.setState({inView:e,entry:t}),a.props.onChange&&a.props.onChange(e,t)},a.state={inView:!!t.initialInView,entry:void 0},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},o.componentWillUnmount=function(){this.unobserve(),this.node=null},o.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,a=e.root,i=e.rootMargin,r=e.trackVisibility,n=e.delay;this._unobserveCb=l(this.node,this.handleChange,{threshold:t,root:a,rootMargin:i,trackVisibility:r,delay:n})}},o.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},o.render=function(){if(!m(this.props)){var e=this.state,t=e.inView,a=e.entry;return this.props.children({inView:t,entry:a,ref:this.handleNode})}var n=this.props,o=n.children,c=n.as,s=n.tag,l=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(i.createElement)(c||s||"div",r({ref:this.handleNode},l),o)},n}(i.Component);function u(e){var t=void 0===e?{}:e,a=t.threshold,r=t.delay,n=t.trackVisibility,o=t.rootMargin,c=t.root,s=t.triggerOnce,m=t.skip,p=t.initialInView,u=Object(i.useRef)(),d=Object(i.useState)({inView:!!p}),h=d[0],_=d[1],g=Object(i.useCallback)((function(e){void 0!==u.current&&(u.current(),u.current=void 0),m||e&&(u.current=l(e,(function(e,t){_({inView:e,entry:t}),t.isIntersecting&&s&&u.current&&(u.current(),u.current=void 0)}),{root:c,rootMargin:o,threshold:a,trackVisibility:n,delay:r}))}),[Array.isArray(a)?a.toString():a,c,o,s,m,n,r]);Object(i.useEffect)((function(){u.current||!h.entry||s||m||_({inView:!!p})}));var f=[g,h.inView,h.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},YQWy:function(e,t,a){e.exports={timelineWrapper:"History_timelineWrapper__3ntXh",timelineGraphic:"History_timelineGraphic__2Q9xR",timeline:"History_timeline__1KErd",timelineInfo:"History_timelineInfo__3MNzb",dot:"History_dot__3rdYG",emit:"History_emit__2ohVK",active:"History_active__1ZMXg",picture:"History_picture__cEEgH"}},h1Gf:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var i=a("q1tI"),r=a.n(i),n=a("g4pe"),o=a.n(n),c=a("Fzi1"),s=a("PGlZ"),l=a("TSYQ"),m=a.n(l),p=a("uFUC"),u=a.n(p),d=r.a.createElement,h=(d=r.a.createElement,function(){return d("div",{className:u.a.container},d("div",{className:m()(u.a.layer,u.a.ecommerceLayer)},d("div",{className:u.a.ecommerceLayerLeftTiles}),d("h1",{className:u.a.ecommerceLayerTitle},"ECOMMERCE STORES"),d("div",{className:u.a.ecommerceLayerRightTiles}),d("div",{className:u.a.ecommerceLayerArrows},d("img",{className:u.a.ecommerceLayerArrow,src:"/arrow_down_up.svg",loading:"lazy",alt:"layer connection"}),d("img",{className:u.a.ecommerceLayerArrow,src:"/arrow_down_up.svg",loading:"lazy",alt:"layer connection"}),d("img",{className:u.a.ecommerceLayerArrow,src:"/arrow_down_up.svg",loading:"lazy",alt:"layer connection"}),d("img",{className:u.a.ecommerceLayerArrow,src:"/arrow_down_up.svg",loading:"lazy",alt:"layer connection"}),d("img",{className:u.a.ecommerceLayerArrow,src:"/arrow_down_up.svg",loading:"lazy",alt:"layer connection"}),d("img",{className:u.a.ecommerceLayerArrow,src:"/arrow_down_up.svg",loading:"lazy",alt:"layer connection"}),d("img",{className:u.a.ecommerceLayerArrow,src:"/arrow_down_up.svg",loading:"lazy",alt:"layer connection"}),d("img",{className:u.a.ecommerceLayerArrow,src:"/arrow_down_up.svg",loading:"lazy",alt:"layer connection"}),d("img",{className:u.a.ecommerceLayerArrow,src:"/arrow_down_up.svg",loading:"lazy",alt:"layer connection"}))),d("div",{className:m()(u.a.layer,u.a.appLayer)},d("figure",{className:m()(u.a.brand,u.a.chipBrand)},d("img",{src:"/chip_logo_color.svg",loading:"lazy",alt:"Chip"}),d("figcaption",null,"Chip")),d("figure",{className:m()(u.a.brand,u.a.app)},d("figcaption",null,"Application Layer")),d("figure",{className:m()(u.a.brand,u.a.viderBrand)},d("img",{src:"/vider_logo_color.svg",loading:"lazy",alt:"Vider"}),d("figcaption",null,"Vider")),d("div",{className:u.a.appLayerColumns},d("div",{className:u.a.appLayerColumn}),d("div",{className:u.a.appLayerColumn}),d("div",{className:u.a.appLayerColumn}),d("div",{className:u.a.appLayerColumn}))),d("div",{className:m()(u.a.layer,u.a.infraLayer)},d("figure",{className:m()(u.a.infra,u.a.core)},d("img",{className:u.a.scalableLogo,loading:"lazy",src:"/scalable_logo_light.svg",alt:"Scalable Inc"}),d("figcaption",null,"Core infrastructure")),d("div",{className:m()(u.a.infra,u.a.sourcing)},"Sourcing"),d("div",{className:m()(u.a.infra,u.a.advertising)},"Advertising"),d("div",{className:m()(u.a.infra,u.a.printing)},"Printing"),d("div",{className:m()(u.a.infra,u.a.payment)},"Payment cards"),d("div",{className:m()(u.a.infra,u.a.fulfillment)},"Fulfillment"),d("div",{className:m()(u.a.infra,u.a.cs)},"Customer service"),d("div",{className:m()(u.a.infra,u.a.empty1)}),d("div",{className:m()(u.a.infra,u.a.empty2)}),d("div",{className:m()(u.a.infra,u.a.empty3)}),d("div",{className:m()(u.a.infra,u.a.empty4)}),d("div",{className:m()(u.a.infra,u.a.empty5)})))}),_=a("1gNS"),g=a.n(_),f=r.a.createElement,y=(f=r.a.createElement,function(){var e=Object(s.a)({threshold:1,triggerOnce:!0}),t=e.ref,a=e.inView;return f("section",{id:"position",className:g.a.container},f("div",{className:g.a.description},f("div",{className:"container"},f("div",{className:g.a.descriptionWrapper},f("h2",{className:"subtitle light"},"OUR POSITION"),f("h1",{className:"title light"},"Our vision for ecommerce"),f("p",null,"Through the seamless integration of physical and software infrastructure, Scalable strives to takes care of operations at every level of the ecommerce stack.")))),f("div",{className:g.a.illustration},f("div",{ref:t,className:"container"},a&&f(h,null))))}),v=a("Rnav"),w=a("lBS0"),b=a.n(w),S=r.a.createElement,N=(S=r.a.createElement,function(e){var t=e.sectionId;return S("section",{id:void 0===t?"":t,className:b.a.container},S("div",{className:"container"},S(v.a,null),S("div",{className:b.a.content},S("h1",{className:m()(b.a.title,"big-title")},"Our mission is to grow global ecommerce penetration to 100%"))))}),k=a("xJ01"),E=a.n(k),L=r.a.createElement,I=(L=r.a.createElement,function(e){var t=e.sectionId;return L("section",{id:t,className:E.a.container},L("div",{className:"container"},L("div",{className:E.a.content},L("h2",{className:"subtitle"},"Background"),L("h1",{className:m()("title",E.a.title)},"The ecommerce landscape"),L("div",{className:E.a.description},L("p",null,"In 2020, the global shift toward ecommerce went into hyperdrive, accomplishing multiple years of growth in just a few months."),L("p",null,"Despite this growth, we\u2019re still in the early days of ecommerce. Most people are excited that ecommerce now represents 20% of commerce, and that number excites us too. But we\u2019re asking a different question \u2014 what does the remaining 80% look like?"),L("p",null,"In today\u2019s ecommerce, Amazon is the online parallel to Walmart. You can find anything you want, and can always expect satisfactory prices, fast delivery times, and good customer support. In order to achieve these fundamentals, Amazon built a massive infrastructure network, which now acts as its moat: hundreds of warehouses, thousands of merchant partners, and millions of employees."),L("p",null,"As a result of Amazon\u2019s infrastructure, they\u2019ve become the ultimate shopping utility, letting you purchase anything you can think of. More than half of ecommerce searches now start on Amazon."),L("p",null,"But despite all of this, we\u2019re sitting at an ecommerce penetration rate of just 20%. That means consumers are still shopping offline by a factor of five. Ecommerce as a utility only goes so far, and consumers are looking for more."),L("p",null,"On the other half side of the world, the Chinese ecommerce scene gives a glimpse of how we might reach the remaining 80%."),L("p",null,"In China, the infrastructure moat that Amazon built does not exist. The ability to generate supply \u2014 to offer huge product selection, to ship fast \u2014 is a given. Any ecommerce company can offer what Amazon does. As a result, Chinese ecommerce companies are one step ahead. Rather that worrying about how to get 2-day delivery, companies are focused on innovation \u2014 how to create entertainment, interactivity, and fun in shopping experiences."),L("p",null,"Our aim is to bring this to the rest of the world. By building world-class physical and software infrastructure, we will democratize ecommerce infrastructure and empower companies of any size to compete against the giants in ecommerce today."),L("img",{loading:"lazy",className:E.a.picture,src:"/our_vision.svg",alt:"Scalable Inc Vision"})))),L("div",{className:E.a.SkewedBg}))}),O=a("rePB"),C=[{year:2007,position:{bottom:"5%",left:"11.8%"}},{year:2010,position:{bottom:"6%",left:"30.7%"}},{year:2012,position:{bottom:"8.7%",left:"44%"}},{year:2014,position:{bottom:"13.7%",left:"56.7%"}},{year:2016,position:{bottom:"23.7%",left:"69.8%"}},{year:2019,position:{bottom:"54.7%",left:"89.4%"}},{year:2020,position:{bottom:"78.7%",left:"96.3%"}}],V={2007:{description:"Raymond orders t-shirts for his high school tennis club and has a bad experience. Motivated to do better, Raymond starts tinkering with an idea called \u201cooShirts\u201d.",imageSrc:"oo-shirts_logo.svg",imageDescription:"OO-Shirts Logo"},2010:{description:"Raymond drops out from UC Berkeley to work on ooShirts. Our first 3 employees join the team. The next year, ooShirts reaches $1 million in revenue.",imageSrc:"/raymond_2010.jpg",imageDescription:"Raymond Lei",isPicture:!0},2012:{description:"ooShirts exceeds $10 million in revenue and its supply chain can\u2019t keep up. In thinking about how to resolve its fulfillment problems, someone comes up with an idea to build a supply chain API. Two weeks later, the Scalable Press API goes live.",imageSrc:"/sp_logo_full.svg",imageDescription:"Scalable Press Logo"},2014:{description:"Scalable Press exceeds $10 million in revenue. Customers love the service, but are looking for more software features to help them grow. By the end of the year, TeeChip is launched as the first integrated ecommerce platform that takes care of both software and physical fulfillment.",imageSrc:"/teechip_logo_full.svg",imageDescription:"Teechip Logo"},2016:{description:"TeeChip exceeds $100 million in revenue.",imageSrc:"/teechip_logo_full.svg",imageDescription:"Teechip Logo"},2019:{description:"Fuel is launched in November. Within 9 months, it generates $10 million in revenue.",imageSrc:"/fuel_logo_full.svg",imageDescription:"Fuel Logo"},2020:{description:"Labs, an incubator designed to build next-generation ecommerce apps, is launched. In the meantime, Scalable Press, Fuel, and TeeChip achieve record growth years.",imageSrc:"/sl_logo_full.svg",imageDescription:"Scalable Labs Logo"}},A=a("YQWy"),z=a.n(A),P=r.a.createElement,T=(P=r.a.createElement,function(){var e=Object(i.useState)(2007),t=e[0],a=e[1],r=Object(i.useRef)(t);r.current=t;var n=V[t],o=n.description,c=n.imageSrc,s=n.isPicture,l=n.imageDescription,p=m()(Object(O.a)({},z.a.picture,s));return Object(i.useEffect)((function(){var e=setTimeout((function(){var e=C.findIndex((function(e){return e.year===r.current})),t=e===C.length-1?0:e+1,i=C[t].year;a(i)}),7e3);return function(){clearTimeout(e)}}),[t]),P("section",{className:z.a.container},P("div",{className:"container"},P("div",{className:z.a.timelineWrapper},P("div",{className:z.a.timelineGraphic},C.map((function(e){var i=e.year,r=e.position,n=t===i,o=m()(z.a.dot,Object(O.a)({},z.a.active,n));return P("div",{key:i,className:o,style:r,onClick:function(){return a(i)}},P("span",null,i))})),P("img",{loading:"lazy",className:z.a.timeline,src:"/timeline.svg",alt:"Scalable timeline"})),P("div",{className:z.a.timelineInfo},P("h1",null,t),P("p",null,o),P("div",{className:p},P("img",{loading:"lazy",src:c,alt:l}))))))}),x=a("JIvC"),M=a.n(x),H=r.a.createElement,j=(H=r.a.createElement,function(e){var t=e.sectionId;return H("section",{id:t,className:M.a.container},H("div",{className:"container"},H("div",{className:M.a.wrapper},H("div",null,H("h2",{className:"subtitle"},"OUR HISTORY"),H("h1",{className:"title light"},"We\u2019re 1% of the way there"),H("p",{className:M.a.description},"Scalable was founded with an initial investment of just $2,000. Today, we\u2019re on track to produce more than 25 million shipments across 185 countries. We haven\u2019t taken outside investment and we\u2019re rapidly expanding.")))),H("div",{className:M.a.historyGraphicWrapper},H(T,null)))}),B=a("6Yk9"),R=a.n(B),W=r.a.createElement;W=r.a.createElement;function D(){return W("div",{className:R.a.container},W(o.a,null,W("title",null,"Scalable Inc - Ecommerce Infrastructure APIs for Fulfillment, Payments, Hosting & More"),W("meta",{name:"description",content:"Scalable builds world-class physical and software infrastructure to help entrepreneurs compete against the giants in ecommerce today."}),W("link",{rel:"icon",href:"/favicon.ico"}),W("meta",{name:"og:title",content:"Scalable - Ecommerce Infrastructure APIs for Fulfillment, Payments, Hosting & More"}),W("meta",{name:"og:description",content:"At Scalable, we build technology to accelerate ecommerce growth around the world. We\u2019re looking for people who are fast-moving and entrepreneurial, and who want to make a dent in the way commerce works."}),W("meta",{name:"og:image",content:"/scalable-inc-cover.jpg"}),W("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"})),W("main",null,W(N,{sectionId:"mission"}),W(I,{sectionId:"vision"}),W(y,null),W(j,{sectionId:"history"})),W(c.a,null))}},lBS0:function(e,t,a){e.exports={container:"Presentation_container__ZJdLx",content:"Presentation_content__NEbSa",title:"Presentation_title__1_J2A"}},uFUC:function(e,t,a){e.exports={container:"EcommerceStack_container__3S3Tb",layer:"EcommerceStack_layer__3MatK",ecommerceLayer:"EcommerceStack_ecommerceLayer__39HNg",ecommerceLayerArrows:"EcommerceStack_ecommerceLayerArrows__2UOOX",ecommerceLayerArrow:"EcommerceStack_ecommerceLayerArrow__34H3v",ecommerceLayerTitle:"EcommerceStack_ecommerceLayerTitle__3Dx8t",ecommerceLayerLeftTiles:"EcommerceStack_ecommerceLayerLeftTiles__SDM9U",ecommerceLayerRightTiles:"EcommerceStack_ecommerceLayerRightTiles__2mSTI",appLayer:"EcommerceStack_appLayer__2UXau",app:"EcommerceStack_app__21SO7",brand:"EcommerceStack_brand__zzDNy",chipBrand:"EcommerceStack_chipBrand__1mRks",viderBrand:"EcommerceStack_viderBrand__2bvp9",appLayerColumns:"EcommerceStack_appLayerColumns__N5ibA",appLayerColumn:"EcommerceStack_appLayerColumn__YHduu",infraLayer:"EcommerceStack_infraLayer__HGsIE",infra:"EcommerceStack_infra__zloy6",core:"EcommerceStack_core__3TBnc",scalableLogo:"EcommerceStack_scalableLogo__nIIIG",sourcing:"EcommerceStack_sourcing__2S478",advertising:"EcommerceStack_advertising__3nD5r",printing:"EcommerceStack_printing__3dw9i",payment:"EcommerceStack_payment__2Iy-I",fulfillment:"EcommerceStack_fulfillment___o2dV",cs:"EcommerceStack_cs__1Ufe0",empty1:"EcommerceStack_empty1__2OdmP",empty2:"EcommerceStack_empty2__z6dna",empty3:"EcommerceStack_empty3__1AcVw",empty4:"EcommerceStack_empty4__1IFxv",empty5:"EcommerceStack_empty5__2d6ny"}},xJ01:function(e,t,a){e.exports={container:"VisionSection_container__2zuEM",title:"VisionSection_title__33Eyn",description:"VisionSection_description__1Mfcn",picture:"VisionSection_picture__1mEF-",SkewedBg:"VisionSection_SkewedBg__3uUHg"}}},[["8dqH",0,2,1,3]]]);