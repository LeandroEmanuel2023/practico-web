/**
 * Intente realizar una funcion para limpiar variables y reutilizar las de la funcion datosPersonales
 * pero no funciono
 */
function datosPersonales(){
    let resultado = document.getElementById("info");
    let ajaxRequest;
    ajaxRequest = verificarNavegador();
    resultado.innerHTML = "";
    ajaxRequest.onreadystatechange = function(){
        
        if(ajaxRequest.readyState === 4 && ajaxRequest.status === 200){
            let datosPersonales = JSON.parse(ajaxRequest.responseText);
            if(resultado.innerHTML === ""){
                for(let titulo in datosPersonales){
                    resultado.innerHTML += "<h2>"+ titulo + "</h2>";
                    let datosP = datosPersonales[titulo];
    
                    for(let datos in datosP){
                        resultado.innerHTML += "<label><span>" + datos + ":</span> "+ datosP[datos] + "</label><br>";
                    }
                }
            }
        }
    }
    ajaxRequest.open("GET", "https://leandroemanuel2023.github.io/practico-web/practico/archivosJson/datosPersonales.json",true);
    ajaxRequest.send();
    ajaxRequest.close();
}

function estudios(){
    let resultadoE = document.getElementById("info");
    let ajaxRequestE;
    ajaxRequestE = verificarNavegador();
    resultadoE.innerHTML = "";
    ajaxRequestE.onreadystatechange = function(){
        
        if(ajaxRequestE.readyState === 4 && ajaxRequestE.status === 200){
            let datosEstudios = JSON.parse(ajaxRequestE.responseText);
            if(resultadoE.innerHTML === ""){
                for(let titulo in datosEstudios){
                    resultadoE.innerHTML += "<h2>"+ titulo + "</h2>";
                    let datosE = datosEstudios[titulo];
    
                    for(let datos in datosE){
                        resultadoE.innerHTML += "<label><span>" + datos + ":</span> "+ datosE[datos] + "</label><br>";
                    }
                }
            }
        }
    }
    ajaxRequestE.open("GET", "https://leandroemanuel2023.github.io/practico-web/practico/archivosJson/estudios.json",true);
    ajaxRequestE.send();
    ajaxRequestE.close();
}
function capacitaciones(){
    let resultadoC = document.getElementById("info");
    let ajaxRequestC = verificarNavegador();
    resultadoC.innerHTML = "";

    ajaxRequestC.onreadystatechange = function(){
        
        if(ajaxRequestC.readyState === 4 && ajaxRequestC.status === 200){
            let datosCursos = JSON.parse(ajaxRequestC.responseText);
            if(resultadoC.innerHTML === ""){
                for(let titulo in datosCursos){
                    resultadoC.innerHTML += "<h2>"+ titulo + "</h2>";
                    let datosC = datosCursos[titulo];
    
                    for(let datos in datosC){
                        resultadoC.innerHTML += "<label><span>" + datos + ":</span> "+ datosC[datos] + "</label><br>";
                    }
                }
            }
        }
    }
    ajaxRequestC.open("GET", "https://leandroemanuel2023.github.io/practico-web/practico/archivosJson/cursos.json",true);
    ajaxRequestC.send();
    ajaxRequestC.close();
}
function otrosCursos(){
    let resultadoOC = document.getElementById("info");
    let ajaxRequestOC = verificarNavegador();
    resultadoOC.innerHTML = "";

    ajaxRequestOC.onreadystatechange = function(){
        
        if(ajaxRequestOC.readyState === 4 && ajaxRequestOC.status === 200){
            let datosOCursos = JSON.parse(ajaxRequestOC.responseText);
            if(resultadoOC.innerHTML === ""){
                for(let titulo in datosOCursos){
                    resultadoOC.innerHTML += "<h2>"+ titulo + "</h2>";
                    let datosOC = datosOCursos[titulo];
    
                    for(let datos in datosOC){
                        resultadoOC.innerHTML += "<label><span>" + datos + ":</span> "+ datosOC[datos] + "</label><br>";
                    }
                }
            }
        }
    }
    ajaxRequestOC.open("GET", "https://leandroemanuel2023.github.io/practico-web/practico/archivosJson/otrosCursos.json",true);
    ajaxRequestOC.send();
    ajaxRequestOC.close();

}
function antecedentesLaborales(){
    let resultadoAL = document.getElementById("info");
    let ajaxRequestAL = verificarNavegador();

    resultadoAL.innerHTML = "";

    ajaxRequestAL.onreadystatechange = function(){
        if(ajaxRequestAL.readyState === 4 && ajaxRequestAL.status === 200){
            let datosAL = JSON.parse(ajaxRequestAL.responseText);
            if(resultadoAL.innerHTML === ""){
                for(let titulo in datosAL){
                    resultadoAL.innerHTML += "<h2>"+ titulo + "</h2>";
                    let datosAntL = datosAL[titulo];
    
                    for(let datos in datosAntL){
                        resultadoAL.innerHTML += "<label><span>" + datos + ":</span> "+ datosAntL[datos] + "</label><br>";
                    }
                }
            }
        }
    }
    ajaxRequestAL.open("GET", "https://leandroemanuel2023.github.io/practico-web/practico/archivosJson/antecedentesLaborales.json",true);
    ajaxRequestAL.send();
    ajaxRequestAL.close();
    
}
function conocimientos(){
    let resultadoCon = document.getElementById("info");
    let ajaxRequestCon = verificarNavegador();
    resultadoCon.innerHTML = "";

    ajaxRequestCon.onreadystatechange = function(){
        if(ajaxRequestCon.readyState === 4 && ajaxRequestCon.status === 200){
            let datosCon = JSON.parse(ajaxRequestCon.responseText);
            if(resultadoCon.innerHTML === ""){
                for(let titulo in datosCon){
                    resultadoCon.innerHTML += "<h2>"+ titulo + "</h2>";
                    let datosConocimiento = datosCon[titulo];
    
                    for(let datos in datosConocimiento){
                        resultadoCon.innerHTML += "<label><span>"+ datos + ":</span> "+ datosConocimiento[datos] + "</label><br>";
                    }
                }
            }
        }
    }
    ajaxRequestCon.open("GET", "https://leandroemanuel2023.github.io/practico-web/practico/archivosJson/conocimientosHab.json",true);
    ajaxRequestCon.send();
    ajaxRequestCon.close();
}
function otrosDatos(){
    let resultadoOD = document.getElementById("info");
    let ajaxRequestOD = verificarNavegador();

    resultadoOD.innerHTML = "";

    ajaxRequestOD.onreadystatechange = function(){
        if(ajaxRequestOD.readyState === 4 && ajaxRequestOD.status === 200){
            let datosOtrosD = JSON.parse(ajaxRequestOD.responseText);
            if(resultadoOD.innerHTML === ""){
                for(let titulo in datosOtrosD){
                    resultadoOD.innerHTML += "<h2>"+ titulo + "</h2>";
                    let datosOD = datosOtrosD[titulo];
    
                    for(let datos in datosOD){
                        resultadoOD.innerHTML += "<label><span>"+datos + ":</span> "+ datosOD[datos] + "</label><br>";
                    }
                }
            }
        }
    }
    ajaxRequestOD.open("GET", "https://leandroemanuel2023.github.io/practico-web/practico/archivosJson/otrosDatos.json",true);
    ajaxRequestOD.send();
    ajaxRequestOD.close();
}
function verificarNavegador(){
    //verifico navegadores
    if(window.XMLHttpRequest){
        ajaxR = new XMLHttpRequest();
    }else{
        ajaxR = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return ajaxR;
}
