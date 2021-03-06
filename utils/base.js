/**
 * 常规函数
 */

/**
 * 判断数据是否为指定的数据类型，如果是则返回true。
 * @param {*} type 源对象类型
 * @param {*} val  目标对象
 */
export const is = (type, val) => ![, null].includes(val) && val.constructor === type;

/**
 * 判断当前变量的值是否为 null 或 undefined
 * @param {*} val 
 */
export const isNil = val => val === undefined || val === null;

/**
 * 是否为null
 * @param {*} val 
 */
export const isNull = val => val === null;

/**
 * 是否数值类型
 * @param {*} val 
 */
export const isNumber = val => !isNaN(parseFloat(val)) && isFinite(val);

/**
 * 是否数组类型
 * @param {*} obj 
 */
export const isArray = obj => Array.isArray(obj);


/**
 * 是否正整数
 * @param {*} val 
 */
export const isPositiveNum = val => /^[1-9]\d*$/.test(val);

/**
 * 是否负整数
 * @param {*}} val 
 */
export const isNegativeNum = val => /^-[1-9]\d*$/.test(val);

/**
 * 匹配整数
 * @param {*} val 
 */
export const isInteger = val => /^(-|\+)?\d+$/.test(val);

/**
 * 用于判断程序运行环境是否在浏览器，这有助于避免在node环境运行前端模块时出错。
 */
export const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/**
 * 是否质数
 * @param {*} num 
 */
export const isPrime = num => (num > 1) && Array(Math.floor(Math.sqrt(num)) - 1).fill(0).map((_, i) => i + 2).every(i => num % i !== 0);

/**
 * 检查字符串是否仅包含ASCII字符
 * @param {*} str 
 */
export const isAscii = str => /^[\x00-\x7F]+$/.test(str);

/**
 * 检查字符串是否包含空格
 * @param {*} str 
 */
export const isHasWhitespace = str => /\s/.test(str);

/**
 * 检查字符串是否为十六进制颜色
 * @param {*} color 
 */
export const isHexColor = color => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);

/**
 * 检查字符串是否为十六进制数字
 * @param {*} str 
 */
export const isHexadecimal = str => /^[A-F0-9]+$/i.test(str);

/**
 * 检查值是否为普通对象
 * @param {*} v 
 */
export const isPlainObject = v => (!!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype));

/**
 * 是否正则表达式
 * @param {*} value 
 */
export const isRegExp = value => Object.prototype.toString.call(value) === '[object RegExp]';

/**
 * 检查值是否为字符串
 * @param {*} value 
 */
export const isString = value => Object.prototype.toString.call(value) === '[object String]';

/**
 * 是否对象
 * @param {*} v 
 */
export const isObject = v => (v !== null && typeof v === 'object');

/**
 * 是否是函数
 * @param {*} v 
 */
export const isFunction = v => ['[object Function]', '[object GeneratorFunction]', '[object AsyncFunction]', '[object Promise]'].includes(Object.prototype.toString.call(v));

/**
 * 是否是微信
 * @param {*} value 
 */
export const isWeChat = value => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);

/**
 * 验证中文姓名
 * @param {string} value 
 */
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);


/**
 * 验证英文姓名
 *@param { string } value
 */
export const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);

/**
 * 验证子网掩码
 * @param {*} value 
 */
export const isSubnetMask = value => /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(value);

/**
 * 是否手机号码
 * @param {*} val 
 */
export const isPhone = (val) => /^1[3456789]\d{9}$/.test(val);

/**
 * 是否邮箱
 * @param {*} val 
 */
export const isEmail = (val) => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val);

/**
 * 是否html标签
 * @param {*} str 
 */
let cacheHTMLTag = [];
export const isHTMLTag = (str) => {
    if (cacheHTMLTag.length == 0) {
        cacheHTMLTag = `html,body,base,head,link,meta,style,title, 
        address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section, 
        div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul, 
        a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby, 
        s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video, 
        embed,object,param,source,canvas,script,noscript,del,ins, 
        caption,col,colgroup,table,thead,tbody,td,th,tr, 
        button,datalist,fieldset,form,input,label,legend,meter,optgroup,option, 
        output,progress,select,textarea, 
        details,dialog,menu,menuitem,summary, 
        content,element,shadow,template,blockquote,iframe,tfoot`.replace(/\s+/g, '').split(",");
    }
    return cacheHTMLTag.includes(str.trim());
}
/**
 * 是否svg标签
 * @param {*} str 
 */
let cacheSvgTag = [];
export const isSvgTag = (str) => {
    if (cacheSvgTag.length == 0) {
        cacheSvgTag = `svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face, 
        foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern, 
        polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view`.replace(/\s+/g, '').split(",");
    }
    return cacheSvgTag.includes(str.trim());
}

/**
 * 是否日期
 * @param {*} val 
 */
export const isDate = (val) => Object.prototype.toString.call(val) === '[object Date]';;