// --- Configuración de Luna ---
const output = document.getElementById("output");
const speakBtn = document.getElementById("speakBtn");

const synth = window.speechSynthesis;
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "es-ES";

// --- Función para hablar ---
function speak(text) {
  synth.speak(new SpeechSynthesisUtterance(text));
}

// --- Cuando el usuario habla ---
recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript.toLowerCase();
  output.textContent = "Tú dijiste: " + transcript;

  let respuesta = "No entendí eso.";

  if (transcript.includes("hola")) respuesta = "Hola, soy Luna, tu asistente virtual.";
  else if (transcript.includes("hora")) respuesta = "Son las " + new Date().toLocaleTimeString();
  else if (transcript.includes("día")) respuesta = "Hoy es " + new Date().toLocaleDateString();
  else if (transcript.includes("adiós")) respuesta = "Adiós, que tengas un buen día.";
  else if (transcript.includes("cómo estás")) respuesta = "Estoy muy bien, gracias por preguntar.";

  speak(respuesta);
};

// --- Cuando presionas el botón ---
speakBtn.addEventListener("click", () => {
  recognition.start();
  output.textContent = "🎤 Escuchando...";
});
