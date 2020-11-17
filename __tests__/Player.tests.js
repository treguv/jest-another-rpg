const Player = require("../lib/Player");
const Potion = require("../lib/Potion"); // import potion
jest.mock("../lib/Potion"); // mock the potion constructior with fake one

test("creates a player object", () => {
  const player = new Player("dave");

  expect(player.name).toBe("dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));

  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});
