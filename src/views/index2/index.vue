<template>
  <div class="app-container">
    <el-input
      v-model="filterText"
      placeholder="输入关键字进行过滤"
    />
    <el-tree
      ref="tree"
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
    />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import qaData from '@/data/qa.json'

export default {
  name: 'Index',
  components: { },
  data() {
    return {
      filterText: '',
      data: qaData,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  created() {
    console.log('created...:')
    console.log('qaData:', qaData)
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>
