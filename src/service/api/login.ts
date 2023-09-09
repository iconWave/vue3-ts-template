import http from '@/service/http'
import * as T from './types'

const loginApi: T.ILoginApi<any> = {
  login(params) {
    return http.post('/login', params)
  },
}
export default loginApi
