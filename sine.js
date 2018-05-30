
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const osc = context.createOscillator();
  osc.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
  osc.frequency.value = 2500; // value in hertz
  osc.connect(context.destination);
  osc.start();
  osc.stop(context.currentTime + 1);
