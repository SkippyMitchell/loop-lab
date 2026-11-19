// Runs eSpeak (speak.js, GPL v3: https://github.com/kripken/speak.js) off the main thread.
importScripts('speakGenerator.js');
onmessage = function (e) {
  var d = e.data, wav = null;
  try { wav = generateSpeech(d.text, d.args); } catch (err) { wav = null; }
  if (wav) postMessage({id: d.id, wav: wav}, [wav.buffer]);
  else postMessage({id: d.id, wav: null});
};
postMessage({ready: true});
