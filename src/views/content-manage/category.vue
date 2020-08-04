<template>
  <div class="category-container">

    <div class="block">
      <p>目录树编辑</p>
      <el-tree
        :data="data"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
      >
        <span slot-scope="{ node, data : item }" class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span class="btns">
            <el-button
              type="text"
              size="mini"
              icon="el-icon-plus"
              @click="() => append(item)"
            >
              增加节点
            </el-button>
            <el-button
              type="text"
              size="mini"
              icon="el-icon-delete"
              circle
              style="color: red"
              @click="() => remove(node, item)"
            />

          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'

let id = 1000

export default {
  name: 'ArticleList',
  components: { },
  filters: {
  },
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }]
    return {
      data: JSON.parse(JSON.stringify(data))
    }
  },
  created() {
    this.getList()
  },
  methods: {
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },

    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .category-container{
    padding: 10px;
    .block{
      width: 50vw;
    }
    .btns{
      margin: 10px;
    }
    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
    }
  }

</style>
