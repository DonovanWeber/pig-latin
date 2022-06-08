
function pigLatin(text) {
  let newArray = [];
  let vowels = ["a", "e", "i", "o", "u"]
  console.log(vowels);
  const textArray = text.split(" ");
  console.log(textArray);
  for (let i = 0; i < textArray.length; i++) {
    let letterArray = textArray[i].split("");
    console.log(letterArray);
    if (vowels.includes(letterArray[0].toLowerCase())) {
      newArray.push(textArray[i] + "way ");
    } else if ((vowels.includes(letterArray[0].toLowerCase())) && (vowels.includes(letterArray[1].toLowerCase()))) {
      newArray.push(textArray[i] + "way ")
    } else {
        newArray.push(textArray[i]+ " ");      
    }
  }
  newArray.join(" ");
  return newArray.toString().replace(/,/g, '');
}
pigLatin("akay okay");


// function pigLatin(text) {
//   let newArray = [];
//   let vowels = ["a", "e", "i", "o", "u"]
//   console.log(vowels);
//   const textArray = text.split("");
//   if (vowels.includes(text.toLowerCase()[0])) {
//       newArray.push(textArray + "way");
//     } else if {
      
//     } else {
//         newArray.push(textArray);      
//     }
//   newArray.join();
//   return newArray.toString().replace(/,/g, '');
// }
// pigLatin("akay okay");

// function pigLatin(text) {
//   let newArray = [];
//   let vowels = ["a", "e", "i", "o", "u"]
//   console.log(vowels);
//   const textArray = text.split("");
//     if (vowels.includes(text.toLowerCase()[0])) {
//       newArray.push(textArray + "way");
//     } else if ((vowels.includes(text.toLowerCase()[0])) && (vowels.includes(text.toLowerCase()[1]))) {
//       newArray.push(textArray[1] + "way")
//     } else {
//         newArray.push(textArray);      
//     }
//   newArray.join();
//   return newArray.toString().replace(/,/g, '');
// }
// pigLatin("akay okay");