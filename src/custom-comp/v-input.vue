<template>
    <el-input v-model="defaultValue" placeholder="请输入"></el-input>
</template>

<script>
export default {
    props:{
        defaultValue:{
            type:String,
        },
        element:{
            type:Object
        }
    }
}
</script>

<style>

</style>