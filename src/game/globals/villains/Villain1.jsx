import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import { RigidBody } from '@react-three/rapier'
import { useAvatar } from '../../../context/AvatarContext'
import Avatar2 from '../player/Avatar2'
import * as THREE from "three";

export default function Villain1({ position }) {
  const villain1BodyRef = useRef(null)
  const Cube1Ref = useRef(null)
  const Cube2Ref = useRef(null)
  const Cube3Ref = useRef(null)
  const Cube4Ref = useRef(null)
  const Cube5Ref = useRef(null)
  const Cube6Ref = useRef(null)
  const Cube7Ref = useRef(null)
  const Cube8Ref = useRef(null)
  const { nodes, materials } = useGLTF('assets/models/characters/villains/HipostasisElementalPysco.glb')

  let villainVidas = 100

  const [currentAnimation, setCurrentAnimation] = useState('Idle');
  const yRotationAxies = new THREE.Vector3(0, 0, 0);
  const quaternionRotation = useMemo(() => new THREE.Quaternion(), []);

  const [crono, setCrono] = useState(0);
  const [direction, setDirection] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection(prevDirection => !prevDirection);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentAnimation(currentAnimation === 'Idle' ? 'openCubes' : 'Idle');
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentAnimation]);

  function Idle(moveY) {
    villain1BodyRef.current?.setTranslation({
      x: villain1BodyRef.current?.translation().x,
      y: moveY,
      z: villain1BodyRef.current?.translation().z
    }, true)

    villain1BodyRef.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(-1), crono * 0.4)
    );

    Cube1Ref.current?.setTranslation({
      x: position[0],
      y: moveY,
      z: position[2]
    }, true)
    Cube2Ref.current?.setTranslation({
      x: Cube1Ref.current?.translation().x,
      y: moveY,
      z: Cube1Ref.current?.translation().z
    }, true)

    Cube3Ref.current?.setTranslation({
      x: Cube1Ref.current?.translation().x,
      y: moveY,
      z: Cube1Ref.current?.translation().z
    }, true)

    Cube4Ref.current?.setTranslation({
      x: Cube1Ref.current?.translation().x,
      y: moveY,
      z: Cube1Ref.current?.translation().z
    }, true)

    Cube5Ref.current?.setTranslation({
      x: Cube1Ref.current?.translation().x,
      y: moveY,
      z: Cube1Ref.current?.translation().z
    }, true)

    Cube6Ref.current?.setTranslation({
      x: Cube1Ref.current?.translation().x,
      y: moveY,
      z: Cube1Ref.current?.translation().z
    }, true)

    Cube7Ref.current?.setTranslation({
      x: Cube1Ref.current?.translation().x,
      y: moveY,
      z: Cube1Ref.current?.translation().z
    }, true)

    Cube8Ref.current?.setTranslation({
      x: Cube1Ref.current?.translation().x,
      y: moveY,
      z: Cube1Ref.current?.translation().z
    }, true)

    Cube1Ref.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.25)
    );
    Cube2Ref.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.25)
    );
    Cube3Ref.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.25)
    );
    Cube4Ref.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.25)
    );
    Cube5Ref.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.25)
    );
    Cube6Ref.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.25)
    );
    Cube7Ref.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.25)
    );
    Cube8Ref.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.25)
    );
  }

  function openCubes(timeCube, amplitudeCube, velocityCube, moveY) {
    villain1BodyRef.current?.setTranslation({
      x: villain1BodyRef.current?.translation().x,
      y: moveY,
      z: villain1BodyRef.current?.translation().z
    }, true)

    villain1BodyRef.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(-1), crono * 0.4)
    );

    Cube1Ref.current?.setTranslation({
      x: Cube1Ref.current?.translation().x,
      y: Cube1Ref.current?.translation().y,
      z: -amplitudeCube * Math.cos(timeCube / velocityCube) - 51
    }, true)

    Cube4Ref.current?.setTranslation({
      x: amplitudeCube * Math.cos(timeCube / velocityCube) - 12,
      y: Cube4Ref.current?.translation().y,
      z: Cube4Ref.current?.translation().z
    }, true)

    Cube6Ref.current?.setTranslation({
      x: Cube6Ref.current?.translation().x,
      y: Cube6Ref.current?.translation().y,
      z: amplitudeCube * Math.cos(timeCube / velocityCube) - 59
    }, true)

    Cube7Ref.current?.setTranslation({
      x: -amplitudeCube * Math.cos(timeCube / velocityCube) - 4,
      y: Cube7Ref.current?.translation().y,
      z: Cube7Ref.current?.translation().z
    }, true)

    Cube5Ref.current?.setTranslation({
      x: amplitudeCube * Math.cos(timeCube / velocityCube) - 12,
      y: Cube5Ref.current?.translation().y,
      z: Cube5Ref.current?.translation().z
    }, true)

    Cube8Ref.current?.setTranslation({
      x: Cube8Ref.current?.translation().x,
      y: Cube8Ref.current?.translation().y,
      z: -amplitudeCube * Math.cos(timeCube / velocityCube) - 51
    }, true)

    Cube2Ref.current?.setTranslation({
      x: -amplitudeCube * Math.cos(timeCube / velocityCube) - 4,
      y: Cube2Ref.current?.translation().y,
      z: Cube2Ref.current?.translation().z
    }, true)

    Cube3Ref.current?.setTranslation({
      x: Cube3Ref.current?.translation().x,
      y: Cube3Ref.current?.translation().y,
      z: amplitudeCube * Math.cos(timeCube / velocityCube) - 59
    }, true)
  }

  useFrame(() => {
    if (currentAnimation === 'Idle') {
      setCrono(0);
      if (direction) {
        setCrono(crono + 0.1);
      } else {
        if (crono > 0) {
          setCrono(crono - 0.1);
        }
      }
      const moveY = Math.cos(crono / 2) * 0.5 + position[1];
      Idle(moveY)
    } else if (currentAnimation === 'openCubes') {
      setCrono(0);
      if (direction) {
        setCrono(crono + 0.1);
      } else {
        if (crono > 0) {
          setCrono(crono - 0.1);
        }
      }
      const moveY = Math.cos(crono / 2) * -0.5 + position[1];
      openCubes(crono, 4, 4, moveY)
    }

  })

  const { avatar, setAvatar } = useAvatar();

  const onCollisionEnterBody = (e) => {
    if (villainVidas > 0) {
      villainVidas -=  10;
      console.log('Vidas villano: ', villainVidas)
    } else {
      console.log('Villain defeated!')
    }
  }

  const onCollisionExitBody = (e) => {
    // console.log('collisionBodyExit', e)
  }

  const onCollisionEnterCube = (e) => {
    if (e.other.colliderObject.id == 438 || e.other.colliderObject.id == 435) {
      // console.log('collisionCubeEnter', e.other)

      Avatar2.avatarCollider.current.applyImpulse([10, 0, 0], true);

    }

  };

  const onCollisionExitCube = (e) => {
    if (avatar.vidas > 0) {
      setAvatar({ ...avatar, vidas: avatar.vidas - 1 });
      console.log('collisionCubeExit', e, avatar.vidas)
    } else {
      setAvatar({ ...avatar, animation: 'Death' })
    }
  }

  return (<>
    <RigidBody
      ref={villain1BodyRef}
      type="kinematicPosition"
      colliders="hull"
      position={position}
      onCollisionEnter={(e) => onCollisionEnterBody(e)}
      onCollisionExit={(e) => onCollisionExitBody(e)}
    >
      <mesh
        castShadow
        geometry={nodes.Nucleo.geometry}
        material={materials.Details}
      />
    </RigidBody>

    <RigidBody ref={Cube1Ref}
      type="kinematicPosition"
      colliders={'cuboid'}
      position={position}
      onCollisionEnter={(e) => onCollisionEnterCube(e)}
      onCollisionExit={(e) => onCollisionExitCube(e)}
    >
      <mesh
        castShadow
        geometry={nodes.Cube1_1.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        geometry={nodes.Cube1_2.geometry}
        material={materials.Details}
      />
    </RigidBody>

    <RigidBody ref={Cube2Ref}
      type="kinematicPosition"
      colliders={'cuboid'}
      position={position}
      onCollisionEnter={(e) => onCollisionEnterCube(e)}
      onCollisionExit={(e) => onCollisionExitCube(e)}
    >
      <mesh
        castShadow
        geometry={nodes.Cube2_1.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        geometry={nodes.Cube2_2.geometry}
        material={materials.Details}
      />
    </RigidBody>

    <RigidBody ref={Cube3Ref}
      type="kinematicPosition"
      colliders={'cuboid'}
      position={position}
      onCollisionEnter={(e) => onCollisionEnterCube(e)}
      onCollisionExit={(e) => onCollisionExitCube(e)}
    >
      <mesh
        castShadow
        geometry={nodes.Cube5_1.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        geometry={nodes.Cube5_2.geometry}
        material={materials.Details}
      />
    </RigidBody>

    <RigidBody ref={Cube4Ref}
      type="kinematicPosition"
      colliders={'cuboid'}
      position={position}
      onCollisionEnter={(e) => onCollisionEnterCube(e)}
      onCollisionExit={(e) => onCollisionExitCube(e)}
    >
      <mesh
        castShadow
        geometry={nodes.Cube6_1.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        geometry={nodes.Cube6_2.geometry}
        material={materials.Details}
      />
    </RigidBody>

    <RigidBody ref={Cube5Ref}
      type="kinematicPosition"
      colliders={'cuboid'}
      position={position}
      onCollisionEnter={(e) => onCollisionEnterCube(e)}
      onCollisionExit={(e) => onCollisionExitCube(e)}
    >
      <mesh
        castShadow
        geometry={nodes.Cube21.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        geometry={nodes.Cube21_1.geometry}
        material={materials.Details}
      />
    </RigidBody>

    <RigidBody ref={Cube6Ref}
      type="kinematicPosition"
      colliders={'cuboid'}
      position={position}
      onCollisionEnter={(e) => onCollisionEnterCube(e)}
      onCollisionExit={(e) => onCollisionExitCube(e)}
    >
      <mesh
        castShadow
        geometry={nodes.Cube51.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        geometry={nodes.Cube51_1.geometry}
        material={materials.Details}
      />
    </RigidBody>

    <RigidBody ref={Cube7Ref}
      type="kinematicPosition"
      colliders={'cuboid'}
      position={position}
      onCollisionEnter={(e) => onCollisionEnterCube(e)}
      onCollisionExit={(e) => onCollisionExitCube(e)}
    >
      <mesh
        castShadow
        geometry={nodes.Cube61.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        geometry={nodes.Cube61_1.geometry}
        material={materials.Details}
      />
    </RigidBody>

    <RigidBody ref={Cube8Ref}
      type="kinematicPosition"
      colliders={'cuboid'}
      position={position}
      onCollisionEnter={(e) => onCollisionEnterCube(e)}
      onCollisionExit={(e) => onCollisionExitCube(e)}
    >
      <mesh
        castShadow
        geometry={nodes.Cube1001.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        geometry={nodes.Cube1001_1.geometry}
        material={materials.Details}
      />
    </RigidBody>
  </>
  )
}

useGLTF.preload('/HipostasisElementalPysco.glb')