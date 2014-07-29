function permalink() {
  if (!document.querySelectorAll) {
    return;
  }
  var hs = document.querySelectorAll('.entry-content h2, .entry-content h3, .entry-content h4, .entry-content h5');
  for (var i=0; i < hs.length; i++) {
    (function(item) {
      var link = document.createElement('a');
      link.className = 'title-permalink';
      link.title = 'Permalink to this title';
      link.href = '#' + item.id;
      link.innerHTML = '¶';
      item.appendChild(link);
    })(hs[i]);
  }
}
permalink();
