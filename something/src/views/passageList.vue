<template>
<div>
<router-link v-for="(item,index) in list" :key="index" :to="item.path" class="link">
{{index+1}}、{{item.title}}
</router-link>
</div>
</template>

<script>
export default{
    data(){
        return{
            list:[{
                title:'关于vue组件import css 文件报错',
                path:{
                    name:'passage',
                    params:{
                        title:'关于vue组件import css 文件报错',
                        answer:'<p>cnpm install style-loader css-loader --save;</p>webpack.config.js配置如下',
                        img:[
                            '/static/css-loader.png'
                        ]
                    }
                }
            },{
                title:'...扩展运算符不能编译',
                path:{
                    name:'passage',
                    params:{
                        title:'...扩展运算符不能编译',
                        answer:'cnpm install babel-preset-stage-2 --save',
                        img:[
                            '/static/babel-stage-2.png'
                        ],
                        link:'http://www.hgcv5.com/2016/12/01/2016/2016-12-01-vue%E4%B8%AD%E4%BD%BF%E7%94%A8es6%E8%BD%AC%E6%8D%A2%E5%B7%A5%E5%85%B7babel/'
                    }
                }
            },{
                title:'scroll隐藏滚动条',
                path:{
                    name:'passage',
                    params:{
                        title:'scroll隐藏滚动条',
                        answer:'<p>大体思路是在div外面再套一个div。这个div设置overflow:hidden。</p><p>然后再设置外层div的width小于内层div的width。</p>',
                        link:'http://blog.csdn.net/liusaint1992/article/details/51277751'
                    }
                }
            },{
                title:'webpack',
                path:{
                    name:'passage',
                    params:{
                        title:'webpack',
                        answer:'<a href="https://blog.guowenfh.com/2016/03/24/vue-webpack-01-base/">webpack入坑之旅</a>',
                        link:'http://www.cnblogs.com/QxQstar/p/5961387.html'
                    }
                }
            }]
        }
    }
}
</script>

<style>
.link{
    display:block;
    padding:10px;
    color:#444;
    text-decoration:none;
}
</style>