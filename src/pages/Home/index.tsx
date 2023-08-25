import * as S from './styles'
import Propaganda from "../../assets/primavera-e-sorvete-img-metadati.jpg"
import Menu from "../../assets/Menu.png"

export function Home() {
  return (
    <S.Section>
      <img src={Propaganda} alt="Imagem proganda" />
      <img src={Menu} alt="Menu" />
    </S.Section>
  )
}