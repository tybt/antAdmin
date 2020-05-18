import { router, pathMatchRegexp } from 'utils'
import api from 'api'

const { loginByAccount } = api

export default {
  namespace: 'login',

  state: {},

  effects: {
    *login({ payload }, { put, call, select }) {
      const {data,code} = yield call(loginByAccount, payload)
      
      const { locationQuery } = yield select(_ => _.app)
      
      if (code===200) {
        const { from } = locationQuery
        yield put({ type: 'app/query',payload:data })
        if (!pathMatchRegexp('/login', from)) {
          if (['', '/'].includes(from)) router.push('/dashboard')
          else router.push(from)
        } else {
          router.push('/dashboard')
        }
      } else {
        throw data
      }
    },
  },
}
