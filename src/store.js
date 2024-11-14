import { legacy_createStore as createStore } from 'redux'

// Initial state
const initialState = {
  sidebarShow: true,
  theme: 'light',
  isAuthenticated: false,
}

// Action Types
const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
const SET_THEME = 'SET_THEME'
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

// Reducer
const changeState = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload }
    case SET_THEME:
      return { ...state, theme: action.payload }
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

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
})

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
})

export default store
