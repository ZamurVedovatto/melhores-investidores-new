(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/y9N":function(t,r,a){t.exports={cardlivroWrapper:"CardLivro_cardlivroWrapper__3g_G2",cardlivroContent:"CardLivro_cardlivroContent__1xPv9",cardlivroContentTop:"CardLivro_cardlivroContentTop__39Z8y",cta:"CardLivro_cta__2xsxy",livroCta:"CardLivro_livroCta__3U7eZ",cardlivroContentBottom:"CardLivro_cardlivroContentBottom__29AP4",rightTop:"CardLivro_rightTop__13Xe8",livroTitle:"CardLivro_livroTitle__2wWK0",livroAuthor:"CardLivro_livroAuthor__1qzoG",livroStars:"CardLivro_livroStars__3A7LN",rightCenter:"CardLivro_rightCenter__1Zpd0",livroDescription:"CardLivro_livroDescription__1CR_S"}},aqwp:function(t,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/literatura",function(){return a("uSlM")}])},uSlM:function(t,r,a){"use strict";a.r(r);var e=a("o0o1"),n=a.n(e),o=a("HaE+"),i=a("q1tI"),c=a.n(i),s=a("8Kt/"),l=a.n(s),u=a("CafY"),v=a("1OyB"),f=a("vuIU"),p=a("Ji7U"),d=a("md7G"),h=a("foSv"),_=a("/y9N"),m=a.n(_),C=c.a.createElement;function y(t){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,e=Object(h.a)(t);if(r){var n=Object(h.a)(this).constructor;a=Reflect.construct(e,arguments,n)}else a=e.apply(this,arguments);return Object(d.a)(this,a)}}var b=function(t){Object(p.a)(a,t);var r=y(a);function a(){return Object(v.a)(this,a),r.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var t=this.props.livro,r=t.img,a=t.title,e=t.author,n=t.description,o=t.sections,i=t.link;return C("div",{className:"".concat(m.a.cardlivroWrapper)},C("div",{className:"".concat(m.a.cardlivroContent)},C("div",{className:"".concat(m.a.cardlivroContentTop)},C("img",{className:"uk-border-rounded",src:r,alt:"livro"}),C("div",{className:"".concat(m.a.cta)},C("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"".concat(m.a.livroCta," uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom")},"Saiba mais"))),C("div",{className:"".concat(m.a.cardlivroContentBottom)},C("div",{className:"".concat(m.a.rightTop)},C("span",{className:"".concat(m.a.livroTitle)},a),C("span",{className:"".concat(m.a.livroAuthor)},e),C("div",{className:"".concat(m.a.livroStars)},o.map((function(t){return C("span",{key:t},t)})))),C("div",{className:"".concat(m.a.rightCenter)},C("span",{className:"".concat(m.a.livroDescription)},n)))))}}]),a}(i.Component),N=c.a.createElement;function w(t){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,e=Object(h.a)(t);if(r){var n=Object(h.a)(this).constructor;a=Reflect.construct(e,arguments,n)}else a=e.apply(this,arguments);return Object(d.a)(this,a)}}var g=function(t){Object(p.a)(a,t);var r=w(a);function a(t){var e;Object(v.a)(this,a);var n=(e=r.call(this,t)).sortLivros();return e.state={livros:n},e}return Object(f.a)(a,[{key:"sortLivros",value:function(){for(var t,r,a=this.props.livros,e=a.length;0!==e;)r=Math.floor(Math.random()*e),t=a[e-=1],a[e]=a[r],a[r]=t;return a}},{key:"filterData",value:function(t){var r=this.state.livros;r=r.filter((function(r){r.sections.forEach((function(a){if(a==t)return r}))})),this.state={livros:r}}},{key:"render",value:function(){var t=this.state.livros;return N("div",{className:"row",style:{margin:"0 auto",maxWidth:"1040px",width:"100%",padding:"2rem 0"}},N("div",{className:"livrosintro-content col-12"},N("div",{className:"row",style:{width:"100%"}},t.map((function(t){return N("div",{className:"col-sm-12 col-md-4 col-lg-3",key:t.id},N(b,{livro:t}))})))))}}]),a}(i.Component),L=a("vcXL"),k=a.n(L),j=c.a.createElement,x=function(t){var r=t.livros;return j(u.a,null,j(l.a,null,j("title",null,u.b," - Literatura")),j(g,{livros:r}))};x.getInitialProps=function(){var t=Object(o.a)(n.a.mark((function t(r){var a,e;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()("http://localhost:3000/api/livros");case 2:return a=t.sent,t.next=5,a.json();case 5:return e=t.sent,t.abrupt("return",{livros:e});case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}();r.default=x},vcXL:function(t,r,a){"use strict";var e=self.fetch.bind(self);t.exports=e,t.exports.default=t.exports}},[["aqwp",0,2,1,3]]]);