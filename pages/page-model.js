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

    async guardarURL (url) {
    //   await t
        const funcionURL = url
        .child('a')
        .withAttribute('href', 'url');
               
       // const resultFun =  funcionURL.innerText
      //  return url;
         }
}

export default new Page();