function removeAnagrams(words: string[]): string[] {
  let res: string[] = [words[0]];
  let n: number = words.length;
  for(let i = 1; i < n; i++){
    if(!isAnagramOf(words[i], words[i-1])){
      res.push(words[i]);
    }
  }

  return res;

};

function isAnagramOf(word1: string, word2: string): boolean{


  if(word1.length !== word2.length){
    return false;
  }

  const letters = word2.split('');

  for(const char of word1){
    const index = letters.indexOf(char);
    if(index === -1){
      return false;
    }
    letters.splice(index, 1);
  }

  return true;
}
