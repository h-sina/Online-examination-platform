import { useGlobSetting } from '/@/hooks/setting';
import { defHttp } from '/@/utils/http/axios';

const { uploadUrl = '' } = useGlobSetting();

/**
 * @description: Upload interface
 */

export function uploadApi(params, onUploadProgress: (progressEvent: ProgressEvent) => void) {
  return defHttp.uploadFile(
    {
      url: 'https://www.itestwithme.top/user/uploadAvatar',
      onUploadProgress,
    },
    params,
  );
}

/**
 * @description: 导入学生
 */
export function addStuByExcel(params, onUploadProgress: (progressEvent: ProgressEvent) => void) {
  return defHttp.uploadFile(
    {
      url: 'https://www.itestwithme.top/user/s-admin/add/student',
      onUploadProgress,
    },
    params,
  );
}
