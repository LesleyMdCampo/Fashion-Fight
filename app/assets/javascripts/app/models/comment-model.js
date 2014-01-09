(function () {

  var getIdIndexOf = function (array, id) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i].id === id) {
        return i;
      }
    }
    return -1;
  };

  window.Comment = function () {
    var comments = [];

    $.observable(this);

    this.create = function (newComment) {
      var self = this;
      $.post(g.contestCommentsUrl, newComment, function (){
        comments.push(newComment);
        self.trigger('create', newComment);
      });
    };

    this.filterBySide =  function (side) {
      var results = [];
      for (var i = 0; i < comments.length; i += 1) {
        var currentItem = comments[i];
        if (currentItem.side == side) {
          results.push(currentItem);
        }
      }
      return results;
    };

    this.delete = function (id) {
      var index = getIdIndexOf(comments, id);
      console.log(index);
      var comment = comments[index];
      comments.splice(index, 1);
      this.trigger("delete", comment.id);
    }

    this.initializeWith = function (initialComments) {
      for (var i = 0; i < initialComments.length; i += 1) {
        var c = initialComments[i];
        comments.push(c);
        this.trigger('create', c);
      }
    }

  };

})();
