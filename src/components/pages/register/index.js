import React, {useState, useEffect}from 'react';
import PageDefault from '../../PageDefault';
import { useHistory } from 'react-router-dom';
import useForm from '../../../components/hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import Menu from '../../Menu'
function VideoRegister(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const { handleChange, values, } = useForm({
      
      titulo: '',
      url: '',
      categoria: '',
    });

    useEffect(() =>{
      categoriasRepository
        .getAll()
        .then((categoriasFromServer) =>{
            setCategorias(categoriasFromServer);
        }); 
}, []);



    return(

        <PageDefault>

        <form onSubmit={(event) => {
        event.preventDefault();

    
          const categoriaEscolhida = categorias.find((categoria) =>{
           return categoria.titulo === values.categoria
 
          });


        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <fieldset>
        <legend>Cadastro de Vídeo {values.name}</legend>

               <FormField
                label="Título do Vídeo"
                name="titulo"
                placeholder='Meu novo dog...'
                value={values.titulo}
                onChange={handleChange}
              />
    
            <FormField
              label="URL"
              type="text"
              name="url"
              placeholder='youtube.com/...'
              value={values.url}
              onChange={handleChange}
            />
    
            <FormField
              label="Categoria"
              type="text"
              name="categoria"
              placeholder='Jogos, Revistas...'
              value={values.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}

            />
    
            <Button type="submit">
              Cadastrar
            </Button>
  
        </fieldset>


        <Menu local='/register/category' texto='Nova categoria'/>
     
      </form>

        
        </PageDefault>
    );
}

export default VideoRegister;