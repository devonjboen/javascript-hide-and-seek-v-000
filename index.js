function getFirstSelector(selector) {
  var select = document.querySelector(selector);
  return select;
}

function nestedTarget() {
  var target = document.querySelector('#nested .target');
  return target;
}

function deepestChild() {
var grand = document.querySelector('#grand-node div div div div');
return grand;
}


function increaseRankBy(n) {
const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(i + n);
  }
}
