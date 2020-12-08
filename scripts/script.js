let inputDistancia = document.getElementById("distancia"); 
let inputTempoDeDeslocamento = document.getElementById("tempoDeDeslocamento"); 
let inputValorDePedagio = document.getElementById("valorDePedagio"); 
let inputServidores = document.getElementById("servidores"); 
let inputComputadores = document.getElementById("computadores"); 
let inputImpressoras = document.getElementById("impressoras"); 
let inputSwitches = document.getElementById("switches"); 
let inputMonitoramento = document.getElementById("monitoramento"); 
let inputAntiVirus = document.getElementById("antiVirus"); 
let inputWebProtection = document.getElementById("webProtection"); 
let inputRiskIntelligence = document.getElementById("riskIntelligence"); 
let inputBackup = document.getElementById("backup"); 
 

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let servidores = inputServidores.value;
    let computadores = inputComputadores.value;
    let impressoras = inputImpressoras.value;
    let switches = inputSwitches.value;

    let monitoramento = inputMonitoramento.value;

    let antiVirus = inputAntiVirus.value;
    let webProtection = inputWebProtection.value;
    let riskIntelligence = inputRiskIntelligence.value;

    let valService = servidores * 350 +
                     computadores * 40 +
                     impressoras * 30 +
                     switches * 30;

    let equipamentos = Number(servidores) + Number(computadores);
 
    let valMonitoramento; 
    let valAntivirus;
    let valWebProtection;
    let valRiskIntelligence;

    let valVisitas = 50 * 4;
    let valTaxaAtivacao = 45.12 / 12;

    if (monitoramento = 1) {
        
        valMonitoramento =  equipamentos * 10.22 * 1.2;
        console.log(valMonitoramento);
    }
    
    if (antiVirus = 1) {
        valAntiVirus = equipamentos * 4.52 * 1.2;
    }
    
    if (webProtection = 1) {
        valWebProtection = equipamentos * 4.52 * 1.2;
    }

    if (riskIntelligence = 1) {
        valRiskIntelligence = equipamentos * 4.52 * 1.2;
    }
   
    console.log(valService, valMonitoramento, valAntiVirus,  valWebProtection, valRiskIntelligence);

    let valorContrato = (valService +
                        valMonitoramento +
                        valAntiVirus +
                        valWebProtection +
                        valRiskIntelligence +
                        valTaxaAtivacao +
                        valVisitas * 1.0833);
    
    console.log(valService);

    console.log(valorContrato);

    return valorContrato;
    
}

/*=($Service.C15+$Product_WorkStation.D17+$Product_Server.D17+($Visit.B16*4)+($Creation.C15/C5)+C46)*1,0833*/