// document.body.innerHTML = "<h1>hello world</h1>";

// const h1 = document.createElement("h1");

// h1.innerText = "hello world!";

// document.body.appendChild(h1); // 뒤에 h1 넣음
// // document.body.prepend(h1); // 앞에 h1 넣음

// h1.classList.add("hello");

// console.log(h1.className);

// const hello = document.querySelector(".hello");

// const p = document.createElement("p");

// p.innerText = "Hi, I am Jeong.";

// document.body.insertBefore(p, h1);

// --------------------------------------------------

// document.querySelector("#app").innerHTML = `
//   <p>Hello1</p>
//   <p>Hello2</p>
//   <p>Hello3</p>
// `;

// Array.from(document.querySelectorAll("p"));

// document.querySelector("#app").innerHTML = `
//   <button type="button" class="hello1">Hello1</button>
//   <button type="button" class="hello2">Hello2</button>
//   <button type="button" class="hello3">Hello3</button>

//   <div>
//     <input class="name" type="text" placeholder="Type your name: " />
//   </div>

//   <div class="parent-of-button">
//     <button class="helloworld-button" type="button">
//       <span>Hello</span>
//       <span>World</span>
//     </button>
//   </div>
// `;

// document.querySelector("button").addEventListener("click", (event) => {
//   const input = document.querySelector(".name");
//   console.log(input.value);
// });

// document.querySelector(".name").addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// document
//   .querySelector(".helloworld-button")
//   .addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("event from button", event);
//   });

// document
//   .querySelector(".parent-of-button")
//   .addEventListener("click", (event) => {
//     console.log("event fron div", event);
//   });

// document.querySelector(".name").addEventListener("keyup", (event) => {
//   console.log("keyup", event);
// });

// document.body.addEventListener("keyup", (event) => {
//   console.log(event.key);
// });

// let count = 0;
// setInterval(() => {
//   count += 1;
//   document.querySelector("#app").innerHTML = `
//     <input />
//     <button>Click</button>
//     <p>count: ${count}</p>
//   `;
// }, 5000);

document.querySelector("#app").innerHTML = `
  <button class="btn-add-card" type="button">Add card</button>

  <div class="cards"></div>
`;

let cardCount = 0;

document.querySelector(".btn-add-card").addEventListener("click", () => {
  cardCount += 1;
  const card = document.createElement("div");
  card.className = "card";
  // card.setAttribute("data-number", cardCount); // 직접 입력하는 것 보다 더 좋은 방식
  card.innerHTML = `
    <p>Card #${cardCount}</p>
    <button class="btn-hello" type="button" data-number="${cardCount}">hello</button>
  `;

  // 방법 1.
  // const myCardCount = cardCount; // closure

  // card.querySelector(".btn-hello").addEventListener("click", () => {
  //   console.log(`💡 hello ${myCardCount}`);
  // });

  document.querySelector(".cards").appendChild(card);
});

document.querySelector(".cards").addEventListener("click", (event) => {
  const maybeButton = event.target;
  if (maybeButton.matches(".btn-hello")) {
    // 방법 2. 텍스트가 바뀔 수 있어 불안한 방법, 예전에 많이 사용됨
    // const cardName = maybeButton.parentElement.children[0].innerText;
    // const cardNumber = parseInt(cardName.split(" ")[1].slice(1), 10);
    // console.log("button is clicked!", cardNumber);

    // 방법 3. data attribute 사용
    console.log("button is clicked!", maybeButton.getAttribute("data-number"));
  } else {
    console.log("something else. let's ignore this.");
  }
});
