var e={data:""},t=function(t){try{var r=t?t.querySelector("#_goober"):self._goober;return r||((r=(t||document.head).appendChild(document.createElement("style"))).innerHTML=" ",r.id="_goober"),r.firstChild}catch(e){}return e},r=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,a=/\/\*.*?\*\/|\s{2,}|\n/gm,n=function(e,t,r){var a="",o="",s="";for(var c in e){var i=e[c];if("object"==typeof i){var u=t+" "+c;/&/g.test(c)&&(u=c.replace(/&/g,t)),"@"==c[0]&&(u=t,"f"==c[1]&&(u=c)),/@k/.test(c)?o+=c+"{"+n(i,"","")+"}":o+=n(i,u,u==t?c:r||"")}else/^@i/.test(c)?a=c+" "+i+";":s+=n.p?n.p(c.replace(/[A-Z]/g,"-$&").toLowerCase(),i):c.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+i+";"}if(s[0]){var p=t+"{"+s+"}";return r?o+r+"{"+p+"}":a+p+o}return a+o},o={},s=function(e,t,s,c){var i=e.toLowerCase?e:function e(t){var r="";for(var a in t)"object"==typeof val?r+=a+e(t[a]):r+=a+t[a];return r}(e),u=o[i]||(o[i]=".go"+i.split("").reduce(function(e,t){return 101*e+t.charCodeAt(0)>>>0},11));return function(e,t,r){t.data.indexOf(e)<0&&(t.data=r?e+t.data:t.data+e)}(o[u]||(o[u]=n(e[0]?function(e){for(var t,n=[{}];t=r.exec(e.replace(a,""));)t[4]&&n.shift(),t[3]?n.unshift(n[0][t[3]]=n[0][t[3]]||{}):t[4]||(n[0][t[1]]=t[2]);return n[0]}(e):e,s?"":u)),t,c),u.slice(1)},c=function(e,t,r){return e.reduce(function(e,a,n){var o=t[n];if(o&&o.call){var s=o(r),c=s&&s.props&&s.props.className||/^go/.test(s)&&s;o=c?"."+c:s&&s.props?"":s}return e+a+(null==o?"":o)},"")};function i(e){var r=this||{},a=e.call?e(r.p):e;return s(a.map?c(a,[].slice.call(arguments,1),r.p):a,t(r.target),r.g,r.o)}var u,p=i.bind({g:1});exports.styled=function(e,t){var r=this||{};return function(){var a=arguments;function n(n,o){var s=r.p=Object.assign({},n),c=s.className;return r.o=/\s*go[0-9]+/g.test(c),s.className=i.apply(r,a)+(c?" "+c:""),t&&o&&(s.ref=o),u(e,s)}return"development"===process.env.NODE_ENV&&(n.displayName="Styled("+(n._t=e._t||e.displayName||e)+")"),t?t(n):n}},exports.setup=function(e,t){n.p=t,u=e},exports.extractCss=function(e){var r=t(e),a=r.data;return r.data="",a},exports.css=i,exports.glob=p;
