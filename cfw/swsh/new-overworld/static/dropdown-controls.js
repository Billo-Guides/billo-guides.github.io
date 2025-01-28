$("#moisture-select").change(() => {
    let optionValue = $("#moisture-select").val();

    $(".info").addClass("d-none");
    $(".info-" + optionValue).removeClass("d-none");
});