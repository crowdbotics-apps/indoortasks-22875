import * as types from "./constants"
export const api_v1_businessphoto_list = () => ({
  type: types.API_V1_BUSINESSPHOTO_LIST
})
export const api_v1_businessphoto_listSucceeded = (response, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_businessphoto_listFailed = (error, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_LIST_FAILED,
  error,
  starter
})
export const api_v1_businessphoto_create = data => ({
  type: types.API_V1_BUSINESSPHOTO_CREATE,
  data
})
export const api_v1_businessphoto_createSucceeded = (response, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_businessphoto_createFailed = (error, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_CREATE_FAILED,
  error,
  starter
})
export const api_v1_businessphoto_read = () => ({
  type: types.API_V1_BUSINESSPHOTO_READ
})
export const api_v1_businessphoto_readSucceeded = (response, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_businessphoto_readFailed = (error, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_READ_FAILED,
  error,
  starter
})
export const api_v1_businessphoto_update = data => ({
  type: types.API_V1_BUSINESSPHOTO_UPDATE,
  data
})
export const api_v1_businessphoto_updateSucceeded = (response, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_businessphoto_updateFailed = (error, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_businessphoto_partial_update = data => ({
  type: types.API_V1_BUSINESSPHOTO_PARTIAL_UPDATE,
  data
})
export const api_v1_businessphoto_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_BUSINESSPHOTO_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_businessphoto_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_businessphoto_delete = () => ({
  type: types.API_V1_BUSINESSPHOTO_DELETE
})
export const api_v1_businessphoto_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_businessphoto_deleteFailed = (error, starter) => ({
  type: types.API_V1_BUSINESSPHOTO_DELETE_FAILED,
  error,
  starter
})
export const api_v1_category_list = () => ({ type: types.API_V1_CATEGORY_LIST })
export const api_v1_category_listSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_listFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_LIST_FAILED,
  error,
  starter
})
export const api_v1_category_create = data => ({
  type: types.API_V1_CATEGORY_CREATE,
  data
})
export const api_v1_category_createSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_createFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_CREATE_FAILED,
  error,
  starter
})
export const api_v1_category_read = () => ({ type: types.API_V1_CATEGORY_READ })
export const api_v1_category_readSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_readFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_READ_FAILED,
  error,
  starter
})
export const api_v1_category_update = data => ({
  type: types.API_V1_CATEGORY_UPDATE,
  data
})
export const api_v1_category_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_updateFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_category_partial_update = data => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE,
  data
})
export const api_v1_category_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_category_delete = () => ({
  type: types.API_V1_CATEGORY_DELETE
})
export const api_v1_category_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_deleteFailed = (error, starter) => ({
  type: types.API_V1_CATEGORY_DELETE_FAILED,
  error,
  starter
})
export const api_v1_customerlocation_list = () => ({
  type: types.API_V1_CUSTOMERLOCATION_LIST
})
export const api_v1_customerlocation_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERLOCATION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerlocation_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERLOCATION_LIST_FAILED,
  error,
  starter
})
export const api_v1_customerlocation_create = data => ({
  type: types.API_V1_CUSTOMERLOCATION_CREATE,
  data
})
export const api_v1_customerlocation_createSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERLOCATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerlocation_createFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERLOCATION_CREATE_FAILED,
  error,
  starter
})
export const api_v1_customerlocation_read = () => ({
  type: types.API_V1_CUSTOMERLOCATION_READ
})
export const api_v1_customerlocation_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERLOCATION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerlocation_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERLOCATION_READ_FAILED,
  error,
  starter
})
export const api_v1_customerlocation_update = data => ({
  type: types.API_V1_CUSTOMERLOCATION_UPDATE,
  data
})
export const api_v1_customerlocation_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERLOCATION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerlocation_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERLOCATION_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_customerlocation_partial_update = data => ({
  type: types.API_V1_CUSTOMERLOCATION_PARTIAL_UPDATE,
  data
})
export const api_v1_customerlocation_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMERLOCATION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerlocation_partial_updateFailed = (
  error,
  starter
) => ({
  type: types.API_V1_CUSTOMERLOCATION_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_customerlocation_delete = () => ({
  type: types.API_V1_CUSTOMERLOCATION_DELETE
})
export const api_v1_customerlocation_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERLOCATION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerlocation_deleteFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERLOCATION_DELETE_FAILED,
  error,
  starter
})
export const api_v1_customerprofile_list = () => ({
  type: types.API_V1_CUSTOMERPROFILE_LIST
})
export const api_v1_customerprofile_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERPROFILE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerprofile_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERPROFILE_LIST_FAILED,
  error,
  starter
})
export const api_v1_customerprofile_create = data => ({
  type: types.API_V1_CUSTOMERPROFILE_CREATE,
  data
})
export const api_v1_customerprofile_createSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERPROFILE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerprofile_createFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERPROFILE_CREATE_FAILED,
  error,
  starter
})
export const api_v1_customerprofile_read = () => ({
  type: types.API_V1_CUSTOMERPROFILE_READ
})
export const api_v1_customerprofile_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERPROFILE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerprofile_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERPROFILE_READ_FAILED,
  error,
  starter
})
export const api_v1_customerprofile_update = data => ({
  type: types.API_V1_CUSTOMERPROFILE_UPDATE,
  data
})
export const api_v1_customerprofile_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERPROFILE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerprofile_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERPROFILE_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_customerprofile_partial_update = data => ({
  type: types.API_V1_CUSTOMERPROFILE_PARTIAL_UPDATE,
  data
})
export const api_v1_customerprofile_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMERPROFILE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerprofile_partial_updateFailed = (
  error,
  starter
) => ({
  type: types.API_V1_CUSTOMERPROFILE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_customerprofile_delete = () => ({
  type: types.API_V1_CUSTOMERPROFILE_DELETE
})
export const api_v1_customerprofile_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERPROFILE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerprofile_deleteFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERPROFILE_DELETE_FAILED,
  error,
  starter
})
export const api_v1_customerwallet_list = () => ({
  type: types.API_V1_CUSTOMERWALLET_LIST
})
export const api_v1_customerwallet_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerwallet_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_LIST_FAILED,
  error,
  starter
})
export const api_v1_customerwallet_create = data => ({
  type: types.API_V1_CUSTOMERWALLET_CREATE,
  data
})
export const api_v1_customerwallet_createSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerwallet_createFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_CREATE_FAILED,
  error,
  starter
})
export const api_v1_customerwallet_read = () => ({
  type: types.API_V1_CUSTOMERWALLET_READ
})
export const api_v1_customerwallet_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerwallet_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_READ_FAILED,
  error,
  starter
})
export const api_v1_customerwallet_update = data => ({
  type: types.API_V1_CUSTOMERWALLET_UPDATE,
  data
})
export const api_v1_customerwallet_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerwallet_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_customerwallet_partial_update = data => ({
  type: types.API_V1_CUSTOMERWALLET_PARTIAL_UPDATE,
  data
})
export const api_v1_customerwallet_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMERWALLET_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerwallet_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_customerwallet_delete = () => ({
  type: types.API_V1_CUSTOMERWALLET_DELETE
})
export const api_v1_customerwallet_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customerwallet_deleteFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMERWALLET_DELETE_FAILED,
  error,
  starter
})
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})
export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error,
  starter
})
export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})
export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error,
  starter
})
export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})
export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})
export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_listFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error,
  starter
})
export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_readFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error,
  starter
})
export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})
export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_invitecode_list = () => ({
  type: types.API_V1_INVITECODE_LIST
})
export const api_v1_invitecode_listSucceeded = (response, starter) => ({
  type: types.API_V1_INVITECODE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_invitecode_listFailed = (error, starter) => ({
  type: types.API_V1_INVITECODE_LIST_FAILED,
  error,
  starter
})
export const api_v1_invitecode_create = data => ({
  type: types.API_V1_INVITECODE_CREATE,
  data
})
export const api_v1_invitecode_createSucceeded = (response, starter) => ({
  type: types.API_V1_INVITECODE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_invitecode_createFailed = (error, starter) => ({
  type: types.API_V1_INVITECODE_CREATE_FAILED,
  error,
  starter
})
export const api_v1_invitecode_read = () => ({
  type: types.API_V1_INVITECODE_READ
})
export const api_v1_invitecode_readSucceeded = (response, starter) => ({
  type: types.API_V1_INVITECODE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_invitecode_readFailed = (error, starter) => ({
  type: types.API_V1_INVITECODE_READ_FAILED,
  error,
  starter
})
export const api_v1_invitecode_update = data => ({
  type: types.API_V1_INVITECODE_UPDATE,
  data
})
export const api_v1_invitecode_updateSucceeded = (response, starter) => ({
  type: types.API_V1_INVITECODE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_invitecode_updateFailed = (error, starter) => ({
  type: types.API_V1_INVITECODE_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_invitecode_partial_update = data => ({
  type: types.API_V1_INVITECODE_PARTIAL_UPDATE,
  data
})
export const api_v1_invitecode_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_INVITECODE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_invitecode_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_INVITECODE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_invitecode_delete = () => ({
  type: types.API_V1_INVITECODE_DELETE
})
export const api_v1_invitecode_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_INVITECODE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_invitecode_deleteFailed = (error, starter) => ({
  type: types.API_V1_INVITECODE_DELETE_FAILED,
  error,
  starter
})
export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_login_createFailed = (error, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error,
  starter
})
export const api_v1_maplocation_list = () => ({
  type: types.API_V1_MAPLOCATION_LIST
})
export const api_v1_maplocation_listSucceeded = (response, starter) => ({
  type: types.API_V1_MAPLOCATION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_maplocation_listFailed = (error, starter) => ({
  type: types.API_V1_MAPLOCATION_LIST_FAILED,
  error,
  starter
})
export const api_v1_maplocation_create = data => ({
  type: types.API_V1_MAPLOCATION_CREATE,
  data
})
export const api_v1_maplocation_createSucceeded = (response, starter) => ({
  type: types.API_V1_MAPLOCATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_maplocation_createFailed = (error, starter) => ({
  type: types.API_V1_MAPLOCATION_CREATE_FAILED,
  error,
  starter
})
export const api_v1_maplocation_read = () => ({
  type: types.API_V1_MAPLOCATION_READ
})
export const api_v1_maplocation_readSucceeded = (response, starter) => ({
  type: types.API_V1_MAPLOCATION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_maplocation_readFailed = (error, starter) => ({
  type: types.API_V1_MAPLOCATION_READ_FAILED,
  error,
  starter
})
export const api_v1_maplocation_update = data => ({
  type: types.API_V1_MAPLOCATION_UPDATE,
  data
})
export const api_v1_maplocation_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MAPLOCATION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_maplocation_updateFailed = (error, starter) => ({
  type: types.API_V1_MAPLOCATION_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_maplocation_partial_update = data => ({
  type: types.API_V1_MAPLOCATION_PARTIAL_UPDATE,
  data
})
export const api_v1_maplocation_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_MAPLOCATION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_maplocation_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_MAPLOCATION_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_maplocation_delete = () => ({
  type: types.API_V1_MAPLOCATION_DELETE
})
export const api_v1_maplocation_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_MAPLOCATION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_maplocation_deleteFailed = (error, starter) => ({
  type: types.API_V1_MAPLOCATION_DELETE_FAILED,
  error,
  starter
})
export const api_v1_message_list = () => ({ type: types.API_V1_MESSAGE_LIST })
export const api_v1_message_listSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_listFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_LIST_FAILED,
  error,
  starter
})
export const api_v1_message_create = data => ({
  type: types.API_V1_MESSAGE_CREATE,
  data
})
export const api_v1_message_createSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_createFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_CREATE_FAILED,
  error,
  starter
})
export const api_v1_message_read = () => ({ type: types.API_V1_MESSAGE_READ })
export const api_v1_message_readSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_readFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_READ_FAILED,
  error,
  starter
})
export const api_v1_message_update = data => ({
  type: types.API_V1_MESSAGE_UPDATE,
  data
})
export const api_v1_message_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_updateFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_message_partial_update = data => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_message_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_message_delete = () => ({
  type: types.API_V1_MESSAGE_DELETE
})
export const api_v1_message_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_deleteFailed = (error, starter) => ({
  type: types.API_V1_MESSAGE_DELETE_FAILED,
  error,
  starter
})
export const api_v1_notification_list = () => ({
  type: types.API_V1_NOTIFICATION_LIST
})
export const api_v1_notification_listSucceeded = (response, starter) => ({
  type: types.API_V1_NOTIFICATION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_notification_listFailed = (error, starter) => ({
  type: types.API_V1_NOTIFICATION_LIST_FAILED,
  error,
  starter
})
export const api_v1_notification_create = data => ({
  type: types.API_V1_NOTIFICATION_CREATE,
  data
})
export const api_v1_notification_createSucceeded = (response, starter) => ({
  type: types.API_V1_NOTIFICATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_notification_createFailed = (error, starter) => ({
  type: types.API_V1_NOTIFICATION_CREATE_FAILED,
  error,
  starter
})
export const api_v1_notification_read = () => ({
  type: types.API_V1_NOTIFICATION_READ
})
export const api_v1_notification_readSucceeded = (response, starter) => ({
  type: types.API_V1_NOTIFICATION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_notification_readFailed = (error, starter) => ({
  type: types.API_V1_NOTIFICATION_READ_FAILED,
  error,
  starter
})
export const api_v1_notification_update = data => ({
  type: types.API_V1_NOTIFICATION_UPDATE,
  data
})
export const api_v1_notification_updateSucceeded = (response, starter) => ({
  type: types.API_V1_NOTIFICATION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_notification_updateFailed = (error, starter) => ({
  type: types.API_V1_NOTIFICATION_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_notification_partial_update = data => ({
  type: types.API_V1_NOTIFICATION_PARTIAL_UPDATE,
  data
})
export const api_v1_notification_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_NOTIFICATION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_notification_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_NOTIFICATION_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_notification_delete = () => ({
  type: types.API_V1_NOTIFICATION_DELETE
})
export const api_v1_notification_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_NOTIFICATION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_notification_deleteFailed = (error, starter) => ({
  type: types.API_V1_NOTIFICATION_DELETE_FAILED,
  error,
  starter
})
export const api_v1_paymentmethod_list = () => ({
  type: types.API_V1_PAYMENTMETHOD_LIST
})
export const api_v1_paymentmethod_listSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_listFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_LIST_FAILED,
  error,
  starter
})
export const api_v1_paymentmethod_create = data => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE,
  data
})
export const api_v1_paymentmethod_createSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_createFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE_FAILED,
  error,
  starter
})
export const api_v1_paymentmethod_read = () => ({
  type: types.API_V1_PAYMENTMETHOD_READ
})
export const api_v1_paymentmethod_readSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_readFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_READ_FAILED,
  error,
  starter
})
export const api_v1_paymentmethod_update = data => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE,
  data
})
export const api_v1_paymentmethod_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_updateFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_paymentmethod_partial_update = data => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE,
  data
})
export const api_v1_paymentmethod_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_paymentmethod_delete = () => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE
})
export const api_v1_paymentmethod_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_deleteFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE_FAILED,
  error,
  starter
})
export const api_v1_paymenttransaction_list = () => ({
  type: types.API_V1_PAYMENTTRANSACTION_LIST
})
export const api_v1_paymenttransaction_listSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTTRANSACTION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymenttransaction_listFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTTRANSACTION_LIST_FAILED,
  error,
  starter
})
export const api_v1_paymenttransaction_create = data => ({
  type: types.API_V1_PAYMENTTRANSACTION_CREATE,
  data
})
export const api_v1_paymenttransaction_createSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_PAYMENTTRANSACTION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymenttransaction_createFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTTRANSACTION_CREATE_FAILED,
  error,
  starter
})
export const api_v1_paymenttransaction_read = () => ({
  type: types.API_V1_PAYMENTTRANSACTION_READ
})
export const api_v1_paymenttransaction_readSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTTRANSACTION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymenttransaction_readFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTTRANSACTION_READ_FAILED,
  error,
  starter
})
export const api_v1_paymenttransaction_update = data => ({
  type: types.API_V1_PAYMENTTRANSACTION_UPDATE,
  data
})
export const api_v1_paymenttransaction_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_PAYMENTTRANSACTION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymenttransaction_updateFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTTRANSACTION_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_paymenttransaction_partial_update = data => ({
  type: types.API_V1_PAYMENTTRANSACTION_PARTIAL_UPDATE,
  data
})
export const api_v1_paymenttransaction_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_PAYMENTTRANSACTION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymenttransaction_partial_updateFailed = (
  error,
  starter
) => ({
  type: types.API_V1_PAYMENTTRANSACTION_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_paymenttransaction_delete = () => ({
  type: types.API_V1_PAYMENTTRANSACTION_DELETE
})
export const api_v1_paymenttransaction_deleteSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_PAYMENTTRANSACTION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymenttransaction_deleteFailed = (error, starter) => ({
  type: types.API_V1_PAYMENTTRANSACTION_DELETE_FAILED,
  error,
  starter
})
export const api_v1_rating_list = () => ({ type: types.API_V1_RATING_LIST })
export const api_v1_rating_listSucceeded = (response, starter) => ({
  type: types.API_V1_RATING_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_rating_listFailed = (error, starter) => ({
  type: types.API_V1_RATING_LIST_FAILED,
  error,
  starter
})
export const api_v1_rating_create = data => ({
  type: types.API_V1_RATING_CREATE,
  data
})
export const api_v1_rating_createSucceeded = (response, starter) => ({
  type: types.API_V1_RATING_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_rating_createFailed = (error, starter) => ({
  type: types.API_V1_RATING_CREATE_FAILED,
  error,
  starter
})
export const api_v1_rating_read = () => ({ type: types.API_V1_RATING_READ })
export const api_v1_rating_readSucceeded = (response, starter) => ({
  type: types.API_V1_RATING_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_rating_readFailed = (error, starter) => ({
  type: types.API_V1_RATING_READ_FAILED,
  error,
  starter
})
export const api_v1_rating_update = data => ({
  type: types.API_V1_RATING_UPDATE,
  data
})
export const api_v1_rating_updateSucceeded = (response, starter) => ({
  type: types.API_V1_RATING_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_rating_updateFailed = (error, starter) => ({
  type: types.API_V1_RATING_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_rating_partial_update = data => ({
  type: types.API_V1_RATING_PARTIAL_UPDATE,
  data
})
export const api_v1_rating_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_RATING_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_rating_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_RATING_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_rating_delete = () => ({ type: types.API_V1_RATING_DELETE })
export const api_v1_rating_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_RATING_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_rating_deleteFailed = (error, starter) => ({
  type: types.API_V1_RATING_DELETE_FAILED,
  error,
  starter
})
export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})
export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_signup_createFailed = (error, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error,
  starter
})
export const api_v1_subcategory_list = () => ({
  type: types.API_V1_SUBCATEGORY_LIST
})
export const api_v1_subcategory_listSucceeded = (response, starter) => ({
  type: types.API_V1_SUBCATEGORY_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_subcategory_listFailed = (error, starter) => ({
  type: types.API_V1_SUBCATEGORY_LIST_FAILED,
  error,
  starter
})
export const api_v1_subcategory_create = data => ({
  type: types.API_V1_SUBCATEGORY_CREATE,
  data
})
export const api_v1_subcategory_createSucceeded = (response, starter) => ({
  type: types.API_V1_SUBCATEGORY_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_subcategory_createFailed = (error, starter) => ({
  type: types.API_V1_SUBCATEGORY_CREATE_FAILED,
  error,
  starter
})
export const api_v1_subcategory_read = () => ({
  type: types.API_V1_SUBCATEGORY_READ
})
export const api_v1_subcategory_readSucceeded = (response, starter) => ({
  type: types.API_V1_SUBCATEGORY_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_subcategory_readFailed = (error, starter) => ({
  type: types.API_V1_SUBCATEGORY_READ_FAILED,
  error,
  starter
})
export const api_v1_subcategory_update = data => ({
  type: types.API_V1_SUBCATEGORY_UPDATE,
  data
})
export const api_v1_subcategory_updateSucceeded = (response, starter) => ({
  type: types.API_V1_SUBCATEGORY_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_subcategory_updateFailed = (error, starter) => ({
  type: types.API_V1_SUBCATEGORY_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_subcategory_partial_update = data => ({
  type: types.API_V1_SUBCATEGORY_PARTIAL_UPDATE,
  data
})
export const api_v1_subcategory_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_SUBCATEGORY_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_subcategory_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_SUBCATEGORY_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_subcategory_delete = () => ({
  type: types.API_V1_SUBCATEGORY_DELETE
})
export const api_v1_subcategory_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_SUBCATEGORY_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_subcategory_deleteFailed = (error, starter) => ({
  type: types.API_V1_SUBCATEGORY_DELETE_FAILED,
  error,
  starter
})
export const api_v1_task_list = () => ({ type: types.API_V1_TASK_LIST })
export const api_v1_task_listSucceeded = (response, starter) => ({
  type: types.API_V1_TASK_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_task_listFailed = (error, starter) => ({
  type: types.API_V1_TASK_LIST_FAILED,
  error,
  starter
})
export const api_v1_task_create = data => ({
  type: types.API_V1_TASK_CREATE,
  data
})
export const api_v1_task_createSucceeded = (response, starter) => ({
  type: types.API_V1_TASK_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_task_createFailed = (error, starter) => ({
  type: types.API_V1_TASK_CREATE_FAILED,
  error,
  starter
})
export const api_v1_task_read = () => ({ type: types.API_V1_TASK_READ })
export const api_v1_task_readSucceeded = (response, starter) => ({
  type: types.API_V1_TASK_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_task_readFailed = (error, starter) => ({
  type: types.API_V1_TASK_READ_FAILED,
  error,
  starter
})
export const api_v1_task_update = data => ({
  type: types.API_V1_TASK_UPDATE,
  data
})
export const api_v1_task_updateSucceeded = (response, starter) => ({
  type: types.API_V1_TASK_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_task_updateFailed = (error, starter) => ({
  type: types.API_V1_TASK_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_task_partial_update = data => ({
  type: types.API_V1_TASK_PARTIAL_UPDATE,
  data
})
export const api_v1_task_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_TASK_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_task_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_TASK_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_task_delete = () => ({ type: types.API_V1_TASK_DELETE })
export const api_v1_task_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_TASK_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_task_deleteFailed = (error, starter) => ({
  type: types.API_V1_TASK_DELETE_FAILED,
  error,
  starter
})
export const api_v1_taskeravailability_list = () => ({
  type: types.API_V1_TASKERAVAILABILITY_LIST
})
export const api_v1_taskeravailability_listSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERAVAILABILITY_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskeravailability_listFailed = (error, starter) => ({
  type: types.API_V1_TASKERAVAILABILITY_LIST_FAILED,
  error,
  starter
})
export const api_v1_taskeravailability_create = data => ({
  type: types.API_V1_TASKERAVAILABILITY_CREATE,
  data
})
export const api_v1_taskeravailability_createSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERAVAILABILITY_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskeravailability_createFailed = (error, starter) => ({
  type: types.API_V1_TASKERAVAILABILITY_CREATE_FAILED,
  error,
  starter
})
export const api_v1_taskeravailability_read = () => ({
  type: types.API_V1_TASKERAVAILABILITY_READ
})
export const api_v1_taskeravailability_readSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERAVAILABILITY_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskeravailability_readFailed = (error, starter) => ({
  type: types.API_V1_TASKERAVAILABILITY_READ_FAILED,
  error,
  starter
})
export const api_v1_taskeravailability_update = data => ({
  type: types.API_V1_TASKERAVAILABILITY_UPDATE,
  data
})
export const api_v1_taskeravailability_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERAVAILABILITY_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskeravailability_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKERAVAILABILITY_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskeravailability_partial_update = data => ({
  type: types.API_V1_TASKERAVAILABILITY_PARTIAL_UPDATE,
  data
})
export const api_v1_taskeravailability_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERAVAILABILITY_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskeravailability_partial_updateFailed = (
  error,
  starter
) => ({
  type: types.API_V1_TASKERAVAILABILITY_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskeravailability_delete = () => ({
  type: types.API_V1_TASKERAVAILABILITY_DELETE
})
export const api_v1_taskeravailability_deleteSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERAVAILABILITY_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskeravailability_deleteFailed = (error, starter) => ({
  type: types.API_V1_TASKERAVAILABILITY_DELETE_FAILED,
  error,
  starter
})
export const api_v1_taskerlocation_list = () => ({
  type: types.API_V1_TASKERLOCATION_LIST
})
export const api_v1_taskerlocation_listSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERLOCATION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerlocation_listFailed = (error, starter) => ({
  type: types.API_V1_TASKERLOCATION_LIST_FAILED,
  error,
  starter
})
export const api_v1_taskerlocation_create = data => ({
  type: types.API_V1_TASKERLOCATION_CREATE,
  data
})
export const api_v1_taskerlocation_createSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERLOCATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerlocation_createFailed = (error, starter) => ({
  type: types.API_V1_TASKERLOCATION_CREATE_FAILED,
  error,
  starter
})
export const api_v1_taskerlocation_read = () => ({
  type: types.API_V1_TASKERLOCATION_READ
})
export const api_v1_taskerlocation_readSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERLOCATION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerlocation_readFailed = (error, starter) => ({
  type: types.API_V1_TASKERLOCATION_READ_FAILED,
  error,
  starter
})
export const api_v1_taskerlocation_update = data => ({
  type: types.API_V1_TASKERLOCATION_UPDATE,
  data
})
export const api_v1_taskerlocation_updateSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERLOCATION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerlocation_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKERLOCATION_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskerlocation_partial_update = data => ({
  type: types.API_V1_TASKERLOCATION_PARTIAL_UPDATE,
  data
})
export const api_v1_taskerlocation_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERLOCATION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerlocation_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKERLOCATION_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskerlocation_delete = () => ({
  type: types.API_V1_TASKERLOCATION_DELETE
})
export const api_v1_taskerlocation_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERLOCATION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerlocation_deleteFailed = (error, starter) => ({
  type: types.API_V1_TASKERLOCATION_DELETE_FAILED,
  error,
  starter
})
export const api_v1_taskerpaymentaccount_list = () => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_LIST
})
export const api_v1_taskerpaymentaccount_listSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerpaymentaccount_listFailed = (error, starter) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_LIST_FAILED,
  error,
  starter
})
export const api_v1_taskerpaymentaccount_create = data => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_CREATE,
  data
})
export const api_v1_taskerpaymentaccount_createSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerpaymentaccount_createFailed = (error, starter) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_CREATE_FAILED,
  error,
  starter
})
export const api_v1_taskerpaymentaccount_read = () => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_READ
})
export const api_v1_taskerpaymentaccount_readSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerpaymentaccount_readFailed = (error, starter) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_READ_FAILED,
  error,
  starter
})
export const api_v1_taskerpaymentaccount_update = data => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_UPDATE,
  data
})
export const api_v1_taskerpaymentaccount_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerpaymentaccount_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskerpaymentaccount_partial_update = data => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_PARTIAL_UPDATE,
  data
})
export const api_v1_taskerpaymentaccount_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerpaymentaccount_partial_updateFailed = (
  error,
  starter
) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskerpaymentaccount_delete = () => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_DELETE
})
export const api_v1_taskerpaymentaccount_deleteSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerpaymentaccount_deleteFailed = (error, starter) => ({
  type: types.API_V1_TASKERPAYMENTACCOUNT_DELETE_FAILED,
  error,
  starter
})
export const api_v1_taskerprofile_list = () => ({
  type: types.API_V1_TASKERPROFILE_LIST
})
export const api_v1_taskerprofile_listSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERPROFILE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerprofile_listFailed = (error, starter) => ({
  type: types.API_V1_TASKERPROFILE_LIST_FAILED,
  error,
  starter
})
export const api_v1_taskerprofile_create = data => ({
  type: types.API_V1_TASKERPROFILE_CREATE,
  data
})
export const api_v1_taskerprofile_createSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERPROFILE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerprofile_createFailed = (error, starter) => ({
  type: types.API_V1_TASKERPROFILE_CREATE_FAILED,
  error,
  starter
})
export const api_v1_taskerprofile_read = () => ({
  type: types.API_V1_TASKERPROFILE_READ
})
export const api_v1_taskerprofile_readSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERPROFILE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerprofile_readFailed = (error, starter) => ({
  type: types.API_V1_TASKERPROFILE_READ_FAILED,
  error,
  starter
})
export const api_v1_taskerprofile_update = data => ({
  type: types.API_V1_TASKERPROFILE_UPDATE,
  data
})
export const api_v1_taskerprofile_updateSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERPROFILE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerprofile_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKERPROFILE_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskerprofile_partial_update = data => ({
  type: types.API_V1_TASKERPROFILE_PARTIAL_UPDATE,
  data
})
export const api_v1_taskerprofile_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERPROFILE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerprofile_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKERPROFILE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskerprofile_delete = () => ({
  type: types.API_V1_TASKERPROFILE_DELETE
})
export const api_v1_taskerprofile_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERPROFILE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerprofile_deleteFailed = (error, starter) => ({
  type: types.API_V1_TASKERPROFILE_DELETE_FAILED,
  error,
  starter
})
export const api_v1_taskerskill_list = () => ({
  type: types.API_V1_TASKERSKILL_LIST
})
export const api_v1_taskerskill_listSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERSKILL_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerskill_listFailed = (error, starter) => ({
  type: types.API_V1_TASKERSKILL_LIST_FAILED,
  error,
  starter
})
export const api_v1_taskerskill_create = data => ({
  type: types.API_V1_TASKERSKILL_CREATE,
  data
})
export const api_v1_taskerskill_createSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERSKILL_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerskill_createFailed = (error, starter) => ({
  type: types.API_V1_TASKERSKILL_CREATE_FAILED,
  error,
  starter
})
export const api_v1_taskerskill_read = () => ({
  type: types.API_V1_TASKERSKILL_READ
})
export const api_v1_taskerskill_readSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERSKILL_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerskill_readFailed = (error, starter) => ({
  type: types.API_V1_TASKERSKILL_READ_FAILED,
  error,
  starter
})
export const api_v1_taskerskill_update = data => ({
  type: types.API_V1_TASKERSKILL_UPDATE,
  data
})
export const api_v1_taskerskill_updateSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERSKILL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerskill_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKERSKILL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskerskill_partial_update = data => ({
  type: types.API_V1_TASKERSKILL_PARTIAL_UPDATE,
  data
})
export const api_v1_taskerskill_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERSKILL_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerskill_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKERSKILL_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskerskill_delete = () => ({
  type: types.API_V1_TASKERSKILL_DELETE
})
export const api_v1_taskerskill_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERSKILL_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerskill_deleteFailed = (error, starter) => ({
  type: types.API_V1_TASKERSKILL_DELETE_FAILED,
  error,
  starter
})
export const api_v1_taskerwallet_list = () => ({
  type: types.API_V1_TASKERWALLET_LIST
})
export const api_v1_taskerwallet_listSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERWALLET_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerwallet_listFailed = (error, starter) => ({
  type: types.API_V1_TASKERWALLET_LIST_FAILED,
  error,
  starter
})
export const api_v1_taskerwallet_create = data => ({
  type: types.API_V1_TASKERWALLET_CREATE,
  data
})
export const api_v1_taskerwallet_createSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERWALLET_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerwallet_createFailed = (error, starter) => ({
  type: types.API_V1_TASKERWALLET_CREATE_FAILED,
  error,
  starter
})
export const api_v1_taskerwallet_read = () => ({
  type: types.API_V1_TASKERWALLET_READ
})
export const api_v1_taskerwallet_readSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERWALLET_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerwallet_readFailed = (error, starter) => ({
  type: types.API_V1_TASKERWALLET_READ_FAILED,
  error,
  starter
})
export const api_v1_taskerwallet_update = data => ({
  type: types.API_V1_TASKERWALLET_UPDATE,
  data
})
export const api_v1_taskerwallet_updateSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERWALLET_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerwallet_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKERWALLET_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskerwallet_partial_update = data => ({
  type: types.API_V1_TASKERWALLET_PARTIAL_UPDATE,
  data
})
export const api_v1_taskerwallet_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKERWALLET_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerwallet_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKERWALLET_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_taskerwallet_delete = () => ({
  type: types.API_V1_TASKERWALLET_DELETE
})
export const api_v1_taskerwallet_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_TASKERWALLET_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_taskerwallet_deleteFailed = (error, starter) => ({
  type: types.API_V1_TASKERWALLET_DELETE_FAILED,
  error,
  starter
})
export const api_v1_tasklocation_list = () => ({
  type: types.API_V1_TASKLOCATION_LIST
})
export const api_v1_tasklocation_listSucceeded = (response, starter) => ({
  type: types.API_V1_TASKLOCATION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasklocation_listFailed = (error, starter) => ({
  type: types.API_V1_TASKLOCATION_LIST_FAILED,
  error,
  starter
})
export const api_v1_tasklocation_create = data => ({
  type: types.API_V1_TASKLOCATION_CREATE,
  data
})
export const api_v1_tasklocation_createSucceeded = (response, starter) => ({
  type: types.API_V1_TASKLOCATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasklocation_createFailed = (error, starter) => ({
  type: types.API_V1_TASKLOCATION_CREATE_FAILED,
  error,
  starter
})
export const api_v1_tasklocation_read = () => ({
  type: types.API_V1_TASKLOCATION_READ
})
export const api_v1_tasklocation_readSucceeded = (response, starter) => ({
  type: types.API_V1_TASKLOCATION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasklocation_readFailed = (error, starter) => ({
  type: types.API_V1_TASKLOCATION_READ_FAILED,
  error,
  starter
})
export const api_v1_tasklocation_update = data => ({
  type: types.API_V1_TASKLOCATION_UPDATE,
  data
})
export const api_v1_tasklocation_updateSucceeded = (response, starter) => ({
  type: types.API_V1_TASKLOCATION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasklocation_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKLOCATION_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_tasklocation_partial_update = data => ({
  type: types.API_V1_TASKLOCATION_PARTIAL_UPDATE,
  data
})
export const api_v1_tasklocation_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKLOCATION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasklocation_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKLOCATION_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_tasklocation_delete = () => ({
  type: types.API_V1_TASKLOCATION_DELETE
})
export const api_v1_tasklocation_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_TASKLOCATION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasklocation_deleteFailed = (error, starter) => ({
  type: types.API_V1_TASKLOCATION_DELETE_FAILED,
  error,
  starter
})
export const api_v1_tasktransaction_list = () => ({
  type: types.API_V1_TASKTRANSACTION_LIST
})
export const api_v1_tasktransaction_listSucceeded = (response, starter) => ({
  type: types.API_V1_TASKTRANSACTION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasktransaction_listFailed = (error, starter) => ({
  type: types.API_V1_TASKTRANSACTION_LIST_FAILED,
  error,
  starter
})
export const api_v1_tasktransaction_create = data => ({
  type: types.API_V1_TASKTRANSACTION_CREATE,
  data
})
export const api_v1_tasktransaction_createSucceeded = (response, starter) => ({
  type: types.API_V1_TASKTRANSACTION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasktransaction_createFailed = (error, starter) => ({
  type: types.API_V1_TASKTRANSACTION_CREATE_FAILED,
  error,
  starter
})
export const api_v1_tasktransaction_read = () => ({
  type: types.API_V1_TASKTRANSACTION_READ
})
export const api_v1_tasktransaction_readSucceeded = (response, starter) => ({
  type: types.API_V1_TASKTRANSACTION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasktransaction_readFailed = (error, starter) => ({
  type: types.API_V1_TASKTRANSACTION_READ_FAILED,
  error,
  starter
})
export const api_v1_tasktransaction_update = data => ({
  type: types.API_V1_TASKTRANSACTION_UPDATE,
  data
})
export const api_v1_tasktransaction_updateSucceeded = (response, starter) => ({
  type: types.API_V1_TASKTRANSACTION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasktransaction_updateFailed = (error, starter) => ({
  type: types.API_V1_TASKTRANSACTION_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_tasktransaction_partial_update = data => ({
  type: types.API_V1_TASKTRANSACTION_PARTIAL_UPDATE,
  data
})
export const api_v1_tasktransaction_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_TASKTRANSACTION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasktransaction_partial_updateFailed = (
  error,
  starter
) => ({
  type: types.API_V1_TASKTRANSACTION_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_tasktransaction_delete = () => ({
  type: types.API_V1_TASKTRANSACTION_DELETE
})
export const api_v1_tasktransaction_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_TASKTRANSACTION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_tasktransaction_deleteFailed = (error, starter) => ({
  type: types.API_V1_TASKTRANSACTION_DELETE_FAILED,
  error,
  starter
})
export const api_v1_timeslot_list = () => ({ type: types.API_V1_TIMESLOT_LIST })
export const api_v1_timeslot_listSucceeded = (response, starter) => ({
  type: types.API_V1_TIMESLOT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_timeslot_listFailed = (error, starter) => ({
  type: types.API_V1_TIMESLOT_LIST_FAILED,
  error,
  starter
})
export const api_v1_timeslot_create = data => ({
  type: types.API_V1_TIMESLOT_CREATE,
  data
})
export const api_v1_timeslot_createSucceeded = (response, starter) => ({
  type: types.API_V1_TIMESLOT_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_timeslot_createFailed = (error, starter) => ({
  type: types.API_V1_TIMESLOT_CREATE_FAILED,
  error,
  starter
})
export const api_v1_timeslot_read = () => ({ type: types.API_V1_TIMESLOT_READ })
export const api_v1_timeslot_readSucceeded = (response, starter) => ({
  type: types.API_V1_TIMESLOT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_timeslot_readFailed = (error, starter) => ({
  type: types.API_V1_TIMESLOT_READ_FAILED,
  error,
  starter
})
export const api_v1_timeslot_update = data => ({
  type: types.API_V1_TIMESLOT_UPDATE,
  data
})
export const api_v1_timeslot_updateSucceeded = (response, starter) => ({
  type: types.API_V1_TIMESLOT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_timeslot_updateFailed = (error, starter) => ({
  type: types.API_V1_TIMESLOT_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_timeslot_partial_update = data => ({
  type: types.API_V1_TIMESLOT_PARTIAL_UPDATE,
  data
})
export const api_v1_timeslot_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_TIMESLOT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_timeslot_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_TIMESLOT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_timeslot_delete = () => ({
  type: types.API_V1_TIMESLOT_DELETE
})
export const api_v1_timeslot_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_TIMESLOT_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_timeslot_deleteFailed = (error, starter) => ({
  type: types.API_V1_TIMESLOT_DELETE_FAILED,
  error,
  starter
})
export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})
export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_login_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})
export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_listFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error,
  starter
})
export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})
export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})
export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_change_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})
export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})
export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})
export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_createFailed = (error, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})
export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_verify_email_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_readFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error,
  starter
})
export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})
export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error,
  starter
})
export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})
export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_partial_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
