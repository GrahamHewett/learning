
function titleCase(str) {
    var wArr = str.toLowerCase().split(' ');
    for (var i = 0; i < wArr.length; i++) {
    wArr[i] = wArr[i].charAt(0).toUpperCase() + wArr[i].substring(1);
}
  return wArr.join(' ');
}

titleCase("I'm a little tea pot");
