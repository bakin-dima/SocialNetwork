import profileReducer, { addPostCreator, deletePost } from "./profileReducer";

let state = {
  postsData: [
    { id: 1, message: "First test message", likesCount: 3 },
    { id: 2, message: "I finally start my react-js learning", likesCount: 45 },
    { id: 3, message: "It's my firs post!", likesCount: 13 },
    { id: 4, message: "Hello everybody!", likesCount: 15 },
  ],
};

test("message of new post should be hello world", () => {
  // ? 1. Income data for test
  let action = addPostCreator("hello world");
  // ? 2. Action to be tested
  let newState = profileReducer(state, action);
  // ? 3. Expected test result
  expect(newState.postsData[4].message).toBe("hello world");
});

test("length of posts should be incremented", () => {
  // ? 1. Income data for test
  let action = addPostCreator("hello world");
  // ? 2. Action to be tested
  let newState = profileReducer(state, action);
  // ? 3. Expected test result
  expect(newState.postsData.length).toBe(5);
});

test("length of posts after deleting should be decremented", () => {
  // ? 1. Income data for test
  let action = deletePost(1);
  // ? 2. Action to be tested
  let newState = profileReducer(state, action);
  // ? 3. Expected test result
  expect(newState.postsData.length).toBe(3);
});

test("after deleting length shouldn't be decremented if ID is incorrect", () => {
  // ? 1. Income data for test
  let action = deletePost(1000);
  // ? 2. Action to be tested
  let newState = profileReducer(state, action);
  // ? 3. Expected test result
  expect(newState.postsData.length).toBe(4);
});
