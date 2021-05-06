<!--
 * @Author: yaoyuting
 * @Date: 2021-04-18 17:03:57
 * @LastEditors: yaoyuting
 * @LastEditTime: 2021-04-18 17:09:23
 * @Descripttion: 
-->
<template>
    <div class="Apply">
        <el-form :model="applyForm" class="demo-form-inline">
          <el-form-item label="Facebook 或 微信号">
            <el-input v-model="applyForm.Facebook" ></el-input>
          </el-form-item>
          <el-form-item label="Github账号">
            <el-input v-model="applyForm.Github" ></el-input>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                applyForm: {
                    Facebook: '',
                    Github: ''
                }
            }
        },
    }
</script>

<style lang="less" scoped>

</style>