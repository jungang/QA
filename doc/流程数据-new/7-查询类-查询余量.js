var content = {
    title: '询问用户是否是本机号码。',
    text: '话术：您是要查询本机号码的余量情况吗？',
    fork: [{
      btnName: '本机来电',
      content: {
        title: '通过前台首页查看流量/分钟/短信。',
        text: `通过前台首页查看流量/分钟/短信。`,
        fork: [{
          btnName: '下一步',
          content: {
            title: '根据首页与用户正常解释是否认可。',
            text: '话术：我这边为您查询了一下，您当月流量/分钟数剩余XX兆/分钟。',
            fork: [{
                btnName: '认可',
                content: {
                    title: '报结束语，挂机。',
                    text: '话术：那您正常使用就可以，有问题随时来电，那就不打扰您了，感谢您的来电，请您稍后帮我按两个1，再见。',
                    fork: []
                }
              },{
                btnName: '不认可',
                content: {
                  title: '询问用户针对什么不认可。',
                  text: '话术：您是对本月/之前月份哪个地方产生的费用存有疑问呢？',
                  fork: [{
                    btnName: '流量',
                    content: {
                      title: '查询用户上网详单，搭配上网日志，根据查询使用流量较高的记录与用户解释是否认可。',
                      text: '查询用户上网详单，搭配上网日志，根据查询使用流量较高的记录与用户解释是否认可。',
                      fork: [{
                        btnName: '认可',
                        content: {
                            title: '报结束语，挂机。',
                            text: '话术：那您正常使用就可以，有问题随时来电，那就不打扰您了，感谢您的来电，请您稍后帮我按两个1，再见。',
                            fork: []
                          }
                      },{
                        btnName: '不认可',
                        content: {
                            title: '转流量费争议流程。',
                            text: '转流量费争议流程。',
                            fork: []
                          }
                      }]
                    }
                  },{
                    btnName: '分钟',
                    content: {
                      title: '建议用户查询详单，是否认可。',
                      text: '建议用户查询详单，是否认可。',
                      fork: [{
                        btnName: '认可',
                        content: {
                            title: '报结束语，挂机。',
                            text: '话术：那您正常使用就可以，有问题随时来电，那就不打扰您了，感谢您的来电，请您稍后帮我按两个1，再见。',
                            fork: []
                          }
                      },{
                        btnName: '不认可',
                        content: {
                            title: '记通用模版工单。',
                            text: '记通用模版工单。',
                            fork: []
                          }
                      }]
                    }
                  }]
                }
              }]
          }
        }]
      }
    }, {
      btnName: '非本机来电',
      content: {
        title: '与用户核实信息。',
        text: `话术：请问您有修改后的6位服务密码么？</br>
                【注】信息核实：</br>
                （有修改后的服务密码用户）</br>
                话术：那我这边给您转接语音，您听提示输入一下密码，输入完以后按#号键结束。</br>
                （无修改后的服务密码用户）</br>
                话术：那您提供一下机主姓名，这边给您转接语音，您听语音提示输入一下身份证号，输入完以后按#号键结束。`,
        fork: [{
          btnName: '核实通过',
          content: {
            title: '信息与用户核实正确',
            text: `话术：好的，信息核验通过。我帮您查询一下。`,
            fork: [{
              btnName: '下一步',
              content: {
                title: '通过前台首页查看流量/分钟/短信。',
                text: `通过前台首页查看流量/分钟/短信。`,
                fork: [{
                  btnName: '下一步',
                  content: {
                    title: '根据首页与用户正常解释是否认可。',
                    text: '话术：我这边为您查询了一下，您当月流量/分钟数剩余XX兆/分钟。',
                    fork: [{
                        btnName: '认可',
                        content: {
                            title: '报结束语，挂机。',
                            text: '话术：那您正常使用就可以，有问题随时来电，那就不打扰您了，感谢您的来电，请您稍后帮我按两个1，再见。',
                            fork: []
                        }
                      },{
                        btnName: '不认可',
                        content: {
                          title: '询问用户针对什么不认可。',
                          text: '话术：您是对本月/之前月份哪个地方产生的费用存有疑问呢？',
                          fork: [{
                            btnName: '流量',
                            content: {
                              title: '查询用户上网详单，搭配上网日志，根据查询使用流量较高的记录与用户解释是否认可。',
                              text: '查询用户上网详单，搭配上网日志，根据查询使用流量较高的记录与用户解释是否认可。',
                              fork: [{
                                btnName: '认可',
                                content: {
                                    title: '报结束语，挂机。',
                                    text: '话术：那您正常使用就可以，有问题随时来电，那就不打扰您了，感谢您的来电，请您稍后帮我按两个1，再见。',
                                    fork: []
                                  }
                              },{
                                btnName: '不认可',
                                content: {
                                    title: '转流量费争议流程。',
                                    text: '转流量费争议流程。',
                                    fork: []
                                  }
                              }]
                            }
                          },{
                            btnName: '分钟',
                            content: {
                              title: '建议用户查询详单，是否认可。',
                              text: '建议用户查询详单，是否认可。',
                              fork: [{
                                btnName: '认可',
                                content: {
                                    title: '报结束语，挂机。',
                                    text: '话术：那您正常使用就可以，有问题随时来电，那就不打扰您了，感谢您的来电，请您稍后帮我按两个1，再见。',
                                    fork: []
                                  }
                              },{
                                btnName: '不认可',
                                content: {
                                    title: '记通用模版工单。',
                                    text: '记通用模版工单。',
                                    fork: []
                                  }
                              }]
                            }
                          }]
                        }
                      }]
                  }
                }]
              }
            }]
          }
        }, {
          btnName: '核实未通过',
          content: {
            title: '建议用户找一下信息再来电。',
            text: '话术：非常抱歉验证没有通过，您可以核实信息后，再来电为您查询，或您可以登录手/网厅进行查询，也可以带着有效身份证件去营业厅查询。',
            fork: []
          }
        }]
      }
    }]
  }