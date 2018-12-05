
# TEORIA - CONCEPTOS
    ## Gestores de dependencias, archivos
        - webpack, toma archivos assets por lo general en un proyecto, se transforman y 
        se pasan a producción mediante JS, JSON. Bootstrap también se puede utilizar con webpack pero es un poco más complejo

        - Gulp: ejecuta compandos para ejecutar tareas, podemos decirle a node para transformar los archivos HTML, minificar CSS, minificar JS, ficheros SASS, etc.
        Escribe tareas autimatizadas (copiar ficheros js, css, compresión de imágenes, etc)

        - Browsersync: mantiene el proyecto actualizado en el navegador, se puede tener
        un pequeño servidor.

# INSTALACIÓN
    1. npm install --yes

    2. Dependencias:

    - GULP
    npm install gulp .D

    - SASS (incluyendo gulp-cli)
    npm install -D gulp gulp-cli gulp-sass

    - MINIFICAR CÓDIGO:
        ## CSS
            npm install -D gulp-minify-css
        ## JS

    - CONCATENAR:
    npm install -D gulp-concat




