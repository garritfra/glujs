export function capitalizeString(str: string): string {
  let lowercaseStr:string = str.toLowerCase();
  let firstLetter:string = lowercaseStr[0].toUpperCase();
  let remainingWord:string = lowercaseStr.substr(1);
  let capitalizedString:string = firstLetter + remainingWord;


  return capitalizedString;
}
