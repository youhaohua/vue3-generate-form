<template>
  <div class="home">
    <header class="form-header">
      <span>vue3-generate-form</span>
      <div>
        <el-button type="">github</el-button>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElButton } from "element-plus";
export default defineComponent({
  name: "FormContainer",
  components: {
    ElButton,
  },
});
</script>
<style lang="scss" scoped>
.form-header {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #d8dee4;
  display: flex;
  justify-content: space-between;
  span {
    color: #1e80ff;
    font-size: 16px;
    font-weight: bold;
    margin-left: 20px;
  }
}
</style>
