//DESENVOLVIDO POR: Thailan Higor
//Email: thailan-higor@hotmail.com
//Data: 05/07/2019
//Favor dar os devidos créditos ao autor quando modificar.

var c2 = [
    [0.02,	0.03],
    [0.025,	0.035],
    [0.03,	0.045],
    [0.04,	0.055],
    [0.05,	0.07],
    [0.055,	0.08],
    [0.065,	0.1],
    [0.08,	0.12],
    [0.09,	0.13],
    [0.1,	0.14],
    [0.11,	0.16],
    [0120,	0.18],
    [0.14,	0.20],
    [0.15,	0.22],
    [0.17,	0.24],
    [0.19,	0.27],
    [0.21,	0.30]
]

var normal = [
    [0.03, 0.04],
    [0.035, 0.05],
    [0.045,	0.06],
    [0.055,	0.075],
    [0.07,	0.095],
    [0.08,	0.11],
    [0.1,	0.135],
    [0.12,	0.16],
    [0.13,	0.18],
    [0.14,	0.2],
    [0.16,	0.22],
    [0.18,	0.25],
    [0.20,	0.27],
    [0.22,	0.3],
    [0.24,	0.33],
    [0.27,	0.36],
    [0.30,	0.4]
]

var c3 = [
    [0.04,	0.055],
    [0.05,	0.065],
    [0.06,	0.08],
    [0.075,	0.095],
    [0.095,	0.12],
    [0.11,  0.14],
    [0.135,	0.17],
    [0.16,	0.2],
    [0.18,	0.23],
    [0.2,	0.26],
    [0.22,	0.29],
    [0.25,	0.32],
    [0.27,	0.35],
    [0.3,	0.39],
    [0.33,	0.43],
    [0.36,	0.47],
    [0.4,	0.52]
]

var c4 = [
    [0.055,	0.075],
    [0.065,	0.085],
    [0.08,	0.1],
    [0.095,	0.12],
    [0.12,	0.15],
    [0.14,	0.18],
    [0.17,	0.22],
    [0.2,	0.26],
    [0.23,	0.3],
    [0.26,	0.34],
    [0.29,	0.37],
    [0.32,	0.41],
    [0.35,	0.45],
    [0.39,	0.49],
    [0.43,	0.54],
    [0.47,	0.59],
    [0.52,	0.65]
]

var c5 = [
    [0,	0],
    [0.085,	0.105],
    [0.1,	0.13],
    [0.12,	0.16],
    [0.15,	0.2],
    [0.18,	0.23],
    [0.22,	0.28],
    [0.26,	0.33],
    [0.3,	0.38],
    [0.34,	0.43],
    [0.37,	0.47],
    [0.41,	0.52],
    [0.45,	0.57],
    [0.49,	0.62],
    [0.54,	0.68],
    [0.59,	0.74],
    [0.65,	0.82]
]

var nominal = [
    [24, 30],
    [31, 40],
    [41, 50],
    [51, 65],
    [66, 80],
    [81, 100],
    [101, 120],
    [121, 140],
    [141, 160],
    [161, 180],
    [181, 200],
    [201, 225],
    [226, 250],
    [251, 280],
    [281, 315],
    [316, 355],
    [356, 400]
]

var reducaoFolga = [
    [0.01,	0.015],
    [0.015,	0.02],
    [0.02,	0.025],
    [0.025,	0.035],
    [0.035,	0.04],
    [0.04,	0.05],
    [0.05,	0.06],
    [0.06,	0.075],
    [0.07,	0.085],
    [0.08,	0.095],
    [0.09,	0.105],
    [0.1,	0.12],
    [0.11,	0.13],
    [0.12,	0.15],
    [0.135,	0.165],
    [0.15,	0.18],
    [0.17,	0.21]

]

var uniao = [
    ["c2", c2],
    ["normal", normal],
    ["c3", c3],
    ["c4", c4],
    ["c5", c5],
    ["nominal", nominal],
    ["reducaoFolga", reducaoFolga]

]
const Tabela = {

    init: () => {
        Tabela.montaTabela();
    },

    montaTabela: () =>{
        uniao.map(item => {
            let ElementMin = document.querySelector(`.${item[0]} .min-itens`);
            let ElementMax = document.querySelector(`.${item[0]} .max-itens`);

            item[1].map(valor =>{
                let SpanMin = document.createElement('span')
                SpanMin.innerHTML = valor[0];
                ElementMin.appendChild(SpanMin);
    
                let SpanMax = document.createElement('span')
                SpanMax.innerHTML = valor[1];
                ElementMax.appendChild(SpanMax)
            })

        })
    },
    calcular: () =>{
        Tabela.limparCampos();

        let diametro = document.querySelector(".diametro").value;
        let grupo = document.querySelector(".grupo").value;
        let folgaBancada = document.querySelector(".bancada").value;

        if(diametro < 24 || diametro > 400){
            alert('Erro! Informe o Diâmetro Nominal do Rolamento corretamente.');
            document.querySelector('.diametro').classList.add("error");
            return false;
        }else{
            document.querySelector('.diametro').classList.remove("error");
        }

        let posNominal = -1;
        nominal.map((item, index) => {
            if(diametro >= item[0] && diametro <= item[1] ){
                posNominal = index;
                document.querySelector(`.nominal .min-itens span:nth-child(${index+1})`).classList.add("active");
                document.querySelector(`.nominal .max-itens span:nth-child(${index+1})`).classList.add("active");
            }
           
        })

      
        var grupoMin = -1;
        var grupoMax = -1;
        uniao.map( (item) => {
            if(item[0] == grupo){
                let valores = item[1];
                grupoMin = valores[posNominal][0];
                grupoMax = valores[posNominal][1];
                document.querySelector(`.${grupo} .min-itens span:nth-child(${posNominal+1})`).classList.add("active");
                document.querySelector(`.${grupo} .max-itens span:nth-child(${posNominal+1})`).classList.add("active");
                document.querySelector(`.${grupo}-text`).classList.add("active");
            }
        })

        //redução de folga
        var reducaoMin = reducaoFolga[posNominal][0];
        var reducaoMax = reducaoFolga[posNominal][1];
        document.querySelector(`.reducaoFolga .min-itens span:nth-child(${posNominal+1})`).classList.add("active");
        document.querySelector(`.reducaoFolga .max-itens span:nth-child(${posNominal+1})`).classList.add("active");

        let finalMin = grupoMin - reducaoMin;
        let finalMax = grupoMax - reducaoMax;
        let minFinalE =  document.querySelector('.finalMin');
        let maxFinalE =  document.querySelector('.finalMax');

        minFinalE.innerText = finalMin.toFixed(3);
        maxFinalE.innerText = finalMax.toFixed(3);
        minFinalE.classList.add("active");
        maxFinalE.classList.add("active");

    },
    limparCampos: () =>{
        var elements = document.querySelectorAll(`.item .active`);
        document.querySelector('.finalMin').innerHTML = "";
        document.querySelector('.finalMax').innerHTML = "";

        document.querySelector('.finalMin').classList.remove("active");
        document.querySelector('.finalMax').classList.remove("active");


        if(elements.length >0 ){
            elements.forEach(item=>{
                item.classList.remove("active");
            })
        }
    }

}

Tabela.init();