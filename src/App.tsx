import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'></div>
          <label htmlFor='input'>Missão</label>
          <input id='input' type='text' />

          <div className='classRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='classRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className='classRow'>
            <button></button>
          </div>
        </form>
      </Container>
    </>
  );
}
