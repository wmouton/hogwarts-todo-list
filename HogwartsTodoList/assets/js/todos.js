//check off specific todo on click
$("ul").on("click","li", function() {
    $(this).toggleClass("completed");   //class 'completed' called from a css file
});

//click on X to delete a todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event) {
    if(event.which === 13) {
        var todoText = $(this).val();               //grabbing new todo text from input
        $(this).val("");
        $("ul").append("<li><span><i>x</i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function() {
    $("input[type='text'").fadeToggle();
});
