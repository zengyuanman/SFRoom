/*
 * @Author: Weiber Zeng
 * @Date: 2022-02-08 21:57:58
 * @LastEditors: Weiber Zeng
 * @LastEditTime: 2023-10-28 20:30:59
 * @Description: file content
 * @FilePath: /备忘/Users/weiber/htdocs/three/SFRoom/src/layouts/AdapterComponent/index.jsx
 */
import React, { useEffect } from 'react';
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
