/*
VUE框架
 */
import Vue from 'vue'
/*
App
 */
import App from './App'
/*
路由
 */
import router from './router'
/*
ui库
 */
import {
  Menu, Submenu, MenuItem, MenuItemGroup,
  Input, Radio, RadioGroup, RadioButton, Button, ButtonGroup,
  Table, TableColumn, Tabs, TabPane, Tag, Row, Col,
  Card, Collapse, CollapseItem, Container, Header, Aside, Main,
} from 'element-ui';
import { Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
/**
 * 图表库
 */
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
/*
vue dev时不显示生产提示
 */
Vue.config.productionTip = false;
/*
全局变量
 */
import {themColor,themBackground} from "./assets/commenVariable"
Vue.prototype.$theme = {
  color:themColor,
  background:themBackground
};
/*
render
 */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
