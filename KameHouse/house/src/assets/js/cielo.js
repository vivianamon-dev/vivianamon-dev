var mudaDia = function mudaDia() {
    // se é noite
    if ($(".switch.dia-noite input").prop("checked")) {
      $(
        "body, .lampada, .predio-normal-1, .predio-normal-2, .predio-normal-3"
      ).addClass("noite");
      $(".estrelas-wrapper").removeClass("hidden");
      // se não tá chovendo
      if (!$(".switch.sol-chuva input").prop("checked")) {
        colocaEstrelas();
        $(".nuvem-wrapper").addClass("hidden");
      } else $(".estrelas-wrapper").empty();
  
      // se é dia
    } else {
      $(".nuvem-wrapper").removeClass("hidden");
      $(
        "body, .lampada, .predio-normal-1, .predio-normal-2, .predio-normal-3"
      ).removeClass("noite");
      $(".estrelas-wrapper").addClass("hidden");
    }
  };
  
  var mudaChuva = function mudaChuva() {
    // se tá chovendo
    if ($(".switch.sol-chuva input").prop("checked")) {
      $(".nuvem-wrapper, .chuva-wrapper").removeClass("hidden");
      $(".nuvem").addClass("chovendo");
      if ($(".switch.dia-noite input").prop("checked"))
        $(".estrelas-wrapper").empty();
  
      // se não tá chovendo
    } else {
      // se é noite
      if ($(".switch.dia-noite input").prop("checked")) {
        colocaEstrelas();
        $(".nuvem-wrapper").addClass("hidden");
      }
      $(".chuva-wrapper").addClass("hidden");
      $(".nuvem").removeClass("chovendo");
    }
  };
  
  var colocaEstrelas = function colocaEstrelas() {
    /* criando estrelas */
    for (i = 0; i < 100; i++)
      $(".estrelas-wrapper").append("<div class='estrelas s" + i + "'></div>");
  };
  
  $(function () {
    $(".switch").on("click", function () {
      if ($(this).hasClass("dia-noite")) mudaDia();
      else mudaChuva();
    });
  
    /* criando chuva */
    for (i = 0; i <= 100; i++)
      $(".chuva-wrapper").append("<div class='chuva chuva-" + i + "'></div>");
  
    $(".nuvem").on("click", function () {
      $(this).toggleClass("pao");
    });
  });