import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/Arrow.svg';
import edit from '../../assets/images/icons/Edit.svg';
import trash from '../../assets/images/icons/Trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Nome-Contato</strong>
              <small>categoria</small>
            </div>
            <span>email@email.com</span>
            <span>(99) 4002-8922</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>

          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Nome-Contato</strong>
              <small>categoria</small>
            </div>
            <span>email@email.com</span>
            <span>(99) 4002-8922</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>

          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Nome-Contato</strong>
              <small>categoria</small>
            </div>
            <span>email@email.com</span>
            <span>(99) 4002-8922</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>

          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
