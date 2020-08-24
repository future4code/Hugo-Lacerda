export default const isOneEdit = (original: string, toCheck: string): boolean => {

  if(toCheck.length >= (original.length + 2) || toCheck.length <= (original.length - 2)){
    return false;
  }

  let matchingCount = 0;

  for(const char of toCheck){
    if(original.indexOf(char) !== -1){
      matchingCount++;
    }
  }
  return matchingCount <= (original.length + 1) && matchingCount >= (original.length - 1);
}