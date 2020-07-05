<template>
  <div class="app-container">
    <el-row class="max-height">
      <el-col class="max-height" :span="4">
        <div class="grid-content">
          <h3>全部知识库分类</h3>
          <el-tree :data="data" :props="defaultProps" :highlight-current="true" accordion @node-click="handleDragEnter" />
        </div>
      </el-col>
      <el-col class="max-height" :span="4">
        <div class="grid-content">
          <el-table highlight-current-row :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
            <el-table-column label="全部问题">

              <template slot-scope="{row}">

                <p style="line-height:0" @click="getLine(row)">{{ row.name }}</p>
              </template>

            </el-table-column>
            <el-table-column align="right">
            <!--eslint-disable-line-->
              <template slot="header" slot-scope="scope"> <!--eslint-disable-line-->
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col class="max-height" :span="16">
        <div class="grid-content">
          <el-tabs class="" type="border-card">
            <el-tab-pane style="padding:0px 30px">
              <span slot="label">
                <i class="el-icon-reading" /> 套餐标准说明</span>
              <div v-if="content.type==1">
                <div v-for="item in content.items" :key="item.title">
                  <h3>{{ item.title }}</h3>
                  <p v-for="cont in item.list" :key="cont.content" style="color:#d36261">
                    {{ cont.content }}
                  </p>
                  <p>{{ item.memo }}</p>
                  <p>{{ item.path }}</p>
                </div>
              </div>
              <div v-if="content.type==2">
                <div v-for="item in content.items" :key="item.title">
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
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  name: 'Index',
  components: {},
  data() {
    return {
      data: [{
        label: '套餐类',
        children: [{
          label: '二级 1-1',
          id: '0001',
          children: [{
            label: '三级 1-1-1',
            id: '000101'
          }]
        }]
      }, {
        label: '业务类',
        id: '0002',
        children: [{
          label: '二级 2-1',
          id: '000201',
          children: [{
            label: '三级 2-1-1',
            id: '00020101'
          }]
        }, {
          label: '二级 2-2',
          id: '0003',
          children: [{
            label: '三级 2-2-1',
            id: '000301'
          }]
        }]
      }, {
        label: '流程类',
        children: [{
          label: '二级 3-1',
          id: '0004',
          children: [{
            label: '三级 3-1-1',
            id: '000401',
            children: [{
              label: '四级 4-1-1',
              id: '00040101'
            }]
          }]
        }, {
          label: '二级 3-2',
          id: '000402',
          children: [{
            label: '三级 3-2-1',
            id: '0000201'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [{
        id: '001',
        name: '套餐查询说明'
      }, {
        id: '002',
        name: '流量办理流程'
      }, {
        id: '003',
        name: '其他问题1'
      }, {
        id: '004',
        name: '其他问题2'
      }],
      search: '',
      content2: {
        type: 1, // 1：标准  2：流程
        items: [{
          title: '一、询问办理手机号码',
          path: '系统查询路径：查询到期时间路径：CBSS系统-营业受理-综合查询-用户资料综合查询-输入号码，点查询-优惠信息',
          memo: '场景说明：如本人手机号XXXXXX',
          list: [{
            content: '对应话术1：是您来电的这个号码要办理吗？'
          }, {
            content: '对应话术2：是您来电的这个号码要办理吗？'
          }, {
            content: '对应话术3：是您来电的这个号码要办理吗？'
          }]
        }, {
          title: '二、询问办理身份信息',
          path: '',
          memo: '',
          list: [{
            content: '对应话术1：是您要办理吗？'
          }, {
            content: '对应话术2：是您来电的这个号码要办理吗？'
          }, {
            content: '对应话术3：是您来电的这个号码要办理吗？'
          }]
        }]
      },
      content1: {
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
      },
      content: {}
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    console.log('created...:')
  },
  methods: {
    // 获取树形结构树点击行数据
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label + ',' + dropNode.id)
    },

    // 流程点击按钮
    btnClick(obj) {
      console.log(obj)
      this.content.items.push(obj.items[0])
      console.log(this.content)
    },

    // 列表点击行
    getLine(obj) {
      console.log(obj.id)
      // -----测试代码  流程和常规数据
      if (obj.id === '001' || obj.id === '003') {
        this.content = this.content1
      } else {
        this.content = this.content2
      }
    }
  }

}

</script>
<style scoped>
  .app-container {
    position: relative;
    height: 100vh;
  }

  .max-height {
    height: 100%;
    border-right: 5px #f2f2f2 solid;
  }

  .btn-div {
    width: 100;
    text-align: center;
    margin-top: 30px
  }

  /deep/ .el-tree-node__label {
    font-size: 18px;
  }

</style>
