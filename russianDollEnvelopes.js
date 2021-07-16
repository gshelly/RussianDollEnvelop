var env = [[5,4],[6,4],[6,7],[2,3]]
var sortedArray = env.sort((a,b) => a[0] - b[0]) 
console.log(sortedArray)

let dp = new Array(sortedArray.length).fill(1)

function russianDoll() {
  for (i = 1; i < env.length; i++) {
    for (j = 0; j < i; j++) {
      if (sortedArray[i][1] > sortedArray[j][1] && sortedArray[i][0] != sortedArray[j][0] && dp[i] < dp[j] + 1) {
        dp[i] = dp[i] + 1
      }

    }
  }
  let max = Math.max(...dp)
  return max
}
console.log(russianDoll())

//[[2,1],[4,1],[6,2],[8,3],[10,5],[12,8],[14,13],[16,21],[18,34],[20,55]]