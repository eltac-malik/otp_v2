const MONITORING = "/";
const LOGIN = "/login";
const HISTORY = "/history";
const USERS = "/users";

interface IPath {
  MONITORING: typeof MONITORING;
  LOGIN: typeof LOGIN;
  HISTORY: typeof HISTORY;
  USERS: typeof USERS;
}

export const PATH: IPath = {
  MONITORING,
  LOGIN,
  HISTORY,
  USERS,
};
