(function () {

  window.CommentWall = function (options) {

    var commentTemplate = $('#templates .comment').html();
    var $root = options.root;
    var comments = options.comments;

    comments.on('create', function (newComment) {
      var newHtml = $.render(commentTemplate, newComment);
      $root.append(newHtml);
    });

    comments.on('delete', function (id) {
      $root.find('[data-id=' + id + ']').remove();
      console.log(id);
    });

    $root.on('click', '.delete', function (e) {
      e.preventDefault(); 
      var obj = $root.find('.row').data(id);
      var id = obj.id;
      comments.delete(id);
    });
  };


})();
