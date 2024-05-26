import { Container } from "./style";

const Logo = ({ image, width }) => {
  return (
    <Container width={width}>
      <img src={image} />
    </Container>
  );
};

export default Logo;
