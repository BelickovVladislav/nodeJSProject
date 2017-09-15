$(document).ready(function () {
    $('form').on('submit', function () {
        var name = $('#input').val();
        var done = false;
        $.ajax({
            type: "POST",//type, а не method (my bad)
            url: '/api/todos/',
            dataType: "json",
            data: {// data, а не body 
                name: name,
                done: done
            },
            success: function (item) {
                console.log(item);
                $('#todo').append('<li id="' + item.id + '">' + getStrikeText(item) + '</li>')
            }
        });
        return false;
    })

    $('#button').click(function (event) {
        $('form').submit();
    });

    $('#todo').on('click', 'span', function () {
        var li = $(this).parent();
        var id = li.attr('id');
        $.ajax({
            type: "PUT",
            url: "/api/todos/" + id + "/",
            success: function (item) {
                //Аналог innerHTML в JQuery
                $(li).html(getStrikeText(item));
            }
        });
    });

    $('#todo').on('click', '.close', function () {
        var li = $(this).parent();
        var id = li.attr('id');
        $.ajax({
            type: "DELETE",
            url: "/api/todos/" + id + "/",
            success: function (answer) {
                if (answer.message) {
                    //Удаляет текущий элемент из HTML
                    li.remove();
                    alert(answer.message);
                }
            }
        });
    });
});