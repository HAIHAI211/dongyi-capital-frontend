console.log('env', process.env.NODE_ENV)

export default {
  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0" // default: localhost,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  router: {
    // base: "/dy/"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "东义资本",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/common", '~/assets/css/bgimg'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/scroll.js",
      mode: "client"
    },
    {
      src: "~/plugins/swiper.js",
      mode: "client"
    },
    {
      src: '~/plugins/webp.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss"],
  publicRuntimeConfig: {
    BDMapAK: 'kVesO4PkYjWXEDxxNePRXaH0mrwg5b06',
    isDev: process.env.NODE_ENV === 'development',
    webp: 0 // undefined
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-i18n",
      {
        // seo: false,
        locales: [
          {
            code: "cn",
            name: "简体中文"
          },
          {
            code: "en",
            name: "English"
          }
        ],
        defaultLocale: "cn",
        vueI18n: {
          fallbackLocale: "cn",
          messages: {
            cn: {
              title: "东义资本",
              welcome: "欢迎",
              index: "首页",
              investment: "投资",
              philosophy: "理念",
              investmentPhilosophy: "投资理念",
              about: "关于",
              us: "我们",
              aboutUs: "关于我们",
              join: "加入",
              joinUs: "加入我们",
              sec_title_1: "科技创新",
              sec_subTitle_1: "是社会发展最重要的驱动力",
              // sec_content_1_1:
              //   "2018年9月，习近平总书记提出科学技术是第一生产力，创新是引领发展的第一动力。",
              sec_content_1_2:
                '科技创新以工业革命的形式促进人类社会的巨大发展，带动了人类生产力、物质、文化水平的长足进步，人类共经历了三次工业革命。第一次工业革命所开创的“蒸汽时代”(1760-1840年)，以蒸汽动力技术达到实用为标志，实现了农耕文明向工业文明的过渡。第二次工业革命进入了"电气时代"(1860-1950年)，以电气化为主导技术，使得电力、钢铁、铁路、化工、汽车等重工业兴起，并逐渐形成一个全球化的国际政治、经济体系。第三次工业革命开创了"信息时代"(1950-)，以计算机及信息技术发明和应用为主要标志，促进了生产自动化、管理现代化、科技现代化和国防技术现代化，以全球互联网络为标志的信息高速公路正在缩短人类交往的距离。第四次工业革命将进入“智能化时代”，以人工智能、新材料技术、分子工程、石墨烯、虚拟现实、量子信息技术、可控核聚变、清洁能源以及生物技术为技术突破口的工业革命。',

              r_title: "人类历史上的四次工业革命",
              r_title_1: "蒸汽和机械化",
              r_subTitle_1: "第一次工业革命",
              r_title_2: "电力和规模化",
              r_subTitle_2: "第二次工业革命",
              r_title_3: "信息和自动化",
              r_subTitle_3: "第三次工业革命",
              r_title_4: "数据和智能化",
              r_subTitle_4: "第四次工业革命",

              sec_title_2: "碳中和",
              sec_subTitle_2: "将带来全球能源及经济的结构性调整",
              sec_content_2_1:
                "2020年12月11日，联合国秘书长安东尼奥.古特雷斯提出，到2050年实现全球碳中和是当今世界最为紧迫的使命。",
              sec_content_2_2:
                "碳中和是指国家、企业、产品、活动或个人在一定时间内直接或间接产生的二氧化碳或温室气体排放总量，通过植树造林、节能减排等形式，以抵消自身产生的二氧化碳或温室气体排放量，实现正负抵消，达到相对“零排放”。2020年9月22日，中国政府在第七十五届联合国大会上提出：“中国将提高国家自主贡献力度，采取更加有力的政策和措施，二氧化碳排放力争于2030年前达到峰值，努力争取2060年前实现碳中和。”",
              sec_content_2_3:
                "“碳中和”是中国能源安全和经济转型的内在需求，也是世界各国利益对立和统一。其中对立体现在“碳排放权”背后发展权的博弈，统一体现在全球应对气候变化政策的一致。",
              tzh_title:
                "实现碳中和六大路线：源头减量、能源替代、节能提效、回收利用、工艺改造、碳捕集",
              tzh_f_t_1: "源头减量",
              tzh_f_1:
                "压减落后产能，限制高耗能产品，降低能耗进而减少二氧化碳排放；",
              tzh_f_t_2: "能源替代",
              tzh_f_2: "以风光、储能、氢能、新能源汽车为代表的的新能源行业；",
              tzh_f_t_3: "节能提效",
              tzh_f_3: "能源再利用，提高公共建筑能效水平；",
              tzh_f_t_4: "回收利用",
              tzh_f_4: "再生资源的回收利用可以有效减少初次生产过程中的碳排放；",
              tzh_f_t_5: "工艺改造",
              tzh_f_5:
                "主要集中在电池技术升级、智慧电网、分布式电源、特高压、能源互联网、装配式等方面； ",
              tzh_f_t_6: "碳捕集",
              tzh_f_6:
                "二氧化碳从排放源中分离后或直接加以利用或封存，以实现二氧化碳减排的工业过程",
              sec_title_2_1: "全球价值链",
              sec_subTitle_2_1: "对中国未来十年投资机会的影响",
              sec_h_2_1: "在全球化分工背景下，各国在产业链中的位置",
              sec_title_2_2: "全球化与内循环并举",
              sec_subTitle_2_2: "",
              sec_h_2_2:
                "世界银行对146个国家进行了调查，对这些国家在1990-2015年间从事的价值链活动分为4类",
              v1: "大宗商品及原料贸易",
              v2: "初级制造业",
              v3: "先进制造业和服务业",
              v4: "创新活动",
              k1:
                "位于上下游不同行业的经济增加值率差异很大：上游大宗商品及原料贸易约为55%，下游创新活动约为42%，中游的初级制造约为18%，中游的先进制约为28%。经济增加值率越高的阶段在全球经济活动中的话语权越重，也是国家与国家之间开展竞争的核心所在。中国目前卡脖子的关键问题主要是经济增加值比较高的环节：大宗商品，例如石油、铁矿石、铜、锂；创新活动，芯片、操作系统、算法。",
              k2:
                "我们认为未来中国境内投资，应首先围绕大宗商品、创新活动展开。",
              gg1: "全球化趋势不可逆",
              gg1_1:
                "随着全球工业革命的不断推进，全球化的动力不仅来自贸易需求，如来源于李嘉图的要素禀赋理论，即自然资源、劳动力和资本及技术的差异，使得全球贸易蓬勃发展，还来自于跨国公司为了提高资本回报率，在全球配置资源的需求。从图2不难看出，没有或少量参与全球化分工的经济体已经很少了，要闭关自守几乎不可能。在数字时代，互联网或高科技企业要实现全球化的路比传统企业宽几百倍。 例如，美国的谷歌、英特尔、亚马逊等，中国的腾讯、阿里、华为等，都在很短的时间里扩大了其全球业务；相比之下，全球500强中的很多中国传统企业，其海外业务收入的占比几乎可以忽略。",
              gg2: "内循环为主体与全球化并不矛盾",
              gg2_1: `无论是一带一路战略、自贸区试点、自由港建设，还是举办进口博览会、提出“六稳（其中就有稳外贸、稳外资）”等，无不体现出我国一直在为“外循环”的畅通和扩大而努力。`,
              gg2_2: `2005年我国的外贸依存度达到了历史最高点64%，之后缓慢下降，如今已降至30%左右，而且，加工贸易的占比也在下降，即“两头在外，大进大出”的外循环现象在减弱，内需对经济增长的贡献一直在提升。因此，“内循环为主体”事实上已经成为趋势。`,
              gg2_3: `我国在扩大内需的同时，既加大力度引进外资，又加强合作输出资本，这实际上也反映了“加快形成以国内大循环为主体、国内国际双循环相互促进的新发展格局”的战略思路。内循环为主体，应该更多是要改善“供给端”。中国在全球供应链中低端的供给应该没有太大问题，关键是高端的供给能力偏弱。`,
              gg2_4: `我们认为未来中国境内投资，其次应围绕提升高端供给能力展开。`,
              sec_title_3_1: `“东义释义”`,
              sec_subTitle_3_1: "",
              sec_title_3_2: `团队成员`,
              sec_subTitle_3_2: ``,
              d_t: `东的繁体字`,
              d_1: `“東”是由“日”、“木”组合成的字，意思是太阳初升，高度未超过树梢时的方位，指示为东方；`,
              d_2: "表示我们的方位，上海是中国东方的一颗明珠；",
              d_3: "日出东方，表示我们仍在创业的过程中；",
              d_4: "旭日东升，表现我们朝气蓬勃，事业蒸蒸日上。",
              y_2: `义者，宜也`,
              y_3: `取自《中庸》“适宜”的意思，后来代指人类社会活动和人际关系中应当尊循的最高原则和应当追求的最高道德。`,
              y_4: `“君子之于天下也，无适也，无莫也，义之与比。”——《论语》`,
              y_5: `含义：君子对于天下的万事万物，并没有规定怎么样处理好，也没有规定怎么样处理不好，必须根据实际情况，只要合理恰当，就可以了。`,
              y_6: `我们在公司经营中和商业活动中，既要坚持原则，又要有灵活变通的精神，做到有经有权。`,
              l_1_title: `创始合伙人`,
              l_1_name: `袁东`,
              l_1_desc: `同济大学管理科学与工程专业硕士研究生。上海东义资产管理有限公司董事长，投资决策委员会委员。长期从事新能源、大数据、人工智能、物流智能装备等方向的投资。`,
              l_2_title: `合伙人`,
              l_2_name: `陈建武`,
              l_2_desc: `毕业于北京大学国际政治系，哲学博士。东义资本合伙人，负责体育产业投资，管理欧洲、亚洲投资业务。同时担任欧洲上海商会、东亚上海商会等多个国际知名社团组织的领导人。在金融、房地产投资，以及包含马术产业在内的体育文化产业投资、国际大宗商品贸易及奢侈品贸易等方面有丰富经验。`,
              l_3_title: `其他团队成员`,
              l_3_p_1: `来自普华永道、德勤、安永、毕马威会计师事务所，工作三年以上的审计师；`,
              l_3_p_2: `来自SAP、Oracle、微软、IBM等大型软件企业，从事ERP实施三年以上的工程师；`,
              l_3_p_3: `来自汽车行业的工程师；来自物流行业的工程师。`,
              last_title: `过往案例`,
              last_c_1: `上海外高桥集团股份有限公司`,
              last_c_2: `西藏城市发展投资股份有限公司`,
              last_c_3: `浙江新安化工集团股份有限公司`,
              last_c_4: `福建雪人股份有限公司`,
              last_c_5: `青海互助青稞酒股份有限公司`,
              last_c_6: `同程艺龙控股有限公司`,
              last_c_7: `巴士在线股份有限公司`,
              last_c_8: `杭州市园林绿化股份有限公司`,
              last_c_9: `江苏东大集成电路系统工程技术有限公司`,
              last_c_10: `上海数鸣人工智能科技有限公司`,
              last_c_11: `礼思（上海）材料科技有限公司`,
              last_c_12: ``,
              area_title: "投资领域",
              area_h_1: "新能源汽车上游锂资源及相关技术",
              area_p_1:
                "氢氧化锂、锂合金、锂金属、正极材料、负极材料、锂超容电池及材料、聚合物储能锂离子电池、固态电池及材料、电池全生命周期管理、电动汽车V2G技术",
              area_h_2: "大数据和人工智能",
              area_p_2:
                "Martech(营销科技)、SCRM(社会化客户关系管理)、CDP/CEM(客户管理技术平台)、SaaS(企业服务软件)、AIOT(智能物联网)、云计算、联邦建模、机器学习、电动车直销会员体系",
              address_1: '上海市长宁区华山路1245号兴国宾馆31号楼',
              address_2: '上海市长宁区延安西路726号华敏翰尊大厦9楼A座',
              rc_title: '人员招聘',
              rc_1: '高级投资经理',
              rc_2: '理工科专业教育背景、从事会计师行业三年以上候选人；',
              rc_3: '理工科专业教育背景、从事数据分析、数据挖掘、人工智能算法等相关行业三年以上候选人。',
              rc_4: '简历发送至：'

            },
            en: {
              title: "DONGYI CAPITAL",
              welcome: "Welcome",
              index: "Home  Page",
              investment: "Investment",
              philosophy: "Philosophy",
              investmentPhilosophy: "Investment  Philosophy",
              about: "About",
              us: "Us",
              aboutUs: "About  Us",
              join: "Join",
              joinUs: "Join  Us",
              sec_title_1: "Technological Innovation",
              sec_subTitle_1:
                "The most important driving force for social development",
              // sec_content_1_1:
              //   "In September 2018, President Xi Jinping commented that science and technology are the primary productivity, and innovation is the primary driving force for development.",
              sec_content_1_2: `Technology innovation has accelerated tremendous development in human society in forms of industrial revolution, which leads to long-lasting progress in human productivity, material, and cultural levels. Human society has experienced three industrial revolutions. “The Age of Steam" (1760-1840) brought by the first industrial revolution was marked by the practicality of steam power technology and realized the transition from agricultural civilization to industrial civilization. The second industrial revolution brought human to "The Age of Electricity" (1860-1950). With electrification as the leading technology, heavy industries such as electric power, steel, railways, chemicals, and automobiles emerged, and gradually formed a globalized international political and economic system. The third industrial revolution led us to "The Age of Information" (1950-), which was marked by the invention and application of computer and information technology. It promoted production automation, management modernization, scientific and technological modernization, and national defense technology modernization. The information superhighway based on global internet shortened the distance of human interaction. The fourth industrial revolution will be "The Age of Intelligence". With artificial intelligence, new material technology, molecular engineering, graphene, virtual reality, quantum information technology, controllable nuclear fusion, clean energy, and biotechnology as the technological breakthroughs of the fourth industrial revolution.`,
              r_title: "The four industrial revolutions in human history",
              r_title_1: "Steam and mechanization",
              r_subTitle_1: "The first industrial revolution",
              r_title_2: "Electricity and scale",
              r_subTitle_2: "The second industrial revolution",
              r_title_3: "Information and automation",
              r_subTitle_3: "The third industrial revolution",
              r_title_4: "Date and intelligence",
              r_subTitle_4: "The fourth industrial revolution",
              sec_title_2: "",
              sec_subTitle_2:
                "The structural adjustment of global energy and economy brought by Carbon Neutrality",
              sec_content_2_1:
                "On December 11, 2020, United Nations Secretary-General António Guterres stressed that achieving global carbon neutrality by 2050 will be the most urgent mission of the world today.",
              sec_content_2_2:
                'Carbon neutrality refers to the concept that by knowing the total amount of carbon dioxide or greenhouse gas emissions generated directly or indirectly by our country, enterprise, product, activity or individual in a certain period of time, we can work on afforestation, energy saving and emission reduction, etc., to offset the carbon dioxide or greenhouse gas generated by our own emissions, to achieve the positive and negative offsets, as the relatively "zero emissions."  On September 22, 2020,  Chinese government proposed at the 75th UN General Assembly that China will adopting more powerful policies and measures,to increase its national contributions in carbon neutrality. We will try to reach the peak of carbon dioxide emissions by 2030, and aim to achieve carbon neutrality by 2060.',
              sec_content_2_3: `"Carbon neutrality" is an inherent need for China's energy safety and economic transformation. It is also the opposition and unification of interests among all countries in the world. The opposition refers to the game over the "carbon emission right", the unification, on the other hand, refers to the consensus of global policy on climate change.`,
              tzh_title:
                "There are six major routes in achieving carbon neutrality, known as source reduction, energy substitution, energy saving and efficiency improvement, recycling, process transformation, and carbon capture.",
              tzh_f_t_1: "Source reduction",
              tzh_f_1:
                "to reduce backward production capacity, limit energy-intensive products, reduce energy consumption and reduce carbon dioxide emissions;",
              tzh_f_t_2: "Energy substitution",
              tzh_f_2:
                "new energy industries represented by wind and solar, energy storage, hydrogen energy, and new energy vehicles; ",
              tzh_f_t_3: "Energy saving and efficiency improvement",
              tzh_f_3:
                "energy reuse to improve the energy efficiency of public buildings;",
              tzh_f_t_4: "Recycling",
              tzh_f_4:
                "recycling of renewable resources which can effectively reduce carbon emissions in the initial production process;",
              tzh_f_t_5: "Process transformation",
              tzh_f_5:
                "mainly focusing on battery technology upgrades and wisdom power grids, distributed power sources, UHV, energy internet, assembly, etc.; ",
              tzh_f_t_6: "Carbon capture",
              tzh_f_6:
                "industrial processes where carbon dioxide is separated from emission sources that used or stored directly to achieve carbon dioxide emission reduction.",
              sec_title_2_1: "",
              sec_subTitle_2_1:
                "The impact of Global Value Chains on China's investment opportunities in the next ten years",
              sec_h_2_1:
                "The position of countries in the industrial chain in the context of global division of labor",
              sec_title_2_2: "",
              sec_subTitle_2_2:
                "The simultaneously Developed Globalization and Domestic Circulation",
              sec_h_2_2:
                "The World Bank conducted a survey of 146 countries and divided the value chain activities of these countries into 4 categories during 1990-2015:",
              v1: "commodity and raw material trade",
              v2: "primary manufacturing",
              v3: "advanced manufacturing and service industry",
              v4: "innovation activities",
              k1: `The economic value-added rates of different industries located in the upstream and downstream are very different: the upstream trade in bulk commodities and raw materials is about 55%, the downstream innovation activities are about 42%, the midstream primary manufacturing is about 18%, and the midstream advanced restriction is 28%. The higher the rate of economic value-added, the larger discourse power global economic activities will have. It is also the core competence of the competition between countries. The major issue of China's current neck-stuck economic problem is the relatively high economic value-added links: commodities such as oil, iron ore, copper, lithium; and innovative activities, chips, operating systems, algorithms.`,
              k2:
                "We hereby believe that in the future, domestic investment in China should focus on commodities and innovative activities.",
              gg1: "Irreversible trend of globalization",
              gg1_1:
                "With the development of the global industrial revolution, the driving force of globalization not only comes from trade demand, such as from Ricardo’s factor endowment theory, that is, the difference in natural resources, labor, capital and technology that makes global trade flourish, but also from multinational companies in order to increase the rate of ROC(return on capital), the need to allocate resources around the world. From Figure 2 it is clear that there are very few economies that have none or a small amount of participation in the globalization of division of labor, and it is almost impossible to shut up from the world. In the digital age, internet or high-tech companies are able to achieve globalization hundreds of times faster than that of traditional companies.  For example, Google, Intel, Amazon in the United States, Tencent, Alibaba, Huawei in China, etc. have all expanded their global business in a short period of time. In contrast, although many traditional Chinese companies in the Fortune Global 500 have their overseas businesses, the proportion of business income is almost negligible.",
              gg2:
                "Domestic circulation as the mainstay - uncontradictory to globalization",
              gg2_1: `Whether it is the “One Belt One Road” strategy, pilot free trade zone, free port construction, or organizing the CIIE(China International Import EXPO), “ensuring stability on the six fronts” (including stabilizing foreign trade and foreign investment), all of them shows that our country has been promoting the strategy to reinforce and expand the "international circulation".`,
              gg2_2: `In 2005, our country’s foreign trade dependence reached a historical height of 64%, and then slowly declined. Now it has dropped to about 30%. Moreover, the proportion of processing trade is also declining. The cycle phenomenon is weakening, and the contribution of domestic demand to economic growth has been gradually increasing. Therefore, "domestic circulation as the mainstay" has actually become a trend.`,
              gg2_3: `While expanding domestic demand, our country has not only increased the efforts to attract foreign capital, but also strengthened cooperation to export capital. This actually reflects the new development strategy of "domestic circulation as the mainstay and domestic and international circulations reinforcing each other". The domestic circulation being the mainstay should be more about improving the "supply". China's low-end supply in the global supply chain should not be too problematic, while the key is to improve the high-end supply capacity which is still weak.`,
              gg2_4: `We then believe that in the future, China's domestic investment should focus on improving high-end supply capabilities.`,
              sec_title_3_1: ``,
              sec_subTitle_3_1: "The meaning of “Dongyi”",
              sec_title_3_2: `Our Team`,
              sec_subTitle_3_2: ``,
              d_t: `The traditional character of "Dong"`,
              d_1: `is a combination of two
              characters - "sun" and "wood", meaning that the sun rises to
              treetops, indicating the position of east.`,
              d_2:
                "The character reflected our position, that Shanghai is the oriental pearl in Eastern China;",
              d_3:
                "It also means sunrise, that we are still in the process of early entrepreneurship;",
              d_4: "We are a vigorous team and our business is prospering.",
              y_2: `The righteous,the suitable one`,
              y_3: `Taken from "The Mean", the word "suitable" later refers to the highest principles that should be respected and the highest morals that should be pursued in human social activities and interpersonal relationships.`,
              y_4: `The Master said, "The superior man in the world does not set his mind either for anything, or against anything; what is right he will follow." – “The Analects”`,
              y_5: `Meaning: Gentleman does not stipulate how to handle everything in the world, or how to handle it well. It must be based on the actual situation, as long as it is reasonable and appropriate.`,
              y_6: `We must adhere to principles in managing the company’s daily operations and activities, while still considering the flexibility and proper means.`,
              l_1_title: `Founding Partner`,
              l_1_name: `Dong Yuan`,
              l_1_desc: `Mr. Yuan is the Master of Management Science and Engineering from Tongji University. He serves as President & Member of Investment Decision Committee of Dongyi Capital, Mr. Yuan persistently pursues the investment on New Energy, Big Data, AI and Intelligent Device in Logistics.`,
              l_2_title: `Partner`,
              l_2_name: `Jianwu Chen`,
              l_2_desc: `Dr. Chen is the Ph.D in Philosophy from the Department of International Politics, Peking University. He is supervising the investment in Sport Industry and investment business in Europe and Asia in Dongyi Capital, Dr. Chen is also the leaders of multiple worldwide well-known organizations and institutions, such as Europe Chamber of Commerce, Shanghai, and East-Asia Chamber of Commerce of Shanghai. He has got rich experience on finance, real estate investment, sports and cultural industry investment including equestrian, bulk commodity trade and luxury articles trade.`,
              l_3_title: `Other Team Members : `,
              l_3_p_1: `Former auditors from PWC, Deloitte, E&Y, KPMG who have more than three years of auditing experience; `,
              l_3_p_2: `Former engineers form SAP, Oracle, Microsoft and IBM who have more than three years of ERP  implementation experience;`,
              l_3_p_3: `and former engineers from automobile industry and logistics industry as well.`,
              last_title: `Portfolio`,
              last_c_1: `Shanghai Waigaoqiao Free Trade Zone Group Co.,Ltd.`,
              last_c_2: `Tibet Urban Development Investment Co.,Ltd.`,
              last_c_3: `Wynca Group`,
              last_c_4: `Snowman Group`,
              last_c_5: `Qinghai Huzhu Highland Barley Wine Co., Ltd.`,
              last_c_6: `Tongcheng-Elong`,
              last_c_7: `Bus Online`,
              last_c_8: `Hangzhou Landscaping Incorporated`,
              last_c_9: `Jiangsu Seuic Technology Co., Ltd.`,
              last_c_10: `Shuming Data`,
              last_c_11: `LIS (Shanghai) Material Technology Co., Ltd.`,
              area_title: "Investment Areas",
              area_h_1:
                "Upstream lithium resources and related technologies for new energy vehicles.",
              area_p_1: `Lithium hydroxide, lithium alloys, lithium metal, cathode materials, anode materials, lithium super capacity batteries and materials, polymer energy storage lithium-ion batteries, solid-state batteries and materials, battery life cycle management, electric vehicle V2G technology.`,
              area_h_2: "Big data and artificial intelligence",
              area_p_2: `Martech (Marketing Technology), SCRM (Social Customer Relationship Management), CDP/CEM (Customer Management Technology Platform), SaaS (Enterprise Service Software), AIOT (Intelligent Internet of Things), Cloud Computing, Federal Modeling, Machine Learning, Electric  Car Direct Membership System.`,
              address_1: 'Villa 31 Xingguo Hotel No.1245. Huashan Road, Changning District, Shanghai',
              address_2: 'Unit A, 9F, Huamin Empire Plaza No. 726. Yan An Road（W）,Changning District, Shanghai',
              rc_title: 'Recruitment',
              rc_1: 'Senior Investment Manager',
              rc_2: 'Candidates with a professional education background in science and engineering, preferably in the accountant industry with more than three years’ experience;',
              rc_3: 'Candidates with a professional education background in science and engineering, preferably in data analysis, data mining, artificial intelligence algorithms and other related industries with more than three years’ experience.',
              rc_4: 'Send your resume to：'
            }
          }
        }
      }
    ],
    [
      "nuxt-mq",
      {
        // Default breakpoint for SSR
        defaultBreakpoint: "sm",
        breakpoints: {
          xs: 640, // <= 640
          sm: 768, // 641 ~ 768
          md: 1024, // 769 ~ 1024
          lg: 1280, // 1025 ~ 1280
          xl: 1536, // 1281 ~ 1536
          xxl: Infinity
          // xs: 450,
          // sm: 640,
          // md: 768,
          // lg: 1024,
          // xl: 1280,
          // xxl: Infinity
        }
      }
    ]
  ],
  build: {
    postcss: {
      preset: {
        stage: 2
      }
    }
  }

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   publicPath: "https://l-test.linxuanketang.com/dy"
  // }
};
