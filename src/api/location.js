import "./interceptor";

import { CHECKIN_URL } from "./urls";

import { get, post, del } from "./";

export const getLocation = async () => {
  return get({ url: CHECKIN_URL });
};

export const addLocation = async (body) => {
  return post({ url: CHECKIN_URL, body });
};

export const deleteLocation = async (id) => {
  return del({
    url: `${CHECKIN_URL}/${id}`,
  });
};