import Employer from "../Employer/Employer";
import Company from "../Company/Company";
import { StyledMain } from "./style";

const MainMobile = () => (
  <StyledMain>
    <Employer as="section" />
    <Company as="section" />
  </StyledMain>
);

export default MainMobile;
