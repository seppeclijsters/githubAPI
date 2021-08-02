<template>
  <div class="about">
    <div class="container commits">
      <router-link class="back-button d-flex align-items-center" to="/"><img class="" alt="icon star" width="15" :src="require('@/assets/back.svg')">Go back</router-link>
      <h1>{{ $route.params.id }} commits</h1>
      <div class="search d-flex justify-content-between">
        <div>Total commits <span class="commits__count">{{ countGithubCommits }}</span>  </div>
        <input class="commits__search" type="text" v-model="search" placeholder="Search for commit..." @input="searchData()">
      </div>
      <div class="row d-flex commit__title-container">
        <div class="col-1">ID</div>
        <div class="col-3">Author</div>
        <div class="col-4">Message</div>
        <div class="col-4">Link</div>
      </div>
      <div v-if="search == '' ">
        <div class="row d-flex align-items-center commit__item" v-for="(githubCommit, index) in githubCommits" :key="githubCommit">
          <div class="col-1">{{ index + 1 }}</div>
          <div class="col-3">{{ githubCommit.commit.committer.name }}</div>
          <div class="col-4">{{ githubCommit.commit.message }}</div>
          <div class="col-4"><a class="btn btn-primary" :href="githubCommit.html_url" target="_blank"> Bekijk commit </a></div>
        </div>
      </div>
      <div v-else>
        <div v-if="searchGithubCommits == '' ">
          Sorry, no results found.
        </div>
        <div class="row d-flex align-items-center commit__item" v-for="(githubCommit, index) in searchGithubCommits" :key="githubCommit">
          <div class="col-1">{{ index + 1 }}</div>
          <div class="col-3">{{ githubCommit.commit.committer.name }}</div>
          <div class="col-4">{{ githubCommit.commit.message }}</div>
          <div class="col-4"><a class="btn btn-primary" :href="githubCommit.html_url" target="_blank"> Bekijk commit </a></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  computed: {
    githubData() {
      return this.$store.state.githubData
    },
    githubCommits() {
      return this.$store.state.githubCommits
    },
    searchGithubCommits() {
      return this.$store.state.searchGithubCommits
    },
    countGithubCommits() {
      return this.$store.state.countGithubCommits
    }
  },
 data() {
    return {
      search: ''
    }
  },
  mounted() {

    this.$store.commit('getGithubCommits', this.$route.params.id)
    // let self = this
    console.log(this.$route.params.id)
    // this.repo = this.githubData.find(item => item.id == self.$route.params.id)
  },
  methods: {
    searchData() {
      console.log('zoeken');
      console.log(this.search);
      this.$store.commit('searchInCommits', this.search)
      // var data_filter = data.filter( element => element.website =="yahoo")
      // console.log(data_filter)

    }
  }
}
</script>



<style lang="scss" scoped>

.about {
  padding-top: 30px;
}

.back-button {
  display: inline-block;
  text-decoration: unset;
  color: black;
}

.search {
  padding: 20px 0;
}

.commit__title-container {
  padding: 30px 0;
  border-radius: .4rem;
}

.commit__item {
  background-color: #F8F8FA;
  border-radius: .4rem;
  padding: 30px 0;
  margin-bottom: 1rem;
}

h1 {
  text-transform: capitalize;
}

.commits {
    & .commits__count {
        background-color: #0d6efd4d;
        color: white;
        border-radius: 6px;
        padding: 5px 7px;
        font-size: 11px;
    }

    & .commits__search {
        border: 1px solid #cecdcd;
        width: 300px;
        background-color: #eff1f5;
        padding: 5px 10px;
    }
}

</style>