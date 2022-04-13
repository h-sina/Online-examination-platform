import { defHttp } from '/@/utils/http/axios';

import { GetAccountInfoModel } from './model/accountModel';

enum Api {
  // ACCOUNT_INFO = '/account/getAccountInfo',
  ACCOUNT_INFO = '/user/student/',
  SESSION_TIMEOUT = '/user/sessionTimeout',
  TOKEN_EXPIRED = '/user/tokenExpired',
  UpdateUserInfo = '/user/student/',
  VerificateCode = '/user/invite-code',
  EmailCode = '/user/send-code',
  Register = '/user/verify-code',
}

// Get personal center-basic settings

export const accountInfoApi = () => defHttp.get<GetAccountInfoModel>({ url: Api.ACCOUNT_INFO });

export const sessionTimeoutApi = () => defHttp.post<void>({ url: Api.SESSION_TIMEOUT });

export const tokenExpiredApi = () => defHttp.post<void>({ url: Api.TOKEN_EXPIRED });

export const updateUserInfo = (params: GetAccountInfoModel) =>
  defHttp.put<void>({ url: Api.UpdateUserInfo, params });

/**
 * 验证邀请码 发送邮箱验证码 注册
 */
export const vertificateCode = (params) => {
  return defHttp.get<void>(
    {
      url: Api.VerificateCode + '/' + params,
    },
    {
      errorMessageMode: 'none',
    },
  );
};
export const emailCode = (params, params1) => {
  return defHttp.post<void>(
    {
      url: Api.EmailCode + '/' + params,
      data: { registerStep: params1 },
    },
    {
      errorMessageMode: 'none',
    },
  );
};
export function register(emailCode, email1, userId) {
  return defHttp.post<void>(
    {
      url: Api.Register,
      data: { code: emailCode, email: email1, userId: userId },
    },
    {
      errorMessageMode: 'none',
    },
  );
}
