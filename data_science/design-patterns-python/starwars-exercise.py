class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attack_with_saber(self):
        return self.level * 100


class AtackAdapter:
    def __init__(self, character):
        self.char = character

    def attack(self):
        if isinstance(self.char, Jedi) is True:
            return self.char.attack_with_saber()
        return self.char.attack()


class StarWarsGame:
    def __init__(self, character_adapter):
        self.character = character_adapter

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


StarWarsGame(AtackAdapter(Soldier(5))).fight_enemy()
StarWarsGame(AtackAdapter(Jedi(20))).fight_enemy()
