import express, { Request, Response } from 'express';
import cors from 'cors';
import { Aeroplano, TrendeAterrizaje, Cubierta } from './models';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// Base de datos en memoria
let aeroplanos: Aeroplano[] = [];

// CREATE
app.post('/aeroplanos', (req: Request, res: Response) => {
    const { id, modelo, numNeumaticos, numAmortiguadores, fijoRetractil, cabinaTripulacion, cabinaVuelo, sistemaEmergencia, numTanques, numPuertas } = req.body;
    
    // Crear componentes para agregación
    const tren = new TrendeAterrizaje(numNeumaticos || 2, numAmortiguadores || 3, fijoRetractil || true);
    const cubierta = new Cubierta(cabinaTripulacion || true, cabinaVuelo || true, sistemaEmergencia || true, numTanques || 4, numPuertas || 4);
    
    const nuevoAeroplano = new Aeroplano(id, modelo, tren, cubierta);
    aeroplanos.push(nuevoAeroplano);
    
    res.status(201).json({
        message: 'Aeroplano creado con éxito',
        data: {
            id: nuevoAeroplano.id,
            modelo: nuevoAeroplano.modelo,
            info: nuevoAeroplano.ToString()
        }
    });
});

// READ (List)
app.get('/aeroplanos', (req: Request, res: Response) => {
    const data = aeroplanos.map(a => ({
        id: a.id,
        modelo: a.modelo,
        info: a.ToString()
    }));
    res.json(data);
});

// READ (Single)
app.get('/aeroplanos/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const aeroplano = aeroplanos.find(a => a.id === id);
    if (!aeroplano) {
        return res.status(404).json({ message: 'Aeroplano no encontrado' });
    }
    res.json({
        id: aeroplano.id,
        modelo: aeroplano.modelo,
        info: aeroplano.ToString()
    });
});

// UPDATE
app.put('/aeroplanos/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const index = aeroplanos.findIndex(a => a.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Aeroplano no encontrado' });
    }
    
    const { modelo, numNeumaticos, numAmortiguadores, fijoRetractil, cabinaTripulacion, cabinaVuelo, sistemaEmergencia, numTanques, numPuertas } = req.body;
    
    const tren = new TrendeAterrizaje(numNeumaticos || 2, numAmortiguadores || 3, fijoRetractil || true);
    const cubierta = new Cubierta(cabinaTripulacion || true, cabinaVuelo || true, sistemaEmergencia || true, numTanques || 4, numPuertas || 4);
    
    const aeroplanoActualizado = new Aeroplano(id, modelo, tren, cubierta);
    aeroplanos[index] = aeroplanoActualizado;
    
    res.json({
        message: 'Aeroplano actualizado con éxito',
        data: {
            id: aeroplanoActualizado.id,
            modelo: aeroplanoActualizado.modelo,
            info: aeroplanoActualizado.ToString()
        }
    });
});

// DELETE
app.delete('/aeroplanos/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const index = aeroplanos.findIndex(a => a.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Aeroplano no encontrado' });
    }
    aeroplanos.splice(index, 1);
    res.json({ message: 'Aeroplano eliminado con éxito' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
