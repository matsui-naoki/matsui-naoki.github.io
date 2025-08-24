'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { FBXLoader } from 'three-stdlib'

interface FBXModelProps {
  url: string
  name: string
}

function FBXMesh({ url }: { url: string }) {
  const meshRef = useRef<THREE.Group>(null)
  const [model, setModel] = useState<THREE.Group | null>(null)

  useEffect(() => {
    const loader = new FBXLoader()
    loader.load(
      url,
      (fbx) => {
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(fbx)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 6 / maxDim
        
        fbx.scale.multiplyScalar(scale)
        fbx.position.sub(center.multiplyScalar(scale))
        
        // Apply dark theme materials
        fbx.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh
            const originalMaterial = mesh.material
            
            // Only replace if it's a basic material without color
            if (originalMaterial && (originalMaterial as THREE.Material).type === 'MeshBasicMaterial') {
              const basicMat = originalMaterial as THREE.MeshBasicMaterial
              // Convert basic material to phong while preserving color
              mesh.material = new THREE.MeshPhongMaterial({
                color: basicMat.color || 0x808080,
                specular: 0x111111,
                shininess: 30,
              })
            }
            // Keep all other materials as-is
          }
        })
        
        setModel(fbx)
      },
      undefined,
      (error) => {
        console.error('Error loading FBX:', error)
      }
    )
  }, [url])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  if (!model) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="gray" wireframe />
      </mesh>
    )
  }

  return <primitive ref={meshRef} object={model} />
}

export default function FBXModel({ url }: FBXModelProps) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[7.7, 7.7, 7.7]} fov={50} />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      
      {/* Dark theme lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4FC3F7" />
      <directionalLight position={[0, 5, 5]} intensity={0.4} color="#ffffff" />
      
      <FBXMesh url={url} />
    </Canvas>
  )
}