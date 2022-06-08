import styled from "styled-components";

export const ContenedorContactosEn = styled.div`
    display: grid;
    
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "area2 area2 area3 area3";
    align-content: flex-start;
    gap: 10px;
    width:100%;   
    margin-top: 50px;
    margin-bottom: 10px;
    max-width: 1200px;
    color:#fff;
    height:100%;

    @media screen and (min-width: 640px) {
        
    }
    @media screen and (min-width: 768px) {
       
    }
    @media screen and (min-width: 1024px) {
    }

`