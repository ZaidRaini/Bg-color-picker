import { SignUpDataInterface } from '@/Common/user';
import { API_ROUTES } from '@/Constants/apiRoutes';
import { store } from '@/store';
import axios from 'axios';

export const getHeader = () => {
  const token = store.getState()?.AuthToken?.authToken;
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
};

export const SIGNUP = async (body: SignUpDataInterface) =>
  await axios.post(API_ROUTES.SIGNUP, body);
export const GET_POSTS = async () =>
  await axios.get('https://jsonplaceholder.typicode.com/posts');
