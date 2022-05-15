export function PlayerModel() {
  const user = {
    _id: '',
    username: '',
    password: '',
    gamesPlayed: 0,
    maxScore: 0,
    avgTime: 0,
    lastLevelClear: 0,
  };

  return user;
}

export function ScoreModel() {
  const score = {
    idUser: '',
    idLevel: '',
    score: 0,
    time: 0.0,
    levelComplete: false,
  };

  return score;
}

export function LevelModel() {
  const level = {
    _id: '',
    dificulty: 0,
    problem: '',
    enemys: [],
  };

  return level;
}

export function ActivityModel() {
  const activity = {
      name: '',
      draggable: true,
      title: ''
  };

  return activity;
}

export function Binds(id){
  const binds = [
    [
      { 
        bindDirection: "leftRight",
        description: "encontrar obstáculo",         
        descPosition:"first",
        isArrow: true,
      },
      { 
        bindDirection: "leftRight",
        description: "Quando blablablaaaaaaaaaaaaaa2",
        descPosition:"first",
        isArrow: true,
      },
      { 
        bindDirection: "leftBottom",
        description: "Quando blablabla3",
        descPosition:"last",
        isArrow: true,
      },
      { 
        bindDirection: "leftRight",
        description: "Quando blablabla4",
        descPosition:"first",
        isArrow: false,
      },
    ],
    [
      { 
        bindDirection: "leftRight",
        description: "ccccccccccccc",         
        descPosition:"first",
        isArrow: true,
      },
      { 
        bindDirection: "leftRight",
        description: "ddddddddddddddd",
        descPosition:"first",
        isArrow: true,
      },
    ]
  ]
  return binds[id]
}

export function ElementsOfActivityDiagram(id){
  const elementsOfActivityDiagram = [
    [{
      id:'bar',
      drag: true,
      firstBind: true,
      lastBind: true,
      firstArrow: true,
      lastArrow: true,
      isLeftFirst: true,
      isLeftLast: true,
      isInitialFirst: true,
      isInitialLast: true,
      isVertical: true
    },
    {
      id:'bar',
      drag: true,
      firstBind: true,
      lastBind: true,
      firstArrow: true,
      lastArrow: true,
      isLeftFirst: true,
      isLeftLast: true,
      isInitialFirst: true,
      isInitialLast: true,
      isVertical: true
    },
    {
      id:'bar',
      drag: true,
      firstBind: true,
      lastBind: true,
      firstArrow: true,
      lastArrow: true,
      isLeftFirst: true,
      isLeftLast: true,
      isInitialFirst: true,
      isInitialLast: true,
      isVertical: true
    },
    {
      id:'decision',
      drag: true,
      firstBind: true,
      secondBind: true,
      thirdBind: true,
      lastBind: true,
      firstArrow: true,
      secondArrow: true,
      thirdArrow: true,
      lastArrow: true,
      isLeftFirst: true,
      isLeftSecond: true,
      isLeftThird: true,
      isLeftLast: true,
      isInitialFirst: true,
      isInitialLast: true,
      isVertical: true
    },
    {
      id:'ball',
      drag: true,
      firstBind: true,
      secondBind: true,
      thirdBind: true,
      lastBind: true,
      firstArrow: true,
      secondArrow: true,
      thirdArrow: true,
      lastArrow: true,
      isLeftFirst: true,
      isLeftSecond: true,
      isLeftThird: true,
      isLeftLast: true,
      isInitialFirst: true,
      isInitialLast: true,
  
    },
    {
      id:'bind',
      drag: true,
      bindDirection: "leftTop",
      description: "aaa",         
      descPosition:"last",
      isArrow: true,
    }],
    [{
      id:'bar',
      drag: true,
      firstBind: true,
      lastBind: true,
      firstArrow: true,
      lastArrow: true,
      isLeftFirst: true,
      isLeftLast: true,
      isInitialFirst: true,
      isInitialLast: true,
      isVertical: true
    },
    {
      id:'ball',
      drag: true,
      firstBind: true,
      lastBind: true,
      firstArrow: true,
      lastArrow: true,
      isLeftFirst: true,
      isLeftLast: true,
      isInitialFirst: true,
      isInitialLast: true,
      isVertical: true
    },]
  ]
  return elementsOfActivityDiagram[id]
}

export function Activitys(id){
  const activitys = [
    [
      'Correr',
    'Pular',
    'Saltar',
    'Andar'
  ],
    [
      'Navegar',
      'Zoar'
    ],
  ]
  return activitys[id]
}

export function Tiles(id){
      const tiles = [
          [
              
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","activity","bind","activity","void","void",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
          ],
          [
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "activity", "bind", "activity","void","void",
              "void", "void", "void", "activity", "bind","activity","void",
              "void", "void", "bar", "ball", "activity","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
          ],
      ]
      return tiles[id]
}

export function elementsActivityModel(){
    const elementActivity = {
      type: '',
      title: '',
      dragabble: false,
      binds: [false, false, false, false],
      arrow: [false, false, false, false],
      isLeft: [false, false, false, false],
      isInitial: [false, false],
      isVertical: false,
    }

    return elementActivity
}

export function bindsModel(){
  const bind = {
      direction: '',
      description: '',
      position: '',
      isArrow: false,
  }

  return bind
}

  

  
  
  

