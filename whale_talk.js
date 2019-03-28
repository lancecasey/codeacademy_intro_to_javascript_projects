let input = 'Do you speak whale?'
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for(let i = 0; i < input.length; i++) {
	for(let v = 0; v < vowels.length; v++) {
		if(input.charAt(i) === vowels[v]) {
      resultArray.push(vowels[v]);
    }
  }
  if(input.charAt(i) === 'e') {
    resultArray.push(input.charAt(i));
  }
	if(input.charAt(i) === 'u') {
  resultArray.push(input.charAt(i));
  }
}
resultArray = resultArray.join('');
console.log(resultArray.toUpperCase());
