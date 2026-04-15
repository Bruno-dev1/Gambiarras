import pyautogui
import time

# Tempo pra você abrir o Google Docs
time.sleep(5)


# Dados da tabela
dados = [
    ["Simbolo", "Nome", "Uso"],
    ["+", "Mais", "Adicao"],
    ["-", "Menos", "Subtracao"],
    ["*", "Asterisco", "Multiplicacao"],
    ["/", "Barra", "Divisao"],
    ["%", "Porcentagem", "Modulo (resto da divisao)"],
    ["=", "Igual", "Atribuicao"],
    ["==", "Igual-Igual", "Comparacao de igualdade"],
    ["!=", "Diferente", "Comparacao de diferenca"],
    [">", "Maior que", "Comparacao"],
    ["<", "Menor que", "Comparacao"],
    [">=", "Maior ou igual", "Comparacao"],
    ["<=", "Menor ou igual", "Comparacao"],
    ["(", "Abre parenteses", "Agrupamento / Parametros"],
    [")", "Fecha parenteses", "Agrupamento / Parametros"],
    ["[", "Abre colchetes", "Acesso a listas"],
    ["]", "Fecha colchetes", "Acesso a listas"],
    [",", "Virgula", "Separador de parametros"],
    [";", "Ponto e virgula", "Fim de instrucao"],
    [" ", "Dois pontos", "Declaracao de tipo"],
    [".", "Ponto", "Separador decimal"],
    ['"', "Aspas duplas", "Delimitador de texto (string)"],
    ["_", "Sublinhado", "Permitido em identificadores"],
    ["#", "Cerquilha", "Comentario de linha"]
]

# Digitar dados
for i, linha in enumerate(dados):
    for j, coluna in enumerate(linha):
        pyautogui.write(coluna)
        
        if j < len(linha) - 1:
            pyautogui.press('tab')  # próxima coluna
    
    if i < len(dados) - 1:
        pyautogui.press('tab')  # próxima linha