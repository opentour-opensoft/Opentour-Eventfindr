/**
 * Created by fabioaarito on 07-01-2017.
 */
const WEVENTUAL_API_BASE_URL = 'https://app.weventual.com/json/';

let api = {};

/**
 * Listagem de todos os eventos ainda a decorrer
 *
 * @returns [Lista de eventos]
 * Evento:
 *
 * {
 *      "nomeEvento":"28ª São Silvestre dos Olivais",
 *      "iDEvento":3797,
 *      "localidadePostalEvento":"Olivais, Lisboa, Portugal",
 *      "caminhoFichImagemEvento":"logotipos/3797_201611031027000007.png",
 *      "dataHoraIniEventoFormatada":"30-12-2016 às 21:00",
 *      "situacaoEvento":"Inscrições Fechadas",
 *      "esgotado":false,
 *      "resultadosPublicos":false,
 *      "temResultados":false,
 *      "link":"detalheEvento.action?iDEvento=3797",
 *      "resultsLink":"consultarResultados.action?iDEvento=3797",
 *      "dataFimInscricoes":null,
 *      "isInscManuais":"true",
 *      "isOperador":"false",
 *      "criado":false,
 *      "arquivado":false,
 *      "aberto":false,
 *      "fechado":true
 *      "latitude": 39.537703
 *      "longitude":-8.38533280000001
 * }
 *
 */
api.getAllEvents = function() {
    let serviceUrl = 'listarEventos?pastEvents=false&_=1483093843436';
    return fetch(WEVENTUAL_API_BASE_URL + serviceUrl)
        .then((response) => {
            return response.json()
        })
        .then((processedResponseJson) => {
            let detailPromises = [];
            for(let event of processedResponseJson.data) {
                event.latitude = parseFloat(event.latitudeEvento);
                event.longitude = parseFloat(event.longitudeEvento);
                detailPromises.push(event);
            }
           return Promise.all(detailPromises);
        })
        .then((allEvents) => {
            return allEvents;
        })
        .catch((error) => {
            console.log("ERROR " + error);
        });
};

/**
 *
 * @param eventId
 * @return Detalhe do Evento {
		"nomeUtilizador": "TRILHOS DOS TEMPLÁRIOS",
		"emailUtilizador": "trilhosdostemplarios@gmail.com",
		"coorganizadores": [{
			"iDUtilizador": 67144,
			"nomeUtilizador": "TRILHOS DOS TEMPLÁRIOS",
			"emailUtilizador": "trilhosdostemplarios@gmail.com",
			"isPrincipal": true,
			"isDirty": false
		}],
		"operadores": [{
			"iDUtilizador": 1234,
			"nomeUtilizador": "...",
			"emailUtilizador": "..."
		}],
		"iDEvento": 3645,
		"nomeEvento": "IV TRILHOS NOTURNOS DOS TEMPLÁRIOS",
		"descricaoEvento": "1 -&nbsp;Todas as Inscrições Inclúem: Tshirt TÉCNICA de Manga Comprida + BANDA para o cabelo com logo BORDADO(prémio finisher)&nbsp;+ dorsal personalizado + massagens + DUCHE QUENTE para todos;<br>2 - Vamos ter&nbsp;TOCHAS na entrada dos trilhos + VELAS&nbsp;ao longo dos trilhos&nbsp;+ FOGUEIRAS + Fogo de ARTIFICÍO;<br>3 - Regulamento e Percursos em: <a href=\"http://www.trilhosdostemplarios.pt\" title=\"Link: http://www.trilhosdostemplarios.pt\">www.trilhosdostemplarios.pt</a>",
		"descricaoEventoUrl": "https://app.weventual.com/obterDescricaoEvento.action?iDEvento=3645",
		"recintoEvento": "",
		"localidadePostalEvento": "R. Feira 2, Santa Cita, 2305 Portugal",
		"situacaoEvento": "AB",
		"situacaoEventoDescricao": "Inscrições Abertas",
		"dataSituacaoEvento": "2016-09-27 11:45:36",
		"dataCriacaoEvento": "2016-09-17 15:33:40",
		"dataIniEvento": "2017-01-07",
		"horaIniEvento": "18:00",
		"dataHoraIniEventoFormatada": "07-01-2017 às 18:00",
		"dataFimEvento": "2017-01-07",
		"horaFimEvento": "22:00",
		"dataHoraFimEventoFormatada": "07-01-2017 às 22:00",
		"indSubsPartEvento": true,
		"indPrivadoEvento": false,
		"uRLEvento": "http://trilhosdostemplarios.pt/",
		"idCategoriaEvento": "Desporto",
		"fichImagemEvento": "logotipos/3645_201609171625000038.jpg",
		"destaqueEvento": 10,
		"conviteUsado": false,
		"indMostraNumPart": false,
		"indPermiteInscManual": true,
		"numPartInicialEvento": 1,
		"aceitaTermoEvento": true,
		"isEsgotado": false,
		"mostraMapaEvento": true,
		"latitudeEvento": 39.537703,
		"longitudeEvento": -8.38533280000001,
		"allowPagamentoMB": true,
		"allowPagamentoPayPal": true,
		"imputarTaxas": true,
		"messageToShare": "Participem neste evento",
		"linkToShare": "https%3A%2F%2Fapp.weventual.com%2FdetalheEvento.action%3FiDEvento%3D3645",
		"indFatura": false,
		"indRegistoEntradas": "S",
		"indExisteUmPagamentoEfectuado": true
	}
 */
api.getEventDetail = function(eventId){
    let serviceUrl = 'obterDetalheEventoService?iDEvento=' + eventId;
    return fetch(WEVENTUAL_API_BASE_URL + serviceUrl)
        .then((response) => {
            return response.json()
        })
        .then((processedResponseJson) => {
            return processedResponseJson.data;

        });
}

module.exports = api;