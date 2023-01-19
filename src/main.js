import { getSavedCartIDs } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const cartProducts = document.querySelector('.cart__products');

const productsSection = document.querySelector('.products');

const addLoading = () => {
  const loading = document.createElement('div');
  productsSection.appendChild(loading);
  loading.innerText = 'carregando...';
  loading.className = 'loading';
  return loading;
};

const errorMessage = () => {
  const errorMsg = document.createElement('div');
  document.querySelector('body')
    .appendChild(errorMsg);
  errorMsg.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  errorMsg.className = 'error';
  return errorMsg;
};

const createItemList = async () => {
  try {
    addLoading();
    const list = await fetchProductsList('computador');
    productsSection.innerHTML = '';
    list.forEach((element) => {
      const product = createProductElement(element);
      productsSection.appendChild(product);
    });
  } catch {
    errorMessage();
  }
};

const storage = async () => {
  const IDsArray = getSavedCartIDs();
  const productsChosen = IDsArray.map(async (item) => {
    const productReturn = await fetchProduct(item);
    const cart = createCartProductElement(productReturn);
    cartProducts.appendChild(cart);
  });
  return Promise.all(productsChosen);
};

window.onload = () => {
  createItemList();
  storage();
};
