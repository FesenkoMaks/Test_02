export const initialState = [
  { id: "111111", order: 1, title: "HTML", isDone: false },
  { id: "222222", order: 2, title: "CSS", isDone: true },
  { id: "333333", order: 3, title: "Rect", isDone: false },
];

export const getState = new Promise((res, rej) => {
  res(initialState);
});
