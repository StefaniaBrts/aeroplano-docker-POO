from typing import List, Optional

class Motor:
    def __init__(self, potencia: str):
        self.potencia = potencia

class Ala:
    def __init__(self, posicion: str):
        self.posicion = posicion

class Piloto:
    def __init__(self, nombre: str, licencia: str):
        self.nombre = nombre
        self.licencia = licencia

class Pasajero:
    def __init__(self, nombre: str, asiento: str):
        self.nombre = nombre
        self.asiento = asiento

class Aeroplano:
    def __init__(self, id: int, modelo: str, piloto: Piloto = None):
        self.id = id
        self.modelo = modelo
        # COMPOSICIÓN (Se crean dentro)
        self.motor = Motor("Turbofán")
        self.ala_izquierda = Ala("Izquierda")
        self.ala_derecha = Ala("Derecha")
        # AGREGACIÓN (Se pasan por referencia)
        self.piloto = piloto
        self.pasajeros: List[Pasajero] = []

    def agregar_pasajero(self, pasajero: Pasajero):
        self.pasajeros.append(pasajero)

    def to_dict(self):
        return {
            "id": self.id,
            "modelo": self.modelo,
            "motor": self.motor.potencia,
            "piloto": self.piloto.nombre if self.piloto else "Sin piloto",
            "pasajeros": [{"nombre": p.nombre, "asiento": p.asiento} for p in self.pasajeros]
        }
