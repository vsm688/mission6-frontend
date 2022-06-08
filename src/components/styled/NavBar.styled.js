import styled from "styled-components";


export const StyledHeader = styled.header`
    display:flex;
    justify-content: space-between;
    margin: 0 15%;
    margin-top: 20px;
    height: auto;
    flex-direction: column;
`

export const NavBarParent = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;

`

export const StyledHeaderItemContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 50%;
`

export const StyledHeaderItemContainerList = styled.ul`
    display:flex;
    list-style: none;
    width: 100%;
    align-items: center;
    margin:0;
    padding: 0;
    justify-content: ${props => props.left ? "flex-start": "flex-end"};
`

export const StyledHeaderItemContainerListItem = styled.li`
    margin: 0 20px;
`


export const StyledHeaderItemContainerListItemLogo = styled.li`
    img{
        width: 150px;
        height: 150px;
    }
`

export const BannerImage = styled.img`
    
`