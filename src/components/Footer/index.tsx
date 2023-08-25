import * as S from "./styles"
import Face from "../../assets/facebook (2).png"
import Insta from "../../assets/instagram (1).png"
import Linkedin from "../../assets/logotipo-do-linkedin.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://facebook.com" target="_blank">
        <img src={Face} alt="Facebook" />
      </a>
      <img src={Insta} alt="Instagram" />
      <img src={Linkedin} alt="Linkedin" />
    </S.Footer>
  )
}