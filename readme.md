# JS | Chronometer

## Introducción

En este ejercicio vamos a construir un cronómetro.
Nuestro cronómetro tendra una pantalla LCD, donde se mostrarán minutos y segundos. Tendrá también dos botones diferentes que cambiarán su comportamiento dependiendo del estado del cronómetro. Por ejemplo, pasará a botón STOP cuando el cronómetro esté funcionando.

Por último, añadiremos una función SPLIT.

![](https://imgur.com/ZaTnDnz.gif)

### Requisitos

- Usa `setInterval` para actualizar el cronómetro cada segundo.
- Usa la notación de clases de ES6 para crear objetos que encapsulen las funcionalidades del  `Chronometer`.

### Entregables

Este ejercicio tendrás que subirlo a tu repositorio y hacer *pull-request* al repositorio del ejercicio.

### Código de partida

La estructura principal del ejercicio ya está creada:

```
starter-code/
├── jasmine
├── javascript
│   └── main.js
    └── chronometer.js
├── stylesheets
│   └── fonts.js
        └── ds.digib.ttf
    └── styles.css
├── index.html
├── SpecRunner.html
```

La hoja de estilos ya tiene la fuente `ds-digib` añadida. Esta fuente nos ayudará a definir una pantalla LCD de los cronómetros clásicos.

El reloj también está creado en la página `index.html` para que te centres sólo en javascript.

![](https://imgur.com/xfHTpKu.png)

## Instrucciones

Partiremos de los tests Jasmine que servirán pra probar la lógica del código. Por tanto, empieza por aquí y después manipula el DOM para mostrar el resultado.

Codifica en el fichero `javascript/chronometer.js`.

### Iteración 1: La lógica

#### La clase Chronometer

El constructor de la clase Chronometer no recibirá ningún argumento pero declarará dos propiedades: `currentTime`, `intervalId`.

#### startClick()

Crea el método `startClick()` de la clase Chronometer. Este método es bastante simple, debe comenzar una función `setInterval` que añadirá 1 a la propiedad `currentTime` por cada segundo.

El `setInterval` se asignará a la propiedad  `intervalId`, de esta manera será posible eliminarlo después.

#### setMinutes()

Nuestra *current time* viene marcada por nuestro reloj, pero éste solo utiliza segundos, así que necesitamos crar un método que nos devuelva los minutos correspondientes al valor que tenemos en la propiedad `currentTime`!

#### setSeconds()

Al igual que hicimos con los minutos, necesitamos un método que devuelva los segundos que tenemos en la propiedad `currentTime` después de eliminar los minutos.

#### twoDigitsNumber()

La pantalla de nuestro cronómetro muestra dos dígitos para minutos y para segundos, auqne los métodos `setMinutes` y `setSeconds` devuelven en ocasiones un único dígito. Crearemos un método que reciba un valor por parámetro y devuelva el mismo valor con una longitud de dos dígitos.

**Este es un ejemplo extraordinario de una funcionalidad que necesitaremos en diversas ocasiones, por este motivo lo aislaremos en una función que invocaremos todas las veces que la necesitemos**

#### setTime()

Casi está!! Necesitamos el método `setTime` que se invocará en cada **interval** del `setInterval` en nuestro método `startClick`. Esta función creará una variable `minutes` y una `seconds` con sus valores respectivos según el  `currentTime`. Deberíamos usar los métodos `setMinutes`, `setMinutes` y `twoDigitsNumber` para hacer esto.  :wink:

#### stopClick()

Este método debería parar el `intervalId`, nada más!!

#### resetClick()

Reseteará el cronómetro. Asignando 0 a la propiedad `currentTime`!

### Iteración 2: Manipulación del DOM

La lógica del cronómetro está hecha y funciona perfectamente. Ahora necesitamos incorporar los componentes visuales a la web.

Como puedes comprobar, hay dos botones diferentes: start y clear. Son los botones que deben aparecer cuando el cronómetro no está funcionando. Cuando el cronómetro esta funcionando debería cambiar el comportamiento para parar el cronómetro. Mientras que el botón de reset debería cambiar a split.

Ambos botones tendrán un comportamiento diferente dependiendo del cronómetro. Estos botones son: `btnLeft` y `btnRight` en el HTML. Los valores que toman se recogen en la siguiente tabla:
| Chronometer Status | Button ID | Text | CSS Class |
|---------|-----------|------|----------|
| Stopped | `btnLeft` | START | `btn start` |
| Stopped | `btnRight` | RESET | `btn reset` |
| Running | `btnLeft` | STOP | `btn stop` |
| Running | `btnRight` | SPLIT | `btn split` |

**No tienes que crear ninguna clase CSS. Todas ya están definidas en el código de partida `starter-code`.**

En el fichero `main.js` encontrarás dos eventos click asociados a los `btnLeft` and `btnRight` respectivamente. Debes generar el código necesario para cambiar el estado de los botones.

Esto significa que cuando cliquemos en el botón `btnLeft`, si tenía asociada la clase `start`, entonces tendrás que modificar el comportamiento de los botones `btnLeft` and `btnRight` para que coincidan con el estado *running* descrito en la tabla anterior.
Por otro lado, si el `btnLeft` no tenía asociada la clase `start`  entonces se tendría que cambiar las propiedades de ambos botones para que coincidan con la descripción de la tabla

#### Cambia el texto de los botones
Trabaja en el fichero `main.js` para que:

- si el botón izquierdo se clica mientras el cronómetro está parado ocurra lo siguiente:       - Cambies el texto del botón `btnLeft` a STOP, y la clase a `btn stop`.
    - Cambies el texto del botón `btnRight` a SPLIT, y la clase a `btn split`.

- si el botón izquierdo se clica mientras el cronómetro está funcionando ocurra lo siguiente: 
    - Cambies el texto del botón `btnLeft` a START, y la clase a `btn start`.
    - Cambies el texto del botón `btnRight` a RESET, y la clase a `btn reset`.

- En el fichero `main.js` se debe crear una nueva instancia del objeto `Chronometer`.

- Crea el código necesario en `main.js` para llamar al método `startClick` del cronómetro si el boton tiene asociada la clase `start`, o el método `stopClick` si el botón tiene asociada la clase `stop`.

#### Mostrar el cronómetro

Cada segundo necesitamos actualizar la pantalla. Así que crea una función que reciba los valores minutos y segundos y los imprima en el HTML.

![](https://imgur.com/HxbnGWN.png)

### Iteración 3: Split time

La siguiente utilidad servirá para implementar 
el botón de split, localizado en el botón `btnRight` cuando el cronómetro está funcionando. En este caso deberás crear también el HTML y el CSS además del JavaScript.

#### HTML & CSS
En primer lugar, crea en el `index.html` una lista ordenada donde irás añadiendo los tiempos cada vez que se presione el botón split.

#### JavaSript
Ahora crea la funcionalidad del botón. Cada vez que se presione el botón split se creará un nuevo elemento `<li>` y se añadirá a la lista. El texto de este elemento será el tiempo actual del cronómetro. 
![](https://imgur.com/S0hQiD4.png)

### Iteración 4: Reset

Para acabar, crearemos la funcionalidad de reset.que borrará todos los datos del reloj. Para ello pondremós a 0 minutos y segundos y se borrarán los elementos `<li>` creados.

### BONUS: Milisegundos

Para añadir milisegundos tendremos que manipular HTML, CSS y Javascript. En el HTML se tendrá que crear un contenedor para mostrar los milisegundos, cambiando el estilo del contenedor. En el fichero de JavaScript, tendrás que añadir la lógica para mostrar los milisegundos, también al contador de splits.

![](https://imgur.com/7oUVA32.png)

#### Tareas

- Añade el HTML necesario para mostrar los milisegundos en el reloj
- Añade los estilos necesarios al CSS para mostrar los milisegundos, tal y como quieras
- Crea la lógica en JavaScript:
  - Par contar los milisegundos
  - Mostrar los milisegundos avanzando.
  - Mostrar los milisegundos cuando hagas una captura de tiempo (split).
  - Borrar los milisegundos cuando se clique en el botón reset.
