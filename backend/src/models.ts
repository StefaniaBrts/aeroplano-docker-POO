export class Turbina {
    private numTurbinas: number = 0;
    public constructor(n: number) {
        this.numTurbinas = n;
    }
    public ToString() {
        return this.numTurbinas + " Turbina/s";
    }
}

export class Helice {
    private numHelices: number = 0;
    public constructor(n: number) {
        this.numHelices = n;
    }
    public ToString() {
        return this.numHelices + " hélice/s";
    }
}

export class TrendeAterrizaje {
    private numNeumaticos: number = 0;
    private numAmortiguadores: number = 0;
    private fijoRetractil: boolean = false;
    public constructor(a: number, b: number, c: boolean) {
        this.numNeumaticos = a;
        this.numAmortiguadores = b;
        this.fijoRetractil = c;
    }
    public ToString() {
        let mensaje: string = "Tren de Aterrizaje compuesto por: ";
        if (this.fijoRetractil) {
            mensaje += " con Retractil fijo, ";
        }
        mensaje += this.numNeumaticos + " neumáticos, " + this.numAmortiguadores + " amortiguadores ";
        return mensaje;
    }
}

export class Cubierta {
    private cabinaTripulacion: boolean = false;
    private cabinaVuelo: boolean = false;
    private sistemaEmergencia: boolean = false;
    private numTanquesCombustible: number = 0;
    private numPuertasSalidas: number = 0;
    public constructor(pCabinaTripulacion: boolean, pCabinaVuelo: boolean, pSistemaEmergencia: boolean, pTanquesCombustible: number, pPuertasSalida: number) {
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }

    public ToString() {
        let mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo) {
            mensaje += " Cubierta de Vuelo, ";
        }
        if (this.cabinaTripulacion) {
            mensaje += " Cubierta de Tripulación, ";
        }
        if (this.sistemaEmergencia) {
            mensaje += " Sistema de Emergencia, ";
        }
        mensaje += this.numTanquesCombustible + " Tanques de Combustible, ";
        mensaje += this.numPuertasSalidas + " Puertas de Salida.";
        return mensaje;
    }
}

export class Alas {
    private numAlasFrente: number = 0;
    private numAlasCola: number = 0;
    public constructor(mAlasFrente: number, nAlasCola: number) {
        this.numAlasFrente = mAlasFrente;
        this.numAlasCola = nAlasCola;
    }

    public ToString() {
        return "Alas Frontales: " + this.numAlasFrente + " Alas Posteriores: " + this.numAlasCola;
    }

}

export class Aeroplano {
    public id: number;
    public modelo: string;
    private helice: Helice; // COMPOSICIÓN
    private alas: Alas;     // COMPOSICIÓN
    private trenAterrizaje: TrendeAterrizaje; // AGREGACIÓN
    private cubierta: Cubierta;               // AGREGACIÓN

    constructor(id: number, modelo: string, pTrenAterrizaje: TrendeAterrizaje, pCubierta: Cubierta) {
        this.id = id;
        this.modelo = modelo;
        // COMPOSICIÓN: Se instancian dentro del constructor
        this.helice = new Helice(3);
        this.alas = new Alas(2, 3);
        // AGREGACIÓN: Se reciben por parámetro
        this.trenAterrizaje = pTrenAterrizaje;
        this.cubierta = pCubierta;
    }

    public ToString() {
        let mensaje = `Aeroplano ID: ${this.id}, Modelo: ${this.modelo} compuesto por: `;
        mensaje += this.helice.ToString() + ", ";
        mensaje += this.alas.ToString() + ", ";
        mensaje += this.trenAterrizaje.ToString() + ", ";
        mensaje += this.cubierta.ToString();
        return mensaje;
    }
}
