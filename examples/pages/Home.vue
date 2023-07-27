<script setup lang="jsx">
import { RouterView, RouterLink } from 'vue-router'
import { h, ref } from 'vue'
import menuOptions from '../menus'
import { NIcon } from 'naive-ui'
import { BookmarkOutline, FolderOutline, CaretDownOutline } from "@vicons/ionicons5"


const collapsed = ref(false)

const renderMenuLabel = (option) => {
  if (option.type === "page") {
    const route = { name: option.key }
    return (
      <RouterLink to={route}>
        <div>{ option.label }</div>
      </RouterLink>
    )
  }
  return <div>{ option.label }</div>
}

const expandIcon = () =>{
  return <NIcon><CaretDownOutline /></NIcon>
}

const renderMenuIcon = (option) => {
  const icon = option.type === "folder" ? FolderOutline : BookmarkOutline;
  return h(NIcon, null, { default: () => h(icon) });
}
</script>
<template>
  <div>
     <n-layout class="layout-container" has-sider>
      <n-layout-sider
        bordered
        show-trigger="bar"
        collapse-mode="transform"
        :collapsed-width="0"
        :width="240"
        :native-scrollbar="false"
      >
        <div class="logo">
          SzMap
        </div>
        <div class="menus">
          <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :render-label="renderMenuLabel"
            :render-icon="renderMenuIcon"
            :expand-icon="expandIcon"
          />

        </div>
      </n-layout-sider>
      <n-layout>
        <n-layout-content content-style="padding: 24px;">
          <RouterView />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped>
.layout-container {
  height: 100vh;
}
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.menus {
  user-select: none;
}
</style>
