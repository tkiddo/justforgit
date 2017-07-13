<template>
    <div>
        <el-button @click="test">test</el-button>
        <el-button @click="stack">stack</el-button>
        <el-button @click="getApi">getApi</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        test() {
            // let {name,age} = {name:'king',age:12};

            // var {name, child: {age}} = {name: "Bob", child: {age: 12}};
            var students = [
                { name: "Bob" },
                { name: "Lily" }
            ]

            for (var { name } of students) {     //直接取出name属性
                console.log(name);
            }
            // console.log(age);
        },
        stack() {
            function Stack() {
                let items = [];
                this.push = function (el) {
                    items.push(el);
                };
                this.pop = function () {
                    return items.pop();
                };
                this.peek = function () {
                    return items[items.length - 1];
                };
                this.isEmpty = function () {
                    return items.length == 0;
                };
                this.size = function () {
                    return items.length;
                };
                this.clear = function () {
                    items = [];
                };
                this.print = function () {
                    console.log(items)
                }
            }

            let stack = new Stack();
            console.log(stack.isEmpty());
            stack.push(9);
            stack.push(45);
            stack.pop();
            stack.print();
        },
        queue() {
            function Queue() {
                let items = [];
                this.enqueue = function (element) {
                    items.push(element);
                };
                this.dequeue = function () {
                    return items.shift();
                };
                this.front = function () {
                    return items[0];
                };
                this.isEmpty = function () {
                    return items.length == 0;
                };
                this.size = function () {
                    return items.length;
                };
                this.print = function () {
                    console.log(items.toString());
                };
            }
        },
        getApi(){
           this.$http.get("http://localhost:56957/api/Products/GetProduct?id=2").then(
               (response)=>{
                   console.log(response)
               },(err)=>{
                   console.log(err);
               }
           )
        }
    }
}
</script>