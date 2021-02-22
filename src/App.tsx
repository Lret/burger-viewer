import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber'
import { OrbitControls, ContactShadows, Environment, Html } from '@react-three/drei'

import { ReactComponent as Logo } from './logo.svg';
import Burger from './components/burger/Burger'

import './App.css';

const App = () => (
  <div className="App" style={{width:"100vw", height:"100vh"}}>
    <Canvas camera={{ position: [1, 1.8, 3] }}>
      <spotLight intensity={0.3} position={[5,20,20]} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={<Html fullscreen className="App-logo-container"><span><Logo height="40vh" /></span><p>Loading...</p></Html>}>
        <Burger />
        <Environment files={"hdr.hdr"}/>
        <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.6, 0]} opacity={0.25} width={10} height={10} blur={2} far={1}/>
      </Suspense>
      <OrbitControls/>
    </Canvas>
  </div>
);

export default App;
