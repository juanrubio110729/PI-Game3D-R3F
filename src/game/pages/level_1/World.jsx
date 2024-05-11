import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function World(props) {
  const { nodes, materials } = useGLTF(
    "assets/models/level_1/FirstLevelOP.glb"
  );
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="cuboid" position={[10, -5, -40]}>
        <CuboidCollider args={[130, 0.1, 150]} />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.TempleM1.geometry}
          material={materials.Material}
        />
        <mesh
          receiveShadow
          geometry={nodes.TempleM2.geometry}
          material={materials.Material}
        />
        <mesh
          receiveShadow
          geometry={nodes.TempleM4.geometry}
          material={materials.Material}
        />
        <mesh
          receiveShadow
          geometry={nodes.TempleM3.geometry}
          material={materials.Material}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.CheckPoints1.geometry}
          material={materials["Material.002"]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.CheckPoints2.geometry}
          material={materials["Material.002"]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.TreeCheckPoint1.geometry}
          material={nodes.TreeCheckPoint1.material}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.CheckPoints3.geometry}
          material={materials["Material.002"]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.TreeCheckPoint2.geometry}
          material={nodes.TreeCheckPoint2.material}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          geometry={nodes.PlatForm001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm002.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm003.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm004.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm005.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm006.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm007.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm008.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm009.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm010.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm011.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm012.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm013.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm014.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm015.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm016.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm017.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm018.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm019.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm020.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm021.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm022.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm023.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm024.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm025.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm026.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm027.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm028.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm029.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm030.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm031.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm032.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm033.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm034.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm035.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm036.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm037.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm038.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm039.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm040.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm041.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm042.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm043.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm044.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm045.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm046.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm047.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm048.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm049.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm050.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm051.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm052.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm053.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm054.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm055.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm056.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm057.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm058.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm059.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm060.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm061.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm062.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm063.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm064.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm065.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm066.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm067.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm068.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm069.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm070.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm071.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm072.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm073.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm074.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          geometry={nodes.PlatForm075.geometry}
          material={materials["Material.001"]}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/FirstLevelOP.glb");
