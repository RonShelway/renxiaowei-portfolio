// 所有页面内容，zh/en 双语
export const content = {
  meta: {
    title: { zh: '任小为 · 产品经理', en: 'Xiaowei Ren · Product Manager' },
    description: {
      zh: '同济大学管理科学与工程硕士，专注 AI 产品与数据产品。技术理解 × 商业思维 × 国际视野。',
      en: 'M.S. in Management Science & Engineering at Tongji University. AI Product · Data Product · Global Perspective.',
    },
  },
  hero: {
    name: { zh: '任小为', en: 'Xiaowei Ren' },
    tagline: {
      zh: '技术理解 × 商业思维 × 国际视野',
      en: 'Tech Fluency × Business Thinking × Global Perspective',
    },
  },
  contact: {
    phone: '17316483476',
    email: '2431175@tongji.edu.cn',
    location: { zh: '上海', en: 'Shanghai' },
    school: { zh: '同济大学 · 管理科学与工程（硕士在读）', en: 'Tongji University · M.S. Management Science & Engineering' },
  },
  about: {
    title: { zh: '关于我', en: 'About' },
    text: {
      zh: '同济大学管理科学与工程硕士，本科信息管理与信息系统专业，具备扎实的数据分析与商业思维功底。研究生期间赴慕尼黑工业大学（TUM）交换，系统学习商业分析与机器学习，理解大模型及Agent原理，具备良好的技术理解力与国际化视野。拥有AI产品、数据产品等多行业产品实习经验，熟练使用Figma/墨刀进行原型设计，擅长需求分析、跨团队协作与数据驱动决策。英语流利（雅思7.5），能适应全球化产品团队协作环境。',
      en: 'M.S. candidate in Management Science & Engineering at Tongji University, with a solid foundation in data analysis and business thinking. Exchange student at Technical University of Munich (TUM), where I studied business analytics and machine learning. I have internship experience across AI product, data product, and multiple industries. Proficient in Figma/Mockplus for prototyping, with strengths in requirements analysis, cross-functional collaboration, and data-driven decision-making. Fluent in English (IELTS 7.5).',
    },
  },
  education: {
    title: { zh: '教育背景', en: 'Education' },
    items: [
      {
        school: { zh: '同济大学（硕士）', en: 'Tongji University (M.S.)' },
        period: '2024.09 – 2027.03',
        major: { zh: '管理科学与工程', en: 'Management Science & Engineering' },
        location: { zh: '上海', en: 'Shanghai' },
        details: { zh: '主修：数据分析与决策优化、高级运筹学、物流与供应链管理、管理信息系统（ERP）', en: 'Coursework: Data Analytics & Decision Optimization, Advanced Operations Research, Supply Chain Management, MIS (ERP)' },
      },
      {
        school: { zh: '慕尼黑工业大学 (TUM)', en: 'Technical University of Munich' },
        period: '2025.10 – 2026.03',
        major: { zh: '管理与技术（交换生）', en: 'Management & Technology (Exchange)' },
        location: { zh: '德国', en: 'Germany' },
        details: { zh: '主修：商业分析与机器学习、深度强化机器学习、在线调度问题研究', en: 'Coursework: Business Analytics & Machine Learning, Deep Reinforcement Learning, Online Scheduling' },
      },
      {
        school: { zh: '同济大学（本科）', en: 'Tongji University (B.S.)' },
        period: '2020.09 – 2024.06',
        major: { zh: '信息管理与信息系统', en: 'Information Management & Systems' },
        location: { zh: '上海', en: 'Shanghai' },
        details: {
          zh: 'GPA 4.57 / 5.0。核心课程：管理信息系统分析与设计、ERP原理及应用、电子商务、商务智能、市场营销。',
          en: 'GPA 4.57 / 5.0. Core: MIS Analysis & Design, ERP, E-Commerce, Business Intelligence, Marketing.',
        },
      },
    ],
  },
  experience: {
    title: { zh: '实习经历', en: 'Experience' },
    items: [
      {
        company: { zh: '太平洋保险', en: 'CPIC' },
        period: '2026.04 – 2026.05',
        role: { zh: 'AI产品经理实习生', en: 'AI Product Manager Intern' },
        industry: { zh: '保险 / 金融科技', en: 'Insurance / FinTech' },
        location: { zh: '上海', en: 'Shanghai' },
        bullets: {
          zh: [
            '负责 MA营销增长平台 的产品规划与迭代，参与需求分析、竞品调研与PRD撰写，使用Figma/墨刀输出高保真原型，推动算法与业务团队完成功能落地。',
            '参与 智能保顾 AI产品的用户调研与体验优化，通过用户访谈与行为数据分析识别关键痛点，制定产品优化方案。',
          ],
          en: [
            'Led product planning and iteration for the MA Marketing Growth Platform: requirements analysis, competitive research, PRD writing, and high-fidelity prototyping with Figma/Mockplus, driving cross-functional delivery.',
            'Contributed to user research and UX optimization for the Smart Insurance Advisor AI product, identifying pain points through user interviews and behavioral data analysis.',
          ],
        },
      },
      {
        company: { zh: 'EF 教育', en: 'EF Education First' },
        period: '2025.07 – 2025.09',
        role: { zh: '数据产品经理实习生', en: 'Data Product Manager Intern' },
        industry: { zh: '互联网 / 软件', en: 'Internet / Software' },
        location: { zh: '上海', en: 'Shanghai' },
        bullets: {
          zh: [
            '负责跨国HR与财务数据产品规划，深入梳理多国业务需求，整合Jira数据源，设计数据指标体系与可视化方案，通过PowerBI看板驱动管理层决策效率提升。',
          ],
          en: [
            'Managed multinational HR & Finance data product planning, integrated Jira data sources, designed KPI frameworks and visualization dashboards via PowerBI to improve management decision-making efficiency.',
          ],
        },
      },
      {
        company: { zh: '哔哩哔哩', en: 'Bilibili' },
        period: '2025.01 – 2025.03',
        role: { zh: '项目管理实习生', en: 'Project Management Intern' },
        industry: { zh: '互联网 / 游戏', en: 'Internet / Gaming' },
        location: { zh: '上海', en: 'Shanghai' },
        bullets: {
          zh: [
            '协助VSinger（虚拟歌手）业务线的项目管理工作，负责供应商入库审核与合同管理，优化采购与结算流程。',
            '独立完成季度业务汇报材料的数据处理与分析，为管理层决策提供数据支持。',
          ],
          en: [
            'Supported project management for the VSinger (virtual idol) business line, managing supplier onboarding, contract review, and procurement process optimization.',
            'Independently handled quarterly business review data processing and analysis to support management decision-making.',
          ],
        },
      },
      {
        company: { zh: '玛莎拉蒂 & 斯特兰蒂斯集团', en: 'Maserati & Stellantis' },
        period: '2024.03 – 2024.06',
        role: { zh: '采购与供应链实习生', en: 'Supply Chain Intern' },
        industry: { zh: '汽车制造', en: 'Automotive' },
        location: { zh: '上海', en: 'Shanghai' },
        bullets: {
          zh: [
            '参与企业采购全链路流程协同，负责供应商沟通、需求对接与ERP系统流程支持，提升采购流程协作效率。', '基于业务数据开展Benchmarking比价分析，辅助采购决策与成本优化，提升数据驱动决策能力。', '梳理合同管理流程，搭建合同归档与信息管理体系，提升采购流程标准化与合规管理效率。',
          ],
          en: [
            'Engaged in end-to-end procurement processes, identified material flow bottlenecks through data analysis, and drove cross-departmental process optimization.',
          ],
        },
      },
    ],
  },
  projects: {
    title: { zh: '项目经历', en: 'Projects' },
    items: [
      {
        name: 'Vero',
        period: { zh: '2025.10 – 至今', en: '2025.10 – Present' },
        role: { zh: '产品负责人', en: 'Product Lead' },
        context: { zh: 'UnternehmerTUM', en: 'UnternehmerTUM' },
        location: { zh: '德国，慕尼黑', en: 'Munich, Germany' },
        bullets: {
          zh: [
            '在德国顶尖高校合办的 UnternehmerTUM 创新创业营中，与跨国团队从0到1孵化食品环保验证产品。通过实地用户访谈完成需求调研与痛点验证，负责产品功能规划。',
            '使用 AI 驱动开发（Vibe Coding）快速搭建可交互原型，实现食品环保评分与消费者退款决策闭环，项目持续迭代中。',
          ],
          en: [
            'Incubated a food sustainability verification product from 0 to 1 with a cross-cultural team at UnternehmerTUM (Germany\'s top university entrepreneurship program), conducting field user interviews for needs validation.',
            'Built an interactive prototype via AI-driven development (Vibe Coding), implementing an eco-scoring and refund decision loop. Continuously iterating.',
          ],
        },
        link: { label: { zh: '在线体验', en: 'Live Demo' }, url: 'https://vero-833538459732.europe-west2.run.app' },
        screenshots: ['images/vero-1.png', 'images/vero-2.png'],
      },
      {
        name: { zh: '猫咪同盟', en: 'Cat Alliance' },
        period: '2023.03 – 2023.06',
        role: { zh: '产品设计师', en: 'Product Designer' },
        context: { zh: '校园项目', en: 'Campus Project' },
        location: { zh: '上海', en: 'Shanghai' },
        bullets: {
          zh: [
            '与团队从0到1打造面向同济校园猫咪爱好者的综合社区平台，主导功能架构与高保真原型设计。',
            '产品以网页形式上线运营，涵盖猫咪信息展示、社区交流与保护行动发起等核心功能。',
          ],
          en: [
            'Built a community platform for cat lovers at Tongji University from 0 to 1 with a team, leading feature architecture and hi-fi prototyping.',
            'Launched as a web platform featuring cat information, community forums, and protection campaign initiation.',
          ],
        },
        screenshots: ['images/cat-1.png', 'images/cat-2.png'],
      },
    ],
  },
  leadership: {
    title: { zh: '组织与领导力', en: 'Leadership' },
    items: [
      {
        org: { zh: '慕尼黑工业大学交换生团队', en: 'TUM Exchange Student Team' },
        period: '2025.10 – 2026.03',
        role: { zh: '队长', en: 'Captain' },
        location: { zh: '慕尼黑', en: 'Munich' },
        bullets: {
          zh: ['统筹跨校交流活动策划与执行，协调中德学生团队完成多场文化活动组织。'],
          en: ['Coordinated cross-university exchange events and cultural activities between Chinese and German student teams.'],
        },
      },
      {
        org: { zh: '同济大学 20 级经管 6 班', en: 'Tongji SEM Class 6' },
        period: '2020.09 – 2021.07',
        role: { zh: '班长', en: 'Class President' },
        location: { zh: '上海', en: 'Shanghai' },
        bullets: {
          zh: ['统筹班级事务管理，组织学术分享与团建活动，带领班级获得校级荣誉。'],
          en: ['Managed class affairs, organized academic seminars and team-building events, led the class to university-level honors.'],
        },
      },
      {
        org: { zh: '同济大学社团联合会', en: 'Tongji Student Associations Federation' },
        period: '2020.09 – 2021.07',
        role: { zh: '外联部干事', en: 'External Relations Officer' },
        location: { zh: '上海', en: 'Shanghai' },
        bullets: {
          zh: ['负责校外合作资源拓展与赞助洽谈，协助策划校级大型社团活动。'],
          en: ['Secured external partnerships and sponsorships, co-organized university-wide student events.'],
        },
      },
    ],
  },
  academic: {
    title: { zh: '学术经历', en: 'Research' },
    project: { zh: '在线信息平台服务改进', en: 'Online Information Platform Service Improvement' },
    period: '2024.09 – 2025.04',
    context: { zh: '国家自然科学基金项目 · 核心研究员', en: 'NSFC Project · Core Researcher' },
    bullets: {
      zh: ['基于在线医疗对话数据，分析用户交互行为与满意度关系，探索AI辅助问诊优化方向，提出提升平台服务效率与用户体验的策略方案。'],
      en: ['Applied data mining and behavioral analysis to study doctor-patient interaction patterns on online healthcare platforms, identifying service pain points through user behavior modeling and proposing optimization recommendations for an NSFC-funded project.'],
    },
  },
  awards: {
    title: { zh: '获奖经历', en: 'Awards' },
    items: [
      { name: { zh: '美国大学生数学建模竞赛 (MCM/ICM) H奖', en: 'MCM/ICM Honorable Mention' }, year: '2023' },
      { name: { zh: '全国大学生数学建模竞赛 上海市三等奖', en: 'CUMCM Shanghai Third Prize' }, year: '2022' },
      { name: { zh: '同济大学校本科优秀学生奖学金 三等奖', en: 'Tongji University Scholarship' }, year: '2021' },
    ],
  },
  skills: {
    title: { zh: '技能', en: 'Skills' },
    groups: [
      { label: { zh: '产品工具', en: 'Product Tools' }, tags: ['Figma', { zh: '墨刀', en: 'Mockplus' }, 'PRD'] },
      { label: { zh: 'AI 能力', en: 'AI' }, tags: [{ zh: '大模型原理', en: 'LLM Principles' }, { zh: 'Agent 应用', en: 'Agent Workflows' }, { zh: 'AI 工作流', en: 'AI Automation' }] },
      { label: { zh: '数据分析', en: 'Data' }, tags: ['Python', 'SQL', 'PowerBI'] },
      { label: { zh: '开发基础', en: 'Dev' }, tags: ['Java', 'C/C++'] },
      { label: { zh: '语言能力', en: 'Languages' }, tags: ['IELTS 7.5', 'CET-6 637', { zh: '听说读写流利', en: 'Fluent English' }] },
    ],
  },
  footer: {
    copyright: { zh: '© 2026 任小为', en: '© 2026 Xiaowei Ren' },
  },
  lang: {
    zh: '中',
    en: 'EN',
    switchTo: { zh: 'English', en: '中文' },
  },
};
