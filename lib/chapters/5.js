document.addEventListener("DOMContentLoaded", function(e) {
  load();
});

function load() {
  let sineexampleCanvas = document.getElementById('sineexample');
  let sineexample = new Graph(sineexampleCanvas, function (x) {
    return 1.1*Math.sin(5*x);
  });
  sineexample.draw();

  let toneGeneratorDiv = document.getElementById('tonegenerator');
  let toneGenerator = new ToneGenerator(toneGeneratorDiv);

  let sawtoothExampleCanvas = document.getElementById('sawtoothexample');
  let sawtoothExample = new Graph(sawtoothExampleCanvas, function (x) {
    let period = Math.PI*0.4;
    let phase = x/period - Math.floor(x/period); // 0 to 1
    return 1.1*(2*phase - 1);
  });
  sawtoothExample.draw();

  let sawtoothGeneratorDiv = document.getElementById('sawtoothgenerator');
  let sawtoothGenerator = new ToneGenerator(sawtoothGeneratorDiv);
  sawtoothGenerator.formula = 'sawtooth';

  let lineOrganLinearCanvas = document.getElementById('lineorganlinear');
  let lineOrganLinear = new LineOrgan(lineOrganLinearCanvas, 'linear');
  lineOrganLinear.draw();

  let lineOrganLogCanvas = document.getElementById('lineorganlogarithmic');
  let lineOrganLog = new LineOrgan(lineOrganLogCanvas, 'logarithmic');
  lineOrganLog.draw();

  function saw(x) {
    let period = Math.PI*0.4;
    let phase = x/period - Math.floor(x/period); // 0 to 1
    return 1.1*(2*phase - 1);
  }
  let delayedSawFactory = function (a0, b1) {
    let last = 0;
    return function (x) {
      let y = a0*saw(x) + b1*last;
      last = y;
      return y;
    };
  };
  let delayedSawtoothExampleCanvas = document.getElementById('delayedsawtoothexample');
  let delayedSawtoothExample = new Graph(delayedSawtoothExampleCanvas, delayedSawFactory(0.45, 0.6));
  delayedSawtoothExample.n = 400;
  delayedSawtoothExample.draw();

  let twosineexampleCanvas = document.getElementById('twosineexample');
  let twosineexample = new Graph(twosineexampleCanvas, [
    function (x) {
      return 1.1*Math.sin(2.5*x);
    }, function (x) {
      return 1.1*Math.sin(5*x);
    }
  ]);
  twosineexample.draw();

  let intervalOrganCanvas = document.getElementById('intervalorgan');
  let intervalOrgan = new IntervalOrgan(intervalOrganCanvas);
  intervalOrgan.draw();

  let circleOrganCanvas = document.getElementById('circleorgan');
  let circleOrgan = new CircleOrgan(circleOrganCanvas);
  circleOrgan.draw();

  const C4 = 16*C0;

  let P1ExplorerCanvas = document.getElementById('P1explorer');
  let P1Explorer = new IntervalExplorer(P1ExplorerCanvas, C4, C4*Math.pow(2, -50.2/1200.0), C4*Math.pow(2, 50.2/1200.0));
  P1Explorer.draw();

  let P8ExplorerCanvas = document.getElementById('P8explorer');
  let P8Explorer = new IntervalExplorer(P8ExplorerCanvas, C4, C4*Math.pow(2, 1149.8/1200.0), C4*Math.pow(2, 1250.2/1200.0));
  P8Explorer.draw();

  let P5ExplorerCanvas = document.getElementById('P5explorer');
  let P5Explorer = new IntervalExplorer(P5ExplorerCanvas, C4, C4*Math.pow(2, 649.8/1200.0), C4*Math.pow(2, 750.2/1200.0));
  P5Explorer.draw();

  let M3ExplorerCanvas = document.getElementById('M3explorer');
  let M3Explorer = new IntervalExplorer(M3ExplorerCanvas, C4, C4*Math.pow(2, 349.8/1200.0), C4*Math.pow(2, 450.2/1200.0));
  M3Explorer.draw();

  let m3ExplorerCanvas = document.getElementById('m3explorer');
  let m3Explorer = new IntervalExplorer(m3ExplorerCanvas, C4, C4*Math.pow(2, 249.8/1200.0), C4*Math.pow(2, 350.2/1200.0));
  m3Explorer.draw();

  let M6ExplorerCanvas = document.getElementById('M6explorer');
  let M6Explorer = new IntervalExplorer(M6ExplorerCanvas, C4, C4*Math.pow(2, 849.8/1200.0), C4*Math.pow(2, 950.2/1200.0));
  M6Explorer.draw();

  let m6ExplorerCanvas = document.getElementById('m6explorer');
  let m6Explorer = new IntervalExplorer(m6ExplorerCanvas, C4, C4*Math.pow(2, 749.8/1200.0), C4*Math.pow(2, 850.2/1200.0));
  m6Explorer.draw();

  let P4ExplorerCanvas = document.getElementById('P4explorer');
  let P4Explorer = new IntervalExplorer(P4ExplorerCanvas, C4, C4*Math.pow(2, 449.8/1200.0), C4*Math.pow(2, 550.2/1200.0));
  P4Explorer.draw();

  let M2ExplorerCanvas = document.getElementById('M2explorer');
  let M2Explorer = new IntervalExplorer(M2ExplorerCanvas, C4, C4*Math.pow(2, 149.8/1200.0), C4*Math.pow(2, 250.2/1200.0));
  M2Explorer.draw();

  let M9ExplorerCanvas = document.getElementById('M9explorer');
  let M9Explorer = new IntervalExplorer(M9ExplorerCanvas, C4, C4*Math.pow(2, 1349.8/1200.0), C4*Math.pow(2, 1450.2/1200.0));
  M9Explorer.draw();

  let m2ExplorerCanvas = document.getElementById('m2explorer');
  let m2Explorer = new IntervalExplorer(m2ExplorerCanvas, C4, C4*Math.pow(2, 49.8/1200.0), C4*Math.pow(2, 150.2/1200.0));
  m2Explorer.draw();

  let m9ExplorerCanvas = document.getElementById('m9explorer');
  let m9Explorer = new IntervalExplorer(m9ExplorerCanvas, C4, C4*Math.pow(2, 1249.8/1200.0), C4*Math.pow(2, 1350.2/1200.0));
  m9Explorer.draw();

  let M7ExplorerCanvas = document.getElementById('M7explorer');
  let M7Explorer = new IntervalExplorer(M7ExplorerCanvas, C4, C4*Math.pow(2, 1049.8/1200.0), C4*Math.pow(2, 1150.2/1200.0));
  M7Explorer.draw();

  let m7ExplorerCanvas = document.getElementById('m7explorer');
  let m7Explorer = new IntervalExplorer(m7ExplorerCanvas, C4, C4*Math.pow(2, 949.8/1200.0), C4*Math.pow(2, 1050.2/1200.0));
  m7Explorer.draw();

  let TTExplorerCanvas = document.getElementById('TTexplorer');
  let TTExplorer = new IntervalExplorer(TTExplorerCanvas, C4, C4*Math.pow(2, 549.8/1200.0), C4*Math.pow(2, 650.2/1200.0));
  TTExplorer.draw();

  let scaleDegreeTrainerCanvas = document.getElementById('scaledegreetrainer');
  let scaleDegreeTrainer = new ScaleDegreeTrainer(scaleDegreeTrainerCanvas);

  let intervalEarTrainerCanvas = document.getElementById('intervaleartrainer');
  let intervalEarTrainer = new IntervalEarTrainer(intervalEarTrainerCanvas);
}