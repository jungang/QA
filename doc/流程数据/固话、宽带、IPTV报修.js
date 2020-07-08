var content = {
    title: '询问用户是否是本机号码。',
    text: '是您本机来电的这个号码绑定的宽带/固话/IPTV吗？',
    curFork: '',
    fork: [
      {
        btnName: 'A.本机号码',
        content: {
          title: 'A.本机号码',
          text: '本机号码来电的用户：询问用户是出现了什么问题。',
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
        btnName: 'B.非本机号码',
        content: {
          title: 'B.非本机号码',
          text: '非本机号码来电的用户：询问用户绑定的号码。',
          fork: []
        },
        fork: []
      }]
  }