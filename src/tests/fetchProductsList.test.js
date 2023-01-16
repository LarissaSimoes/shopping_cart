import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenNthCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  });

  it('se o retorno da função com o argumento computador é o objeto computadorSearch', async () => {
    const result = await fetchProductsList('computador');
    expect(result).toBe(computadorSearch);
  });

  it('se ao chamar a função sem argumento, ela retorna o erro esperado', async () => {
    try {
      await fetchProductsList()
    } catch (error) {
      expect(error).toEqual(new Error ('Termo de busca não informado'));
    }
  });

});
