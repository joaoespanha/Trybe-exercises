class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Secador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, max_temperatura):
        super().__init__(cor, potencia, tensao, preco)
        self.max_temperatura = max_temperatura
        self.temperatura = 0

    def __str__(self) -> str:
        return f"Secador {self.cor} com temperatura max de {self.max_temperatura}"

    @property
    def temperatura(self):
        return self.temperatura

    @temperatura.setter
    def temperatura(self, nova_temperatura):
        if nova_temperatura > self.max_temperatura:
            raise ValueError("Temperatura acima da temperatura maxima")
        self.nova_temperatura = nova_temperatura
