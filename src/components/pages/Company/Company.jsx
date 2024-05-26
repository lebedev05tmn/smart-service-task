import SocialLink from "../../ui/SocialLink/SocialLink";
import { StyledLinks } from "../../styled/StyledLinks/StyledLinks";
import mockData from "../../../mocks/mockData";
import { StyledMain } from "../../styled/StyledMain/StyledMain";

const Company = () => {
  const { company } = mockData;

  return (
    <StyledMain>
      <StyledLinks>
        {company.links.map(link => (
          <li
            style={{ display: "flex", justifyContent: "center" }}
            key={link.id}>
            <SocialLink link={link.url} alt={link.title} image={link.image} />
          </li>
        ))}
      </StyledLinks>
    </StyledMain>
  );
};

export default Company;
