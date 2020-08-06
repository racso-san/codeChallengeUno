# codeChallengeUno

PRECONDICIÓN

1- Instalar Node js (npm con node)
3- Instalar testcafe (npm install -g testcafe)
3- Tener cuenta en github
4- Tener instalado un control de versiones (Ejem: Gitkraken)
5- Tener un editor de codigo (Ejem: Visual studio code)

PASOS A SEGUIR - Crear repositorio:

1-  Ingresar a la pagina de github (https://github.com/)
2-  Loguearse con su cuenta
3-  Click en la imagen en miniatura de su perfil ubicado en el menú
4-  Desplegar el menú
5-  Seleccionar la opción "You repositories"
6-  Click en el botón "New"
7-  Ir a la casilla "Repository name"
8-  Ingresar un nombre para el repositorio
9-  Seleccionar el checkbox "Public"
10- Click en "Create repository"
11- Ingresar al repositorio creado -> Code
12- Click en el botón "Code" (botón verde)
13- Copiar link

PASOS A SEGUIR - Instalar repositorio en gitkraken

14- Abrir gitKraken
15- Click -> File -> New tap -> Clone a repo
16- Pegar en link en la casilla "URL"
17- Seleccionar el destino del repo en "Where to clone toS"
18- Click en "Clone to repo"
19- Click en abrir repo
20- Click en el botón "Branch"
21- Ingresar un nombre
22- Click para guardar
23- Buscar el repositorio almacenado anteriormente en la pc
24- Abrir el repositorio con un editor de código

PASOS A SEGUIR - Estructura del proyecto

25- Click en "New folder"
26- Crear dos carpetas (pages y tests)
27- En "pages" crear un archivo llamado page-model.js
28- En "tests" crear un archivo llamado test.js y otro llamado test2.js
29- Click en "New file"
30- Crear un archivo llamado "package.json" (En el proyecto inicial no en los folder page y tests)
31- Ingresar al "package.json"
32- Crear un Script
33- En el script ingresar valores de test y test2
34- En cada valor Ingresar -> Testcafe(palabra reservada de autom), un navegador y la ruta de test y test2

PASOS A SEGUIR - Guardar los cambios del proyecto

35- Ingresar a gitkraken
36- Seleccionar la rama creada
37- Click en el botón "Stage all changes" (para aceptar los cambios realizados)
38- Ingresar una descripción
39- Click en "Commit changes to .. file"
40- Click en el botón "Push"
41- Ir a la opcion "PULL REQUESTS"
42- Completar las opciones (FromRepo: el repo del proyecto , Branch: Rama creada y master)
43- Click en el boton "Create pull request"
44- Ingresar al github -> proyecto -> Pull request
45- Click y aceptar "Merge pull request"
46- Ingresar a gitkraken
47- Seleccionar la rama "master"
48- Click en "Pull"

PASOS A SEGUIR - Codificar page-model.js

49- Ingresar al archivo "page-model.js"
50- Importar el selector de testcafe
51- Crear una classe llamada "Page"
52- Crear un constructor y llamar a los CSS selector que se necesiten
53- En la clase crear un método el cual tome un parámetro, lo guarde en una variable y se obtenga el texto
54- Realizar los pasos 35 al 48 nuevamente

PASOS A SEGUIR - Codificar test.js

55- Ingresar a test.js
56- Importar los selectores y la page(page-model)
57- Ingresar -> fixture `Authentication tests`(manera de organizar testcafe)y la url del test
58- Crear un arreglo donde tendra los datos para el test
59- Crear variables necesarias para el test
60- Iterar con un if para recorrer los arreglos y validar
61- Crear un segundo test
62- Usar el método ".click" para seleccionar y darle click al botón
63- Crear un tercer test
64- Llamar a las variables con page.nombreSelector o funciones
65- Crear un cuarto test
66- Ingresar la url requerida para el test
67- Crear en el un arreglo con los datos requeridos para validar
68- Se usara un for para recorrer el arreglo y validar
69- Seguir los pasos 35 al 48

PASOS A SEGUIR - Codificar test2.js

70- Ingresar a test2.js
71- Importar los selectores y la page(page-model)
72- Ingresar -> fixture `Authentication tests`(manera de organizar testcafe)y la url del test
73- Metodo para darle click al boton, identico al test.js
74- Segundo test identico al cuarto del test.js, pero usando "click (Selector('a').withText(myArrayNavBar[i])") obteniendo el texto de manera diferente
75- Seguir los pasos 35 al 48

PASOS A SEGUIR - Correr el programa

76- Abrir la consola
77- Ingresar npm run nombreDelTest
