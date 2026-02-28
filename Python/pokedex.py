import requests

def buscar_pokemon(nome):
    url = f"https://pokeapi.co/api/v2/pokemon/{nome.lower()}"
    resposta = requests.get(url)

    if resposta.status_code == 200:
        dados = resposta.json()

        print("\n=== POKÉDEX ===")
        print("Nome:", dados["name"].capitalize())
        print("Altura:", dados["height"])
        print("Peso:", dados["weight"])

        print("Tipos:")
        for tipo in dados["types"]:
            print("-", tipo["type"]["name"])
    else:
        print("Pokémon não encontrado!")

while True:
    nome = input("\nDigite o nome do Pokémon (ou 'sair'): ")

    if nome.lower() == "sair":
        break

    buscar_pokemon(nome)