# Conecta-Ya
Conecta-Ya es un proyecto orientado a resolver un problema cotidiano: quedarnos sin batería en los momentos más importantes. La propuesta busca diseñar una solución práctica y accesible que permita a las personas mantener sus dispositivos conectados y cargados en cualquier lugar.

# 📘 Proyecto Conecta-Ya — Actividades de Física

---

## ⚡ Primera Actividad: Sitio Web Interactivo

### 🎯 Objetivos específicos

- Desarrollar una web interactiva e informativa y publicarla.  
- Explicar y comunicar nuestra problemática mediante la web.  
- Plantear una experiencia interactiva que presente y muestre las posibles soluciones y concientice sobre las formas de prevención de nuestro problema al público.  

---

### 🧩 Descripción

Para la elaboración de la web usaremos diversos lenguajes de programación y software que utilizaremos en conjunto con la información de nuestro proyecto de investigación.  
Mediante otros métodos e hipervínculos integrados ofreceremos una experiencia interactiva a nuestra problemática y llevaremos control y registro de los usuarios mediante las cookies, que instalan en el dispositivo del usuario un identificador que las almacena para recordar información sobre su visita y mejorar la experiencia en línea.  

Este identificador es único para cada navegador, por lo tanto, aunque el usuario cambie de ubicación no se registrará una nueva visita.  
Esto nos acerca a un número de visitantes más exacto.  

---

### 🧠 Fundamentación

#### ¿Cómo aporta a nuestro proyecto?

Nos va a permitir generar conciencia e informar sobre nuestra problemática, como también mostrar y comunicar los datos recolectados por nuestra investigación y otras actividades.  
Además, ofreceremos otras soluciones accesibles y nos aseguraremos de poder informar sobre la prevención de este problema.  

Para realizarlo usaremos los siguientes programas, plataformas y lenguajes de programación:  

- **HTML:** lenguaje de marcado estándar utilizado para estructurar el contenido de las páginas web.  
- **CSS:** para definir la apariencia y el estilo de los documentos HTML.  
- **Bootstrap:** framework de desarrollo web que combina los anteriores.  
- **JavaScript:** lenguaje utilizado para que las páginas web sean interactivas.  
- **SASS:** preprocesador de CSS.  
- **GitHub:** plataforma que permite tener el código en la nube para que parte del equipo pueda contribuir.  
- **Git:** control de versiones.  
- **Vercel:** plataforma que nos permitirá publicarla.  

---

### 📊 Indicadores de logro

- ✅ **Logrado:** al menos 30 personas visiten la página.  
- ⚠️ **Medianamente logrado:** 20 personas visiten la página.  
- ❌ **Insuficiente:** menos de 20 personas visiten la página.  

---
---
---
---
---
---
## 🔋 Segunda Actividad: Construcción y demostración mediante un generador

### 🎯 Objetivos específicos

- Realizar esquema, planos generales y lista de materiales para llevar a cabo el generador.  
- Construcción del generador y uso de los materiales.  
- Uso y demostración del generador.  

---

### 🧩 Descripción

Para la construcción del generador usaremos los siguientes materiales:

- Una bobina hecha de hilo de cobre.  
- 15 pares de imanes de neodimio.  
- Tubos de PVC.  
- Lápices.  
- Cinta aislante.  
- Listones de madera (para la estructura).  

Nuestra construcción produce una cierta diferencia de potencial eléctrico al hacer variar el campo magnético, el cual usaremos para dar energía a una luz LED.  

---

### 🧠 Fundamentación

#### Campo Eléctrico

Un campo eléctrico existe en cualquier punto del espacio donde una carga de prueba, al colocarse en dicho punto, experimenta una fuerza eléctrica.  
La dirección del campo eléctrico en un punto es la misma que la dirección de la fuerza experimentada por una carga de prueba positiva colocada en el punto.  

#### Campo Magnético

Un imán genera a su alrededor un **campo magnético**, que es un campo vectorial.  
Esto significa que a cada punto alrededor del imán le corresponde un vector campo magnético.  

Este campo representa cómo las fuerzas magnéticas se distribuyen en el espacio que rodea una fuente magnética.  
Los campos magnéticos son dipolares: poseen un polo norte y un polo sur.  
Las líneas del campo magnético son siempre cerradas: salen del polo norte y llegan al sur.  

#### Ley de Faraday

**fem** significa *fuerza electromotriz*, que es un voltaje o diferencia de potencial eléctrico capaz de crear una corriente eléctrica.  
Faraday descubrió que se produce una fem inducida en una espira o en un circuito siempre que cambia la cantidad de líneas de campo magnético que pasan por el plano del circuito.  

El campo magnético generado por la corriente inducida se opone al cambio de flujo, fenómeno conocido como **inercia electromagnética**.  

---

### 📊 Indicadores de logro

- ✅ **Logrado:** explicar y definir claramente los planos, y que el generador sea funcional y demuestre el funcionamiento mediante un LED.  
- ⚠️ **Medianamente logrado:** se logra construir pero no se enciende el LED.  
- ❌ **No logrado:** no se logra construir el generador.  

---
---
---
---
---
---
## 🆘 Tercera Actividad: Botón SOS

### 🎯 Objetivos específicos

- Realizar el plan de trabajo y planos del circuito a usar.  
- Realizar la lista de materiales a utilizar.  
- Construir y armar el dispositivo.  

---

### 🧩 Introducción

Vamos a construir un botón con el objetivo de responder a nuestra problemática.  
Para llevar a cabo esto utilizaremos los siguientes materiales:

- **ESP32:** microcontroladores económicos de bajo consumo.  
- **SIM808:** módulo que tiene GSM/GPRS y GPS.  
- **Batería de litio.**  

**GSM:** permite realizar llamadas, enviar mensajes de texto (SMS) y acceder a servicios de datos.  
**GPRS:** permite la transferencia de datos por paquetes.  
**GPS:** red de satélites que permite determinar la ubicación, velocidad y hora con precisión.  

---

### 🧠 Fundamentación

La idea del botón S.O.S se origina en poder reemplazar la función primaria de la comunicación móvil: la comunicación vía mensaje.  
Su función radica en enviar un **SMS y la ubicación actual**, indicando que el sujeto se encuentra en peligro o emergencia.  

El botón activa una función que intenta enviar el mensaje con ubicación; si no es posible, envía solo el SMS.  
El número de emergencia se configura antes de usar el dispositivo.  

El módulo **SIM808** obtiene la ubicación y se comunica con la placa **ESP32**, alimentada por una batería de litio para garantizar autonomía.  

---

### 📊 Indicadores de logro

- ✅ **Logrado:** 3 o más personas logran construir el dispositivo y llevarlo consigo diariamente.  
- ⚠️ **Medianamente logrado:** 1 persona logra construirlo y usarlo.  
- ❌ **No logrado:** ninguna persona logra construirlo.

---
# 🆘 Guía rápida de configuración del botón SOS

---

## 🔧 1. Requisitos previos  

✅ Asegurarse de que el **botón SOS** esté ensamblado correctamente y conectado por **USB** a la computadora.  
💻 Tener instalado el **Arduino IDE**.  

📥 Descargar desde:  
👉 [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)

---

## 📂 2. Descargar el código  

🌐 Entrar al **repositorio de GitHub** del proyecto.  
📦 Descarga desde:  
👉 [https://github.com/techiesms/SOS-button-using-A9G---XIAO-C3](https://github.com/techiesms/SOS-button-using-A9G---XIAO-C3)  

1️⃣ Hacer clic en **“Code → Download ZIP”**.  
2️⃣ Descomprimir el archivo ZIP en una carpeta del escritorio.  

---

## 💻 3. Abrir el código en Arduino IDE  

📁 Dentro de la carpeta descargada, buscar el archivo **code.ino**  
🖱️ Abrirlo haciendo doble clic o desde el IDE: Archivo/Abrir/code.ino

---

## ⚙️ 4. Seleccionar la placa y el puerto  

🧭 En el menú superior del Arduino IDE: 

🔸 Ir a **Herramientas → Placa:** seleccionar el modelo correspondiente (por ejemplo Arduino Uno, Nano, etc.)  
🔸 Ir a **Herramientas → Puerto:** elegir el puerto que aparece con el nombre de tu placa  
💡 (por ejemplo `COM3` en Windows o `/dev/cu.usbmodem…` en macOS)

---

## 🚀 5. Subir el programa  

⬆️ Hacer clic en el botón **“Subir”**.  
⏳ Esperar a que aparezca el mensaje **“Subido correctamente”** en la consola inferior.

---

## ✅ 6. Finalización  

🎉 El **botón SOS** ya tiene cargado el código y está **listo para funcionar**.  
🔌 Podés desconectarlo del cable USB.

---
---
---
---
---
---

## 📈 Resultados

### Actividad 1: La página web

Consideramos esta actividad como **lograda**, gracias a que mediante la herramienta de registro (*Google Forms*) pudimos recolectar **65 usuarios** que visitaron la página web.  
Estas visitas son reales, ya que cada usuario debía visualizar la web para contabilizarse.  

La página web es de contribución pública: cualquier persona puede incluir contribuciones para su posterior aprobación, fomentando la participación en *Conecta-Ya*.  

---

### Actividad 2: Generador

Consideramos que fue **medianamente lograda**, ya que logramos construir el dispositivo pero no generar la energía suficiente para encender el LED.  

#### Mejoras posibles:
1. Optimizar el diseño para hacerlo más eficiente y atractivo.  
2. Mejorar el bobinado del cobre, aumentando la cantidad de vueltas y reduciendo espacios.  
3. Implementar una **LED de bajo consumo**, visible con menor energía.  

Con estas mejoras, el generador podrá ofrecer una mejor demostración y utilidad práctica.  

---

### Actividad 3: Botón SOS

#### Objetivos específicos

- Realizar el plan de trabajo y planos del circuito a usar.  
- Realizar la lista de materiales.  
- Construir y armar el dispositivo.  

#### Indicadores de logro

- ✅ **Logrado:** 3 o más personas construyen el dispositivo y lo usan diariamente.  
- ⚠️ **Medianamente logrado:** 1 persona lo construye y lo usa.  
- ❌ **No logrado:** nadie logra construirlo.

⸻
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/SASS-CC6699?logo=sass&logoColor=white">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white">
</p>
⸻

👥 Equipo de Conecta-Ya

Integrantes:
Juan Pereira, Erik Méndez, Manuel Maciel, Nicolás Miños, Bruno Silva, Axel Rodríguez y Facundo Tato.

⸻

🏁 Conclusión

Conecta-Ya integra ciencia, tecnología y compromiso social en un mismo proyecto.
A través de la web, el generador y el botón SOS, demostramos cómo la física y la innovación pueden combinarse para resolver problemas reales y mejorar la calidad de vida cotidiana.

“Nunca más sin batería en los momentos importantes.”

⸻

© 2025 — Conecta-Ya | Pedro Poveda School, Montevideo, Uruguay

⸻
