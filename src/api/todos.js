import "./interceptor";

import { TODO_URL } from "./urls";

import { get, post, del, put } from ".";

export const getTodo = async () => {
  return get({ url: TODO_URL });
};

export const createTodo = async (body) => {
  return post({ url: TODO_URL, body });
};

export const deleteTodo = async (id) => {
  return del({
    url: `${TODO_URL}/${id} `,
  });
};
export const updateTodo = async (payload) => {
  return put({
    url: `${TODO_URL}/${payload.id}`,
    body: payload,
  });
};