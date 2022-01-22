
import imgLogo from '../../assets/logo.svg';
import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="dt money" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}