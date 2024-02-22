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
        };


        //o codigo a seguir vai ficar meio estranho, pois se trata de uma adaptação/incorporação "direta" de uma parte do processamento
        //que ocorria no PHP.

        //garante que a munutenção de estados seja feita apenas no form que fez submit
        $("#" + formData.forma + "Form #nFaces").removeClass("is-invalid");
        $("#" + formData.forma + "Form #nFaces").removeClass("is-valid");
        $("#" + formData.forma + "Form #nFaces-group > #nFaces-erVaz").remove();
        $("#" + formData.forma + "Form #nFaces-group > #nFaces-crVaz").remove();

        $("#" + formData.forma + "Form #nArestas").removeClass("is-invalid");
        $("#" + formData.forma + "Form #nArestas").removeClass("is-valid");
        $("#" + formData.forma + "Form #nArestas-group > #nArestas-erVaz").remove();
        $("#" + formData.forma + "Form #nArestas-group > #nArestas-crVaz").remove();

        $("#" + formData.forma + "Form #nVertices").removeClass("is-invalid");
        $("#" + formData.forma + "Form #nVertices").removeClass("is-valid");
        $("#" + formData.forma + "Form #nVertices-group > #nVertices-erVaz").remove();
        $("#" + formData.forma + "Form #nVertices-group > #nVertices-crVaz").remove();

        $("#" + formData.forma + "Form #somaAngs").removeClass("is-invalid");
        $("#" + formData.forma + "Form #somaAngs").removeClass("is-valid");
        $("#" + formData.forma + "Form #somaAngs-group > #somaAngs-erVaz").remove();
        $("#" + formData.forma + "Form #somaAngs-group > #somaAngs-crVaz").remove();

        
        var resp = [];

        //processamento das informações
        switch (formData.forma) {
            case "tetra":
                resp = [4, 6, 4, 720];
                break;
            case "hexa":
                resp = [6, 12, 8, 2160];
                break;
            case "octa":
                resp = [8, 12, 6, 1440];
                break;
            case "dodec":
                resp = [12, 30, 20, 6480];
                break;
            case "ico":
                resp = [20, 30, 12, 3600];
                break;
        }

        
        var erros = [];
        var acertos = [];
        var data = [];

        //verifica se os campos estão preenchidos e/ou corretos
        if (formData.nFaces != resp[0] && formData.nFaces !== "") {
            erros['nFaces'] = 'Resposta incorreta.';
        }else if(formData.nFaces == resp[0]){
            acertos['nFaces'] = 'Resposta correta.';
        }

        if (formData.nArestas != resp[1] && formData.nArestas !== "") {
            erros['nArestas'] = 'Resposta incorreta.';
        }else if(formData.nArestas == resp[1]){
            acertos['nArestas'] = 'Resposta correta.';
        }

        if (formData.nVertices != resp[2]  && formData.nVertices !== "") {
            erros['nVertices'] = 'Resposta incorreta.';
        }else if(formData.nVertices == resp[2]){
            acertos['nVertices'] = 'Resposta correta.';
        }

        if (formData.somaAngs != resp[3] && formData.somaAngs !== "") {
            erros['somaAngs'] = 'Resposta incorreta.';
        }else if(formData.somaAngs == resp[3]){
            acertos['somaAngs'] = 'Resposta correta.';
        }

        
        //armazena os dados a serem enviados de volta ao JavaScript
        if (erros) {
            data['success'] = false;
            data['erros'] = erros;
            data['forma'] = formData.forma;
            data['acertos'] = acertos;
        } else {
            data['success'] = true;
            data['message'] = 'Success!';
            data['forma'] = formData.forma;
            data['acertos'] = acertos;
        }


        //altera os estados do form que fez o submit
        if (data['erros']) {
            if (data['erros'].nFaces) {
                $("#" + data['forma'] + "Form #nFaces").addClass("is-invalid");
                $("#" + data['forma'] + "Form #nFaces-group").append('<div class="invalid-feedback" id="nFaces-erVaz">' + data['erros'].nFaces + "</div>");
            }

            if (data['erros'].nArestas) {
                $("#" + data['forma'] + "Form #nArestas").addClass("is-invalid");
                $("#" + data['forma'] + "Form #nArestas-group").append('<div class="invalid-feedback" id="nArestas-erVaz">' + data['erros'].nArestas + "</div>");
            }

            if (data['erros'].nVertices) {
                $("#" + data['forma'] + "Form #nVertices").addClass("is-invalid");
                $("#" + data['forma'] + "Form #nVertices-group").append('<div class="invalid-feedback" id="nVertices-erVaz">' + data['erros'].nVertices + "</div>");
            }

            if (data['erros'].somaAngs) {
                $("#" + data['forma'] + "Form #somaAngs").addClass("is-invalid");
                $("#" + data['forma'] + "Form #somaAngs-group").append('<div class="invalid-feedback" id="somaAngs-erVaz">' + data['erros'].somaAngs + "</div>");
            }
        } 

        if (data['acertos']) {
            if (data['acertos'].nFaces) {
                $("#" + data['forma'] + "Form #nFaces").addClass("is-valid");
                $("#" + data['forma'] + "Form #nFaces-group").append('<div class="valid-feedback" id="nFaces-crVaz">' + data['acertos'].nFaces + "</div>");
            }

            if (data['acertos'].nArestas) {
                $("#" + data['forma'] + "Form #nArestas").addClass("is-valid");
                $("#" + data['forma'] + "Form #nArestas-group").append('<div class="valid-feedback" id="nArestas-crVaz">' + data['acertos'].nArestas + "</div>");
            }

            if (data['acertos'].nVertices) {
                $("#" + data['forma'] + "Form #nVertices").addClass("is-valid");
                $("#" + data['forma'] + "Form #nVertices-group").append('<div class="valid-feedback" id="nVertices-crVaz">' + data['acertos'].nVertices + "</div>");
            }

            if (data['acertos'].somaAngs) {
                $("#" + data['forma'] + "Form #somaAngs").addClass("is-valid");
                $("#" + data['forma'] + "Form #somaAngs-group").append('<div class="valid-feedback" id="somaAngs-crVaz">' + data['acertos'].somaAngs + "</div>");
            }
        }

        event.preventDefault();
    });
});