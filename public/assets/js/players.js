// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".create-profile").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPlayer = {
      FirstName: $("#first-name").val().trim(),
      LastName: $("#last-name").val().trim(),
      UserName: $("#username").val().trim(),
      UserPassword: $("#password").val().trim(),
      Email: $("#email").val().trim(),
      Address: $("#Address").val().trim(),
      CityName: $("#City").val().trim(),
      State: $("#State option:selected").text(),
      ZipCode: $("#Zip").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/players", {
      type: "POST",
      data: newPlayer
    }).then(
      function () {
        console.log("created new player");
        // Reload the page to get the updated list
        // location.reload();
        location.href = "/"
      }
    );
  });
});
