import { get,post } from "./api_calls.js";

function create_product(param) {
  const item = `
  <th scope="row"><span>${param.id}</span></th>
  <td><span>${param.name}</span></td>
  <td><span>${param.description}</span></td>
  <td><span>${param.price}</span></td>
  <td><span><a href="http://estanfa3.com:8443/deleteproduct/${param.id}" >Delete</a></span></td>
  `
  return item;
}
function add_product(product) {
  const products = document.getElementById("loadProuct");
  
  const new_product = document.createElement("tr");

  new_product.innerHTML = create_product(product);
  products.appendChild(new_product);
}

const products = await get({ endpoint: "getuserproduct" });
console.log(products)
console.log(products, `here at products Line: 5`);
products.forEach((product) => {
  add_product(product);
});


async function load(){
  let user = await post({endpoint: 'api/auth/getusername'});
  console.log(user.username)
  document.getElementById("username").innerHTML = user.username;
  
}
load()


function create_offers(offer) {
  const item = ` <th scope="row"><span>${offer.id}</span></th>
  <td><span>${offer.buyerId}</span></td>
  <td><span>${offer.description}</span></td>
  <td><span>${offer.tradedProductId}</span></td>
  <td><span>${offer.offeredPrice}</span></td>
  <td><span><a href ="http://estanfa3.com:8443/createcontract/${offer.tradedProductId}" >Accept</a></span></td>
  <td><span><a href="http://estanfa3.com:8443/deleteoffer/${offer.id}">Decline</a></span></td>
`
  const offers = document.getElementById("load_offer");
    
  const new_offer = document.createElement("tr");

  new_offer.innerHTML = item;
  offers.appendChild(new_offer);
  
}

const offers = await get({ endpoint: "getoffers" });
console.log(offers)
console.log(offers, `here at offers Line: 5`);
offers.forEach((offer) => {
  create_offers(offer);
});


function create_contracts(contract) {
  const item = ` <th scope="row"><span>${contract.id}</span></th>
  <td><span>${contract.tradedProductId}</span></td>
  <td><span>${contract.buyerId}</span></td> 
  <td><span>${contract.dealtPrice}</span></td>
  <td><span>${contract.diffPrice}</span></td>
  <td><span><a href="http://estanfa3.com:8443/deletecontract/${contract.id}">Decline</a></span></td>
`
  const contracts = document.getElementById("load_contracts");
    
  const new_contract = document.createElement("tr");

  new_contract.innerHTML = item;
  contracts.appendChild(new_contract);
  
}

const contracts = await get({ endpoint: "getcontracts" });
console.log(contracts, `here at offers Line: 5`);
contracts.forEach((contract) => {
  create_contracts(contract);
});


function create_sent_contracts(contract) {
  const item = ` <th scope="row"><span>${contract.id}</span></th>
  <td><span>${contract.tradedProductId}</span></td>
  <td><span>${contract.sellerId}</span></td> 
  <td><span>${contract.dealtPrice}</span></td>
  <td><span>${contract.diffPrice}</span></td>
  <td><span><a href="http://estanfa3.com:8443/deletecontract/${contract.id}">Decline</a></span></td>
`
  const contracts = document.getElementById("load_sent_contracts");
    
  const new_contract = document.createElement("tr");

  new_contract.innerHTML = item;
  contracts.appendChild(new_contract);
  
}

const sent_contracts = await get({ endpoint: "getsentcontracts" });
console.log(sent_contracts, `here at offers Line: 5`);
sent_contracts.forEach((contract) => {
  create_sent_contracts(contract);
});
