import { CenterAlignContainer } from "src/components/CenterAlignContainer";
import { FlexContainer } from "src/components/FlexContainer";
import { HeaderContainer } from "src/components/HeaderContainer";
import NewPostContainer from "src/components/NewPostContainer";
import Typography from "src/components/Typograph";

const HomePageView = () => {
      
    return (
        <CenterAlignContainer>
            <FlexContainer style={{ minHeight: '100%', padding: 0}}>
                <HeaderContainer>
                    <Typography variant="h1">Home Page</Typography>
                </HeaderContainer>
                <FlexContainer style={{ alignItems: 'center', width: '100%'}}>
                    <NewPostContainer />
                </FlexContainer>
            </FlexContainer>
        </CenterAlignContainer>
    )
}

export default HomePageView;
