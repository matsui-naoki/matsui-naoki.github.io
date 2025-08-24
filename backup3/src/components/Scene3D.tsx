'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import { Mesh, Vector3 } from 'three'

function Polyhedron({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.3
    if (hovered) {
      meshRef.current.scale.setScalar(1.2)
    } else {
      meshRef.current.scale.setScalar(1)
    }
  })

  return (
    <mesh
      position={position}
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
}

function Ion({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.8
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.01
    if (hovered) {
      meshRef.current.scale.setScalar(1.5)
    } else {
      meshRef.current.scale.setScalar(1)
    }
  })

  return (
    <mesh
      position={position}
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="h-screen w-full absolute top-0 left-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#667eea" />
        
        {/* Polyhedrons */}
        <Polyhedron position={[-3, 2, 0]} color="#667eea" />
        <Polyhedron position={[3, -2, -2]} color="#764ba2" />
        <Polyhedron position={[0, 3, -3]} color="#f093fb" />
        
        {/* Ions */}
        <Ion position={[-2, -1, 1]} color="#667eea" />
        <Ion position={[2, 1, -1]} color="#764ba2" />
        <Ion position={[0, -2, 2]} color="#f093fb" />
        <Ion position={[-1, 2, -1]} color="#4facfe" />
        <Ion position={[1, -3, 0]} color="#00f2fe" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}