function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll(`.ranked-list li`)
  //const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerText = parseInt(ranks[i].innerText)+n
  }
}

function deepestChild() {
  var current = document.querySelector("#grand-node")
  var next = current
while (next.childElementCount) {
    current = next
    next = next.children[0]
  }
  return next
}