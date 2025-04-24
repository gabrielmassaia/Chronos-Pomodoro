import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { HomeProps } from '../../pages/Home';

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: '24:32',
      };
    });
  }

  return (
    <>
      <form className='form' action=''>
        <div>
          <button type='button' onClick={handleClick}>
            Clicar
          </button>
        </div>
        <div className='formRow'>
          <DefaultInput
            labelText='Tarefa'
            id='input'
            type='text'
            placeholder='Digite Algo...'
          />
        </div>

        <div className='classRow'>
          <p>Próximo intervalo é de {state.config.workTime}min.</p>
        </div>

        <div className='formRow'></div>
        <Cycles />
        <div className='formRow'>
          <DefaultButton icon={<PlayCircleIcon />} color='green' />
        </div>
      </form>
    </>
  );
}
