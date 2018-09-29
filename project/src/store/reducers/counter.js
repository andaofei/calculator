import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'
// const initState = {
//   name: '',
//   num: 0,
//   asyncNum: 0
// }

export default handleActions({
  [INCREMENT](state, actions) {
    console.log(state, actions)
    return { ...state, num: state.num + 1, selectId: actions.payload }
  },

  [DECREMENT](state) {
    return { ...state, num: state.num - 1 }
  },

  [ASYNC_INCREMENT](state, action) {
    return { ...state, asyncNum: state.asyncNum + action.payload }
  }

}, { num: 0, asyncNum: 0, selectId: '' })
// , { num: 0, asyncNum: 0 }
