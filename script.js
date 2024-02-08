const blockquote = document.querySelector("blockquote");
const btn = document.querySelector("#get-quote");
const URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
let newArr = [];

// function getQuote() {
//   fetch(URL)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw response.status;
//     })
//     .then((data) => {
//       if (newArr.includes(data[0]) && newArr.length <= 50) {
//         newArr.shift();
//         getQuote();
//       }

//       if (newArr.length > 50) {
//         newArr.pop();
//       }

//       newArr.unshift(data[0]);
//       blockquote.textContent = newArr[0];
//     })

//     .catch((error) => {
//       console.warn(error);
//     });
// }

// getQuote();

async function getQuoteAsync() {
  try {
    let response = await fetch(URL);
    if (!response.ok) throw response.status;
    let data = await response.json();
    if (newArr.includes(data[0]) && newArr.length <= 50) {
      newArr.shift();
      getQuoteAsync();
    }
    if (newArr.length > 50) {
      newArr.pop();
    }
    newArr.unshift(data[0]);
    blockquote.textContent = newArr[0];
    console.log(newArr);
  } catch (error) {
    console.warn(error);
  }
}

getQuoteAsync();

btn.addEventListener("click", getQuoteAsync);
