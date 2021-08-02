# GithubAPI

## Project instructions
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

# ES6 functions
## Array.prototype.filter()
```
state.githubCommits.filter( element => element.commit.message.includes(search))
```
The filter() method creates a new array with all elements that pass the test. 
In this case a new array was created. The new array consists of commits where the commit message matches the search input.

