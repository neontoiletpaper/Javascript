$(function () {
    $("#sortable").sortable().disableSelection();
});

$(function () {
    var parent = $("#sortable");
    var pics = parent.children();
    while (pics.length) {
        parent.append(pics.splice(Math.floor(Math.random() * pics.length), 1)[0]);
    }
});

