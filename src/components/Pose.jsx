import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from "styled-components";
import { BorderBox, BorderBoxTitle, BoxContent } from "./StyledComponents";

const Content = styled.div`
  flex: 1;
  background: #f5f5f5;
  border-radius: 20px;
  overflow: hidden;
`;

const Rocket = ({ roll, pitch, yaw }) => {
  const rocketRef = useRef();

  useFrame(() => {
    if (rocketRef.current) {
      rocketRef.current.rotation.x = pitch;
      rocketRef.current.rotation.y = yaw;
      rocketRef.current.rotation.z = roll;
    }
  });

  return (
    <group ref={rocketRef}>
      {/* 로켓 머리 부분 */}
      <mesh position={[0, 1, 0]}>
        <coneGeometry args={[0.3, 0.7, 32]} />
        <meshStandardMaterial color={'white'} />
      </mesh>
      
      {/* 로켓 몸체 부분 */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 3.3, 32]} />
        <meshStandardMaterial color={'white'} />
      </mesh>
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, index) => (
        <mesh
          key={index}
          position={[Math.cos(angle) * 0.4, -2.1, Math.sin(angle) * 0.4]}
          rotation={[0, angle, Math.PI / 2]}
        >
          <boxGeometry args={[1, 0.5, 0.1]} />
          <meshStandardMaterial color={'red'} />
        </mesh>
      ))}
    </group>
  );
};

const Pose = () => {
  const roll = 0.1;  // 예시 값
  const pitch = 0; // 예시 값
  const yaw = 0;   // 예시 값

  return (
    <BorderBox>
      <BoxContent>
        <BorderBoxTitle>Pose</BorderBoxTitle>
        <Content>
          <Canvas
            shadows
            style={{ height: '400px' }}
            camera={{ position: [0, 5, 10], fov: 50 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight
              castShadow
              position={[5, 5, 5]}
              intensity={1}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <Rocket roll={roll} pitch={pitch} yaw={yaw} />
            <OrbitControls />
            <mesh receiveShadow position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[20, 20]} />
              <shadowMaterial opacity={0.5} />
            </mesh>
          </Canvas>
        </Content>
      </BoxContent>
    </BorderBox>
  );
};

export default Pose;
