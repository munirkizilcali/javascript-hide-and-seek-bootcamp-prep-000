function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  var current = document.querySelector("#grand-node")
  var next = current

  while (Boolean(next.childElementCount)) {

    current = next
    next = next.children[0]
  }
  return next
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll(".ranked-list")
    for (let li = 0; li < rankedLists.length; li++){
      for (let item = 0; item < rankedLists[li].children.length; item++) {
        rankedLists[li].children[item].innerHTML = parseInt(rankedLists[li].children[item].innerHTML) + n
      }
    }
  
}