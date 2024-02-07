console.log('in test!')
const fs = require('fs');
const filepath = '../assets/test.txt';

// async function decode(message_file) {
//   console.log("inside decode");
//   async function wrapper(message_file) {
//     // helper function to read the file as a string
//     function fileToStr(filepath) {
//       return new Promise((resolve, reject) => {
//         fs.readFile(filepath, "utf8", (err, data) => {
//           if (err) {
//             reject(err);
//             return;
//           }
//           console.log('about to resolve data')
//           resolve(data);
//         });
//       });
//     }

//     fileToStr(message_file).then((str) => {
//       // dict will contain parsed, number + word pairs, like '296':land
//       const dict = {};
//       const lines = str.split("\n");
//       lines.map((line) => {
//         const [number, word] = line.split(" ");
//         dict[parseInt(number)] = word.replace(/\r/g, "");
//       });
//       // determine the indices of the last element of each line of pyramid
//       let pyramidIndex = [];
//       let temp = 1;
//       let lineLength = 1;
//       while (temp <= lines.length) {
//         pyramidIndex.push(temp);
//         lineLength++;
//         temp += lineLength;
//       }
//       // use pyramidIndex to find the corresponding words
//       let decodedMessage = "";
//       for (i of pyramidIndex) {
//         decodedMessage += dict[i] + " ";
//       }
//       console.log('decoded message: ', decodedMessage)
//       return decodedMessage.trim();
//     });
//   }
//   const result = await wrapper(filepath)
//   return result
// }

// console.log(decode(filepath))





// async function decode(message_file) {
//   console.log("inside decode");

//   // putting solution in an async wrapper 
//   async function wrapper(filepath) {
//     return new Promise((resolve, reject) => {
//       // read the file
//       fs.readFile(filepath, "utf8", (err, str) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         // dict will contain parsed, number + word pairs, like '296':land
//         const dict = {};
//         const lines = str.split("\n");
//         lines.map((line) => {
//           const [number, word] = line.split(" ");
//           dict[parseInt(number)] = word.replace(/\r/g, "");
//         });
//         // determine the indices of the last element of each line of pyramid
//         let pyramidIndex = [];
//         let temp = 1;
//         let lineLength = 1;
//         while (temp <= lines.length) {
//           pyramidIndex.push(temp);
//           lineLength++;
//           temp += lineLength;
//         }

//         // use pyramidIndex to find the corresponding words
//         let decodedMessage = "";
//         for (i of pyramidIndex) {
//           decodedMessage += dict[i] + " ";
//         }
//         resolve(decodedMessage.trim());
//       });
//     });
//   }


//   const result = await wrapper(message_file);
//   console.log(result)
//   return result
// }

// console.log(decode(filepath))





async function decode(message_file) {
  return new Promise((resolve, reject) => {
    // read the file
    fs.readFile(message_file, "utf8", (err, str) => {
      if (err) {
        reject(err);
        return;
      }
      // dict will contain parsed, number + word pairs, like '296':land
      const dict = {};
      const lines = str.split("\n");
      lines.map((line) => {
        const [number, word] = line.split(" ");
        dict[parseInt(number)] = word.replace(/\r/g, "");
      });
      // determine the indices of the last element of each line of pyramid
      let pyramidIndex = [];
      let temp = 1;
      let lineLength = 1;
      while (temp <= lines.length) {
        pyramidIndex.push(temp);
        lineLength++;
        temp += lineLength;
      }

      // use pyramidIndex to find the corresponding words
      let decodedMessage = "";
      for (i of pyramidIndex) {
        decodedMessage += dict[i] + " ";
      }
      resolve(decodedMessage.trim());
      console.log(decodedMessage);
    });
  });
}

const answer = await decode(filepath)
console.log(answer)