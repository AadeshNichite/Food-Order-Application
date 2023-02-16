export function filterData(searchText, restro) {
  const filteredData = restro.filter((rest) =>
    rest?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filteredData;
}
