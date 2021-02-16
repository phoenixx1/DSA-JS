function checkObj(obj, checkProp) {
  // Only change code below this line
  var isCheckPropPresent = obj.hasOwnProperty(checkProp);
  if (isCheckPropPresent) {
    return obj[checkProp];
  }
  return "Not Found";

  // Only change code above this line
}
