/* Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item. */

export default function updateInventory(currentInventory, newInventory) {
  const inventoryMap = new Map();

  currentInventory.forEach(([count, item]) => {
    inventoryMap.set(item, count);
  });

  newInventory.forEach(([count, item]) => {
    inventoryMap.set(item, inventoryMap.get(item) + count || count);
  });

  let updatedInventory = [...inventoryMap].map(([item, count]) => [
    count,
    item,
  ]);
  updatedInventory.sort((item, nextItem) => item[1].localeCompare(nextItem[1]));

  return updatedInventory;
}

    