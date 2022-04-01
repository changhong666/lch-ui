// 整个包的入口
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
// 没写完
import Icon from './icon.vue'
import Tag from './tag'
// 没写完
import './fonts/font.scss'

import Toast from './toastPlugin'
import Popover from './popover'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'

var components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem,
  Icon,
  Tag,
  Toast,
  Popover,
  Row,
  Col,
  Layout,
  Header,
  Content,
  Footer,
  Sider
]

const install = function (Vue, options) {
  if (options && options.components) {
    components = options.components
  }
  components.forEach(item => {
    // 往全局注册组件
    Vue.component(item.name, item)
    if (item === Toast) {
      Vue.use(Toast)
    }
  })
}

// script直接引用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export {
//   Button,
//   Dialog,
//   Input,
//   Checkbox,
//   Radio,
//   RadioGroup,
//   Switch,
//   CheckboxGroup,
//   Form,
//   FormItem,
//   Icon,
//   Tag,
//   Toast,
//   Popover,
//   Row,
//   Col,
//   Layout,
//   Header,
//   Content,
//   Footer,
//   Sider
// }
export default {
  install
}
