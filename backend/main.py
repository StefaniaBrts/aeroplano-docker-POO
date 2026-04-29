from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import Aeroplano, Piloto, Pasajero
from typing import List

app = FastAPI()

# Configuración de CORS para el Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Base de datos en memoria
aeroplanos_db = {}

@app.post("/aeroplanos/")
def create_aeroplano(id: int, modelo: str, nombre_piloto: str):
    if id in aeroplanos_db:
        raise HTTPException(status_code=400, detail="ID ya existe")
    
    piloto = Piloto(nombre_piloto, "LC-123")
    nuevo_avion = Aeroplano(id, modelo, piloto)
    aeroplanos_db[id] = nuevo_avion
    return nuevo_avion.to_dict()

@app.get("/aeroplanos/")
def get_aeroplanos():
    return [avion.to_dict() for avion in aeroplanos_db.values()]

@app.get("/aeroplanos/{id}")
def get_aeroplano(id: int):
    if id not in aeroplanos_db:
        raise HTTPException(status_code=404, detail="No encontrado")
    return aeroplanos_db[id].to_dict()

@app.delete("/aeroplanos/{id}")
def delete_aeroplano(id: int):
    if id in aeroplanos_db:
        del aeroplanos_db[id]
        return {"message": "Eliminado"}
    raise HTTPException(status_code=404, detail="No encontrado")
