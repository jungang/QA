<template>
  <div class="app-container">

    <split-pane split="vertical" :default-percent="20" @resize="resize">
      <template slot="paneL">
        <el-input
          v-model="filterText"
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

          <template slot="paneL">
            <el-input v-model="searchKeyword" placeholder="输入关键字搜索" @input="handleFilter" />
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
          <template slot="paneR">

            <span slot="label">
              <i class="el-icon-reading" /> 套餐标准说明</span>
            <div v-if="answer.type==1">
              <div v-for="item in answer.items" :key="item.title">
                <h3>{{ item.title }}</h3>
                <p v-for="cont in item.list" :key="cont.content" style="color:#d36261">
                  {{ cont.content }}
                </p>
                <p>{{ item.memo }}</p>
                <p>{{ item.path }}</p>
              </div>
            </div>
            <div v-if="answer.type==2">
              <div v-for="item in answer.items" :key="item.title">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>{{ item.title }}</span>
                  </div>
                  <div class="text item">
                    {{ item.content }}
                  </div>
                  <div class="btn-div">
                    <div v-if="item.btns.length>0">
                      <el-button v-for="btn in item.btns" :key="btn.btnName" type="primary" @click.once="btnClick(btn)">{{ btn.btnName }}</el-button>
                    </div>

                    <el-button v-if="item.btns.length==0" type="primary">结束</el-button>
                  </div>
                </el-card>
              </div>
            </div>

          </template>
        </split-pane>
      </template>
    </split-pane>

  </div>
</template>

<script>
import splitPane from 'vue-splitpane'
import { allData } from '@/data/data'
import {
  mapGetters
} from 'vuex'

export default {
  name: 'Index',
  components: { splitPane },
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
      searchKeyword: '',
      // content: {
      //   type: 1, //1：标准  2：流程
      //   items: [{
      //     title: '一、询问办理手机号码',
      //     path: '系统查询路径：查询到期时间路径：CBSS系统-营业受理-综合查询-用户资料综合查询-输入号码，点查询-优惠信息',
      //     memo: '场景说明：如本人手机号XXXXXX',
      //     list: [{
      //       content: '对应话术1：是您来电的这个号码要办理吗？'
      //     },{
      //       content: '对应话术2：是您来电的这个号码要办理吗？'
      //     },{
      //       content: '对应话术3：是您来电的这个号码要办理吗？'
      //     }]
      //   },{
      //     title: '二、询问办理身份信息',
      //     path: '',
      //     memo: '',
      //     list: [{
      //       content: '对应话术1：是您要办理吗？'
      //     },{
      //       content: '对应话术2：是您来电的这个号码要办理吗？'
      //     },{
      //       content: '对应话术3：是您来电的这个号码要办理吗？'
      //     }]
      //   }]
      // },
      answer: {
        type: 2, // 1：标准  2：流程
        items: [{
          title: '开始',
          content: '话术：请问您想转入联通还是转出联通',
          btns: [{
            btnName: '携出',
            items: [{
              title: '携出',
              content: '话术：客服代表挽留话术：请问您是因为什么原因要办理携号转网呢，我可以帮助您什么呢?资费太贵套餐不满意需求等，参考话术如下：',
              btns: [{
                btnName: '符合',
                btns: [],
                items: [{
                  title: '符合',
                  content: '个人办理手续渠道如下：',
                  btns: []
                }]
              }, {
                btnName: '不符合',
                items: [{
                  title: '不符合',
                  content: '不符合就算了，请另请高就，拜拜！！',
                  btns: []
                }],
                btns: []
              }]
            }]
          }, {
            btnName: '携入',
            items: [{
              title: '携入',
              content: '就这样吧',
              btns: []
            }],
            btns: []
          }]
        }]
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
      this.listQuestions = this.allQuestions.filter(data => !this.searchKeyword || data.name.toLowerCase().includes(this.searchKeyword.toLowerCase()))
    },
    createListQuestions(data) {
      this.allQuestions = []
      data.forEach(item => this.recursionQ(item))

      this.listQuestions = this.allQuestions
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
    btnClick(obj) {
      console.log(obj)
      this.answer.items.push(obj.items[0])
      console.log(this.answer)
    },
    getLine(obj) {
      this.currentQuestion = obj
      console.log('this.currentQuestion:', this.currentQuestion)
    }
  }

}

</script>
<style lang="scss" scoped>
  .app-container {
    position: relative;
    height: 100vh;
  }

  .q-list {
    padding: 0;
    margin: 0;
    li{
      display: block;
      color: gray;
      padding: 5px;
      border-bottom: 1px solid #e1e1e1;
      cursor: pointer;
    }
    .cq{
      color: #1919ff;
    }
  }

  .btn-div {
    /*width: 100;*/
    text-align: center;
    margin-top: 30px
  }

</style>
