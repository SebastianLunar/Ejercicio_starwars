import React, { useState } from 'react';
import GetName from '../helpers/GetName';
import PrintCards from '../helpers/PrintCards';
import styled from 'styled-components'

const DIV = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`

const Search = () => {
    const [values, setValues] = useState({})
  
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    const { search } = values
    
    const filterChar = GetName(search)
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
   
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Search</h1>
            <hr />
            <form style={{display: "flex", marginBottom: "2rem"}} onSubmit={handleSubmit}>
                <input
                    style={{margin: "0 auto"}}
                    type="text"
                    placeholder="Search"
                    autoComplete='search'
                    name='search'
                    onChange={handleInputChange}
                />
            </form>
            <div>
                <h1 style={{textAlign: "center", marginBottom: "2rem"}}>Results</h1>
                <hr />
                <DIV>
                    {
                        filterChar.map(dato => (
                            <PrintCards key={dato.id} {...dato} />
                        ))
                    }
                </DIV>
            </div>
        </div>
    );
};

export default Search;