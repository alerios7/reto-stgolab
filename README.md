Consideraciones generales:
- El proyecto debe ser escrito en Javascript, NodeJS, HTML5 y CSS.
- El sistema de subversion será git, y el mismo debe estar publicado en github para su revisión y evaluación.
- Se permite el uso de librerías de código abierto
- La experiencia de usuario tiene la misma importancia que el codigo; el proyecto tiene que ser tanto correcto técnicamente como amigable y fácil de usar.

META: Implementar un servidor web a partir de Express o Koa con los siguientes features:
- Ruta GET "/": debe mostrar un formulario con las siguientes características:
    - Contendrá 3 inputs: Email (texto), Color: verde y azul (radio), Numero: una lista del 1 al 3 (select)
    - Se deben validar los inputs de manera dinámica (sin recargar la pagina):
      - Email debe validar que es un email valido
      - Color debe validar que hay UNA opción seleccionada y la misma corresponde a una de las opciones ofrecidas
      - Numero debe validar que hay UNA opción seleccionada y la misma corresponde a uno de los números ofrecidos
    - El botón para enviar el formulario tiene las siguientes características:
      - No hace el envío si los campos no son validos y esto se le informa al usuario de manera adecuada
      - El envio de los datos se hará con AJAX a la ruta PUT "/user"
      - Una vez se reciba la respuesta del request AJAX, se debe informar el resultado al usuario de manera adecuada
    - Ruta PUT "/user" es un endpoint con las siguientes características:
      - recibe el objeto json enviado por el formulario con AJAX, vuelve a validar los datos y responde con JSON:
        - { status: "Valido!" } si los datos recibidos son validos
        - { status: "Error" } si los datos son inválidos

Los siguientes puntos no son obligatorios pero tendrán una valoración extra:

- Utilizar Koa en ves de Express
- Utilizar sintaxis y features de ES6 y/o ES7 con Babel
- Utilizar promesas para el request de AJAX o donde sean beneficiosas
- Implementación de Tests automatizados con Mocha
- Utilizar Webpack o Browserify para empaquetar el código del cliente
- Utilizar React para mostrar y manejar los elementos del formulario
