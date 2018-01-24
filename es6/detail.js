// import $ from 'expose?$!jquery'

var $ = require('jquery');


require('jquery-modal');
$("#dd").modal({
  escapeClose: false,
  clickClose: false,
  showClose: false
});
    //     $("#add").click(function() {
    //         var branches = $("<li><span class='folder'>New Sublist</span><ul>" + 
    //             "<li><span class='file'>Item1</span></li>" + 
    //             "<li><span class='file'>Item2</span></li></ul></li>").appendTo("#browser");
    //         $("#browser").treeview({
    //             add: branches
    //         });
    //         branches = $("<li class='closed'><span class='folder'>New Sublist</span><ul><li><span class='file'>Item1</span></li><li><span class='file'>Item2</span></li></ul></li>").prependTo("#folder21");
    //         $("#browser").treeview({
    //             add: branches
    //         });
    //     });
    // });