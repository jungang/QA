const data = [
  {
    id: 1,
    label: '套餐类',
    question: [
      {
        id: '001',
        name: '套餐查询说明11111套餐查询说明11111套餐查询说明11111套餐查询说明11111',
        answer: {
          type: 'branch', // 1：标准 article  2：流程 branchFlow
          answerName: '套餐查询说明11111',
          tag: '标准问题',
          content: {
            title: '开始',
            text: '话术：请问您想转入联通还是转出联通',
            curFork: '',
            fork: [
              {
                btnName: '携出',
                content: {
                  title: '携出',
                  text: '话术：客服代表挽留话术：请问您是因为什么原因要办理携号转网呢，我可以帮助您什么呢?资费太贵套餐不满意需求等，参考话术如下：',
                  fork: [{
                    btnName: '符合',
                    fork: [],
                    content: {
                      title: '符合',
                      text: '个人办理手续渠道如下：',
                      fork: []
                    }
                  },
                  {
                    btnName: '不符合',
                    content: {
                      title: '不符合',
                      text: '不符合就算了，请另请高就，拜拜！！',
                      fork: []
                    },
                    fork: []
                  }]
                }

              },
              {
                btnName: '携入',
                content: {
                  title: '携入',
                  text: '就这样吧',
                  fork: []
                },
                fork: []
              }]
          }
        }
      }
    ],
    children: [{
      label: '二级 1-1',
      question: [
        {
          id: '002',
          name: '套餐查询说明2222',
          answer: {
            type: 'article', // 1：标准  2：流程
            answerName: '套餐查询说明2222',
            tag: '标准问题',
            content: [{
              title: '一、询问办理手机号码',
              path: '系统查询路径：查询到期时间路径：CBSS系统-营业受理-综合查询-用户资料综合查询-输入号码，点查询-优惠信息',
              memo: '场景说明：如本人手机号XXXXXX',
              list: [{
                text: '对应话术1：是您来电的这个号码要办理吗？'
              }, {
                text: '对应话术2：是您来电的这个号码要办理吗？'
              }, {
                text: '对应话术3：是您来电的这个号码要办理吗？'
              }]
            }, {
              title: '二、询问办理身份信息',
              path: '',
              memo: '',
              list: [{
                text: '对应话术1：是您要办理吗？'
              }, {
                text: '对应话术2：是您来电的这个号码要办理吗？'
              }, {
                text: '对应话术3：是您来电的这个号码要办理吗？'
              }]
            }]
          }
        }
      ],
      children: [{
        label: '三级 1-1-1',
        question: [
          {
            id: '003',
            name: '套餐查询说明3'
          }
        ]
      }]
    }]
  },
  {
    label: '业务类',
    children: [{
      label: '二级 2-1',
      children: [{
        label: '三级 2-1-1'
      }]
    }, {
      label: '二级 2-2',
      children: [{
        label: '三级 2-2-1'
      }]
    }]
  },
  {
    label: '流程类',
    children: [{
      label: '二级 3-1',
      children: [{
        label: '三级 3-1-1',
        children: [{
          label: '四级 4-1-1'
        }]
      }]
    }, {
      label: '二级 3-2',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }
]
const answers = {
  type: 2, // 1：标准  2：流程
  content: [{
    title: '开始',
    content: '话术：请问您想转入联通还是转出联通',
    fork: [{
      btnName: '携出',
      content: [{
        title: '携出',
        content: '话术：客服代表挽留话术：请问您是因为什么原因要办理携号转网呢，我可以帮助您什么呢?资费太贵套餐不满意需求等，参考话术如下：',
        fork: [{
          btnName: '符合',
          fork: [],
          content: [{
            title: '符合',
            content: '个人办理手续渠道如下：',
            fork: []
          }]
        }, {
          btnName: '不符合',
          content: [{
            title: '不符合',
            content: '不符合就算了，请另请高就，拜拜！！',
            fork: []
          }],
          fork: []
        }]
      }]
    }, {
      btnName: '携入',
      content: [{
        title: '携入',
        content: '就这样吧',
        fork: []
      }],
      fork: []
    }]
  }]
}
export function allData() {
  return { data, answers }
}
