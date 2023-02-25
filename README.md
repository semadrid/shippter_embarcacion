# shippter_embarcacion
Prueba Shippter
# Introducción
Shippter_embarcacion es una aplicación para crear, editar, borrar y ver en un listado de una lista de embarcaciones.
# Requerimientos 
Esta aplicación utiliza ReactJS, NodeJS y MongoDB. Debe ser utilizado en un navegador que soporte ReactJS.
# Pasos para la instalación
Primero partir por la instalación de MongoDB que puede descargarse desde el siguiente link:
<br>
https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.4-signed.msi

Seguimos los pasos de la instalación y cuando se nos pregunte si deseamos utilizar MongoDB Compass lo dejamos seleccionado e instalamos como servicio.

Una vez instalado MongoDB seguimos con NodeJS que puede descargarse del siguiente link:
<br>
64-bit https://nodejs.org/dist/v18.14.2/node-v18.14.2-x64.msi
<br>
32-bit https://nodejs.org/dist/v18.14.2/node-v18.14.2-x86.msi

Durante la instalación se nos preguntará si deseamos usar Chocolatey, podemos poner que no ya que no es necesario.

Luego de instalar NodeJS reiniciaremos el computador para que los PATH se agreguen correctamente.

Una vez reiniciado en el Compass de MongoDB crearemos una base de datos llamada shippter_db y una colección "default" que por el momento no utilizaremos.

Luego con Git cargaremos el proyecto en una carpeta y correremos el comando "npm install" para traer las dependencias necesarias y después utilizar el "npm start" para iniciar Node.

Para Continuar iniciaremos react con el comando 'npm run react-start' Y en nuestro navegador se abrira una página donde se reciben las embarcaciones que iremos creando a traves de la misma página.

# Mapa de localización

A medida que vayamos ingresando nuevas embarcaciones en el mapa que se encuentra debajo podrán apreciar donde se encuentra el barco.

Para esto se utilizo una librería de react llamada react-simple-maps que nos permite posicionar en cierta longitud y latitud.



