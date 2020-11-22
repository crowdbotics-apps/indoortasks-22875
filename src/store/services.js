import axios from "axios"
const indoorTasksAPI = axios.create({
  baseURL: "https://indoortasks-22875.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_businessphoto_list(action) {
  return indoorTasksAPI.get(`/api/v1/businessphoto/`)
}
function api_v1_businessphoto_create(action) {
  return indoorTasksAPI.post(`/api/v1/businessphoto/`, null, {
    data: action.data
  })
}
function api_v1_businessphoto_read(action) {
  return indoorTasksAPI.get(`/api/v1/businessphoto/${action.id}/`)
}
function api_v1_businessphoto_update(action) {
  return indoorTasksAPI.put(`/api/v1/businessphoto/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_businessphoto_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/businessphoto/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_businessphoto_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/businessphoto/${action.id}/`)
}
function api_v1_category_list(action) {
  return indoorTasksAPI.get(`/api/v1/category/`)
}
function api_v1_category_create(action) {
  return indoorTasksAPI.post(`/api/v1/category/`, null, { data: action.data })
}
function api_v1_category_read(action) {
  return indoorTasksAPI.get(`/api/v1/category/${action.id}/`)
}
function api_v1_category_update(action) {
  return indoorTasksAPI.put(`/api/v1/category/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_category_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/category/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_category_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/category/${action.id}/`)
}
function api_v1_customerlocation_list(action) {
  return indoorTasksAPI.get(`/api/v1/customerlocation/`)
}
function api_v1_customerlocation_create(action) {
  return indoorTasksAPI.post(`/api/v1/customerlocation/`, null, {
    data: action.data
  })
}
function api_v1_customerlocation_read(action) {
  return indoorTasksAPI.get(`/api/v1/customerlocation/${action.id}/`)
}
function api_v1_customerlocation_update(action) {
  return indoorTasksAPI.put(`/api/v1/customerlocation/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customerlocation_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/customerlocation/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customerlocation_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/customerlocation/${action.id}/`)
}
function api_v1_customerprofile_list(action) {
  return indoorTasksAPI.get(`/api/v1/customerprofile/`)
}
function api_v1_customerprofile_create(action) {
  return indoorTasksAPI.post(`/api/v1/customerprofile/`, null, {
    data: action.data
  })
}
function api_v1_customerprofile_read(action) {
  return indoorTasksAPI.get(`/api/v1/customerprofile/${action.id}/`)
}
function api_v1_customerprofile_update(action) {
  return indoorTasksAPI.put(`/api/v1/customerprofile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customerprofile_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/customerprofile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customerprofile_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/customerprofile/${action.id}/`)
}
function api_v1_customerwallet_list(action) {
  return indoorTasksAPI.get(`/api/v1/customerwallet/`)
}
function api_v1_customerwallet_create(action) {
  return indoorTasksAPI.post(`/api/v1/customerwallet/`, null, {
    data: action.data
  })
}
function api_v1_customerwallet_read(action) {
  return indoorTasksAPI.get(`/api/v1/customerwallet/${action.id}/`)
}
function api_v1_customerwallet_update(action) {
  return indoorTasksAPI.put(`/api/v1/customerwallet/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customerwallet_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/customerwallet/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customerwallet_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/customerwallet/${action.id}/`)
}
function api_v1_customtext_list(action) {
  return indoorTasksAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return indoorTasksAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return indoorTasksAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_list(action) {
  return indoorTasksAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return indoorTasksAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return indoorTasksAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_invitecode_list(action) {
  return indoorTasksAPI.get(`/api/v1/invitecode/`)
}
function api_v1_invitecode_create(action) {
  return indoorTasksAPI.post(`/api/v1/invitecode/`, null, { data: action.data })
}
function api_v1_invitecode_read(action) {
  return indoorTasksAPI.get(`/api/v1/invitecode/${action.id}/`)
}
function api_v1_invitecode_update(action) {
  return indoorTasksAPI.put(`/api/v1/invitecode/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_invitecode_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/invitecode/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_invitecode_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/invitecode/${action.id}/`)
}
function api_v1_login_create(action) {
  return indoorTasksAPI.post(`/api/v1/login/`)
}
function api_v1_maplocation_list(action) {
  return indoorTasksAPI.get(`/api/v1/maplocation/`)
}
function api_v1_maplocation_create(action) {
  return indoorTasksAPI.post(`/api/v1/maplocation/`, null, {
    data: action.data
  })
}
function api_v1_maplocation_read(action) {
  return indoorTasksAPI.get(`/api/v1/maplocation/${action.id}/`)
}
function api_v1_maplocation_update(action) {
  return indoorTasksAPI.put(`/api/v1/maplocation/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_maplocation_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/maplocation/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_maplocation_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/maplocation/${action.id}/`)
}
function api_v1_message_list(action) {
  return indoorTasksAPI.get(`/api/v1/message/`)
}
function api_v1_message_create(action) {
  return indoorTasksAPI.post(`/api/v1/message/`, null, { data: action.data })
}
function api_v1_message_read(action) {
  return indoorTasksAPI.get(`/api/v1/message/${action.id}/`)
}
function api_v1_message_update(action) {
  return indoorTasksAPI.put(`/api/v1/message/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_message_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/message/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_message_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/message/${action.id}/`)
}
function api_v1_notification_list(action) {
  return indoorTasksAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(action) {
  return indoorTasksAPI.post(`/api/v1/notification/`, null, {
    data: action.data
  })
}
function api_v1_notification_read(action) {
  return indoorTasksAPI.get(`/api/v1/notification/${action.id}/`)
}
function api_v1_notification_update(action) {
  return indoorTasksAPI.put(`/api/v1/notification/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_notification_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/notification/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_notification_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/notification/${action.id}/`)
}
function api_v1_paymentmethod_list(action) {
  return indoorTasksAPI.get(`/api/v1/paymentmethod/`)
}
function api_v1_paymentmethod_create(action) {
  return indoorTasksAPI.post(`/api/v1/paymentmethod/`, null, {
    data: action.data
  })
}
function api_v1_paymentmethod_read(action) {
  return indoorTasksAPI.get(`/api/v1/paymentmethod/${action.id}/`)
}
function api_v1_paymentmethod_update(action) {
  return indoorTasksAPI.put(`/api/v1/paymentmethod/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_paymentmethod_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/paymentmethod/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_paymentmethod_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/paymentmethod/${action.id}/`)
}
function api_v1_paymenttransaction_list(action) {
  return indoorTasksAPI.get(`/api/v1/paymenttransaction/`)
}
function api_v1_paymenttransaction_create(action) {
  return indoorTasksAPI.post(`/api/v1/paymenttransaction/`, null, {
    data: action.data
  })
}
function api_v1_paymenttransaction_read(action) {
  return indoorTasksAPI.get(`/api/v1/paymenttransaction/${action.id}/`)
}
function api_v1_paymenttransaction_update(action) {
  return indoorTasksAPI.put(`/api/v1/paymenttransaction/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_paymenttransaction_partial_update(action) {
  return indoorTasksAPI.patch(
    `/api/v1/paymenttransaction/${action.id}/`,
    null,
    { data: action.data }
  )
}
function api_v1_paymenttransaction_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/paymenttransaction/${action.id}/`)
}
function api_v1_rating_list(action) {
  return indoorTasksAPI.get(`/api/v1/rating/`)
}
function api_v1_rating_create(action) {
  return indoorTasksAPI.post(`/api/v1/rating/`, null, { data: action.data })
}
function api_v1_rating_read(action) {
  return indoorTasksAPI.get(`/api/v1/rating/${action.id}/`)
}
function api_v1_rating_update(action) {
  return indoorTasksAPI.put(`/api/v1/rating/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_rating_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/rating/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_rating_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/rating/${action.id}/`)
}
function api_v1_signup_create(action) {
  return indoorTasksAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function api_v1_subcategory_list(action) {
  return indoorTasksAPI.get(`/api/v1/subcategory/`)
}
function api_v1_subcategory_create(action) {
  return indoorTasksAPI.post(`/api/v1/subcategory/`, null, {
    data: action.data
  })
}
function api_v1_subcategory_read(action) {
  return indoorTasksAPI.get(`/api/v1/subcategory/${action.id}/`)
}
function api_v1_subcategory_update(action) {
  return indoorTasksAPI.put(`/api/v1/subcategory/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_subcategory_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/subcategory/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_subcategory_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/subcategory/${action.id}/`)
}
function api_v1_task_list(action) {
  return indoorTasksAPI.get(`/api/v1/task/`)
}
function api_v1_task_create(action) {
  return indoorTasksAPI.post(`/api/v1/task/`, null, { data: action.data })
}
function api_v1_task_read(action) {
  return indoorTasksAPI.get(`/api/v1/task/${action.id}/`)
}
function api_v1_task_update(action) {
  return indoorTasksAPI.put(`/api/v1/task/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_task_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/task/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_task_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/task/${action.id}/`)
}
function api_v1_taskeravailability_list(action) {
  return indoorTasksAPI.get(`/api/v1/taskeravailability/`)
}
function api_v1_taskeravailability_create(action) {
  return indoorTasksAPI.post(`/api/v1/taskeravailability/`, null, {
    data: action.data
  })
}
function api_v1_taskeravailability_read(action) {
  return indoorTasksAPI.get(`/api/v1/taskeravailability/${action.id}/`)
}
function api_v1_taskeravailability_update(action) {
  return indoorTasksAPI.put(`/api/v1/taskeravailability/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_taskeravailability_partial_update(action) {
  return indoorTasksAPI.patch(
    `/api/v1/taskeravailability/${action.id}/`,
    null,
    { data: action.data }
  )
}
function api_v1_taskeravailability_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/taskeravailability/${action.id}/`)
}
function api_v1_taskerlocation_list(action) {
  return indoorTasksAPI.get(`/api/v1/taskerlocation/`)
}
function api_v1_taskerlocation_create(action) {
  return indoorTasksAPI.post(`/api/v1/taskerlocation/`, null, {
    data: action.data
  })
}
function api_v1_taskerlocation_read(action) {
  return indoorTasksAPI.get(`/api/v1/taskerlocation/${action.id}/`)
}
function api_v1_taskerlocation_update(action) {
  return indoorTasksAPI.put(`/api/v1/taskerlocation/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_taskerlocation_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/taskerlocation/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_taskerlocation_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/taskerlocation/${action.id}/`)
}
function api_v1_taskerpaymentaccount_list(action) {
  return indoorTasksAPI.get(`/api/v1/taskerpaymentaccount/`)
}
function api_v1_taskerpaymentaccount_create(action) {
  return indoorTasksAPI.post(`/api/v1/taskerpaymentaccount/`, null, {
    data: action.data
  })
}
function api_v1_taskerpaymentaccount_read(action) {
  return indoorTasksAPI.get(`/api/v1/taskerpaymentaccount/${action.id}/`)
}
function api_v1_taskerpaymentaccount_update(action) {
  return indoorTasksAPI.put(
    `/api/v1/taskerpaymentaccount/${action.id}/`,
    null,
    { data: action.data }
  )
}
function api_v1_taskerpaymentaccount_partial_update(action) {
  return indoorTasksAPI.patch(
    `/api/v1/taskerpaymentaccount/${action.id}/`,
    null,
    { data: action.data }
  )
}
function api_v1_taskerpaymentaccount_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/taskerpaymentaccount/${action.id}/`)
}
function api_v1_taskerprofile_list(action) {
  return indoorTasksAPI.get(`/api/v1/taskerprofile/`)
}
function api_v1_taskerprofile_create(action) {
  return indoorTasksAPI.post(`/api/v1/taskerprofile/`, null, {
    data: action.data
  })
}
function api_v1_taskerprofile_read(action) {
  return indoorTasksAPI.get(`/api/v1/taskerprofile/${action.id}/`)
}
function api_v1_taskerprofile_update(action) {
  return indoorTasksAPI.put(`/api/v1/taskerprofile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_taskerprofile_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/taskerprofile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_taskerprofile_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/taskerprofile/${action.id}/`)
}
function api_v1_taskerskill_list(action) {
  return indoorTasksAPI.get(`/api/v1/taskerskill/`)
}
function api_v1_taskerskill_create(action) {
  return indoorTasksAPI.post(`/api/v1/taskerskill/`, null, {
    data: action.data
  })
}
function api_v1_taskerskill_read(action) {
  return indoorTasksAPI.get(`/api/v1/taskerskill/${action.id}/`)
}
function api_v1_taskerskill_update(action) {
  return indoorTasksAPI.put(`/api/v1/taskerskill/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_taskerskill_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/taskerskill/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_taskerskill_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/taskerskill/${action.id}/`)
}
function api_v1_taskerwallet_list(action) {
  return indoorTasksAPI.get(`/api/v1/taskerwallet/`)
}
function api_v1_taskerwallet_create(action) {
  return indoorTasksAPI.post(`/api/v1/taskerwallet/`, null, {
    data: action.data
  })
}
function api_v1_taskerwallet_read(action) {
  return indoorTasksAPI.get(`/api/v1/taskerwallet/${action.id}/`)
}
function api_v1_taskerwallet_update(action) {
  return indoorTasksAPI.put(`/api/v1/taskerwallet/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_taskerwallet_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/taskerwallet/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_taskerwallet_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/taskerwallet/${action.id}/`)
}
function api_v1_tasklocation_list(action) {
  return indoorTasksAPI.get(`/api/v1/tasklocation/`)
}
function api_v1_tasklocation_create(action) {
  return indoorTasksAPI.post(`/api/v1/tasklocation/`, null, {
    data: action.data
  })
}
function api_v1_tasklocation_read(action) {
  return indoorTasksAPI.get(`/api/v1/tasklocation/${action.id}/`)
}
function api_v1_tasklocation_update(action) {
  return indoorTasksAPI.put(`/api/v1/tasklocation/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_tasklocation_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/tasklocation/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_tasklocation_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/tasklocation/${action.id}/`)
}
function api_v1_tasktransaction_list(action) {
  return indoorTasksAPI.get(`/api/v1/tasktransaction/`)
}
function api_v1_tasktransaction_create(action) {
  return indoorTasksAPI.post(`/api/v1/tasktransaction/`, null, {
    data: action.data
  })
}
function api_v1_tasktransaction_read(action) {
  return indoorTasksAPI.get(`/api/v1/tasktransaction/${action.id}/`)
}
function api_v1_tasktransaction_update(action) {
  return indoorTasksAPI.put(`/api/v1/tasktransaction/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_tasktransaction_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/tasktransaction/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_tasktransaction_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/tasktransaction/${action.id}/`)
}
function api_v1_timeslot_list(action) {
  return indoorTasksAPI.get(`/api/v1/timeslot/`)
}
function api_v1_timeslot_create(action) {
  return indoorTasksAPI.post(`/api/v1/timeslot/`, null, { data: action.data })
}
function api_v1_timeslot_read(action) {
  return indoorTasksAPI.get(`/api/v1/timeslot/${action.id}/`)
}
function api_v1_timeslot_update(action) {
  return indoorTasksAPI.put(`/api/v1/timeslot/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_timeslot_partial_update(action) {
  return indoorTasksAPI.patch(`/api/v1/timeslot/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_timeslot_delete(action) {
  return indoorTasksAPI.delete(`/api/v1/timeslot/${action.id}/`)
}
function rest_auth_login_create(action) {
  return indoorTasksAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return indoorTasksAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return indoorTasksAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return indoorTasksAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return indoorTasksAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return indoorTasksAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return indoorTasksAPI.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return indoorTasksAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return indoorTasksAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return indoorTasksAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return indoorTasksAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  api_v1_businessphoto_list,
  api_v1_businessphoto_create,
  api_v1_businessphoto_read,
  api_v1_businessphoto_update,
  api_v1_businessphoto_partial_update,
  api_v1_businessphoto_delete,
  api_v1_category_list,
  api_v1_category_create,
  api_v1_category_read,
  api_v1_category_update,
  api_v1_category_partial_update,
  api_v1_category_delete,
  api_v1_customerlocation_list,
  api_v1_customerlocation_create,
  api_v1_customerlocation_read,
  api_v1_customerlocation_update,
  api_v1_customerlocation_partial_update,
  api_v1_customerlocation_delete,
  api_v1_customerprofile_list,
  api_v1_customerprofile_create,
  api_v1_customerprofile_read,
  api_v1_customerprofile_update,
  api_v1_customerprofile_partial_update,
  api_v1_customerprofile_delete,
  api_v1_customerwallet_list,
  api_v1_customerwallet_create,
  api_v1_customerwallet_read,
  api_v1_customerwallet_update,
  api_v1_customerwallet_partial_update,
  api_v1_customerwallet_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_invitecode_list,
  api_v1_invitecode_create,
  api_v1_invitecode_read,
  api_v1_invitecode_update,
  api_v1_invitecode_partial_update,
  api_v1_invitecode_delete,
  api_v1_login_create,
  api_v1_maplocation_list,
  api_v1_maplocation_create,
  api_v1_maplocation_read,
  api_v1_maplocation_update,
  api_v1_maplocation_partial_update,
  api_v1_maplocation_delete,
  api_v1_message_list,
  api_v1_message_create,
  api_v1_message_read,
  api_v1_message_update,
  api_v1_message_partial_update,
  api_v1_message_delete,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_read,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_delete,
  api_v1_paymentmethod_list,
  api_v1_paymentmethod_create,
  api_v1_paymentmethod_read,
  api_v1_paymentmethod_update,
  api_v1_paymentmethod_partial_update,
  api_v1_paymentmethod_delete,
  api_v1_paymenttransaction_list,
  api_v1_paymenttransaction_create,
  api_v1_paymenttransaction_read,
  api_v1_paymenttransaction_update,
  api_v1_paymenttransaction_partial_update,
  api_v1_paymenttransaction_delete,
  api_v1_rating_list,
  api_v1_rating_create,
  api_v1_rating_read,
  api_v1_rating_update,
  api_v1_rating_partial_update,
  api_v1_rating_delete,
  api_v1_signup_create,
  api_v1_subcategory_list,
  api_v1_subcategory_create,
  api_v1_subcategory_read,
  api_v1_subcategory_update,
  api_v1_subcategory_partial_update,
  api_v1_subcategory_delete,
  api_v1_task_list,
  api_v1_task_create,
  api_v1_task_read,
  api_v1_task_update,
  api_v1_task_partial_update,
  api_v1_task_delete,
  api_v1_taskeravailability_list,
  api_v1_taskeravailability_create,
  api_v1_taskeravailability_read,
  api_v1_taskeravailability_update,
  api_v1_taskeravailability_partial_update,
  api_v1_taskeravailability_delete,
  api_v1_taskerlocation_list,
  api_v1_taskerlocation_create,
  api_v1_taskerlocation_read,
  api_v1_taskerlocation_update,
  api_v1_taskerlocation_partial_update,
  api_v1_taskerlocation_delete,
  api_v1_taskerpaymentaccount_list,
  api_v1_taskerpaymentaccount_create,
  api_v1_taskerpaymentaccount_read,
  api_v1_taskerpaymentaccount_update,
  api_v1_taskerpaymentaccount_partial_update,
  api_v1_taskerpaymentaccount_delete,
  api_v1_taskerprofile_list,
  api_v1_taskerprofile_create,
  api_v1_taskerprofile_read,
  api_v1_taskerprofile_update,
  api_v1_taskerprofile_partial_update,
  api_v1_taskerprofile_delete,
  api_v1_taskerskill_list,
  api_v1_taskerskill_create,
  api_v1_taskerskill_read,
  api_v1_taskerskill_update,
  api_v1_taskerskill_partial_update,
  api_v1_taskerskill_delete,
  api_v1_taskerwallet_list,
  api_v1_taskerwallet_create,
  api_v1_taskerwallet_read,
  api_v1_taskerwallet_update,
  api_v1_taskerwallet_partial_update,
  api_v1_taskerwallet_delete,
  api_v1_tasklocation_list,
  api_v1_tasklocation_create,
  api_v1_tasklocation_read,
  api_v1_tasklocation_update,
  api_v1_tasklocation_partial_update,
  api_v1_tasklocation_delete,
  api_v1_tasktransaction_list,
  api_v1_tasktransaction_create,
  api_v1_tasktransaction_read,
  api_v1_tasktransaction_update,
  api_v1_tasktransaction_partial_update,
  api_v1_tasktransaction_delete,
  api_v1_timeslot_list,
  api_v1_timeslot_create,
  api_v1_timeslot_read,
  api_v1_timeslot_update,
  api_v1_timeslot_partial_update,
  api_v1_timeslot_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
