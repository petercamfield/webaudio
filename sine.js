
  var context = new (window.AudioContext || window.webkitAudioContext)();
  var osc = context.createOscillator();
  osc.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
  osc.frequency.value = 2500; // value in hertz
  osc.connect(context.destination);
  osc.start();
  window.setTimeout(osc.stop, 1000);

