import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Slider from "../../ui/Slider/Slider";
import { StyledSection } from "./style";
import { StyledButton } from "../../styled/StyledButton/StyledButton";

const Preview = ({ images, info }) => {
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
    <StyledSection id="preivew">
      <Slider images={images} />
      <StyledButton onClick={handleContact}>ДОБАВИТЬ В КОНТАКТЫ</StyledButton>
    </StyledSection>
  );
};

Preview.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  info: PropTypes.shape({
    name: PropTypes.string,
    mail: PropTypes.string,
    site: PropTypes.string,
    main_number: PropTypes.string,
  }),
};

export default Preview;
