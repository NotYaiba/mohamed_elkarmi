(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{22:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},43:function(e,c,t){},45:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){},63:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(5),i=t(8),n=t(7),l=t(6),r=t(1),j=t.n(r),d=t(16),o=t.n(d),m=(t(33),t(15)),b=(t(34),function(e){Object(n.a)(t,e);var c=Object(l.a)(t);function t(e){var a,i;return Object(s.a)(this,t),i=1==window.location.href.endsWith("about")?2:0,(a=c.call(this,e)).state={linkselected:i,language:1},a}return Object(i.a)(t,[{key:"changelink",value:function(e){this.setState({linkselected:e})}},{key:"changelanguage",value:function(e){this.setState({language:e})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"navbar-conrtainer",id:"Home",children:[Object(a.jsxs)("ul",{className:"pages-list",children:[Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/mohamed_elkarmi/",className:0==this.state.linkselected?"link-active":"not-active",onClick:function(){return e.changelink(0)},children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/mohamed_elkarmi/about",className:2==this.state.linkselected?"link-active":"not-active",onClick:function(){return e.changelink(2)},children:"About"})})]}),Object(a.jsx)("ul",{className:"language-select",children:Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("a",{onClick:function(){return e.changelanguage(1)},className:1==this.state.language?"link-active":"",children:"ENG"})," "]})})]})}}]),t}(j.a.Component)),h=(t(43),function(e){Object(n.a)(t,e);var c=Object(l.a)(t);function t(){return Object(s.a)(this,t),c.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"footer-conrtainer",id:"Home",children:[Object(a.jsx)("div",{className:"year",children:"\xa9 2021"}),Object(a.jsxs)("ul",{className:"contact-links",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",href:"https://www.instagram.com/mohamedel_karmi/",children:Object(a.jsx)("i",{className:"fab fa-instagram link-icon"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",href:"https://github.com/NotYaiba",children:Object(a.jsx)("i",{className:"fab fa-github link-icon"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/mohamed-elkarmi-32aa1b1bb/",children:Object(a.jsx)("i",{className:"fab fa-linkedin link-icon"})})})]})]})}}]),t}(j.a.Component)),O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,64)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,i=c.getLCP,n=c.getTTFB;t(e),a(e),s(e),i(e),n(e)}))},x=(t.p,t.p+"static/media/mask.9b2eb7a4.png"),u=(t(44),t(12)),p=t(27),f=t.n(p);t(45);var v=function(){var e=Object(u.b)({config:{duration:1e3},delay:500,from:{opacity:0},to:{opacity:1}});return Object(a.jsxs)("div",{className:"ss",children:[Object(a.jsxs)("div",{className:"hero-conrtainer",children:[Object(a.jsx)("h1",{className:"hello",children:"HELLO"}),Object(a.jsx)("div",{children:Object(a.jsxs)("h3",{children:["I ' am ",Object(a.jsx)("spam",{children:"Mohamed"})," Elkarmi"]})}),Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{text:"Hi, I'm Mohamed, a passionate self-taught Programmer and Web Developer.",className:"para",speed:25,typingDelay:1e3,eraseSpeed:30,loop:!1})}),Object(a.jsx)("button",{className:"contact-me-button",children:"Contact me"})]}),Object(a.jsx)(u.a.div,{style:e,className:"image-me",children:Object(a.jsx)("img",{src:x,alt:"mok"})})]})},g=(t.p,t.p,t.p,t.p+"static/media/me3.ae22321d.jpg"),N=(t(22),t(13));t.p;var k=function(e){Object(n.a)(t,e);var c=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=c.call.apply(c,[this].concat(i))).isInViewport=function(e){document.querySelector(".skills");var c=e.getBoundingClientRect();return c.top>=0&&c.left>=0&&c.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&c.right<=(window.innerWidth||document.documentElement.clientWidth)},e}return Object(i.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"about-container",children:[Object(a.jsxs)("div",{className:"skills-container",children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{className:"skills-titile",children:"_MY SKILLS"})}),Object(a.jsxs)("div",{className:"skills",children:[Object(a.jsx)(N.Spring,{delay:500,config:{duration:1e3},from:{percent:0},to:{percent:90},children:function(e){var c=e.percent;return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{className:"skill-title",children:Object(a.jsxs)("h5",{className:"skill-name",children:["C Language ",Object(a.jsx)("span",{className:"pers",children:"".concat(c.toFixed(),"%")})]})}),Object(a.jsx)("div",{className:"bar",children:Object(a.jsx)("div",{style:{width:"".concat(c,"%")},className:"ii"})}),Object(a.jsx)("div",{className:"logo-img",children:Object(a.jsx)("i",{className:"fab fa-cuttlefish icon"})})]})}}),Object(a.jsx)(N.Spring,{delay:1e3,config:{duration:1e3},from:{percent:0},to:{percent:80},children:function(e){var c=e.percent;return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{className:"skill-title",children:Object(a.jsxs)("h5",{className:"skill-name",children:["Python ",Object(a.jsx)("span",{className:"pers",children:"".concat(c.toFixed(),"%")})]})}),Object(a.jsx)("div",{className:"bar",children:Object(a.jsx)("div",{style:{width:"".concat(c,"%")},className:"ii"})}),Object(a.jsx)("div",{className:"logo-img",children:Object(a.jsx)("i",{className:"fab fa-python icon"})})]})}}),Object(a.jsx)(N.Spring,{delay:1500,config:{duration:1e3},from:{percent:0},to:{percent:75},children:function(e){var c=e.percent;return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{className:"skill-title",children:Object(a.jsxs)("h5",{className:"skill-name",children:["Scripting  ",Object(a.jsx)("span",{className:"pers",children:"".concat(c.toFixed(),"%")})]})}),Object(a.jsx)("div",{className:"bar",children:Object(a.jsx)("div",{style:{width:"".concat(c,"%")},className:"ii"})}),Object(a.jsx)("div",{className:"logo-img",children:Object(a.jsx)("i",{className:"fas fa-terminal icon"})})]})}}),Object(a.jsx)(N.Spring,{delay:2e3,config:{duration:1e3},from:{percent:0},to:{percent:70},children:function(e){var c=e.percent;return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{className:"skill-title",id:"ee",children:Object(a.jsxs)("h5",{className:"skill-name",children:["React (HTML && CSS)  ",Object(a.jsx)("span",{className:"pers",children:"".concat(c.toFixed(),"%")})]})}),Object(a.jsx)("div",{className:"bar",children:Object(a.jsx)("div",{style:{width:"".concat(c,"%")},className:"ii"})}),Object(a.jsx)("div",{className:"logo-img",id:"exx",children:Object(a.jsx)("i",{className:"fab fa-react icon"})})]})}}),Object(a.jsx)(N.Spring,{delay:2500,config:{duration:1e3},from:{percent:0},to:{percent:95},children:function(e){var c=e.percent;return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{className:"skill-title",id:"ee",children:Object(a.jsxs)("h5",{className:"skill-name",children:["Back-End ",Object(a.jsx)("span",{className:"pers",children:"".concat(c.toFixed(),"%")})]})}),Object(a.jsx)("div",{className:"bar",children:Object(a.jsx)("div",{style:{width:"".concat(c,"%")},className:"ii"})}),Object(a.jsx)("div",{className:"logo-img",id:"exx",children:Object(a.jsx)("i",{class:"fab fa-node-js icon"})})]})}}),Object(a.jsx)(N.Spring,{delay:3e3,config:{duration:1e3},from:{percent:0},to:{percent:40},children:function(e){var c=e.percent;return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{className:"skill-title",id:"ee",children:Object(a.jsxs)("h5",{className:"skill-name",children:["DevOps ",Object(a.jsx)("span",{className:"pers",children:"".concat(c.toFixed(),"%")})]})}),Object(a.jsx)("div",{className:"bar",children:Object(a.jsx)("div",{style:{width:"".concat(c,"%")},className:"ii"})}),Object(a.jsx)("div",{className:"logo-img",id:"exx",children:Object(a.jsx)("i",{class:"fab fa-docker icon"})})]})}})]})]}),Object(a.jsxs)("div",{className:"image-desc",children:[Object(a.jsx)("div",{className:"image-2",children:Object(a.jsx)("img",{src:g,alt:"mok"})}),Object(a.jsxs)("div",{className:"desc",children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{className:"about-titile",children:"_ABOUT ME"})}),Object(a.jsx)("div",{className:"image-3",children:Object(a.jsx)("img",{src:g,alt:"mok"})}),Object(a.jsx)("p",{className:"paraga",children:"I'm Elkarmi mohamed, Software Engineering Student \ud83d\udc68\u200d\ud83c\udf93, currently studing at 1337 ,highly motivated, dynamic, persevering, rigorous and passionate about IT & web and mobile development, I'm Full Stack Web Developer, also I like building new stuff and work with other people. My background doesn't contains various experiences But I promise with the best results possible."}),Object(a.jsxs)("div",{className:"info-container",children:[Object(a.jsxs)("h1",{className:"info-container",children:[Object(a.jsx)("span",{className:"info-span",children:"Age :"})," 20 Years"]}),Object(a.jsxs)("h1",{className:"info-container",children:[Object(a.jsx)("span",{className:"info-span",children:"E-mail :"})," Elkarmimed@gmail.com"]}),Object(a.jsxs)("h1",{className:"info-container",children:[Object(a.jsx)("span",{className:"info-span",children:"Job :"})," Software Engineer"]}),Object(a.jsxs)("h1",{className:"info-container",children:[Object(a.jsx)("span",{className:"info-span",children:"Nationality :"})," Moroccan"]}),Object(a.jsx)("div",{})]})]})]}),Object(a.jsx)("div",{className:"test"})]})}}]),t}(j.a.Component);t.p,t.p,t(61);t(62);var y=t(3),w=function(e){Object(n.a)(t,e);var c=Object(l.a)(t);function t(){var e;return Object(s.a)(this,t),(e=c.call(this)).state={name:"React",isUserAuthenticated:!0},e}return Object(i.a)(t,[{key:"render",value:function(){return Object(a.jsxs)(m.a,{children:[Object(a.jsx)(b,{}),Object(a.jsxs)(y.c,{children:[Object(a.jsx)(y.a,{path:"/mohamed_elkarmi/about",children:Object(a.jsx)(k,{})}),Object(a.jsx)(y.a,{path:"/mohamed_elkarmi/",children:Object(a.jsx)(v,{})})]}),Object(a.jsx)(h,{})]})}}]),t}(j.a.Component);o.a.render(Object(a.jsx)(w,{}),document.getElementById("root")),O()}},[[63,1,2]]]);
//# sourceMappingURL=main.7f3a693b.chunk.js.map