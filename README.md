# formulario TOP

Este repositorio es para crear un formulario siguiendo las ideas plasmadas en [The Odin Proyect](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form).

## Screenshot

![image](https://user-images.githubusercontent.com/87911089/189694057-54ff6056-d18d-47a0-82b0-5f11f4de480c.png)

## Herramientas aplicadas

Lo más notorio es el uso de pseudo-clases para alterar a los inputs

![image](https://user-images.githubusercontent.com/87911089/189696265-8e5b1854-0b74-49e6-8167-9f85aa64bce1.png)

Se trato de tener una estructura que pueda almacenar mensajes:
```html
<div class="form-row">
 <label for="tel">TELEFONO</label>
 <input type="tel" id="tel" name="tel" required">
 <span></span> <!--SPAN para mostrar mensajes-->
</div>
```

Y se fueron usando las pseudo-clases *:valid* e *:invalid* para jugar con los colores de error y confirmación.

**:placeholder-shown** se usó, junto con el efecto cascada, para establecer valores default, antes de manipular algún estilo.

**span::before** fue usado para no repercutir en el flow global de los inputs, junto con las siguientes propiedades:
```css
#main-form .form-row {
 position:relative;
}
#main-form span::before {
 position: absolute;
 top: 100%; /*para que arranque a verse luego de que se muestra el form-row*/
 left: 0;
 opacity: .8;
}
```


## Recursos Usados

- La imagen de fondo fue sacada de [Unsplash](https://unsplash.com/es), todos los créditos para [Spenser Sembrat](https://unsplash.com/es/@spensersembrat).
- Se usaron dos tipos de fuentes, ambas sacadas de [Google Fonts](https://fonts.google.com/)
    - [Kristi](https://fonts.google.com/specimen/Kristi?query=kristi)
    - [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto)
- La imagen del logo fue sacada de [Flaticon](https://www.flaticon.es/)
