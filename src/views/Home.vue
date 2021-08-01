<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h1>Your repositories <span class="repository-count">({{ countRepositories }})</span></h1>
      <div>
        <span>Order by:</span> 
        <select @change="order()" v-model="selected">
          <option disabled value="">Please select one</option>
          <option value="name">Alphabetic</option>
          <option value="stargazers_count">Stars</option>
          <option value="forks">Forks</option>
          <option value="pushed_at">Last updated</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-6" v-for="repo in githubData" :key="repo.index">
        <router-link class="repository" :to="{name: 'About',params: { id: repo.name }}">
            <h2 class="repository__title">{{ repo.name }} </h2>
            <div class="d-flex">
              <!-- <div>repo ID: {{ repo.id }}</div> -->
              <div class="respository__item d-flex align-items-center">
                <img class="respository__item__icon" alt="icon star" width="15" :src="require('@/assets/star.svg')">
                <span> {{ repo.stargazers_count }}</span>
              </div>
              <div class="respository__item d-flex align-items-center">
                <img class="respository__item__icon" alt="icon gitfork" width="15" :src="require('@/assets/gitfork.svg')">
                <span> {{ repo.forks }}</span>
              </div>
            </div>
        </router-link>
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
    countRepositories() {
      return this.$store.state.countRepositories
    },
  },
  data() {
    return {
      selected: 'name',
    }
  },
  methods: {
    order() {
      console.log('order changed')
      this.$store.commit('orderRepositories', this.selected)
    }
  }
}
</script>


<style lang="scss" scoped>

.repository-count {
  font-size: 24px;
}

.repository {
  display: block;
  padding: 2rem;
  background-color: #F8F8FA;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-decoration: none;
  border-radius: .4rem;
  transition: all .3s;

  &:hover {
    background-color: #0d6efd14;
    box-shadow: 0 0 11px #afafaf3d; 
  }

  & .repository__title {
    margin-bottom: 15px;
  }

  & .respository__item {
    margin-right: 10px;
    background-color: #0d6efd4d;
    background-color: #0d6efd14;
    padding: 3px 10px;
    border-radius: 5px;

    & .respository__item__icon {
      margin-right: 15px;
    }
  }
}


</style>