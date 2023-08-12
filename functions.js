//functions

function ataseazaProduse() {
    let table = document.querySelector(".produse-container");

    table.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        table.innerHTML += createRow(data[i]);
    }
}



//functie ce face un rand 
function createRow(produs) {

    let txt = `
        
        <tr class="trow">
            <td>${produs.nume}</td>
            <td>${produs.pret}</td>
            <td>${produs.cantitate}</td>
            <td class="actions-buttons">
            <button class="btn-delete ${produs.nume}">
                delete
            </button>
            <button class="btn-edit ${produs.nume} ${produs.pret} ${produs.cantitate}"  >
                edit
            </button>
          </td>
        </tr>
        `;

    return txt;
}


function stergereByNume(nume) {

    let aux = [];
    for (let index = 0; index < data.length; index++) {
        if (data[index].nume !== nume) {

            aux.push(data[index]);

        }
    }

    data = [...aux];
}
//function validate name: ce: 1)1-5 char 2) sa nu fie duplicat   3) sa inceapa cu litera mare

function validatorName(name) {
    if (name.length > 12 || name.length < 1) {
        return {
            msg: 'numele trebuie sa fie intre 1 si 4 caractere',
            valid: false
        };
    }
    if (getProdusByName(name) !== null) {
        return {
            msg: 'numele exista',
            valid: false
        };
    }
    if (!(name[0].toUpperCase() == name[0])) {
        return {
            msg: 'numele nu incepe cu litera mare',
            valid: false
        };
    }
    return {
        msg: 'numele este valid',
        valid: true
    };
}

function getProdusByName(name) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].nume === name) {
            return data[i];
        }
    }
    return null;
}

//function validate pret: 1) sa fie numar 2) sa fie mai mare ca 0 

function validatePret(pret) {
    if (Number(pret) <= 0) {
        return {
            msg: 'pretul trebuie sa fie mai mare ca 0',
            valid: false
        };
    }

    if (isNaN(pret)) {
        return {
            msg: 'pretul nu este numar',
            valid: false
        };
    }
    return {
        valid: true
    };
}

//function validate cantitate: 1) sa fie numar 2) sa fie mai mare ca 0 

function validateCantitate(cantitate) {
    if (Number(cantitate) <= 0) {
        return {
            msg: 'cantitatea trebuie sa fie mai mare ca 0',
            valid: false
        };
    }

    if (isNaN(cantitate)) {
        return {
            msg: 'cantitatea nu este numar',
            valid: false
        };
    }
    return {
        valid: true
    };

}
