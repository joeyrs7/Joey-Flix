import React from 'react';
import '../pages/Category/styles.css'

function FormField({ id, label, type, name, placeholder, value, onChange, suggestions=[]}) {
   
  const hasSuggestions = Boolean(suggestions.length);
 
  return (
    <div>
      <label htmlFor={id}>

        {label}<br />

        {type === 'textArea' ? <
          textarea rows='2'
          maxLength='70'
          id={id}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        
        ></textarea>
          :
          <input maxLength='100'
            id={id}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            autoComplete={hasSuggestions ? 'off' : 'on'}
            list={hasSuggestions ? `suggestionFor_${name}` : undefined}
          />}
           {
          hasSuggestions && (
            <datalist id={`suggestionFor_${name}`}>
              {
              suggestions.map((suggestion) => (
                <option value={suggestion} key={`suggestionFor_${name}_option${suggestion}`}>
                  {suggestion}
                </option>
              ))
            }
            </datalist>
          )
        }

      </label>
    </div>
  )
}


export default FormField;