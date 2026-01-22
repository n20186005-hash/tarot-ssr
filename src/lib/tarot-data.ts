export interface TarotCardData {
  id: string;
  image: string;
  element?: string;
  archetype?: string;
  name: {
    en: string;
    zh: string; // Traditional Chinese
  };
  keywords: {
    en: string[];
    zh: string[];
  };
  meanings: {
    en: {
      upright: string;
      reversed: string;
    };
    zh: {
      upright: string;
      reversed: string;
    };
  };
}

export const CARD_BACK_IMAGE = new URL("@/assets/card_back.jpeg", import.meta.url).href;

export const TAROT_DECK: TarotCardData[] = [
  {
    id: "fool",
    image: new URL("@/assets/fool_card.jpeg", import.meta.url).href,
    element: "Air",
    archetype: "The Wanderer",
    name: {
      en: "The Fool",
      zh: "愚人",
    },
    keywords: {
      en: ["Beginnings", "Freedom", "Innocence", "Risk", "Potential"],
      zh: ["開始", "自由", "天真", "冒險", "潛力"],
    },
    meanings: {
      en: {
        upright: "New beginnings, free spirit, innocence. You are standing at the edge of a cliff, ready to embark on an unknown journey. Trust your intuition and embrace infinite possibilities.",
        reversed: "Recklessness, risk-taking, naivety. Be careful not to be too impulsive or ignore immediate dangers. Your innocence might be taken advantage of.",
      },
      zh: {
        upright: "新的開始，自由的靈魂，天真與純潔。你正站在懸崖邊緣，準備踏上一段未知的旅程。相信直覺，擁抱無限可能。",
        reversed: "魯莽，輕率，風險。小心不要過於衝動，忽視了眼前的危險。你的天真可能會被利用。",
      },
    },
  },
  {
    id: "magician",
    image: new URL("@/assets/magician_card.jpeg", import.meta.url).href,
    element: "Air",
    archetype: "The Creator",
    name: {
      en: "The Magician",
      zh: "魔術師",
    },
    keywords: {
      en: ["Manifestation", "Resourcefulness", "Power", "Inspired Action"],
      zh: ["創造力", "能力", "專注", "顯化", "資源"],
    },
    meanings: {
      en: {
        upright: "You have all the resources you need to achieve your goals. The key now is to focus your will and turn ideas into reality. A perfect blend of creativity and action.",
        reversed: "Untapped talent, manipulation, poor planning. Be careful not to be misled by illusions or use your abilities to deceive others.",
      },
      zh: {
        upright: "你擁有實現目標所需的一切資源。現在的關鍵是專注意志，將想法轉化為現實。創造力與行動力的完美結合。",
        reversed: "才華被埋沒，缺乏計劃，操縱。小心不要被虛幻的表象迷惑，或者濫用你的能力去欺騙他人。",
      },
    },
  },
  {
    id: "priestess",
    image: new URL("@/assets/priestess_card.jpeg", import.meta.url).href,
    element: "Water",
    archetype: "The Mystic",
    name: {
      en: "The High Priestess",
      zh: "女祭司",
    },
    keywords: {
      en: ["Intuition", "Mystery", "Subconscious", "Inner Voice"],
      zh: ["直覺", "神秘", "潛意識", "內在智慧", "靜默"],
    },
    meanings: {
      en: {
        upright: "Listen to your inner voice and trust your intuition. The answers you seek are not in the external world, but deep within your subconscious. Maintain silence and observation.",
        reversed: "Ignored intuition, superficiality, secrets revealed. You may be disconnected from your inner wisdom or troubled by surface emotions.",
      },
      zh: {
        upright: "傾聽內心的聲音，信任你的直覺。現在的答案不在外在世界，而在你的潛意識深處。保持靜默與觀察。",
        reversed: "忽視直覺，膚淺，秘密被揭露。你可能與內在智慧斷連，或者被表面的情緒所困擾。",
      },
    },
  },
  {
    id: "empress",
    image: new URL("@/assets/empress_card.jpeg", import.meta.url).href,
    element: "Earth",
    archetype: "The Mother",
    name: {
      en: "The Empress",
      zh: "皇后",
    },
    keywords: {
      en: ["Abundance", "Nurturing", "Nature", "Pleasure"],
      zh: ["豐盛", "母性", "自然", "感官享受", "創造"],
    },
    meanings: {
      en: {
        upright: "A time of abundance and harvest. Embrace the beauty and love in life, cultivate creativity. This is a phase suitable for nurturing new plans or enjoying results.",
        reversed: "Dependence, blocked creativity, excess. Be careful not to fall into the trap of emotional blackmail or material indulgence.",
      },
      zh: {
        upright: "富足與豐收的時刻。擁抱生活中的美與愛，培養創造力。這是一個適合孕育新計劃或享受成果的階段。",
        reversed: "依賴，創造力受阻，過度放縱。小心不要陷入情感勒索或物質享樂的陷阱。",
      },
    },
  },
  {
    id: "emperor",
    image: new URL("@/assets/emperor_card.jpeg", import.meta.url).href,
    element: "Fire",
    archetype: "The Father",
    name: {
      en: "The Emperor",
      zh: "皇帝",
    },
    keywords: {
      en: ["Authority", "Structure", "Control", "Fatherhood"],
      zh: ["權威", "結構", "控制", "父親形象", "穩定"],
    },
    meanings: {
      en: {
        upright: "Establish order and rules. Logic and discipline are needed to control the situation. Show leadership and build a solid foundation for life.",
        reversed: "Tyranny, rigidity, lack of discipline. Being too domineering may invite rebellion, or lack of structure may lead to chaos.",
      },
      zh: {
        upright: "建立秩序與規則。現在需要邏輯與紀律來掌控局面。展現領導力，為生活構建堅實的基礎。",
        reversed: "暴政，僵化，缺乏自律。過於強勢可能會招致反抗，或者缺乏結構導致混亂。",
      },
    },
  },
  {
    id: "hierophant",
    image: new URL("@/assets/hierophant_card.jpeg", import.meta.url).href,
    element: "Earth",
    archetype: "The Teacher",
    name: {
      en: "The Hierophant",
      zh: "教皇",
    },
    keywords: {
      en: ["Tradition", "Belief", "Education", "Spiritual Guidance"],
      zh: ["傳統", "信仰", "教育", "精神指引", "從眾"],
    },
    meanings: {
      en: {
        upright: "Follow tradition and established rules. Seek guidance from a spiritual mentor or join a group. Now is not the time to break conventions, but to learn and inherit.",
        reversed: "Challenging authority, unconventionality, personal beliefs. You may feel restricted and desire to find your own spiritual path.",
      },
      zh: {
        upright: "遵循傳統與既定規則。尋求精神導師的指引或加入某個團體。現在不是打破常規的時候，而是學習與傳承。",
        reversed: "挑戰權威，非傳統，個人信仰。你可能感到受束縛，渴望尋找屬於自己的精神道路。",
      },
    },
  },
  {
    id: "lovers",
    image: new URL("@/assets/lovers_card.jpeg", import.meta.url).href,
    element: "Air",
    archetype: "The Partner",
    name: {
      en: "The Lovers",
      zh: "戀人",
    },
    keywords: {
      en: ["Love", "Harmony", "Choices", "Values"],
      zh: ["愛", "和諧", "選擇", "價值觀", "結合"],
    },
    meanings: {
      en: {
        upright: "Deep emotional connection and harmony. Facing important life choices, you need to follow your inner values. It's not just about romance, but self-integration.",
        reversed: "Disharmony, separation, bad choices. You may face relationship breakdown or inner conflict, needing to re-examine your choices.",
      },
      zh: {
        upright: "深層的情感聯結與和諧。面臨重要的人生抉擇，需要跟隨內心的價值觀。不僅僅是愛情，更是自我的整合。",
        reversed: "不和諧，分離，錯誤的決定。可能面臨關係破裂或內心衝突，需要重新審視自己的選擇。",
      },
    },
  },
  {
    id: "chariot",
    image: new URL("@/assets/chariot_card.jpeg", import.meta.url).href,
    element: "Water",
    archetype: "The Warrior",
    name: {
      en: "The Chariot",
      zh: "戰車",
    },
    keywords: {
      en: ["Willpower", "Victory", "Determination", "Action"],
      zh: ["意志力", "勝利", "決心", "行動", "控制"],
    },
    meanings: {
      en: {
        upright: "Overcoming obstacles through willpower and discipline. Set goals and move forward courageously. Victory belongs to those who dare to control their destiny.",
        reversed: "Loss of control, aggression, defeat. You may face setbacks or lose direction, needing to learn when to let go and when to persist.",
      },
      zh: {
        upright: "通過意志力與自律克服障礙。確立目標，勇往直前。勝利屬於那些敢於掌控命運的人。",
        reversed: "失控，攻擊性，失敗。可能遭遇挫折或失去方向，需要學會何時放手，何時堅持。",
      },
    },
  },
  {
    id: "strength",
    image: new URL("@/assets/strength_card.jpeg", import.meta.url).href,
    element: "Fire",
    archetype: "The Hero",
    name: {
      en: "Strength",
      zh: "力量",
    },
    keywords: {
      en: ["Courage", "Patience", "Compassion", "Inner Strength"],
      zh: ["勇氣", "耐心", "同情", "內在力量", "控制"],
    },
    meanings: {
      en: {
        upright: "Wisdom of gentleness overcoming strength. True power comes from inner firmness and inclusivity, not brute force. Maintain elegance and patience in difficulties.",
        reversed: "Weakness, self-doubt, raw instincts. You may be controlled by fear or desire, needing to regain inner balance.",
      },
      zh: {
        upright: "以柔克剛的智慧。真正的力量來自內心的堅定與包容，而非蠻力。面對困難時保持優雅與耐心。",
        reversed: "軟弱，自我懷疑，原始本能。可能被恐懼或慾望控制，需要找回內心的平衡。",
      },
    },
  },
  {
    id: "hermit",
    image: new URL("@/assets/hermit_card.jpeg", import.meta.url).href,
    element: "Earth",
    archetype: "The Sage",
    name: {
      en: "The Hermit",
      zh: "隱士",
    },
    keywords: {
      en: ["Introspection", "Solitude", "Guidance", "Wisdom"],
      zh: ["內省", "孤獨", "指引", "探索", "智慧"],
    },
    meanings: {
      en: {
        upright: "A time for introspection. Withdraw from the noise temporarily to find inner answers. Solitude is the cradle of wisdom, don't fear being alone.",
        reversed: "Isolation, loneliness, withdrawal. You may be overly closed off or escaping reality, needing to connect with the outside world moderately.",
      },
      zh: {
        upright: "向內探索的時刻。暫時從喧囂中抽離，尋找內心的答案。孤獨是智慧的搖籃，不要害怕獨處。",
        reversed: "孤立，寂寞，拒絕溝通。可能陷入過度封閉或逃避現實，需要適度與外界連接。",
      },
    },
  },
  {
    id: "wheel",
    image: new URL("@/assets/wheel_card.jpeg", import.meta.url).href,
    element: "Fire",
    archetype: "Destiny",
    name: {
      en: "Wheel of Fortune",
      zh: "命運之輪",
    },
    keywords: {
      en: ["Change", "Cycles", "Destiny", "Turning Point"],
      zh: ["改變", "循環", "命運", "轉折點", "運氣"],
    },
    meanings: {
      en: {
        upright: "A turning point in destiny has arrived. Go with the flow of change and seize opportunities. Life is a cycle of ups and downs, now is the upswing.",
        reversed: "Bad luck, resistance to change, loss of control. You may encounter unexpected setbacks, reminding you that things are impermanent, learn to adapt.",
      },
      zh: {
        upright: "命運的轉折點到來。順應變化的潮流，抓住機遇。生活是起伏的循環，現在是上升期。",
        reversed: "厄運，抗拒改變，失控。可能遭遇意外的挫折，提醒你世事無常，學會適應。",
      },
    },
  },
  {
    id: "justice",
    image: new URL("@/assets/justice_card.jpeg", import.meta.url).href,
    element: "Air",
    archetype: "The Judge",
    name: {
      en: "Justice",
      zh: "正義",
    },
    keywords: {
      en: ["Fairness", "Truth", "Cause and Effect", "Law"],
      zh: ["公正", "真理", "因果", "法律", "平衡"],
    },
    meanings: {
      en: {
        upright: "You reap what you sow. Pursue fairness and truth, make rational judgments. Legal matters or contracts will be judged fairly.",
        reversed: "Unfairness, prejudice, avoiding responsibility. You may encounter unfair treatment or be evading the consequences you should bear.",
      },
      zh: {
        upright: "種瓜得瓜，種豆得豆。追求公平與真相，理性地做出判斷。法律事務或契約將得到公正的裁決。",
        reversed: "不公，偏見，逃避責任。可能遭遇不公正的待遇，或者自己在逃避應承擔的後果。",
      },
    },
  },
  {
    id: "hanged_man",
    image: new URL("@/assets/hanged_man_card.jpeg", import.meta.url).href,
    element: "Water",
    archetype: "The Martyr",
    name: {
      en: "The Hanged Man",
      zh: "倒吊人",
    },
    keywords: {
      en: ["Surrender", "New Perspective", "Waiting", "Sacrifice"],
      zh: ["犧牲", "等待", "新視角", "放下", "停滯"],
    },
    meanings: {
      en: {
        upright: "Look at the world from a different angle. Sometimes stepping back is moving forward, letting go of attachments leads to wisdom. Use this pause for deep reflection.",
        reversed: "Needless sacrifice, stalling, stubbornness. You may be stuck in a deadlock without knowing it, or refusing to change the status quo.",
      },
      zh: {
        upright: "換個角度看世界。有時退步即是進步，放下執念才能獲得智慧。利用這段停滯期進行深層的反思。",
        reversed: "無謂的犧牲，拖延，頑固。可能陷入僵局而不自知，或者拒絕改變現狀。",
      },
    },
  },
  {
    id: "death",
    image: new URL("@/assets/death_card.jpeg", import.meta.url).href,
    element: "Water",
    archetype: "Transformation",
    name: {
      en: "Death",
      zh: "死神",
    },
    keywords: {
      en: ["Endings", "Transformation", "Transition", "Change"],
      zh: ["結束", "轉化", "重生", "改變", "過渡"],
    },
    meanings: {
      en: {
        upright: "A complete end and a new beginning. Old patterns must die for new life to be born. Do not resist change, embrace the process of transformation.",
        reversed: "Resistance to change, stagnation, decay. Clinging to the past will only bring pain, learn to let go to be free.",
      },
      zh: {
        upright: "徹底的結束與新的開始。舊的模式必須死去，新的生命才能誕生。不要抗拒改變，擁抱轉化的過程。",
        reversed: "抗拒改變，停滯，腐朽。執著於過去只會帶來痛苦，學會放手才能解脫。",
      },
    },
  },
  {
    id: "temperance",
    image: new URL("@/assets/temperance_card.jpeg", import.meta.url).href,
    element: "Fire",
    archetype: "The Alchemist",
    name: {
      en: "Temperance",
      zh: "節制",
    },
    keywords: {
      en: ["Balance", "Moderation", "Patience", "Purpose"],
      zh: ["平衡", "調和", "耐心", "目的", "適度"],
    },
    meanings: {
      en: {
        upright: "Find the middle way. Blend opposing forces to create harmony. Patience and moderation are key now, do not rush for success.",
        reversed: "Imbalance, excess, lack of patience. You may be over-consuming in some aspects and need to readjust the rhythm of life.",
      },
      zh: {
        upright: "尋找中庸之道。將對立的力量融合，創造和諧。耐心與適度是當前的關鍵，不要急於求成。",
        reversed: "失衡，極端，缺乏耐心。可能在某些方面過度消耗，需要重新調整生活的節奏。",
      },
    },
  },
  {
    id: "devil",
    image: new URL("@/assets/devil_card.jpeg", import.meta.url).href,
    element: "Earth",
    archetype: "The Shadow",
    name: {
      en: "The Devil",
      zh: "惡魔",
    },
    keywords: {
      en: ["Bondage", "Materialism", "Addiction", "Shadow Self"],
      zh: ["束縛", "物質主義", "成癮", "慾望", "陰影"],
    },
    meanings: {
      en: {
        upright: "Face your inner shadows and bonds. You may be controlled by material desires or bad habits. Realizing the existence of chains is the first step to liberation.",
        reversed: "Release, breaking chains, awakening. Starting to get rid of negative influences and regaining freedom and power.",
      },
      zh: {
        upright: "面對內心的陰影與束縛。可能被物質慾望或不良習慣所控制。意識到枷鎖的存在是解脫的第一步。",
        reversed: "解脫，打破束縛，覺醒。開始擺脫負面的影響，重獲自由與力量。",
      },
    },
  },
  {
    id: "tower",
    image: new URL("@/assets/tower_card.jpeg", import.meta.url).href,
    element: "Fire",
    archetype: "Destruction",
    name: {
      en: "The Tower",
      zh: "高塔",
    },
    keywords: {
      en: ["Sudden Change", "Chaos", "Revelation", "Awakening"],
      zh: ["突變", "混亂", "啟示", "覺醒", "災難"],
    },
    meanings: {
      en: {
        upright: "Sudden upheaval. False foundations collapse, though painful, it is an opportunity for awakening. Accept chaos and rebuild a truer self.",
        reversed: "Averting disaster, fear of change. You may be resisting inevitable change, which only prolongs the painful process.",
      },
      zh: {
        upright: "突如其來的巨變。虛假的基礎崩塌，雖然痛苦，但這是覺醒的契機。接受混亂，重建更真實的自我。",
        reversed: "勉強維持，逃避災難，恐懼。可能在抗拒不可避免的改變，只會延長痛苦的過程。",
      },
    },
  },
  {
    id: "star",
    image: new URL("@/assets/star_card.jpeg", import.meta.url).href,
    element: "Air",
    archetype: "Hope",
    name: {
      en: "The Star",
      zh: "星星",
    },
    keywords: {
      en: ["Hope", "Inspiration", "Serenity", "Healing"],
      zh: ["希望", "靈感", "平靜", "療愈", "指引"],
    },
    meanings: {
      en: {
        upright: "Calm after the storm. Full of hope and inspiration, body and mind healed. Follow this guiding star, your wishes will come true.",
        reversed: "Despair, lack of faith, disconnection. You may feel lost or unmotivated, needing to rediscover your inner light.",
      },
      zh: {
        upright: "風暴過後的寧靜。充滿希望與靈感，身心得到療愈。跟隨這顆指引之星，你的願望將會實現。",
        reversed: "絕望，缺乏信心，斷連。可能感到迷茫或失去動力，需要重新找回內心的光芒。",
      },
    },
  },
  {
    id: "moon",
    image: new URL("@/assets/moon_card.jpeg", import.meta.url).href,
    element: "Water",
    archetype: "The Dreamer",
    name: {
      en: "The Moon",
      zh: "月亮",
    },
    keywords: {
      en: ["Illusion", "Fear", "Subconscious", "Intuition"],
      zh: ["幻覺", "恐懼", "潛意識", "直覺", "不安"],
    },
    meanings: {
      en: {
        upright: "Subconscious stirrings and unease. Things are not what they seem, beware of illusions and deception. Trust your intuition to navigate the fog.",
        reversed: "Clarity, revealing truth, fear dispelled. The fog is lifting, the truth is emerging, and inner peace is regained.",
      },
      zh: {
        upright: "潛意識的湧動與不安。事物並非表面看起來那樣，小心幻覺與欺騙。信任直覺，穿越迷霧。",
        reversed: "清晰，揭露真相，恐懼消散。迷霧逐漸散去，真相浮出水面，內心重獲平靜。",
      },
    },
  },
  {
    id: "sun",
    image: new URL("@/assets/sun_card.jpeg", import.meta.url).href,
    element: "Fire",
    archetype: "The Child",
    name: {
      en: "The Sun",
      zh: "太陽",
    },
    keywords: {
      en: ["Joy", "Success", "Vitality", "Confidence"],
      zh: ["快樂", "成功", "活力", "清晰", "自信"],
    },
    meanings: {
      en: {
        upright: "Pure joy and success. The gloom lifts, the sun shines. Full of vitality and confidence, enjoy the beautiful moments in life.",
        reversed: "Sadness, temporary cloud, overly optimistic. You may feel a brief loss, but the sun will rise again.",
      },
      zh: {
        upright: "純粹的快樂與成功。陰霾散去，陽光普照。充滿活力與自信，享受生命中的美好時刻。",
        reversed: "悲傷，過度樂觀，暫時的陰雲。可能感到短暫的失落，但太陽總會再次升起。",
      },
    },
  },
  {
    id: "judgement",
    image: new URL("@/assets/judgement_card.jpeg", import.meta.url).href,
    element: "Fire",
    archetype: "Rebirth",
    name: {
      en: "Judgement",
      zh: "審判",
    },
    keywords: {
      en: ["Awakening", "Rebirth", "Inner Call", "Absolution"],
      zh: ["覺醒", "重生", "決斷", "感召", "寬恕"],
    },
    meanings: {
      en: {
        upright: "Soul awakening and rebirth. Hearing the inner call, making important life decisions. Let go of the past and welcome a new phase of life.",
        reversed: "Self-doubt, refusal of call, regret. You may be avoiding opportunities for growth or dwelling on past mistakes.",
      },
      zh: {
        upright: "靈魂的覺醒與重生。聽到內心的召喚，做出重要的人生決斷。放下過去，迎接新的生命階段。",
        reversed: "自我懷疑，拒絕召喚，後悔。可能在逃避成長的機會，或者沉溺於過去的錯誤。",
      },
    },
  },
  {
    id: "world",
    image: new URL("@/assets/world_card.jpeg", import.meta.url).href,
    element: "Earth",
    archetype: "Completion",
    name: {
      en: "The World",
      zh: "世界",
    },
    keywords: {
      en: ["Completion", "Integration", "Accomplishment", "Travel"],
      zh: ["圓滿", "成就", "整合", "旅行", "完成"],
    },
    meanings: {
      en: {
        upright: "Successful conclusion of a journey. Goals achieved, accomplishment and integration. This is a perfect moment and the beginning of a new cycle.",
        reversed: "Incomplete, lack of closure, stagnation. You may be one step away, or feeling empty, needing to find the missing piece.",
      },
      zh: {
        upright: "旅程的圓滿結束。達成目標，獲得成就與整合。這是完美的時刻，也是新循環的開始。",
        reversed: "未完成，停滯，缺乏閉環。可能還差這一步，或者感到空虛，需要尋找缺失的拼圖。",
      },
    },
  },
];
