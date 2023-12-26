async function main() {
  const response = await fetch(
    "https://learnwitheunjae.dev/api/sinabro-js/ecommerce"
  );
  const json = await response.json();
  console.log("💡 json", json);
}

main();
