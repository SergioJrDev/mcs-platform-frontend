import Store from './../../DefaultStore'

const SET_ALL_USERS = 'SET_ALL_USERS'
const RESET_ALL_USERS = 'RESET_ALL_USERS'
const SET_SINGLE_USER = 'SET_SINGLE_USER'
const RESET_SINGLE_USER = 'RESET_SINGLE_USER'
const SET_USER_PAYMENTS_HISTORY = 'SET_USER_PAYMENTS_HISTORY'
const { usersDetails } = Store


export default function reducer(state = usersDetails, action) {
  const { type, payload } = action
  switch (type) {
    case RESET_ALL_USERS:
      return { ...state, all: [], viewSingle: [], paymentsHistory: [] }
    case SET_ALL_USERS:
      return { ...state, all: { ...payload } }
    case SET_SINGLE_USER:
      return { ...state, viewSingle: { ...payload } }
    case SET_USER_PAYMENTS_HISTORY:
      return { ...state, paymentsHistory: { ...payload } }
    case RESET_SINGLE_USER:
      return { ...state, viewSingle: [], paymentsHistory: [] }
    default:
      return state
  }
}

export function SetAllUsers(payload) {
  return {
    type: SET_ALL_USERS,
    payload,
  }
}

export function SetPaymentsHistory(payload) {
  return {
    type: SET_USER_PAYMENTS_HISTORY,
    payload,
  }
}

export function SetSingleUser(payload) {
  return {
    type: SET_SINGLE_USER,
    payload,
  }
}

export function ResetAllUsers() {
  return {
    type: RESET_ALL_USERS,
  }
}

export function ResetSingleUser() {
  return {
    type: RESET_SINGLE_USER,
  }
}

