class Ventilador:
    def __init__(self, preco, marca):
        self.preco = preco
        self.marca = marca

    def __str__(self) -> str:
        return f"o ventilador da marca {self.marca} custa {self.preco}"


class Pessoa:
    def __init__(self, nome, saldo_bancario) -> None:
        self.nome = nome
        self.saldo_bancario = saldo_bancario
        self.ventilador = None

    def __str__(self) -> str:
        if self.ventilador is None:
            return f"{self.nome} nao possui um ventilador"
        return f"{self.nome} tem um ventilador {self.ventilador.marca} que custou {self.ventilador.preco}"

    def comprar_ventilador(self, ventilador):
        if self.saldo_bancario < ventilador.preco:
            raise ValueError(
                f"{self.nome} nao tem dinhairo para comprar o ventilador desejado"
            )
        self.saldo_bancario -= ventilador.preco
        self.ventilador = ventilador
