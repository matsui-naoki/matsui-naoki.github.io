'use client'

// Interactive view of one crystal model (GLB, Draco-compressed, one mesh per material). Mounted only
// for the card the visitor opened, so the page holds at most one WebGL context. The model is centred
// and scaled to a max dimension of 6, matching the camera of the pre-rendered thumbnails.

import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const DRACO = '/draco/'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url, DRACO)
  const object = useMemo(() => {
    const o = scene.clone(true)
    const box = new THREE.Box3().setFromObject(o)
    const size = box.getSize(new THREE.Vector3())
    const s = 6 / Math.max(size.x, size.y, size.z)
    o.scale.setScalar(s)
    o.position.copy(box.getCenter(new THREE.Vector3()).multiplyScalar(-s))
    return o
  }, [scene])
  return <primitive object={object} />
}

export default function GLBModel({ url, reduceMotion }: { url: string; reduceMotion?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [5.4, 5.4, 5.4], fov: 50 }}
      gl={{ antialias: true, powerPreference: 'low-power' }}
      flat={false}
    >
      <hemisphereLight args={['#ffffff', '#8a8a8a', 1.6]} />
      <directionalLight position={[6, 4, 8]} intensity={2.2} />
      <directionalLight position={[-6, 3, -5]} intensity={0.8} />
      <Suspense fallback={null}>
        <Model url={url} />
      </Suspense>
      <OrbitControls makeDefault enableDamping autoRotate={!reduceMotion} autoRotateSpeed={1.2} />
    </Canvas>
  )
}
