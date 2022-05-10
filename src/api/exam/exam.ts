import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetExam = '/exam/paper/get',
}

/**
 * @description: 获取试题列表
 */
export function GetExam(params) {
  return defHttp.get({
    url: Api.GetExam + '/' + params,
  });
}
