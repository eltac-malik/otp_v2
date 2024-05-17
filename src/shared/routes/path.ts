const EXPLORE = "/";
const NOTIFICATION = "/notification";
const PROFILE = "/profile";
const ANNOUNCE_REQUEST = "/announce-request";
const BLOKER_REQUEST = "/bloker-request";
const COMPANY_REQUEST = "/company-request";
const DASHBOARD = "/dashboard";
const STATISTICS = "/statistics";
const SETTINGS = "/settings";
const COMPANIES = "/companies";
const EMPLOYEE = "/employee";
const BLOKER = "/bloker";
const USERS = "/users";
const PRICING = "/pricing";
const LOGIN = "/login";
const NOTES = "/notes";
const INSTRUCTIONS = "/instructions";
const LANGUAGE = "/settings/language";
const NOTIFICATION_SETTINGS = "/settings/notification";

interface IPath {
  EXPLORE: typeof EXPLORE;
  NOTIFICATION: typeof NOTIFICATION;
  PROFILE: typeof PROFILE;
  ANNOUNCE_REQUEST: typeof ANNOUNCE_REQUEST;
  BLOKER_REQUEST: typeof BLOKER_REQUEST;
  COMPANY_REQUEST: typeof COMPANY_REQUEST;
  DASHBOARD: typeof DASHBOARD;
  STATISTICS: typeof STATISTICS;
  SETTINGS: typeof SETTINGS;
  COMPANIES: typeof COMPANIES;
  EMPLOYEE: typeof EMPLOYEE;
  BLOKER: typeof BLOKER;
  USERS: typeof USERS;
  PRICING: typeof PRICING;
  LOGIN: typeof LOGIN;
  NOTES: typeof NOTES;
  LANGUAGE: typeof LANGUAGE;
  INSTRUCTIONS: typeof INSTRUCTIONS;
  NOTIFICATION_SETTINGS: typeof NOTIFICATION_SETTINGS;
}

export const PATH: IPath = {
  EXPLORE,
  NOTIFICATION,
  PROFILE,
  ANNOUNCE_REQUEST,
  BLOKER_REQUEST,
  COMPANY_REQUEST,
  DASHBOARD,
  STATISTICS,
  SETTINGS,
  COMPANIES,
  EMPLOYEE,
  BLOKER,
  INSTRUCTIONS,
  USERS,
  PRICING,
  LOGIN,
  NOTES,
  LANGUAGE,
  NOTIFICATION_SETTINGS,
};
