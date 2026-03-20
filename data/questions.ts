import { Question } from "@/lib/types";

export const QUESTION_BANK: Question[] = [
  {
    id: "FM-2020-S-01",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "某资产的必要收益率为R，β系数为1.5，市场收益率为10%，假设无风险收益率和β系数不变，如果市场收益率为15%，则该资产的必要收益率为（ ）。",
    options: [
      { key: "A", text: "R+7.5%" },
      { key: "B", text: "R+12.5%" },
      { key: "C", text: "R+10%" },
      { key: "D", text: "R+5%" }
    ],
    answer: ["A"],
    explanation: "按CAPM，市场收益率上升5%，必要收益率增量=1.5×5%=7.5%。"
  },
  {
    id: "FM-2020-S-02",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "作业成本法下，划分增值作业与非增值作业的主要依据在于（ ）。",
    options: [
      { key: "A", text: "是否有助于提高产品质量" },
      { key: "B", text: "是否有助于提升企业产能" },
      { key: "C", text: "是否有助于增加产品功能" },
      { key: "D", text: "是否有助于增加顾客价值" }
    ],
    answer: ["D"],
    explanation: "增值与否以顾客价值为判断标准。"
  },
  {
    id: "FM-2020-S-03",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "计算稀释每股收益时，需考虑潜在普通股影响，下列不属于潜在普通股的是（ ）。",
    options: [
      { key: "A", text: "认股权证" },
      { key: "B", text: "股份期权" },
      { key: "C", text: "库存股" },
      { key: "D", text: "可转换公司债券" }
    ],
    answer: ["C"],
    explanation: "潜在普通股包括可转债、认股权证、期权，不包括库存股。"
  },
  {
    id: "FM-2020-S-04",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "“参与优先股”中的“参与”，指优先股股东除按确定股息率获得股息外，还能与普通股股东一起参与（ ）。",
    options: [
      { key: "A", text: "剩余税后利润分配" },
      { key: "B", text: "认购公司增发的新股" },
      { key: "C", text: "剩余财产清偿分配" },
      { key: "D", text: "公司经营决策" }
    ],
    answer: ["A"],
    explanation: "参与优先股强调在日常分红中参与剩余利润分配。"
  },
  {
    id: "FM-2020-S-05",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "某企业因供应商收回了信用政策，导致资金支付需求增加，需要补充持有大量现金，这种持有现金的动机属于（ ）。",
    options: [
      { key: "A", text: "交易性需求" },
      { key: "B", text: "投资性需求" },
      { key: "C", text: "预防性需求" },
      { key: "D", text: "调整性需求" }
    ],
    answer: ["A"],
    explanation: "为满足日常经营支付而持有现金，属于交易性需求。"
  },
  {
    id: "FM-2020-S-06",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "已知（F/P，9%，4）=1.4116，（F/P，9%，5）=1.5386，（F/A，9%，4）=4.5731，则（F/A，9%，5）等于（ ）。",
    options: [
      { key: "A", text: "4.9847" },
      { key: "B", text: "5.9847" },
      { key: "C", text: "5.5733" },
      { key: "D", text: "4.5733" }
    ],
    answer: ["B"],
    explanation: "（F/A，i，5）=（F/A，i，4）×（1+i）+1。"
  },
  {
    id: "FM-2020-S-07",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "按照财务战略目标的总体要求，利用专门方法对各种备选方案进行比较和分析，从中选出最佳方案的是（ ）。",
    options: [
      { key: "A", text: "财务决策" },
      { key: "B", text: "财务控制" },
      { key: "C", text: "财务分析" },
      { key: "D", text: "财务计划" }
    ],
    answer: ["A"],
    explanation: "备选方案比较并择优属于财务决策。"
  },
  {
    id: "FM-2020-S-08",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "下列各项中，属于非系统风险的是（ ）。",
    options: [
      { key: "A", text: "由于通货膨胀而导致的购买力风险" },
      { key: "B", text: "由于利率上升而导致的价格风险" },
      { key: "C", text: "由于利率下降而导致的再投资风险" },
      { key: "D", text: "由于公司经营不善而导致的破产风险" }
    ],
    answer: ["D"],
    explanation: "破产风险属于个别公司特有风险，即非系统风险。"
  },
  {
    id: "FM-2020-S-09",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "项目A投资收益率为10%，项目B投资收益率为15%，则比较项目A和项目B风险的大小，可以用（ ）。",
    options: [
      { key: "A", text: "两个项目的收益率的方差" },
      { key: "B", text: "两个项目的收益率的标准差" },
      { key: "C", text: "两个项目的投资收益率" },
      { key: "D", text: "两个项目的标准差率" }
    ],
    answer: ["D"],
    explanation: "期望收益率不同时，应使用标准差率比较风险。"
  },
  {
    id: "FM-2020-S-10",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "某公司按弹性预算法编制销售费用预算。已知预计业务量为5万小时，单位变动销售费用为1.5元/小时，固定销售费用总额为30万元，则按预计业务量的80%编制的销售费用预算总额为（ ）万元。",
    options: [
      { key: "A", text: "37.5" },
      { key: "B", text: "36" },
      { key: "C", text: "7.5" },
      { key: "D", text: "30" }
    ],
    answer: ["B"],
    explanation: "变动费用=5×80%×1.5=6万元，总额=30+6=36万元。"
  },
  {
    id: "FM-2020-S-11",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "企业筹资的优序模式为（ ）。",
    options: [
      { key: "A", text: "内部筹资、借款、发行债券、发行股票" },
      { key: "B", text: "发行股票、内部筹资、借款、发行债券" },
      { key: "C", text: "借款、发行债券、发行股票、内部筹资" },
      { key: "D", text: "借款、发行债券、内部筹资、发行股票" }
    ],
    answer: ["A"],
    explanation: "筹资优序通常是先内后外、先债后股。"
  },
  {
    id: "FM-2020-S-12",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "下列选项中，可能改变企业的资本结构的是（ ）。",
    options: [
      { key: "A", text: "股票回购" },
      { key: "B", text: "股票股利" },
      { key: "C", text: "股票分割" },
      { key: "D", text: "股票合并" }
    ],
    answer: ["A"],
    explanation: "股票回购会改变资产与权益规模，进而影响资本结构。"
  },
  {
    id: "FM-2020-S-13",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "某企业发行债券，发行价90元，面值100元，筹资费用率为5%，票面年利率为8%，所得税税率为25%，则债券实际利率为（ ）。",
    options: [
      { key: "A", text: "8%" },
      { key: "B", text: "6%" },
      { key: "C", text: "7.02%" },
      { key: "D", text: "9.36%" }
    ],
    answer: ["D"],
    explanation: "实际利率按税前利息与实际筹资净额计算，结果为9.36%。"
  },
  {
    id: "FM-2020-S-14",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "某借款利息每半年偿还一次，年利率为6%，则实际借款利率为（ ）。",
    options: [
      { key: "A", text: "6%" },
      { key: "B", text: "6.09%" },
      { key: "C", text: "12%" },
      { key: "D", text: "12.24%" }
    ],
    answer: ["B"],
    explanation: "实际年利率=(1+6%/2)^2-1=6.09%。"
  },
  {
    id: "FM-2020-S-15",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "下列各项中，属于销售预测分析的定量分析方法的是（ ）。",
    options: [
      { key: "A", text: "营销员判断法" },
      { key: "B", text: "专家判断法" },
      { key: "C", text: "产品寿命周期分析法" },
      { key: "D", text: "趋势预测分析法" }
    ],
    answer: ["D"],
    explanation: "趋势预测分析法属于定量分析方法。"
  },
  {
    id: "FM-2020-S-16",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "已知利润总额为700万元，利润表中的财务费用为50万元，资本化利息为30万元，则利息保障倍数为（ ）。",
    options: [
      { key: "A", text: "9.375" },
      { key: "B", text: "15" },
      { key: "C", text: "8.75" },
      { key: "D", text: "9.125" }
    ],
    answer: ["A"],
    explanation: "利息保障倍数=(700+50)/(50+30)=9.375。"
  },
  {
    id: "FM-2020-S-17",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "某上市公司股票市价为20元，普通股数量100万股，净利润400万元，净资产500万元，则市净率为（ ）。",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "5" },
      { key: "C", text: "10" },
      { key: "D", text: "20" }
    ],
    answer: ["A"],
    explanation: "每股净资产=500/100=5元，市净率=20/5=4。"
  },
  {
    id: "FM-2020-S-18",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "下列关于证券投资风险的表述中，说法错误的是（ ）。",
    options: [
      { key: "A", text: "价格风险属于系统性风险" },
      { key: "B", text: "购买力风险属于系统性风险" },
      { key: "C", text: "违约风险属于系统性风险" },
      { key: "D", text: "破产风险属于非系统性风险" }
    ],
    answer: ["C"],
    explanation: "违约风险属于非系统性风险，因此该说法错误。"
  },
  {
    id: "FM-2020-S-19",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "以下各项中，属于内部筹资的是（ ）。",
    options: [
      { key: "A", text: "发行股票" },
      { key: "B", text: "留存收益" },
      { key: "C", text: "短期借款" },
      { key: "D", text: "发行债券" }
    ],
    answer: ["B"],
    explanation: "内部筹资主要指留存收益。"
  },
  {
    id: "FM-2020-S-20",
    subject: "财务管理",
    year: 2020,
    type: "single",
    chapter: "2020年真题（客观题）",
    stem: "下列各项关于筹资方式的说法中，错误的是（ ）。",
    options: [
      { key: "A", text: "发行股票能够保护商业秘密" },
      { key: "B", text: "发行股票筹资有利于公司自主经营管理" },
      { key: "C", text: "留存收益筹资的途径之一是未分配利润" },
      { key: "D", text: "股权筹资的资本成本负担较重" }
    ],
    answer: ["A"],
    explanation: "上市发行股票通常会提高信息披露要求，不利于保密。"
  },
  {
    id: "FM-2020-M-01",
    subject: "财务管理",
    year: 2020,
    type: "multiple",
    chapter: "2020年真题（客观题）",
    stem: "某公司取得3 000万元的贷款，期限为6年，年利率10%，每年年初偿还等额本息，则每年年初应支付金额的计算正确的有（ ）。",
    options: [
      { key: "A", text: "3 000÷［（P/A，10%，5）+1］" },
      { key: "B", text: "3 000÷［（P/A，10%，7）-1］" },
      { key: "C", text: "3 000÷［（P/A，10%，6）÷（1+10%）］" },
      { key: "D", text: "3 000÷［（P/A，10%，6）×（1+10%）］" }
    ],
    answer: ["A", "D"],
    explanation: "年初支付属于预付年金，A与D是等价正确表达。"
  },
  {
    id: "FM-2020-M-02",
    subject: "财务管理",
    year: 2020,
    type: "multiple",
    chapter: "2020年真题（客观题）",
    stem: "下列各项中，影响经营杠杆的因素有（ ）。",
    options: [
      { key: "A", text: "债务利息" },
      { key: "B", text: "销售量" },
      { key: "C", text: "所得税" },
      { key: "D", text: "固定性经营成本" }
    ],
    answer: ["B", "D"],
    explanation: "经营杠杆受边际贡献与固定经营成本影响。"
  },
  {
    id: "FM-2020-M-03",
    subject: "财务管理",
    year: 2020,
    type: "multiple",
    chapter: "2020年真题（客观题）",
    stem: "在存货订货量决策中，下列关于保险储备的表述正确的有（ ）。",
    options: [
      { key: "A", text: "保险储备增加，存货的缺货损失减少" },
      { key: "B", text: "保险储备增加，存货中断的概率变小" },
      { key: "C", text: "保险储备增加，存货的再订货点降低" },
      { key: "D", text: "保险储备增加，存货的储存成本提高" }
    ],
    answer: ["A", "B", "D"],
    explanation: "保险储备会降低缺货风险、提高储存成本，并提高再订货点。"
  },
  {
    id: "FM-2020-M-04",
    subject: "财务管理",
    year: 2020,
    type: "multiple",
    chapter: "2020年真题（客观题）",
    stem: "下列各项中，将导致系统性风险的有（ ）。",
    options: [
      { key: "A", text: "发生通货膨胀" },
      { key: "B", text: "市场利率上升" },
      { key: "C", text: "国民经济衰退" },
      { key: "D", text: "企业新产品研发失败" }
    ],
    answer: ["A", "B", "C"],
    explanation: "系统性风险源于市场整体因素，不是单一企业事件。"
  },
  {
    id: "FM-2020-M-05",
    subject: "财务管理",
    year: 2020,
    type: "multiple",
    chapter: "2020年真题（客观题）",
    stem: "下列各项财务指标中，可用于企业营运能力分析的有（ ）。",
    options: [
      { key: "A", text: "速动比率" },
      { key: "B", text: "应收账款周转天数" },
      { key: "C", text: "存货周转次数" },
      { key: "D", text: "流动比率" }
    ],
    answer: ["B", "C"],
    explanation: "营运能力分析常用周转天数与周转次数指标。"
  },
  {
    id: "FM-2020-M-06",
    subject: "财务管理",
    year: 2020,
    type: "multiple",
    chapter: "2020年真题（客观题）",
    stem: "下列股利分配理论中，认为股利政策会影响公司的价值的有（ ）。",
    options: [
      { key: "A", text: "信号传递理论" },
      { key: "B", text: "所得税差异理论" },
      { key: "C", text: "“手中鸟”理论" },
      { key: "D", text: "代理理论" }
    ],
    answer: ["A", "B", "C", "D"],
    explanation: "题干四项均为股利相关理论，均认为股利政策影响价值。"
  },
  {
    id: "FM-2020-M-07",
    subject: "财务管理",
    year: 2020,
    type: "multiple",
    chapter: "2020年真题（客观题）",
    stem: "下列各项中，影响债券资本成本的有（ ）。",
    options: [
      { key: "A", text: "债券发行费用" },
      { key: "B", text: "债券票面利率" },
      { key: "C", text: "债券发行价格" },
      { key: "D", text: "利息支付频率" }
    ],
    answer: ["A", "B", "C", "D"],
    explanation: "一般模式与贴现模式下，这四项都会影响债券资本成本。"
  },
  {
    id: "FM-2020-M-08",
    subject: "财务管理",
    year: 2020,
    type: "multiple",
    chapter: "2020年真题（客观题）",
    stem: "关于本量利分析模式，下列各项中能够提高销售利润率的有（ ）。",
    options: [
      { key: "A", text: "提高边际贡献率" },
      { key: "B", text: "提高盈亏平衡作业率" },
      { key: "C", text: "提高变动成本率" },
      { key: "D", text: "提高安全边际率" }
    ],
    answer: ["A", "D"],
    explanation: "销售利润率=安全边际率×边际贡献率。"
  },
  {
    id: "FM-2020-M-09",
    subject: "财务管理",
    year: 2020,
    type: "multiple",
    chapter: "2020年真题（客观题）",
    stem: "关于留存收益筹资的特点，下列表述中正确的有（ ）。",
    options: [
      { key: "A", text: "不发生筹资费用" },
      { key: "B", text: "没有资本成本" },
      { key: "C", text: "筹资数额相对有限" },
      { key: "D", text: "不分散公司的控制权" }
    ],
    answer: ["A", "C", "D"],
    explanation: "留存收益无筹资费用但有资本成本，且规模有限。"
  },
  {
    id: "FM-2020-M-10",
    subject: "财务管理",
    year: 2020,
    type: "multiple",
    chapter: "2020年真题（客观题）",
    stem: "下列关于股利政策的说法中，符合代理理论观点的有（ ）。",
    options: [
      { key: "A", text: "股利政策应当向市场传递有关公司未来获利能力的信息" },
      { key: "B", text: "股利政策是协调股东与管理者之间代理关系的约束机制" },
      { key: "C", text: "高股利政策有利于降低公司的代理成本" },
      { key: "D", text: "理想的股利政策应当是发放尽可能高的现金股利" }
    ],
    answer: ["B", "C"],
    explanation: "代理理论强调通过股利降低代理成本并平衡融资成本。"
  },
  {
    id: "FM-2020-J-01",
    subject: "财务管理",
    year: 2020,
    type: "judge",
    chapter: "2020年真题（客观题）",
    stem: "如果通货膨胀率大于名义利率，则实际利率为正数。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["F"],
    explanation: "通胀率大于名义利率时，实际利率应为负。"
  },
  {
    id: "FM-2020-J-02",
    subject: "财务管理",
    year: 2020,
    type: "judge",
    chapter: "2020年真题（客观题）",
    stem: "无风险收益率由纯利率和通货膨胀补偿率组成。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["T"],
    explanation: "无风险收益率通常由资金时间价值和通胀补偿构成。"
  },
  {
    id: "FM-2020-J-03",
    subject: "财务管理",
    year: 2020,
    type: "judge",
    chapter: "2020年真题（客观题）",
    stem: "两项资产的收益率具有负相关时，才能分散组合的投资风险。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["F"],
    explanation: "只要相关系数小于1，组合一般就能分散部分风险。"
  },
  {
    id: "FM-2020-J-04",
    subject: "财务管理",
    year: 2020,
    type: "judge",
    chapter: "2020年真题（客观题）",
    stem: "相对于零基预算法，增量预算法的优点在于不受历史期经济活动中不合理因素的影响，使得预算编制更贴近企业经济活动的需要。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["F"],
    explanation: "该表述是零基预算法的优势，不是增量预算法。"
  },
  {
    id: "FM-2020-J-05",
    subject: "财务管理",
    year: 2020,
    type: "judge",
    chapter: "2020年真题（客观题）",
    stem: "资金预算以经营预算和专门决策预算为编制依据。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["T"],
    explanation: "资金预算通常建立在经营预算与专门决策预算基础上。"
  },
  {
    id: "FM-2020-J-06",
    subject: "财务管理",
    year: 2020,
    type: "judge",
    chapter: "2020年真题（客观题）",
    stem: "支付的银行借款利息属于企业的筹资费用。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["F"],
    explanation: "借款利息属于用资费用，不是筹资环节的一次性筹资费用。"
  },
  {
    id: "FM-2020-J-07",
    subject: "财务管理",
    year: 2020,
    type: "judge",
    chapter: "2020年真题（客观题）",
    stem: "相对于债务筹资成本，股权筹资成本较低、财务风险较高。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["F"],
    explanation: "通常股权筹资成本更高，但财务风险相对更低。"
  },
  {
    id: "FM-2020-J-08",
    subject: "财务管理",
    year: 2020,
    type: "judge",
    chapter: "2020年真题（客观题）",
    stem: "在确定目标现金余额时，无论成本分析模型还是存货模型，都需要考虑持有现金的机会成本。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["T"],
    explanation: "两类模型都将机会成本纳入现金持有决策。"
  },
  {
    id: "FM-2020-J-09",
    subject: "财务管理",
    year: 2020,
    type: "judge",
    chapter: "2020年真题（客观题）",
    stem: "在公司具有良好的投资机会时，剩余股利政策要求公司尽量使用留存收益来满足目标资本结构所需的权益资本数额。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["T"],
    explanation: "剩余股利政策先保障投资所需权益资本，再分配股利。"
  },
  {
    id: "FM-2020-J-10",
    subject: "财务管理",
    year: 2020,
    type: "judge",
    chapter: "2020年真题（客观题）",
    stem: "上市公司满足短期融资需求时，一般采用发行股票方式进行融资。",
    options: [
      { key: "T", text: "正确" },
      { key: "F", text: "错误" }
    ],
    answer: ["F"],
    explanation: "发行股票属于长期融资，短期融资常用商业信用、短借等。"
  }
];

export const CHAPTERS = Array.from(
  new Set(
    QUESTION_BANK.map((item) => item.chapter).filter((chapter): chapter is string => Boolean(chapter))
  )
);
