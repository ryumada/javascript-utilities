/* spell-checker: disable */
/**
 * learn-more: https://typeofnan.dev/an-easy-way-to-build-a-tree-with-object-references/
 * 
 * Konsepnya di sini dengan ngelink objek yang ada di memori, jadi mengubah value children
 * di objek pada memory, returnnya baru balik ke root kalau emg udh nemu siapa parentnya
 */

const repliesRootMaker = (data) => {
  const idMapping = data.reduce((previousValue, currentValue, index) => {
    previousValue[currentValue.id] = index;
    return previousValue;
  }, {});

  let root = [];
  let rootIndex = 0;

  data.forEach((element) => {
    // Handle the root element
    if(element.commentTo === null) {
      // use mapping to locate parent in our data array, then save it to root
      root[rootIndex] = element;
      rootIndex++;
      return;
    }
    // use our mapping to locate the parent element in our data array
    const parentElement = data[idMapping[element.commentTo]];
    // add our current element to its parent's replies array
    parentElement.replies = [...(parentElement.replies || []), element];
  });

  return root;
}

module.exports = repliesRootMaker;
