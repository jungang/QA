const data = [
  {
    id: 1,
    label: '套餐类',
    question: [
      {
        id: '001',
        name: 'mock 套餐查询说明11111',
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
      id: 10,
      label: '单产品',
      question: [
        {
          id: '002',
          name: 'mock 套餐查询说明2222',
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
        id: 100,
        label: '4G冰激凌（放心用版）热点问题',
        question: [
          {
            id: '003',
            name: '1. 套餐热点问题',
            answer: {
              type: 'article', // 1：标准  2：流程
              answerName: '1. 套餐热点问题',
              tag: '热点问题',
              content: [
                {
                  title: '4G冰激凌（放心用版）套餐流量用完之后可以叠加其他流量包吗？',
                  path: '',
                  memo: '',
                  list: [{
                    text: '4G冰激凌放心用版套餐流量用完之后是可以增加各类国内流量包、台港澳、国际漫游等流量包'
                  }]
                },
                {
                  title: '我还有个号码可不可以改成4G冰激凌（放心用版）套餐？',
                  path: '',
                  memo: '',
                  list: [{
                    text: '本套餐是支持其他套餐转入的，您办理完毕之后都是次月生效的。'
                  }]
                },
                {
                  title: '4G冰激凌（放心用版）套餐可以办理副卡吗，都能共享哪些资源：',
                  path: '',
                  memo: '',
                  list: [{
                    text: '4G冰激凌放心用版套餐是支持办理副卡的，最多可以办理两张，每张收费10元，可共享套餐内分钟数\\流量。主副卡之间互拨免费。\n'
                  }]
                },
                {
                  title: '4G冰激凌（放心用版）为什么我之前流量超过之后降速但是不收费的改了之后流量还超出费用了？\n',
                  path: '',
                  memo: '',
                  list: [{
                    text: '为什么我之前流量超过之后降速但是不收费的改了之后流量还超出费用了？\n'
                  }]
                },
                {
                  title: '我还有个号码可不可以改成4G冰激凌（放心用版）套餐？',
                  path: '',
                  memo: '',
                  list: [{
                    text: '本套餐是支持其他套餐转入的，您办理完毕之后都是次月生效的。'
                  }]
                },
                {
                  title: '我还有个号码可不可以改成4G冰激凌（放心用版）套餐？',
                  path: '',
                  memo: '',
                  list: [{
                    text: '本套餐是支持其他套餐转入的，您办理完毕之后都是次月生效的。'
                  }]
                }
              ]
            }
          }
        ]
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
