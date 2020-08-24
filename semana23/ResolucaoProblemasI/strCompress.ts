export default const strCompress = (original: string): string => {
  const charArr: string[] = [];
  
  let currentChar = original[0];
  
  let charCount = 0;

  for(const char of original) {
    if(char !== currentChar) {
      charArr.push(currentChar + charCount);
      currentChar = char;
      charCount = 0;
    }
    charCount++;
  }

  charArr.push(currentChar + charCount);
  
  let result = "";

  for (const key of charArr) {
    result += key;
  }

  return result.length > original.length ? original : result;

}

