import type { IUser } from '../interfaces';

export const registerNewUser = async (username: string = '1', email: string = '2', password: string = '3'): Promise<Response> => {
  const url = import.meta.env.STRAPI_SERVER + import.meta.env.REGISTER_URL;
  const data = {
    username,
    email,
    password
  };
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json();
};

export const getUserProfile = async (token: string): Promise<IUser |Response> => {
  const url = import.meta.env.STRAPI_SERVER + import.meta.env.USER_INFO_URL+'/?populate[Cart][populate]=*';

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });
  return response.json();
};
