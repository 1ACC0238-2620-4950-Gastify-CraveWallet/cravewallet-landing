Feature: Comparar el plan gratuito y el plan Premium
  Como visitante del landing page
  Quiero comparar los planes disponibles
  Para elegir el que se ajusta a mis necesidades

  Scenario: Tabla comparativa
    Given que el visitante llega a la sección de precios del landing page
    When la revisa
    Then ve una tabla comparativa con las funciones del plan gratuito y del plan Premium
    And ve el precio mensual del plan Premium
