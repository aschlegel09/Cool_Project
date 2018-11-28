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
  event.preventDefault();

  var item = {
    text: $itemText.val().trim(),
    description: $itemDescription.val().trim(),
    duration: $itemDuration.val().trim(),
    category: $itemCategory.val().trim(),
    toDoListItem: $toDoListItem.val().trim(),
    toDoListItem0: $toDoListItem0.val().trim()

  };

  API.saveItem(item).then(function() {
    refreshItems();
  });

  $itemText.val("");
  $itemDescription.val("");
  $itemDuration.val("");
  $itemCategory.val("");
  $toDoListItem.val("");
  $toDoListItem0.val("");


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
  var count = 1;
  $(".addRow").click(function() {
    $("#inputFields").append(
      '<div class="form-group"> <input type="text" id="toDoListItem' +
        count +
        '" class="form-control" placeholder="What else do you want to do?"></div>'
    );
    count++;
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
