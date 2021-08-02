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
The new array consists of commits where the commit message matches the search input.

## Array.prototype.sort()
```
state.githubData.sort(function (a, b) {
    return new Date(b[order]) - new Date(a[order]);
}); 
```
The sort() method sorts the elements of an array in place and returns the sorted array. 
In this case the new array is sorted by date.

