

function isBalanced(bracesStr) {
  const arr = [];
  let balanced = true;
  let bracesArr = bracesStr.split("");
  bracesArr.forEach(element => {
    if (element === "[" || element === "{" || element === "(") {
      arr.push(element);
      console.log(arr);
    } else if (element === "]" || element === "}" || element === ")") {
      deletedEle = arr.pop();
      switch (deletedEle) {
        case "[": {
          if (element !== "]") {
            balanced = false;
          }
          break;
        }
        case "{": {
          if (element !== "}") {
            balanced = false;
          }
          break;
        }
        case "(": {
          if (element !== ")") {
            balanced = false;
          }
          break;
        }
        default:
      }
    }
  });

  if (!balanced || arr.length) {
    return "No";
  } else {
    return "Yes";
  }
}
