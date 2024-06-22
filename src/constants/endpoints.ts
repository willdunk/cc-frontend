export const GET_USER = '/users';
export const GET_USER_FROM_ID = (userId: string) => `/users/${userId}`;
export const POST_NEW_USER = '/users';
export const POST_LOGIN = '/login';
export const POST_LOGOUT = '/logout';
export const POST_NEW_LISTING = '/listings';
export const GET_LISTINGS = (userId: string) => `/listings/${userId}`;
