<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="ID">
        <el-input v-model="form.ID" />
      </el-form-item>
      <el-form-item label="Phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="Old Password">
        <el-input v-model="form.oldPassword" />
      </el-form-item>
      <el-form-item label="New Password">
        <el-input v-model="form.newPassword" />
      </el-form-item>
      <el-form-item label="Account Status">
        <el-input v-model="form.accountStatus" />
      </el-form-item>
      <el-form-item>
        <el-button />
      </el-form-item>
      <el-form-item label="Date Created">
        <el-input v-model="form.accountCreated" />
      </el-form-item>
      <el-form-item label="Work No.">
        <el-input v-model="form.workNo" />
      </el-form-item>
      <el-form-item label="Authority Level">
        <el-input v-model="form.authLevel" />
      </el-form-item>
      <el-form-item>
        <el-button />
        <el-button />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: 'zs',
        ID: '12345',
        phone: '18900000000',
        oldPassword: '',
        newPassword: '',
        accountStatus: 'Frozen',
        accountCreated: '2020-06-10',
        workNo: '9527',
        authLevel: 'Top'
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
