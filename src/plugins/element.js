import Vue from "vue";
import { Button, 
    Container,
    Form, 
    FormItem, 
    Input, 
    Message, 
    Menu, 
    Submenu,
    Row,
    Col,
    MenuItem, 
    MenuItemGroup, 
    TableColumn
 } from "element-ui"

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(TableColumn)
Vue.use(Container)
Vue.use(Row);
Vue.use(Submenu)
Vue.use(Col);
Vue.prototype.$message = Message;
