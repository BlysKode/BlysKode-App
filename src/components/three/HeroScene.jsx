import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PointMaterial, Points } from '@react-three/drei'
import * as THREE from 'three'

/** Slowly rotating field of particles distributed inside a sphere. */
function ParticleField({ count = 2400 }) {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 9 * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.03
    ref.current.rotation.x += delta * 0.008
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#38e1ff"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

/** Network of nodes with lines connecting nearby pairs — the "tech mesh". */
function NodeNetwork({ nodeCount = 46, maxDistance = 3.4 }) {
  const group = useRef()

  const { nodePositions, linePositions } = useMemo(() => {
    const nodes = []
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 11,
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 6,
        ),
      )
    }
    const lines = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDistance) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z)
        }
      }
    }
    const nodeArr = new Float32Array(nodes.length * 3)
    nodes.forEach((n, i) => n.toArray(nodeArr, i * 3))
    return { nodePositions: nodeArr, linePositions: new Float32Array(lines) }
  }, [nodeCount, maxDistance])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    group.current.rotation.y = Math.sin(t * 0.08) * 0.35
    group.current.rotation.x = Math.cos(t * 0.06) * 0.12
  })

  return (
    <group ref={group}>
      <Points positions={nodePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.09}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3b3f6b" transparent opacity={0.28} depthWrite={false} />
      </lineSegments>
    </group>
  )
}

/** Central floating wireframe core. */
function CoreMesh() {
  const mesh = useRef()

  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.12
    mesh.current.rotation.y += delta * 0.18
  })

  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={mesh} scale={1.55}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#38e1ff"
          emissive="#0e7490"
          emissiveIntensity={0.55}
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>
      <mesh scale={0.62}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#6d28d9"
          emissiveIntensity={0.8}
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
    </Float>
  )
}

/** Eases the camera toward the pointer for a subtle parallax feel. */
function CameraRig() {
  useFrame(({ camera, pointer }, delta) => {
    const damp = 1 - Math.pow(0.001, delta)
    camera.position.x += (pointer.x * 1.4 - camera.position.x) * damp
    camera.position.y += (pointer.y * 0.9 - camera.position.y) * damp
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} intensity={40} color="#38e1ff" />
      <pointLight position={[-6, -4, 4]} intensity={30} color="#8b5cf6" />
      <ParticleField />
      <NodeNetwork />
      <CoreMesh />
      <CameraRig />
      <fog attach="fog" args={['#05060a', 10, 22]} />
    </Canvas>
  )
}
