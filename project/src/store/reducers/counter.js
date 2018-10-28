import { handleActions } from 'redux-actions'
import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  SET_IMAGES,
  PACK_TOTAL,
  CURT_TOTAL,
  FLAT_TOTAL,
  WATER_TOTAL,
  SUCK_TOTAL,
  CUSHION_TOTAL,
  WALL_TOTAL
} from '../types/counter'

export default handleActions({
  [INCREMENT](state, actions) {
    return { ...state, num: state.num + 1, selectId: actions.payload.id }
  }, // 选择tabID

  [PACK_TOTAL](state, actions) {
    // console.log(actions, 'PACK_TOTAL')
    return { ...state, packTotal: actions.payload }
  }, // 靠包总数

  [CURT_TOTAL](state, actions) {
    // console.log(actions, 'CURT_TOTAL')
    return { ...state, curtTotal: actions.payload }
  }, // 窗帘总数

  [FLAT_TOTAL](state, actions) {
    return { ...state, flatTotal: actions.payload }
  }, // 平板帘头

  [WATER_TOTAL](state, actions) {
    return { ...state, waterTotal: actions.payload }
  }, // 水波帘头

  [SUCK_TOTAL](state, actions) {
    return { ...state, SuckTotal: actions.payload }
  }, // 抽折帘头

  [CUSHION_TOTAL](state, actions) {
    return { ...state, CushionTotal: actions.payload }
  },

  [WALL_TOTAL](state, actions) {
    return { ...state, WallTotal: actions.payload }
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
}, {
  num: 0,
  asyncNum: 0,
  selectId: '',
  imagesUrl: [],
  packTotal: [],
  curtTotal: [],
  waterTotal: [],
  flatTotal: [],
  SuckTotal: [],
  CushionTotal: [],
  WallTotal: [],
})
