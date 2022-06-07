import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetExam = '/exam/paper/get',
  GetExams = '/user/my-exam',
  SubmitExam = '/exam/solution/add',
  GetExamByPaperIdAndStuId = '/exam/correct/list',
  SubmitExamByPaperIdAndStuId = '/exam/correct/score',
  DelExam = '/exam/paper/delete',
  GetExamsByClassId = '/user/teacher/exam-list',

  GetExamsByTeacher = '/clazz/tea/list',
  GetExamByTeacher = '/user/teacher/exam-list',
  GetStuByTeacher = '/clazz/stu-list',
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
export function submitExamByPaperIdAndStuId(stuId, examId, params) {
  return defHttp.post({
    url: Api.SubmitExamByPaperIdAndStuId + '/' + stuId + '/' + examId,
    params,
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

/**
 * @description: 获取待批改试卷S
 */
export function getExamsByClassId(classId) {
  return defHttp.get({
    url: Api.GetExamsByClassId + '/' + classId,
  });
}

/**
 * @description: 老师阅卷 所有班级（课程）页面
 */
export function getExamsByTeacher() {
  return defHttp.get({
    url: Api.GetExamsByTeacher,
  });
}

/**
 * @description: 老师进入 某班级（课程）阅卷页面
 */
export function getExamByTeacher(params) {
  return defHttp.get({
    url: Api.GetExamByTeacher + '/' + params,
  });
}

/**
 * @description: 老师进入 某次考试阅卷页面
 */
export function GetStuByTeacher(params) {
  return defHttp.get({
    url: Api.GetStuByTeacher + '/' + params,
  });
}
