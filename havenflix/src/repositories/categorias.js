import configs from '../config';

function getAllCategoriasWithVideos() {
  console.log(configs.URL_BACKEND_TOP);
  return fetch(`${configs.URL_BACKEND_TOP}/categorias?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAll() {
  return fetch(`${configs.URL_BACKEND_TOP}/categorias`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllCategoriasWithVideos,
  getAll,
};
