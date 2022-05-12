import React, { Suspense } from 'react';

import './App.css';
import styled from 'styled-components';
import Text from './components/Text';
import Box from './components/Box';
import Neon from './components/Neon';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Sphere from './components/AnimatedSphere';

export default function App() {
  return (
    <Wrapper className='App'>
      <Text />
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intesnsity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intesnsity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intesnsity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Neon />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  canvas {
    height: 500px;
  }
`;
