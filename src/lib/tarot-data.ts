export interface TarotCardData {
  id: string;
  name: string;
  name_cn: string;
  image: string;
  keywords: string[];
  meaning_upright: string;
  meaning_reversed: string;
  element?: string;
  archetype?: string;
}

export const TAROT_DECK: TarotCardData[] = [
  {
    id: "fool",
    name: "The Fool",
    name_cn: "愚人",
    image: new URL("@/assets/fool_card.jpeg", import.meta.url).href,
    keywords: ["开始", "自由", "天真", "冒险", "潜力"],
    meaning_upright: "新的开始，自由的灵魂，天真与纯洁。你正站在悬崖边缘，准备踏上一段未知的旅程。相信直觉，拥抱无限可能。",
    meaning_reversed: "鲁莽，轻率，风险。小心不要过于冲动，忽视了眼前的危险。你的天真可能会被利用。",
    element: "Air",
    archetype: "The Wanderer"
  },
  {
    id: "magician",
    name: "The Magician",
    name_cn: "魔术师",
    image: new URL("@/assets/magician_card.jpeg", import.meta.url).href,
    keywords: ["创造力", "能力", "专注", "显化", "资源"],
    meaning_upright: "你拥有实现目标所需的一切资源。现在的关键是专注意志，将想法转化为现实。创造力与行动力的完美结合。",
    meaning_reversed: "才华被埋没，缺乏计划，操纵。小心不要被虚幻的表象迷惑，或者滥用你的能力去欺骗他人。",
    element: "Air",
    archetype: "The Creator"
  },
  {
    id: "priestess",
    name: "The High Priestess",
    name_cn: "女祭司",
    image: new URL("@/assets/priestess_card.jpeg", import.meta.url).href,
    keywords: ["直觉", "神秘", "潜意识", "内在智慧", "静默"],
    meaning_upright: "倾听内心的声音，信任你的直觉。现在的答案不在外在世界，而在你的潜意识深处。保持静默与观察。",
    meaning_reversed: "忽视直觉，肤浅，秘密被揭露。你可能与内在智慧断连，或者被表面的情绪所困扰。",
    element: "Water",
    archetype: "The Mystic"
  },
  {
    id: "empress",
    name: "The Empress",
    name_cn: "皇后",
    image: new URL("@/assets/empress_card.jpeg", import.meta.url).href,
    keywords: ["丰盛", "母性", "自然", "感官享受", "创造"],
    meaning_upright: "富足与丰收的时刻。拥抱生活中的美与爱，培养创造力。这是一个适合孕育新计划或享受成果的阶段。",
    meaning_reversed: "依赖，创造力受阻，过度放纵。小心不要陷入情感勒索或物质享乐的陷阱。",
    element: "Earth",
    archetype: "The Mother"
  },
  {
    id: "emperor",
    name: "The Emperor",
    name_cn: "皇帝",
    image: new URL("@/assets/emperor_card.jpeg", import.meta.url).href,
    keywords: ["权威", "结构", "控制", "父亲形象", "稳定"],
    meaning_upright: "建立秩序与规则。现在需要逻辑与纪律来掌控局面。展现领导力，为生活构建坚实的基础。",
    meaning_reversed: "暴政，僵化，缺乏自律。过于强势可能会招致反抗，或者缺乏结构导致混乱。",
    element: "Fire",
    archetype: "The Father"
  },
  {
    id: "hierophant",
    name: "The Hierophant",
    name_cn: "教皇",
    image: new URL("@/assets/hierophant_card.jpeg", import.meta.url).href,
    keywords: ["传统", "信仰", "教育", "精神指引", "从众"],
    meaning_upright: "遵循传统与既定规则。寻求精神导师的指引或加入某个团体。现在不是打破常规的时候，而是学习与传承。",
    meaning_reversed: "挑战权威，非传统，个人信仰。你可能感到受束缚，渴望寻找属于自己的精神道路。",
    element: "Earth",
    archetype: "The Teacher"
  },
  {
    id: "lovers",
    name: "The Lovers",
    name_cn: "恋人",
    image: new URL("@/assets/lovers_card.jpeg", import.meta.url).href,
    keywords: ["爱", "和谐", "选择", "价值观", "结合"],
    meaning_upright: "深层的情感联结与和谐。面临重要的人生抉择，需要跟随内心的价值观。不仅仅是爱情，更是自我的整合。",
    meaning_reversed: "不和谐，分离，错误的决定。可能面临关系破裂或内心冲突，需要重新审视自己的选择。",
    element: "Air",
    archetype: "The Partner"
  },
  {
    id: "chariot",
    name: "The Chariot",
    name_cn: "战车",
    image: new URL("@/assets/chariot_card.jpeg", import.meta.url).href,
    keywords: ["意志力", "胜利", "决心", "行动", "控制"],
    meaning_upright: "通过意志力与自律克服障碍。确立目标，勇往直前。胜利属于那些敢于掌控命运的人。",
    meaning_reversed: "失控，攻击性，失败。可能遭遇挫折或失去方向，需要学会何时放手，何时坚持。",
    element: "Water",
    archetype: "The Warrior"
  },
  {
    id: "strength",
    name: "Strength",
    name_cn: "力量",
    image: new URL("@/assets/strength_card.jpeg", import.meta.url).href,
    keywords: ["勇气", "耐心", "同情", "内在力量", "控制"],
    meaning_upright: "以柔克刚的智慧。真正的力量来自内心的坚定与包容，而非蛮力。面对困难时保持优雅与耐心。",
    meaning_reversed: "软弱，自我怀疑，原始本能。可能被恐惧或欲望控制，需要找回内心的平衡。",
    element: "Fire",
    archetype: "The Hero"
  },
  {
    id: "hermit",
    name: "The Hermit",
    name_cn: "隐士",
    image: new URL("@/assets/hermit_card.jpeg", import.meta.url).href,
    keywords: ["内省", "孤独", "指引", "探索", "智慧"],
    meaning_upright: "向内探索的时刻。暂时从喧嚣中抽离，寻找内心的答案。孤独是智慧的摇篮，不要害怕独处。",
    meaning_reversed: "孤立，寂寞，拒绝沟通。可能陷入过度封闭或逃避现实，需要适度与外界连接。",
    element: "Earth",
    archetype: "The Sage"
  },
  {
    id: "wheel",
    name: "Wheel of Fortune",
    name_cn: "命运之轮",
    image: new URL("@/assets/wheel_card.jpeg", import.meta.url).href,
    keywords: ["改变", "循环", "命运", "转折点", "运气"],
    meaning_upright: "命运的转折点到来。顺应变化的潮流，抓住机遇。生活是起伏的循环，现在是上升期。",
    meaning_reversed: "厄运，抗拒改变，失控。可能遭遇意外的挫折，提醒你世事无常，学会适应。",
    element: "Fire",
    archetype: "Destiny"
  },
  {
    id: "justice",
    name: "Justice",
    name_cn: "正义",
    image: new URL("@/assets/justice_card.jpeg", import.meta.url).href,
    keywords: ["公正", "真理", "因果", "法律", "平衡"],
    meaning_upright: "种瓜得瓜，种豆得豆。追求公平与真相，理性地做出判断。法律事务或契约将得到公正的裁决。",
    meaning_reversed: "不公，偏见，逃避责任。可能遭遇不公正的待遇，或者自己在逃避应承担的后果。",
    element: "Air",
    archetype: "The Judge"
  },
  {
    id: "hanged_man",
    name: "The Hanged Man",
    name_cn: "倒吊人",
    image: new URL("@/assets/hanged_man_card.jpeg", import.meta.url).href,
    keywords: ["牺牲", "等待", "新视角", "放下", "停滞"],
    meaning_upright: "换个角度看世界。有时退步即是进步，放下执念才能获得智慧。利用这段停滞期进行深层的反思。",
    meaning_reversed: "无谓的牺牲，拖延，顽固。可能陷入僵局而不自知，或者拒绝改变现状。",
    element: "Water",
    archetype: "The Martyr"
  },
  {
    id: "death",
    name: "Death",
    name_cn: "死神",
    image: new URL("@/assets/death_card.jpeg", import.meta.url).href,
    keywords: ["结束", "转化", "重生", "改变", "过渡"],
    meaning_upright: "彻底的结束与新的开始。旧的模式必须死去，新的生命才能诞生。不要抗拒改变，拥抱转化的过程。",
    meaning_reversed: "抗拒改变，停滞，腐朽。执着于过去只会带来痛苦，学会放手才能解脱。",
    element: "Water",
    archetype: "Transformation"
  },
  {
    id: "temperance",
    name: "Temperance",
    name_cn: "节制",
    image: new URL("@/assets/temperance_card.jpeg", import.meta.url).href,
    keywords: ["平衡", "调和", "耐心", "目的", "适度"],
    meaning_upright: "寻找中庸之道。将对立的力量融合，创造和谐。耐心与适度是当前的关键，不要急于求成。",
    meaning_reversed: "失衡，极端，缺乏耐心。可能在某些方面过度消耗，需要重新调整生活的节奏。",
    element: "Fire",
    archetype: "The Alchemist"
  },
  {
    id: "devil",
    name: "The Devil",
    name_cn: "恶魔",
    image: new URL("@/assets/devil_card.jpeg", import.meta.url).href,
    keywords: ["束缚", "物质主义", "成瘾", "欲望", "阴影"],
    meaning_upright: "面对内心的阴影与束缚。可能被物质欲望或不良习惯所控制。意识到枷锁的存在是解脱的第一步。",
    meaning_reversed: "解脱，打破束缚，觉醒。开始摆脱负面的影响，重获自由与力量。",
    element: "Earth",
    archetype: "The Shadow"
  },
  {
    id: "tower",
    name: "The Tower",
    name_cn: "高塔",
    image: new URL("@/assets/tower_card.jpeg", import.meta.url).href,
    keywords: ["突变", "混乱", "启示", "觉醒", "灾难"],
    meaning_upright: "突如其来的巨变。虚假的基础崩塌，虽然痛苦，但这是觉醒的契机。接受混乱，重建更真实的自我。",
    meaning_reversed: "勉强维持，逃避灾难，恐惧。可能在抗拒不可避免的改变，只会延长痛苦的过程。",
    element: "Fire",
    archetype: "Destruction"
  },
  {
    id: "star",
    name: "The Star",
    name_cn: "星星",
    image: new URL("@/assets/star_card.jpeg", import.meta.url).href,
    keywords: ["希望", "灵感", "平静", "疗愈", "指引"],
    meaning_upright: "风暴过后的宁静。充满希望与灵感，身心得到疗愈。跟随这颗指引之星，你的愿望将会实现。",
    meaning_reversed: "绝望，缺乏信心，断连。可能感到迷茫或失去动力，需要重新找回内心的光芒。",
    element: "Air",
    archetype: "Hope"
  },
  {
    id: "moon",
    name: "The Moon",
    name_cn: "月亮",
    image: new URL("@/assets/moon_card.jpeg", import.meta.url).href,
    keywords: ["幻觉", "恐惧", "潜意识", "直觉", "不安"],
    meaning_upright: "潜意识的涌动与不安。事物并非表面看起来那样，小心幻觉与欺骗。信任直觉，穿越迷雾。",
    meaning_reversed: "清晰，揭露真相，恐惧消散。迷雾逐渐散去，真相浮出水面，内心重获平静。",
    element: "Water",
    archetype: "The Dreamer"
  },
  {
    id: "sun",
    name: "The Sun",
    name_cn: "太阳",
    image: new URL("@/assets/sun_card.jpeg", import.meta.url).href,
    keywords: ["快乐", "成功", "活力", "清晰", "自信"],
    meaning_upright: "纯粹的快乐与成功。阴霾散去，阳光普照。充满活力与自信，享受生命中的美好时刻。",
    meaning_reversed: "悲伤，过度乐观，暂时的阴云。可能感到短暂的失落，但太阳总会再次升起。",
    element: "Fire",
    archetype: "The Child"
  },
  {
    id: "judgement",
    name: "Judgement",
    name_cn: "审判",
    image: new URL("@/assets/judgement_card.jpeg", import.meta.url).href,
    keywords: ["觉醒", "重生", "决断", "感召", "宽恕"],
    meaning_upright: "灵魂的觉醒与重生。听到内心的召唤，做出重要的人生决断。放下过去，迎接新的生命阶段。",
    meaning_reversed: "自我怀疑，拒绝召唤，后悔。可能在逃避成长的机会，或者沉溺于过去的错误。",
    element: "Fire",
    archetype: "Rebirth"
  },
  {
    id: "world",
    name: "The World",
    name_cn: "世界",
    image: new URL("@/assets/world_card.jpeg", import.meta.url).href,
    keywords: ["圆满", "成就", "整合", "旅行", "完成"],
    meaning_upright: "旅程的圆满结束。达成目标，获得成就与整合。这是完美的时刻，也是新循环的开始。",
    meaning_reversed: "未完成，停滞，缺乏闭环。可能还差最后一步，或者感到空虚，需要寻找缺失的拼图。",
    element: "Earth",
    archetype: "Completion"
  }
];

export const CARD_BACK_IMAGE = new URL("@/assets/card_back.jpeg", import.meta.url).href;
