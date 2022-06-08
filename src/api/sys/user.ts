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
  Announcement = '/user/announcement',

  SendEnail = '/user/change-pwd/send',
  VerifyEmail = '/user/change-pwd/verify',
  ChangePass = '/user/change-pwd/change',

  GetAllCourse = '/user/s-admin/all-course',
}

/**
 * @description: 获取所有课程
 */
export function getAllCourse() {
  return defHttp.get({
    url: Api.GetAllCourse,
  });
}

/**
 * @description: 修改密码 发邮箱
 */
export function sendEnail(params) {
  return defHttp.put({
    url: Api.SendEnail + '/' + params,
  });
}

/**
 * @description: 修改密码 验证邮箱
 */
export function verifyEmail(mail, code) {
  return defHttp.put({
    url: Api.VerifyEmail + '/' + mail + '/' + code,
  });
}

/**
 * @description: 修改密码
 */
export function changePass(mail, newPwd) {
  return defHttp.put({
    url: Api.ChangePass + '/' + mail + '/' + newPwd,
  });
}

/**
 * @description: 获取公告
 */
export function announcement() {
  return defHttp.get({
    url: Api.Announcement,
  });
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
