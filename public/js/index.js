// Get references to page elements

console.log("help me");

var $itemText = $("#item-text");
var $itemDescription = $("#description");
var $itemCategory = $("#category");
var $itemDuration = $("#duration");
var $addRow = $('.addRow')
var $submitBtn = $("#submitBtn");
var $toDoListItem = $("#toDoListItem");

// The API object contains methods for each kind of request we'll make
var API = {
  saveItem: function (item) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/items",
      data: JSON.stringify(item)
    });
  },
  getItems: function () {
    return $.ajax({
      url: "/api/items",
      type: "GET"
    });
  },
  deleteItem: function (id) {
    return $.ajax({
      url: "/api/items/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshItems = function () {
  API.getItems().then(function (data) {
    var $items = data.map(function (item) {
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

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();
  console.log("handle form button yea");
  var item = {
    text: $itemText.val().trim(),
    description: $itemDescription.val().trim(),
    duration: $itemDuration.val().trim(),
    category: $itemCategory.val().trim(),
    toDoListItem: $toDoListItem.val().trim()
  };
  console.log("item: ", item);

  API.saveItem(item).then(function () {
    refreshItems();
  });

  $itemText.val("");
  $itemDescription.val("");
  $itemDuration.val("");
  $itemCategory.val("");
  $toDoListItem.val("");
};




// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteItem(idToDelete).then(function () {
    refreshItems();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$toDoListItem.on("click", ".delete", handleDeleteBtnClick);

// $addRow.on("click", function() {
//  $("#inputFields").append("<div class='form-group'><input type='text' id="toDoListItem'+count+'" class='form-control' aria-describedby='title' placeholder='What else do you want to do?'></div>"); 
// });

$(function(){
  var count = 0;
  $('.addRow').click(function(){
    $('#inputFields').append('<div class="form-group"> <input type="text" id="toDoListItem'+count+'" class="form-control" placeholder="What else do you want to do?"></div>');
    count++;
    // Test that count variable is working
    // console.log(count);
  });
});