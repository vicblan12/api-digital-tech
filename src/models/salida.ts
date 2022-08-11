import { sortAndDeduplicateDiagnostics } from "typescript";

type salida = {
    estatus: Number, 
    mensaje: String,
    mensajeerror: String, 
    token: String,
   // informacion: Object, 
    informaciones: []
};
function response(mensaje: salida) {
            mensaje.estatus = 200;
            mensaje.mensaje = '';
            mensaje.token = ''
            mensaje.mensajeerror = '';
            mensaje.informaciones = []
}