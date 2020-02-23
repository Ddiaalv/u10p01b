# u10p01b

## 1. Como descargar el proyecto

- `git clone https://github.com/Ddiaalv/u10p01b.git u10p01b`
- `cd u10p01b`
- `rm -rf .git`
  <br>
  _NOTA_ : Recordar borrar la carpeta .git con el comando `rm -rf .git` o de forma manual desde el explorador de archivos.

## 2. Como ejecutar el proyecto

En el directorio del proyecto, debemos ejecutar `npm install` para descargar todas las dependencias. Una vez se hayan descargado todas las dependencias, ejecutamos `npm run start` para activar el servidor de desarrollo en local y poder ver el proyecto en local.

Si queremos generar el proyecto preparado para produccion ejecutamos `npm run build`, lo que hará que se genere el proyecto en la carpeta `dist`, lista para subir al servidor web.

### NPM Scripts

| Comandos NPM      | Descripción                                   |
| ----------------- | --------------------------------------------- |
| ⚙️`npm run start` | Servidor local de desarrollo                  |
| ⚙️`npm run build` | Genera el proyecto preparado para producción. |

### Chuleta despliegue

- `git clone https://github.com/Ddiaalv/u10p01b.git u10p01b`
- `cd u10p01b`
- `rm -rf .git`
- `npm install`
- `npm run start`
