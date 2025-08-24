'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

interface AtomProps {
  position: [number, number, number]
  color: string
  radius: number
  element: string
}

function Atom({ position, color, radius, element }: AtomProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.3}
        roughness={0.4}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}

interface BondProps {
  start: [number, number, number]
  end: [number, number, number]
  color?: string
}

function Bond({ start, end, color = '#888888' }: BondProps) {
  const midpoint = [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2,
  ] as [number, number, number]
  
  const length = Math.sqrt(
    Math.pow(end[0] - start[0], 2) +
    Math.pow(end[1] - start[1], 2) +
    Math.pow(end[2] - start[2], 2)
  )
  
  const direction = new THREE.Vector3(
    end[0] - start[0],
    end[1] - start[1],
    end[2] - start[2]
  ).normalize()
  
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction
  )
  
  return (
    <mesh position={midpoint} quaternion={quaternion}>
      <cylinderGeometry args={[0.1, 0.1, length, 8]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.5}
        roughness={0.5}
        opacity={0.8}
        transparent
      />
    </mesh>
  )
}

interface CrystalStructureProps {
  atoms: Array<{
    position: [number, number, number]
    color: string
    radius: number
    element: string
  }>
  bonds: Array<{
    start: [number, number, number]
    end: [number, number, number]
    color?: string
  }>
  name: string
}

function RotatingGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })
  
  return <group ref={groupRef}>{children}</group>
}

export default function CrystalStructure({ atoms, bonds, name }: CrystalStructureProps) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[7.7, 7.7, 7.7]} fov={50} />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      
      {/* Dark theme lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4FC3F7" />
      <directionalLight position={[0, 5, 5]} intensity={0.4} color="#ffffff" />
      
      <RotatingGroup>
        {atoms.map((atom, index) => (
          <Atom key={`atom-${index}`} {...atom} />
        ))}
        {bonds.map((bond, index) => (
          <Bond key={`bond-${index}`} {...bond} />
        ))}
      </RotatingGroup>
    </Canvas>
  )
}