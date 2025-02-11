import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls } from "@react-three/drei";

export default function Home3D() {
    return (
        <Canvas>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} />
            <Text3D font="/fonts/helvetiker_regular.typeface.json" size={1} height={0.2}>
                Home
                <meshStandardMaterial color="white" />
            </Text3D>
            <OrbitControls />
        </Canvas>
    );
}
