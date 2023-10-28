/*
 * @Author: Weiber Zeng
 * @Date: 2022-06-03 22:51:20
 * @LastEditors: Weiber Zeng
 * @LastEditTime: 2023-10-28 20:52:33
 */
import React, { useEffect } from 'react';

export default () => {
  const { sfViewer } = window;
  const initFun = () => {
    const geometry = new THREE.IcosahedronGeometry(0.5, 3);
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const mesh = new THREE.InstancedMesh(geometry, material, 1000);
    const amount = 10;
    let i = 0;
    const offset = (amount - 1) / 2;

    const matrix = new THREE.Matrix4();

    for (let x = 0; x < amount; x++) {
      for (let y = 0; y < amount; y++) {
        for (let z = 0; z < amount; z++) {
          matrix.setPosition(offset - x, offset - y, offset - z);
          mesh.setMatrixAt(i, matrix);
          mesh.setColorAt(i, new THREE.Color());
          i++;
        }
      }
    }

    sfViewer.setDrawData([
      {
        type: 'createLayer',
        layerId: 't1',
      },
      {
        type: 'draw',
        layerId: 't1',
        payload: [
          {
            overlayType: 'Mesh',
            attr: {
              position: [0, 0, 0],
              mesh,
            },
          },
        ],
      },
    ]);
    console.log('mesh', mesh);
  };
  useEffect(() => {
    if (sfViewer) {
      initFun();
    }
  }, [sfViewer]);
  return null;
};
