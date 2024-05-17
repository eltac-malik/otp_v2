const MONITORING = "/";
const LOGIN = "/login";
const HISTORY = "/history";

interface IPath {
  MONITORING: typeof MONITORING;
  LOGIN: typeof LOGIN;
  HISTORY: typeof HISTORY;
}

export const PATH: IPath = {
  MONITORING,
  LOGIN,
  HISTORY,
};
