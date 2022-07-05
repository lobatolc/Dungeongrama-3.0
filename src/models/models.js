import Decision from "../components/Decision/decision";

export function PlayerModel() {
  const user = {
    _id: '',
    username: '',
    password: '',
    gamesPlayed: 0,
    maxScore: 0,
    avgTime: 0,
    lastLevelClear: 0,
    scoreStage: []
  };

  return user;
}

export function StageModel(i, unlock = false) {
  const stage = {
    stage: `stage ${i + 1}`,
    score: 0,
    useHint: false,
    clear: false,
    unlock,
    timeClear: 0,
    percentComplete: 0.0
  }

  return stage;
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

export function Balls(id){
  const balls = [
    [
    {firstBind: false,
      secondBind: true,
      thirdBind :true, 
      lastBind :true, 

      firstArrow : true,
      secondArrow : true,
      thirdArrow :true,
      lastArrow : true,

      isLeftFirst : false,
      isLeftSecond : true,
      isLeftThird :false,
      isLeftLast : false,
    
    isInitial : true},
    {firstBind: false,
      secondBind: true,
      thirdBind :true, 
      lastBind :true, 

      firstArrow : true,
      secondArrow : true,
      thirdArrow :true,
      lastArrow : true,

      isLeftFirst : false,
      isLeftSecond : true,
      isLeftThird :false,
      isLeftLast : false,
    
      isInitial : false}
  ],
  [
    {firstBind: true,
      secondBind: true,
      thirdBind :true, 
      lastBind :true, 

      firstArrow : true,
      secondArrow : true,
      thirdArrow :true,
      lastArrow : true,

      isLeftFirst : false,
      isLeftSecond : true,
      isLeftThird :false,
      isLeftLast : false,
      isInitial : false },
    {firstBind: false,
      secondBind: true,
      thirdBind :true, 
      lastBind :true, 

      firstArrow : true,
      secondArrow : true,
      thirdArrow :true,
      lastArrow : true,

      isLeftFirst : false,
      isLeftSecond : true,
      isLeftThird :false,
      isLeftLast : false,
      isInitial : true }
  ]
]

  return balls[id]
}

export function Bars(id){
  const bars = [
    [
      {
        firstBind: true,
        lastBind :true, 
        firstArrow : true,
        lastArrow : true,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : false,
        isInitialLast : false,
  
        isVertical : true
  
      },
      {
        firstBind: true,
        lastBind :true, 
        firstArrow : true,
        lastArrow : true,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : false,
        isInitialLast : false,
  
        isVertical : false
  
      },
    ],
    [
      {
        firstBind: true,
        lastBind :true, 
        firstArrow : true,
        lastArrow : true,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : false,
        isInitialLast : false,
  
        isVertical : false
  
      },
      {
        firstBind: true,
        lastBind :true, 
        firstArrow : true,
        lastArrow : true,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : false,
        isInitialLast : false,
  
        isVertical : false
  
      },
    ]
    
    
  ]
  return bars[id]
}

export function Decisions(id){
  const decisions = [
    [
    
        {
          firstBind: false,
          secondBind: true,
          thirdBind :true, 
          lastBind :true, 
  
          firstArrow : true,
          secondArrow : true,
          thirdArrow :true,
          lastArrow : true,
  
          isLeftFirst : false,
          isLeftSecond : true,
          isLeftThird :false,
          isLeftLast : false 
        },
        { 
          firstBind: false,
          secondBind: false,
          thirdBind :false, 
          lastBind :false, 
  
          firstArrow : true,
          secondArrow : true,
          thirdArrow :true,
          lastArrow : true,
  
          isLeftFirst : false,
          isLeftSecond : true,
          isLeftThird :false,
          isLeftLast : false 
        }
      ],
      [
        {
          firstBind: false,
          secondBind: false,
          thirdBind :false, 
          lastBind :false, 
  
          firstArrow : true,
          secondArrow : true,
          thirdArrow :true,
          lastArrow : true,
  
          isLeftFirst : false,
          isLeftSecond : true,
          isLeftThird :false,
          isLeftLast : false 
        },
        { 
          firstBind: false,
          secondBind: false,
          thirdBind :false, 
          lastBind :false, 
  
          firstArrow : true,
          secondArrow : true,
          thirdArrow :true,
          lastArrow : true,
  
          isLeftFirst : false,
          isLeftSecond : true,
          isLeftThird :false,
          isLeftLast : false 
        }
      ]
      
    
  ]
  return decisions[id]
}

export function Binds(id){
  const binds = [
    [
      {
        bindDirection: "leftRight",
        description: "encontrar obstáculo",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "leftRight",
        description: "Quando blablablaaaaaaaaaaaaaa2",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "leftBottom",
        description: "Quando blablabla3",
        descPosition: "last",
        isArrow: true,
      },
      {
        bindDirection: "leftRight",
        description: "Quando blablabla4",
        descPosition: "first",
        isArrow: false,
      },
    ],
    [
      {
        bindDirection: "leftRight",
        description: "ccccccccccccc",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "leftRight",
        description: "ddddddddddddddd",
        descPosition: "first",
        isArrow: true,
      },
    ]
  ]
  return binds[id]
}

export function StaticActivity(id){
  const staticActivity = [
    [{name:"Cantar"}, {name:"Gritar"}],
    [{name:"Assobiar"}, {name:"Tagalerar"}]
  ]
  return staticActivity[id]
}


export function ElementsInventory(id){
  const elementsInventory = [
    [{
      id: 'bar',
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
      id: 'bar',
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
      id: 'bar',
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
      id: 'decision',
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
      id: 'ball',
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
      id: 'bind',
      drag: true,
      bindDirection: "leftTop",
      description: "aaa",
      descPosition: "last",
      isArrow: true,
    }],
    [{
      id: 'bar',
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
      id: 'ball',
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
  return elementsInventory[id]
}

export function Activitys(id) {
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

export function Response(id){
  const response = [
      ["Pular", "leftTopaaa", "Correr"],
      ["Andar", "leftTopaaa", "Saltar"]
  ]
  return response[id]
}

export function Tiles(id){
      const tiles = [
          [
              
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","activity","activity","activity","void","void",
              "void","void","ball","staticActivity","staticActivity","void","void",
              "void","void","decision","decision","void","void","void",
              "void","void","bar","bar","void","void","void",
              "void","void","bind","bind","void","void","void",
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

export function elementsActivityModel() {
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

export function bindsModel() {
  const bind = {
    direction: '',
    description: '',
    position: '',
    isArrow: false,
  }

  return bind
}







