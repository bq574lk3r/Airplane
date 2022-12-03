gallery.onclick = function(event) {
    let thumbnail = event.target.closest('a');

    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
  }
  //show img
  function showThumbnail(href, title) {
    largeImg.src = href;
  }