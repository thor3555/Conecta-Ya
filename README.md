# Conecta-Ya
Conecta-Ya es una web desarrollada como primera actividad del proyecto de física del año 2025 del liceo Pedro Poveda, esta está realizada con el fin de presentar, informar y prevenir sobre nuestra problemática, además de funcionar como una introducción al proyecto para el usuario.

# 📘 Proyecto Conecta-Ya — Actividades de Física

---
🌐 Actividad 1: Desarrollo de la Página Web Interactiva

🎯 Objetivos Específicos
	•	💻 Desarrollar una web interactiva e informativa y publicarla.
	•	🗣️ Explicar y comunicar nuestra problemática mediante la web.
	•	🌱 Plantear una experiencia interactiva que presente soluciones y concientice sobre la prevención del problema.

📝 Descripción

Para la elaboración de la web utilizamos diversos lenguajes de programación y software en conjunto con la información de nuestro proyecto de investigación.
Mediante hipervínculos y elementos interactivos, ofrecemos una experiencia informativa y atractiva al público.

Además, implementamos cookies para registrar usuarios y obtener un número de visitantes más preciso. Cada cookie almacena un identificador único para recordar la visita, sin importar el cambio de ubicación del usuario.

💡 Fundamentación

Nos permite concientizar e informar sobre nuestra problemática, comunicar los datos recolectados, ofrecer soluciones accesibles y mostrar formas de prevención.

🧩 Herramientas utilizadas:
	•	HTML → estructura del contenido
	•	CSS → estilo y diseño
	•	Bootstrap → framework visual
	•	JavaScript → interactividad
	•	SASS → preprocesador de CSS
	•	GitHub → colaboración en la nube
	•	Git → control de versiones
	•	Vercel → publicación de la web

📊 Indicadores de Logro
	•	🟢 Logrado: 30 o más personas visitan la página.
	•	🟡 Medianamente logrado: 20 personas visitan la página.
	•	🔴 Insuficiente: menos de 20 personas visitan la página.

🏁 Resultados

Esta actividad fue lograda con éxito 🎉.
Mediante Google Forms, registramos 65 usuarios que visitaron la página web, cumpliendo el objetivo de informar y comunicar.
La web es de contribución pública y cualquiera puede participar mediante el repositorio:
🔗 Conecta Ya - GitHub￼

⸻

⚙️ Actividad 2: Construcción del Generador Eléctrico

🎯 Objetivos Específicos
	•	✏️ Realizar esquema, planos y lista de materiales.
	•	🧰 Construir el generador.
	•	💡 Demostrar su funcionamiento.

🧱 Descripción

Materiales utilizados:
	•	Bobina de hilo de cobre
	•	15 pares de imanes de neodimio
	•	Tubos de PVC
	•	Lápices ✏️
	•	Cinta aislante
	•	Estructura de listones de madera

El generador produce una diferencia de potencial eléctrico al variar el campo magnético, capaz de encender una luz LED.

💡 Fundamentación

Un generador eléctrico convierte energía mecánica en energía eléctrica gracias al principio de inducción electromagnética descubierto por Michael Faraday.
Al girar una bobina de cobre cerca de los imanes, se genera una corriente eléctrica.

Los imanes de neodimio crean el campo magnético necesario, orientados con sus polos en la misma dirección (norte-sur).
El cambio de flujo magnético induce una fuerza electromotriz (fem), es decir, un voltaje capaz de producir corriente.

📊 Indicadores de Logro
	•	🟢 Logrado: planos definidos y generador funcional (LED encendido).
	•	🟡 Medianamente logrado: construido pero sin encender el LED.
	•	🔴 No logrado: no se construyó.

🏁 Resultados

La actividad fue medianamente lograda ⚙️.
Se logró construir el dispositivo, pero no generar suficiente energía para encender el LED.

🔧 Aspectos a mejorar
	1.	Diseño: hacerlo más eficiente y visualmente atractivo.
	2.	Bobinado: mayor cantidad y mejor calidad del enrollado de cobre.
	3.	LED de bajo consumo: ideal para una demostración clara con poca energía.

Implementando estas mejoras se podrá obtener una demostración más funcional y profesional.

⸻

🚨 Actividad 3: Construcción del Botón S.O.S

🎯 Objetivos Específicos
	•	📋 Elaborar el plan de trabajo y planos del circuito.
	•	⚙️ Crear la lista de materiales.
	•	🛠️ Construir y ensamblar el dispositivo.

🧱 Materiales
	•	ESP32 (microcontrolador de bajo consumo)
	•	SIM 808 (módulo con GSM/GPRS y GPS)
	•	Batería de litio

📡 Componentes explicados
	•	GSM: comunicación móvil (llamadas y SMS).
	•	GPRS: envío de datos por paquetes.
	•	GPS: posicionamiento global y ubicación precisa.

💡 Descripción

El botón S.O.S. envía un SMS con la ubicación del usuario a un número preconfigurado en caso de emergencia.
Se activa mediante un botón y funciona gracias al módulo SIM808 conectado al ESP32, alimentado por una batería de litio.

El objetivo es ofrecer ayuda inmediata ante una situación de peligro, incluso si el teléfono móvil no está disponible.

💬 Fundamentación

El botón reemplaza la función básica del celular: comunicación rápida en emergencia.
Su código permite enviar mensajes automáticos con ubicación.
Si no puede enviar la ubicación, intentará al menos enviar el SMS de alerta.

La configuración del número de contacto se realiza durante la instalación inicial del dispositivo.

⸻

🧭 Guía Rápida de Configuración del Botón S.O.S.
	1.	🔌 Requisitos previos
	•	Botón ensamblado y conectado por USB.
	•	Arduino IDE instalado → Descargar aquí￼
	2.	⬇️ Descargar el código
	•	Repositorio: GitHub - SOS Button￼
	•	“Code → Download ZIP”
	•	Descomprimir el archivo.
	3.	📂 Abrir el código en Arduino IDE
	•	Buscar code.ino
	•	Abrir desde el IDE.
	4.	⚙️ Seleccionar la placa y el puerto
	•	Herramientas → Placa → (Arduino Uno/Nano, etc.)
	•	Herramientas → Puerto → seleccionar el correspondiente (COM3, /dev/cu.usbmodem…).
	5.	🚀 Subir el programa
	•	Clic en “Subir”
	•	Esperar el mensaje: “Subido correctamente”
	6.	✅ Finalización
	•	El botón ya está configurado y listo para funcionar.
	•	Puede desconectarse del cable USB.

⸻

🏁 Resultados

Esta actividad no fue lograda debido a limitaciones económicas 💰.
El costo estimado para construirlo ronda los $5000, incluyendo todos los componentes.

🔧 Mejoras propuestas
	1.	Optimización de materiales: buscar versiones más económicas y accesibles.
	2.	Guía personalizada: crear una versión explicada por el equipo con ejemplos.
	3.	Prototipo demostrativo: incluir una muestra para presentar el funcionamiento.

💬 Comunidad

Para compartir avances, mejoras o construcciones del dispositivo, se propone el hashtag:
👉 #botón-sos-poveda




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
