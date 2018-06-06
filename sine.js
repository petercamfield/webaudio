document.getElementById('play').onclick=()=>{
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const osc = context.createOscillator();
  osc.type = 'sawtooth'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
  osc.frequency.value = 2500; // value in hertz
  const c1 = createMixerChannel(context);
  osc.connect(c1).connect(context.destination);
  osc.start();
  osc.stop(context.currentTime + 1.5);
};

function createMixerChannel(context) {
  // insert -> gain -> compressor -> eq -> fx -> pan -> fader
  const gain = context.createGain();
  const compressor = context.createDynamicsCompressor();
  const eqHi = context.createBiquadFilter();
  const eqMid = context.createBiquadFilter();
  const eqLo = context.createBiquadFilter();
  const pan = context.createStereoPanner();
  const fader = context.createGain();
  eqLo.type = "lowshelf";
  eqHi.type = "highshelf";
  eqMid.type = "peaking";
  return gain.connect(compressor).connect(eqHi).connect(eqMid).connect(eqLo).connect(pan).connect(fader);
}

