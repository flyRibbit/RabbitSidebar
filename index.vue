<template>
  <a-menu
    theme="light"
    mode="inline"
    :default-selected-keys="defaultOpenKeys"
    @openChange="onOpenChange"
    :open-keys="openKeys"
  >
    <a-menu-item key="sub0" @click="fn">
      <router-link :to="'home'">
        <a-icon type="pie-chart" />
        <span>服务统计</span>
      </router-link>
    </a-menu-item>
    <template v-for="item in $router.options.routes[2].children">
      <template v-if="item.title">
        <a-menu-item
          :key="item.name + item.title"
          v-if="!(item.children && item.children.length)"
        >
          <router-link :to="item.path">
            <co-icon :icon="item.icon" />
            <span>{{ item.title }}</span>
          </router-link>
        </a-menu-item>
        <template v-else>
          <a-sub-menu :key="item.title" v-if="pushRootSubmenuKeys(item.title)">
            <span slot="title">
              <co-icon :icon="item.icon" />
              <span>{{ item.title }}</span>
            </span>
            <template v-for="item in item.children">
              <a-menu-item
                v-if="item.title"
                :key="item.name + item.title"
                @click="fn"
              >
                <router-link :to="item.path">
                  {{ item.title }}
                </router-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </template>
    </template>
  </a-menu>
</template>

<script>
import store from "storejs";
export default {
  name: "sidebar",
  data() {
    return {
      rootSubmenuKeys: [],
      openKeys: ["sub0"],
      defaultOpenKeys: [],
    };
  },
  created() {
    this.defaultOpenKeys.push(store.get("MenuKey"));
  },
  methods: {
    fn(e) {
      store.set("MenuKey", e.key);
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    pushRootSubmenuKeys(title) {
      if (this.rootSubmenuKeys.indexOf(title) === -1) {
        this.rootSubmenuKeys.push(title);
      }
      return true;
    },
  },
};
</script>

<style></style>
