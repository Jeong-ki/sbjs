import { describe, it, expect } from "vitest";
import { shows } from "./data";

describe("reduce method", () => {
  it.only("calculates the total of an array", () => {
    const numbers = [1, 2, 3, 4, 5];

    // TODO: do something here
    // const callbackFn = (sum, number) => {
    //   sum = sum + number;
    //   return sum;
    // };
    // const initialValue = 0;
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    expect(sum).toBe(15);
  });

  it.only("groups by genre", () => {
    // TODO: do something with `shows` here
    const groupedShows = shows.reduce((result, show) => {
      if (!result[show.genre]) {
        result[show.genre] = [];
      }
      result[show.genre].push(show.title);
      return result;
    }, {});
    expect(groupedShows).toEqual({
      Comedy: ["Don't Look Up"],
      Drama: ["Stranger Things", "Our Blues", "Inventing Anna"],
      Mistery: ["Dirk Gently's Holistic Detective Agency"],
      Mystery: ["Little Women"],
    });
  });

  it.only("groups by key (2)", () => {
    // TODO: do something with `shows` here

    // 위 테스트 코드 활용한 방식 - 가공한 데이터 재가공
    // const temp = shows.reduce((result, show) => {
    //   if (!result[show.genre]) {
    //     result[show.genre] = [];
    //   }
    //   result[show.genre].push(show.title);
    //   return result;
    // }, {});

    // const groupedShows = Object.entries(temp).map((entry) => {
    //   return {
    //     genre: entry[0],
    //     titles: entry[1],
    //   };
    // });

    const groupedShows = shows.reduce((result, show) => {
      const index = result.findIndex(
        (resultShow) => resultShow.genre === show.genre
      );
      if (index === -1) {
        result.push({
          genre: show.genre,
          titles: [show.title],
        });
      } else {
        result[index].titles.push(show.title);
      }
      return result;
    }, []);

    expect(groupedShows).toEqual([
      {
        genre: "Drama",
        titles: ["Stranger Things", "Our Blues", "Inventing Anna"],
      },
      {
        genre: "Mystery",
        titles: ["Little Women"],
      },
      {
        genre: "Comedy",
        titles: ["Don't Look Up"],
      },
      {
        genre: "Mistery",
        titles: ["Dirk Gently's Holistic Detective Agency"],
      },
    ]);
  });

  it.only("flattens array", () => {
    const nestedArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    // TODO: do something here
    const flatArray = nestedArray.reduce((acc, item) => [...acc, ...item], []);
    expect(flatArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it.only("extracts writer names", () => {
    // TODO: do something with `shows` here
    const writerNames = shows.reduce((acc, item) => {
      acc.push(...item.writers);
      return Array.from(new Set(acc));
    }, []);
    expect(writerNames).toEqual([
      "Matt Duffer",
      "Ross Duffer",
      "Jessie Nickson-Lopez",
      "Kate Trefry",
      "Justin Doble",
      "Alison Tatlock",
      "Paul Dichter",
      "Jessica Mecklenburg",
      "Seo-Gyeong Jeong",
      "Hee-kyung Noh",
      "Shonda Rhimes",
      "Carolyn Ingber",
      "Jessica Pressler",
      "Nicholas Nardini",
      "Adam McKay",
      "Max Landis",
      "Douglas Adams",
    ]);
  });
});
