import React from 'react';
import {useThree} from "@react-three/fiber";
import {PointerLockControls} from "@react-three/drei";

const Fpv = () => {
  const {camera, gl} = useThree()

  return (
    <PointerLockControls arg={[camera, gl.domElement]} />
  );
};

export default Fpv;