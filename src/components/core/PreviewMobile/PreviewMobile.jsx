import { useState, useCallback, useEffect } from "react";
import { StyledMobileButton } from "../../styled/StyledMobileButton/StyledMobileButton";
import Logo from "../../ui/Logo/Logo";
import Slider from "../../ui/Slider/Slider";
import PropTypes from "prop-types";
import { StyledSection, StyledButtons } from "./style";

const PreviewMobile = ({ logo, images, info }) => {
  const { name, mail, site, main_number } = info;
  const [contact, setContact] = useState(
    JSON.parse(localStorage.getItem("contact"))
  );

  useEffect(() => {
    contact && console.log("Ваши контакты: " + JSON.stringify(contact));
  }, [contact]);

  const handleContact = useCallback(() => {
    const newContact = {
      Имя: name,
      Почта: mail,
      Сайт: site,
      Телефон: main_number,
    };
    if (JSON.stringify(newContact) !== JSON.stringify(contact || "")) {
      localStorage.setItem("contact", JSON.stringify(newContact));
      setContact(newContact);
    }
  }, [contact, name, mail, site, main_number]);

  return (
    <StyledSection>
      <div height="104px">
        <Logo image={logo} size="162px" />
      </div>
      <Slider images={images} />
      <StyledButtons>
        <StyledMobileButton onClick={handleContact}>
          <img src="https://svgshare.com/i/16eZ.svg" alt="Сохранить" />
          <span>Сохранить визитку</span>
        </StyledMobileButton>
        <StyledMobileButton as="a" href={`tel:${main_number}`}>
          <img src="https://svgshare.com/i/16fN.svg" alt="Позвонить" />
          <span style={{ color: "#212121" }}>Позвонить</span>
        </StyledMobileButton>
      </StyledButtons>
    </StyledSection>
  );
};

PreviewMobile.propTypes = {
  logo: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    main_number: PropTypes.string.isRequired,
  }).isRequired,
};

export default PreviewMobile;
