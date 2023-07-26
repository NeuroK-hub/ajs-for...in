export default function orderByProps(obj, sort) {
  const arrSort = [];
  const secondObj = [];

  for (const key in obj) {
    if (sort.includes(key)) {
      arrSort.push({ key, value: obj[key] });
    } else {
      secondObj.push({ key, value: obj[key] });
    }
  }

  arrSort.sort((a, b) => arrSort.indexOf(a.key) - arrSort.indexOf(b.key));
  secondObj.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...arrSort, ...secondObj];
}
