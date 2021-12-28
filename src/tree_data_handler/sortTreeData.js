const sortTreeData = (data) => {
  // sort bagian terluar
  if(data[1] !== undefined) {
    data.sort((a, b) => (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0));
    data.forEach(element => {
      if(element.replies) {
        sortTreeData(element.replies);
      }
    });
  }

  return data;
}

module.exports = sortTreeData;
