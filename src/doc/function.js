const children = [{
        base: {
            name: "objType",
            title: "获取对象类型",
            desc: "获取对象类型",
            parmInfo: "(object)"
        },
        demo: [
            [], {},
            2, "abc"
        ]
    },
    {
        base: {
            name: "byteSize",
            title: "获取字节",
            desc: "获取字节长度",
            parmInfo: "(string)"
        },
        demo: [{
                parms: [
                    ["微笑"]
                ],
                desc: ["\"微笑\""],
            },
            {
                parms: [
                    ["wu de"]
                ],
                desc: ["\"wu de\"]"],

            }
        ]
    },
    {
        base: {
            name: "splitLines",
            title: "换行字符串转数组",
            desc: "正则表达式匹配换行符并创建一个数组",
            parmInfo: "(string)"
        },
        demo: [{
            parms: ["wu\nde\nha\nqiu"],
            desc: ["\"wu\\nde\\nha\\nqiu\""]
        }]
    },
    {
        base: {
            name: "removeHTMLTags",
            title: "移除html标签",
            desc: "删除字符串中的html标签",
            parmInfo: "(string)"
        },
        demo: [{
            parms: ["<div v-for='(group, index) in listDoc' :key='index'>123</div>"],
            desc: ["\"<div v-for='(group, index) in listDoc' :key='index'>123</div>\""]
        }]
    },
    // {
    //     base: {
    //         name: "getType",
    //         title: "获取对象类型",
    //         desc: "获取当前对象类型",
    //         parmInfo: "(any)"
    //     },
    //     demo: [null, undefined, () => {}, {},
    //         []
    //     ]
    // },
    {
        base: {
            name: "escapeHTML",
            title: "转义html",
            desc: "将html标签进行转移",
            parmInfo: "(string)"
        },
        demo: [{
            parms: ["<div v-for='(group, index) in listDoc' :key='index'>123</div>"],
            desc: ["\"<div v-for='(group, index) in listDoc' :key='index'>123</div>\""]
        }]
    },
    {
        base: {
            name: "formatNumber",
            title: "格式化数值",
            desc: "将数字进行分割",
            parmInfo: "(num, cnt =3, split = ',')"
        },
        demo: [{
            parms: [123456789],
            desc: [`123456789`]
        }, {
            parms: [123456789, 4, '-'],
            desc: [`123456789,4,'-'`]
        }]
    },
    {
        base: {
            name: "formatString",
            title: "格式化字符串",
            desc: "将字符串进行分割",
            parmInfo: "(string, cnt =3, split = ',')"
        },
        demo: [{
            parms: ["absdfsfsdfasdfassad"],
            desc: [`"absdfsfsdfasdfassad"`]
        }, {
            parms: ["absdfsfsdfasdfassad", 4, "-"],
            desc: [`"absdfsfsdfasdfassad", 4, "-"`]
        }]
    },
    {
        base: {
            name: "throttle",
            title: "节流",
            desc: `节流操作使回调函数在每隔一段时间定期执行一次，时间间隔内再触发，不会重新执行。
            用例:
            function test(val) {
                console.log("test throttle" + val);
            }
            
            var myThrottle = throttle(test, 1000);

            myThrottle("测试传参"); //执行
            myThrottle("测试传参"); //节流时间内不执行

            `,
            parmInfo: "(func, wait = 100)",
            showDemo: false
        },
        demo: []
    },
    {
        base: {
            name: "debounce",
            title: "防抖",
            desc: `短时间内多次触发一个函数,只执行最后一次,或在开始时执行
            用例:
            function test(val) {
                console.log("test throttle" + val);
            }
            
            var myDebounce = debounce(test, 1000);

            myDebounce("测试传参"); //防抖未执行
            myDebounce("测试传参"); //延迟1秒执

            `,
            parmInfo: "(func, wait = 100)",
            showDemo: false
        },
        demo: []
    },
    {
        base: {
            name: "urlParam",
            title: "获取URL参数",
            desc: `获取URL参数
            参数说明:

            nullDefault = null: 参数不存在默认返回null,可自定义修改不存在默认参数

            url = window.location.href:默认当前URL,也可以手动传入url http://test.com?a=123&b=234

            `,
            parmInfo: "(param, nullDefault = null,url = window.location.href)",
            showDemo: true
        },
        demo: [{
            parms: ["a", null, "http://test.com?a=123&b=234"],
            desc: [`"a",null,"http://test.com?a=123&b=234"`]
        }, {
            parms: ["c", "测试空", "http://test.com?a=123&b=234"],
            desc: [`"c","测试空","http://test.com?a=123&b=234"`]
        }, {
            parms: ["c"],
            desc: [`"c"`]
        }]
    },
    {
        base: {
            name: "randomNum",
            title: "获取随机数",
            desc: "获取随机数",
            parmInfo: "(min, max)"
        },
        demo: [{
            parms: [1, 5],
            desc: [`1,5`]
        }]
    },
    {
        base: {
            name: "randomCode",
            title: "获取随机码",
            desc: "获取指定位数的随机码（数字+字母（大写））,默认4位",
            parmInfo: "(codeLength = 4)"
        },
        demo: [4, 6]
    },
    {
        base: {
            name: "randomIP",
            title: "生成随机ip",
            desc: "生成随机ip",
            parmInfo: "()",
            showDemo: false
        },

        demo: [
            ""
        ]
    },
    {
        base: {
            name: "capitalize",
            title: "首字母大写",
            desc: "首字母大写",
            parmInfo: "(string)"
        },
        demo: ["hello", "hello moon"]
    },
    {
        base: {
            name: "capitalizeEveryWord",
            title: "每个首字母都大写",
            desc: "每个首字母都大写",
            parmInfo: "(string)"
        },
        demo: ["hello 哈哈 moon", "hello moon"]
    },
    {
        base: {
            name: "decapitalize",
            title: "首字母小写",
            desc: "首字母小写",
            parmInfo: "(string)"
        },
        demo: ["Hello", "Hello Moon"]
    },
    {
        base: {
            name: "decapitalizeEveryWord",
            title: "每个首字母都小写",
            desc: "每个首字母都小写",
            parmInfo: "(string)"
        },
        demo: ["Hello 哈哈 Moon", "Hello Moon"]
    },
    {
        base: {
            name: "camelCase",
            title: "转为驼峰命名",
            desc: "转为驼峰命名,以下划线和中间分隔先进行转换处理",
            parmInfo: "(string)"
        },
        demo: ["my-name-desc", "Hello-Ni_Hao"]
    },
    {
        base: {
            name: "hyphenate",
            title: "驼峰转为连字符",
            desc: "驼峰转为连字符,全都为小写",
            parmInfo: "(string)"
        },
        demo: ["myNameZhangSan"]
    },
    {
        base: {
            name: "formatPhone",
            title: "格式化电话号码",
            desc: "电话保留前三位,后四位,中间默认变为*号",
            parmInfo: "(phone, split = '****')"
        },
        demo: [{
                parms: ["18312349876"],
                desc: [`"18312349876"`]
            },
            {
                parms: ["18312349876", "^^^^"],
                desc: [`"18312349876","^^^^"`]
            }
        ]
    },
    {
        base: {
            name: "bytesToSize",
            title: "比特单位转换",
            desc: `比特单位转换
    单位:B, KB, MB, GB, TB, PB, EB, ZB, YB
            `,
            parmInfo: "(bytes)"
        },
        demo: [0, 15, 2323, 5678999]
    },
    {
        base: {
            name: "base64Encode",
            title: "base64编码",
            desc: "base64编码",
            parmInfo: "(string)"
        },
        demo: ["Hello Moon"]
    },
    {
        base: {
            name: "base64Decode",
            title: "base64解码",
            desc: "base64解码",
            parmInfo: "(string)"
        },
        demo: ["SGVsbG8gTW9vbg=="]
    },
    {
        base: {
            name: "md5",
            title: "md5加密",
            desc: "md5加密",
            parmInfo: "(string)"
        },
        demo: ["qwer123"]
    },
    {
        base: {
            name: "getUUID",
            title: "获取uuid",
            desc: "获取uuid",
            parmInfo: "(spit = '-')"
        },
        demo: [
            "-", "(*)"
        ]
    },
    {
        base: {
            name: "deepClone",
            title: "深度克隆对象",
            desc: `深度克隆对象
            支持正则克隆对象,当前页面测试正则因JSON.stringify转换正则无法正常显示,无法测试
            `,
            parmInfo: "(object)"
        },
        demo: [{
            parms: [{
                name: "张三",
                age: 12,
                hobby: ["打篮球", "吹牛"]

            }],
            desc: [`{
                name: "张三",
                age: 12,
                hobby: ["打篮球", "吹牛"]
            }`]
        }]
    },
    {
        base: {
            name: "splitPath",
            title: "分割路径",
            desc: `分割路径`,
            parmInfo: "(path)"
        },
        demo: ["D:\\Downloads\\src\\chibang.wav", "/Downloads/src/chibang.wav"]
    }
]
const docData = {
    title: {
        label: "函数",
        value: "function",
        expand: true,
        testValue: "",
        testResult: "",
        children: []
    },
    children: children
}

export default docData;