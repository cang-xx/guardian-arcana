/**
 * 22 Major Arcana — soul axis profiles (0–100) & local imagery
 * introversion ↑ = 内倾 | logic ↑ = 理性 | stability ↑ = 稳定 | idealism ↑ = 理想
 */
const majorArcana = [
  {
    id: 0, key: 'fool', nameEn: 'The Fool', nameZh: '愚者',
    image: 'images/0-fool.jpg',
    scores: { introversion: 42, logic: 38, stability: 28, idealism: 92 },
  },
  {
    id: 1, key: 'magician', nameEn: 'The Magician', nameZh: '魔术师',
    image: 'images/1-magician.jpg',
    scores: { introversion: 35, logic: 72, stability: 45, idealism: 68 },
  },
  {
    id: 2, key: 'high-priestess', nameEn: 'The High Priestess', nameZh: '女祭司',
    image: 'images/2-high-priestess.jpg',
    scores: { introversion: 88, logic: 32, stability: 72, idealism: 78 },
  },
  {
    id: 3, key: 'empress', nameEn: 'The Empress', nameZh: '皇后',
    image: 'images/3-empress.jpg',
    scores: { introversion: 38, logic: 40, stability: 78, idealism: 55 },
  },
  {
    id: 4, key: 'emperor', nameEn: 'The Emperor', nameZh: '皇帝',
    image: 'images/4-emperor.jpg',
    scores: { introversion: 30, logic: 85, stability: 92, idealism: 35 },
  },
  {
    id: 5, key: 'hierophant', nameEn: 'The Hierophant', nameZh: '教皇',
    image: 'images/5-hierophant.jpg',
    scores: { introversion: 55, logic: 70, stability: 88, idealism: 65 },
  },
  {
    id: 6, key: 'lovers', nameEn: 'The Lovers', nameZh: '恋人',
    image: 'images/6-lovers.jpg',
    scores: { introversion: 32, logic: 42, stability: 52, idealism: 72 },
  },
  {
    id: 7, key: 'chariot', nameEn: 'The Chariot', nameZh: '战车',
    image: 'images/7-chariot.jpg',
    scores: { introversion: 28, logic: 68, stability: 75, idealism: 45 },
  },
  {
    id: 8, key: 'strength', nameEn: 'Strength', nameZh: '力量',
    image: 'images/8-strength.jpg',
    scores: { introversion: 62, logic: 45, stability: 80, idealism: 70 },
  },
  {
    id: 9, key: 'hermit', nameEn: 'The Hermit', nameZh: '隐者',
    image: 'images/9-hermit.jpg',
    scores: { introversion: 96, logic: 78, stability: 85, idealism: 58 },
  },
  {
    id: 10, key: 'wheel-of-fortune', nameEn: 'Wheel of Fortune', nameZh: '命运之轮',
    image: 'images/10-wheel-of-fortune.jpg',
    scores: { introversion: 50, logic: 50, stability: 35, idealism: 62 },
  },
  {
    id: 11, key: 'justice', nameEn: 'Justice', nameZh: '正义',
    image: 'images/11-justice.jpg',
    scores: { introversion: 52, logic: 88, stability: 82, idealism: 48 },
  },
  {
    id: 12, key: 'hanged-man', nameEn: 'The Hanged Man', nameZh: '倒吊人',
    image: 'images/12-hanged-man.jpg',
    scores: { introversion: 75, logic: 38, stability: 40, idealism: 80 },
  },
  {
    id: 13, key: 'death', nameEn: 'Death', nameZh: '死神',
    image: 'images/13-death.jpg',
    scores: { introversion: 68, logic: 58, stability: 22, idealism: 65 },
  },
  {
    id: 14, key: 'temperance', nameEn: 'Temperance', nameZh: '节制',
    image: 'images/14-temperance.jpg',
    scores: { introversion: 58, logic: 62, stability: 90, idealism: 60 },
  },
  {
    id: 15, key: 'devil', nameEn: 'The Devil', nameZh: '恶魔',
    image: 'images/15-devil.jpg',
    scores: { introversion: 40, logic: 48, stability: 35, idealism: 25 },
  },
  {
    id: 16, key: 'tower', nameEn: 'The Tower', nameZh: '塔',
    image: 'images/16-tower.jpg',
    scores: { introversion: 48, logic: 52, stability: 12, idealism: 38 },
  },
  {
    id: 17, key: 'star', nameEn: 'The Star', nameZh: '星星',
    image: 'images/17-star.jpg',
    scores: { introversion: 70, logic: 42, stability: 68, idealism: 95 },
  },
  {
    id: 18, key: 'moon', nameEn: 'The Moon', nameZh: '月亮',
    image: 'images/18-moon.jpg',
    scores: { introversion: 82, logic: 35, stability: 30, idealism: 75 },
  },
  {
    id: 19, key: 'sun', nameEn: 'The Sun', nameZh: '太阳',
    image: 'images/19-sun.jpg',
    scores: { introversion: 18, logic: 32, stability: 72, idealism: 88 },
  },
  {
    id: 20, key: 'judgement', nameEn: 'Judgement', nameZh: '审判',
    image: 'images/20-judgement.jpg',
    scores: { introversion: 38, logic: 55, stability: 48, idealism: 82 },
  },
  {
    id: 21, key: 'world', nameEn: 'The World', nameZh: '世界',
    image: 'images/21-world.jpg',
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
