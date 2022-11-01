const movie = require("./Q1");

test("0  to 今天不播放電影", () => {
  expect(movie(0)).toEqual("今天不播放電影");
});
test("1  to 今天不播放電影", () => {
  expect(movie(1)).toEqual("照常播放電影");
});
test("1  to 今天不播放電影", () => {
  expect(2+2).toBe(4);
});
test("1  to 今天不播放電影", () => {
  expect(2+2).toEqual(4);
});
test("1  to 今天不播放電影", () => {
  expect(2+2).not.toEqual(5);
});