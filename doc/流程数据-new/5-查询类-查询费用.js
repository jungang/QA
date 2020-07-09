var content = {
    title: '询问用户是否是本机号码。',
    text: `话术：您是要查询本机号码的费用情况吗？`,
    fork: [{
      btnName: '本机来电',
      content: {
        title: '本机来电--通过前台系统看套餐余量，再查询CBSS系统看用户的实时月结账单情况。',
        text: `【注】</br>
                实时月结账单路径：CBSS系统-账务管理-账管查询-实时月结账单查询-输入号码点查询。（注意查询月份）</br>
                2.0实时月结账单路径：CBSS系统-2.0体验版-账管查询-实时月结账单查询-输入号码点查询。（注意查询月份）`,
        fork: [{
            btnName: '下一步',
            content: {
              title: '下一步--根据查询内容与用户正常解释，是否认可。',
              text: `话术：</br>
                    用户流量/分钟未超出解释话术：</br>
                    我这边为您查询了一下，截止目前为止您本月号码一共产生了XX元。</br>
                    用户流量/分钟有超出解释话术：</br>
                    我这边为您查询了一下，您当月/之前月份有流量超出XX流量/分钟数超出XX分钟，建议您后续留意我方短信通知。</br>
                    用户有欠费未停机：</br>
                    我帮您查询了一下，您目前号码有往月欠费XX元，本月产生XX元，截止目前为止您一共欠费XX元（往月+本月的费用），因为您的号码内有信用额度XX元，如您当月不超过信用额度不会停机，但需要提示您，您需要在本月底之前结清往月欠费。不然有信用额度仍然会停机。</br>
                    用户本月有欠费，未超信用额度：</br>
                    我帮您查询了一下，您目前号码有本月产生XX元，因为您的号码内有信用额度XX元，如您当月不超过信用额度不会停机，但需要提示您，您需要在下月底之前结清本月欠费。不然有信用额度仍然会停机。</br>
                    用户有增值业务：</br>
                    您这边当月/之前月份订购了XX业务，扣费了XX元。</br>
                    用户询问超出多少钱：</br>
                    您本月一共超出XX流量/分钟，截止目前产生了XX元费用。`,
              fork: [{
                btnName: '认可',
                content: {
                  title: '认可--报结束语，挂机。',
                  text: '话术：您还有其他问题吗（等用户回复）？好的，那就不打扰您了，祝您生活愉快，再见。',
                  fork: []
                }
              },{
                btnName: '不认可',
                content: {
                  title: '不认可--询问用户对哪里资费不认可，针对资费再解释。',
                  text: `用户对费用有疑问：</br>
                        您是对本月/之前月份流量/分钟/增值/通话费用有疑问吗？</br>
                        针对流量/分钟有疑问：</br>
                        您套餐内流量/分钟超出按XX元收取，这边显示扣费正常，您也可以通过手机营业厅/网上营业厅查询上网详单/通话详单。</br>
                        用户对流量/分钟费不认可：</br>
                        如果您对超出的费用有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。</br>
                        针对增值费有疑问：</br>
                        您XX业务是在XX时间通过XX渠道办理的，您在仔细回想一下。</br>
                        用户对增值费不认可：</br>
                        因为咱们这边为您办理业务都是经过您本人同意之后才会为您办理，如果您不需要的话，我这边可以帮您取消，下个月就不会收取您的费用了。</br>
                        用户对增值费解释后仍不认可：</br>
                        如果您对订购的业务有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。`,
                  fork: [{
                    btnName: '流量费用',
                    content: {
                      title: '流量费用--查询用户上网详单，搭配上网日志，根据查询使用流量较高的记录与用户解释是否认可。',
                      text:  `用户对费用有疑问：</br>
                      您是对本月/之前月份流量/分钟/增值/通话费用有疑问吗？</br>
                      针对流量/分钟有疑问：</br>
                      您套餐内流量/分钟超出按XX元收取，这边显示扣费正常，您也可以通过手机营业厅/网上营业厅查询上网详单/通话详单。</br>
                      用户对流量/分钟费不认可：</br>
                      如果您对超出的费用有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。</br>
                      针对增值费有疑问：</br>
                      您XX业务是在XX时间通过XX渠道办理的，您在仔细回想一下。</br>
                      用户对增值费不认可：</br>
                      因为咱们这边为您办理业务都是经过您本人同意之后才会为您办理，如果您不需要的话，我这边可以帮您取消，下个月就不会收取您的费用了。</br>
                      用户对增值费解释后仍不认可：</br>
                      如果您对订购的业务有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。`,
                      fork: [{
                        btnName: '认可',
                        content: {
                          title: '认可--报结束语，挂机。',
                          text: '话术：您还有其他问题吗（等用户回复）？好的，那就不打扰您了，祝您生活愉快，再见。',
                          fork: []
                        }
                      },{
                        btnName: '不认可',
                        content: {
                          title: '不认可--转流量费争议流程',
                          text: '转流量费争议流程',
                          fork: []
                        }
                      }]
                    }
                  },{
                    btnName: '增值费用',
                    content: {
                      title: '增值费用--通过业务受理历史查询业务办理时间，办理方式与用户解释，是否认可。',
                      text:  `用户对费用有疑问：</br>
                      您是对本月/之前月份流量/分钟/增值/通话费用有疑问吗？</br>
                      针对流量/分钟有疑问：</br>
                      您套餐内流量/分钟超出按XX元收取，这边显示扣费正常，您也可以通过手机营业厅/网上营业厅查询上网详单/通话详单。</br>
                      用户对流量/分钟费不认可：</br>
                      如果您对超出的费用有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。</br>
                      针对增值费有疑问：</br>
                      您XX业务是在XX时间通过XX渠道办理的，您在仔细回想一下。</br>
                      用户对增值费不认可：</br>
                      因为咱们这边为您办理业务都是经过您本人同意之后才会为您办理，如果您不需要的话，我这边可以帮您取消，下个月就不会收取您的费用了。</br>
                      用户对增值费解释后仍不认可：</br>
                      如果您对订购的业务有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。`,
                      fork: [{
                        btnName: '认可',
                        content: {
                          title: '认可--报结束语，挂机。',
                          text: '话术：您还有其他问题吗（等用户回复）？好的，那就不打扰您了，祝您生活愉快，再见。',
                          fork: []
                        }
                      },{
                        btnName: '不认可',
                        content: {
                          title: '不认可--根据为用户办理的渠道进行记录。',
                          text: '根据为用户办理的渠道进行记录。',
                          fork: [{
                            btnName: '办理渠道：外呼',
                            content: {
                              title: '办理渠道：外呼--记外呼模版投诉工单',
                              text: '记外呼模版投诉工单。',
                              fork: []
                            }
                          },{
                            btnName: '办理渠道：热线',
                            content: {
                              title: '办理渠道：热线--记人员投诉倾向回拨单',
                              text: '记人员投诉倾向回拨单。',
                              fork: []
                            }
                          },{
                            btnName: '办理渠道：手/网厅',
                            content: {
                              title: '办理渠道：手/网厅--记网手厅业务办理问题投诉工单',
                              text: '记网手厅业务办理问题投诉工单。',
                              fork: []
                            }
                          }]
                        }
                      }]
                    }
                  },{
                    btnName: '通话费用',
                    content: {
                      title: '通话费用--建议用户查询详单，是否认可。',
                      text:  `用户对费用有疑问：</br>
                      您是对本月/之前月份流量/分钟/增值/通话费用有疑问吗？</br>
                      针对流量/分钟有疑问：</br>
                      您套餐内流量/分钟超出按XX元收取，这边显示扣费正常，您也可以通过手机营业厅/网上营业厅查询上网详单/通话详单。</br>
                      用户对流量/分钟费不认可：</br>
                      如果您对超出的费用有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。</br>
                      针对增值费有疑问：</br>
                      您XX业务是在XX时间通过XX渠道办理的，您在仔细回想一下。</br>
                      用户对增值费不认可：</br>
                      因为咱们这边为您办理业务都是经过您本人同意之后才会为您办理，如果您不需要的话，我这边可以帮您取消，下个月就不会收取您的费用了。</br>
                      用户对增值费解释后仍不认可：</br>
                      如果您对订购的业务有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。`,
                      fork: [{
                        btnName: '认可',
                        content: {
                          title: '认可--报结束语，挂机。',
                          text: '话术：您还有其他问题吗（等用户回复）？好的，那就不打扰您了，祝您生活愉快，再见。',
                          fork: []
                        }
                      },{
                        btnName: '不认可',
                        content: {
                          title: '不认可--记通用模版工单',
                          text: '记通用模版工单',
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
    },{
        btnName: '非本机来电',
        content: {
          title: '非本机来电--与用户核实信息。',
          text: `话术：请问您有修改后的6位服务密码么？</br>
                【注】信息核实：</br>
                （有修改后的服务密码用户）</br>
                话术：那我这边给您转接语音，您听提示输入一下密码，输入完以后按#号键结束。</br>
                （无修改后的服务密码用户）</br>
                话术：那您提供一下机主姓名，这边给您转接语音，您听语音提示输入一下身份证号，输入完以后按#号键结束。`,
          fork: [{
            btnName: '核实通过',
            content: {
              title: '核实通过--信息与用户核实正确。',
              text: '话术：好的，信息核实通过。我帮您查询一下。',
              fork: [{
                btnName: '下一步',
                content: {
                  title: '下一步--根据查询内容与用户正常解释，是否认可。',
                  text: `话术：</br>
                        用户流量/分钟未超出解释话术：</br>
                        我这边为您查询了一下，截止目前为止您本月号码一共产生了XX元。</br>
                        用户流量/分钟有超出解释话术：</br>
                        我这边为您查询了一下，您当月/之前月份有流量超出XX流量/分钟数超出XX分钟，建议您后续留意我方短信通知。</br>
                        用户有欠费未停机：</br>
                        我帮您查询了一下，您目前号码有往月欠费XX元，本月产生XX元，截止目前为止您一共欠费XX元（往月+本月的费用），因为您的号码内有信用额度XX元，如您当月不超过信用额度不会停机，但需要提示您，您需要在本月底之前结清往月欠费。不然有信用额度仍然会停机。</br>
                        用户本月有欠费，未超信用额度：</br>
                        我帮您查询了一下，您目前号码有本月产生XX元，因为您的号码内有信用额度XX元，如您当月不超过信用额度不会停机，但需要提示您，您需要在下月底之前结清本月欠费。不然有信用额度仍然会停机。</br>
                        用户有增值业务：</br>
                        您这边当月/之前月份订购了XX业务，扣费了XX元。</br>
                        用户询问超出多少钱：</br>
                        您本月一共超出XX流量/分钟，截止目前产生了XX元费用。`,
                  fork: [{
                    btnName: '认可',
                    content: {
                      title: '认可--报结束语，挂机。',
                      text: '话术：您还有其他问题吗（等用户回复）？好的，那就不打扰您了，祝您生活愉快，再见。',
                      fork: []
                    }
                  },{
                    btnName: '不认可',
                    content: {
                      title: '不认可--询问用户对哪里资费不认可，针对资费再解释。',
                      text: `用户对费用有疑问：</br>
                            您是对本月/之前月份流量/分钟/增值/通话费用有疑问吗？</br>
                            针对流量/分钟有疑问：</br>
                            您套餐内流量/分钟超出按XX元收取，这边显示扣费正常，您也可以通过手机营业厅/网上营业厅查询上网详单/通话详单。</br>
                            用户对流量/分钟费不认可：</br>
                            如果您对超出的费用有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。</br>
                            针对增值费有疑问：</br>
                            您XX业务是在XX时间通过XX渠道办理的，您在仔细回想一下。</br>
                            用户对增值费不认可：</br>
                            因为咱们这边为您办理业务都是经过您本人同意之后才会为您办理，如果您不需要的话，我这边可以帮您取消，下个月就不会收取您的费用了。</br>
                            用户对增值费解释后仍不认可：</br>
                            如果您对订购的业务有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。`,
                      fork: [{
                        btnName: '流量费用',
                        content: {
                          title: '流量费用--查询用户上网详单，搭配上网日志，根据查询使用流量较高的记录与用户解释是否认可。',
                          text:  `用户对费用有疑问：</br>
                          您是对本月/之前月份流量/分钟/增值/通话费用有疑问吗？</br>
                          针对流量/分钟有疑问：</br>
                          您套餐内流量/分钟超出按XX元收取，这边显示扣费正常，您也可以通过手机营业厅/网上营业厅查询上网详单/通话详单。</br>
                          用户对流量/分钟费不认可：</br>
                          如果您对超出的费用有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。</br>
                          针对增值费有疑问：</br>
                          您XX业务是在XX时间通过XX渠道办理的，您在仔细回想一下。</br>
                          用户对增值费不认可：</br>
                          因为咱们这边为您办理业务都是经过您本人同意之后才会为您办理，如果您不需要的话，我这边可以帮您取消，下个月就不会收取您的费用了。</br>
                          用户对增值费解释后仍不认可：</br>
                          如果您对订购的业务有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。`,
                          fork: [{
                            btnName: '认可',
                            content: {
                              title: '认可--报结束语，挂机。',
                              text: '话术：您还有其他问题吗（等用户回复）？好的，那就不打扰您了，祝您生活愉快，再见。',
                              fork: []
                            }
                          },{
                            btnName: '不认可',
                            content: {
                              title: '不认可--转流量费争议流程',
                              text: '转流量费争议流程',
                              fork: []
                            }
                          }]
                        }
                      },{
                        btnName: '增值费用',
                        content: {
                          title: '增值费用--通过业务受理历史查询业务办理时间，办理方式与用户解释，是否认可。',
                          text:  `用户对费用有疑问：</br>
                          您是对本月/之前月份流量/分钟/增值/通话费用有疑问吗？</br>
                          针对流量/分钟有疑问：</br>
                          您套餐内流量/分钟超出按XX元收取，这边显示扣费正常，您也可以通过手机营业厅/网上营业厅查询上网详单/通话详单。</br>
                          用户对流量/分钟费不认可：</br>
                          如果您对超出的费用有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。</br>
                          针对增值费有疑问：</br>
                          您XX业务是在XX时间通过XX渠道办理的，您在仔细回想一下。</br>
                          用户对增值费不认可：</br>
                          因为咱们这边为您办理业务都是经过您本人同意之后才会为您办理，如果您不需要的话，我这边可以帮您取消，下个月就不会收取您的费用了。</br>
                          用户对增值费解释后仍不认可：</br>
                          如果您对订购的业务有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。`,
                          fork: [{
                            btnName: '认可',
                            content: {
                              title: '认可--报结束语，挂机。',
                              text: '话术：您还有其他问题吗（等用户回复）？好的，那就不打扰您了，祝您生活愉快，再见。',
                              fork: []
                            }
                          },{
                            btnName: '不认可',
                            content: {
                              title: '不认可--根据为用户办理的渠道进行记录。',
                              text: '根据为用户办理的渠道进行记录。',
                              fork: [{
                                btnName: '办理渠道：外呼',
                                content: {
                                  title: '办理渠道：外呼--记外呼模版投诉工单',
                                  text: '记外呼模版投诉工单。',
                                  fork: []
                                }
                              },{
                                btnName: '办理渠道：热线',
                                content: {
                                  title: '办理渠道：热线--记人员投诉倾向回拨单',
                                  text: '记人员投诉倾向回拨单。',
                                  fork: []
                                }
                              },{
                                btnName: '办理渠道：手/网厅',
                                content: {
                                  title: '办理渠道：手/网厅--记网手厅业务办理问题投诉工单',
                                  text: '记网手厅业务办理问题投诉工单。',
                                  fork: []
                                }
                              }]
                            }
                          }]
                        }
                      },{
                        btnName: '通话费用',
                        content: {
                          title: '通话费用--建议用户查询详单，是否认可。',
                          text:  `用户对费用有疑问：</br>
                          您是对本月/之前月份流量/分钟/增值/通话费用有疑问吗？</br>
                          针对流量/分钟有疑问：</br>
                          您套餐内流量/分钟超出按XX元收取，这边显示扣费正常，您也可以通过手机营业厅/网上营业厅查询上网详单/通话详单。</br>
                          用户对流量/分钟费不认可：</br>
                          如果您对超出的费用有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。</br>
                          针对增值费有疑问：</br>
                          您XX业务是在XX时间通过XX渠道办理的，您在仔细回想一下。</br>
                          用户对增值费不认可：</br>
                          因为咱们这边为您办理业务都是经过您本人同意之后才会为您办理，如果您不需要的话，我这边可以帮您取消，下个月就不会收取您的费用了。</br>
                          用户对增值费解释后仍不认可：</br>
                          如果您对订购的业务有疑问的话，我这边可以为您记录反馈后台核查，后续会有人员联系您，您后续留意电话。`,
                          fork: [{
                            btnName: '认可',
                            content: {
                              title: '认可--报结束语，挂机。',
                              text: '话术：您还有其他问题吗（等用户回复）？好的，那就不打扰您了，祝您生活愉快，再见。',
                              fork: []
                            }
                          },{
                            btnName: '不认可',
                            content: {
                              title: '不认可--记通用模版工单',
                              text: '记通用模版工单',
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
          },{
            btnName: '核实未通过',
            content: {
              title: '核实未通过--建议用户找一下信息再来电。',
              text: '话术：核实信息不通过，您可以找一下证件信息，稍后再来电。',
              fork: []
            }
          }]
        }
      }]
  }