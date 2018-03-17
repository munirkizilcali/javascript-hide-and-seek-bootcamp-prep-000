function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll(`.ranked-list`)
  //const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < ranks[i].children.length; j++) {
      ranks[i].children[j].innerHTML = parseInt(ranks[i].children[j].innerHTML)+n
    }
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