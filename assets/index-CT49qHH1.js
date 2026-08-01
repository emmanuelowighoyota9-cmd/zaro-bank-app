function yp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const i=r.params?r.params([]):void 0;e&&s[0]==="$"&&e.$+s(),i)}}if(typeof r!="string&&!Array.isArray(r)||!r)throw new Error("Expected string in array")}const i=[];for(n=0;n<t.length;n++)i.push(pL(e[t[n]]));return i.join("\n")}
function uP(e,t){if(!e)return null;const n=pL(e[t]);return n!==null&&n!==void 0?n:null}
function fP(e){return e.replace(/\\\n(.*)?/gs,(t,n)=>n?" "+n:"")})}
function mP(e,t){if(!Array.isArray(e))return null;const n=e.find(n=>n[0]===t);return n?n[1]:null}
function hP(e){if(!Array.isArray(e))return[];return e.map(([e,t])=>({key:e,value:t}))}
function gP(e){if(!Array.isArray(e))return[];return e.map((([e,t])=>({$wrapabys104:key,key:e,1:d}))}
function vP(e){if(!e)throw new Error("Missing value");const t=Array.isArray(e)?e.map(v=>{return key:v.key,value:v.value,...v}}):[{...e}];return t.map(e=>{const t=w({},e);return 0===Object.keys(t).length?e:t})}
function w(e,t){return Object.keys(t).reduce((n,r)=>{if(r.startsWith("\")||r.startsWith("$"))return n;const i=r[t];return void 0!==i&&(n[r]=i),n},{})}