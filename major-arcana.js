/**
 * 22 Major Arcana — soul axis profiles (0–100) & Rider-Waite imagery
 * introversion ↑ = 内倾 | logic ↑ = 理性 | stability ↑ = 稳定 | idealism ↑ = 理想
 */
const majorArcana = [
  {
    id: 0, key: 'fool', nameEn: 'The Fool', nameZh: '愚者',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
    scores: { introversion: 42, logic: 38, stability: 28, idealism: 92 },
  },
  {
    id: 1, key: 'magician', nameEn: 'The Magician', nameZh: '魔术师',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
    scores: { introversion: 35, logic: 72, stability: 45, idealism: 68 },
  },
  {
    id: 2, key: 'high-priestess', nameEn: 'The High Priestess', nameZh: '女祭司',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
    scores: { introversion: 88, logic: 32, stability: 72, idealism: 78 },
  },
  {
    id: 3, key: 'empress', nameEn: 'The Empress', nameZh: '皇后',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg',
    scores: { introversion: 38, logic: 40, stability: 78, idealism: 55 },
  },
  {
    id: 4, key: 'emperor', nameEn: 'The Emperor', nameZh: '皇帝',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/RWS_Tarot_04_Emperor.jpg',
    scores: { introversion: 30, logic: 85, stability: 92, idealism: 35 },
  },
  {
    id: 5, key: 'hierophant', nameEn: 'The Hierophant', nameZh: '教皇',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg',
    scores: { introversion: 55, logic: 70, stability: 88, idealism: 65 },
  },
  {
    id: 6, key: 'lovers', nameEn: 'The Lovers', nameZh: '恋人',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg',
    scores: { introversion: 32, logic: 42, stability: 52, idealism: 72 },
  },
  {
    id: 7, key: 'chariot', nameEn: 'The Chariot', nameZh: '战车',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
    scores: { introversion: 28, logic: 68, stability: 75, idealism: 45 },
  },
  {
    id: 8, key: 'strength', nameEn: 'Strength', nameZh: '力量',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
    scores: { introversion: 62, logic: 45, stability: 80, idealism: 70 },
  },
  {
    id: 9, key: 'hermit', nameEn: 'The Hermit', nameZh: '隐者',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg',
    scores: { introversion: 96, logic: 78, stability: 85, idealism: 58 },
  },
  {
    id: 10, key: 'wheel-of-fortune', nameEn: 'Wheel of Fortune', nameZh: '命运之轮',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg',
    scores: { introversion: 50, logic: 50, stability: 35, idealism: 62 },
  },
  {
    id: 11, key: 'justice', nameEn: 'Justice', nameZh: '正义',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg',
    scores: { introversion: 52, logic: 88, stability: 82, idealism: 48 },
  },
  {
    id: 12, key: 'hanged-man', nameEn: 'The Hanged Man', nameZh: '倒吊人',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
    scores: { introversion: 75, logic: 38, stability: 40, idealism: 80 },
  },
  {
    id: 13, key: 'death', nameEn: 'Death', nameZh: '死神',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
    scores: { introversion: 68, logic: 58, stability: 22, idealism: 65 },
  },
  {
    id: 14, key: 'temperance', nameEn: 'Temperance', nameZh: '节制',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg',
    scores: { introversion: 58, logic: 62, stability: 90, idealism: 60 },
  },
  {
    id: 15, key: 'devil', nameEn: 'The Devil', nameZh: '恶魔',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg',
    scores: { introversion: 40, logic: 48, stability: 35, idealism: 25 },
  },
  {
    id: 16, key: 'tower', nameEn: 'The Tower', nameZh: '塔',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/RWS_Tarot_16_Tower.jpg',
    scores: { introversion: 48, logic: 52, stability: 12, idealism: 38 },
  },
  {
    id: 17, key: 'star', nameEn: 'The Star', nameZh: '星星',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/RWS_Tarot_17_Star.jpg',
    scores: { introversion: 70, logic: 42, stability: 68, idealism: 95 },
  },
  {
    id: 18, key: 'moon', nameEn: 'The Moon', nameZh: '月亮',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg',
    scores: { introversion: 82, logic: 35, stability: 30, idealism: 75 },
  },
  {
    id: 19, key: 'sun', nameEn: 'The Sun', nameZh: '太阳',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg',
    scores: { introversion: 18, logic: 32, stability: 72, idealism: 88 },
  },
  {
    id: 20, key: 'judgement', nameEn: 'Judgement', nameZh: '审判',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/RWS_Tarot_20_Judgement.jpg',
    scores: { introversion: 38, logic: 55, stability: 48, idealism: 82 },
  },
  {
    id: 21, key: 'world', nameEn: 'The World', nameZh: '世界',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg',
    scores: { introversion: 50, logic: 55, stability: 75, idealism: 70 },
  },
];

const SOUL_AXES = ['introversion', 'logic', 'stability', 'idealism'];

function euclideanDistance(a, b) {
  return Math.sqrt(
    SOUL_AXES.reduce((sum, axis) => sum + (a[axis] - b[axis]) ** 2, 0)
  );
}

function findGuardianArcana(userScores) {
  let best = null;
  let minDistance = Infinity;

  majorArcana.forEach((card) => {
    const distance = euclideanDistance(userScores, card.scores);
    if (distance < minDistance) {
      minDistance = distance;
      best = card;
    }
  });

  return {
    card: best,
    distance: minDistance,
    userScores: { ...userScores },
  };
}
