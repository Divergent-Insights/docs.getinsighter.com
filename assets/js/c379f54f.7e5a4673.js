"use strict";(self.webpackChunkdocs_getinsighter_com=self.webpackChunkdocs_getinsighter_com||[]).push([[1791],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2722:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],a={sidebar_position:1},l="Manage Docs Versions",c={unversionedId:"user-settings/Profile",id:"user-settings/Profile",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/user-settings/Profile.md",sourceDirName:"user-settings",slug:"/user-settings/Profile",permalink:"/docs/user-settings/Profile",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-settings/Profile.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/organization-settings/Settings"},next:{title:"Translate your site",permalink:"/docs/user-settings/Organizations"}},u={},d=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],p={toc:d};function f(e){var n=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,i.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,i.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,i.kt)("p",null,"Release a version 1.0 of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,i.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,i.kt)("p",null,"Your docs now have 2 versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,i.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,i.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,i.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,i.kt)("p",null,"Modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,i.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docs Version Dropdown",src:t(7089).Z,width:"494",height:"276"})),(0,i.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,i.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}f.isMDXComponent=!0},7089:function(e,n,t){n.Z=t.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);