import { describe, it, expect } from "vitest";

describe("altogether", () => {
  it.only("extracts items", () => {
    const users = [
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
      {
        id: 3,
        username: "c",
      },
      {
        id: 4,
        username: "d",
      },
    ];
    const idsToExtract = [1, 2, 5];
    // const idsToExtractSet = new Set(idsToExtract);

    // TODO: do something here

    // const extractedUsers = users.filter((user) => {
    //   return idsToExtractSet.has(user.id);
    // });

    const userMap = users.reduce((map, user) => {
      map[user.id] = user;
      return map;
    }, {});

    const extractedUsers = idsToExtract
      .map((idToFind) => {
        return userMap[idToFind];
      })
      .filter(Boolean);

    expect(extractedUsers).toEqual([
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
    ]);
  });

  it.only("filters out duplicates", () => {
    const users = [
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
      {
        id: 3,
        username: "c",
      },
      {
        id: 1,
        username: "a",
      },
      {
        id: 3,
        username: "c",
      },
    ];

    // TODO: do something here

    // const uniqueUsers = users.filter((user, index) => {
    //   const firstMatchingIndex = users.findIndex(
    //     (_user) => _user.id === user.id
    //   );
    //   if (index !== firstMatchingIndex) {
    //     return false;
    //   }
    //   return true;
    // });

    // const foundUserIds = new Set();
    // const uniqueUsers = users.filter((user) => {
    //   if (foundUserIds.has(user.id)) {
    //     return false;
    //   } else {
    //     foundUserIds.add(user.id);
    //     return true;
    //   }
    // });

    const uniqueUsers = users.reduce((result, user) => {
      if (result.find((_user) => _user.id === user.id)) {
        return result;
      } else {
        result.push(user);
        return result;
      }
    }, []);

    expect(uniqueUsers).toEqual([
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
      {
        id: 3,
        username: "c",
      },
    ]);
  });

  it.only('gets movie titles before 2020 that starts with "A"', () => {
    const movies = [
      {
        title: "Frozen",
        actors: ["Kristen Bell", "Idina Menzel", "Josh Gad"],
        year: 2013,
      },
      {
        title: "A Quiet Place",
        actors: [
          "Emily Blunt",
          "John Krasinski",
          "Millicent Simmonds",
          "Noah Jupe",
        ],
        year: 2018,
      },
      {
        title: "Enola Holmes",
        actors: ["Millie Bobby Brown", "Henry Cavill"],
        year: 2020,
      },
    ];

    // TODO: do something here

    // const movieTitles = movies
    //   .filter((movie) => {
    //     return movie.year < 2020 && movie.title.startsWith("A");
    //   })
    //   .map((movie) => movie.title);

    const movieTitles = movies.reduce((titles, movie) => {
      if (movie.year < 2020 && movie.title.startsWith("A")) {
        titles.push(movie.title);
      }
      return titles;
    }, []);

    expect(movieTitles).toEqual(["A Quiet Place"]);
  });
});
