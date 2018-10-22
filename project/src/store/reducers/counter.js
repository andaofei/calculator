import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, SET_IMAGES } from '../types/counter'

export default handleActions({
  [INCREMENT](state, actions) {
    // console.log(state, actions)
    return { ...state, num: state.num + 1, selectId: actions.payload.id }
  },

  [DECREMENT](state) {
    return { ...state, num: state.num - 1 }
  },

  [ASYNC_INCREMENT](state, action) {
    return { ...state, asyncNum: state.asyncNum + action.payload }
  },

  [SET_IMAGES](state, actions) {
    // console.log(state, actions.payload.img)
    return { ...state, imagesUrl: actions.payload.img }
  }
}, { num: 0, asyncNum: 0, selectId: '', imagesUrl: [] })
