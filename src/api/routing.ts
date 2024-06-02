const BASE_URL = "http://10.100.40.14:8088/api/v1";
// const BASE_URL = "http://81.17.88.212:8088/api/v1";

export const ENDPOINTS = {
  POST_LOGIN: () => `${BASE_URL}/auth/login`,
  REFRESH_TOKEN: () => `${BASE_URL}/auth/refresh-token`,
  GET_USERS: () => `${BASE_URL}/users`,
  EDIT_USER: (id?: string | undefined) => `${BASE_URL}/users/${id}`,
  GET_LIVE_MONITORING: () => `${BASE_URL}/monitoring/live`,
  GET_HISTORY_MONITORING: ({
    username = "",
    card_id = "",
    room_number = "",
    from = "",
    to = "",
  }) => {
    return `${BASE_URL}/monitoring/offline?username=${username}&from=${from}&to=${to}&card_id=${card_id}&room_number=${room_number}`;
  },
  GET_IN_PLACE: () => `${BASE_URL}/monitoring/live?isInside=true`,
};
