(this["webpackJsonprick-and-morty-profiles"]=this["webpackJsonprick-and-morty-profiles"]||[]).push([[0],{104:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(20),a=n.n(c),o=(n(97),n(90)),l=n(23),s=n(16),d=n(17),j="@media (max-width: 768px)",b=d.a.header(Object(s.a)({},j,{display:"flex",justifyContent:"center",backgroundColor:"rgb(203,203,203)",borderBlockEnd:"1px solid gray",padding:"1rem",position:"sticky",top:"0",zIndex:1,boxShadow:"rgba(0, 0, 0, 0.07) 0px 0px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 5px 5px, rgba(0, 0, 0, 0.07) 0px 10px 11px"})),u=n.p+"static/media/rick_and_morty_logo.20259291.svg",f=n(7);function h(){return Object(f.jsx)(b,{children:Object(f.jsx)("img",{src:u,width:200,alt:"rick and morty"})})}var x,p=d.a.div(Object(s.a)({},j,{display:"flex",flexDirection:"column",height:"99vh"})),O=d.a.main(Object(s.a)({},j,{display:"flex",flexDirection:"column",overflow:"auto",padding:"2rem"})),m=d.a.div(Object(s.a)({},j,{display:"flex",justifyContent:"center",alignItems:"center",height:"20vh",margin:"2rem",zIndex:1})),g=i.createContext([]),v=n(120),y=(n(76),n(121)),S=n(123),I=y.a.Panel,w=Object(d.a)(I)(Object(s.a)({},j,{boxShadow:"rgba(0, 0, 0, 0.35) 0px 3px 7px",marginBottom:"2rem",fontFamily:"Tahoma",fontSize:"14px"}));function C(e){var t=i.useState({}),n=Object(l.a)(t,2),r=n[0],c=n[1],a=i.useState({}),o=Object(l.a)(a,2),s=o[0],d=o[1],j=i.useState([]),b=Object(l.a)(j,2),u=b[0],h=b[1];i.useEffect((function(){var t=function(e,t){fetch(e).then((function(e){return e.json()})).then((function(e){t===x.ORIGIN?c(e):t===x.LOCATION&&d(e)}))},n=e.profile.origin.url,i=e.profile.location.url;t(n,x.ORIGIN),t(i,x.LOCATION)}),[]),i.useEffect((function(){var t=[],n=e.profile.episode;n.forEach((function(e){!function(e){fetch(e).then((function(e){return e.json()})).then((function(e){t.push(e.name)})).then((function(){t.length===n.length&&h(t)}))}(e)}))}),[]);var p,O=function(e){return Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:["Name: ",e.name]}),Object(f.jsxs)("li",{children:["Type: ",e.type]}),Object(f.jsxs)("li",{children:["Dimension: ",e.dimension]}),Object(f.jsxs)("li",{children:["Amount of Residents: ",e.residents&&e.residents.length]})]})};return Object(f.jsxs)(y.a,{bordered:!1,defaultActiveKey:[],expandIcon:function(e){var t=e.isActive;return Object(f.jsx)(S.a,{rotate:t?90:0})},children:[Object(f.jsx)(w,{header:"Character's Information",children:(p=e.profile,Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:["Name: ",p.name]}),Object(f.jsxs)("li",{children:["Status: ",p.status]}),Object(f.jsxs)("li",{children:["Species: ",p.species]}),Object(f.jsxs)("li",{children:["Type: ",p.type]}),Object(f.jsxs)("li",{children:["Gender: ",p.gender]})]}))},"1"),Object(f.jsxs)(w,{header:"Origin and Location",children:[Object(f.jsx)("h4",{children:"Origin"}),O(r),Object(f.jsx)("h3",{children:"Location"}),O(s)]},"2"),Object(f.jsx)(w,{header:"Chapters",children:u.sort().map((function(e,t){return Object(f.jsx)("ul",{role:"listitem",style:{marginBottom:"0px"},children:Object(f.jsx)("li",{children:e})},t)}))},"3")]})}!function(e){e.ORIGIN="origin",e.LOCATION="location"}(x||(x={}));var k=d.a.div(Object(s.a)({},j,{display:"flex",minHeight:"20vh",gap:"0.5rem",boxShadow:"rgba(0, 0, 0, 0.35) 0px 3px 7px",":hover":{cursor:"pointer",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",transition:"0.3s",backgroundColor:"#f1f2f7"}})),N=d.a.div(Object(s.a)({},j,{display:"flex",inlineSize:"40vw",alignItems:"center",justifyContent:"center"})),D=d.a.div(Object(s.a)({display:"flex",gap:"0.2rem",flexDirection:"column",minHeight:"10rem",overflow:"auto"},j,{display:"flex",flexDirection:"column",justifyContent:"center",inlineSize:"55vw"})),R=d.a.h3(Object(s.a)({},j,{fontFamily:"Helvetica",fontSize:"16px",fontWeight:"bold"})),z=d.a.h4(Object(s.a)({},j,{fontFamily:"Helvetica",fontSize:"14px",fontStyle:"italic"})),E=d.a.div(Object(s.a)({},j,{display:"flex",gap:"0.5rem",alignItems:"center",minHeight:"3vh"})),T=(d.a.div(Object(s.a)({},j,{display:"flex",flexDirection:"column",gap:"5rem",border:"1px solid red"})),n(14)),A=i.forwardRef((function(e,t){var n=i.useState(!1),r=Object(l.a)(n,2),c=r[0],a=r[1];return Object(T.b)("div",{ref:t,children:[Object(T.b)(k,{onClick:function(){return a(!c)},children:[Object(T.a)(N,{children:Object(T.a)("img",{css:[{border:"1px solid black",borderRadius:"5rem"}],src:e.profile.image,width:110,height:110,alt:e.profile.name})}),Object(T.b)(D,{children:[Object(T.b)(E,{children:[Object(T.a)(R,{children:"Name:"}),Object(T.a)(z,{children:e.profile.name})]}),Object(T.b)(E,{children:[Object(T.a)(R,{children:"Status:"}),Object(T.a)(z,{children:e.profile.status})]}),Object(T.b)(E,{children:[Object(T.a)(R,{children:"Species:"}),Object(T.a)(z,{children:e.profile.species})]}),Object(T.b)(E,{children:[Object(T.a)(R,{children:"Gender:"}),Object(T.a)(z,{children:e.profile.gender})]})]})]}),Object(T.b)(v.a,{bodyStyle:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center",height:530,overflow:"auto"},title:"",visible:c,onCancel:function(){return a(!1)},footer:[],children:[Object(T.a)("img",{css:{borderRadius:"5rem"},src:e.profile.image,alt:e.profile.name,title:e.profile.name,width:80}),Object(T.a)(C,{profile:e.profile})]})]})})),B=d.a.div(Object(s.a)({},j,{display:"flex",flexDirection:"column",gap:"2rem"}));function G(e){var t=i.useContext(g);return Object(f.jsx)(B,{children:t.map((function(n){return Object(f.jsx)("div",{role:"listitem",children:Object(f.jsx)(A,{profile:n,ref:t[t.length-1].id===n.id?e.lastProfileCard:null})},n.id)}))})}var H=function(e,t){var n=Object(i.useRef)(null);return Object(i.useCallback)((function(t){n.current&&n.current.disconnect(),n.current=new IntersectionObserver((function(t){var n=Object(l.a)(t,1)[0];e(n.isIntersecting)})),t&&n.current.observe(t)}),t)},L=n(87),F=n(119),P=n(122);function _(){return Object(f.jsx)(P.a,{status:"500",title:"500",subTitle:"Sorry, something went wrong."})}n(104);function J(){var e=i.useState([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=i.useState({}),a=Object(l.a)(c,2),s=a[0],d=a[1],j=i.useState(!1),b=Object(l.a)(j,2),u=b[0],x=b[1],v=i.useState(0),y=Object(l.a)(v,2),S=y[0],I=y[1],w=H((function(e){e&&(x(!0),fetch("".concat(s.next)).then((function(e){return e.json()})).then((function(e){var t=Object(o.a)(n).concat(e.results);r(t),I(e.results?S+e.results.length:S),d(e.info)})).then((function(){return x(!1)})))}),[n,S]);return i.useEffect((function(){x(!0),fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){r(e.results),d(e.info),I(e.results?e.results.length:0)})).then((function(){return x(!1)}))}),[]),Object(f.jsx)(g.Provider,{value:n,children:Object(f.jsx)(L.ErrorBoundary,{FallbackComponent:_,children:Object(f.jsxs)(p,{children:[Object(f.jsx)(h,{}),Object(f.jsxs)(O,{children:[Object(f.jsx)(G,{lastProfileCard:w}),Object(f.jsx)(m,{children:u&&Object(f.jsx)(F.a,{})})]})]})})})}a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root"))},97:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.01ddfe84.chunk.js.map