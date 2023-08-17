/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */


import data from './cars.json' assert { type: 'json' };
console.log(data);


  const cards = document.getElementById("output");


  function appendData(data) {
    const cards = document.getElementById("output");
   
    for (let i = 0; i < data.length; i++) {
      const card = document.createElement("div");
      card.setAttribute("id", "car-card")
      const brandName = document.createElement("h2");
      brandName.setAttribute("id", "brand")
      brandName.innerHTML = data[i].brand;
      card.appendChild(brandName);
      cards.appendChild(card);
      const modelsTitle = document.createElement("h3");
      modelsTitle.setAttribute("id", "models-title")
      modelsTitle.textContent = "Models:";
      card.appendChild(modelsTitle);
      const myList = document.createElement("ul");
      myList.setAttribute("id", "list")
      card.appendChild(myList);
      cards.appendChild(card);

      for (let j = 0; j < data[i].models.length; j++){
          const listItem = document.createElement("li");
      listItem.innerHTML = data[i].models[j];
      myList.appendChild(listItem)
    };    
  };
};
     
appendData(data);
 


