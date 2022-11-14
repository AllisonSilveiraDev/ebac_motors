$(document).ready(function () {
  $("#carrosel-imagens").slick({ autoplay: true });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 0 0000-0000", {
    placeholder: "(__) _ ____-____",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoDeInterrese: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor, insira seu nome!",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos!`);
      }
    },
  });

  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");
    const nomeVeiculo = $(this).parent().find("h3").text();

    $("#veiculo-interrese").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
