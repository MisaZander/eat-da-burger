$(function() {
    $(".devour-it").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        //console.log(id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function() {
            location.reload();
        }); //ajax then
    }); //.devour-it handler

    $("#submitBurger").on("click", function(event) {
        event.preventDefault();
        let burger = $("#newBurger").val().trim();

        if(burger === "") {
            alert("You must enter a value in the burger box.");
            return;
        }
        //console.log("New Burger: " + burger);
        let data = {
            name: burger
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: data
        }).then(function(response) {
            //console.log("New burger was added with id: " + response.id);
            location.reload();
        });
    });
}); //mother function