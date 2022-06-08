import React from 'react'
import { StyledHeader, StyledHeaderItemContainer, StyledHeaderItemContainerList, 
    StyledHeaderItemContainerListItem, StyledHeaderItemContainerListItemLogo, NavBarParent,
    BannerImage } from '../styled/NavBar.styled'
const NavBar = () => {
    return (
        <StyledHeader>
            <NavBarParent>
                <StyledHeaderItemContainer>
                    <StyledHeaderItemContainerList left={true}>
                        <StyledHeaderItemContainerListItemLogo><img src={"./svg/logos/logo.svg"}></img></StyledHeaderItemContainerListItemLogo>
                        <StyledHeaderItemContainerListItem>Residential</StyledHeaderItemContainerListItem>
                        <StyledHeaderItemContainerListItem>Commercial</StyledHeaderItemContainerListItem>
                        <StyledHeaderItemContainerListItem>Body Corperate</StyledHeaderItemContainerListItem>
                    </StyledHeaderItemContainerList>

                </StyledHeaderItemContainer>
                <StyledHeaderItemContainer>
                    <StyledHeaderItemContainerList left={false}>
                        <StyledHeaderItemContainerListItem right={true}>Residential</StyledHeaderItemContainerListItem>
                        <StyledHeaderItemContainerListItem right={true}>Commercial</StyledHeaderItemContainerListItem>
                        <StyledHeaderItemContainerListItem right={true}>Body Corperate</StyledHeaderItemContainerListItem>
                    </StyledHeaderItemContainerList>
                </StyledHeaderItemContainer>
            </NavBarParent>
            <BannerImage src={"/svg/banner.svg"}>
            </BannerImage>
        </StyledHeader>
    )
}

export default NavBar