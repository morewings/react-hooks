(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{135:function(t,e,r){"use strict";r.r(e);r(49),r(156),r(157),r(75);var o=r(7),a=r.n(o),s=(r(160),r(161),r(0)),i=r.n(s),m=r(163),n=r(143),u=r(162);var c=u.sort(function(t,e){return t.name<e.name?-1:t.name>e.name?1:0}),p=m.a.div.withConfig({displayName:"pages__Hook",componentId:"lnr6vr-0"})(["margin-bottom:3rem;"]),l=m.a.a.withConfig({displayName:"pages__RepositoryLink",componentId:"lnr6vr-1"})(["float:right;"]),h=m.a.h2.withConfig({displayName:"pages__Name",componentId:"lnr6vr-2"})(['font-family:"Space Mono",monospace;']),g=m.a.pre.withConfig({displayName:"pages__Pre",componentId:"lnr6vr-3"})(["padding:0.6rem;"]),f=m.a.span.withConfig({displayName:"pages__Tag",componentId:"lnr6vr-4"})(["font-size:0.8rem;background:#d9ffab;border-bottom:1px solid #b6de86;padding:0.5rem 0.8rem;border-radius:1rem;margin-right:0.5rem;"]),S=m.a.input.withConfig({displayName:"pages__FilterInput",componentId:"lnr6vr-5"})(['width:100%;margin-top:1rem;padding:0.4rem 0.8rem;font-family:"Roboto",sans-serif;']),y=m.a.div.withConfig({displayName:"pages__ResultsCount",componentId:"lnr6vr-6"})(["font-size:0.7rem;color:grey;margin-top:0.5rem;margin-bottom:3rem;"]),d=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))||this).state={term:"",results:c},e}return a()(e,t),e.prototype.render=function(){var t=this,e=this.state,r=e.term,o=e.results;return i.a.createElement(n.a,null,i.a.createElement("p",{style:{marginTop:"3rem"}},"Warning: Hooks are currently a React",i.a.createElement("a",{href:"https://github.com/reactjs/rfcs/pull/68"}," RFC")," and"," ",i.a.createElement("strong",null,"not ready for production"),"."),i.a.createElement("p",null,"You can add your hooks by opening a pull-request at"," ",i.a.createElement("a",{href:"https://github.com/nikgraf/react-hooks"},"https://github.com/nikgraf/react-hooks"),"."),i.a.createElement(S,{value:r,onChange:function(e){var r=e.target.value;t.setState({term:r,results:c.filter(function(t){return t.name.toLowerCase().includes(r.toLowerCase())})})},placeholder:"filter by name"}),i.a.createElement(y,null,"Found ",o.length," ",1===o.length?"entry":"entries"),o.map(function(t){return i.a.createElement(p,{key:t.repositoryUrl+"-"+t.name},i.a.createElement(l,{href:t.repositoryUrl},t.repositoryUrl),i.a.createElement(h,null,t.name),i.a.createElement(g,null,i.a.createElement("code",null,t.importStatement)),i.a.createElement("div",null,t.tags.map(function(t){return i.a.createElement(f,{key:t},t)})))}))},e}(i.a.Component);e.default=d},138:function(t,e,r){"use strict";r.r(e),r.d(e,"graphql",function(){return g}),r.d(e,"StaticQueryContext",function(){return l}),r.d(e,"StaticQuery",function(){return h});var o=r(0),a=r.n(o),s=r(4),i=r.n(s),m=r(137),n=r.n(m);r.d(e,"Link",function(){return n.a}),r.d(e,"withPrefix",function(){return m.withPrefix}),r.d(e,"navigate",function(){return m.navigate}),r.d(e,"push",function(){return m.push}),r.d(e,"replace",function(){return m.replace}),r.d(e,"navigateTo",function(){return m.navigateTo});var u=r(139),c=r.n(u);r.d(e,"PageRenderer",function(){return c.a});var p=r(34);r.d(e,"parsePath",function(){return p.a});var l=a.a.createContext({}),h=function(t){return a.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},139:function(t,e,r){var o;t.exports=(o=r(141))&&o.default||o},140:function(t){t.exports={data:{site:{siteMetadata:{title:"Collection of React Hooks"}}}}},141:function(t,e,r){"use strict";r.r(e);r(33);var o=r(0),a=r.n(o),s=r(4),i=r.n(s),m=r(54),n=r(2),u=function(t){var e=t.location,r=n.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(m.a,Object.assign({location:e,pageResources:r},r.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},142:function(t,e,r){},143:function(t,e,r){"use strict";var o=r(140),a=r(0),s=r.n(a),i=r(144),m=r.n(i),n=r(138),u=function(t){var e=t.siteTitle;return s.a.createElement("div",{style:{background:"#1ca54f",marginBottom:"1.45rem"}},s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},s.a.createElement("svg",{height:"45",viewBox:"0 0 256 230",xmlns:"http://www.w3.org/2000/svg",style:{float:"left",marginRight:"0.5rem"}},s.a.createElement("path",{d:"M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z",fill:"#1ca54f"}),s.a.createElement("path",{d:"M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z",fill:"#FFF"}),s.a.createElement("path",{d:"M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z",fill:"#1ca54f"}),s.a.createElement("path",{d:"M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177",fill:"#FFF"})),s.a.createElement("h1",{style:{margin:0,fontWeight:"300"}},s.a.createElement(n.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};r(142),e.a=function(t){var e=t.children;return s.a.createElement(n.StaticQuery,{query:"755544856",render:function(t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e))},data:o})}},162:function(t){t.exports=[{name:"useState",tags:["React Core","State Management"],repositoryUrl:"https://github.com/facebook/react",importStatement:'import { useState } from "react";'},{name:"useReducer",tags:["React Core","State Management"],repositoryUrl:"https://github.com/facebook/react",importStatement:'import { useReducer } from "react";'},{name:"useEffect",tags:["React Core"],repositoryUrl:"https://github.com/facebook/react",importStatement:'import { useEffect } from "react";'},{name:"useLayoutEffect",tags:["React Core"],repositoryUrl:"https://github.com/facebook/react",importStatement:'import { useLayoutEffect } from "react";'},{name:"useContext",tags:["React Core"],repositoryUrl:"https://github.com/facebook/react",importStatement:'import { useContext } from "react";'},{name:"useMemo",tags:["React Core"],repositoryUrl:"https://github.com/facebook/react",importStatement:'import { useMemo } from "react";'},{name:"useRef",tags:["React Core"],repositoryUrl:"https://github.com/facebook/react",importStatement:'import { useRef } from "react";'},{name:"useMutationEffect",tags:["React Core"],repositoryUrl:"https://github.com/facebook/react",importStatement:'import { useMutationEffect } from "react";'},{name:"useImperativeMethods",tags:["React Core"],repositoryUrl:"https://github.com/facebook/react",importStatement:'import { useImperativeMethods } from "react";'},{name:"useCallback",tags:["React Core"],repositoryUrl:"https://github.com/facebook/react",importStatement:'import { useCallback } from "react";'},{name:"useImmer",tags:["State Management"],repositoryUrl:"https://github.com/mweststrate/use-immer",importStatement:'import { useImmer } from "use-immer";'},{name:"useImmerReducer",tags:["State Management"],repositoryUrl:"https://github.com/mweststrate/use-immer",importStatement:'import { useImmerReducer } from "use-immer";'},{name:"useSpring",tags:["Animation"],repositoryUrl:"https://github.com/drcmda/react-spring",importStatement:'import { useSpring } from "react-spring";'},{name:"useWindowSize",tags:["Layout"],repositoryUrl:"https://github.com/rehooks/window-size",importStatement:'import useWindowSize from "@rehooks/window-size";'},{name:"useInputValue",tags:["State Management"],repositoryUrl:"https://github.com/rehooks/input-value",importStatement:'import useInputValue from "@rehooks/input-value";'},{name:"useDocumentVisibility",tags:["Layout"],repositoryUrl:"https://github.com/rehooks/document-visibility",importStatement:'import useWindowSize from "@rehooks/document-visibility";'},{name:"useComponentSize",tags:["Layout"],repositoryUrl:"https://github.com/rehooks/component-size",importStatement:'import useWindowSize from "@rehooks/component-size";'},{name:"useDocumentTitle",tags:[],repositoryUrl:"https://github.com/rehooks/document-title",importStatement:'import useDocumentTitle from "@rehooks/document-title";'},{name:"useNetworkStatus",tags:["Network"],repositoryUrl:"https://github.com/rehooks/network-status",importStatement:'import useNetworkStatus from "@rehooks/network-status";'},{name:"useOnlineStatus",tags:["Network"],repositoryUrl:"https://github.com/rehooks/online-status",importStatement:'import useOnlineStatus from "@rehooks/online-status";'},{name:"useLocalStorage",tags:[],repositoryUrl:"https://github.com/rehooks/local-storage",importStatement:'import useLocalStorage from "@rehooks/local-storage";'},{name:"useWindowScrollPosition",tags:["Layout"],repositoryUrl:"https://github.com/rehooks/window-scroll-position",importStatement:'import useWindowScrollPosition from "@rehooks/window-scroll-position";'},{name:"useDeviceMotion",tags:[],repositoryUrl:"https://github.com/palmerhq/the-platform",importStatement:'import useDeviceMotion from "the-platform";'},{name:"useDeviceOrientation",tags:[],repositoryUrl:"https://github.com/palmerhq/the-platform",importStatement:'import useDeviceOrientation from "the-platform";'},{name:"useGeoPosition",tags:[],repositoryUrl:"https://github.com/palmerhq/the-platform",importStatement:'import useGeoPosition from "the-platform";'},{name:"useNetworkStatus",tags:["Network"],repositoryUrl:"https://github.com/palmerhq/the-platform",importStatement:'import useNetworkStatus from "the-platform";'},{name:"useMedia",tags:[],repositoryUrl:"https://github.com/palmerhq/the-platform",importStatement:'import useMedia from "the-platform";'},{name:"useScript",tags:[],repositoryUrl:"https://github.com/palmerhq/the-platform",importStatement:'import useScript from "the-platform";'},{name:"useStylesheet",tags:[],repositoryUrl:"https://github.com/palmerhq/the-platform",importStatement:'import useStylesheet from "the-platform";'},{name:"useWindowScrollPosition",tags:[],repositoryUrl:"https://github.com/palmerhq/the-platform",importStatement:'import useWindowScrollPosition from "the-platform";'},{name:"useWindowSize",tags:["Layout"],repositoryUrl:"https://github.com/palmerhq/the-platform",importStatement:'import useWindowSize from "the-platform";'},{name:"useStateful",tags:["State Management"],repositoryUrl:"https://github.com/kitze/react-hanger",importStatement:'import { useStateful } from "react-hanger";'},{name:"useOnMount",tags:[],repositoryUrl:"https://github.com/kitze/react-hanger",importStatement:'import { useOnMount } from "react-hanger";'},{name:"useOnUnmount",tags:[],repositoryUrl:"https://github.com/kitze/react-hanger",importStatement:'import { useOnUnmount } from "react-hanger";'},{name:"useLifecycleHooks",tags:[],repositoryUrl:"https://github.com/kitze/react-hanger",importStatement:'import { useLifecycleHooks } from "react-hanger";'},{name:"useBoolean",tags:["State Management"],repositoryUrl:"https://github.com/kitze/react-hanger",importStatement:'import { useBoolean } from "react-hanger";'},{name:"useNumber",tags:["State Management"],repositoryUrl:"https://github.com/kitze/react-hanger",importStatement:'import { useNumber } from "react-hanger";'},{name:"useInput",tags:["State Management"],repositoryUrl:"https://github.com/kitze/react-hanger",importStatement:'import { useInput } from "react-hanger";'},{name:"useArray",tags:["State Management"],repositoryUrl:"https://github.com/kitze/react-hanger",importStatement:'import { useArray } from "react-hanger";'},{name:"useSetState",tags:["State Management"],repositoryUrl:"https://github.com/kitze/react-hanger",importStatement:'import { useSetState } from "react-hanger";'},{name:"usePrevious",tags:["State Management"],repositoryUrl:"https://github.com/kitze/react-hanger",importStatement:'import { usePrevious } from "react-hanger";'},{name:"useToggle",tags:["State Management"],repositoryUrl:"https://github.com/kalcifer/react-powerhooks",importStatement:'import { useToggle } from "react-powerhooks";'},{name:"useActive",tags:[],repositoryUrl:"https://github.com/kalcifer/react-powerhooks",importStatement:'import { useActive } from "react-powerhooks";'},{name:"useInterval",tags:["Timing"],repositoryUrl:"https://github.com/kalcifer/react-powerhooks",importStatement:'import { useInterval } from "react-powerhooks";'},{name:"useBattery",tags:["Sensor","Browser-API","Battery"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useBattery } from "react-use";'},{name:"useGeolocation",tags:["Sensor","Browser-API","Geo","Location"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useGeolocation } from "react-use";'},{name:"useHover",tags:["Sensor","UI","Mouse","Hover"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useHover } from "react-use";'},{name:"useIdle",tags:["Sensor","Browser-API","UI"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useIdle } from "react-use";'},{name:"useLocation",tags:["Sensor","Browser-API","Location"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useLocation } from "react-use";'},{name:"useMedia",tags:["Sensor","Browser-API","Media-Query","CSS"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useMedia } from "react-use";'},{name:"useMediaDevices",tags:["Sensor","Browser-API","Devices"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useMediaDevices } from "react-use";'},{name:"useMotion",tags:["Sensor","Browser-API","Motion"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useMotion } from "react-use";'},{name:"useNetwork",tags:["Sensor","Browser-API","Network"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useNetwork } from "react-use";'},{name:"useOrientation",tags:["Sensor","Browser-API","Orientation"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useOrientation } from "react-use";'},{name:"useSize",tags:["Sensor","UI","Size"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useSize } from "react-use";'},{name:"useWindowSize",tags:["Sensor","Browser-API","UI","Window","Size"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useWindowSize } from "react-use";'},{name:"useAudio",tags:["UI","Audio"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useAudio } from "react-use";'},{name:"useSpeech",tags:["UI","Audio","Speech"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useSpeech } from "react-use";'},{name:"useRaf",tags:["Animations","requestAnimationFrame","Rendering"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useRaf } from "react-use";'},{name:"useSpring",tags:["Animations","Spring","Tween"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useSpring } from "react-use";'},{name:"useTimeout",tags:["Animations","Timeout"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useTimeout } from "react-use";'},{name:"useTween",tags:["Animations","Tween"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useTween } from "react-use";'},{name:"useAsync",tags:["Side-effect","Async"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useAsync } from "react-use";'},{name:"useCss",tags:["Side-effect","UI","CSS"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useCss } from "react-use";'},{name:"useFavicon",tags:["Side-effect","Favicon"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useFavicon } from "react-use";'},{name:"useTitle",tags:["Side-effect","Title"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useTitle } from "react-use";'},{name:"useLifecycles",tags:["Lifecycles"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useLifecycles } from "react-use";'},{name:"useLogger",tags:["Lifecycles"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useLogger } from "react-use";'},{name:"useMount",tags:["Lifecycles"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useMount } from "react-use";'},{name:"useUnmount",tags:["Lifecycles"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useUnmount } from "react-use";'},{name:"useSetState",tags:["State"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useSetState } from "react-use";'},{name:"useToggle",tags:["State"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useToggle } from "react-use";'},{name:"useCounter",tags:["State"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useCounter } from "react-use";'},{name:"useList",tags:["State"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useList } from "react-use";'},{name:"useMap",tags:["State"],repositoryUrl:"https://github.com/streamich/react-use",importStatement:'import { useMap } from "react-use";'},{name:"useCallbag",tags:["Streams"],repositoryUrl:"https://github.com/Andarist/use-callbag",importStatement:'import useCallbag from "use-callbag";'},{name:"createSelector",tags:[],repositoryUrl:"https://github.com/Andarist/react-selector-hooks",importStatement:'import { createSelector } from "react-selector-hooks";'},{name:"createStateSelector",tags:[],repositoryUrl:"https://github.com/Andarist/react-selector-hooks",importStatement:'import { createStateSelector } from "react-selector-hooks";'},{name:"createStructuredSelector",tags:[],repositoryUrl:"https://github.com/Andarist/react-selector-hooks",importStatement:'import { createStructuredSelector } from "react-selector-hooks";'},{name:"react-intersection-visible-hook",tags:["Viewport","Visible"],repositoryUrl:"https://github.com/AvraamMavridis/react-intersection-visible-hook",importStatement:'import useIntersectionVisible from "react-intersection-visible-hook";'},{name:"react-window-communication-hook",tags:["Communication"],repositoryUrl:"https://github.com/AvraamMavridis/react-window-communication-hook",importStatement:'import useBrowserContextCommunication from "react-window-communication-hook";'},{name:"useSubstate",tags:["State Management"],repositoryUrl:"https://github.com/philipp-spiess/use-substate",importStatement:'import { SubstateProvider, useSubstate } from "use-substate";'},{name:"useOnClickOutside",tags:["Sensor","Click","UI","Mouse","Touch"],repositoryUrl:"https://github.com/Andarist/use-onclickoutside",importStatement:'import useOnClickOutside from "use-onclickoutside";'},{name:"usePrevious",tags:[],repositoryUrl:"https://github.com/Andarist/use-previous",importStatement:'import usePrevious from "use-previous";'},{name:"react-hooks-global-state",tags:["State Management"],repositoryUrl:"https://github.com/dai-shi/react-hooks-global-state",importStatement:'import { createGlobalState } from "react-hooks-global-state";'},{name:"promise-hook",tags:["Network"],repositoryUrl:"https://github.com/aiven715/promise-hook",importStatement:'import { usePromise } from "promise-hook";'},{name:"useDomLocation",tags:["UI","Location"],repositoryUrl:"https://github.com/forthealllight/dom-location",importStatement:'import useDomLocation from "dom-location";'},{name:"useGraphqlRequest",tags:["graphQL","Network"],repositoryUrl:"https://github.com/capaj/use-graphql-request",importStatement:'import { setupClient } from "use-graphql-request"'},{name:"useObjectState",tags:["State Management"],repositoryUrl:"https://github.com/thers/use-object-state",importStatement:'import { useObjectState } from "use-object-state"'},{name:"useApolloClient",tags:["graphQL","Network","State Management"],repositoryUrl:"https://github.com/trojanowski/react-apollo-hooks",importStatement:'import { useApolloClient } from "react-apollo-hooks"'},{name:"useApolloMutation",tags:["graphQL","Network","State Management"],repositoryUrl:"https://github.com/trojanowski/react-apollo-hooks",importStatement:'import { useApolloMutation } from "react-apollo-hooks"'},{name:"useApolloQuery",tags:["graphQL","Network","State Management"],repositoryUrl:"https://github.com/trojanowski/react-apollo-hooks",importStatement:'import { useApolloQuery } from "react-apollo-hooks"'},{name:"useMemento",tags:["State Management","Debugging","Time Travel"],repositoryUrl:"https://github.com/chasestarr/react-memento",importStatement:'import { useMemento } from "react-memento"'},{name:"useWait",tags:["Loading","Waiting","Loader Management","UI"],repositoryUrl:"https://github.com/f/use-wait",importStatement:'import { Waiter, useWait } from "useWait"'},{name:"useIdb",tags:["IndexDB","Local State","State Management"],repositoryUrl:"https://github.com/kigiri/react-use-idb",importStatement:'import { useIdb } from "react-use-idb"'},{name:"useKey",tags:["Browser-API","Devices"],repositoryUrl:"https://github.com/haldarmahesh/use-key-hook",importStatement:'import useKey from "use-key-hook";'}]}}]);
//# sourceMappingURL=component---src-pages-index-js-4e1911e17e6586bac4eb.js.map