import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetCollection = '/question/warehouse', // /{pageNum}/{pageSize}
  DelCollection = '/question/warehouse/delete',
  AddCollection = '/question/warehouse/add',
  AddErr = '/question/err/add',
  DelErr = '/question/err/delete',
  GetErr = '/question/err', // /{pageNum}/{pageSize}
}

/**
 * @description: 获取收藏列表
 */
export function getCollection(params) {
  return defHttp.get({
    url: Api.GetCollection + '/' + params.pageNum + '/' + params.pageSize,
  });
}

/**
 * @description: 删除收藏列表
 */
export function delCollection(params) {
  return defHttp.delete({
    url: Api.DelCollection,
    params,
  });
}

/**
 * @description: 添加收藏列表
 */
export function addCollection(params) {
  return defHttp.post({
    url: Api.AddCollection,
    params,
  });
}

/**
 * @description: 获取错题列表
 */
export function getErr(params) {
  return defHttp.get({
    url: Api.GetErr + '/' + params.pageNum + '/' + params.pageSize,
  });
}

/**
 * @description: 删除错题列表
 */
export function delErr(params) {
  return defHttp.delete({
    url: Api.DelErr,
    params,
  });
}

/**
 * @description: 添加错题列表
 */
export function addRrr(params) {
  return defHttp.post({
    url: Api.AddErr,
    params,
  });
}
