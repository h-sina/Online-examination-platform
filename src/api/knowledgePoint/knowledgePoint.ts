import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetknowledgeListBysearch = '/question/knowledge/select/kpname',
  GetknowledgeList = '/question/knowledge/list',
  Addknowledge = '/question/knowledge/add',
  Deltknowledge = '/question/knowledge/delete',
  Updateknowledge = '/question/knowledge/update',
  GetknowledgeById = '/question/knowledge/select',
}

/**
 * @description: 知识点模糊查询
 */
export function getknowledgeListBysearch(params) {
  return defHttp.get({
    url: Api.GetknowledgeListBysearch + '/' + params,
  });
}

/**
 * @description: 知识点列表
 */
export function getknowledgeList(params) {
  return defHttp.post({
    url: Api.GetknowledgeList,
    params,
  });
}

/**
 * @description: 新增知识点
 */
export function addknowledge(params) {
  return defHttp.post({
    url: Api.Addknowledge,
    params,
  });
}

/**
 * @description: 删除知识点
 */
export function deltknowledge(knowledgePointId) {
  return defHttp.delete({
    url: Api.Deltknowledge + '/' + knowledgePointId,
  });
}

/**
 * @description: 修改知识点
 */
export function updateknowledge(params) {
  return defHttp.put({
    url: Api.Updateknowledge,
    params,
  });
}

/**
 * @description: 根据ID查询知识点
 */
export function getknowledgeById(params) {
  return defHttp.get({
    url: Api.GetknowledgeById + '/' + params,
  });
}
