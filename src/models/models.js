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
  ],
  [{firstBind: false,
    secondBind: false,
    thirdBind :true, 
    lastBind :false, 

    firstArrow : false,
    secondArrow : true,
    thirdArrow :false,
    lastArrow : true,

    isLeftFirst : false,
    isLeftSecond : false,
    isLeftThird :false,
    isLeftLast : false,
    isInitial : true }],
    
    [{firstBind: false,
      secondBind: true,
      thirdBind :false, 
      lastBind :false, 
  
      firstArrow : false,
      secondArrow : true,
      thirdArrow :false,
      lastArrow : true,
  
      isLeftFirst : false,
      isLeftSecond : false,
      isLeftThird :false,
      isLeftLast : false,
      isInitial : false }]

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
    ],
    [
      {
        firstBind: false,
        lastBind :true, 
        firstArrow : true,
        lastArrow : true,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : true,
        isInitialLast : false,
  
        isVertical : true
  
      },
      {
        firstBind: true,
        lastBind :false, 
        firstArrow : true,
        lastArrow : false,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : false,
        isInitialLast : false,
  
        isVertical : true
  
      },
      {
        firstBind: false,
        lastBind :true, 
        firstArrow : true,
        lastArrow : true,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : false,
        isInitialLast : false,
  
        isVertical : true
  
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
        description: "",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "leftRight",
        description: "",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "leftRight",
        description: "",
        descPosition: "first",
        isArrow: false,
      },

    ],
    [
      {
        bindDirection: "leftRight",
        description: "Ligação 1",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "leftRight",
        description: "inimigo encontrado",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "leftRight",
        description: "Ligação 3",
        descPosition: "first",
        isArrow: false,
      },
    ],
    [
      {
        bindDirection: "leftBottom",
        description: "",
        descPosition: "last",
        isArrow: false,
      },

      {
        bindDirection: "bottomTop",
        description: "usuário existe",
        descPosition: "first",
        isArrow: true,
      },

      {
        bindDirection: "topBottom",
        description: "",
        descPosition: "first",
        isArrow: false,
      },
      {
        bindDirection: "leftRight",
        description: "",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "topBottom",
        description: "usuário não existe",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "bottomTop",
        description: "",
        descPosition: "first",
        isArrow: false,
      },
      {
        bindDirection: "leftTop",
        description: "",
        descPosition: "last",
        isArrow: false,
      },
      {
        bindDirection: "bottomTop",
        description: "Ligação 7",
        descPosition: "first",
        isArrow: true,
      }
    ],
    [
      {
        bindDirection: "leftRight",
        description: "",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "leftRight",
        description: "",
        descPosition: "first",
        isArrow: false,
      },
      {
        bindDirection: "leftRight",
        description: "",
        descPosition: "first",
        isArrow: true,
      },
      {
        bindDirection: "leftRight",
        description: "",
        descPosition: "first",
        isArrow: false,
      },
    ]
  ]
  return binds[id]
}

export function StaticActivity(id){
  const staticActivity = [
    [{name:"Verificar diagrama"}, {name:"Pontuar diagrama"}],
    [{name:"Pular"}, {name:"Atividade S2"}],
    [{name:""}], 
    [{name:"Static 1", name:"Static 2"}],
  ]
  return staticActivity[id]
}


export function ElementsInventory(id){
  const elementsInventory = [
    [
    {
      id: 'ball',
      drag: true,
      firstBind: false,
      secondBind: false,
      thirdBind: true,
      lastBind: false,
      firstArrow: false,
      secondArrow: false,
      thirdArrow:false,
      lastArrow: false,
      isLeftFirst: true,
      isLeftSecond: true,
      isLeftThird: false,
      isLeftLast: true,
      isInitialFirst: true,
      isInitialLast: true,
      isInitial: true,
    },
    {
      id: 'ball',
      drag: true,
      firstBind: false,
      secondBind: true,
      thirdBind: false,
      lastBind: false,
      firstArrow: false,
      secondArrow: true,
      thirdArrow: true,
      lastArrow: true,
      isLeftFirst: true,
      isLeftSecond: false,
      isLeftThird: true,
      isLeftLast: true,
      isInitialFirst: true,
      isInitialLast: true,
      isInitial: false,
    },
 ],
    [
      {
        id: 'ball',
        drag: true,
        firstBind: false,
        secondBind: true,
        thirdBind: false,
        lastBind: false,
        firstArrow: false,
        secondArrow: true,
        thirdArrow: true,
        lastArrow: true,
        isLeftFirst: true,
        isLeftSecond: false,
        isLeftThird: true,
        isLeftLast: true,
        isInitialFirst: true,
        isInitialLast: true,
        isInitial: false,
      },
      {
        id: 'ball',
        drag: true,
        firstBind: false,
        secondBind: true,
        thirdBind: false,
        lastBind: false,
        firstArrow: false,
        secondArrow: true,
        thirdArrow: true,
        lastArrow: true,
        isLeftFirst: true,
        isLeftSecond: false,
        isLeftThird: true,
        isLeftLast: true,
        isInitialFirst: true,
        isInitialLast: true,
        isInitial: false,
      },
      {
        id: 'ball',
        drag: true,
        firstBind: false,
        secondBind: false,
        thirdBind: true,
        lastBind: false,
        firstArrow: false,
        secondArrow: false,
        thirdArrow:false,
        lastArrow: false,
        isLeftFirst: true,
        isLeftSecond: true,
        isLeftThird: false,
        isLeftLast: true,
        isInitialFirst: true,
        isInitialLast: true,
        isInitial: true,
      },
    ],
    [
      {
        id:'decision',
        drag: true,
        firstBind: true,
        secondBind: true,
        thirdBind: false,
        lastBind: true,
        firstArrow: false,
        secondArrow: true,
        thirdArrow:false,
        lastArrow: false,
        isLeftFirst: false,
        isLeftSecond: true,
        isLeftThird: false,
        isLeftLast: false,
      },
      {
        id: 'ball',
        drag: true,
        firstBind: true,
        secondBind: false,
        thirdBind: false,
        lastBind: true,
        firstArrow: true,
        secondArrow: false,
        thirdArrow:false,
        lastArrow: true,
        isLeftFirst: false,
        isLeftSecond: true,
        isLeftThird: false,
        isLeftLast: false,
        isInitialFirst: true,
        isInitialLast: true,
        isInitial: false,
      },
      {
        id: 'ball',
        drag: true,
        firstBind: false,
        secondBind: true,
        thirdBind: false,
        lastBind: false,
        firstArrow: false,
        secondArrow: true,
        thirdArrow:false,
        lastArrow: false,
        isLeftFirst: true,
        isLeftSecond: true,
        isLeftThird: false,
        isLeftLast: true,
        isInitialFirst: true,
        isInitialLast: true,
        isInitial: true,
      },
    ],
    [
      {
        id: 'bar',
        firstBind: true,
        lastBind :false, 
        firstArrow : true,
        lastArrow : false,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : true,
        isInitialLast : false,
        drag: true,
        isVertical : true
  
      },
      {
        id: 'bar',
        firstBind: true,
        lastBind :true, 
        firstArrow : true,
        lastArrow : false,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : true,
        isInitialLast : true,
        drag: true,
        isVertical : false
  
      },
      {
        id: 'ball',
        drag: true,
        firstBind: false,
        secondBind: false,
        thirdBind: true,
        lastBind: false,
        firstArrow: false,
        secondArrow: true,
        thirdArrow:false,
        lastArrow: false,
        isLeftFirst: true,
        isLeftSecond: true,
        isLeftThird: false,
        isLeftLast: true,
        isInitialFirst: true,
        isInitialLast: true,
        isInitial: true,
      },
      {
        id:'decision',
        drag: true,
        firstBind: true,
        secondBind: false,
        thirdBind: false,
        lastBind: true,
        firstArrow: false,
        secondArrow: true,
        thirdArrow:false,
        lastArrow: false,
        isLeftFirst: false,
        isLeftSecond: true,
        isLeftThird: false,
        isLeftLast: false,
      },

      {
        id: 'ball',
        drag: true,
        firstBind: false,
        secondBind: false,
        thirdBind: true,
        lastBind: false,
        firstArrow: false,
        secondArrow: false,
        thirdArrow:false,
        lastArrow: false,
        isLeftFirst: true,
        isLeftSecond: true,
        isLeftThird: false,
        isLeftLast: true,
        isInitialFirst: true,
        isInitialLast: true,
        isInitial: false,
      },
      {
        id: 'bar',
        firstBind: false,
        lastBind :true, 
        firstArrow : true,
        lastArrow : false,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : true,
        isInitialLast : true,
        drag: true,
        isVertical : true
  
      },
      {
        id: 'bar',
        firstBind: true,
        lastBind :false, 
        firstArrow : true,
        lastArrow : false,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : true,
        isInitialLast : false,
        drag: true,
        isVertical : false
  
      },
      {
        id: 'bar',
        firstBind: true,
        lastBind: false, 
        firstArrow : true,
        lastArrow : false,
        isLeftFirst : false,
        isLeftLast : false, 
        isInitialFirst : true,
        isInitialLast : true,
        drag: true,
        isVertical : true
  
      },

    ]
  ]
  return elementsInventory[id]
}

export function Activitys(id) {
  const activitys = [
    [
    ],
    [
      'Correr',
      'Atividade 2',
      'Atividade 3'
    ],
    [
      'Deletar dados',
      'Atualizar cadastro',
      'Criar usuário',
      'Baixar dados',
      'Procurar dados'
  ],
  ['Atv 1', 'Atv 2', 'Atv 3', 'Atv 4']
  ]
  return activitys[id]
}

export function Response(id){
  const response = [
      ["initialBall", "finalBall"],
      ["initialBall", "Correr", "finalBall"],
      ["Atualizar cadastro", "Procurar dados", "decision", "finalBall","Criar usuário"],
      [""]
  ]
  return response[id]
}

export function Tiles(id){
      const tiles = [
          [
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "activity","bind","staticActivity","bind","staticActivity","bind","activity",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
              "void","void","void","void","void","void","void",
          ],
          [
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "activity", "bind", "activity", "bind", "staticActivity","bind","activity",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
          ],
          [
            "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "activity", "bind","void","void",
              "void", "void", "void", "bind", "bind","void","void",
              "ball", "bind", "activity", "activity", "activity","void","void",
              "void", "void", "void", "bind", "bind","void","void",
              "void", "void", "void", "activity", "bind","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
          ],
          [
            "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "void", "void", "void", "void","void","void",
              "void", "bar", "bind", "staticActivity", "bind","activity","void",
              "activity", "bar", "void", "void", "void","activity","ball",
              "void", "bar", "bind", "activity", "bind","activity","void",
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







