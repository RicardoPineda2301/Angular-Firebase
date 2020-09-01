# Pre-requisitos

## Instalación

### Node JS

Lo primero que necesita es tener instalado Node.js. Si no lo tiene, puede hacerlo desde [aqui](https://nodejs.org/es/download/)

### Git

Para instalar git, puede dirigirse a este sitio: [link](https://git-scm.com/download/win)

### Angular

Abra una terminal y escriba el siguiente comando:

```
npm install -g @augular/cli
```

### Angular-fire

Para instalar angularfire, recomiendo hacerlo localmente. Para ello abra una terminal y escriba:

```
npm install --save firebase @angular/fire
```

## Errores Comunes

- **WINDOWS** Si salta el error '.ps1 cannot be loaded because the execution of scripts is disabled on this system', abra una terminal de PoweShell en modo administrador, y coloque el siguiente comando:

```
Set-ExecutionPolicy Unrestricted
```
