const MONITORING = "/";
const LOGIN = "/login";
const HISTORY = "/history";
const USERS = "/users";
const CHECK = "/check";

interface IPath {
  MONITORING: typeof MONITORING;
  LOGIN: typeof LOGIN;
  HISTORY: typeof HISTORY;
  USERS: typeof USERS;
  CHECK: typeof CHECK;
}

export const PATH: IPath = {
  MONITORING,
  LOGIN,
  HISTORY,
  USERS,
  CHECK,
};
