<template>
  <div class="answer-container">

    <el-alert
      v-if="!data.type"
      title="未选择问题或没有答案"
      type="info"
    />

    <el-row style="margin-bottom: 10px; height: 30px; line-height: 30px">
      <el-col :span="24">
        <el-tag v-if="data.tag">{{ data.tag }}</el-tag>
        {{ data.answerName }}
      </el-col>
    </el-row>

    <div v-if="data.type==='article'">
      <el-card
        v-for="item in data.content"
        :key="item.title"
        shadow="hover"
      >

        <h3>{{ item.title }}</h3>
        <p v-for="cont in item.list" :key="cont.content" style="color:#d36261">
          {{ cont.text }}
        </p>
        <p>{{ item.memo }}</p>
        <p>{{ item.path }}</p>

      </el-card>

    </div>
    <div v-if="data.type==='branch'" style="overflow:auto">

      <el-card
        v-for="item in branchLine"
        :key="item.title"
        shadow="hover"
      >
        <div slot="header" class="step-title clearfix">
          <span>{{ item.title }}</span>
        </div>
        <div class="text item" v-html="item.text" />
        <div class="btn-div">
          <div v-if="item.fork.length>0">

            <el-button
              v-for="btn in item.fork"
              :key="btn.btnName"
              type="primary"
              :disabled="btn.btnName === item.curFork"
              @click="selectClick(item, btn)"
            >{{ btn.btnName }}</el-button>

          </div>

          <el-button v-if="item.fork.length===0" type="primary">结束</el-button>
        </div>
      </el-card>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Answer',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      branchLine: []
    }
  },
  watch: {
    data(val) {
      if (val.type === 'branch') this.handleBranch()
    }
  },
  created() {
    // console.log('this.data:', this.data)
  },
  mounted() {},
  methods: {
    handleBranch() {
      this.branchLine = []
      // console.log('handleBranch...:', this.data)
      this.recursion(this.data.content)
    },
    recursion(data) {
      data.curFork = data.curFork || ''
      this.branchLine.push(data)
      if (data.fork.length > 0) {
        const _v = data.fork.find(f => f.btnName === data.curFork)
        if (!_v) data.curFork = data.fork[0].btnName
        this.recursion(_v ? _v.content : data.fork[0].content)
      }
    },
    selectClick(item, obj) {
      item.curFork = obj.btnName
      // console.log(obj)
      // console.log('item.curFork:', item.curFork)
      this.handleBranch()
    }
  }
}
</script>

<style lang="scss" scoped>

  .answer-container{
    margin: 10px;
    font-size: 14px;

  }
  .btn-div {
    /*width: 100;*/
    text-align: center;
    margin-top: 30px
  }
  .el-card{
    margin-bottom: 20px;
  }
  .step-title{
    color: #d12f2f;
    font-weight: bold;
  }

  .text{
    line-height: 1.8em;
  }

</style>
<style lang="scss">
  .el-card__header{
    padding: 10px;
    background-color: #edf6ff;
  }
</style>
