async function getTodo(id) {
  if (id === 2) {
    throw new Error(`error getting todo for #${id}`);
  }
  return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

const promise1 = getTodo(1);
const promise2 = getTodo(2);
const promise3 = getTodo(3);

try {
  const responses = await Promise.allSettled([promise1, promise2, promise3]);
  console.log("responses", responses);
} catch (error) {
  console.log("error here", error);
}

// const jsons = await Promise.all(responses.map((response) => response.json()));
// console.log({ jsons });

// const response1 = await getTodo(1);
// const json1 = await response1.json();
// console.log(json1);

// const response2 = await getTodo(2);
// const json2 = await response2.json();
// console.log(json2);

// const response3 = await getTodo(3);
// const json3 = await response3.json();
// console.log(json3);
