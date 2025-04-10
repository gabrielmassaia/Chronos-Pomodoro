import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
    <>
      <form className='form' action=''>
        <div className='formRow'>
          <DefaultInput
            labelText='Tarefa'
            id='input'
            type='text'
            placeholder='Digite Algo...'
          />
        </div>

        <div className='classRow'>
          <p>Lorem ipsum dolor sit amet.</p>
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
