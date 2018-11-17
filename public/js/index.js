// Get references to page elements

var $itemText = $("#item-text");
var $submitBtn = $("#submit");
var $itemList = $("#item-list");

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

    $exampleList.empty();
    $exampleList.append($items);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var item = {
    text: $itemText.val().trim(),
  };

  if (!(item.text)) {
    alert("You must enter example text!");
    return;
  }

  API.saveItem(item).then(function () {
    refreshItems();
  });

  $exampleText.val("");
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
$itemList.on("click", ".delete", handleDeleteBtnClick);