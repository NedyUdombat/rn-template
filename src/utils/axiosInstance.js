import { AsyncStorage } from 'react-native';

import axios from 'axios';

const axiosInstance = axios.create();

/**
 * Axios Instance
 */
export default async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    Object.assign(axiosInstance.defaults, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  return axiosInstance;
};
