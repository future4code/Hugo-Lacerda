### 1
```tsx
const findFirstRecurringCharacter = (input: string): string | null => {
  const charHashMap: { [index: string]: boolean } = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
};
```
Com n como o tamanho da string input e sendo o termo de crescimento mais acelerado, a complexidade é O(n).

### 2
```tsx
export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};
```
Com n como o tamanho da string comparison e sendo o termo de crescimento mais acelerado, a complexidade é O(n).

### 3
```tsx
export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
```
A complexidade é O(1), uma vez que não hpa processamento sobre a matriz passada como parâmetro e os demais valores são constantes.

### 4
```tsx
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
```
A complexidade é O(n²), pois o tamanho do parâmetro listOfNumbers influencia no processamento em duas partes do código: no laço for e no if, na função indexOf, aninhado no próprio laço for. Tanto o laço for quanto o indexOf olham para cada elemento do array e, uma vez estando um aninhado no outro e ambos apresentando complexidade O(n), temos no produto de suas complexidades a resposta: O(n²).

### 5
* 1º: 3
* 2º: 1 e 2
* 3º: 4
### 6
```tsx
function product(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum
}
```
A complexidade é O(b), pois o tamanho de b em relação ao número 0 é o termo de crescimento mais acelerado.

### 7
```tsx
function mod(a: number, b: number): number {
  if (b <= a) {
    return -1;
  }
  let div = a / b;
  return a - div * b;
}
```
A complexidade é O(1).

### 8
```tsx
function copyArray(array: number[]): number[] {
  let copy: number[] = [];
  for (const value of array) {
    copy = appendToNew(copy, value);
  }
  return copy;
}

function appendToNew(array: number[], value: number) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.push(value);
  return newArray;
}
```
O(n) e O(n²), respectivamente.
