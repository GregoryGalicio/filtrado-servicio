
function filterByType (type, listFiltered) {
  let serviceFiltered= listFiltered.filter((serviceData, id) => {
    if (type === "todos") {
      return true;
    } else {
      return serviceData.type.toLowerCase() === type.toLowerCase();
    }
  });
  return serviceFiltered;
}

export {filterByType}