ataseazaProduse();

let inputNume = document.querySelector("#nume");
let inputPret = document.querySelector("#pret");
let inputCantitate = document.querySelector("#cantitate");
let inputAdd = document.querySelector(".add");
let tableContainer = document.querySelector(".produse-container");


inputAdd.addEventListener("click", () => {

    let validName = validatorName(inputNume.value);

    let validPret = validatePret(inputPret.value);

    let validCantitate = validateCantitate(inputCantitate.value);



    //add
    if (validName.valid === false) {
        alert(validName.msg);
    }
    if (validPret.valid === false) {
        alert(validPret.msg);
    }
    if (validCantitate.valid === false) {
        alert(validCantitate.msg);
    }

    if (validName.valid && validPret.valid && validCantitate.valid) {

        let produs = {
            nume: inputNume.value,
            pret: inputPret.value,
            cantitate: inputCantitate.value
        };

        data.push(produs);
        ataseazaProduse();


        alert("produsul s-a adaugat cu succes");

    }

});

tableContainer.addEventListener("click", (event) => {


    let obj = event.target;
    let classList = obj.classList;
    if (obj.classList.contains("btn-delete")) {
        stergereByNume(classList[1]);
        ataseazaProduse();
    }else if(obj.classList.contains("btn-edit")){
        let produs=getProdusByName(classList[1]);

        inputNume.value=produs.nume;
        inputPret.value=produs.pret;
        inputCantitate.value=produs.cantitate;
        

    }


})

tableContainer.addEventListener("click", (e) => {
    let obj = e.target;
    if(obj.classList.contains("btn-edit")){
        
        
        // let p = {
        //         nume: inputNume.value,
        //         pret: inputPret.value,
        //         cantitate: inputCantitate.value
        // };
        // editProdus(p);
        // ataseazaProduse();
    }
})

let sortareButton = document.querySelector("#sortareid");
    
sortareButton.addEventListener("click", () => {
    data.sort((a, b) => {
        return a.pret - b.pret;
    });
    ataseazaProduse();
})
