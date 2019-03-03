export const stableSort = comparator => list => {
  return list
    .map((el, i) => [el, i])
    .sort((a, b) => {
      const weight = comparator(a[0], b[0]);
      return weight !== 0 ? weight : a[1] - b[1];
    })
    .map(([el]) => el);
};

export const sortByField = (field, items, DESC = false) => {
  const comparator = (a, b) => {
    if (a[field] > b[field]) return DESC ? -1 : 1;
    if (a[field] < b[field]) return DESC ? 1 : -1;
    return 0;
  };
  return stableSort(comparator)(items);
};
