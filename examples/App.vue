<template>
  <!-- <div id="app">
    lch-ui
    <hr>
    <lch-button @click='(e)=>{
      handleClick(222,e)
      }'>123</lch-button>
    <lch-button type='primary'>123</lch-button>
    <lch-button type='success'>123</lch-button>
    <lch-button type='info'>plain</lch-button>
    <lch-button
      type='warning'
      disabled
    >123</lch-button>
    <lch-button
      type='danger'
      icon='lch-icon-zhinanzhen'
    >123</lch-button>
    <lch-button plain>朴素按钮</lch-button>
    <lch-button
      type='primary'
      plain
    >朴素按钮 primary</lch-button>
    <hr>

    <lch-dialog
      width='60%'
      top='100px'
      :visible.sync="visible"
    >
      <template v-slot:title>
        <h4>123</h4>
      </template>
      <div>body content</div>
      <template v-slot:footer>
        <lch-button
          type='primary'
          @click="visible = false"
        >close</lch-button>

      </template>
    </lch-dialog>
    <lch-button
      plain
      @click="showDialog"
    >show dialog</lch-button>
    <hr>
    <lch-input
      v-model="username"
      clearable
      type='password'
      show-password
      style="width:200px"
    ></lch-input>
    <lch-input
      :value="username"
      @input="(value)=>{
        username=value
      }"
    ></lch-input>
    <hr>
     <lch-switch
      v-model="isNeed"
      name='needHelp'
      active-color='red'
      inactive-color='green'
    ></lch-switch>
    <hr>
     <lch-radio
      v-model="size"
      label='1'
    >Big</lch-radio>
    <lch-radio
      v-model="size"
      label='2'
    ></lch-radio>
    <lch-radio
      v-model="size"
      label='3'
    >Small</lch-radio>
    <lch-radio-group v-model="gender">
      <lch-radio label='1'>male</lch-radio>
      <lch-radio label='0'>female</lch-radio>
    </lch-radio-group>

    <hr>

    <lch-checkbox
      v-model="checkboxActive"
      label="is-selected"
    ></lch-checkbox>

    <lch-checkbox-group v-model="fruit">
      <lch-checkbox label="apple"></lch-checkbox>
      <lch-checkbox label="orange"></lch-checkbox>
      <lch-checkbox label="banana"></lch-checkbox>
    </lch-checkbox-group>
    <hr>

     <lch-form
      :model="formModel"
      label-width="150px"
    >
      <lch-form-item label="username">
        <lch-input
          v-model="formModel.username"
          clearable
          placeholder="please input username"
        ></lch-input>
      </lch-form-item>

      <lch-form-item label="switch active">
        <lch-switch v-model="formModel.active"></lch-switch>
      </lch-form-item>
    </lch-form>
  </div> -->
  <div>
    <!-- <lch-button type='primary' @click="showDialog">111</lch-button>
    <lch-popover trigger="click" position="top">
  <div slot="content">
    这是一段内容
  </div>
  <button>点击上弹</button>
</lch-popover> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      username: '',
      isNeed: true,
      // radio
      size: '2',
      gender: '1',
      // checkbox
      checkboxActive: true,
      fruit: [
        'apple',
        'orange',
        'banana'
      ],
      // form
      formModel: {
        username: '',
        active: true
      }

    }
  },
  methods: {
    handleClick (d, e) {
      console.log(123, d, e)
    },
    showDialog () {
      // this.visible = true
      this.$toast('自定义关闭文字', {
        isCloseButton: true,
        closeButton: { text: '点击我关闭Toast' }
      })
    }

  }
}
</script>
