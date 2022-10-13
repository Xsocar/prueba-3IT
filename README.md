
# Prueba Full Stack Developer
Este proyecto está desarrollado utilizando Angular y spring boot con BD en memoria
Se utiliza Docker como contenedor de este full stack.

NOTA: este proyecto esta divido en cliente y servidor, las versiones de node para cliente y java para servidor son las ultimas versiones esto por mero entretenimiento de comprobar la funcionalidad de docker.



## Instalación
Una vez instalado o descargado este proyecto para desplegar las 2 partes de esta prueba se utilizó docker-compose por lo que solo es necesario el siguiente comando para ejecutarlo:
```bash
docker-compose up
```
una vez desplegado el cliente y servidor quedaran 
corriendo en localhost en los puertos 80 y 8080 respectivamente
por lo que para obtener la vista del cliente se debe acceder en el
 navegador a: 

[http://localhost:80/](http://localhost:80/)

Se utilizo Bootstrap para el diseño de la vista, siendo minimalista en cuanto a la vista.

## API

#### /

```http
  GET /
```
Retorna un saludo de bienvenida a la api.

#### /test/all

```http
  GET /test/all
```

Retorna los tests que se han realizado

#### /test/

```http
  POST /test/
```

Se puede enviar un test con email y estylo seleccionado, los dos en formato json, y tipo string.

#### /style/all

```http
  GET /style/all
```

Retorna los estilos musicales guardados el la bd, esto para controlar en bd los estilos.

