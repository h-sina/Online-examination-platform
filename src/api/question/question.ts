import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetQuestion = '/question/list',
  GetQuestionDetail = '/question',
  DeleteQuestionDetail = '/question/completion/delete',
  AddQuestionDetailF = '/question/add',
  AddQuestionDetail1 = '/question/trueorfalse/add',
  AddQuestionDetail2 = '/question/single/add',
  AddQuestionDetail3 = '/question/multiple/add',
  AddQuestionDetail4 = '/question/completion/add',
  AddQuestionDetail5 = '/question/essay/add',

  UpdateQuestionDetail = '/question/update',
}

/**
 * @description: 获取试题列表
 */
export function getQuestion(params) {
  return defHttp.post({
    url: Api.GetQuestion,
    params,
  });
}

/**
 * @description: 获取试题详情列表
 */
export function getQuestionDetail(id, type) {
  return defHttp.get({
    url: Api.GetQuestionDetail + '/' + id + '/' + type,
  });
}

/**
 * @description: 删除试题
 */
export function deleteQuestionDetail(params) {
  return defHttp.delete({
    url: Api.DeleteQuestionDetail,
    params,
  });
}

/**
 * @description: 修改试题
 */
export function updateQuestionDetail(params) {
  return defHttp.put({
    url: Api.UpdateQuestionDetail,
    params,
  });
}

/**
 * @description: 添加试题第一步
 */
export function addQuestionDetailF(params) {
  return defHttp.get({
    url: Api.AddQuestionDetailF,
    params,
  });
}

/**
 * @description: 添加试题-判断题
 */
export function addQuestionDetail1(params) {
  return defHttp.post({
    url: Api.AddQuestionDetail1,
    params,
  });
}

/**
 * @description: 添加试题-单选择题
 */
export function addQuestionDetail2(params) {
  return defHttp.post({
    url: Api.AddQuestionDetail2,
    params,
  });
}

/**
 * @description: 添加试题-多选择题
 */
export function addQuestionDetail3(params) {
  return defHttp.post({
    url: Api.AddQuestionDetail3,
    params,
  });
}

/**
 * @description: 添加试题-填空题
 */
export function addQuestionDetail4(params) {
  return defHttp.post({
    url: Api.AddQuestionDetail4,
    params,
  });
}

/**
 * @description: 添加试题-论述题
 */
export function addQuestionDetail5(params) {
  return defHttp.post({
    url: Api.AddQuestionDetail5,
    params,
  });
}
