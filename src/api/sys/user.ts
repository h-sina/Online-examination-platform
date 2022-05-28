import { ErrorMessageMode } from '/#/axios';
import { defHttp } from '/@/utils/http/axios';

import {
  GetUserInfoModel,
  LoginParams,
  LoginResultModel,
} from './model/userModel';

enum Api {
  Login = '/user/login',
  Logout = '/user/logout',
  GetUserInfo = '/user/student/',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
  UpdateUserInfo = '/user/student/',

  GetMessage = '/user/notice',
  DelNotice = '/user/notice/remove',
  ReadedNotice = '/user/notice/read',
  GetExamList = '/user/my-exam',

  UpdateAvatar = '/user/uploadAvatar',
  JoinClassByCode = '/user/student/add-clazz',
}

/**
 * @description: 通过课程码加入班级
 */
export function joinClassByCode(params) {
  return defHttp.post({
    url: Api.JoinClassByCode + '/' + params,
  });
}

/**
 * @description: user avatar api
 */
export function updateAvatar() {
  return defHttp.post({
    url: Api.UpdateAvatar,
  });
}

/**
 * @description: 获取信息列表
 */
export function getNotice() {
  return defHttp.get({
    url: Api.GetMessage,
  });
}

/**
 * @description: 删除信息
 */
export function delNotice(params) {
  return defHttp.get({
    url: Api.DelNotice + '/' + params,
  });
}

/**
 * @description: 已阅信息
 */
export function readedNotice(params) {
  return defHttp.get({
    url: Api.ReadedNotice + '/' + params,
  });
}

/**
 * @description: 我的考试
 */
export function getExamList() {
  return defHttp.get({
    url: Api.GetExamList,
  });
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      // url: '/user/student/login',
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
