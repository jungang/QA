<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '知识库 - 问答',
      // logo: 'http://demo.sc.chinaz.com/Files/pic/icons/5162/129.png'
      // logo: 'https://www.easyicon.net/api/resizeApi.php?id=1254098&size=128'
      logo: 'https://www.easyicon.net/api/resizeApi.php?id=1266374&size=128'
      // logo: 'http://demo.sc.chinaz.com/Files/pic/icons/2156/%E6%B0%B4%E6%99%B6%E6%A1%8C%E9%9D%A2%E5%9B%BE%E6%A0%87%E4%B8%8B%E8%BD%BD7.png'
      // logo: 'http://demo.sc.chinaz.com/Files/pic/icons/2156/%E6%B0%B4%E6%99%B6%E6%A1%8C%E9%9D%A2%E5%9B%BE%E6%A0%87%E4%B8%8B%E8%BD%BD6.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
