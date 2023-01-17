import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenNthCalledWith("https://api.mercadolibre.com/items/MLB1405519561");
  });

  it('se o retorno da função com o argumento MLB1405519561 é o objeto esperado', async () => {
    const result = await fetchProduct('MLB1405519561');
    expect(result).toBe(product);
  });

  it('se ao chamar a função sem argumento, ela retorna o erro esperado', async () => {
    try {
      await fetchProduct()
    } catch (error) {
      expect(error).toEqual(new Error ('ID não informado'));
    }
  });

});