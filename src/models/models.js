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

        
      
        
        
        

