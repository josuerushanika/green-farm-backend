from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class SoilInput(BaseModel):
    nitrogen: float
    phosphorus: float
    potassium: float
    ph: float

@app.post("/predict-soil")
def predict_soil(data: SoilInput):
    if data.ph < 5.5:
        soil_type = "Clay"
    elif data.ph < 7:
        soil_type = "Loam"
    else:
        soil_type = "Sandy"

    return {"soil_type": soil_type}
