function pigLatin(text) {
  let newArray = [];
  let vowels = ["a", "e", "i", "o", "u"]
  console.log(vowels);
  const textArray = text.split("");
    if (vowels.includes(text.toLowerCase()[0])) {
      newArray.push(textArray + "way");
    } else {
        newArray.push(textArray);      
    }
  newArray.join();
  return newArray.toString().replace(/,/g, '');
}
pigLatin("vakay");


// function pigLatin(text) {
//   let newArray = [];
//   let vowels = ["a", "e", "i", "o", "u"]
//   console.log(vowels);
//   const textArray = text.split("");
//   for (i = 0; i <= 0; i++) {
//     if (vowels.includes(textArray[i])) {
//       newArray.push(textArray + "way");
//     } else {
//         newArray.push(textArray);      
//     }
//   }
//   newArray.join();
//   return newArray.toString().replace(/,/g, '');
// }
// pigLatin("vakay");