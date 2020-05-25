function sprawdzZgodnosc() {
    tekst1 = $("#poleTekstowe1").val();
    tekst2 = $("#poleTekstowe2").val();

    if (tekst1 == tekst2) {
        $("#poleTekstowe3").val(' ');
        $("#poleTekstowe3").val("Tekst jest zgodny");
    } else {
        $("#poleTekstowe3").val(' ');
        $("#poleTekstowe3").val("Tekst nie jest zgodny");
    }
}

function licz() {
    val1 = +$("#poleTekstowe4").val();
    val2 = +$("#poleTekstowe5").val();

    if (!isNaN(val1) && !isNaN(val2)) {
        $("#poleTekstowe6").val(' ');
        $("#poleTekstowe6").val((val1 + val2))
    }
}

function DodajParagraf() {
    element = $("<p></p>").css("backgroundColor", $("#poleTekstowe8").val());
    $("body").append(element.text($("#poleTekstowe7").val()));


}