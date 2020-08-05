import { Selector } from 'testcafe';

class Page {
    constructor () { this.funcion = 
        this.funcion1 = Selector('.feature-1');
        this.funcion2 = Selector('.feature-2');
        this.funcion3 = Selector('.feature-3');
        this.funcion4 = Selector('.feature-4');
        this.funcion5 = Selector('.feature-5');
        this.funcion6 = Selector('.feature-6');

        this.button = Selector('.get-started-button');

        this.url = Selector('.banner-text');
        this.titulo = Selector('.title');

        this.barraNav = Selector('.doc-top-nav-wrapper');
    }
    
    async guardarTexto (funcion) {
     //   await t
        const funcionTexto = funcion
    //    .child('p')       
        const resultFun =  funcionTexto.innerText
        return resultFun;
    }
   
}

test('Presionar boton de inicio 2', async t => {
    console.log('-----------------------------------------------------------------------------------------');
    let guardarFuncion = page.button 
    await t
    .click(guardarFuncion)  
  });
  
  /*=======================================================================*/

  test('Validar el título de la página 3', async t => {
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