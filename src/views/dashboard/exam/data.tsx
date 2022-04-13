export const cardList = (() => {
  const result: any[] = [];
  result.push({
    title: '高数',
    time: '2022/4/9 9:00',
    score: '待考',
    icon: 'carbon:math-curve',
    color: '#1890ff',
    active: '100',
    new: '1,799',
    download: 'bx:bx-download',
  });
  result.push({
    title: '英语',
    time: '2022/4/9 9:00',
    score: '待考',
    icon: 'icon-park-outline:english',
    color: '#1890ff',
    active: '100',
    new: '1,799',
    download: 'bx:bx-download',
  });
  result.push({
    title: '化学',
    time: '2022/4/8 9:00',
    score: 99,
    icon: 'healthicons:biochemistry-laboratory',
    color: '#1890ff',
    active: '100',
    new: '1,799',
    download: 'bx:bx-download',
  });
  return result;
})();
