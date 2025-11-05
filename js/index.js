


// let    plantillaWSP = "SOT" ;
// "•  *FECHA:*"
// "•	*TÉCNICO:*" 
// "•	*# CINTILLO INST:*" 
// "•	*# CINTILLO RET:*"
// "•	*COD. SOLUCION:*" 
// "•	*S/N EQ. INSTALADO:*" 
// "•	*S/N EQ. RETIRADO:*"
// "•	*ADICIONALES (mat. instalados):*"
// "•	*MAT. NO RECURRENTE (drop,switch):*"
// "•	*COD. DE AUTORIZACIÓN:*"
// "•	*OBSERVACION (derivaciones):*"; 


const btn = document.getElementById("btnCopiarPortapapeles"),
      plantillaWSP = document.getElementById("plantilla"),
      sotActa = document.getElementById("sot"),
      fechaActa = document.getElementById("txtFecha"),
      tecnicoActa = document.getElementById("txtNombreTecnico"),
      cintilloActa = document.getElementById("txtCintillo"),
      codSolucionActa1 = document.getElementById("txtCodSolucion1"),
      codSolucionActa2 = document.getElementById("txtCodSolucion2"),
      codSolucionActa3 = document.getElementById("txtCodSolucion3"),
      codSolucionActa4 = document.getElementById("txtCodSolucion4"),
      snEquipoInstalado1 = document.getElementById("txtSnEquipoInstalado"),
      snEquipoRetirado = document.getElementById("txtSnEquipoRetirado"),
      radioHFC = document.getElementById("plataformaHfc"),
      radioFTTH = document.getElementById("plataformaFtth"),
      radioInstalacion = document.getElementById("servicioInsta"),
    radioPostVenta =document.getElementById("servicioPost"),
    radioManto=document.getElementById("servicioManto"),
    radioRetiroEquipos = document.getElementById("servicioRetiro"),

    txtCableCoaxialNegro = document.getElementById("txtCableCoaxialNegro"),
    txtCableCoaxialBlanco = document.getElementById("txtCableCoaxialBlanco"),
    txtCableTelefonico = document.getElementById("txtCableTelefonico"),
    txtCableUtp = document.getElementById("txtCableUtp"),
    txtCableIndor = document.getElementById("txtCableIndor"),
    txtRj11 = document.getElementById("txtRj11"),
    txtRj45 = document.getElementById("txtRj45"),
    txtConectorRg6 = document.getElementById("txtConectorRg6"),
    txtConectorOPT = document.getElementById("txtConectorOPT"),
    txtCableAPC = document.getElementById("txtCableAPC"),
    txtControlRemotoHFC = document.getElementById("txtControlRemotoHFC"),
    txtCableHDMI = document.getElementById("txtCableHDMI"),
    txtRosetaTelefonico = document.getElementById("txtRosetaTelefonico"),

    txtRosetaOPT = document.getElementById("txtRosetaOPT"),
    txtAnclajeP = document.getElementById("txtAnclajeP"),
    txtTelefono = document.getElementById("txtTelefono"),
    txtChapaQ = document.getElementById("txtChapaQ"),


    txtCintilloRojo = document.getElementById("txtCintilloRojo"),
    txtCintillosNegro = document.getElementById("txtCintillosNegro"),
    txtGrapasN8 = document.getElementById("txtGrapasN8"),
    txtGrapasN6 = document.getElementById("txtGrapasN6"),
    txtControlFTTH = document.getElementById("txtControlFTTH");

    radioDrop =document.getElementById("drop"),

    radioInstalado1 = document.getElementById("instalado1"),
    radioInstalado2 = document.getElementById("instalado2"),
    radioInstalado3 = document.getElementById("instalado3"),
    radioInstalado4 = document.getElementById("instalado4"),
    radioInstalado5 = document.getElementById("instalado5"),
    radioInstalado6 = document.getElementById("instalado6"),
    radioInstalado7 = document.getElementById("instalado7"),
    

    radioRetirado1 = document.getElementById("retirado1"),
    radioRetirado2 = document.getElementById("retirado2"),
    radioRetirado3 = document.getElementById("retirado3"),
    radioRetirado4 = document.getElementById("retirado4"),
    radioRetirado5 = document.getElementById("retirado5"),
    radioRetirado6 = document.getElementById("retirado6"),
    radioRetirado7 = document.getElementById("retirado7"),
    
    txtSnEquipoInstalado1 =document.getElementById("txtSnEquipoInstalado1"),
    txtSnEquipoInstalado2 =document.getElementById("txtSnEquipoInstalado2");
    txtSnEquipoInstalado3 =document.getElementById("txtSnEquipoInstalado3");
    txtSnEquipoInstalado4 =document.getElementById("txtSnEquipoInstalado4");
    txtSnEquipoInstalado5 =document.getElementById("txtSnEquipoInstalado5");
    txtSnEquipoInstalado6 =document.getElementById("txtSnEquipoInstalado6");
    txtSnEquipoInstalado7 =document.getElementById("txtSnEquipoInstalado7");
    ;

    

    




//     "•  *SOT:*"
//     "•  *FECHA:*"
// "•	*TÉCNICO:*" 
// "•	*# CINTILLO INST:*" 
// "•	*# CINTILLO RET:*"
// "•	*COD. SOLUCION:*" 
// "•	*S/N EQ. INSTALADO:*" 
// "•	*S/N EQ. RETIRADO:*"
// "•	*ADICIONALES (mat. instalados):*"
// "•	*MAT. NO RECURRENTE (drop,switch):*"
// "•	*COD. DE AUTORIZACIÓN:*"
// "•	*OBSERVACION (derivaciones):*"; 



      
btn.addEventListener("click", e=>{


//    let  texto  = navigator.clipboard.writeText(plantillaWSP.textContent);
//     alert("Plantilla copiada al portapapeles");

    // console.log(texto);

//  if(radioInstalado1.checked|= 
//     radioInstalado2.checked|= 
//     radioInstalado3.checked |= 
//     radioInstalado4.checked |= 
//     radioInstalado5.checked |= 
//     radioInstalado6.checked |= 
//     radioInstalado7.checked
//     ){
//         let tituloSerie = "*S/N EQ. INSTALADO:*";
//         let serie1 = txtSnEquipoInstalado1.value;
//         let serie2 = txtSnEquipoInstalado2.value;
//         let serie3 = txtSnEquipoInstalado3.value;
//         let serie4 = txtSnEquipoInstalado4.value;
//         let serie5 = txtSnEquipoInstalado5.value;
//         let serie6 = txtSnEquipoInstalado6.value;
//         let serie7 = txtSnEquipoInstalado7.value;

//         console.log(serie1 +" " + serie2 +" " + serie3+" " + serie4+" " + serie5+" " + serie6 +" " + serie7);

//  }else{
//     console.log("no serie");
//  }

let numeCaja = 7
let dato = [];
let idRadio ="radioInstalado";
 for (let i=1;i<=7;i++) { 

    //  let idSerie = txtSnEquipoInstalado1;
    //     let nuevoIdRadio =  JSON.stringify(idRadio);

        // console.log(nuevoIdRadio);
    if(idRadio+i.checked){

        // console.log(this)
        // idtxt.value;
        // dato.push(idSerie.value);
            // console.log("ingrsaste a for" + i);    
            // console.log(idSerie+i.value)    

            console.log("holoo")

    }else{
        console.log("sin respuesta")
        return false
    }

    console.log(dato);
}
   

//  let  texto  = navigator.clipboard.writeText(tituloSerie.textContent);

})




const fecha = new Date();

$("#txtFecha").val(fecha.toLocaleDateString());

  $(".btnFotoActa").click(function(){

    console.log("Generar imagen del acta");
    let  sot = $("#sot").val();
    generar_actaImagen(sot);
    let  texto = $("#razon_social").val();
    navigator.clipboard.writeText(texto);
    console.log('Contenido copiado al portapapeles');
  
   });


   function generar_actaImagen(sot){
          $objetivo = document.querySelector("#acta");
          $contenedorCanvas = document.querySelector("#contenedor_img_acta"); // En dónde ponemos el elemento canvas

          html2canvas($objetivo,{
              dpi    : window.devicePixelRatio*1,
              scale  :1.5,
              width  :990,
              heigth :1800,
          }).then(canvas => {
                  // Cuando se resuelva la promesa traerá el canvas
                  $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
                  let enlace = document.createElement('a');
                  //  window.devicePixelRatio();
                  var aleatorio = Math.random()
                      // return false;
                  enlace.download = sot +"."+"png"
                  // Convertir la imagen a Base64
                  enlace.href = canvas.toDataURL();
                  // Hacer click en él
                  enlace.click();
            });
    }


// TODO: Caja busqueda nombre y dni tecnico ::::::::::::::::::::::::

const tecnicos = [
    {
        nombre: "ANGEL EDINSON BENITO MORA 00000000",
        dni: "23569863" ,
    },{
        nombre: "APARICIO MENESES ANTHONY WALTER 00000000",
        dni: "" ,
    },{
        nombre: "ARAPA BERNEDO RAUL ROSSEL 00000000",
        dni: "23569863" ,
    },{
        nombre: "CASTILLO CHALLA JAIME JUNNIOR 00000000",    
        dni: "23569863" ,
    },{
        nombre: "FLORES FLORES JULIO ALBERTO 00000000",    
        dni: "23569863" ,
    },{
        nombre: "GARCIA SARCA CRISTIAN IVAN 00000000",    
        dni: "23569863" ,
    },{
        nombre: "ILLANES CHAMBI JHON RONALD 00000000",    
        dni: "23569863" ,
    },{
        nombre: "MAMANI LOPEZ JULIO ELIAS 00000000",    
        dni: "23569863" ,
    },{
        nombre: "OLLACHICA BAUTISTA ROSBERT ALCIDES 00000000",    
        dni: "23569863" ,
    },{
        nombre: "SALOMON VALDEZ PACOHUANACO 00000000",    
        dni: "23569863" ,
    },{
        nombre: "TENUCO CALDERON ROY DARIO 00000000",    
        dni: "23569863" ,
    },{
        nombre: "TICONA AQUIMA JONATHAN DIEG 00000000",    
        dni: "23569863" ,
    },{
        nombre: "TITO GUERRA VICTOR MANUEL 00000000",    
        dni: "23569863" ,
    },{
        nombre: "TORRES HUAMANI YERON 00000000",    
        dni: "23569863" ,
    }
    ,{
        nombre: "VARGAYA QUISPE GENNODY YOEL 00000000",    
        dni: "23569863" ,
    },{
        nombre: "VICTOR JHONY SAIRE QUISPE 00000000",    
        dni: "23569863" ,
    }
];

const nombres = tecnicos.map(tecnico => tecnico.nombre);

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("txtNombreTecnico");
const inputBoxDNI = document.getElementById("txtDniTecnico");


inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;

    if(input.length) {
        result = nombres.filter(
            
                (keyword)=>{
                            return keyword.toLowerCase().includes(input.toLowerCase());
                        }
        );
        console.log(result);
    }
    display(result);
    if(!result.length) {
        resultsBox.innerHTML = "";
    }
} 


function display(result) {
     
        const content = result.map((list)=>{
             
            return "<li onclick=selectedInputNombres(this)>" + list.trim() + "</li>";
        });
        resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectedInputNombres(list){
    inputBox.value = list.innerHTML;
    nombresDni = inputBox.value;
    let dni = nombresDni.slice(nombresDni.length- 8, nombresDni.length);
    let nombresCompletos =  nombresDni.slice(0, nombresDni.length-8)


    // console.log(removeTags(''));;


    inputBox.value = nombresCompletos;
    inputBoxDNI.value = dni; 
    resultsBox.innerHTML = "";

}

// TODO: FILTRO codigo de solucuion:::::::::::::::::::::::::::::::::::::::::


const arrayCodigosSolucion = [
    "Control Remoto no funciona EQ01",
    "Cambio de EXTENSOR WIFI - MESH EQ02",
    "EMTA por Cambio de tecnología / Fidelización EQ04",
    "ONT/EMTA - Problemas con el equipo EQ05",
    "ONT/EMTA - Problemas con el equipo + Cambio de Acometida EQ06",
    "ONT/EMTA - Problemas con el equipo + cambio de Cable interno EQ07",
    "STB problema del equipo + Cambio de Acometida EQ08",
    "STB problema del equipo EQ09",
    "STB problema del equipo + cambio de Cable interno EQ10",
    "TELEFONO problema del equipo EQ11",
    "ONT/EMTA - Problemas con el equipo - NEGOCIO + IP FIJA EQ12",
    "EMTA Cambio por tecnología / Fidelización - NEGOCIO + IP FIJA EQ13",
    "Cambio de Equipo -Tormenta Eléctrica EQ14",
    "",
    "MANIPULACION CLIENTE - Televisor /Control Remoto/Android TV desprogramados  AB01",
    "MANIPULACION CLIENTE - Cliente desconfiguró equipo ONT/EMTA AB02",
    "MANIPULACION CLIENTE - Cliente modificó red interna AB03",
    "MANIPULACION CLIENTE - Comparte señal a otras personas/ varias PCs conectadas (Cabina) AB04",
    "MANIPULACION CLIENTE - Equipo telefónico desconfigurado o mal conectado AB05",
    "MANIPULACION CLIENTE - Equipos desconectados o problemas con las tomas eléctricas AB06",
    "PROB. CLIENTE - No cuenta con minutos para llamar AB07",
    "PROB. CLIENTE - Problemas con Equipos propiedad del cliente AB08",
    "PROB. CLIENTE - Reinstalacion por incendio, remodelacion o construccion AB09",
    "",
    "Configuracion Avanzada (3 a Más Equipos) FI02",
    "Configuración de Puertos EMTA/ ONT FI03",
    "Problema de cobertura WIFI FI06",
    "Pruebas de servicios integrales FI07",
    "Reinicio manual de ONT/EMTA FI08",
    "Instalación/Configuración - Extensor WIFI - MESH FI09",
    "Reactivacion de servicios Internet y/o telefonia FI10",
    "Envio de comandos/reactivacion de servicios-TV FI11",
    "Configuracion Wifi equipos Claro FI12",
    "Configuracion Wifi equipos cliente FI13",
    "",
    "CONMUTACION - Llamadas no se concretan a ciertos números determinados DE01",
    "CONMUTACION - Operadora indica que numero no existe (llamada entrante). DE02",
    "CONMUTACION - Problemas con SVA (Central Virtual, hunting, etc) DE03",
    "DERIVADO PEXT - Degradación del servicio DE04",
    "DERIVADO PEXT - Sin Servicio / Averia Masiva DE05",
    "DERIVADO PEXT - Niveles RF Altos / Bajos DE06",
    "DERIVADO PEXT - Intermitencia / Pérdida de paquetes DE07",
    "DERIVADO PEXT - Mala Señal DE08",
    "Derivado a segundo nivel DE09",
    "",
    "Conector mar preparado IN01",
    "INSPECCION TECNICA (Verificación de servicio contratado) IN02",
    "Mala distribucion de equipos y/o cables o reutilizacion de cableado existente IN03",
    "",
    "Cambio o reposición de cables Patch RCA/HDMI/UTP/JUMPER OPTICO PC01",
    "Cambio de acometida PC02",
    "Cambio de acometida + Cambio de cables internos PC03",
    "Cambio de cables internos (Coaxial, Telefónico, UTP) PC04",
    "Cambio de Fuente equipo terminal PC05",
    "Conector óptico sucio PC06",
    "Conectores flojos PC07",
    "Reacomodo de acometida PC08",
    "Roseta telefonica averiada PC09",
    "Roseta OPTICA averiada PC10",
    "Reacomodo Acometida - Autoinstalación PC12",
    "Conectores y/o divisores sulfayadops PC13",
    "",
    "Cliente esta Ausente MO01",
    "Cliente dará de baja el servicio MO02",
    "Cliente informa Servicio conforme-visita técnica MO03",
    "No Hay facilidades tecnicas MO04",
    "",
    "Acometida desconectada  del TAP/FAT TE10",
   

];


const listaCodSolucion = document.getElementById("lista_cod_solucion");
const codSolucion = document.getElementById("txtCodSolucion1");
const  descripcionCodSolucion = document.getElementById("txtDescripCodSolucion1");


codSolucion.onkeyup = function() {
    let result = [];
    let input = codSolucion.value;

    if(input.length) {
        result = arrayCodigosSolucion.filter(
            
                (keyword)=>{
                            return keyword.toLowerCase().includes(input.toLowerCase());
                        }
        );
        console.log(result);
    }
    mostrarResultado(result);
    if(!result.length) {
        listaCodSolucion.innerHTML = "";
    }
} 


function mostrarResultado(result) {
     
        const content = result.map((list)=>{
             
            return "<li onclick=seleccionCodSolucion(this)>" + list.trim() + "</li>";
        });
        listaCodSolucion.innerHTML = "<ul>" + content.join('') + "</ul>";
}




function seleccionCodSolucion(list){
    codSolucion.value = list.innerHTML;
    cadenaCodSolucion = codSolucion.value;
    let codigo = cadenaCodSolucion.slice(cadenaCodSolucion.length- 4, cadenaCodSolucion.length);


    let descripcionCodigo =  cadenaCodSolucion.slice(0, cadenaCodSolucion.length-4)
    

    codSolucion.value = codigo;
    descripcionCodSolucion.value =descripcionCodigo; 
    listaCodSolucion.innerHTML = "";

}
