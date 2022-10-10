/* Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item. */

export default function updateInventory(arr1, arr2) {
  //transforming into key-value pairs
  const inventory1 = arr1.reduce(
    (acc, [amount, name]) => ({
      ...acc,
      [name]: amount,
    }),
    {}
  );
  const inventory2 = arr2.reduce(
    (acc, [amount, name]) => ({
      ...acc,
      [name]: amount,
    }),
    {}
  );

  for (const name in inventory2) {
    if (name in inventory1) {
      inventory1[name] += inventory2[name];
    } else {
      inventory1[name] = inventory2[name];
    }
  }
  const answer = [];
  //back to 2D array
  for (const name in inventory1) {
    answer.push([inventory1[name], name]);
  }

  return answer.sort((arr1, arr2) => arr1[1].localeCompare(arr2[1]));
}
