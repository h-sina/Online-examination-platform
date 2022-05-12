import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetExam = '/exam/paper/get',
  GetExams = '/user/my-exam',
}

/**
 * @description: 获取试卷列表
 */
export function getExams() {
  return defHttp.get({
    url: Api.GetExams,
  });
}

/**
 * @description: 获取试题列表
 */
export function getExam(params) {
  return defHttp.get({
    url: Api.GetExam + '/' + params,
  });
}
