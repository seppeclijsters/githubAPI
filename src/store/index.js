import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    countRepositories: 5,
    githubData: "",
    githubCommits: "",
    searchGithubCommits: "",
    countGithubCommits: ""
  },
  mutations: {

    getGithubData(state) {
      axios.get('https://api.github.com/users/seppeclijsters/repos')
      .then(function (response) {
        // handle success
        console.log(response);
        state.githubData = response.data
        state.countRepositories = response.data.length
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },
    getGithubCommits(state, name) {
      // let self = this
      axios.get(`https://api.github.com/repos/seppeclijsters/${name}/commits?per_page=20`)
      .then(function (response) {
        // handle success
        console.log(response);
        state.githubCommits = response.data
        state.countGithubCommits = response.data.length
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },

    searchInCommits(state, search) {
      let searchedCommits = state.githubCommits.filter( element => element.commit.message.includes(search))
      state.searchGithubCommits = searchedCommits
      state.countGithubCommits = searchedCommits.length
    },

    orderRepositories(state, order) {
      console.log(`order is: ${order}`)
      // order alphabeticly      
      if (order == "name") {
        state.githubData.sort((a, b) => a[order].localeCompare(b[order]))
      } 
      // order by date    
      else if (order == "pushed_at") {
        state.githubData.sort(function (a, b) {
          return new Date(b[order]) - new Date(a[order]);
        }); 
      }
      // order by count    
      else { 
        state.githubData.sort(function (a, b) {
          return b[order] - a[order];
        });
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
