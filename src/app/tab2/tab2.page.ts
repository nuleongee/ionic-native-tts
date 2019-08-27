import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private recogText: string;
  private language: string = "ko-KR";

  constructor(private speechRecognition: SpeechRecognition) { }

  check() {
    // Check feature available
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available))
  }

  start() {
    const options = {
      language: this.language,
      // matches : 5,
      prompt: 'Listening...',
      showPopup: true,
      showPartial: false
    }
    // Start the recognition process
    this.speechRecognition.startListening(options)
      .subscribe(
        (matches: string[]) => {
          console.log('matches: ', matches);
          console.log('matches[0]: ', matches[0]);
          this.recogText = matches[0];
          console.log('recogText : ', this.recogText);
        },
        (onerror) => console.log('error:', onerror)
      )
  }

  languageList() {
    // Get the list of supported languages
    this.speechRecognition.getSupportedLanguages()
      .then(
        (languages: string[]) => console.log(languages),
        (error) => console.log(error)
      )
  }

  checkPermission() {
    // Check permission
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => console.log(hasPermission))
  }

  requestPermission() {
    // Request permissions
    this.speechRecognition.requestPermission()
      .then(
        () => console.log('Granted'),
        () => console.log('Denied')
      )
  }

  ko() {
    this.language = "ko-KR";
  }

  en() {
    this.language = "en-US";
  }
}
