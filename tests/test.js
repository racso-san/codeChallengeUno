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
 
  if(actualResult1 == arrayFunciones[0] ){
    console.log('Validacion correcta : ' + arrayFunciones[0]);
  } else {
    console.log('Validacion incorrecta : ' + actualResult1 + ' debe ser ' + arrayFunciones[0]);
  }

  if(actualResult2 == arrayFunciones[1] ){
    console.log('Validacion correcta : ' + arrayFunciones[1]);
  } else {
    console.log('Validacion incorrecta : ' + actualResult2 + ' debe ser ' + arrayFunciones[1]);
  }

  if(actualResult3 == arrayFunciones[2] ){
    console.log('Validacion correcta : ' + arrayFunciones[2]);
  } else {
    console.log('Validacion incorrecta : ' + actualResult3 + ' debe ser ' + arrayFunciones[2]);
  }

  if(actualResult4 == arrayFunciones[3] ){
    console.log('Validacion correcta : ' + arrayFunciones[3]);
  } else {
    console.log('Validacion incorrecta : ' + actualResult4 + ' debe ser ' + arrayFunciones[3]);
  }

  if(actualResult5 == arrayFunciones[4] ){
    console.log('Validacion correcta : ' + arrayFunciones[4]);
  } else {
    console.log('Validacion incorrecta : ' + actualResult5 + ' debe ser ' + arrayFunciones[4]);
  }

  if(actualResult6 == arrayFunciones[5] ){
    console.log('Validacion correcta : ' + arrayFunciones[5]);
  } else {
    console.log('Validacion incorrecta : ' + actualResult6+ ' debe ser ' + arrayFunciones[5]);
  }
});

/*=======================================================================*/

test('Presionar boton de inicio 2', async t => {
  console.log('-----------------------------------------------------------------------------------------');
  let guardarFuncion = page.button 
  await t
  .click(guardarFuncion)  
});

/*=======================================================================*/

test('Validar la url y el título de la página 3', async t => {
  console.log('-----------------------------------------------------------------------------------------');
  let actualResult = '';
  let expectedResultTitle = 'A node.js tool to automate end-to-end web testing';
  let guardarTitulo = page.titulo          
 
  const extraerTItulo = await page.guardarTexto(guardarTitulo);
  actualResult = extraerTItulo.replace("\n"," "); 

  if(actualResult == expectedResultTitle ){
    console.log('La validacion del titulo fue correcta : ' + expectedResultTitle);
  } else {
    console.log('La validacion del titulo fue incorrecta : ' + actualResult);
  }  
});

/*=======================================================================*/

test
 .page `https://devexpress.github.io/testcafe/documentation/getting-started/`
 ('Validar Nav 4', async t => {
  console.log('-----------------------------------------------------------------------------------------');
  //  await t
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
    } 
}); 

