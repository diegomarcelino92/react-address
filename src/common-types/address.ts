export interface Address {
  cep?: String;
  logradouro?: String;
  complemento?: String;
  bairro?: String;
  localidade?: String;
  uf?: String;
  ibge?: String;
  gia?: String;
  ddd?: String;
  siafi?: String;
}
export interface ReducerError {
  status?: number;
  message?: string;
}
