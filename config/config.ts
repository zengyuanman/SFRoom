/*
 * @Author: Weiber Zeng
 * @Date: 2022-02-08 21:57:56
 * @LastEditors: Weiber Zeng
 * @LastEditTime: 2023-10-28 14:32:49
 * @Description: file content
 * @FilePath: /备忘/Users/weiber/htdocs/three/SFThree/config/config.ts
 */
import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: true,
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
  },
  chainWebpack(config) {
    config.module
      .rule('webpack-glsl-loader')
      .test(/\.glsl$/)
      .use('webpack-glsl-loader')
      .loader('webpack-glsl-loader')
      .end();
  },
  routes,
});
