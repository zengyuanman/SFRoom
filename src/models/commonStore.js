/*
 * @Author: Weiber Zeng
 * @Date: 2022-02-09 02:43:32
 * @LastEditors: Weiber Zeng
 * @LastEditTime: 2023-06-11 18:51:00
 * @Description: file content
 * @FilePath: /备忘/Users/weiber/htdocs/5s/zmap/src/models/commonStore.js
 */

export default {
  // models命名空间，需全局唯一
  namespace: 'commonStore',
  // models存储的数据store
  state: {},
  // 更新store，用新数据合并state的旧数据
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
