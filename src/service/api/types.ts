/* eslint-disable no-unused-vars */
export interface ILoginParams {
  userName: string
  password: string | number
}

export interface ILoginApi<T> {
  login: (params: ILoginParams) => Promise<T>
}
