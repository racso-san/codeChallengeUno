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

test
 .page `https://devexpress.github.io/testcafe/documentation/getting-started/`
 ('Validar Nav 4', async t => { 
  console.log('-----------------------------------------------------------------------------------------');
  //await t
  let actualResult = '';
  let myArrayNavBar = ["Getting Started", "Guides", "Reference", "Recipes" , "How It Works" , "Examples"];
  
  for(let i = 0; i < myArrayNavBar.length; i++){ 
    let saveNavBar = page.barraNav.child(i);
    const extraerTItulo = await page.guardarTexto(saveNavBar);
    actualResult = extraerTItulo.replace("\n"," ");
    if(actualResult == myArrayNavBar[i]){
      console.log('Validacion correcta : ' + myArrayNavBar[i]);
    } else {
      console.log('Validacion incorrecta : ' + myArrayNavBar[i] + ' distinto de ' + actualResult);
      }
     await t  
    .click (Selector('a').withText(myArrayNavBar[i]))    
    }   
}); 
