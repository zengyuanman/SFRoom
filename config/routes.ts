/*
 * @Author: Weiber Zeng
 * @Date: 2022-02-08 21:57:56
 * @LastEditors: Weiber Zeng
 * @LastEditTime: 2023-06-11 18:43:17
 * @Description: file content
 * @FilePath: /备忘/Users/weiber/htdocs/5s/zmap/config/routes.ts
 */
export default [
  {
    path: '/',
    component: '@/layouts/MainLayout',
    routes: [
      {
        path: '/',
        component: '@/pages/index',
      },
    ],
  },
];
