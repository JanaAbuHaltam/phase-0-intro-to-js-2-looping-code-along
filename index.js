// Code your solutions in this file
const arr = ["A", "B", "C"];

function writeCards(arr){
    let messages =[];

for (let i = 0; i < arr.length ; i++) 
   {
    const name = arr[i];
    messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);

   }
   return messages;

}

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }