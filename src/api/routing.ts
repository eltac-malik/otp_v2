export const BASE_URL = "https://traveltour.host/api";

export const ENDPOINTS = {
  SEND_OTP_CODE: () => `${BASE_URL}/auth/login`,
  CHECK_OTP: () => `${BASE_URL}/auth/check-otp`,
  GET_ANNOUNCEMENT_WITH_PAGE: (page: number) =>
    `${BASE_URL}/apartments?page=${page}`,
};
