import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetClasses = '/user/s-admin/all-course',
  CreateClass = '/user/s-admin/create-clazz',
  GetTechers = '/user/teacher/list',
  UploadClassPic = '/clazz/upload-clazz-pic',

  // AddStuByExcel = '/user/s-admin/add/student',
}

/**
 * @description: 管理员获取所有班级信息
 */
export function getClasses() {
  return defHttp.get({
    url: Api.GetClasses,
  });
}

/**
 * @description: 管理员获取所有教师信息
 */
export function getTechers(params) {
  return defHttp.get({
    url: Api.GetTechers + '/' + params,
  });
}

/**
 * @description: 上传班级图片
 */
// export function uploadClassPic(params) {
//   return defHttp.post({
//     url: Api.UploadClassPic,
//     params,
//   });
// }
export function uploadClassPic(params, onUploadProgress: (progressEvent: ProgressEvent) => void) {
  return defHttp.uploadFile(
    {
      url: 'https://www.itestwithme.top/clazz/upload-clazz-pic',
      onUploadProgress,
    },
    params,
  );
}

/**
 * @description: 创建班级
 */
export function createClass(params) {
  return defHttp.post({
    url: Api.CreateClass,
    params,
  });
}
