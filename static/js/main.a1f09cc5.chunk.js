(this["webpackJsonptours-react-app"]=this["webpackJsonptours-react-app"]||[]).push([[0],{70:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){},93:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(17),r=s.n(a),i=s(45),l=s(26),o=s.n(l),j=s(43),u=s(4),b=s(19),d=s.n(b),m=s(3),O=s(0),h=[{page:"company",links:[{label:"about",icon:Object(O.jsx)(m.a,{}),url:"/about"},{label:"carries",icon:Object(O.jsx)(m.d,{}),url:"/carries"},{label:"partners",icon:Object(O.jsx)(m.i,{}),url:"/partners"}]},{page:"tours",links:[{label:"sea rest",icon:Object(O.jsx)(m.o,{}),url:"/sea rest"},{label:"mountains",icon:Object(O.jsx)(m.k,{}),url:"/mountains"},{label:"agriturismo",icon:Object(O.jsx)(m.e,{}),url:"/agriturismo"}]},{page:"stories",links:[{label:"stories",icon:Object(O.jsx)(m.c,{}),url:"/stories"}]},{page:"contact",links:[{label:"contact",icon:Object(O.jsx)(m.a,{}),url:"/contact"}]},{page:"cart",links:[{label:"cart",icon:Object(O.jsx)(m.l,{}),url:"/cart"}]}],x=function(e,t){return e.map((function(e,s){return Object.assign({},e,t[s])}))},p=n.a.createContext(),_=function(e){var t=e.children,s=Object(c.useState)(!0),n=Object(u.a)(s,2),a=n[0],r=n[1],l=Object(c.useState)([]),b=Object(u.a)(l,2),m=b[0],_=b[1],v=Object(c.useState)([]),f=Object(u.a)(v,2),g=f[0],N=f[1],k=Object(c.useState)([]),y=Object(u.a)(k,2),S=y[0],q=y[1],C=Object(c.useState)(null),M=Object(u.a)(C,2),P=M[0],w=M[1],L=Object(c.useState)(!1),B=Object(u.a)(L,2),E=B[0],F=B[1],T=Object(c.useState)(!1),A=Object(u.a)(T,2),D=A[0],J=A[1],R=Object(c.useState)(!1),H=Object(u.a)(R,2),I=H[0],W=H[1],Y=Object(c.useState)({}),z=Object(u.a)(Y,2),G=z[0],K=z[1],Q=Object(c.useState)({page:"",links:[]}),U=Object(u.a)(Q,2),V=U[0],X=U[1],Z=function(){var e=Object(j.a)(o.a.mark((function e(){var t,s,c,n,a,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,t=Promise.all([d.a.get("https://course-api.com/react-tours-project"),d.a.get("https://randomuser.me/api/?results=5"),d.a.get("https://v2.jokeapi.dev/joke/Programming?type=single&amount=5")]),e.next=5,t;case 5:s=e.sent,c=s[0].data,n=s[1].data.results,a=s[2].data.jokes,i=c.slice(0,3),l=x(n,a),r(!1),N(c),_(l),q(i),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),r(!1);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){Z()}),[]);return Object(O.jsx)(p.Provider,{value:{loading:a,userStories:m,tours:g,toursPopular:S,tourModal:P,isTourModalOpen:E,isSidebarOpen:I,isSubmenuOpen:D,subMenuLocation:G,page:V,openSidebar:function(){return W(!0)},closeSidebar:function(){return W(!1)},openSubmenu:function(e,t){var s=h.find((function(t){return t.page===e}));X(s),K(t),J(!0)},closeSubmenu:function(){return J(!1)},openTourModal:function(e){var t=g.filter((function(t){return t.id===e}));F(!0),w.apply(void 0,Object(i.a)(t))},closeTourModal:function(){return F(!1)}},children:t})},v=function(){return Object(c.useContext)(p)},f=s(11),g=s(2),N=(s(70),function(){return Object(O.jsxs)("div",{className:"lds-facebook",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})}),k=s(14),y=(s(80),function(){var e=v().closeSubmenu;return Object(O.jsxs)("div",{className:"header__text-box center",onMouseOver:e,children:[Object(O.jsx)("h1",{className:"heading-primary  heading-primary-main",children:"The Best Tours"}),Object(O.jsx)("p",{className:"heading-primary-sub",children:"adventure is starting here"}),Object(O.jsx)(k.Link,{className:"btn btn-dark",to:"tours",spy:!0,smooth:!0,children:"discover our tours"})]})}),S=(s(81),function(){var e=v(),t=e.openSidebar,s=e.openSubmenu,c=e.closeSubmenu,n=function(e){var t=e.target.textContent,c=e.target.getBoundingClientRect(),n=(c.left+c.right)/2,a=c.bottom-3;s(t,{positionCenter:n,positionBottom:a})};return Object(O.jsx)("nav",{className:"nav",onMouseOver:function(e){e.target.classList.contains("nav__link-sub")||c()},children:Object(O.jsxs)("div",{className:"nav-center",children:[Object(O.jsxs)("div",{className:"nav__header",children:[Object(O.jsx)(m.m,{className:"nav__logo"}),Object(O.jsx)("button",{className:"toggle-btn",onClick:t,children:Object(O.jsx)(m.b,{})})]}),Object(O.jsxs)("ul",{className:"nav__list",children:[Object(O.jsx)("li",{className:"nav__item",children:Object(O.jsx)("button",{className:"nav__link nav__link-sub",onMouseOver:n,children:"company"})}),Object(O.jsx)("li",{className:"nav__item",children:Object(O.jsx)("button",{className:"nav__link nav__link-sub",onMouseOver:n,children:"tours"})}),Object(O.jsx)("li",{className:"nav__item",children:Object(O.jsx)(k.Link,{className:"nav__link",to:"stories",spy:!0,smooth:!0,children:"stories"})}),Object(O.jsx)("li",{className:"nav__item",children:Object(O.jsx)(k.Link,{className:"nav__link",to:"contact",spy:!0,smooth:!0,children:"contact"})}),Object(O.jsx)("li",{className:"nav__item",children:Object(O.jsx)(f.b,{className:"nav__link",to:"/cart",children:"cart"})})]})]})})}),q=(s(84),function(){var e=v(),t=e.isSidebarOpen,s=e.closeSidebar,c=h.map((function(e,t){var s=e.page,c=e.links;return Object(O.jsxs)("div",{className:"sidebar__block",children:[Object(O.jsx)("h4",{children:s}),Object(O.jsx)("div",{className:"sidebar__sublinks",children:null===c||void 0===c?void 0:c.map((function(e,t){var s=e.url,c=e.icon,n=e.label;return Object(O.jsxs)(f.b,{to:s,children:[c," ",n]},t)}))})]},t)}));return Object(O.jsx)("aside",{className:"".concat(t?"sidebar-container show":"sidebar-container"),children:Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsx)("button",{className:"close-btn",onClick:s,children:Object(O.jsx)(m.n,{})}),Object(O.jsx)("div",{className:"sidebar__links",children:c})]})})}),C=(s(85),function(){var e=v(),t=e.isSubmenuOpen,s=e.subMenuLocation,n=e.page,a=n.page,r=n.links,i=Object(c.useRef)(null),l=Object(c.useState)("col-2"),o=Object(u.a)(l,2),j=o[0],b=o[1];Object(c.useEffect)((function(){b("col-2");var e=i.current,t=s.positionCenter,c=s.positionBottom;e.style.left="".concat(t,"px"),e.style.top="".concat(c,"px"),3===r.length&&b("col-3"),4===r.length&&b("col-4"),5===r.length&&b("col-5")}),[s,r]);var d="".concat(t?"submenu show":"submenu"),m=r.map((function(e,t){var s=e.label,c=e.url,n=e.icon;return Object(O.jsxs)(f.b,{to:c,children:[n," ",s]},t)}));return Object(O.jsxs)("aside",{className:d,ref:i,children:[Object(O.jsx)("h4",{children:a}),Object(O.jsx)("div",{className:"submenu-center ".concat(j),children:m})]})}),M=(s(86),function(){return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)(S,{}),Object(O.jsx)(y,{}),Object(O.jsx)(q,{}),Object(O.jsx)(C,{})]})}),P=(s(87),function(){var e=v(),t=e.toursPopular,s=e.loading,c=t.map((function(e,t){return Object(O.jsx)("img",{className:"gallery__photo gallery__photo-".concat(t+1),src:e.image,alt:e.name},e.id)}));return Object(O.jsxs)("section",{className:"section-about",children:[Object(O.jsx)("div",{className:"center-text mb-lg",children:Object(O.jsx)("h2",{className:"heading-secondary",children:"awesome tours for everyone"})}),Object(O.jsxs)("div",{className:"about__content",children:[Object(O.jsxs)("div",{className:"about__content-text",children:[Object(O.jsx)("h3",{className:"heading-tertiary mb-sm",children:"We know how to make happy moments"}),Object(O.jsx)("p",{className:"paragraph mb-md",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, dolore iste culpa cupiditate tempora quaerat sed rerum! Doloremque ratione sapiente qui, dolorem delectus suscipit consequuntur sequi minima incidunt consectetur fuga sunt voluptatibus nulla nostrum laudantium illum, quod neque repellendus libero rerum blanditiis!"}),Object(O.jsx)("h3",{className:"heading-tertiary mb-sm",children:"People trust us their time"}),Object(O.jsx)("p",{className:"paragraph",children:"Doloremque ratione sapiente qui, dolorem delectus suscipit consequuntur sequi sit amet consectetur, adipisicing elit. Nulla nostrum laudantium illum, quod neque repellendus libero rerum blanditiis. Aspernatur, dolore iste culpa cupiditate tempora quaerat sed rerum! Minima incidunt consectetur fuga sunt voluptatibus!"})]}),Object(O.jsx)("div",{className:"about__content-gallery",children:s?Object(O.jsx)(N,{}):c})]})]})}),w=s(29),L=function(e){e.id;var t=e.name,s=e.image;return Object(O.jsxs)("article",{className:"card",children:[Object(O.jsx)("img",{className:"card__img",src:s,alt:"tour"}),Object(O.jsx)("h4",{className:"card__heading",children:Object(O.jsx)("span",{children:t})})]})},B=function(e){var t=e.name,s=e.image,n=e.info,a=Object(c.useState)(!1),r=Object(u.a)(a,2),i=r[0],l=r[1],o=n.substring(0,250);return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("img",{className:"card__img",src:s,alt:t}),Object(O.jsx)("h4",{className:"card__heading",children:Object(O.jsx)("span",{children:t})}),Object(O.jsxs)("p",{className:"card__info paragraph",children:[i?n:"".concat(o,"...")," ",Object(O.jsx)("button",{className:"btn__read-more",onClick:function(){return l(!i)},children:i?"read less":"read more"})]})]})},E=(s(88),function(){var e=v(),t=e.tours,s=e.toursPopular,n=Object(c.useState)(!1),a=Object(u.a)(n,2),r=a[0],i=a[1],l=s.map((function(e){return Object(O.jsx)(B,Object(w.a)({},e),e.id)})),o=t.map((function(e){return Object(O.jsx)(L,Object(w.a)({},e),e.id)}));return Object(O.jsxs)("section",{className:"section-tours",id:"tours",children:[Object(O.jsx)("div",{className:"center-text mb-lg",children:Object(O.jsx)("h2",{className:"heading-secondary",children:"most popular tours"})}),Object(O.jsx)("div",{className:"tours-popular mb-xl",children:l}),Object(O.jsx)("div",{className:"center-text",children:Object(O.jsx)("button",{className:"btn btn-dark",onClick:function(){return i(!r)},children:r?" Hide all tours":"All tours"})}),Object(O.jsx)("div",{className:r?"tours-popular mt-xl":null,children:r?o:null})]})}),F=function(e){var t=e.userStory,s=e.position,c=t.name,n=t.picture,a=t.joke,r=t.location;return Object(O.jsxs)("article",{className:"story ".concat(s),children:[Object(O.jsx)("img",{src:n.large,alt:c.first,className:"story__user-img mb-sm"}),Object(O.jsxs)("h2",{className:"story__caption mb-sm",children:[c.first," ",c.last]}),Object(O.jsxs)("h3",{className:"heading-tertiary mb-sm",children:["my favorite journey in ",r.country]}),Object(O.jsx)("p",{className:"paragraph",children:a})]})},T=(s(89),function(){var e=v().userStories,t=Object(c.useState)(0),s=Object(u.a)(t,2),n=s[0],a=s[1],r=e.map((function(t,s){var c="slide";return s===n&&(c="active-slide"),(s===n-1||0===n&&s===e.length-1)&&(c="prev-slide"),Object(O.jsx)(F,{userStory:t,position:c},t.id)})),i=e.map((function(e,t){var s="";return t===n&&(s="active-dot"),Object(O.jsx)("button",{onClick:function(){return function(){return a(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)}(t)},className:"slider__dots__dot ".concat(s),"data-slide":t,children:"\u200b"},t)}));return Object(O.jsxs)("section",{className:"section-stories",id:"stories",children:[Object(O.jsx)("div",{className:"center-text mb-lg",children:Object(O.jsx)("h2",{className:"heading-secondary",children:"People about us"})}),Object(O.jsxs)("div",{className:"slider",children:[r,Object(O.jsx)("button",{className:"slider__btn slider__btn-prev",onClick:function(){a((function(t){var s=t-1;return s<0&&(s=e.length-1),s}))},children:Object(O.jsx)(m.f,{})}),Object(O.jsx)("button",{className:"slider__btn slider__btn-next",onClick:function(){a((function(t){var s=t+1;return s>e.length-1&&(s=0),s}))},children:Object(O.jsx)(m.g,{})}),Object(O.jsx)("div",{className:"slider__dots",children:i})]})]})}),A=(s(90),function(){return Object(O.jsx)("section",{className:"section-contact",id:"contact",children:Object(O.jsx)("div",{className:"contact__form",children:Object(O.jsxs)("form",{action:"#",className:"form",children:[Object(O.jsx)("div",{className:"center-text mb-md",children:Object(O.jsx)("h2",{className:"heading-secondary",children:"Contact us"})}),Object(O.jsxs)("div",{className:"form__group mb-md",children:[Object(O.jsx)("input",{className:"form__input",type:"text",placeholder:"Full name",id:"name",required:!0}),Object(O.jsx)("label",{htmlFor:"name",className:"form__label",children:"Full name"})]}),Object(O.jsxs)("div",{className:"form__group mb-md",children:[Object(O.jsx)("input",{className:"form__input",type:"email",placeholder:"Email address",id:"email",required:!0}),Object(O.jsx)("label",{htmlFor:"email",className:"form__label",children:"Email address"})]}),Object(O.jsx)("div",{className:"form__group mb-md",children:Object(O.jsx)("textarea",{className:"form__input",type:"text",placeholder:"Your message...",name:"text",required:!0})}),Object(O.jsx)("div",{className:"form__group mb-md center-text",children:Object(O.jsx)("button",{className:"btn btn-dark",children:"Send"})})]})})})}),D=(s(91),function(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsxs)("div",{className:"social",children:[Object(O.jsx)("p",{className:"paragraph",children:"pettergov1@gmail.com"}),Object(O.jsx)(m.h,{}),Object(O.jsx)(m.j,{})]})})}),J=function(){return Object(O.jsx)("div",{className:"modal__page",children:Object(O.jsx)(P,{})})},R=function(){return Object(O.jsx)("div",{className:"modal__page",children:Object(O.jsx)("h1",{children:"CarriersPage"})})},H=function(){return Object(O.jsx)("div",{className:"modal__page",children:Object(O.jsx)("h1",{children:"Partners"})})},I=function(){return Object(O.jsx)("div",{className:"modal__page",children:Object(O.jsx)("h1",{children:"Sea tours"})})},W=function(){return Object(O.jsx)("div",{className:"modal__page",children:Object(O.jsx)("h1",{children:"Mountains tours"})})},Y=function(){return Object(O.jsx)("div",{className:"modal__page",children:Object(O.jsx)("h1",{children:"Agriturismo page"})})},z=function(){return Object(O.jsx)("div",{className:"modal__page",children:Object(O.jsx)(T,{})})},G=function(){return Object(O.jsx)("div",{className:"modal__page",children:Object(O.jsx)(A,{})})},K=(s(92),function(){var e=v().loading;return Object(O.jsx)(f.a,{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(M,{}),Object(O.jsx)(P,{}),e?Object(O.jsx)(N,{}):Object(O.jsx)(E,{}),Object(O.jsx)(T,{}),Object(O.jsx)(A,{}),Object(O.jsx)(D,{}),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(g.c,{children:[Object(O.jsx)(g.a,{path:"/about",component:J}),Object(O.jsx)(g.a,{path:"/carries",component:R}),Object(O.jsx)(g.a,{path:"/partners",component:H}),Object(O.jsx)(g.a,{path:"/sea rest",component:I}),Object(O.jsx)(g.a,{path:"/mountains",component:W}),Object(O.jsx)(g.a,{path:"/agriturismo",component:Y}),Object(O.jsx)(g.a,{path:"/stories",component:z}),Object(O.jsx)(g.a,{path:"/contact",component:G})]})})]})})});r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(_,{children:Object(O.jsx)(K,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.a1f09cc5.chunk.js.map