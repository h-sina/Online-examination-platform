import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetClassIndex = '/clazz/info',
  GetClassList = '/clazz/list',
  GetStudentList = '/clazz/stu-list',
  GetExamList = '/clazz/my-exam',
  DelStu = '/clazz/remove-stu',
}

/**
 * @description: 移除学生
 */
export function delStu(clazzId, stuId) {
  return defHttp.delete({
    url: Api.DelStu + '/' + clazzId + '/' + stuId,
  });
}

/**
 * @description: 获取班级首页信息
 */
export function getClassIndex(params) {
  return defHttp.get({
    url: Api.GetClassIndex + '/' + params,
  });
}

/**
 * @description: 获取用户的班级列表
 */
export function getClassList() {
  return defHttp.get({
    url: Api.GetClassList,
  });
}

/**
 * @description: 获取学生列表
 */
export function getStudentList(params) {
  return defHttp.get({
    url: Api.GetStudentList + '/' + params,
  });
}

/**
 * @description: 获取班级的考试信息
 */
export function getExamList(params) {
  return defHttp.get({
    url: Api.GetExamList + '/' + params,
  });
}
