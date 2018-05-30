  const context = new (window.AudioContext || window.webkitAudioContext)();
  const osc = context.createOscillator();
  osc.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
  osc.frequency.value = 2500; // value in hertz
  const gain = context.createGain();
   




  osc.connect(gain);
  gain.connect(context.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(1.0, context.currentTime + 1);
  gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 2);
  osc.stop(context.currentTime + 2.5);
