import { legacy_createStore as createStore } from 'redux'

// Initial state
const initialState = {
  sidebarShow: true, 
  isAuthenticated: false,
}

// Action Types
const SET_AUTHENTICATED = 'SET_AUTHENTICATED' 
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

// Reducer
const changeState = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload } 
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarShow: !state.sidebarShow }
    default:
      return state
  }
}

// Store
const store = createStore(changeState)

// Action Creators
export const setAuthenticated = (isAuthenticated) => ({
  type: SET_AUTHENTICATED,
  payload: isAuthenticated,
})
 
export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
})

export default store
