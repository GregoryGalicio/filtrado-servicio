
function filterByType (type, listFiltered) {
  let serviceFiltered= listFiltered.filter((data, index) => {
    if (type === "todos") {
      return true;
    } else {
      return data.type.toLowerCase() === type.toLowerCase();
    }
  });
  return serviceFiltered;
}

export {filterByType}