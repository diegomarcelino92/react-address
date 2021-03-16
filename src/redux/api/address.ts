import { request } from 'utils/request';

export const addressAPI = {
  address: (cep: string) => request(`address/${cep}`).get(),
};
