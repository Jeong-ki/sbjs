import { describe, it, expect } from "vitest";
import { posts } from "./data";

describe("filter method - simple", () => {
  it.only("gets positive numbers", () => {
    const numbers = [1, -2, 3, -4, 5];

    // TODO: do something here
    const positiveNumbers = numbers.filter((number) => number > 0);
    expect(positiveNumbers).toEqual([1, 3, 5]);
  });

  it.only("gets employees in Sales department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Sales" },
    ];

    // TODO: do something here
    const salesEmployees = employees.filter(
      (employee) => employee.department === "Sales"
    );
    expect(salesEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jim", age: 40, department: "Sales" },
    ]);
  });

  it.only("gets employees over 35 in Marketing department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];

    // TODO: do something here
    const salesEmployeesOver35 = employees.filter(
      (employee) => employee.age > 35 && employee.department === "Marketing"
    );
    expect(salesEmployeesOver35).toEqual([
      { name: "Jim", age: 40, department: "Marketing" },
    ]);
  });

  it.only("gets employees in Sales or Development department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];

    const targetDepartments = ["Sales", "Development"];
    const targetDepartmentsSet = new Set(targetDepartments);

    // TODO: do something here
    const salesOrDevEmployees = employees.filter((employee) =>
      // targetDepartments.includes(employee.department)
      targetDepartmentsSet.has(employee.department)
    );
    expect(salesOrDevEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
    ]);
  });
});

describe("filter method - real world", () => {
  it.only("gets posts from this year", () => {
    // TODO: do something here
    const postsThisYear = posts.filter((post) => {
      return new Date(post.meta.created_at).getFullYear() === 2023;
    });
    expect(postsThisYear.length).toBe(10);
  });

  it.only('gets posts with "culture" tag', () => {
    // TODO: do something here
    const postsWithCultureTag = posts.filter((post) => {
      return post.meta.tags.includes("culture");
    });
    expect(postsWithCultureTag.length).toBe(16);
  });

  it.only("gets tweets posted after 10pm", () => {
    // hint:
    // new Date('2023-02-03T21:10:00.000Z').toLocaleString('fr-FR')
    //
    // TODO: do something here
    const tweetsPostedAfter10pm = posts.filter((post) => {
      const date = new Date(post.meta.created_at);
      const frenchTimestamp = new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "short",
        timeStyle: "long",
        timeZone: "Europe/Paris",
      }).format(date);
      return frenchTimestamp.split(" ")[1].split(":")[0] >= 22;
    });
    expect(tweetsPostedAfter10pm.length).toBe(12);
  });
});
