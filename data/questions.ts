import { Question } from "@/lib/types";

export const CHAPTERS = [
  "存货",
  "固定资产",
  "无形资产",
  "长期股权投资",
  "收入",
  "所得税",
  "合并财务报表"
] as const;

export const SAMPLE_QUESTIONS: Question[] = [
  {
    id: "INV-001",
    type: "single",
    chapter: "存货",
    year: 2024,
    stem: "企业采用计划成本核算原材料，月末应将材料成本差异按什么原则分配到发出材料和结存材料？",
    options: [
      { key: "A", text: "按数量比例分配" },
      { key: "B", text: "按计划成本比例分配" },
      { key: "C", text: "按实际成本比例分配" },
      { key: "D", text: "按收入比例分配" }
    ],
    answer: ["B"],
    explanation: "计划成本法下，差异通常按计划成本比例在发出与结存之间分配。",
    difficulty: "easy"
  },
  {
    id: "INV-002",
    type: "multiple",
    chapter: "存货",
    year: 2023,
    stem: "下列各项中，应计入存货采购成本的有（ ）。",
    options: [
      { key: "A", text: "购入材料支付的买价" },
      { key: "B", text: "运输途中合理损耗" },
      { key: "C", text: "入库前挑选整理费" },
      { key: "D", text: "非常损失" }
    ],
    answer: ["A", "B", "C"],
    explanation: "非常损失不计入存货成本，应计入当期损益。",
    difficulty: "medium"
  },
  {
    id: "INV-003",
    type: "judge",
    chapter: "存货",
    year: 2022,
    stem: "存货可变现净值低于成本时，应当计提存货跌价准备。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["T"],
    explanation: "可变现净值低于成本时，应按差额计提跌价准备。"
  },
  {
    id: "FA-001",
    type: "single",
    chapter: "固定资产",
    year: 2024,
    stem: "固定资产达到预定可使用状态前发生的借款费用，符合资本化条件的应计入（ ）。",
    options: [
      { key: "A", text: "财务费用" },
      { key: "B", text: "管理费用" },
      { key: "C", text: "固定资产成本" },
      { key: "D", text: "营业外支出" }
    ],
    answer: ["C"],
    explanation: "符合资本化条件的借款费用应计入相关资产成本。"
  },
  {
    id: "FA-002",
    type: "multiple",
    chapter: "固定资产",
    year: 2023,
    stem: "下列关于固定资产后续支出的表述，正确的有（ ）。",
    options: [
      { key: "A", text: "满足资本化条件的，应计入固定资产账面价值" },
      { key: "B", text: "日常修理支出一般计入当期损益" },
      { key: "C", text: "更新改造期间被替换部分账面价值应终止确认" },
      { key: "D", text: "所有后续支出都应资本化" }
    ],
    answer: ["A", "B", "C"],
    explanation: "并非所有后续支出都资本化，只有满足确认条件的才资本化。"
  },
  {
    id: "FA-003",
    type: "judge",
    chapter: "固定资产",
    year: 2022,
    stem: "固定资产折旧方法一经确定，不得变更。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["F"],
    explanation: "当资产经济利益实现方式发生重大变化时，可变更折旧方法。"
  },
  {
    id: "IA-001",
    type: "single",
    chapter: "无形资产",
    year: 2024,
    stem: "企业自行研发形成无形资产，开发阶段支出满足资本化条件的应计入（ ）。",
    options: [
      { key: "A", text: "研发费用" },
      { key: "B", text: "无形资产成本" },
      { key: "C", text: "管理费用" },
      { key: "D", text: "长期待摊费用" }
    ],
    answer: ["B"],
    explanation: "开发阶段满足条件的支出应资本化计入无形资产。"
  },
  {
    id: "IA-002",
    type: "multiple",
    chapter: "无形资产",
    year: 2023,
    stem: "下列关于无形资产摊销的说法正确的有（ ）。",
    options: [
      { key: "A", text: "使用寿命有限的无形资产应摊销" },
      { key: "B", text: "使用寿命不确定的无形资产不摊销" },
      { key: "C", text: "摊销金额一般计入当期损益" },
      { key: "D", text: "无形资产必须采用直线法摊销" }
    ],
    answer: ["A", "B", "C"],
    explanation: "摊销方法应反映经济利益实现方式，并非只能直线法。"
  },
  {
    id: "IA-003",
    type: "judge",
    chapter: "无形资产",
    year: 2022,
    stem: "内部产生的品牌价值可以确认为无形资产。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["F"],
    explanation: "内部产生的品牌等通常难以可靠计量，不确认为无形资产。"
  },
  {
    id: "LTI-001",
    type: "single",
    chapter: "长期股权投资",
    year: 2024,
    stem: "投资方对被投资单位具有重大影响时，长期股权投资后续计量应采用（ ）。",
    options: [
      { key: "A", text: "成本法" },
      { key: "B", text: "权益法" },
      { key: "C", text: "公允价值模式" },
      { key: "D", text: "重置成本法" }
    ],
    answer: ["B"],
    explanation: "对联营企业通常采用权益法核算。"
  },
  {
    id: "LTI-002",
    type: "multiple",
    chapter: "长期股权投资",
    year: 2023,
    stem: "采用权益法核算时，下列事项会影响长期股权投资账面价值的有（ ）。",
    options: [
      { key: "A", text: "被投资单位实现净利润" },
      { key: "B", text: "被投资单位宣告发放现金股利" },
      { key: "C", text: "投资方追加投资" },
      { key: "D", text: "投资方收到股票股利" }
    ],
    answer: ["A", "B", "C"],
    explanation: "现金股利冲减投资账面价值，股票股利一般不作账务处理。"
  },
  {
    id: "LTI-003",
    type: "judge",
    chapter: "长期股权投资",
    year: 2022,
    stem: "成本法下，被投资单位实现净利润时，投资方应确认投资收益。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["F"],
    explanation: "成本法下通常在被投资单位宣告分派现金股利时确认投资收益。"
  },
  {
    id: "REV-001",
    type: "single",
    chapter: "收入",
    year: 2024,
    stem: "企业确认收入的核心原则是（ ）。",
    options: [
      { key: "A", text: "收到现金时确认" },
      { key: "B", text: "开具发票时确认" },
      { key: "C", text: "履行履约义务并取得控制权时确认" },
      { key: "D", text: "合同签订时确认" }
    ],
    answer: ["C"],
    explanation: "新收入准则强调控制权转移并履行履约义务。"
  },
  {
    id: "REV-002",
    type: "multiple",
    chapter: "收入",
    year: 2023,
    stem: "下列属于在某一时段内履行履约义务确认收入情形的有（ ）。",
    options: [
      { key: "A", text: "客户在履约过程中同时取得并消耗企业履约所带来的经济利益" },
      { key: "B", text: "企业履约过程中所产出资产具有不可替代用途" },
      { key: "C", text: "企业在整个合同期间内均有权就累计已完成履约部分收款" },
      { key: "D", text: "客户仅在最终验收时取得商品控制权" }
    ],
    answer: ["A", "B", "C"],
    explanation: "D 通常属于某一时点确认收入的典型特征。"
  },
  {
    id: "REV-003",
    type: "judge",
    chapter: "收入",
    year: 2022,
    stem: "附有质量保证条款的销售合同，质量保证均应作为单项履约义务。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["F"],
    explanation: "仅当提供单独服务性质的额外保证时，才可能单独识别为履约义务。"
  },
  {
    id: "TAX-001",
    type: "single",
    chapter: "所得税",
    year: 2024,
    stem: "资产账面价值大于计税基础，通常会形成（ ）。",
    options: [
      { key: "A", text: "可抵扣暂时性差异" },
      { key: "B", text: "应纳税暂时性差异" },
      { key: "C", text: "永久性差异" },
      { key: "D", text: "不形成差异" }
    ],
    answer: ["B"],
    explanation: "未来期间会增加应纳税所得额，属于应纳税暂时性差异。"
  },
  {
    id: "TAX-002",
    type: "multiple",
    chapter: "所得税",
    year: 2023,
    stem: "下列项目中，可能确认递延所得税资产的有（ ）。",
    options: [
      { key: "A", text: "可抵扣暂时性差异" },
      { key: "B", text: "可结转以后年度弥补的亏损" },
      { key: "C", text: "税法不允许扣除的罚款支出" },
      { key: "D", text: "可结转以后年度抵扣的税款" }
    ],
    answer: ["A", "B", "D"],
    explanation: "罚款支出通常为永久性差异，不确认递延所得税资产。"
  },
  {
    id: "TAX-003",
    type: "judge",
    chapter: "所得税",
    year: 2022,
    stem: "递延所得税的确认与计量一般采用资产负债表债务法。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["T"],
    explanation: "企业会计准则采用资产负债表债务法确认递延所得税。"
  },
  {
    id: "CON-001",
    type: "single",
    chapter: "合并财务报表",
    year: 2024,
    stem: "母公司编制合并财务报表的前提是对被投资方拥有（ ）。",
    options: [
      { key: "A", text: "重大影响" },
      { key: "B", text: "共同控制" },
      { key: "C", text: "控制" },
      { key: "D", text: "长期投资意图" }
    ],
    answer: ["C"],
    explanation: "合并报表以控制为基础，控制即纳入合并范围。"
  },
  {
    id: "CON-002",
    type: "multiple",
    chapter: "合并财务报表",
    year: 2023,
    stem: "编制合并财务报表时，应抵销的内部交易项目通常包括（ ）。",
    options: [
      { key: "A", text: "内部销售收入与成本" },
      { key: "B", text: "内部债权债务" },
      { key: "C", text: "内部未实现损益" },
      { key: "D", text: "母公司对外销售收入" }
    ],
    answer: ["A", "B", "C"],
    explanation: "只抵销集团内部项目，母公司对外交易不抵销。"
  },
  {
    id: "CON-003",
    type: "judge",
    chapter: "合并财务报表",
    year: 2022,
    stem: "少数股东权益应在合并资产负债表所有者权益项目中单独列示。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["T"],
    explanation: "少数股东权益属于合并报表所有者权益的一部分，需单独列示。"
  }
];
