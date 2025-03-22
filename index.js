// Code your solution here
// 1. findMatching - Returns drivers with names that match the provided string (case-insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // 2. fuzzyMatch - Returns drivers whose names start with the provided substring (case-insensitive)
  function fuzzyMatch(drivers, substring) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(substring.toLowerCase()));
  }
  
  // 3. matchName - Returns driver objects whose 'name' property matches the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example usage:
  const drivers = ["Bobby", "susan", "bOBBY", "alice"];
  const driverObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Alice", hometown: "Chicago" },
    { name: "Bobby", hometown: "Los Angeles" }
  ];
  
  console.log(findMatching(drivers, "bobby")); // Output: ["Bobby", "bOBBY"]
  console.log(fuzzyMatch(drivers, "bob")); // Output: ["Bobby", "bOBBY"]
  console.log(matchName(driverObjects, "Bobby")); 
  // Output: [{ name: "Bobby", hometown: "New York" }, { name: "Bobby", hometown: "Los Angeles" }]
  