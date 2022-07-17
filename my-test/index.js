let originData = {
  "basePer": [
  {
    "rcMetricCodeUuid": "00000566dasdasdc8ca698029a1d1111",
    "codeJudgeUuid": "80abb5907abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_01",
    "codeName": "借款人是否命中风险名单",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "借款人是否命中风险名单",
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "00000566dasdasdc8ca698029a1d5555",
    "codeJudgeUuid": "80abc01a7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_05",
    "codeName": "同盾风险名单",
    "belong": "ALERT_BASE_PER_01",
    "jCondition": "1",
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "G风险名单",
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "1",
        "codeDesc": "有",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "00000566dasdasdc8ca698029a1d7777",
    "codeJudgeUuid": "80abc6c37abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_07",
    "codeName": "同盾贷后用户行为得分",
    "belong": "ALERT_BASE_PER_01",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "400",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "G贷后用户行为得分",
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ca632ed4de0a49f3893cd6ee72941515",
    "codeJudgeUuid": null,
    "code": "ALERT_BASE_PER_15",
    "codeName": "借款人是否命中司法信息",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "点击“+”选择您需要判断的规则项，命中选择中的任意一项即为预警",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "2a997f221b3a4b18ab3b2f540a661616",
    "codeJudgeUuid": "8696e2dc7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_16",
    "codeName": "失信老赖名单次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人被法院认定为失信执行人或老赖的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PUNISHMENT_AND_CRIME",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "PRESENT",
        "codeDesc": "当前未结案",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "7da8e71a72784167a9e2aa81f5b91717",
    "codeJudgeUuid": "8696e6377abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_17",
    "codeName": "欠税名单次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在税务部门公布的欠税公告出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "57716252ddad49068f31174ffd221818",
    "codeJudgeUuid": "8696e9327abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_18",
    "codeName": "限制高消费名单次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人被法院限制高消费的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PUNISHMENT_AND_CRIME",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "PRESENT",
        "codeDesc": "当前未结案",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "cd05b8cc4b1e4f53ba1a128f4f3d1919",
    "codeJudgeUuid": "8696ec227abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_19",
    "codeName": "纳税非正常户次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在税务部门认定为纳税非正常户出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "e1a89d1c73c2428e8af5e0b036a92020",
    "codeJudgeUuid": "869976997abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_20",
    "codeName": "限制出入境名单次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人被法院限制出入境的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PUNISHMENT_AND_CRIME",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "PRESENT",
        "codeDesc": "当前未结案",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "2d1680303eb14c0ea734699a36582121",
    "codeJudgeUuid": "86997a627abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_21",
    "codeName": "欠款欠费名单次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在网贷逾期名单、催欠信息及债权转让等信息中出现的的欠款欠费次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "ARREARS_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "c3e7568b5700416398d6ae9f7d022022",
    "codeJudgeUuid": "86997da37abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_22",
    "codeName": "罪犯及嫌疑人名单次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人被公检法机关在刑事侦查、检控、审判中被公开的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PUNISHMENT_AND_CRIME",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "419ab822a11a4d5a875baeb80a882323",
    "codeJudgeUuid": "869980d27abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_23",
    "codeName": "法院执行金额(元)",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1-3Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1-3年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1-3Y",
        "codeDesc": "近1-3年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "06e7d786d36444d7b380abe4bad12424",
    "codeJudgeUuid": "869983da7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_24",
    "codeName": "法院执行次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "5b1d5020f72c4a338cea07784e8b2525",
    "codeJudgeUuid": "869986cf7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_25",
    "codeName": "原告民商事裁判涉案金额(元)",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "200000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "1-2Y",
        "codeDesc": "近1-2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "c8747fd6459946d595214aa87d652626",
    "codeJudgeUuid": "86998a097abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_26",
    "codeName": "被告民商事裁判涉案金额(元)",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "T",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ca7535e032a04ee6b576d547fb522727",
    "codeJudgeUuid": "86998cf57abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_27",
    "codeName": "被告命中民商事审判次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "2f30bfccbc5645a59d048649ca942828",
    "codeJudgeUuid": "86998ff97abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_28",
    "codeName": "欠款欠费金额(元)",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在网贷逾期名单、催欠信息及债权转让等信息中出现的的欠款欠费金额",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ARREARS_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "31f9bccb310b4dea9b9aebf6cfe22929",
    "codeJudgeUuid": "869992ea7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_29",
    "codeName": "行政违法记录条数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在行政执法部门、行政复议机关及法院在处理行政案件过程中公开的信息出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "7edb3c0645e140cba134e59fb0093030",
    "codeJudgeUuid": "869995ed7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_30",
    "codeName": "涉及商标、侵权的行政违法记录条数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在行政违法事件中出现的涉及商标、侵权的记录条数",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ca632ed4de0a49f3893cd6ee72943131",
    "codeJudgeUuid": null,
    "code": "ALERT_BASE_PER_31",
    "codeName": "借款人配偶是否命中司法信息",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "规则内容与“借款人是否命中司法信息”相同，仅判断主体不同",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "2a997f221b3a4b18ab3b2f540a663232",
    "codeJudgeUuid": "836d4ea87abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_32",
    "codeName": "失信老赖名单次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人被法院认定为失信执行人或老赖的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PUNISHMENT_AND_CRIME",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "PRESENT",
        "codeDesc": "当前未结案",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "7da8e71a72784167a9e2aa8133333333",
    "codeJudgeUuid": "836d53ce7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_33",
    "codeName": "欠税名单次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在税务部门公布的欠税公告出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "57716252ddad49068f31174ffd223434",
    "codeJudgeUuid": "836d56077abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_34",
    "codeName": "限制高消费名单次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人被法院限制高消费的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PUNISHMENT_AND_CRIME",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "PRESENT",
        "codeDesc": "当前未结案",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "cd05b8cc4b1e4f53ba1a128f4f3d3535",
    "codeJudgeUuid": "836d58057abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_35",
    "codeName": "纳税非正常户次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在税务部门认定为纳税非正常户出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "e1a89d1c73c2428e8af5e0b036a93636",
    "codeJudgeUuid": "837024e07abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_36",
    "codeName": "限制出入境名单次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人被法院限制出入境的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PUNISHMENT_AND_CRIME",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "PRESENT",
        "codeDesc": "当前未结案",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "2d1680303eb14c0ea734699a36583737",
    "codeJudgeUuid": "8370271e7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_37",
    "codeName": "欠款欠费名单次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在网贷逾期名单、催欠信息及债权转让等信息中出现的的欠款欠费次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "ARREARS_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "c3e7568b5700416398d6ae9f7d023838",
    "codeJudgeUuid": "8370291e7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_38",
    "codeName": "罪犯及嫌疑人名单次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人被公检法机关在刑事侦查、检控、审判中被公开的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PUNISHMENT_AND_CRIME",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "419ab822a11a4d5a875baeb80a883939",
    "codeJudgeUuid": "83702b257abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_39",
    "codeName": "法院执行金额(元)",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1-3Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1-3年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1-3Y",
        "codeDesc": "近1-3年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "06e7d786d36444d7b380abe4bad14040",
    "codeJudgeUuid": "83702d107abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_40",
    "codeName": "法院执行次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "5b1d5020f72c4a338cea07784e8b4141",
    "codeJudgeUuid": "83702eef7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_41",
    "codeName": "原告民商事裁判涉案金额(元)",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "200000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "1-2Y",
        "codeDesc": "近1-2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "c8747fd6459946d595214aa87d654242",
    "codeJudgeUuid": "837030d87abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_42",
    "codeName": "被告民商事裁判涉案金额(元)",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "T",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ca7535e032a04ee6b576d547fb524343",
    "codeJudgeUuid": "837032aa7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_43",
    "codeName": "被告命中民商事审判次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "2f30bfccbc5645a59d04864944444444",
    "codeJudgeUuid": "8370348c7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_44",
    "codeName": "欠款欠费金额(元)",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在网贷逾期名单、催欠信息及债权转让等信息中出现的的欠款欠费金额",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ARREARS_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "31f9bccb310b4dea9b9aebf6cfe24545",
    "codeJudgeUuid": "8370365f7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_45",
    "codeName": "行政违法记录条数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在行政执法部门、行政复议机关及法院在处理行政案件过程中公开的信息出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "7edb3c0645e140cba134e59fb0094646",
    "codeJudgeUuid": "8370382d7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_PER_46",
    "codeName": "涉及商标、侵权的行政违法记录条数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在行政违法事件中出现的涉及商标、侵权的记录条数",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "fyzxje3c0645e140dda134e59f093030",
    "codeJudgeUuid": "cffceb44598611dfw6ae0242ac110008",
    "code": "ALERT_BASE_PER_56",
    "codeName": "法院执行中金额(元)",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "fyzxje3c0645e140cba134e59fb00930",
    "codeJudgeUuid": "cffceb44598611dfw6ee0242ac110008",
    "code": "ALERT_BASE_PER_66",
    "codeName": "法院执行中金额(元)",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alert68b5700416398d6ae9f7dbrspcs",
    "codeJudgeUuid": "alertccfd71245139e4e53aacdbrspcs",
    "code": "ALERT_BASE_PER_71",
    "codeName": "被告涉及借贷违法审判次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alert68b5700416398d6ae9f7dspspcs",
    "codeJudgeUuid": "alertccfd71245139e4e53aacdspspcs",
    "code": "ALERT_BASE_PER_72",
    "codeName": "被告涉及借贷违法审判次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "8d2491f502ff401cac4d3446156ec366",
    "codeJudgeUuid": "2ff6e0f6f06a4da489c8dd0e7ed07a84",
    "code": "ALERT_BASE_PER_73",
    "codeName": "借款人配偶是否命中风险名单",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "借款人配偶是否命中风险名单",
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "a3cd2e37743746e1ab67036e81b9af0d",
    "codeJudgeUuid": "3b3174f20bda48fb94821285acbbcfe1",
    "code": "ALERT_BASE_PER_76",
    "codeName": "同盾风险名单",
    "belong": "ALERT_BASE_PER_73",
    "jCondition": "1",
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "G风险名单",
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "1",
        "codeDesc": "有",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "27727d8bb6844cc1983e35368db7b18a",
    "codeJudgeUuid": "1b058dd233dd4e4f99c40bc7c22c5fa7",
    "code": "ALERT_BASE_PER_77",
    "codeName": "同盾贷后用户行为得分",
    "belong": "ALERT_BASE_PER_73",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "400",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "G贷后用户行为得分",
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alert68b5700416398d611bgsjjdwfje",
    "codeJudgeUuid": "alertccfd71245139e4e53bgsjjdwfje",
    "code": "ALERT_BASE_PER_93",
    "codeName": "被告涉及借贷违法金额（元）",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alert68b1230416398d6pobgsjjdwfje",
    "codeJudgeUuid": "alertccfd71245po9e4e53bgsjjdwfje",
    "code": "ALERT_BASE_PER_94",
    "codeName": "被告涉及借贷违法金额（元）",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "00000566dasdasdc8ca698029a1d4gtr",
    "codeJudgeUuid": "cce4a62e598611e8a6ee0242ac1157xd",
    "code": "ALERT_BASE_PER_95",
    "codeName": "借款人是否命中多平台借贷风险",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "借款人是否命中多平台借贷风险",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9oiujn",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZYdknh",
    "code": "ALERT_BASE_PER_96",
    "codeName": "网贷申请平台数",
    "belong": "ALERT_BASE_PER_95",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9odsaw",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZfvde4",
    "code": "ALERT_BASE_PER_97",
    "codeName": "网贷申请平台数-银行",
    "belong": "ALERT_BASE_PER_95",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9oopiu",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZfssaw",
    "code": "ALERT_BASE_PER_98",
    "codeName": "网贷申请平台数-非银行",
    "belong": "ALERT_BASE_PER_95",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9dxcsw",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZxcbgr",
    "code": "ALERT_BASE_PER_99",
    "codeName": "网贷负债平台数",
    "belong": "ALERT_BASE_PER_95",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9qwe45",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZfretg",
    "code": "ALERT_BASE_PER_100",
    "codeName": "网贷负债平台数-银行",
    "belong": "ALERT_BASE_PER_95",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9cmn78",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZdlkmj",
    "code": "ALERT_BASE_PER_101",
    "codeName": "网贷负债平台数-非银行",
    "belong": "ALERT_BASE_PER_95",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9odszz",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZfvdqr",
    "code": "ALERT_BASE_PER_104",
    "codeName": "网贷申请平台数-银行",
    "belong": "ALERT_BASE_PER_102",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "00000566dasdasdc8ca698029a1d4gzz",
    "codeJudgeUuid": "cce4a62e598611e8a6ee0242ac115dsa",
    "code": "ALERT_BASE_PER_102",
    "codeName": "借款人配偶是否命中多平台借贷风险",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "借款人配偶是否命中多平台借贷风险",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9ocmnj",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZsdrgy",
    "code": "ALERT_BASE_PER_103",
    "codeName": "网贷申请平台数",
    "belong": "ALERT_BASE_PER_102",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9oopzz",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZfssnn",
    "code": "ALERT_BASE_PER_105",
    "codeName": "网贷申请平台数-非银行",
    "belong": "ALERT_BASE_PER_102",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb2tt9dxcsw",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZxcbqq",
    "code": "ALERT_BASE_PER_106",
    "codeName": "网贷负债平台数",
    "belong": "ALERT_BASE_PER_102",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9qwcxz",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZfr233",
    "code": "ALERT_BASE_PER_107",
    "codeName": "网贷负债平台数-银行",
    "belong": "ALERT_BASE_PER_102",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT302bxb2455a8856cb29c9cmmjy",
    "codeJudgeUuid": "ALERT42b3de548e1bce86b841fZdlk2d",
    "code": "ALERT_BASE_PER_108",
    "codeName": "网贷负债平台数-非银行",
    "belong": "ALERT_BASE_PER_102",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1M",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_ONLINE_LOAN_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1M",
        "codeDesc": "近1月",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3M",
        "codeDesc": "近3月",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alertde70b413ce5ae7cb45d8d9fbr12",
    "codeJudgeUuid": "91f25fa5174e11eb84b66a5f5cf2e70a",
    "code": "ALERT_BASE_PER_109",
    "codeName": "同盾反欺诈分(无需手机号)",
    "belong": "ALERT_BASE_PER_01",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "60",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "指借款人在机构G根据历史借贷情况被标记的欺诈分，该评分在0-100之间，分数越高出现风险的概率越大；数据案例：60分；建议配置逻辑>60，通过",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alertdeds70b4ce5ae7cb45d8d9f1111",
    "codeJudgeUuid": "92117319174e11eb84b66a5f5cf2e70a",
    "code": "ALERT_BASE_PER_110",
    "codeName": "同盾反欺诈分(无需手机号)",
    "belong": "ALERT_BASE_PER_73",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "60",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "指借款人配偶在机构G根据历史借贷情况被标记的欺诈分，该评分在0-100之间，分数越高出现风险的概率越大；数据案例：60分；建议配置逻辑：>60，通过",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13a49f3893jkryggqqysfmzsfxx",
    "codeJudgeUuid": "910522204a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_111",
    "codeName": "借款人或配偶名下其他企业是否命中司法信息",
    "belong": null,
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "50",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "点击“+”选择您需要判断的规则项，命中选择中的任意一项即为不通过",
    "editStatus": null,
    "sortNum": null,
    "remark": "借款人及配偶有高股权企业是否命中司法信息",
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [
      {
        "configValue": "1",
        "codeDesc": "借款人",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2",
        "codeDesc": "借款人或配偶",
        "isSelected": 0,
        "remark": null
      }
    ],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT1321b3a4b18ab3b2f540a661616",
    "codeJudgeUuid": "bc82209f4a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_112",
    "codeName": "失信老赖名单次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人被法院认定为失信执行人或老赖的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PUNISHMENT_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "PRESENT",
        "codeDesc": "当前未结案",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13a72784167a9e2aa81f5b91717",
    "codeJudgeUuid": "bc9b7c884a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_113",
    "codeName": "欠税名单次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在税务部门公布的欠税公告出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13c4b1e4f53ba1a128f4f3d1919",
    "codeJudgeUuid": "bcb5dfbe4a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_114",
    "codeName": "纳税非正常户次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在税务部门认定为纳税非正常户出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT1303eb14c0ea734699a36582121",
    "codeJudgeUuid": "bcd0dcc04a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_115",
    "codeName": "欠款欠费名单次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在网贷逾期名单、催欠信息及债权转让等信息中出现的的欠款欠费次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "ARREARS_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT131a11a4d5a875baeb80a882323",
    "codeJudgeUuid": "bcec002b4a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_116",
    "codeName": "法院执行金额(元)",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1-3Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "涉案主体为企业",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1-3年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1-3Y",
        "codeDesc": "近1-3年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT138d36444d7b380abe4bad12424",
    "codeJudgeUuid": "bcfb1c7e4a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_117",
    "codeName": "法院执行次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "涉案主体为企业",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT130f72c4a338cea07784e8b2525",
    "codeJudgeUuid": "bd127f424a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_118",
    "codeName": "原告民商事裁判涉案金额(元)",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "200000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "涉案主体为企业",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "1-2Y",
        "codeDesc": "近1-2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT136459946d595214aa87d652626",
    "codeJudgeUuid": "bd3407cf4a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_119",
    "codeName": "被告民商事裁判涉案金额(元)",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "涉案主体为企业",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "T",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13032a04ee6b576d547fb522727",
    "codeJudgeUuid": "bd3a32c44a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_120",
    "codeName": "被告命中民商事审判次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "涉案主体为企业",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13cbc5645a59d048649ca942828",
    "codeJudgeUuid": "bd501bd04a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_121",
    "codeName": "欠款欠费金额(元)",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在网贷逾期名单、催欠信息及债权转让等信息中出现的的欠款欠费金额",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ARREARS_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13b310b4dea9b9aebf6cfe22929",
    "codeJudgeUuid": "bd63ac164a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_122",
    "codeName": "行政违法记录条数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在行政执法部门、行政复议机关及法院在处理行政案件过程中公开的信息出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13645e140cba134e59fb0093030",
    "codeJudgeUuid": "bd7cdd1a4a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_123",
    "codeName": "涉及商标、侵权的行政违法记录条数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在行政违法事件中出现的涉及商标、侵权的记录条数",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13645e1420cbd1134e5b0093030",
    "codeJudgeUuid": "bef3bb984a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_133",
    "codeName": "法院执行中金额(元)",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT136398addcd6dae9f71djdwfje1",
    "codeJudgeUuid": "bd89c43c4a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_134",
    "codeName": "被告涉及借贷违法金额",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13ms6398addcd6ae9f7djdcpcs1",
    "codeJudgeUuid": "bdb7e8d24a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_136",
    "codeName": "被告涉及借贷违法审判次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13om6398addcd6ae9f7djtsaje1",
    "codeJudgeUuid": "bdf75bf24a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_137",
    "codeName": "被告交通纠纷裁判涉案金额",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13om6398addcd6ae9f7djtsacs1",
    "codeJudgeUuid": "bdf365394a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_138",
    "codeName": "被告交通纠纷裁判涉案次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13om6398addcd6ae9f7dxzcfcs1",
    "codeJudgeUuid": "be10374b4a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_139",
    "codeName": "交通类行政处罚次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13om6398addcd6ae9f7dcpsaje1",
    "codeJudgeUuid": "bd9d92a84a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_140",
    "codeName": "被告民商事裁判涉案金额(不含交通纠纷)",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13om6398addcd6aebhjtxzcfcs1",
    "codeJudgeUuid": "be205e1b4a4c11ebadc26a5f5cf2e70a",
    "code": "ALERT_BASE_PER_141",
    "codeName": "行政处罚次数(不含交通纠纷)",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "2435dc9a772445998835af4a83bbd8e8",
    "codeJudgeUuid": "a7870ecf960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_145",
    "codeName": "被告涉及刑事案件审判次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "3847e53ba6b54775ad4d5d30f1270e1c",
    "codeJudgeUuid": "a799a6fb960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_146",
    "codeName": "被告涉及黄赌毒审判次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "34949da8f23d43afa63eb77ccac64cc4",
    "codeJudgeUuid": "a7b2a936960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_147",
    "codeName": "被告涉及刑事案件裁判次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "c5819aba6a5d4dff8c1b4fb5e48118b5",
    "codeJudgeUuid": "a7d0fb82960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_148",
    "codeName": "被告涉及黄赌毒裁判次数",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "0d4681ba8d144af2be5afdcd5e497277",
    "codeJudgeUuid": "a7e19b2f960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_149",
    "codeName": "终本案件执行金额（元）",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "被法院认定为程序性终结的案件金额，无财产可供执行的案件，可恢复执行",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "f4c0e38e57c9400b8d3ddf1f5a811423",
    "codeJudgeUuid": "a7f0b284960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_151",
    "codeName": "欠税名单次数（不含数据源已撤销）",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "c797179972604af0a54b2f954af3e31e",
    "codeJudgeUuid": "a82a4419960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_153",
    "codeName": "被告涉及刑事案件审判次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "487a1bdfb2fd440e8fd528f138a6709d",
    "codeJudgeUuid": "a84425f5960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_154",
    "codeName": "被告涉及黄赌毒审判次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "0ede19a3863345f794ab613e416e8723",
    "codeJudgeUuid": "a86347fc960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_155",
    "codeName": "被告涉及刑事案件裁判次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "81776113b33d4f30a0cf0361a616a616",
    "codeJudgeUuid": "a8788ab2960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_156",
    "codeName": "被告涉及黄赌毒裁判次数",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "49bb91c472894526bca592a1606b4b40",
    "codeJudgeUuid": "a88b9e00960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_157",
    "codeName": "终本案件执行金额（元）",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "被法院认定为程序性终结的案件金额，无财产可供执行的案件，可恢复执行",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "67910811bd0a485dac130b8099517471",
    "codeJudgeUuid": "a8cc7287960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_160",
    "codeName": "纳税非正常户次数（不含数据源已撤销）",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "81b1036c7efc43a5b93d833f67745d00",
    "codeJudgeUuid": "a9eb427d960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_161",
    "codeName": "被告涉及刑事案件审判次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "445735fb58154ca09eb8f06fc9c5bee1",
    "codeJudgeUuid": "a9fb1857960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_162",
    "codeName": "被告涉及清算审判次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "3Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近3年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "97fdee506139440ba5cbfbd16d284c97",
    "codeJudgeUuid": "aa0e8ab8960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_163",
    "codeName": "被告涉及刑事案件裁判次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "8c1fad7e43db4598b1b2ca5529413df1",
    "codeJudgeUuid": "aa250bf2960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_164",
    "codeName": "被告涉及清算裁判次数",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "3Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近3年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "4a50373874c24b949dcb276e0512a8c9",
    "codeJudgeUuid": "aa38e426960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_165",
    "codeName": "终本案件执行金额（元）",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "被法院认定为程序性终结的案件金额，无财产可供执行的案件，可恢复执行",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ebf71c30a97e400fbc39a3b5e477bdea",
    "codeJudgeUuid": "aa7ba348960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_167",
    "codeName": "纳税非正常户次数（不含数据源已撤销）",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "f745f7af81be4f83bc56b000ff341b42",
    "codeJudgeUuid": "aa4ace8c960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_168",
    "codeName": "欠税名单次数（不含数据源已撤销）",
    "belong": "ALERT_BASE_PER_111",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERT13hg8b1042d9ac6b1b4gqzb1111",
    "codeJudgeUuid": null,
    "code": "ALERT_BASE_PER_144",
    "codeName": "股权占比为空",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "PER_RISK_LIST",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "8aff02c588c645edb9d5549e0a6c9d8c",
    "codeJudgeUuid": "a813a260960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_152",
    "codeName": "纳税非正常户次数（不含数据源已撤销）",
    "belong": "ALERT_BASE_PER_15",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "9e5cc59a79dd4fae92f0dc21f4243993",
    "codeJudgeUuid": "a8a40d0c960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_PER_159",
    "codeName": "欠税名单次数（不含数据源已撤销）",
    "belong": "ALERT_BASE_PER_31",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  }
],
  "baseCom": [
  {
    "rcMetricCodeUuid": "741ca93af6384214808907edb6772222",
    "codeJudgeUuid": "32b9f4a5bf1949389592e4dfdc2b3333",
    "code": "ALERT_BASE_COM_02",
    "codeName": "企业经营异常信息未移出笔数",
    "belong": null,
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "ALL",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "企业被工商行政管理局列入经营异常名录且未被移出的笔数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_RISK_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "ALL",
        "codeDesc": "全部列入原因",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "YEAR_EXCEPTION",
        "codeDesc": "除年报报送异常",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "1_YEAR_EXCEPTION",
        "codeDesc": "除近1年年报报送异常",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2_YEAR_EXCEPTION",
        "codeDesc": "除近2年年报报送异常",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "20d868cc8b1042d9ac6b1b48b3193333",
    "codeJudgeUuid": "1dda3369fd4c4dccbcedb1c3b40b1111",
    "code": "ALERT_BASE_COM_03",
    "codeName": "企业法人与借款人或配偶是否一致",
    "belong": null,
    "jCondition": "",
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "1",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "根据企业法定代表人或企业名称判断与借款人或借款人配偶姓名是否一致",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "d89a6456eafb4aecb280809e7ebf5555",
    "codeJudgeUuid": null,
    "code": "ALERT_BASE_COM_05",
    "codeName": "配偶不一致",
    "belong": "",
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "06062ed4de0a49f3893cd6ee72941515",
    "codeJudgeUuid": null,
    "code": "ALERT_BASE_COM_06",
    "codeName": "企业是否命中司法信息",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "点击“+”选择您需要判断的规则项，命中选择中的任意一项即为预警",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "COM_RISK_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "07077f221b3a4b18ab3b2f540a661616",
    "codeJudgeUuid": "7d77612b7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_07",
    "codeName": "失信老赖名单次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人被法院认定为失信执行人或老赖的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "PUNISHMENT_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "PRESENT",
        "codeDesc": "当前未结案",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "0808e71a72784167a9e2aa81f5b91717",
    "codeJudgeUuid": "7d7763dc7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_08",
    "codeName": "欠税名单次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在税务部门公布的欠税公告出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "0909b8cc4b1e4f53ba1a128f4f3d1919",
    "codeJudgeUuid": "7d77669b7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_09",
    "codeName": "纳税非正常户次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在税务部门认定为纳税非正常户出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "101080303eb14c0ea734699a36582121",
    "codeJudgeUuid": "7d7769467abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_10",
    "codeName": "欠款欠费名单次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOW",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在网贷逾期名单、催欠信息及债权转让等信息中出现的的欠款欠费次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "ARREARS_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "11111111a11a4d5a875baeb80a882323",
    "codeJudgeUuid": "7d776b4e7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_11",
    "codeName": "法院执行金额(元)",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1-3Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "涉案主体为企业",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1-3年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1-3Y",
        "codeDesc": "近1-3年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "1212d786d36444d7b380abe4bad12424",
    "codeJudgeUuid": "7d776d437abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_12",
    "codeName": "法院执行次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "涉案主体为企业",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "13135020f72c4a338cea07784e8b2525",
    "codeJudgeUuid": "7d776f297abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_13",
    "codeName": "原告民商事裁判涉案金额(元)",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "200000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "涉案主体为企业",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "1-2Y",
        "codeDesc": "近1-2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "14147fd6459946d595214aa87d652626",
    "codeJudgeUuid": "7d7771137abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_14",
    "codeName": "被告民商事裁判涉案金额(元)",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "涉案主体为企业",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "T",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "151535e032a04ee6b576d547fb522727",
    "codeJudgeUuid": "7d7772e57abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_15",
    "codeName": "被告命中民商事审判次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "涉案主体为企业",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "1616bfccbc5645a59d048649ca942828",
    "codeJudgeUuid": "7d7774b57abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_16",
    "codeName": "欠款欠费金额(元)",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在网贷逾期名单、催欠信息及债权转让等信息中出现的的欠款欠费金额",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ARREARS_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "1717bccb310b4dea9b9aebf6cfe22929",
    "codeJudgeUuid": "7d7776d77abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_17",
    "codeName": "行政违法记录条数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在行政执法部门、行政复议机关及法院在处理行政案件过程中公开的信息出现的次数",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "18183c0645e140cba134e59fb0093030",
    "codeJudgeUuid": "7d7778bb7abe11e8a120a4dcbef69c76",
    "code": "ALERT_BASE_COM_18",
    "codeName": "涉及商标、侵权的行政违法记录条数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "借款人在行政违法事件中出现的涉及商标、侵权的记录条数",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "fyzxje3c0645e140cbd134e5b0093030",
    "codeJudgeUuid": "cffceb445986ss1dfw6e0242ac110008",
    "code": "ALERT_BASE_COM_28",
    "codeName": "法院执行中金额(元)",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "741ca93af6384214808907edb677is45",
    "codeJudgeUuid": "32b9f4a5bf1949389592e4dfdc2bis45",
    "code": "ALERT_BASE_COM_29",
    "codeName": "企业经营异常信息弄虚作假列入笔数",
    "belong": null,
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_RISK_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alertcom6398addcd6dae9f7djdwfje",
    "codeJudgeUuid": "alerttcome71245139e4e53aajdwfje",
    "code": "ALERT_BASE_COM_30",
    "codeName": "被告涉及借贷违法金额",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alerttcom6398addcd6ae9f7djdcpcs",
    "codeJudgeUuid": "alerttcome71245139e4e53aajdcpcs",
    "code": "ALERT_BASE_COM_32",
    "codeName": "被告涉及借贷违法审判次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alerttcom6398addcd6ae9f7djtsaje",
    "codeJudgeUuid": "alerttbs3a11e8ae0702ss42ajdcpje",
    "code": "ALERT_BASE_COM_33",
    "codeName": "被告交通纠纷裁判涉案金额",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alerttcom6398addcd6ae9f7djtsacs",
    "codeJudgeUuid": "alerttbs3a11e8ae0702ss42ajdcpcs",
    "code": "ALERT_BASE_COM_34",
    "codeName": "被告交通纠纷裁判涉案次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alerttcom6398addcd6ae9f7dxzcfcs",
    "codeJudgeUuid": "alerttbs3a11e8ae0702ss42acfcscs",
    "code": "ALERT_BASE_COM_35",
    "codeName": "交通类行政处罚次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alerttcom6398addcd6ae9f7dcpsaje",
    "codeJudgeUuid": "alerttbs3a11e8ae0702ss42acpsaje",
    "code": "ALERT_BASE_COM_36",
    "codeName": "被告民商事裁判涉案金额(不含交通纠纷)",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "10000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alerttcom6398addcd6aebhjtxzcfcs",
    "codeJudgeUuid": "alerttbs3a11e8ae0702ssbhjtfcscs",
    "code": "ALERT_BASE_COM_37",
    "codeName": "行政处罚次数(不含交通纠纷)",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "ADMINISTRATIVE_ILLEGAL",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERTcomRuleb2455a8859c9c1111",
    "codeJudgeUuid": "c6ec578fdacd11ea84b66a5f5cf2e70a",
    "code": "ALERT_BASE_COM_40",
    "codeName": "经营状态",
    "belong": null,
    "jCondition": "存续",
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "NOTCONTAINS",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "经营状态",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "存续",
        "codeDesc": "存续",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "在业",
        "codeDesc": "在业",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "注销",
        "codeDesc": "注销",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "迁入",
        "codeDesc": "迁入",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "吊销",
        "codeDesc": "吊销",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "迁出",
        "codeDesc": "迁出",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "停业",
        "codeDesc": "停业",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "清算",
        "codeDesc": "清算",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "NOTCONTAINS",
        "codeDesc": "不包含",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "CONTAINS",
        "codeDesc": "包含",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERTcomRuleb2455a8859c9c2222",
    "codeJudgeUuid": "c77fdc55dacd11ea84b66a5f5cf2e70a",
    "code": "ALERT_BASE_COM_41",
    "codeName": "企业经营范围",
    "belong": null,
    "jCondition": "ET",
    "jConditionDesc": null,
    "jValue": "",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "可配置多组，以\";\"隔开",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "ET",
        "codeDesc": "等于",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "CONTAINS",
        "codeDesc": "包含",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERTcomRuleb2455a8859c9c3333",
    "codeJudgeUuid": "c81105c3dacd11ea84b66a5f5cf2e70a",
    "code": "ALERT_BASE_COM_42",
    "codeName": "法人代表贷后是否变更",
    "belong": null,
    "jCondition": "1",
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "法人代表贷后是否变更",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "1",
        "codeDesc": "是",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "0",
        "codeDesc": "否",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERTcomRuleb2455a8859c9c4444",
    "codeJudgeUuid": "c8963188dacd11ea84b66a5f5cf2e70a",
    "code": "ALERT_BASE_COM_43",
    "codeName": "经营城市贷后是否变更",
    "belong": null,
    "jCondition": "1",
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "经营城市贷后是否变更",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "1",
        "codeDesc": "是",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "0",
        "codeDesc": "否",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERTcomRuleb2455a8859c9c5555",
    "codeJudgeUuid": "c9659037dacd11ea84b66a5f5cf2e70a",
    "code": "ALERT_BASE_COM_44",
    "codeName": "贷后新增企业经营异常信息未移出笔数",
    "belong": null,
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "ALL",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "贷后新增企业经营异常信息未移出笔数",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_RISK_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "LT",
        "codeDesc": "<",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GT",
        "codeDesc": ">",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "ALL",
        "codeDesc": "全部列入原因",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "YEAR_EXCEPTION",
        "codeDesc": "除年报报送异常",
        "isSelected": 1,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERTcomRuleb2455a8859c9c6666",
    "codeJudgeUuid": "cac45fafdacd11ea84b66a5f5cf2e70a",
    "code": "ALERT_BASE_COM_45",
    "codeName": "股权占比",
    "belong": null,
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0.1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "股权占比",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "LT",
        "codeDesc": "<",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GT",
        "codeDesc": ">",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [
      {
        "configValue": "1",
        "codeDesc": "借款人",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2",
        "codeDesc": "借款人配偶",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3",
        "codeDesc": "借款人或配偶",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "4",
        "codeDesc": "借款人及配偶",
        "isSelected": 0,
        "remark": null
      }
    ],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "ALERTcomRuleb2455a8859c9c7777",
    "codeJudgeUuid": "cbd04644dacd11ea84b66a5f5cf2e70a",
    "code": "ALERT_BASE_COM_46",
    "codeName": "股权贷后变化",
    "belong": null,
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "0.1",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "股权贷后变化",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "LT",
        "codeDesc": "<",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GT",
        "codeDesc": ">",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [
      {
        "configValue": "1",
        "codeDesc": "借款人",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2",
        "codeDesc": "借款人配偶",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3",
        "codeDesc": "借款人或配偶",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "4",
        "codeDesc": "借款人及配偶",
        "isSelected": 0,
        "remark": null
      }
    ],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alertb0a0c2242e84qyzycy39dk1111",
    "codeJudgeUuid": "ccb8e8ebdacd11ea84b66a5f5cf2e70a",
    "code": "ALERT_BASE_COM_47",
    "codeName": "申贷地址校验",
    "belong": "",
    "jCondition": "",
    "jConditionDesc": null,
    "jValue": "",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alert8cc8b1042d9ac6b1b48b319f329",
    "codeJudgeUuid": "1dda3369fd4c4dcalertb1c3b40b11a1",
    "code": "ALERT_BASE_COM_50",
    "codeName": "企业主要成员与借款人是否一致(同名比对)",
    "belong": null,
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0.3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "1",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_RISK_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [
      {
        "configValue": "1",
        "codeDesc": "借款人",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2",
        "codeDesc": "借款人及配偶",
        "isSelected": 0,
        "remark": null
      }
    ],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "alert8cc8b1042d9ac6b1b48b513f329",
    "codeJudgeUuid": "blla3369fd4c4dcalertb1c3b40b11a1",
    "code": "ALERT_BASE_COM_51",
    "codeName": "股东持股比例",
    "belong": null,
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0.3",
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_RISK_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "bszdgdcc8b1042d9ac6b1b48b513f329",
    "codeJudgeUuid": "bszdgd69fd4c4dcalertb1c3b40b11a1",
    "code": "ALERT_BASE_COM_52",
    "codeName": "不是最大股东",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_RISK_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "jkrjpogqzb1042d9ac6b1b48b513f329",
    "codeJudgeUuid": "jkrdgd69fd4c4dcalertb1c3b40b11a1",
    "code": "ALERT_BASE_COM_53",
    "codeName": "借款人及配偶股权占比",
    "belong": null,
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0.3",
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_RISK_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "gdzbpogqzb1042d9ac6b1b48b513f329",
    "codeJudgeUuid": null,
    "code": "ALERT_BASE_COM_54",
    "codeName": "股权占比为空",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "COM_RISK_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "7faccd236b14463f8f23572bfc5bb173",
    "codeJudgeUuid": "a8e99f75960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_55",
    "codeName": "被告涉及刑事案件审判次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "aef71d76150e4f32ba681aa795f4c622",
    "codeJudgeUuid": "a91f43e9960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_56",
    "codeName": "被告涉及刑事案件裁判次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "d49b347899b84ce3aba7b85721981b05",
    "codeJudgeUuid": "a905ee8b960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_61",
    "codeName": "被告涉及清算审判次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "3Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近3年",
    "metricCodeType": "TRIAL_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "620ee1dd5dd148f0835aa26efc9f08a6",
    "codeJudgeUuid": "a936d70b960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_62",
    "codeName": "被告涉及清算裁判次数",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "3Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近3年",
    "metricCodeType": "REFEREE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "syjyuj8a49y75932145254d59yhjrquo",
    "codeJudgeUuid": "d6e8545ce07f11eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_77",
    "codeName": "剩余经营期限(天)",
    "belong": null,
    "jCondition": "LTOET",
    "jConditionDesc": null,
    "jValue": "30",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "117542c5ajsdhijedhhad5cddc0f8536",
    "codeJudgeUuid": "d6829950e07f11eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_78",
    "codeName": "企业所属行业",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "支持配置行业大类或小类红色预警、黄色预警、蓝色预警、不判断",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "COM_BUSINESS_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "1197u34af6387589808907tfj9771756",
    "codeJudgeUuid": "434e533bdccd11eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_72",
    "codeName": "近一年稽查案件金额",
    "belong": null,
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "200000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "17856ad8a7834330bb85u89bed307541",
    "codeJudgeUuid": "435c7453dccd11eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_70",
    "codeName": "当前是否为非正常户",
    "belong": null,
    "jCondition": "1",
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "是",
    "metricCodeType": "TAX_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "0",
        "codeDesc": "否",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "1",
        "codeDesc": "是",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "fd2f6po5y6824330bb36a075ue302741",
    "codeJudgeUuid": "4370f89edccd11eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_71",
    "codeName": "当前是否为非正常注销户",
    "belong": null,
    "jCondition": "1",
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "是",
    "metricCodeType": "TAX_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "0",
        "codeDesc": "否",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "1",
        "codeDesc": "是",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "1178o85af6387589808907tfj9859656",
    "codeJudgeUuid": "438654b6dccd11eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_74",
    "codeName": "近一年行政处罚金额",
    "belong": null,
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "2000",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "1783j85af6387587563907tfj9878156",
    "codeJudgeUuid": "43966735dccd11eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_73",
    "codeName": "纳税评级",
    "belong": null,
    "jCondition": "D",
    "jConditionDesc": null,
    "jValue": "",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "ET",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "A",
        "codeDesc": "A",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "B",
        "codeDesc": "B",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "C",
        "codeDesc": "C",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "D",
        "codeDesc": "D",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "M",
        "codeDesc": "M",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "ET",
        "codeDesc": "等于",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "UNET",
        "codeDesc": "不等于",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "b361b9767c9940fc8f7cc96055658ac5",
    "codeJudgeUuid": "a952a85e960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_57",
    "codeName": "终本案件执行金额（元）",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "0",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "被法院认定为程序性终结的案件金额，无财产可供执行的案件，可恢复执行",
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "EXECUTIVE_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "5Y",
        "codeDesc": "近5年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "1778h05af6387587753907tfj9895176",
    "codeJudgeUuid": "43a9749fdccd11eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_75",
    "codeName": "连续两年增值税税负率低于行业X%",
    "belong": null,
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": "0.2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "TAX_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "7534h05af6388643753907ujr6895753",
    "codeJudgeUuid": "43ba3497dccd11eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_76",
    "codeName": "近3月营业收入波动百分比",
    "belong": null,
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "0.8",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "同比和环比下降超过百分比",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "TAX_INFO",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GT",
        "codeDesc": ">",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "0f40e27b8eb14650b61db54d21dcabef",
    "codeJudgeUuid": "a9d8cb89960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_59",
    "codeName": "纳税非正常户次数（不含数据源已撤销）",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "72dc9ee4106f4877b5d729632149e2a1",
    "codeJudgeUuid": "a9b4d07d960611eca0f9005056b1b11c",
    "code": "ALERT_BASE_COM_60",
    "codeName": "欠税名单次数（不含数据源已撤销）",
    "belong": "ALERT_BASE_COM_06",
    "jCondition": "GTOET",
    "jConditionDesc": null,
    "jValue": "3",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "1Y",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": null,
    "editStatus": null,
    "sortNum": null,
    "remark": "近1年",
    "metricCodeType": "TAX_INFORMATION",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 1,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 1,
        "remark": null
      }
    ],
    "intervalList": [
      {
        "configValue": "1Y",
        "codeDesc": "近1年",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "2Y",
        "codeDesc": "近2年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "3Y",
        "codeDesc": "近3年",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOW",
        "codeDesc": "至今",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "ADD",
        "codeDesc": "贷后新增",
        "isSelected": 0,
        "remark": null
      }
    ],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  }
],
  "proTbac": null,
  "proHml": [
  {
    "rcMetricCodeUuid": "hml56785c24336844y00djkrikhspgj",
    "codeJudgeUuid": "18f43737da8211eca0f9005056b1b11c",
    "code": "ALERT_PRO_HML_02",
    "codeName": "评估价",
    "belong": null,
    "jCondition": "AVG",
    "jConditionDesc": null,
    "jValue": null,
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "HML_ALERT",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "SETTLED",
        "codeDesc": "既定顺序",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "AVG",
        "codeDesc": "平均",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "MIN",
        "codeDesc": "取低",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "HEA",
        "codeDesc": "权重",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "hml75369fangjiawangduje0897spol",
    "codeJudgeUuid": "191d6ca4da8211eca0f9005056b1b11c",
    "code": "ALERT_PRO_HML_04",
    "codeName": "国信达",
    "belong": "ALERT_PRO_HML_02",
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "HML_ALERT",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "hmlu563c24336844u978djkr0897soll",
    "codeJudgeUuid": "190fa7fcda8211eca0f9005056b1b11c",
    "code": "ALERT_PRO_HML_03",
    "codeName": "世联",
    "belong": "ALERT_PRO_HML_02",
    "jCondition": "ONE",
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "HML_ALERT",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "hml8624fangjiawangduiwr0882spsl",
    "codeJudgeUuid": "1901efa1da8211eca0f9005056b1b11c",
    "code": "ALERT_PRO_HML_05",
    "codeName": "云估价",
    "belong": "ALERT_PRO_HML_02",
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": "1",
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "HML_ALERT",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "786ui93af6384214955607edb753is63",
    "codeJudgeUuid": "1a826c76da8211eca0f9005056b1b11c",
    "code": "ALERT_PRO_HML_01",
    "codeName": "房屋价值较贷前波动百分比",
    "belong": null,
    "jCondition": "LT",
    "jConditionDesc": null,
    "jValue": "-0.2",
    "jValueDesc": null,
    "jResult": "ALERT",
    "jResultDesc": null,
    "extField": "",
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "1",
    "extFieldDesc": null,
    "explains": "",
    "editStatus": null,
    "sortNum": null,
    "remark": "",
    "metricCodeType": "HML_ALERT",
    "relations": null,
    "isGrading": 1,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [
      {
        "configValue": "LTOET",
        "codeDesc": "≤",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "GTOET",
        "codeDesc": "≥",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "LT",
        "codeDesc": "<",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "GT",
        "codeDesc": ">",
        "isSelected": 0,
        "remark": null
      }
    ],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "NOTVERIFY",
        "codeDesc": "不判断",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "398642654347e999ik6476693485u1",
    "codeJudgeUuid": "192b1eadda8211eca0f9005056b1b11c",
    "code": "ALERT_PRO_HML_06",
    "codeName": "三家数据源比值",
    "belong": "ALERT_PRO_HML_02",
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": "0.9|1.1",
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "分别与云估价计算比值，任意满足区间的代表无偏差",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "HML_ALERT",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "93bjkel5434638903dc16iod52c36b1",
    "codeJudgeUuid": "19375755da8211eca0f9005056b1b11c",
    "code": "ALERT_PRO_HML_07",
    "codeName": "两家数据源比值",
    "belong": "ALERT_PRO_HML_02",
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": "0.8|1.2",
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "数据源A/数据源B，计算比值，满足区间的，代表无偏差",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "HML_ALERT",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  },
  {
    "rcMetricCodeUuid": "117536654347e996b5ujl693409jl",
    "codeJudgeUuid": "194694b5da8211eca0f9005056b1b11c",
    "code": "ALERT_PRO_HML_08",
    "codeName": "是否人工核价比值",
    "belong": "ALERT_PRO_HML_02",
    "jCondition": null,
    "jConditionDesc": null,
    "jValue": "0.7|1.4",
    "jValueDesc": null,
    "jResult": null,
    "jResultDesc": null,
    "extField": null,
    "extFieldOne": null,
    "extFieldOneDesc": null,
    "isRef": "0",
    "codeLevel": "2",
    "extFieldDesc": null,
    "explains": "三家数据源出价时，比较3个比值，均不在范围内的，需人工核价",
    "editStatus": null,
    "sortNum": null,
    "remark": null,
    "metricCodeType": "HML_ALERT",
    "relations": null,
    "isGrading": null,
    "companyArea": null,
    "rcModelCodeJudgeUuid": null,
    "conditionList": [],
    "resultList": [
      {
        "configValue": "ALERT",
        "codeDesc": "红色预警",
        "isSelected": 1,
        "remark": null
      },
      {
        "configValue": "SEC_ALERT",
        "codeDesc": "黄色预警",
        "isSelected": 0,
        "remark": null
      },
      {
        "configValue": "THI_ALERT",
        "codeDesc": "蓝色预警",
        "isSelected": 0,
        "remark": null
      }
    ],
    "intervalList": [],
    "nameList": [],
    "formList": null,
    "valueList": null,
    "repeatList": null,
    "bankCardArea": null
  }
],
  "orgNum": null,
  "tempalteConfig": null
}