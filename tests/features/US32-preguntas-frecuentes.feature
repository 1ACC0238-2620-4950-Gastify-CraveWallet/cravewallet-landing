Feature: Consultar preguntas frecuentes en el landing page
  Como visitante del landing page
  Quiero consultar las preguntas frecuentes
  Para resolver mis dudas antes de descargar la aplicación

  Scenario: Consulta de una pregunta
    Given que el visitante está en la sección de preguntas frecuentes
    When selecciona una pregunta
    Then la página despliega la respuesta correspondiente
