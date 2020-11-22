import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* api_v1_businessphoto_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_businessphoto_list, action)
    yield put(actions.api_v1_businessphoto_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_businessphoto_listFailed(err, action))
  }
}
function* api_v1_businessphoto_listWatcher() {
  yield takeEvery(
    types.API_V1_BUSINESSPHOTO_LIST,
    api_v1_businessphoto_listWorker
  )
}
function* api_v1_businessphoto_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_businessphoto_create, action)
    yield put(actions.api_v1_businessphoto_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_businessphoto_createFailed(err, action))
  }
}
function* api_v1_businessphoto_createWatcher() {
  yield takeEvery(
    types.API_V1_BUSINESSPHOTO_CREATE,
    api_v1_businessphoto_createWorker
  )
}
function* api_v1_businessphoto_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_businessphoto_read, action)
    yield put(actions.api_v1_businessphoto_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_businessphoto_readFailed(err, action))
  }
}
function* api_v1_businessphoto_readWatcher() {
  yield takeEvery(
    types.API_V1_BUSINESSPHOTO_READ,
    api_v1_businessphoto_readWorker
  )
}
function* api_v1_businessphoto_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_businessphoto_update, action)
    yield put(actions.api_v1_businessphoto_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_businessphoto_updateFailed(err, action))
  }
}
function* api_v1_businessphoto_updateWatcher() {
  yield takeEvery(
    types.API_V1_BUSINESSPHOTO_UPDATE,
    api_v1_businessphoto_updateWorker
  )
}
function* api_v1_businessphoto_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_businessphoto_partial_update,
      action
    )
    yield put(
      actions.api_v1_businessphoto_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_businessphoto_partial_updateFailed(err, action))
  }
}
function* api_v1_businessphoto_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_BUSINESSPHOTO_PARTIAL_UPDATE,
    api_v1_businessphoto_partial_updateWorker
  )
}
function* api_v1_businessphoto_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_businessphoto_delete, action)
    yield put(actions.api_v1_businessphoto_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_businessphoto_deleteFailed(err, action))
  }
}
function* api_v1_businessphoto_deleteWatcher() {
  yield takeEvery(
    types.API_V1_BUSINESSPHOTO_DELETE,
    api_v1_businessphoto_deleteWorker
  )
}
function* api_v1_category_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_list, action)
    yield put(actions.api_v1_category_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_listFailed(err, action))
  }
}
function* api_v1_category_listWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_LIST, api_v1_category_listWorker)
}
function* api_v1_category_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_create, action)
    yield put(actions.api_v1_category_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_createFailed(err, action))
  }
}
function* api_v1_category_createWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_CREATE, api_v1_category_createWorker)
}
function* api_v1_category_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_read, action)
    yield put(actions.api_v1_category_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_readFailed(err, action))
  }
}
function* api_v1_category_readWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_READ, api_v1_category_readWorker)
}
function* api_v1_category_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_update, action)
    yield put(actions.api_v1_category_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_updateFailed(err, action))
  }
}
function* api_v1_category_updateWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_UPDATE, api_v1_category_updateWorker)
}
function* api_v1_category_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_partial_update, action)
    yield put(actions.api_v1_category_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_partial_updateFailed(err, action))
  }
}
function* api_v1_category_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CATEGORY_PARTIAL_UPDATE,
    api_v1_category_partial_updateWorker
  )
}
function* api_v1_category_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_delete, action)
    yield put(actions.api_v1_category_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_deleteFailed(err, action))
  }
}
function* api_v1_category_deleteWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_DELETE, api_v1_category_deleteWorker)
}
function* api_v1_customerlocation_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerlocation_list, action)
    yield put(actions.api_v1_customerlocation_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerlocation_listFailed(err, action))
  }
}
function* api_v1_customerlocation_listWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERLOCATION_LIST,
    api_v1_customerlocation_listWorker
  )
}
function* api_v1_customerlocation_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerlocation_create, action)
    yield put(actions.api_v1_customerlocation_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerlocation_createFailed(err, action))
  }
}
function* api_v1_customerlocation_createWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERLOCATION_CREATE,
    api_v1_customerlocation_createWorker
  )
}
function* api_v1_customerlocation_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerlocation_read, action)
    yield put(actions.api_v1_customerlocation_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerlocation_readFailed(err, action))
  }
}
function* api_v1_customerlocation_readWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERLOCATION_READ,
    api_v1_customerlocation_readWorker
  )
}
function* api_v1_customerlocation_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerlocation_update, action)
    yield put(actions.api_v1_customerlocation_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerlocation_updateFailed(err, action))
  }
}
function* api_v1_customerlocation_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERLOCATION_UPDATE,
    api_v1_customerlocation_updateWorker
  )
}
function* api_v1_customerlocation_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customerlocation_partial_update,
      action
    )
    yield put(
      actions.api_v1_customerlocation_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_customerlocation_partial_updateFailed(err, action))
  }
}
function* api_v1_customerlocation_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERLOCATION_PARTIAL_UPDATE,
    api_v1_customerlocation_partial_updateWorker
  )
}
function* api_v1_customerlocation_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerlocation_delete, action)
    yield put(actions.api_v1_customerlocation_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerlocation_deleteFailed(err, action))
  }
}
function* api_v1_customerlocation_deleteWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERLOCATION_DELETE,
    api_v1_customerlocation_deleteWorker
  )
}
function* api_v1_customerprofile_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerprofile_list, action)
    yield put(actions.api_v1_customerprofile_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerprofile_listFailed(err, action))
  }
}
function* api_v1_customerprofile_listWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERPROFILE_LIST,
    api_v1_customerprofile_listWorker
  )
}
function* api_v1_customerprofile_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerprofile_create, action)
    yield put(actions.api_v1_customerprofile_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerprofile_createFailed(err, action))
  }
}
function* api_v1_customerprofile_createWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERPROFILE_CREATE,
    api_v1_customerprofile_createWorker
  )
}
function* api_v1_customerprofile_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerprofile_read, action)
    yield put(actions.api_v1_customerprofile_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerprofile_readFailed(err, action))
  }
}
function* api_v1_customerprofile_readWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERPROFILE_READ,
    api_v1_customerprofile_readWorker
  )
}
function* api_v1_customerprofile_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerprofile_update, action)
    yield put(actions.api_v1_customerprofile_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerprofile_updateFailed(err, action))
  }
}
function* api_v1_customerprofile_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERPROFILE_UPDATE,
    api_v1_customerprofile_updateWorker
  )
}
function* api_v1_customerprofile_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customerprofile_partial_update,
      action
    )
    yield put(
      actions.api_v1_customerprofile_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_customerprofile_partial_updateFailed(err, action))
  }
}
function* api_v1_customerprofile_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERPROFILE_PARTIAL_UPDATE,
    api_v1_customerprofile_partial_updateWorker
  )
}
function* api_v1_customerprofile_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerprofile_delete, action)
    yield put(actions.api_v1_customerprofile_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerprofile_deleteFailed(err, action))
  }
}
function* api_v1_customerprofile_deleteWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERPROFILE_DELETE,
    api_v1_customerprofile_deleteWorker
  )
}
function* api_v1_customerwallet_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerwallet_list, action)
    yield put(actions.api_v1_customerwallet_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerwallet_listFailed(err, action))
  }
}
function* api_v1_customerwallet_listWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERWALLET_LIST,
    api_v1_customerwallet_listWorker
  )
}
function* api_v1_customerwallet_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerwallet_create, action)
    yield put(actions.api_v1_customerwallet_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerwallet_createFailed(err, action))
  }
}
function* api_v1_customerwallet_createWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERWALLET_CREATE,
    api_v1_customerwallet_createWorker
  )
}
function* api_v1_customerwallet_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerwallet_read, action)
    yield put(actions.api_v1_customerwallet_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerwallet_readFailed(err, action))
  }
}
function* api_v1_customerwallet_readWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERWALLET_READ,
    api_v1_customerwallet_readWorker
  )
}
function* api_v1_customerwallet_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerwallet_update, action)
    yield put(actions.api_v1_customerwallet_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerwallet_updateFailed(err, action))
  }
}
function* api_v1_customerwallet_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERWALLET_UPDATE,
    api_v1_customerwallet_updateWorker
  )
}
function* api_v1_customerwallet_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customerwallet_partial_update,
      action
    )
    yield put(
      actions.api_v1_customerwallet_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_customerwallet_partial_updateFailed(err, action))
  }
}
function* api_v1_customerwallet_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERWALLET_PARTIAL_UPDATE,
    api_v1_customerwallet_partial_updateWorker
  )
}
function* api_v1_customerwallet_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customerwallet_delete, action)
    yield put(actions.api_v1_customerwallet_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customerwallet_deleteFailed(err, action))
  }
}
function* api_v1_customerwallet_deleteWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMERWALLET_DELETE,
    api_v1_customerwallet_deleteWorker
  )
}
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err, action))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err, action))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err, action))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err, action))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err, action))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err, action))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err, action))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err, action))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_invitecode_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_invitecode_list, action)
    yield put(actions.api_v1_invitecode_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_invitecode_listFailed(err, action))
  }
}
function* api_v1_invitecode_listWatcher() {
  yield takeEvery(types.API_V1_INVITECODE_LIST, api_v1_invitecode_listWorker)
}
function* api_v1_invitecode_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_invitecode_create, action)
    yield put(actions.api_v1_invitecode_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_invitecode_createFailed(err, action))
  }
}
function* api_v1_invitecode_createWatcher() {
  yield takeEvery(
    types.API_V1_INVITECODE_CREATE,
    api_v1_invitecode_createWorker
  )
}
function* api_v1_invitecode_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_invitecode_read, action)
    yield put(actions.api_v1_invitecode_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_invitecode_readFailed(err, action))
  }
}
function* api_v1_invitecode_readWatcher() {
  yield takeEvery(types.API_V1_INVITECODE_READ, api_v1_invitecode_readWorker)
}
function* api_v1_invitecode_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_invitecode_update, action)
    yield put(actions.api_v1_invitecode_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_invitecode_updateFailed(err, action))
  }
}
function* api_v1_invitecode_updateWatcher() {
  yield takeEvery(
    types.API_V1_INVITECODE_UPDATE,
    api_v1_invitecode_updateWorker
  )
}
function* api_v1_invitecode_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_invitecode_partial_update,
      action
    )
    yield put(actions.api_v1_invitecode_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_invitecode_partial_updateFailed(err, action))
  }
}
function* api_v1_invitecode_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_INVITECODE_PARTIAL_UPDATE,
    api_v1_invitecode_partial_updateWorker
  )
}
function* api_v1_invitecode_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_invitecode_delete, action)
    yield put(actions.api_v1_invitecode_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_invitecode_deleteFailed(err, action))
  }
}
function* api_v1_invitecode_deleteWatcher() {
  yield takeEvery(
    types.API_V1_INVITECODE_DELETE,
    api_v1_invitecode_deleteWorker
  )
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err, action))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_maplocation_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_maplocation_list, action)
    yield put(actions.api_v1_maplocation_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_maplocation_listFailed(err, action))
  }
}
function* api_v1_maplocation_listWatcher() {
  yield takeEvery(types.API_V1_MAPLOCATION_LIST, api_v1_maplocation_listWorker)
}
function* api_v1_maplocation_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_maplocation_create, action)
    yield put(actions.api_v1_maplocation_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_maplocation_createFailed(err, action))
  }
}
function* api_v1_maplocation_createWatcher() {
  yield takeEvery(
    types.API_V1_MAPLOCATION_CREATE,
    api_v1_maplocation_createWorker
  )
}
function* api_v1_maplocation_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_maplocation_read, action)
    yield put(actions.api_v1_maplocation_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_maplocation_readFailed(err, action))
  }
}
function* api_v1_maplocation_readWatcher() {
  yield takeEvery(types.API_V1_MAPLOCATION_READ, api_v1_maplocation_readWorker)
}
function* api_v1_maplocation_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_maplocation_update, action)
    yield put(actions.api_v1_maplocation_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_maplocation_updateFailed(err, action))
  }
}
function* api_v1_maplocation_updateWatcher() {
  yield takeEvery(
    types.API_V1_MAPLOCATION_UPDATE,
    api_v1_maplocation_updateWorker
  )
}
function* api_v1_maplocation_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_maplocation_partial_update,
      action
    )
    yield put(
      actions.api_v1_maplocation_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_maplocation_partial_updateFailed(err, action))
  }
}
function* api_v1_maplocation_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MAPLOCATION_PARTIAL_UPDATE,
    api_v1_maplocation_partial_updateWorker
  )
}
function* api_v1_maplocation_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_maplocation_delete, action)
    yield put(actions.api_v1_maplocation_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_maplocation_deleteFailed(err, action))
  }
}
function* api_v1_maplocation_deleteWatcher() {
  yield takeEvery(
    types.API_V1_MAPLOCATION_DELETE,
    api_v1_maplocation_deleteWorker
  )
}
function* api_v1_message_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_list, action)
    yield put(actions.api_v1_message_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_message_listFailed(err, action))
  }
}
function* api_v1_message_listWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_LIST, api_v1_message_listWorker)
}
function* api_v1_message_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_create, action)
    yield put(actions.api_v1_message_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_message_createFailed(err, action))
  }
}
function* api_v1_message_createWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_CREATE, api_v1_message_createWorker)
}
function* api_v1_message_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_read, action)
    yield put(actions.api_v1_message_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_message_readFailed(err, action))
  }
}
function* api_v1_message_readWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_READ, api_v1_message_readWorker)
}
function* api_v1_message_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_update, action)
    yield put(actions.api_v1_message_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_message_updateFailed(err, action))
  }
}
function* api_v1_message_updateWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_UPDATE, api_v1_message_updateWorker)
}
function* api_v1_message_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_partial_update, action)
    yield put(actions.api_v1_message_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_message_partial_updateFailed(err, action))
  }
}
function* api_v1_message_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MESSAGE_PARTIAL_UPDATE,
    api_v1_message_partial_updateWorker
  )
}
function* api_v1_message_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_delete, action)
    yield put(actions.api_v1_message_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_message_deleteFailed(err, action))
  }
}
function* api_v1_message_deleteWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_DELETE, api_v1_message_deleteWorker)
}
function* api_v1_notification_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_notification_list, action)
    yield put(actions.api_v1_notification_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_notification_listFailed(err, action))
  }
}
function* api_v1_notification_listWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_LIST,
    api_v1_notification_listWorker
  )
}
function* api_v1_notification_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_notification_create, action)
    yield put(actions.api_v1_notification_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_notification_createFailed(err, action))
  }
}
function* api_v1_notification_createWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_CREATE,
    api_v1_notification_createWorker
  )
}
function* api_v1_notification_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_notification_read, action)
    yield put(actions.api_v1_notification_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_notification_readFailed(err, action))
  }
}
function* api_v1_notification_readWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_READ,
    api_v1_notification_readWorker
  )
}
function* api_v1_notification_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_notification_update, action)
    yield put(actions.api_v1_notification_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_notification_updateFailed(err, action))
  }
}
function* api_v1_notification_updateWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_UPDATE,
    api_v1_notification_updateWorker
  )
}
function* api_v1_notification_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_notification_partial_update,
      action
    )
    yield put(
      actions.api_v1_notification_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_notification_partial_updateFailed(err, action))
  }
}
function* api_v1_notification_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_PARTIAL_UPDATE,
    api_v1_notification_partial_updateWorker
  )
}
function* api_v1_notification_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_notification_delete, action)
    yield put(actions.api_v1_notification_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_notification_deleteFailed(err, action))
  }
}
function* api_v1_notification_deleteWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_DELETE,
    api_v1_notification_deleteWorker
  )
}
function* api_v1_paymentmethod_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_list, action)
    yield put(actions.api_v1_paymentmethod_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_listFailed(err, action))
  }
}
function* api_v1_paymentmethod_listWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_LIST,
    api_v1_paymentmethod_listWorker
  )
}
function* api_v1_paymentmethod_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_create, action)
    yield put(actions.api_v1_paymentmethod_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_createFailed(err, action))
  }
}
function* api_v1_paymentmethod_createWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_CREATE,
    api_v1_paymentmethod_createWorker
  )
}
function* api_v1_paymentmethod_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_read, action)
    yield put(actions.api_v1_paymentmethod_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_readFailed(err, action))
  }
}
function* api_v1_paymentmethod_readWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_READ,
    api_v1_paymentmethod_readWorker
  )
}
function* api_v1_paymentmethod_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_update, action)
    yield put(actions.api_v1_paymentmethod_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_updateFailed(err, action))
  }
}
function* api_v1_paymentmethod_updateWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_UPDATE,
    api_v1_paymentmethod_updateWorker
  )
}
function* api_v1_paymentmethod_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_paymentmethod_partial_update,
      action
    )
    yield put(
      actions.api_v1_paymentmethod_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_partial_updateFailed(err, action))
  }
}
function* api_v1_paymentmethod_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE,
    api_v1_paymentmethod_partial_updateWorker
  )
}
function* api_v1_paymentmethod_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_delete, action)
    yield put(actions.api_v1_paymentmethod_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_deleteFailed(err, action))
  }
}
function* api_v1_paymentmethod_deleteWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_DELETE,
    api_v1_paymentmethod_deleteWorker
  )
}
function* api_v1_paymenttransaction_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymenttransaction_list, action)
    yield put(actions.api_v1_paymenttransaction_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymenttransaction_listFailed(err, action))
  }
}
function* api_v1_paymenttransaction_listWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTTRANSACTION_LIST,
    api_v1_paymenttransaction_listWorker
  )
}
function* api_v1_paymenttransaction_createWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_paymenttransaction_create,
      action
    )
    yield put(actions.api_v1_paymenttransaction_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymenttransaction_createFailed(err, action))
  }
}
function* api_v1_paymenttransaction_createWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTTRANSACTION_CREATE,
    api_v1_paymenttransaction_createWorker
  )
}
function* api_v1_paymenttransaction_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymenttransaction_read, action)
    yield put(actions.api_v1_paymenttransaction_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymenttransaction_readFailed(err, action))
  }
}
function* api_v1_paymenttransaction_readWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTTRANSACTION_READ,
    api_v1_paymenttransaction_readWorker
  )
}
function* api_v1_paymenttransaction_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_paymenttransaction_update,
      action
    )
    yield put(actions.api_v1_paymenttransaction_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymenttransaction_updateFailed(err, action))
  }
}
function* api_v1_paymenttransaction_updateWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTTRANSACTION_UPDATE,
    api_v1_paymenttransaction_updateWorker
  )
}
function* api_v1_paymenttransaction_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_paymenttransaction_partial_update,
      action
    )
    yield put(
      actions.api_v1_paymenttransaction_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.api_v1_paymenttransaction_partial_updateFailed(err, action)
    )
  }
}
function* api_v1_paymenttransaction_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTTRANSACTION_PARTIAL_UPDATE,
    api_v1_paymenttransaction_partial_updateWorker
  )
}
function* api_v1_paymenttransaction_deleteWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_paymenttransaction_delete,
      action
    )
    yield put(actions.api_v1_paymenttransaction_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymenttransaction_deleteFailed(err, action))
  }
}
function* api_v1_paymenttransaction_deleteWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTTRANSACTION_DELETE,
    api_v1_paymenttransaction_deleteWorker
  )
}
function* api_v1_rating_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_list, action)
    yield put(actions.api_v1_rating_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_rating_listFailed(err, action))
  }
}
function* api_v1_rating_listWatcher() {
  yield takeEvery(types.API_V1_RATING_LIST, api_v1_rating_listWorker)
}
function* api_v1_rating_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_create, action)
    yield put(actions.api_v1_rating_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_rating_createFailed(err, action))
  }
}
function* api_v1_rating_createWatcher() {
  yield takeEvery(types.API_V1_RATING_CREATE, api_v1_rating_createWorker)
}
function* api_v1_rating_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_read, action)
    yield put(actions.api_v1_rating_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_rating_readFailed(err, action))
  }
}
function* api_v1_rating_readWatcher() {
  yield takeEvery(types.API_V1_RATING_READ, api_v1_rating_readWorker)
}
function* api_v1_rating_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_update, action)
    yield put(actions.api_v1_rating_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_rating_updateFailed(err, action))
  }
}
function* api_v1_rating_updateWatcher() {
  yield takeEvery(types.API_V1_RATING_UPDATE, api_v1_rating_updateWorker)
}
function* api_v1_rating_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_partial_update, action)
    yield put(actions.api_v1_rating_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_rating_partial_updateFailed(err, action))
  }
}
function* api_v1_rating_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_RATING_PARTIAL_UPDATE,
    api_v1_rating_partial_updateWorker
  )
}
function* api_v1_rating_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_delete, action)
    yield put(actions.api_v1_rating_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_rating_deleteFailed(err, action))
  }
}
function* api_v1_rating_deleteWatcher() {
  yield takeEvery(types.API_V1_RATING_DELETE, api_v1_rating_deleteWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err, action))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* api_v1_subcategory_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subcategory_list, action)
    yield put(actions.api_v1_subcategory_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subcategory_listFailed(err, action))
  }
}
function* api_v1_subcategory_listWatcher() {
  yield takeEvery(types.API_V1_SUBCATEGORY_LIST, api_v1_subcategory_listWorker)
}
function* api_v1_subcategory_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subcategory_create, action)
    yield put(actions.api_v1_subcategory_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subcategory_createFailed(err, action))
  }
}
function* api_v1_subcategory_createWatcher() {
  yield takeEvery(
    types.API_V1_SUBCATEGORY_CREATE,
    api_v1_subcategory_createWorker
  )
}
function* api_v1_subcategory_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subcategory_read, action)
    yield put(actions.api_v1_subcategory_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subcategory_readFailed(err, action))
  }
}
function* api_v1_subcategory_readWatcher() {
  yield takeEvery(types.API_V1_SUBCATEGORY_READ, api_v1_subcategory_readWorker)
}
function* api_v1_subcategory_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subcategory_update, action)
    yield put(actions.api_v1_subcategory_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subcategory_updateFailed(err, action))
  }
}
function* api_v1_subcategory_updateWatcher() {
  yield takeEvery(
    types.API_V1_SUBCATEGORY_UPDATE,
    api_v1_subcategory_updateWorker
  )
}
function* api_v1_subcategory_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_subcategory_partial_update,
      action
    )
    yield put(
      actions.api_v1_subcategory_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_subcategory_partial_updateFailed(err, action))
  }
}
function* api_v1_subcategory_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_SUBCATEGORY_PARTIAL_UPDATE,
    api_v1_subcategory_partial_updateWorker
  )
}
function* api_v1_subcategory_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subcategory_delete, action)
    yield put(actions.api_v1_subcategory_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subcategory_deleteFailed(err, action))
  }
}
function* api_v1_subcategory_deleteWatcher() {
  yield takeEvery(
    types.API_V1_SUBCATEGORY_DELETE,
    api_v1_subcategory_deleteWorker
  )
}
function* api_v1_task_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_task_list, action)
    yield put(actions.api_v1_task_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_task_listFailed(err, action))
  }
}
function* api_v1_task_listWatcher() {
  yield takeEvery(types.API_V1_TASK_LIST, api_v1_task_listWorker)
}
function* api_v1_task_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_task_create, action)
    yield put(actions.api_v1_task_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_task_createFailed(err, action))
  }
}
function* api_v1_task_createWatcher() {
  yield takeEvery(types.API_V1_TASK_CREATE, api_v1_task_createWorker)
}
function* api_v1_task_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_task_read, action)
    yield put(actions.api_v1_task_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_task_readFailed(err, action))
  }
}
function* api_v1_task_readWatcher() {
  yield takeEvery(types.API_V1_TASK_READ, api_v1_task_readWorker)
}
function* api_v1_task_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_task_update, action)
    yield put(actions.api_v1_task_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_task_updateFailed(err, action))
  }
}
function* api_v1_task_updateWatcher() {
  yield takeEvery(types.API_V1_TASK_UPDATE, api_v1_task_updateWorker)
}
function* api_v1_task_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_task_partial_update, action)
    yield put(actions.api_v1_task_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_task_partial_updateFailed(err, action))
  }
}
function* api_v1_task_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASK_PARTIAL_UPDATE,
    api_v1_task_partial_updateWorker
  )
}
function* api_v1_task_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_task_delete, action)
    yield put(actions.api_v1_task_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_task_deleteFailed(err, action))
  }
}
function* api_v1_task_deleteWatcher() {
  yield takeEvery(types.API_V1_TASK_DELETE, api_v1_task_deleteWorker)
}
function* api_v1_taskeravailability_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskeravailability_list, action)
    yield put(actions.api_v1_taskeravailability_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskeravailability_listFailed(err, action))
  }
}
function* api_v1_taskeravailability_listWatcher() {
  yield takeEvery(
    types.API_V1_TASKERAVAILABILITY_LIST,
    api_v1_taskeravailability_listWorker
  )
}
function* api_v1_taskeravailability_createWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskeravailability_create,
      action
    )
    yield put(actions.api_v1_taskeravailability_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskeravailability_createFailed(err, action))
  }
}
function* api_v1_taskeravailability_createWatcher() {
  yield takeEvery(
    types.API_V1_TASKERAVAILABILITY_CREATE,
    api_v1_taskeravailability_createWorker
  )
}
function* api_v1_taskeravailability_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskeravailability_read, action)
    yield put(actions.api_v1_taskeravailability_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskeravailability_readFailed(err, action))
  }
}
function* api_v1_taskeravailability_readWatcher() {
  yield takeEvery(
    types.API_V1_TASKERAVAILABILITY_READ,
    api_v1_taskeravailability_readWorker
  )
}
function* api_v1_taskeravailability_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskeravailability_update,
      action
    )
    yield put(actions.api_v1_taskeravailability_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskeravailability_updateFailed(err, action))
  }
}
function* api_v1_taskeravailability_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERAVAILABILITY_UPDATE,
    api_v1_taskeravailability_updateWorker
  )
}
function* api_v1_taskeravailability_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskeravailability_partial_update,
      action
    )
    yield put(
      actions.api_v1_taskeravailability_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.api_v1_taskeravailability_partial_updateFailed(err, action)
    )
  }
}
function* api_v1_taskeravailability_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERAVAILABILITY_PARTIAL_UPDATE,
    api_v1_taskeravailability_partial_updateWorker
  )
}
function* api_v1_taskeravailability_deleteWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskeravailability_delete,
      action
    )
    yield put(actions.api_v1_taskeravailability_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskeravailability_deleteFailed(err, action))
  }
}
function* api_v1_taskeravailability_deleteWatcher() {
  yield takeEvery(
    types.API_V1_TASKERAVAILABILITY_DELETE,
    api_v1_taskeravailability_deleteWorker
  )
}
function* api_v1_taskerlocation_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerlocation_list, action)
    yield put(actions.api_v1_taskerlocation_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerlocation_listFailed(err, action))
  }
}
function* api_v1_taskerlocation_listWatcher() {
  yield takeEvery(
    types.API_V1_TASKERLOCATION_LIST,
    api_v1_taskerlocation_listWorker
  )
}
function* api_v1_taskerlocation_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerlocation_create, action)
    yield put(actions.api_v1_taskerlocation_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerlocation_createFailed(err, action))
  }
}
function* api_v1_taskerlocation_createWatcher() {
  yield takeEvery(
    types.API_V1_TASKERLOCATION_CREATE,
    api_v1_taskerlocation_createWorker
  )
}
function* api_v1_taskerlocation_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerlocation_read, action)
    yield put(actions.api_v1_taskerlocation_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerlocation_readFailed(err, action))
  }
}
function* api_v1_taskerlocation_readWatcher() {
  yield takeEvery(
    types.API_V1_TASKERLOCATION_READ,
    api_v1_taskerlocation_readWorker
  )
}
function* api_v1_taskerlocation_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerlocation_update, action)
    yield put(actions.api_v1_taskerlocation_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerlocation_updateFailed(err, action))
  }
}
function* api_v1_taskerlocation_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERLOCATION_UPDATE,
    api_v1_taskerlocation_updateWorker
  )
}
function* api_v1_taskerlocation_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskerlocation_partial_update,
      action
    )
    yield put(
      actions.api_v1_taskerlocation_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_taskerlocation_partial_updateFailed(err, action))
  }
}
function* api_v1_taskerlocation_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERLOCATION_PARTIAL_UPDATE,
    api_v1_taskerlocation_partial_updateWorker
  )
}
function* api_v1_taskerlocation_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerlocation_delete, action)
    yield put(actions.api_v1_taskerlocation_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerlocation_deleteFailed(err, action))
  }
}
function* api_v1_taskerlocation_deleteWatcher() {
  yield takeEvery(
    types.API_V1_TASKERLOCATION_DELETE,
    api_v1_taskerlocation_deleteWorker
  )
}
function* api_v1_taskerpaymentaccount_listWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskerpaymentaccount_list,
      action
    )
    yield put(actions.api_v1_taskerpaymentaccount_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerpaymentaccount_listFailed(err, action))
  }
}
function* api_v1_taskerpaymentaccount_listWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPAYMENTACCOUNT_LIST,
    api_v1_taskerpaymentaccount_listWorker
  )
}
function* api_v1_taskerpaymentaccount_createWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskerpaymentaccount_create,
      action
    )
    yield put(
      actions.api_v1_taskerpaymentaccount_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_taskerpaymentaccount_createFailed(err, action))
  }
}
function* api_v1_taskerpaymentaccount_createWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPAYMENTACCOUNT_CREATE,
    api_v1_taskerpaymentaccount_createWorker
  )
}
function* api_v1_taskerpaymentaccount_readWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskerpaymentaccount_read,
      action
    )
    yield put(actions.api_v1_taskerpaymentaccount_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerpaymentaccount_readFailed(err, action))
  }
}
function* api_v1_taskerpaymentaccount_readWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPAYMENTACCOUNT_READ,
    api_v1_taskerpaymentaccount_readWorker
  )
}
function* api_v1_taskerpaymentaccount_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskerpaymentaccount_update,
      action
    )
    yield put(
      actions.api_v1_taskerpaymentaccount_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_taskerpaymentaccount_updateFailed(err, action))
  }
}
function* api_v1_taskerpaymentaccount_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPAYMENTACCOUNT_UPDATE,
    api_v1_taskerpaymentaccount_updateWorker
  )
}
function* api_v1_taskerpaymentaccount_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskerpaymentaccount_partial_update,
      action
    )
    yield put(
      actions.api_v1_taskerpaymentaccount_partial_updateSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.api_v1_taskerpaymentaccount_partial_updateFailed(err, action)
    )
  }
}
function* api_v1_taskerpaymentaccount_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPAYMENTACCOUNT_PARTIAL_UPDATE,
    api_v1_taskerpaymentaccount_partial_updateWorker
  )
}
function* api_v1_taskerpaymentaccount_deleteWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskerpaymentaccount_delete,
      action
    )
    yield put(
      actions.api_v1_taskerpaymentaccount_deleteSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_taskerpaymentaccount_deleteFailed(err, action))
  }
}
function* api_v1_taskerpaymentaccount_deleteWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPAYMENTACCOUNT_DELETE,
    api_v1_taskerpaymentaccount_deleteWorker
  )
}
function* api_v1_taskerprofile_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerprofile_list, action)
    yield put(actions.api_v1_taskerprofile_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerprofile_listFailed(err, action))
  }
}
function* api_v1_taskerprofile_listWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPROFILE_LIST,
    api_v1_taskerprofile_listWorker
  )
}
function* api_v1_taskerprofile_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerprofile_create, action)
    yield put(actions.api_v1_taskerprofile_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerprofile_createFailed(err, action))
  }
}
function* api_v1_taskerprofile_createWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPROFILE_CREATE,
    api_v1_taskerprofile_createWorker
  )
}
function* api_v1_taskerprofile_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerprofile_read, action)
    yield put(actions.api_v1_taskerprofile_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerprofile_readFailed(err, action))
  }
}
function* api_v1_taskerprofile_readWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPROFILE_READ,
    api_v1_taskerprofile_readWorker
  )
}
function* api_v1_taskerprofile_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerprofile_update, action)
    yield put(actions.api_v1_taskerprofile_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerprofile_updateFailed(err, action))
  }
}
function* api_v1_taskerprofile_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPROFILE_UPDATE,
    api_v1_taskerprofile_updateWorker
  )
}
function* api_v1_taskerprofile_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskerprofile_partial_update,
      action
    )
    yield put(
      actions.api_v1_taskerprofile_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_taskerprofile_partial_updateFailed(err, action))
  }
}
function* api_v1_taskerprofile_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPROFILE_PARTIAL_UPDATE,
    api_v1_taskerprofile_partial_updateWorker
  )
}
function* api_v1_taskerprofile_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerprofile_delete, action)
    yield put(actions.api_v1_taskerprofile_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerprofile_deleteFailed(err, action))
  }
}
function* api_v1_taskerprofile_deleteWatcher() {
  yield takeEvery(
    types.API_V1_TASKERPROFILE_DELETE,
    api_v1_taskerprofile_deleteWorker
  )
}
function* api_v1_taskerskill_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerskill_list, action)
    yield put(actions.api_v1_taskerskill_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerskill_listFailed(err, action))
  }
}
function* api_v1_taskerskill_listWatcher() {
  yield takeEvery(types.API_V1_TASKERSKILL_LIST, api_v1_taskerskill_listWorker)
}
function* api_v1_taskerskill_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerskill_create, action)
    yield put(actions.api_v1_taskerskill_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerskill_createFailed(err, action))
  }
}
function* api_v1_taskerskill_createWatcher() {
  yield takeEvery(
    types.API_V1_TASKERSKILL_CREATE,
    api_v1_taskerskill_createWorker
  )
}
function* api_v1_taskerskill_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerskill_read, action)
    yield put(actions.api_v1_taskerskill_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerskill_readFailed(err, action))
  }
}
function* api_v1_taskerskill_readWatcher() {
  yield takeEvery(types.API_V1_TASKERSKILL_READ, api_v1_taskerskill_readWorker)
}
function* api_v1_taskerskill_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerskill_update, action)
    yield put(actions.api_v1_taskerskill_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerskill_updateFailed(err, action))
  }
}
function* api_v1_taskerskill_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERSKILL_UPDATE,
    api_v1_taskerskill_updateWorker
  )
}
function* api_v1_taskerskill_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskerskill_partial_update,
      action
    )
    yield put(
      actions.api_v1_taskerskill_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_taskerskill_partial_updateFailed(err, action))
  }
}
function* api_v1_taskerskill_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERSKILL_PARTIAL_UPDATE,
    api_v1_taskerskill_partial_updateWorker
  )
}
function* api_v1_taskerskill_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerskill_delete, action)
    yield put(actions.api_v1_taskerskill_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerskill_deleteFailed(err, action))
  }
}
function* api_v1_taskerskill_deleteWatcher() {
  yield takeEvery(
    types.API_V1_TASKERSKILL_DELETE,
    api_v1_taskerskill_deleteWorker
  )
}
function* api_v1_taskerwallet_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerwallet_list, action)
    yield put(actions.api_v1_taskerwallet_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerwallet_listFailed(err, action))
  }
}
function* api_v1_taskerwallet_listWatcher() {
  yield takeEvery(
    types.API_V1_TASKERWALLET_LIST,
    api_v1_taskerwallet_listWorker
  )
}
function* api_v1_taskerwallet_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerwallet_create, action)
    yield put(actions.api_v1_taskerwallet_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerwallet_createFailed(err, action))
  }
}
function* api_v1_taskerwallet_createWatcher() {
  yield takeEvery(
    types.API_V1_TASKERWALLET_CREATE,
    api_v1_taskerwallet_createWorker
  )
}
function* api_v1_taskerwallet_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerwallet_read, action)
    yield put(actions.api_v1_taskerwallet_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerwallet_readFailed(err, action))
  }
}
function* api_v1_taskerwallet_readWatcher() {
  yield takeEvery(
    types.API_V1_TASKERWALLET_READ,
    api_v1_taskerwallet_readWorker
  )
}
function* api_v1_taskerwallet_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerwallet_update, action)
    yield put(actions.api_v1_taskerwallet_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerwallet_updateFailed(err, action))
  }
}
function* api_v1_taskerwallet_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERWALLET_UPDATE,
    api_v1_taskerwallet_updateWorker
  )
}
function* api_v1_taskerwallet_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_taskerwallet_partial_update,
      action
    )
    yield put(
      actions.api_v1_taskerwallet_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_taskerwallet_partial_updateFailed(err, action))
  }
}
function* api_v1_taskerwallet_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKERWALLET_PARTIAL_UPDATE,
    api_v1_taskerwallet_partial_updateWorker
  )
}
function* api_v1_taskerwallet_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_taskerwallet_delete, action)
    yield put(actions.api_v1_taskerwallet_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_taskerwallet_deleteFailed(err, action))
  }
}
function* api_v1_taskerwallet_deleteWatcher() {
  yield takeEvery(
    types.API_V1_TASKERWALLET_DELETE,
    api_v1_taskerwallet_deleteWorker
  )
}
function* api_v1_tasklocation_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_tasklocation_list, action)
    yield put(actions.api_v1_tasklocation_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_tasklocation_listFailed(err, action))
  }
}
function* api_v1_tasklocation_listWatcher() {
  yield takeEvery(
    types.API_V1_TASKLOCATION_LIST,
    api_v1_tasklocation_listWorker
  )
}
function* api_v1_tasklocation_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_tasklocation_create, action)
    yield put(actions.api_v1_tasklocation_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_tasklocation_createFailed(err, action))
  }
}
function* api_v1_tasklocation_createWatcher() {
  yield takeEvery(
    types.API_V1_TASKLOCATION_CREATE,
    api_v1_tasklocation_createWorker
  )
}
function* api_v1_tasklocation_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_tasklocation_read, action)
    yield put(actions.api_v1_tasklocation_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_tasklocation_readFailed(err, action))
  }
}
function* api_v1_tasklocation_readWatcher() {
  yield takeEvery(
    types.API_V1_TASKLOCATION_READ,
    api_v1_tasklocation_readWorker
  )
}
function* api_v1_tasklocation_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_tasklocation_update, action)
    yield put(actions.api_v1_tasklocation_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_tasklocation_updateFailed(err, action))
  }
}
function* api_v1_tasklocation_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKLOCATION_UPDATE,
    api_v1_tasklocation_updateWorker
  )
}
function* api_v1_tasklocation_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_tasklocation_partial_update,
      action
    )
    yield put(
      actions.api_v1_tasklocation_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_tasklocation_partial_updateFailed(err, action))
  }
}
function* api_v1_tasklocation_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKLOCATION_PARTIAL_UPDATE,
    api_v1_tasklocation_partial_updateWorker
  )
}
function* api_v1_tasklocation_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_tasklocation_delete, action)
    yield put(actions.api_v1_tasklocation_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_tasklocation_deleteFailed(err, action))
  }
}
function* api_v1_tasklocation_deleteWatcher() {
  yield takeEvery(
    types.API_V1_TASKLOCATION_DELETE,
    api_v1_tasklocation_deleteWorker
  )
}
function* api_v1_tasktransaction_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_tasktransaction_list, action)
    yield put(actions.api_v1_tasktransaction_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_tasktransaction_listFailed(err, action))
  }
}
function* api_v1_tasktransaction_listWatcher() {
  yield takeEvery(
    types.API_V1_TASKTRANSACTION_LIST,
    api_v1_tasktransaction_listWorker
  )
}
function* api_v1_tasktransaction_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_tasktransaction_create, action)
    yield put(actions.api_v1_tasktransaction_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_tasktransaction_createFailed(err, action))
  }
}
function* api_v1_tasktransaction_createWatcher() {
  yield takeEvery(
    types.API_V1_TASKTRANSACTION_CREATE,
    api_v1_tasktransaction_createWorker
  )
}
function* api_v1_tasktransaction_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_tasktransaction_read, action)
    yield put(actions.api_v1_tasktransaction_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_tasktransaction_readFailed(err, action))
  }
}
function* api_v1_tasktransaction_readWatcher() {
  yield takeEvery(
    types.API_V1_TASKTRANSACTION_READ,
    api_v1_tasktransaction_readWorker
  )
}
function* api_v1_tasktransaction_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_tasktransaction_update, action)
    yield put(actions.api_v1_tasktransaction_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_tasktransaction_updateFailed(err, action))
  }
}
function* api_v1_tasktransaction_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKTRANSACTION_UPDATE,
    api_v1_tasktransaction_updateWorker
  )
}
function* api_v1_tasktransaction_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_tasktransaction_partial_update,
      action
    )
    yield put(
      actions.api_v1_tasktransaction_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_tasktransaction_partial_updateFailed(err, action))
  }
}
function* api_v1_tasktransaction_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_TASKTRANSACTION_PARTIAL_UPDATE,
    api_v1_tasktransaction_partial_updateWorker
  )
}
function* api_v1_tasktransaction_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_tasktransaction_delete, action)
    yield put(actions.api_v1_tasktransaction_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_tasktransaction_deleteFailed(err, action))
  }
}
function* api_v1_tasktransaction_deleteWatcher() {
  yield takeEvery(
    types.API_V1_TASKTRANSACTION_DELETE,
    api_v1_tasktransaction_deleteWorker
  )
}
function* api_v1_timeslot_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_timeslot_list, action)
    yield put(actions.api_v1_timeslot_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_timeslot_listFailed(err, action))
  }
}
function* api_v1_timeslot_listWatcher() {
  yield takeEvery(types.API_V1_TIMESLOT_LIST, api_v1_timeslot_listWorker)
}
function* api_v1_timeslot_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_timeslot_create, action)
    yield put(actions.api_v1_timeslot_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_timeslot_createFailed(err, action))
  }
}
function* api_v1_timeslot_createWatcher() {
  yield takeEvery(types.API_V1_TIMESLOT_CREATE, api_v1_timeslot_createWorker)
}
function* api_v1_timeslot_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_timeslot_read, action)
    yield put(actions.api_v1_timeslot_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_timeslot_readFailed(err, action))
  }
}
function* api_v1_timeslot_readWatcher() {
  yield takeEvery(types.API_V1_TIMESLOT_READ, api_v1_timeslot_readWorker)
}
function* api_v1_timeslot_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_timeslot_update, action)
    yield put(actions.api_v1_timeslot_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_timeslot_updateFailed(err, action))
  }
}
function* api_v1_timeslot_updateWatcher() {
  yield takeEvery(types.API_V1_TIMESLOT_UPDATE, api_v1_timeslot_updateWorker)
}
function* api_v1_timeslot_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_timeslot_partial_update, action)
    yield put(actions.api_v1_timeslot_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_timeslot_partial_updateFailed(err, action))
  }
}
function* api_v1_timeslot_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_TIMESLOT_PARTIAL_UPDATE,
    api_v1_timeslot_partial_updateWorker
  )
}
function* api_v1_timeslot_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_timeslot_delete, action)
    yield put(actions.api_v1_timeslot_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_timeslot_deleteFailed(err, action))
  }
}
function* api_v1_timeslot_deleteWatcher() {
  yield takeEvery(types.API_V1_TIMESLOT_DELETE, api_v1_timeslot_deleteWorker)
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err, action))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err, action))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err, action))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err, action))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err, action))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(
      actions.rest_auth_password_reset_confirm_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.rest_auth_password_reset_confirm_createFailed(err, action)
    )
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err, action))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.rest_auth_registration_verify_email_createFailed(err, action)
    )
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err, action))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err, action))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err, action))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_businessphoto_listWatcher,
    api_v1_businessphoto_createWatcher,
    api_v1_businessphoto_readWatcher,
    api_v1_businessphoto_updateWatcher,
    api_v1_businessphoto_partial_updateWatcher,
    api_v1_businessphoto_deleteWatcher,
    api_v1_category_listWatcher,
    api_v1_category_createWatcher,
    api_v1_category_readWatcher,
    api_v1_category_updateWatcher,
    api_v1_category_partial_updateWatcher,
    api_v1_category_deleteWatcher,
    api_v1_customerlocation_listWatcher,
    api_v1_customerlocation_createWatcher,
    api_v1_customerlocation_readWatcher,
    api_v1_customerlocation_updateWatcher,
    api_v1_customerlocation_partial_updateWatcher,
    api_v1_customerlocation_deleteWatcher,
    api_v1_customerprofile_listWatcher,
    api_v1_customerprofile_createWatcher,
    api_v1_customerprofile_readWatcher,
    api_v1_customerprofile_updateWatcher,
    api_v1_customerprofile_partial_updateWatcher,
    api_v1_customerprofile_deleteWatcher,
    api_v1_customerwallet_listWatcher,
    api_v1_customerwallet_createWatcher,
    api_v1_customerwallet_readWatcher,
    api_v1_customerwallet_updateWatcher,
    api_v1_customerwallet_partial_updateWatcher,
    api_v1_customerwallet_deleteWatcher,
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_invitecode_listWatcher,
    api_v1_invitecode_createWatcher,
    api_v1_invitecode_readWatcher,
    api_v1_invitecode_updateWatcher,
    api_v1_invitecode_partial_updateWatcher,
    api_v1_invitecode_deleteWatcher,
    api_v1_login_createWatcher,
    api_v1_maplocation_listWatcher,
    api_v1_maplocation_createWatcher,
    api_v1_maplocation_readWatcher,
    api_v1_maplocation_updateWatcher,
    api_v1_maplocation_partial_updateWatcher,
    api_v1_maplocation_deleteWatcher,
    api_v1_message_listWatcher,
    api_v1_message_createWatcher,
    api_v1_message_readWatcher,
    api_v1_message_updateWatcher,
    api_v1_message_partial_updateWatcher,
    api_v1_message_deleteWatcher,
    api_v1_notification_listWatcher,
    api_v1_notification_createWatcher,
    api_v1_notification_readWatcher,
    api_v1_notification_updateWatcher,
    api_v1_notification_partial_updateWatcher,
    api_v1_notification_deleteWatcher,
    api_v1_paymentmethod_listWatcher,
    api_v1_paymentmethod_createWatcher,
    api_v1_paymentmethod_readWatcher,
    api_v1_paymentmethod_updateWatcher,
    api_v1_paymentmethod_partial_updateWatcher,
    api_v1_paymentmethod_deleteWatcher,
    api_v1_paymenttransaction_listWatcher,
    api_v1_paymenttransaction_createWatcher,
    api_v1_paymenttransaction_readWatcher,
    api_v1_paymenttransaction_updateWatcher,
    api_v1_paymenttransaction_partial_updateWatcher,
    api_v1_paymenttransaction_deleteWatcher,
    api_v1_rating_listWatcher,
    api_v1_rating_createWatcher,
    api_v1_rating_readWatcher,
    api_v1_rating_updateWatcher,
    api_v1_rating_partial_updateWatcher,
    api_v1_rating_deleteWatcher,
    api_v1_signup_createWatcher,
    api_v1_subcategory_listWatcher,
    api_v1_subcategory_createWatcher,
    api_v1_subcategory_readWatcher,
    api_v1_subcategory_updateWatcher,
    api_v1_subcategory_partial_updateWatcher,
    api_v1_subcategory_deleteWatcher,
    api_v1_task_listWatcher,
    api_v1_task_createWatcher,
    api_v1_task_readWatcher,
    api_v1_task_updateWatcher,
    api_v1_task_partial_updateWatcher,
    api_v1_task_deleteWatcher,
    api_v1_taskeravailability_listWatcher,
    api_v1_taskeravailability_createWatcher,
    api_v1_taskeravailability_readWatcher,
    api_v1_taskeravailability_updateWatcher,
    api_v1_taskeravailability_partial_updateWatcher,
    api_v1_taskeravailability_deleteWatcher,
    api_v1_taskerlocation_listWatcher,
    api_v1_taskerlocation_createWatcher,
    api_v1_taskerlocation_readWatcher,
    api_v1_taskerlocation_updateWatcher,
    api_v1_taskerlocation_partial_updateWatcher,
    api_v1_taskerlocation_deleteWatcher,
    api_v1_taskerpaymentaccount_listWatcher,
    api_v1_taskerpaymentaccount_createWatcher,
    api_v1_taskerpaymentaccount_readWatcher,
    api_v1_taskerpaymentaccount_updateWatcher,
    api_v1_taskerpaymentaccount_partial_updateWatcher,
    api_v1_taskerpaymentaccount_deleteWatcher,
    api_v1_taskerprofile_listWatcher,
    api_v1_taskerprofile_createWatcher,
    api_v1_taskerprofile_readWatcher,
    api_v1_taskerprofile_updateWatcher,
    api_v1_taskerprofile_partial_updateWatcher,
    api_v1_taskerprofile_deleteWatcher,
    api_v1_taskerskill_listWatcher,
    api_v1_taskerskill_createWatcher,
    api_v1_taskerskill_readWatcher,
    api_v1_taskerskill_updateWatcher,
    api_v1_taskerskill_partial_updateWatcher,
    api_v1_taskerskill_deleteWatcher,
    api_v1_taskerwallet_listWatcher,
    api_v1_taskerwallet_createWatcher,
    api_v1_taskerwallet_readWatcher,
    api_v1_taskerwallet_updateWatcher,
    api_v1_taskerwallet_partial_updateWatcher,
    api_v1_taskerwallet_deleteWatcher,
    api_v1_tasklocation_listWatcher,
    api_v1_tasklocation_createWatcher,
    api_v1_tasklocation_readWatcher,
    api_v1_tasklocation_updateWatcher,
    api_v1_tasklocation_partial_updateWatcher,
    api_v1_tasklocation_deleteWatcher,
    api_v1_tasktransaction_listWatcher,
    api_v1_tasktransaction_createWatcher,
    api_v1_tasktransaction_readWatcher,
    api_v1_tasktransaction_updateWatcher,
    api_v1_tasktransaction_partial_updateWatcher,
    api_v1_tasktransaction_deleteWatcher,
    api_v1_timeslot_listWatcher,
    api_v1_timeslot_createWatcher,
    api_v1_timeslot_readWatcher,
    api_v1_timeslot_updateWatcher,
    api_v1_timeslot_partial_updateWatcher,
    api_v1_timeslot_deleteWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
