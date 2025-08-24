'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { FBXLoader } from 'three-stdlib'
import * as THREE from 'three'

interface FBXModelProps {
  url: string
  name: string
}

function Model({ url }: { url: string }) {
  const fbx = useLoader(FBXLoader, url)
  const modelRef = useRef<THREE.Group>(null)
  
  useEffect(() => {
    if (fbx) {
      // Apply dark theme materials
      fbx.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh
          const material = mesh.material as THREE.MeshStandardMaterial
          
          if (material) {
            material.metalness = 0.3
            material.roughness = 0.4
            if (material.emissive) {
              material.emissiveIntensity = 0.1
            }
          }
        }
      })
      
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(fbx)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 6 / maxDim
      
      fbx.scale.multiplyScalar(scale)
      fbx.position.sub(center.multiplyScalar(scale))
    }
  }, [fbx])
  
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2
    }
  })
  
  return <primitive ref={modelRef} object={fbx} />
}

export default function FBXModel({ url, name }: FBXModelProps) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[7.7, 7.7, 7.7]} fov={50} />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      
      {/* Dark theme lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4FC3F7" />
      <directionalLight position={[0, 5, 5]} intensity={0.4} color="#ffffff" />
      
      <Model url={url} />
    </Canvas>
  )
}