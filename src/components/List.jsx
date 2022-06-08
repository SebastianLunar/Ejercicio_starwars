import React, { useState } from 'react';
import PrintCards from '../helpers/PrintCards'
import { GetData } from '../helpers/GetData'
import styled from 'styled-components'

const DIV = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    font-family: 'Star Jedi', arial;
`

const List = () => {
    const [data, setData] = useState([])

    const getting = async () => {
        setData(await GetData())
    }
    getting()

    return (
        <div>
            <h1 style={{textAlign: "center", marginBottom: "2rem"}}>CHARACTERS</h1>
            <DIV>
                {
                    data.map(dato => (
                        <PrintCards key={dato.id} {...dato} />
                    ))
                }
            </DIV>
        </div>
    );
};

export default List;