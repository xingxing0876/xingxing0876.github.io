export const profile = {
	name: '谢恒星',
	title: 'Java高级研发工程师',
	location: '深圳',
	email: 'xiehengxing@foxmail.com',
	github: 'https://github.com/xingxing0876',
	zhihu: 'https://www.zhihu.com/people/AJLoveChina',
	blog: 'http://hejie.nigeerhuo.com',
	experienceYears: 10,
	tagline: '构建低延迟、高可用的金融科技系统',
	summary:
		'10 年 Java 后端开发经验，近 5 年专注于金融证券交易系统。擅长将复杂业务需求转化为高可用、可扩展的技术方案，具备分布式低延迟系统设计与 AI Agent 工程化落地经验。',
	about:
		'现任威趣科技后端技术负责人，主导港美股量化交易平台与 AI 交易 Agent 系统架构设计。熟悉证券交易系统核心链路，具备 4 年以上研发团队管理经验，能在交易日高压环境下做出稳健的技术判断。',
};

export const experience = [
	{
		company: '威趣（深圳）科技有限公司',
		role: '后端技术负责人',
		period: '2022.03 — 至今',
		highlights: [
			'主导港美股分布式低延迟交易系统架构设计，端到端延迟达毫秒级',
			'基于 LangGraph 构建 AI 量化交易 Agent，实现行情感知→决策→执行闭环',
			'负责后端研发团队，主导技术方案评审、系统选型与架构演进',
		],
	},
	{
		company: '深圳三代人科技有限公司',
		role: 'Java高级研发工程师',
		period: '2018.08 — 2022.02',
		highlights: [
			'参与小豆苗千万级用户母婴平台微服务架构演进与核心模块开发',
			'主导医生端项目从零搭建，覆盖在线咨询、评价激励、科普知识库等模块',
			'设计基于 RabbitMQ 的最终一致性方案，解决跨省门诊数据同步难题',
		],
	},
	{
		company: '众享随行科技有限公司',
		role: 'Java高级研发工程师',
		period: '2017.08 — 2018.07',
		highlights: [
			'参与镜享 3D 眼镜共享租赁平台微服务拆分与服务治理',
			'设计订单全生命周期状态机，对接支付宝预授权与分时计费',
			'集成芝麻信用免押体系，Redis + RocketMQ 支撑节假日高峰流量',
		],
	},
	{
		company: '郑州市绿林客信息技术有限公司',
		role: 'Java研发工程师',
		period: '2015.10 — 2017.06',
		highlights: [
			'负责珍医堂在线商城商品、订单、支付等核心业务模块开发',
			'对接微信/支付宝支付，实现回调幂等处理与掉单补偿机制',
			'Redis 缓存优化将商品详情页 QPS 从 200 提升至 1500+',
		],
	},
];

export const education = [
	{
		school: '黄河水利职业技术学院',
		degree: '专科',
		period: '2012.09 — 2015.06',
	},
];

export const skills = {
	core: ['Java', '多线程并发', 'JVM调优', 'Netty', 'Disruptor'],
	middleware: ['MySQL', 'Redis', 'Kafka', 'RocketMQ', 'Elasticsearch', 'Nacos'],
	architecture: ['微服务', '分布式事务', '分库分表', 'LangGraph', 'AI Agent'],
};
