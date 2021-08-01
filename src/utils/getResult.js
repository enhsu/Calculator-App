const str2Stack = (str) => {
  const stack = [];
  let numStr = '';
  let sign = '+';
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (!isNaN(c) || c === '.') {
      numStr += c;
    }
    if ((isNaN(c) && c !== '.') || i === str.length - 1) {
      let pre;
      let num = Number(numStr);
      switch(sign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          pre = stack.pop();
          stack.push(pre * num);
          break;
        case '/':
          pre = stack.pop();
          stack.push(pre / num);
          break;
        default:
          stack.push(num);
      }
      sign = c;
      numStr = '';
    }
  }
  return stack;
};

export default function getResult(str) {
  let result = 0;
  const stack = str2Stack(str);
  while (stack.length) {
    result += stack.pop();
  }
  return String(result);
}