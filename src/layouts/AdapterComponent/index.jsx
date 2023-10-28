/*
 * @Author: Weiber Zeng
 * @Date: 2022-02-08 21:57:58
 * @LastEditors: Weiber Zeng
 * @LastEditTime: 2023-10-28 17:57:17
 * @Description: file content
 * @FilePath: /备忘/Users/weiber/htdocs/three/proj/src/layouts/AdapterComponent/index.jsx
 */
import React, { useEffect } from 'react';
// import SF_THREE from 'sfthree';
import styles from './index.less';
export default () => {
  useEffect(() => {
    window.sfViewer = new SF_THREE.CreateViewer({
      stats: {
        show: true,
      },
      container: document.getElementById('threeContainer'),
    });
  }, []);
  return <div id="threeContainer" className={styles.AdapterContainer}></div>;
};
