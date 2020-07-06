const data = [
  {
    id: 1,
    label: '套餐类',
    question: [
      {
        id: '001',
        name: '套餐查询说明1',
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
    ],
    children: [{
      label: '二级 1-1',
      question: [
        {
          id: '002',
          name: '套餐查询说明2',
          answer: {}
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
export function allData() {
  return { data, answers }
}
