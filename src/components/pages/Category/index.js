import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import './styles.css';
import Button from '../../Button'
import useForm from '../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias'


function CategoryRegister() {
  const initialValues = {
    titulo: '',
    desc: '',
    color: '',
  }
  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  const [categories, setCategorias] = useState([]);
  const { handleChange, values, clearForm } = useForm(initialValues);


  useEffect(() => {
    
    const BASE_URL =  window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://eduflix.herokuapp.com/categorias';
    fetch(BASE_URL).then(async (Response) =>{
      const response = await Response.json();
      setCategorias([
        ...response,
      ]);
    });
  },[]);

  return (
    <PageDefault>


      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
          ...categories,
          values,
        ]);
      categoriasRepository.create({
        titulo: values.titulo,
        cor: values.color,
        link_extra: {
          text: values.desc
        },
      });
      clearForm();
    }}
      >

        <fieldset>

          <legend>Cadastro da Categoria {values.titulo}</legend>

          <FormField
            id="txtName"
            label="Nome da Categoria"
            type="text"
            name="titulo"
            placeholder='Jogos, Filmes, Revistas...'
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            id="txtDesc"
            label="Descrição"
            type="textArea"
            name="desc"
            placeholder='A melhor lista de X da atualidade...'
            value={values.desc}
            onChange={handleChange}
          />


          <FormField
            id="txtColor"
            label="Cor"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />


          <Button>
            Cadastrar
          </Button>

          {categories.length === 0 &&(
          <div>
            Loading...
          </div>
          )}

        </fieldset>


        <fieldset id='values'>

          <legend>Categorias Cadastradas</legend>

          <ul id='categories'>
            {categories.map((category) => (
                <pre>
                  <li key={`${category.titulo}`}>
                    {category.titulo+"✔️"}
                  </li>
                </pre>
              
            ))}
          </ul>

        </fieldset>

      </form>

    </PageDefault>
  )
}

export default CategoryRegister;