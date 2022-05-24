import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetExam = '/exam/paper/get',
  GetExams = '/user/my-exam',
  SubmitExam = '/exam/solution/add',
  GetExamByPaperIdAndStuId = '/exam/correct/list',
  SubmitExamByPaperIdAndStuId = '/exam/correct/score',
  DelExam = '/exam/paper/delete',
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

/**
 * @description: 提交试卷
 */
export function submitExam(examId, params) {
  return defHttp.post({
    url: Api.SubmitExam + '/' + examId,
    params,
  });
}

/**
 * @description: 获取试卷
 */
export function getExamByPaperIdAndStuId(examId, stuId) {
  return defHttp.get({
    url: Api.GetExamByPaperIdAndStuId + '/' + examId + '/' + stuId,
  });
}

/**
 * @description: 提交阅卷
 */
export function submitExamByPaperIdAndStuId(examId, stuId) {
  return defHttp.post({
    url: Api.SubmitExamByPaperIdAndStuId + '/' + stuId + '/' + examId,
  });
}

/**
 * @description: 删除试卷
 */
export function delExam(params) {
  return defHttp.post({
    url: Api.DelExam,
    params,
  });
}
