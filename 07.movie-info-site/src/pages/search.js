export function getInitialHTML({ movies } = {}) {
  if (movies) {
    return `
    <h1>Search Results</h1>
    ${movies
      .map(
        (movie) => `
        <div>
          <p>${movie.title}</p>
        </div>
      `
      )
      .join("")}
  `;
  } else {
    return `
      <h1>Search Results</h1>
      <p>Searching for ...</p>
    `;
  }
}

export async function renderSearch({ searchParams }) {
  document.querySelector("#app").innerHTML = `
    <h1>Search Results</h1>
    <p>Searching for ${searchParams.query}...</p>
  `;

  const response = await fetch(
    (import.meta.env.DEV ? "http://localhost:3000" : "") +
      `/api/search?query=${searchParams.query}`
  );
  const movies = await response.json();

  document.querySelector("#app").innerHTML = `
    <h1>Search Results</h1>
    ${movies
      .map(
        (movie) => `
        <div>
          <p>${movie.title}</p>
        </div>
      `
      )
      .join("")}
  `;
}
