<template>
  <div class="app-container">

    <split-pane split="vertical" :default-percent="20" @resize="resize">
      <template slot="paneL">
        <el-input
          v-model="filterText"
          class="search"
          placeholder="输入关键字进行过滤"
        />
        <el-tree
          ref="tree"
          :data="allData.data"
          :props="defaultProps"
          :highlight-current="true"
          default-expand-all
          :expand-on-click-node="false"
          :filter-node-method="filterNode"
          @node-click="handleDragEnter"
        />

      </template>
      <template slot="paneR">
        <split-pane split="vertical" :default-percent="40" @resize="resize">

          <template slot="paneL" class="panel">
            <el-input v-model="searchKeyword" class="search" placeholder="输入关键字搜索（多个关键词请用空格分开）" @input="handleFilter" />
            <ul class="q-list">
              <li
                v-for="item in listQuestions"
                :key="item.id"
                :class="item.id===currentQuestion.id?'cq':''"
                @click="getLine(item)"
              >
                {{ item.name }}
              </li>
            </ul>
          </template>

          <template slot="paneR" style="overflow: auto;">

            <answer :data="currentQuestion.answer" />

          </template>
        </split-pane>
      </template>
    </split-pane>

  </div>
</template>

<script>
import splitPane from 'vue-splitpane'
import answer from '@/components/Answer'
import { allData } from '@/data/data'
import { deepClone } from '@/utils'
import {
  mapGetters
} from 'vuex'

export default {
  name: 'Index',
  components: { splitPane, answer },
  data() {
    return {
      allData: allData(),
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      filterText: '',
      allQuestions: [],
      listQuestions: [],
      currentQuestion: {},
      searchKeyword: ''
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  watch: {
    filterText(val) {
      console.log(' val:', val)
      this.$refs.tree.filter(val)
    }
  },
  created() {
    console.log('created...:')
    this.createListQuestions(this.allData.data)
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleFilter() {
      this.createListQuestions(this.allData.data)
      console.log('this.allQuestions:', this.allQuestions)
      if (this.searchKeyword.split(' ').length === 1) {
        this.listQuestions = this.allQuestions.filter(data => !this.searchKeyword || data.name.toLowerCase().includes(this.searchKeyword.toLowerCase()))
      } else {
        this.listQuestions = this.allQuestions
        for (let i = 0; i < this.searchKeyword.split(' ').length; i++) {
          if (this.searchKeyword.split(' ')[i] !== '') {
            this.listQuestions = this.listQuestions.filter(data => !this.searchKeyword || data.name.toLowerCase().includes(this.searchKeyword.split(' ')[i].toLowerCase()))
          }
        }
      }
    },
    createListQuestions(data) {
      this.allQuestions = []
      data.forEach(item => this.recursionQ(item))
      this.listQuestions = this.allQuestions
      // this.currentQuestion = {}
      console.log('this.allQuestions:', this.allQuestions)
    },
    recursionQ(item) {
      // console.log('item:', item)
      // 添加问题
      if (item.question && item.question.length > 0) item.question.forEach(q => this.allQuestions.push(q))
      // 递归循环
      if (item.children && item.children.length > 0) item.children.forEach(sub => this.recursionQ(sub))
    },

    resize() {
      console.log('resize')
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      this.searchKeyword = ''
      console.log('tree drag enter: ', dropNode.label)
      console.log('dropNode.data: ', dropNode.data)
      this.createListQuestions([dropNode.data])
    },
    getLine(obj) {
      this.currentQuestion = deepClone(obj)
    }
  }

}

</script>
<style lang="scss" scoped>
  .app-container {
    position: relative;
    height: 100vh;
    padding-top: 0;
  }

  .q-list {
    padding: 0;
    margin: 0;
    li{
      font-size: 14px;
      display: block;
      color: gray;
      padding: 10px;
      border-bottom: 1px solid #e1e1e1;
      cursor: pointer;
    }
    .cq{
      color: #000000;
      background: #edf6ff;
    }
  }
  .panel{
    padding: 10px;
  }
  .search{
    margin-bottom: 10px;
  }

</style>

<style lang="scss">
  .splitter-paneL{
    padding: 10px !important;
  }
  .splitter-pane-resizer.vertical{
    width: 11px;
    background: white;
    height: 100%;
    margin-left: 5px !important;
    border-left: none;
    border-right: none;
    cursor: col-resize;
    box-shadow: grey -9px 0px 8px 0px;
  }
</style>
