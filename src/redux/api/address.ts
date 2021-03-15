import { request } from 'utils/request';

export const addressAPI = {
  address: (cep: String) => request(`/address/${cep}`).get({ teste: 'teste' }),
};
