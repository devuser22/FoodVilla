
export function filterData(searchInput, restaurantList) {
    const filterData = restaurantList.filter((rest) =>
      rest?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
  
    return filterData;
  }