const http= require ('http');
// const url= require('url');


const server = http.createServer((req, resp)=> {
    const NIF = req.url.split('/');

    if(NIF && /^[0-9]{8}[a-z, A-Z]$/.test(NIF[1])) {
        resp.writeHead(200,{'Content-Type':'text-plain'});
        resp.end('TRUE');
    }
    else {
        resp.writeHead(400,{'Content-Type':'text-plain'});
        resp.end('FALSE')
    }
});

const PORT = 8088;

server.listen(PORT,()=>{
    console.log('listening on port: '+ PORT);
})


//-------------------

// function analizarNIF(nif) {
//     // Verifica si el NIF tiene el formato correcto
//     const formatoValido = /^[0-9]{8}[a-zA-Z]$/.test(nif);
  
//     if (!formatoValido) {
//       return "Formato de NIF no válido";
//     }
  
//     // Extrae el número de identificación y la letra de verificación
//     const numeroIdentificacion = nif.slice(0, 8);
//     const letraVerificacion = nif.slice(8);
  
//     // Calcula la letra de verificación esperada
//     const letrasPosibles = 'TRWAGMYFPDXBNJZSQVHLCKE';
//     const indiceEsperado = parseInt(numeroIdentificacion, 10) % 23;
//     const letraEsperada = letrasPosibles.charAt(indiceEsperado);
  
//     // Compara la letra de verificación proporcionada con la esperada
//     const validacionCorrecta = letraVerificacion.toUpperCase() === letraEsperada;
  
//     if (validacionCorrecta) {
//       return "NIF válido";
//     } else {
//       return "Letra de verificación incorrecta";
//     }
//   }
  
//   // Ejemplo de uso
//   const nifEjemplo = "12345678Z";
//   const resultado = analizarNIF(nifEjemplo);
//   console.log(resultado);

//-------------------