const app = Vue.createApp({

    data: function() {
  
      return {
  
        newGame: "",
        idForGame: 4,
        games: [
          {
            id: 1,
            name: 'Red Dead Redemption 2',
            completed: false
          },
  
          {
            id: 2,
            name: 'The Last Of Us 2',
            completed: false
          },

          {
            id: 3,
            name: 'Ghost Of Tsushima',
            completed: false
          }
      ]
      } 
    },

    created: function () {

      const games = localStorage.getItem('games')

      if (games) {
        this.games = JSON.parse(games)
      }
    },

    methods: {

        
        addGame: function () {

            if(this.newGame.trim().length == 0) {
                return
            }

            this.games.push ({

               id: this.idForGame,
               name: this.newGame,
               completed: false

            })

            this.newGame= '',
            this.idForGame++
        },

        removeGame: function(index) {

            this.games.splice(index, 1)

        }
    },

    computed: {

        remaining: function () {

            return this.games.filter(game => !game.completed).length
        }
    },

    watch: {

      games: {

        deep: true,

        handler: function (games) {

          localStorage.setItem('games', JSON.stringify(games))
        }
      }
    }
  })
  
  const vm = app.mount('#app')