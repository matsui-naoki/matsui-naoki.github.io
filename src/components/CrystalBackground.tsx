'use client'

import { useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useFBX } from '@react-three/drei'
import * as THREE from 'three'

function Crystal() {
  const fbx = useFBX('/structure/BaEr2F8.fbx')
  const meshRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (meshRef.current) {
      // Apply emissive material to all meshes in the FBX
      meshRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshPhongMaterial({
            color: 0x00ffff,
            emissive: 0x00ffff,
            emissiveIntensity: 0.8,
            transparent: true,
            opacity: 0.9
          })
        }
      })
    }
  }, [fbx])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.15
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 1
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 3
    }
  })

  return (
    <primitive 
      ref={meshRef}
      object={fbx} 
      scale={0.008}
      position={[0, 0, -5]}
    />
  )
}

export default function CrystalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-50">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#0088ff" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Crystal />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}