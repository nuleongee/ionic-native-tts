import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  rescogText: string;

  constructor(private speechRecognition: SpeechRecognition) { }

  check() {
    // Check feature available
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available))
  }

  start() {
    const options = {
      language: "ko-KR",
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
          this.rescogText = matches[0];
        },
        (onerror) => console.log('error:', onerror)
      )
  }

  language() {
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
}
