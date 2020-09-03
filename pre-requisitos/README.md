# Pre-requisitos

## Instalación

### Node JS

Lo primero que necesita es tener instalado Node.js. Si no lo tiene, puede hacerlo desde [aqui](https://nodejs.org/es/download/)

### Git

Para instalar git, puede dirigirse a este sitio: [link](https://git-scm.com/download/win)

### Angular

Abra una terminal y escriba el siguiente comando:

```
npm install -g @angular/cli
```

### Angular-fire

Para instalar angularfire, recomiendo hacerlo localmente. Para ello abra una terminal en el directorio de su proyecto y escriba:

```
npm install --save firebase @angular/fire
```

### Servicio de Autenticación

Para instalar golablmente el servicio de autenticación, abra una termian y escriba: 
```
ng g s services/auth
```

## Errores Comunes

- **WINDOWS** Si salta el error '.ps1 cannot be loaded because the execution of scripts is disabled on this system', abra una terminal de PoweShell en modo administrador, y coloque el siguiente comando:

```
Set-ExecutionPolicy Unrestricted
```
