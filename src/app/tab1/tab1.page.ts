import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ttsText: string;

  constructor(private tts: TextToSpeech) { }

  ttsStart() {
    console.log('tts start!');
    console.log('this.ttsText', this.ttsText);

    this.tts.speak(this.ttsText)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
}
