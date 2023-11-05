//https://www.digitalocean.com/community/tutorials/submitting-ajax-forms-with-jquery
$(document).ready(function () {
    $("form").on("submit", function (event) {
        var formData = {
            //garante que está pegando os atributos do form que fez o submit, e não do primeiro que aparece na pagina
            nFaces: $("#" + event.originalEvent.target.id + " #nFaces").val(),
            nArestas: $("#" + event.originalEvent.target.id + " #nArestas").val(),
            nVertices: $("#" + event.originalEvent.target.id + " #nVertices").val(),
            somaAngs: $("#" + event.originalEvent.target.id + " #somaAngs").val(),
            forma: $("#" + event.originalEvent.target.id + " #forma").val(),
            opni: $("#" + event.originalEvent.target.id + " #opni").val(),

            //retorna qual botão de submit foi uzado
            botao: event.originalEvent.submitter.name,
        };

        //console.log(event.originalEvent.submitter.name);

        $.ajax({
            type: "POST",
            url: "processa.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            console.log(data);

            //garante que a munutenção de estados seja feita apenas no form que fez submit
            $("#" + data.forma + "Form #nFaces").removeClass("is-invalid");
            $("#" + data.forma + "Form #nFaces").removeClass("is-valid");
            $("#" + data.forma + "Form #nFaces-group > #nFaces-erVaz").remove();

            $("#" + data.forma + "Form #nArestas").removeClass("is-invalid");
            $("#" + data.forma + "Form #nArestas").removeClass("is-valid");
            $("#" + data.forma + "Form #nArestas-group > #nArestas-erVaz").remove();

            $("#" + data.forma + "Form #nVertices").removeClass("is-invalid");
            $("#" + data.forma + "Form #nVertices").removeClass("is-valid");
            $("#" + data.forma + "Form #nVertices-group > #nVertices-erVaz").remove();

            $("#" + data.forma + "Form #somaAngs").removeClass("is-invalid");
            $("#" + data.forma + "Form #somaAngs").removeClass("is-valid");
            $("#" + data.forma + "Form #somaAngs-group > #somaAngs-erVaz").remove();

            //altera os estados do form que fez o submit
            if (data.botao == "enviar") {
                console.log("enviar");
                if (data.errors) {
                    if (data.errors.nFaces) {
                        $("#" + data.forma + "Form #nFaces").addClass("is-invalid");
                        $("#" + data.forma + "Form #nFaces-group").append('<div class="invalid-feedback" id="nFaces-erVaz">' + data.errors.nFaces + "</div>");
                    } else {
                        $("#" + data.forma + "Form #nFaces").addClass("is-valid");
                    }

                    if (data.errors.nArestas) {
                        $("#" + data.forma + "Form #nArestas").addClass("is-invalid");
                        $("#" + data.forma + "Form #nArestas-group").append('<div class="invalid-feedback" id="nArestas-erVaz">' + data.errors.nArestas + "</div>");
                    } else {
                        $("#" + data.forma + "Form #nArestas").addClass("is-valid");
                    }

                    if (data.errors.nVertices) {
                        $("#" + data.forma + "Form #nVertices").addClass("is-invalid");
                        $("#" + data.forma + "Form #nVertices-group").append('<div class="invalid-feedback" id="nVertices-erVaz">' + data.errors.nVertices + "</div>");
                    } else {
                        $("#" + data.forma + "Form #nVertices").addClass("is-valid");
                    }

                    if (data.errors.somaAngs) {
                        $("#" + data.forma + "Form #somaAngs").addClass("is-invalid");
                        $("#" + data.forma + "Form #somaAngs-group").append('<div class="invalid-feedback" id="somaAngs-erVaz">' + data.errors.somaAngs + "</div>");
                    } else {
                        $("#" + data.forma + "Form #somaAngs").addClass("is-valid");
                    }
                } else {
                    $("#" + data.forma + "Form #nFaces").addClass("is-valid");
                    $("#" + data.forma + "Form #nArestas").addClass("is-valid");
                    $("#" + data.forma + "Form #nVertices").addClass("is-valid");
                    $("#" + data.forma + "Form #somaAngs").addClass("is-valid");
                }
            }
            else if (data.botao == "corrigir") {
                console.log("corrigir");

                if (data.errors) {
                    if (data.errors.nFaces) {
                        $("#" + data.forma + "Form #nFaces").addClass("is-invalid");
                        $("#" + data.forma + "Form #nFaces-group").append('<div class="invalid-feedback" id="nFaces-erVaz">' + data.errors.nFaces + "</div>");
                    }

                    if (data.errors.nArestas) {
                        $("#" + data.forma + "Form #nArestas").addClass("is-invalid");
                        $("#" + data.forma + "Form #nArestas-group").append('<div class="invalid-feedback" id="nArestas-erVaz">' + data.errors.nArestas + "</div>");
                    }

                    if (data.errors.nVertices) {
                        $("#" + data.forma + "Form #nVertices").addClass("is-invalid");
                        $("#" + data.forma + "Form #nVertices-group").append('<div class="invalid-feedback" id="nVertices-erVaz">' + data.errors.nVertices + "</div>");
                    }

                    if (data.errors.somaAngs) {
                        $("#" + data.forma + "Form #somaAngs").addClass("is-invalid");
                        $("#" + data.forma + "Form #somaAngs-group").append('<div class="invalid-feedback" id="somaAngs-erVaz">' + data.errors.somaAngs + "</div>");
                    }
                } 

                if (data.acertos) {
                    if (data.acertos.nFaces) {
                        $("#" + data.forma + "Form #nFaces").addClass("is-valid");
                    }

                    if (data.acertos.nArestas) {
                        $("#" + data.forma + "Form #nArestas").addClass("is-valid");
                    }

                    if (data.acertos.nVertices) {
                        $("#" + data.forma + "Form #nVertices").addClass("is-valid");
                    }

                    if (data.acertos.somaAngs) {
                        $("#" + data.forma + "Form #somaAngs").addClass("is-valid");
                    }
                }
            }



        });
        event.preventDefault();
    });
});