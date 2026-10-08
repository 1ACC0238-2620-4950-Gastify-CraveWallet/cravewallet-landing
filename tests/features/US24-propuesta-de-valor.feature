Feature: Ver la propuesta de valor de CraveWallet
  Como visitante del landing page
  Quiero entender qué problema resuelve CraveWallet
  Para decidir si descargo la aplicación

  Scenario: Primera visita
    Given que un visitante entra al landing page
    When la página carga
    Then el sistema muestra el problema de los cobros automáticos no anticipados
    And muestra la propuesta de valor de CraveWallet
    And muestra los enlaces de descarga para Android e iOS
