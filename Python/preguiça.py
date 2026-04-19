import pyautogui
import time

time.sleep(5)

titulos = [
    "Operadores",
    "Gramática Detalhada",
    "Descrição Detalhada das Estruturas (parte Samuel)",
    "Estruturas de Decisão",
    "Estruturas de Repetição",
    "Registros (Estruturas de Dados Compostas)",
    "Listas",
    "Funções",
    "Exemplo Prático: Sistema de Notas Escolares",
    "Análise do Exemplo Prático",
    "Estruturas Utilizadas no Exemplo",
    "Fluxo do Programa",
    "Conclusão"
]

for titulo in titulos:
    pyautogui.write(titulo)
    pyautogui.press("enter")
    time.sleep(0.3)