import { Selector } from 'testcafe';
import page from '../pages/page-model';

fixture `test` 
    .page `https://devexpress.github.io/testcafe/`;
 
test('Test 1', async t => {
  console.log('-----------------------------------------------------------------------------------------');
//  await t
  let arrayFunciones = ['Create stable tests (and no manual timeouts)',
                         'Write in latest JS or TypeScript',
                         'Detect JS errors in your code',
                         'Launch concurrent tests',
                         'Build readable tests with PageObject', 
                         'Include tests in continuous integration system'];

  let guardarFuncion1 = page.funcion1
  let guardarFuncion2 = page.funcion2
  let guardarFuncion3 = page.funcion3
  let guardarFuncion4 = page.funcion4
  let guardarFuncion5 = page.funcion5
  let guardarFuncion6 = page.funcion6

  let fourthChild1 = guardarFuncion1.child(0);
  let fourthChild2 = guardarFuncion2.child(0);
  let fourthChild3 = guardarFuncion3.child(0);
  let fourthChild4 = guardarFuncion4.child(0);
  let fourthChild5 = guardarFuncion5.child(0);
  let fourthChild6 = guardarFuncion6.child(0);

  const extraerTItulo1 = await page.guardarTexto(fourthChild1);
  const extraerTItulo2 = await page.guardarTexto(fourthChild2);
  const extraerTItulo3 = await page.guardarTexto(fourthChild3);
  const extraerTItulo4 = await page.guardarTexto(fourthChild4);
  const extraerTItulo5 = await page.guardarTexto(fourthChild5);
  const extraerTItulo6 = await page.guardarTexto(fourthChild6);

  const actualResult1 = extraerTItulo1.replace("\n"," ");
  const actualResult2 = extraerTItulo2.replace("\n"," ");
  const actualResult3 = extraerTItulo3.replace("\n"," ");
  const actualResult4 = extraerTItulo4.replace("\n"," ");
  const actualResult5 = extraerTItulo5.replace("\n"," ");
  const actualResult6 = extraerTItulo6.replace("\n"," ");
});