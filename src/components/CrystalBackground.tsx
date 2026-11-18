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
          // Ultramarine pigment, printed flat on parchment
          child.material = new THREE.MeshLambertMaterial({
            color: 0x2942ab,
            emissive: 0x1b2e87,
            emissiveIntensity: 0.35,
            transparent: true,
            opacity: 0.85
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
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.13] mix-blend-multiply" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#050505" />
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