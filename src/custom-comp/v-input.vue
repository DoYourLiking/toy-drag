<template>
    <input v-model="defaultValue" placeholder="请输入" />
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

<style lang="scss" scoped>
input{
    width: 100%;
    height: 100%;
    border: none;
}
</style>>

