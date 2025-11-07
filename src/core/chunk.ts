const buffer = new ArrayBuffer(16384);

const entityFloatCount = 1;
const positionFloatCount = 3;
const velocityFloatCount = 4;

const capacity = Math.floor(
  16384 / (entityFloatCount + positionFloatCount + velocityFloatCount) / 4
);

const float단위 = 4;

const entityOffset = 0;
const positionOffset = capacity * entityFloatCount * float단위; // 2048
const velocityOffset =
  positionOffset + capacity * positionFloatCount * float단위; // 8192

const entity = new Float32Array(
  buffer,
  entityOffset,
  capacity * entityFloatCount
);
const position = new Float32Array(
  buffer,
  positionOffset,
  capacity * positionFloatCount
);
const velocity = new Float32Array(
  buffer,
  velocityOffset,
  capacity * velocityFloatCount
);

export default class Chunk {
  buffer = new ArrayBuffer(16384);

  constructor() {}

  getNativeArray() {}
}

//TODO: 체이닝이 끝날때 , 컴포넌트 조합(아키타입을 찾고 없으면 만들고, 있으면 값 전달)
// 아키타입을 만들때 , 각 컴포넌트의 float 갯수를 알아야함
// chunk의 입출력 class 만들기
// 이떄 chunk에서 컴포넌트 값을 가져올때 struct 처럼 class 가 아닌 struct로 만들어야할듯?(래퍼느낌인가)

// world의 entitiesCollection(씬에서 userData로 하면 될라나)
//  !! entitiesCollection을 world에서 가져야하나 매니저에서 가져야하나
// component 만들기
// entity 만들기
//

// 예를 들어 entityIndex = 5라면:

// pos.x = viewPosition[5 * 2 + 0]
// pos.y = viewPosition[5 * 2 + 1]
// vel.x = viewVelocity[5 * 2 + 0]
// vel.y = viewVelocity[5 * 2 + 1]

// createEntity().addComponent().addComponent()
// addComponent 할떄 만듬

// 엔티티 , 컴포넌트의 value 갯수 (float의 개수)
//

// World
// │
// ├── Archetype A [Position, Velocity]
// │    ├── Chunk 1
// │    │    ├── EntityIDs: [0, 1, 2]
// │    │    ├── Position: Float32Array
// │    │    └── Velocity: Float32Array
// │    └── Chunk 2 ...
// │
// └── Archetype B [Position, Velocity, Health]
//      ├── Chunk 1
//      │    ├── EntityIDs: [3, 4]
//      │    ├── Position: Float32Array
//      │    ├── Velocity: Float32Array
//      │    └── Health: Uint8Array
//      └── ...

// Chunk #1 (Archetype A)
//  ├── Entity IDs: [0, 1, 2, 3]
//  ├── Position:  Float32Array [x0, y0, x1, y1, x2, y2, x3, y3]
//  └── Velocity:  Float32Array [vx0, vy0, vx1, vy1, vx2, vy2, vx3, vy3]
