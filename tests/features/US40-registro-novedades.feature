Feature: Dejar mi correo para recibir novedades del lanzamiento
  Como visitante del landing page
  Quiero dejar mi correo
  Para enterarme cuando CraveWallet esté disponible

  Scenario: Registro exitoso
    Given que el visitante ingresa un correo con formato válido en el formulario de novedades
    When lo envía
    Then el sistema lo registra y muestra un mensaje de confirmación

  Scenario: Correo con formato inválido
    Given que el visitante ingresa un texto que no tiene formato de correo
    When intenta enviarlo
    Then el sistema no lo registra e indica que el formato no es válido
