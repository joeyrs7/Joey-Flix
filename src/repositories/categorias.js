import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;


function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}


function getAllWithVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (Response) =>{

        if(Response.ok){
        const response = await Response.json();
        
        return response;
        }

        throw new Error('Não foi possível pegar os dados');
    })
  
}

function create(NovaCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(NovaCategoria),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default{
    getAllWithVideos,
    getAll,
    create,
};