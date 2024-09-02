# yarcoDelivery :cactus: 

Este proyecto fullstack es una web de delivery local enfocada en la simplicidad y eficiencia, destinada a pequeños negocios de comida en ciudades pequeñas. Incorporando autenticación de usuarios, validación, rutas seguras y Stripe para pagos.

![screenshot](/video/yarco-feed.webp)

## Funcionalidades

:small_orange_diamond: Para usuarios: Posibilidad de pedir comida, buscar restaurantes por localidad, precio y tipo de comida.

:small_blue_diamond: Para restaurantes: Registrar un restaurante, actualizarlo y gestionar pedidos directamente desde la web.

## Demo

![Demo](/video/yarco-demo.gif)

Podés loguearte con tu cuenta de google o usar:
- usuario: **test@sanjuan.com**
- pass: **Test1234-**

Para hacer un pago podes usar las tarjetas de prueba de: [docs.stripe.com
](https://docs.stripe.com/testing#international-cards)


```
Argentina (AR)	4000000320000021	Visa

United States (US)	4242424242424242 Visa

Spain (ES)	4000007240000007	Visa

```


![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


![phone](/video/yarco_phone.webp)

## Despliegue

El proyecto está desplegado en [Render](https://render.com). Puedes acceder a la aplicación en vivo [aquí](https://sanjuan-delivery-app-frontend.onrender.com/).

## Uso Local

Instrucciones para instalar y ejecutar el proyecto localmente.

El proyecto fue desplegado por separado el backend del frontend.

```bash
git clone https://github.com/ssanjua/sanjuan-delivery-app
cd sanjuan-delivery-app
npm install
npm run dev