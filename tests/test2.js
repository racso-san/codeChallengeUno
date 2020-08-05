import { Selector } from 'testcafe';
import page from '../pages/page-model';

fixture `test` 
    .page `https://devexpress.github.io/testcafe/`;

test('Presionar boton de inicio 1', async t => {
    console.log('-----------------------------------------------------------------------------------------');
    let guardarFuncion = page.button 
    await t
    .click(guardarFuncion)  
});
      
/*=======================================================================*/
  