import * as types from "./constants"

const initialState = { indoorTasksAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_V1_BUSINESSPHOTO_LIST:
    case types.API_V1_BUSINESSPHOTO_LIST_SUCCEEDED:
    case types.API_V1_BUSINESSPHOTO_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_BUSINESSPHOTO_CREATE:
    case types.API_V1_BUSINESSPHOTO_CREATE_SUCCEEDED:
    case types.API_V1_BUSINESSPHOTO_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_BUSINESSPHOTO_READ:
    case types.API_V1_BUSINESSPHOTO_READ_SUCCEEDED:
    case types.API_V1_BUSINESSPHOTO_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_BUSINESSPHOTO_UPDATE:
    case types.API_V1_BUSINESSPHOTO_UPDATE_SUCCEEDED:
    case types.API_V1_BUSINESSPHOTO_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_BUSINESSPHOTO_PARTIAL_UPDATE:
    case types.API_V1_BUSINESSPHOTO_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_BUSINESSPHOTO_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_BUSINESSPHOTO_DELETE:
    case types.API_V1_BUSINESSPHOTO_DELETE_SUCCEEDED:
    case types.API_V1_BUSINESSPHOTO_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CATEGORY_LIST:
    case types.API_V1_CATEGORY_LIST_SUCCEEDED:
    case types.API_V1_CATEGORY_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CATEGORY_CREATE:
    case types.API_V1_CATEGORY_CREATE_SUCCEEDED:
    case types.API_V1_CATEGORY_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CATEGORY_READ:
    case types.API_V1_CATEGORY_READ_SUCCEEDED:
    case types.API_V1_CATEGORY_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CATEGORY_UPDATE:
    case types.API_V1_CATEGORY_UPDATE_SUCCEEDED:
    case types.API_V1_CATEGORY_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CATEGORY_PARTIAL_UPDATE:
    case types.API_V1_CATEGORY_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CATEGORY_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CATEGORY_DELETE:
    case types.API_V1_CATEGORY_DELETE_SUCCEEDED:
    case types.API_V1_CATEGORY_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERLOCATION_LIST:
    case types.API_V1_CUSTOMERLOCATION_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMERLOCATION_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERLOCATION_CREATE:
    case types.API_V1_CUSTOMERLOCATION_CREATE_SUCCEEDED:
    case types.API_V1_CUSTOMERLOCATION_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERLOCATION_READ:
    case types.API_V1_CUSTOMERLOCATION_READ_SUCCEEDED:
    case types.API_V1_CUSTOMERLOCATION_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERLOCATION_UPDATE:
    case types.API_V1_CUSTOMERLOCATION_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMERLOCATION_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERLOCATION_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMERLOCATION_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMERLOCATION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERLOCATION_DELETE:
    case types.API_V1_CUSTOMERLOCATION_DELETE_SUCCEEDED:
    case types.API_V1_CUSTOMERLOCATION_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERPROFILE_LIST:
    case types.API_V1_CUSTOMERPROFILE_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMERPROFILE_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERPROFILE_CREATE:
    case types.API_V1_CUSTOMERPROFILE_CREATE_SUCCEEDED:
    case types.API_V1_CUSTOMERPROFILE_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERPROFILE_READ:
    case types.API_V1_CUSTOMERPROFILE_READ_SUCCEEDED:
    case types.API_V1_CUSTOMERPROFILE_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERPROFILE_UPDATE:
    case types.API_V1_CUSTOMERPROFILE_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMERPROFILE_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERPROFILE_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMERPROFILE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMERPROFILE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERPROFILE_DELETE:
    case types.API_V1_CUSTOMERPROFILE_DELETE_SUCCEEDED:
    case types.API_V1_CUSTOMERPROFILE_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERWALLET_LIST:
    case types.API_V1_CUSTOMERWALLET_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMERWALLET_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERWALLET_CREATE:
    case types.API_V1_CUSTOMERWALLET_CREATE_SUCCEEDED:
    case types.API_V1_CUSTOMERWALLET_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERWALLET_READ:
    case types.API_V1_CUSTOMERWALLET_READ_SUCCEEDED:
    case types.API_V1_CUSTOMERWALLET_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERWALLET_UPDATE:
    case types.API_V1_CUSTOMERWALLET_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMERWALLET_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERWALLET_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMERWALLET_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMERWALLET_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMERWALLET_DELETE:
    case types.API_V1_CUSTOMERWALLET_DELETE_SUCCEEDED:
    case types.API_V1_CUSTOMERWALLET_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_INVITECODE_LIST:
    case types.API_V1_INVITECODE_LIST_SUCCEEDED:
    case types.API_V1_INVITECODE_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_INVITECODE_CREATE:
    case types.API_V1_INVITECODE_CREATE_SUCCEEDED:
    case types.API_V1_INVITECODE_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_INVITECODE_READ:
    case types.API_V1_INVITECODE_READ_SUCCEEDED:
    case types.API_V1_INVITECODE_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_INVITECODE_UPDATE:
    case types.API_V1_INVITECODE_UPDATE_SUCCEEDED:
    case types.API_V1_INVITECODE_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_INVITECODE_PARTIAL_UPDATE:
    case types.API_V1_INVITECODE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_INVITECODE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_INVITECODE_DELETE:
    case types.API_V1_INVITECODE_DELETE_SUCCEEDED:
    case types.API_V1_INVITECODE_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MAPLOCATION_LIST:
    case types.API_V1_MAPLOCATION_LIST_SUCCEEDED:
    case types.API_V1_MAPLOCATION_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MAPLOCATION_CREATE:
    case types.API_V1_MAPLOCATION_CREATE_SUCCEEDED:
    case types.API_V1_MAPLOCATION_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MAPLOCATION_READ:
    case types.API_V1_MAPLOCATION_READ_SUCCEEDED:
    case types.API_V1_MAPLOCATION_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MAPLOCATION_UPDATE:
    case types.API_V1_MAPLOCATION_UPDATE_SUCCEEDED:
    case types.API_V1_MAPLOCATION_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MAPLOCATION_PARTIAL_UPDATE:
    case types.API_V1_MAPLOCATION_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_MAPLOCATION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MAPLOCATION_DELETE:
    case types.API_V1_MAPLOCATION_DELETE_SUCCEEDED:
    case types.API_V1_MAPLOCATION_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MESSAGE_LIST:
    case types.API_V1_MESSAGE_LIST_SUCCEEDED:
    case types.API_V1_MESSAGE_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MESSAGE_CREATE:
    case types.API_V1_MESSAGE_CREATE_SUCCEEDED:
    case types.API_V1_MESSAGE_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MESSAGE_READ:
    case types.API_V1_MESSAGE_READ_SUCCEEDED:
    case types.API_V1_MESSAGE_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MESSAGE_UPDATE:
    case types.API_V1_MESSAGE_UPDATE_SUCCEEDED:
    case types.API_V1_MESSAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MESSAGE_PARTIAL_UPDATE:
    case types.API_V1_MESSAGE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_MESSAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_MESSAGE_DELETE:
    case types.API_V1_MESSAGE_DELETE_SUCCEEDED:
    case types.API_V1_MESSAGE_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_NOTIFICATION_LIST:
    case types.API_V1_NOTIFICATION_LIST_SUCCEEDED:
    case types.API_V1_NOTIFICATION_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_NOTIFICATION_CREATE:
    case types.API_V1_NOTIFICATION_CREATE_SUCCEEDED:
    case types.API_V1_NOTIFICATION_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_NOTIFICATION_READ:
    case types.API_V1_NOTIFICATION_READ_SUCCEEDED:
    case types.API_V1_NOTIFICATION_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_NOTIFICATION_UPDATE:
    case types.API_V1_NOTIFICATION_UPDATE_SUCCEEDED:
    case types.API_V1_NOTIFICATION_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_NOTIFICATION_PARTIAL_UPDATE:
    case types.API_V1_NOTIFICATION_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_NOTIFICATION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_NOTIFICATION_DELETE:
    case types.API_V1_NOTIFICATION_DELETE_SUCCEEDED:
    case types.API_V1_NOTIFICATION_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_LIST:
    case types.API_V1_PAYMENTMETHOD_LIST_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_CREATE:
    case types.API_V1_PAYMENTMETHOD_CREATE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_READ:
    case types.API_V1_PAYMENTMETHOD_READ_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_UPDATE:
    case types.API_V1_PAYMENTMETHOD_UPDATE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE:
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_DELETE:
    case types.API_V1_PAYMENTMETHOD_DELETE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTTRANSACTION_LIST:
    case types.API_V1_PAYMENTTRANSACTION_LIST_SUCCEEDED:
    case types.API_V1_PAYMENTTRANSACTION_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTTRANSACTION_CREATE:
    case types.API_V1_PAYMENTTRANSACTION_CREATE_SUCCEEDED:
    case types.API_V1_PAYMENTTRANSACTION_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTTRANSACTION_READ:
    case types.API_V1_PAYMENTTRANSACTION_READ_SUCCEEDED:
    case types.API_V1_PAYMENTTRANSACTION_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTTRANSACTION_UPDATE:
    case types.API_V1_PAYMENTTRANSACTION_UPDATE_SUCCEEDED:
    case types.API_V1_PAYMENTTRANSACTION_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTTRANSACTION_PARTIAL_UPDATE:
    case types.API_V1_PAYMENTTRANSACTION_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_PAYMENTTRANSACTION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_PAYMENTTRANSACTION_DELETE:
    case types.API_V1_PAYMENTTRANSACTION_DELETE_SUCCEEDED:
    case types.API_V1_PAYMENTTRANSACTION_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_RATING_LIST:
    case types.API_V1_RATING_LIST_SUCCEEDED:
    case types.API_V1_RATING_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_RATING_CREATE:
    case types.API_V1_RATING_CREATE_SUCCEEDED:
    case types.API_V1_RATING_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_RATING_READ:
    case types.API_V1_RATING_READ_SUCCEEDED:
    case types.API_V1_RATING_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_RATING_UPDATE:
    case types.API_V1_RATING_UPDATE_SUCCEEDED:
    case types.API_V1_RATING_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_RATING_PARTIAL_UPDATE:
    case types.API_V1_RATING_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_RATING_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_RATING_DELETE:
    case types.API_V1_RATING_DELETE_SUCCEEDED:
    case types.API_V1_RATING_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_SUBCATEGORY_LIST:
    case types.API_V1_SUBCATEGORY_LIST_SUCCEEDED:
    case types.API_V1_SUBCATEGORY_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_SUBCATEGORY_CREATE:
    case types.API_V1_SUBCATEGORY_CREATE_SUCCEEDED:
    case types.API_V1_SUBCATEGORY_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_SUBCATEGORY_READ:
    case types.API_V1_SUBCATEGORY_READ_SUCCEEDED:
    case types.API_V1_SUBCATEGORY_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_SUBCATEGORY_UPDATE:
    case types.API_V1_SUBCATEGORY_UPDATE_SUCCEEDED:
    case types.API_V1_SUBCATEGORY_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_SUBCATEGORY_PARTIAL_UPDATE:
    case types.API_V1_SUBCATEGORY_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_SUBCATEGORY_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_SUBCATEGORY_DELETE:
    case types.API_V1_SUBCATEGORY_DELETE_SUCCEEDED:
    case types.API_V1_SUBCATEGORY_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASK_LIST:
    case types.API_V1_TASK_LIST_SUCCEEDED:
    case types.API_V1_TASK_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASK_CREATE:
    case types.API_V1_TASK_CREATE_SUCCEEDED:
    case types.API_V1_TASK_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASK_READ:
    case types.API_V1_TASK_READ_SUCCEEDED:
    case types.API_V1_TASK_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASK_UPDATE:
    case types.API_V1_TASK_UPDATE_SUCCEEDED:
    case types.API_V1_TASK_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASK_PARTIAL_UPDATE:
    case types.API_V1_TASK_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_TASK_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASK_DELETE:
    case types.API_V1_TASK_DELETE_SUCCEEDED:
    case types.API_V1_TASK_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERAVAILABILITY_LIST:
    case types.API_V1_TASKERAVAILABILITY_LIST_SUCCEEDED:
    case types.API_V1_TASKERAVAILABILITY_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERAVAILABILITY_CREATE:
    case types.API_V1_TASKERAVAILABILITY_CREATE_SUCCEEDED:
    case types.API_V1_TASKERAVAILABILITY_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERAVAILABILITY_READ:
    case types.API_V1_TASKERAVAILABILITY_READ_SUCCEEDED:
    case types.API_V1_TASKERAVAILABILITY_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERAVAILABILITY_UPDATE:
    case types.API_V1_TASKERAVAILABILITY_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERAVAILABILITY_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERAVAILABILITY_PARTIAL_UPDATE:
    case types.API_V1_TASKERAVAILABILITY_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERAVAILABILITY_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERAVAILABILITY_DELETE:
    case types.API_V1_TASKERAVAILABILITY_DELETE_SUCCEEDED:
    case types.API_V1_TASKERAVAILABILITY_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERLOCATION_LIST:
    case types.API_V1_TASKERLOCATION_LIST_SUCCEEDED:
    case types.API_V1_TASKERLOCATION_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERLOCATION_CREATE:
    case types.API_V1_TASKERLOCATION_CREATE_SUCCEEDED:
    case types.API_V1_TASKERLOCATION_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERLOCATION_READ:
    case types.API_V1_TASKERLOCATION_READ_SUCCEEDED:
    case types.API_V1_TASKERLOCATION_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERLOCATION_UPDATE:
    case types.API_V1_TASKERLOCATION_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERLOCATION_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERLOCATION_PARTIAL_UPDATE:
    case types.API_V1_TASKERLOCATION_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERLOCATION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERLOCATION_DELETE:
    case types.API_V1_TASKERLOCATION_DELETE_SUCCEEDED:
    case types.API_V1_TASKERLOCATION_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPAYMENTACCOUNT_LIST:
    case types.API_V1_TASKERPAYMENTACCOUNT_LIST_SUCCEEDED:
    case types.API_V1_TASKERPAYMENTACCOUNT_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPAYMENTACCOUNT_CREATE:
    case types.API_V1_TASKERPAYMENTACCOUNT_CREATE_SUCCEEDED:
    case types.API_V1_TASKERPAYMENTACCOUNT_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPAYMENTACCOUNT_READ:
    case types.API_V1_TASKERPAYMENTACCOUNT_READ_SUCCEEDED:
    case types.API_V1_TASKERPAYMENTACCOUNT_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPAYMENTACCOUNT_UPDATE:
    case types.API_V1_TASKERPAYMENTACCOUNT_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERPAYMENTACCOUNT_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPAYMENTACCOUNT_PARTIAL_UPDATE:
    case types.API_V1_TASKERPAYMENTACCOUNT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERPAYMENTACCOUNT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPAYMENTACCOUNT_DELETE:
    case types.API_V1_TASKERPAYMENTACCOUNT_DELETE_SUCCEEDED:
    case types.API_V1_TASKERPAYMENTACCOUNT_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPROFILE_LIST:
    case types.API_V1_TASKERPROFILE_LIST_SUCCEEDED:
    case types.API_V1_TASKERPROFILE_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPROFILE_CREATE:
    case types.API_V1_TASKERPROFILE_CREATE_SUCCEEDED:
    case types.API_V1_TASKERPROFILE_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPROFILE_READ:
    case types.API_V1_TASKERPROFILE_READ_SUCCEEDED:
    case types.API_V1_TASKERPROFILE_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPROFILE_UPDATE:
    case types.API_V1_TASKERPROFILE_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERPROFILE_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPROFILE_PARTIAL_UPDATE:
    case types.API_V1_TASKERPROFILE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERPROFILE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERPROFILE_DELETE:
    case types.API_V1_TASKERPROFILE_DELETE_SUCCEEDED:
    case types.API_V1_TASKERPROFILE_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERSKILL_LIST:
    case types.API_V1_TASKERSKILL_LIST_SUCCEEDED:
    case types.API_V1_TASKERSKILL_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERSKILL_CREATE:
    case types.API_V1_TASKERSKILL_CREATE_SUCCEEDED:
    case types.API_V1_TASKERSKILL_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERSKILL_READ:
    case types.API_V1_TASKERSKILL_READ_SUCCEEDED:
    case types.API_V1_TASKERSKILL_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERSKILL_UPDATE:
    case types.API_V1_TASKERSKILL_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERSKILL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERSKILL_PARTIAL_UPDATE:
    case types.API_V1_TASKERSKILL_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERSKILL_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERSKILL_DELETE:
    case types.API_V1_TASKERSKILL_DELETE_SUCCEEDED:
    case types.API_V1_TASKERSKILL_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERWALLET_LIST:
    case types.API_V1_TASKERWALLET_LIST_SUCCEEDED:
    case types.API_V1_TASKERWALLET_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERWALLET_CREATE:
    case types.API_V1_TASKERWALLET_CREATE_SUCCEEDED:
    case types.API_V1_TASKERWALLET_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERWALLET_READ:
    case types.API_V1_TASKERWALLET_READ_SUCCEEDED:
    case types.API_V1_TASKERWALLET_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERWALLET_UPDATE:
    case types.API_V1_TASKERWALLET_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERWALLET_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERWALLET_PARTIAL_UPDATE:
    case types.API_V1_TASKERWALLET_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_TASKERWALLET_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKERWALLET_DELETE:
    case types.API_V1_TASKERWALLET_DELETE_SUCCEEDED:
    case types.API_V1_TASKERWALLET_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKLOCATION_LIST:
    case types.API_V1_TASKLOCATION_LIST_SUCCEEDED:
    case types.API_V1_TASKLOCATION_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKLOCATION_CREATE:
    case types.API_V1_TASKLOCATION_CREATE_SUCCEEDED:
    case types.API_V1_TASKLOCATION_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKLOCATION_READ:
    case types.API_V1_TASKLOCATION_READ_SUCCEEDED:
    case types.API_V1_TASKLOCATION_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKLOCATION_UPDATE:
    case types.API_V1_TASKLOCATION_UPDATE_SUCCEEDED:
    case types.API_V1_TASKLOCATION_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKLOCATION_PARTIAL_UPDATE:
    case types.API_V1_TASKLOCATION_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_TASKLOCATION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKLOCATION_DELETE:
    case types.API_V1_TASKLOCATION_DELETE_SUCCEEDED:
    case types.API_V1_TASKLOCATION_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKTRANSACTION_LIST:
    case types.API_V1_TASKTRANSACTION_LIST_SUCCEEDED:
    case types.API_V1_TASKTRANSACTION_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKTRANSACTION_CREATE:
    case types.API_V1_TASKTRANSACTION_CREATE_SUCCEEDED:
    case types.API_V1_TASKTRANSACTION_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKTRANSACTION_READ:
    case types.API_V1_TASKTRANSACTION_READ_SUCCEEDED:
    case types.API_V1_TASKTRANSACTION_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKTRANSACTION_UPDATE:
    case types.API_V1_TASKTRANSACTION_UPDATE_SUCCEEDED:
    case types.API_V1_TASKTRANSACTION_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKTRANSACTION_PARTIAL_UPDATE:
    case types.API_V1_TASKTRANSACTION_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_TASKTRANSACTION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TASKTRANSACTION_DELETE:
    case types.API_V1_TASKTRANSACTION_DELETE_SUCCEEDED:
    case types.API_V1_TASKTRANSACTION_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TIMESLOT_LIST:
    case types.API_V1_TIMESLOT_LIST_SUCCEEDED:
    case types.API_V1_TIMESLOT_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TIMESLOT_CREATE:
    case types.API_V1_TIMESLOT_CREATE_SUCCEEDED:
    case types.API_V1_TIMESLOT_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TIMESLOT_READ:
    case types.API_V1_TIMESLOT_READ_SUCCEEDED:
    case types.API_V1_TIMESLOT_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TIMESLOT_UPDATE:
    case types.API_V1_TIMESLOT_UPDATE_SUCCEEDED:
    case types.API_V1_TIMESLOT_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TIMESLOT_PARTIAL_UPDATE:
    case types.API_V1_TIMESLOT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_TIMESLOT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.API_V1_TIMESLOT_DELETE:
    case types.API_V1_TIMESLOT_DELETE_SUCCEEDED:
    case types.API_V1_TIMESLOT_DELETE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        indoorTasksAPI: [...state.indoorTasksAPI, action.response]
      })
    default:
      return state
  }
}
