!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.goober={})}(this,function(e){var t={data:""},r=function(e){try{var r=e?e.querySelector("#_goober"):self._goober;return r||((r=(e||document.head).appendChild(document.createElement("style"))).innerHTML=" ",r.id="_goober"),r.firstChild}catch(e){}return t},n=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,a=/\/\*.*?\*\/|\s{2,}|\n/gm,o=function(e,t,r){var n="",a="",c="";for(var i in e){var u=e[i];if("object"==typeof u){var s=t+" "+i;/&/g.test(i)&&(s=i.replace(/&/g,t)),"@"==i[0]&&(s=t,"f"==i[1]&&(s=i)),/@k/.test(i)?a+=i+"{"+o(u,"","")+"}":a+=o(u,s,s==t?i:r||"")}else/^@i/.test(i)?n=i+" "+u+";":c+=o.p?o.p(i.replace(/[A-Z]/g,"-$&").toLowerCase(),u):i.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+u+";"}if(c[0]){var f=t+"{"+c+"}";return r?a+r+"{"+f+"}":n+f+a}return n+a},c={},i=function(e,t,r,i){var u=e.toLowerCase?e:function e(t){var r="";for(var n in t)"object"==typeof val?r+=n+e(t[n]):r+=n+t[n];return r}(e),s=c[u]||(c[u]=".go"+u.split("").reduce(function(e,t){return 101*e+t.charCodeAt(0)>>>0},11));return function(e,t,r){t.data.indexOf(e)<0&&(t.data=r?e+t.data:t.data+e)}(c[s]||(c[s]=o(e[0]?function(e){for(var t,r=[{}];t=n.exec(e.replace(a,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]}(e):e,r?"":s)),t,i),s.slice(1)},u=function(e,t,r){return e.reduce(function(e,n,a){var o=t[a];if(o&&o.call){var c=o(r),i=c&&c.props&&c.props.className||/^go/.test(c)&&c;o=i?"."+i:c&&c.props?"":c}return e+n+(null==o?"":o)},"")};function s(e){var t=this||{},n=e.call?e(t.p):e;return i(n.map?u(n,[].slice.call(arguments,1),t.p):n,r(t.target),t.g,t.o)}var f,p=s.bind({g:1});e.styled=function(e){var t=this||{};return function(){var r=arguments;return function(n,a){var o=t.p=Object.assign({theme:useTheme&&useTheme()},n),c=o.className;return t.o=/\s*go[0-9]+/g.test(c),o.className=s.apply(t,r)+(c?" "+c:""),f(e,o)}}},e.setup=function(e,t){o.p=t,f=e},e.extractCss=function(e){var t=r(e),n=t.data;return t.data="",n},e.css=s,e.glob=p});
