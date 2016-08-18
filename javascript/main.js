/**
 * Created by Mark on 8/14/2016.
 */
var piano = function(){
    var audioCtx;
    if('audioContext' in window) {
        audioCtx = new AudioContext();
    }
    else{
        audioCtx = new window.AudioContext();
    }
    var iosStart = function(){
        var button = document.getElementById("iosstart");
        button.addEventListener("touchend", function(){
            var falseaudio = audioCtx.createOscillator();
            falseaudio.type = "sine";
            falseaudio.frequency.value = 100000;
            falseaudio.noteOn();
            falseaudio.noteOff();
        },false);
    };
    iosStart();

    var PianoKey = function(hz, key_id, key_class, wave_type){
        this.hz = hz;
        this.key_id = key_id;
        this.key_class = key_class;
        this.type = wave_type;
    };

    PianoKey.prototype.createSound = function(){
        var oscillator = audioCtx.createOscillator();
        var gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.0;
        oscillator.type = this.type;
        oscillator.frequency.value = this.hz;
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
         if(oscillator.start){
            oscillator.start();
        }
        else if(oscillator.noteOn){
            oscillator.noteOn();
        }
        

        var key = document.getElementById(this.key_id);
        key.addEventListener("mouseenter", function(){
            gainNode.gain.value = 0.10;
        });
        key.addEventListener("mousedown", function(evt){
            evt.preventDefault();
            oscillator.noteOn();
            gainNode.gain.value = 0.10;
        });
        key.addEventListener("mouseleave", function(){
            gainNode.gain.value = 0.0;
        });
        key.addEventListener("touchend", function(evt){
            evt.preventDefault();
            gainNode.gain.value = 0.00;
        });
    };

    PianoKey.prototype.drawKey = function(){
        $("<div></div>").appendTo("#piano").addClass(this.key_class).attr("id", this.key_id);
    };

    var high_c = new PianoKey(523.251, "high-c", "key white-key", "sine");
    var high_b = new PianoKey(493.883, "high-b", "key white-key", "sine");
    var high_a_sharp = new PianoKey(466.164, "high-a#", "key black-key", "sine");
    var high_a = new PianoKey(440.000, "high-a", "key white-key", "sine");
    var high_g_sharp = new PianoKey(415.305, "high-g#", "key black-key", "sine");
    var high_g =new PianoKey(391.995, "high-g", "key white-key", "sine");
    var high_f_sharp =new PianoKey(369.994, "high-f#", "key black-key", "sine");
    var high_f =new PianoKey(349.228, "high-f", "key white-key", "sine");
    var high_e =new PianoKey(329.628, "high-e", "key white-key", "sine");
    var high_d_sharp =new PianoKey(311.127, "high-d#", "key black-key", "sine");
    var high_d = new PianoKey(293.665, "high-d", "key white-key", "sine");
    var high_c_sharp = new PianoKey(277.183, "high-c#", "key black-key", "sine");
    var middle_c = new PianoKey(261.626, "middle-c", "key white-key", "sine");
    var low_b = new PianoKey(246.942, "low-b", "key white-key", "sine");
    var low_a_sharp = new PianoKey(233.082, "low-a#", "key black-key", "sine");
    var low_a = new PianoKey(220.00, "low-a", "key white-key", "sine");
    var low_g_sharp = new PianoKey(207.652, "low-g#", "key black-key", "sine");
    var low_g = new PianoKey(195.998, "low-g", "key white-key", "sine");
    var low_f_sharp = new PianoKey(184.997, "low-f#", "key black-key", "sine");
    var low_f = new PianoKey(174.614, "low-f", "key white-key", "sine");
    var low_e = new PianoKey(164.814, "low-e", "key white-key", "sine");
    var low_d_sharp = new PianoKey(155.563, "low-d#", "key black-key", "sine");
    var low_d = new PianoKey(146.832, "low-d", "key white-key", "sine");
    var low_c_sharp = new PianoKey(138.591, "low-c#", "key black-key", "sine");
    var low_c = new PianoKey(130.813, "low-c", "key white-key", "sine");

    high_g_sharp.drawKey();high_a.drawKey();high_a_sharp.drawKey();high_b.drawKey();high_c.drawKey();
    high_d_sharp.drawKey();high_e.drawKey();high_f.drawKey();high_f_sharp.drawKey();high_g.drawKey();
    low_a_sharp.drawKey();low_b.drawKey();middle_c.drawKey();high_c_sharp.drawKey();high_d.drawKey();
    low_f.drawKey();low_f_sharp.drawKey();low_g.drawKey();low_g_sharp.drawKey();low_a.drawKey();
    low_c.drawKey();low_c_sharp.drawKey();low_d.drawKey();low_d_sharp.drawKey();low_e.drawKey();

    high_g_sharp.createSound();high_c.createSound();high_b.createSound();high_a.createSound();high_a_sharp.createSound();
    high_g.createSound();high_f_sharp.createSound();high_f.createSound();high_e.createSound();high_d_sharp.createSound();
    low_a_sharp.createSound();low_b.createSound();middle_c.createSound();high_c_sharp.createSound();high_d.createSound();
    low_f.createSound();low_f_sharp.createSound();low_g.createSound();low_g_sharp.createSound();low_a.createSound();
    low_c.createSound();low_c_sharp.createSound();low_d.createSound();low_d_sharp.createSound();low_e.createSound();
};

piano();
