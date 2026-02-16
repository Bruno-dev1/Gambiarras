alunos = [
    {"nome": "Bruno", "nota": 8.5, "faltas": 2},
    {"nome": "Angelina", "nota": 9.0, "faltas": 1},
    {"nome": "Pablo", "nota": 7.5, "faltas": 3}
]
media = 0
for aluno in alunos:
    media += aluno["nota"]
resultado = media / len(alunos)
print(round(resultado))



