/*
 * @Author: Weiber Zeng
 * @Date: 2022-02-08 21:57:58
 * @LastEditors: Weiber Zeng
 * @LastEditTime: 2023-10-28 15:50:52
 * @Description: file content
 * @FilePath: /备忘/Users/weiber/htdocs/three/proj/src/layouts/MainLayout.jsx
 */
import React from 'react';
import AdapterComponent from './AdapterComponent';

import '@/assets/less/base.less';
import styles from './MainLayout.less';

export default ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <AdapterComponent></AdapterComponent>
    </div>
  );
};
