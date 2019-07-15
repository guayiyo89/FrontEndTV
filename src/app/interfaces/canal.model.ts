import { Archivo } from './archivo.model';

export class Canal{
    constructor(
        public nombre: string,
        public ciudad?: string,
        public zonal?: string,
        public urlEncoder?: string,
        public archivos?: Archivo[],
        public _id?: string
    ){}
}