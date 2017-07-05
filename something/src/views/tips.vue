<template>
    <div>
        <el-button @click="test">test</el-button>
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
        }
    }
}
</script>