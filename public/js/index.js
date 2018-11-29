// References to page elements
var $itemText = $("#item-text");
var $itemDescription = $("#description");
var $itemCategory = $("#category");
var $itemDuration = $("#duration");
var $addRow = $(".addRow");
var $submitBtn = $("#submitBtn");
var $itemList = $("#item-list");
var $toDoListItem = $("#toDoListItem");
var $toDoListItem0 = $("#toDoListItem0");
var $toDoListItem1 = $("#toDoListItem1");
var $toDoListItem2 = $("#toDoListItem2");
var $toDoListItem3 = $("#toDoListItem3");
var $toDoListItem4 = $("#toDoListItem4");
var $toDoListItem5 = $("#toDoListItem5");
var $toDoListItem6 = $("#toDoListItem6");
var $toDoListItem7 = $("#toDoListItem7");
var $toDoListItem8 = $("#toDoListItem8");
var $toDoListItem9 = $("#toDoListItem9");
var $toDoListItem10 = $("#toDoListItem10");
var $toDoListItem11 = $("#toDoListItem11");
var $toDoListItem12 = $("#toDoListItem12");
var $toDoListItem13 = $("#toDoListItem13");
var $toDoListItem14 = $("#toDoListItem14");
var $toDoListItem15 = $("#toDoListItem15");
var $toDoListItem16 = $("#toDoListItem16");
var $toDoListItem17 = $("#toDoListItem17");
var $toDoListItem18 = $("#toDoListItem18");
var $toDoListItem19 = $("#toDoListItem19");
var $toDoListItem20 = $("#toDoListItem20");





// The API object contains methods for each kind of request we'll make
var API = {
  saveItem: function(item) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/items",
      data: JSON.stringify(item)
    });
  },
  getItems: function() {
    return $.ajax({
      url: "/api/items",
      type: "GET"
    });
  },
  deleteItem: function(id) {
    return $.ajax({
      url: "/api/items/" + id,
      type: "DELETE"
    });
  }
};

// refreshItems gets new items from the db and repopulates the list
var refreshItems = function() {
  API.getItems().then(function(data) {
    var $items = data.map(function(item) {
      var $a = $("<a>")
        .text(item.text)
        .attr("href", "/item/" + item.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": item.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $itemList.empty();
    $itemList.append($items);
  });
};

// handleFormSubmit is called whenever we submit a new list
// Save the new list to the db and refresh the list
var handleFormSubmit = function(event) {
  console.log("hello");
  
  event.preventDefault();
  
  var item = {
    text: $itemText.val().trim(),
    description: $itemDescription.val().trim(),
    duration: $itemDuration.val().trim(),
    category: $itemCategory.val().trim(),
    toDoListItem: $toDoListItem.val().trim(),
    toDoListItem0: ($("#toDoListItem0").val()),
    toDoListItem1: ($("#toDoListItem1").val()),
    toDoListItem2: ($("#toDoListItem2").val()),
    toDoListItem3: ($("#toDoListItem3").val()),
    toDoListItem4: ($("#toDoListItem4").val()),
    toDoListItem5: ($("#toDoListItem5").val()),
    toDoListItem6: ($("#toDoListItem6").val()),
    toDoListItem7: ($("#toDoListItem7").val()),
    toDoListItem8: ($("#toDoListItem8").val()),
    toDoListItem9: ($("#toDoListItem9").val()),
    toDoListItem10: ($("#toDoListItem10").val()),
    toDoListItem11: ($("#toDoListItem11").val()),
    toDoListItem12: ($("#toDoListItem12").val()),
    toDoListItem13: ($("#toDoListItem13").val()),
    toDoListItem14: ($("#toDoListItem14").val()),
    toDoListItem15: ($("#toDoListItem15").val()),
    toDoListItem16: ($("#toDoListItem16").val()),
    toDoListItem17: ($("#toDoListItem17").val()),
    toDoListItem18: ($("#toDoListItem18").val()),
    toDoListItem19: ($("#toDoListItem19").val()),
    toDoListItem20: ($("#toDoListItem20").val())



    
  };
  
  // console.log($toDoListItem.val().trim());
  // console.log($toDoListItem0.val().trim());
  // console.log($("#toDoListItem1").val().trim());


  API.saveItem(item).then(function() {
    refreshItems();
  });

  $itemText.val("");
  $itemDescription.val("");
  $itemDuration.val("");
  $itemCategory.val("");
  $toDoListItem.val("");
  $toDoListItem0.val("");
  $toDoListItem1.val("");


};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteItem(idToDelete).then(function() {
    refreshItems();
  });
};

// Logic for adding another row for items
$(function() {
  var count = 0;
  $(".addRow").click(function() {
    count++;
    var placeAfter = "#toDoListItem" + (count-1);
    console.log(placeAfter);
    $('<input>', { class: 'toDoListItem form-control', id: "toDoListItem" + count, type: 'text', name: 'info[]', placeholder: 'Climb another mountain' }).insertAfter(placeAfter);
    // Test that count variable is working
    console.log(count);
  });
});

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$itemList.on("click", ".delete", handleDeleteBtnClick);

$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $(".scrollToTop:hidden")
      .stop(true, true)
      .fadeIn();
  } else {
    $(".scrollToTop")
      .stop(true, true)
      .fadeOut();
  }
});
$(function() {
  $(".scroll").click(function() {
  console.log("clicked");
    $("html, body").animate({ scrollTop: $(".navbar").offset().top }, "1000");
    return false;
  });
});


