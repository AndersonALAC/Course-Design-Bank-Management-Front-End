<template>
    <div class="sidebar">
        <el-menu :show-timeout="200" :default-active="$route.path" :collapse="isCollapse"
            mode="vertical" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF" router>
             <template v-for="(item,index) in routes" v-if="!item.hidden" >
                 <!-- 一级菜单 -->
                <el-menu-item v-if="!item.leaf && !item.leafThree && item.children.length>0" :index="item.path"> 
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
                <!-- 二级菜单 -->
                <el-submenu :index="index+''" v-if="item.leaf">
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden"  :key="child.path">
                        <i :class="child.meta.icon"></i>
                        <span>{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 三级菜单 -->
                <el-submenu :index="index+''" v-if="!item.leaf && item.leafThree">
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                         
                    <el-submenu v-for="child in item.children" :index="child.path" :key="child.path" v-if="child.leaf">
                        <template slot="title">
                             <i :class="child.meta.icon"></i>
                            <span>{{child.name}}</span>
                        </template>
                        <el-menu-item v-for="childThree in child.children" :index="childThree.path" :key="childThree.path">
                            <i :class="childThree.meta.icon"></i>
                            <span>{{childThree.name}}</span>
                        </el-menu-item>   
                    </el-submenu>
                    <el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden && !child.leaf"  :key="child.path">
                        <i :class="child.meta.icon"></i>
                        <span>{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>
             </template>
       </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    computed:{
        routes() {
            return this.$router.options.routes
            console.log(routes)
        },
    },
}
</script>