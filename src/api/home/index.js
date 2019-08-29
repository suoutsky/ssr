/*
 * @Description: Description
 * @Author: 清河
 * @Date: 2019-08-13 14:24:31
 * @LastEditTime: 2019-08-13 14:24:57
 * @LastEditors: 清河
 */
import Axios from '@src/utils/request';

// 列表条件查询
export const fetchItem = data => Axios({
  method: 'post',
  url: '/role/list',
  data
});
