var r={data:""},t=function(t){try{var e=t?t.querySelector("#_goober"):self._goober;return e||((e=(t||document.head).appendChild(document.createElement("style"))).innerHTML=" ",e.id="_goober"),e.firstChild}catch(r){}return r},e=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,a=/\/\*.*?\*\/|\s{2,}|\n/gm,n=function(r,t,e){var a="",o="",s="";for(var c in r){var u=r[c];if("object"==typeof u){var i=t+" "+c;/&/g.test(c)&&(i=c.replace(/&/g,t)),"@"==c[0]&&(i=t,"f"==c[1]&&(i=c)),/@k/.test(c)?o+=c+"{"+n(u,"","")+"}":o+=n(u,i,i==t?c:e||"")}else/^@i/.test(c)?a=c+" "+u+";":s+=n.p?n.p(c.replace(/[A-Z]/g,"-$&").toLowerCase(),u):c.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+u+";"}if(s[0]){var p=t+"{"+s+"}";return e?o+e+"{"+p+"}":a+p+o}return a+o},o={},s=function(r,t,s,c){var u=r.toLowerCase?r:function r(t){var e="";for(var a in t)"object"==typeof val?e+=a+r(t[a]):e+=a+t[a];return e}(r),i=o[u]||(o[u]=".go"+u.split("").reduce(function(r,t){return 101*r+t.charCodeAt(0)>>>0},11));return function(r,t,e){t.data.indexOf(r)<0&&(t.data=e?r+t.data:t.data+r)}(o[i]||(o[i]=n(r[0]?function(r){for(var t,n=[{}];t=e.exec(r.replace(a,""));)t[4]&&n.shift(),t[3]?n.unshift(n[0][t[3]]=n[0][t[3]]||{}):t[4]||(n[0][t[1]]=t[2]);return n[0]}(r):r,s?"":i)),t,c),i.slice(1)},c=function(r,t,e){return r.reduce(function(r,a,n){var o=t[n];if(o&&o.call){var s=o(e),c=s&&s.props&&s.props.className||/^go/.test(s)&&s;o=c?"."+c:s&&s.props?"":s}return r+a+(null==o?"":o)},"")};function u(r){var e=this||{},a=r.call?r(e.p):r;return s(a.map?c(a,[].slice.call(arguments,1),e.p):a,t(e.target),e.g,e.o)}var i,p=u.bind({g:1});exports.styled=function(r){var t=this||{};return function(){var e=arguments;return function(a,n){var o=t.p=Object.assign(a),s=o.className;return t.o=/\s*go[0-9]+/g.test(s),o.className=u.apply(t,e)+(s?" "+s:""),i(r,o)}}},exports.setup=function(r,t){n.p=t,i=r},exports.extractCss=function(r){var e=t(r),a=e.data;return e.data="",a},exports.css=u,exports.glob=p;
