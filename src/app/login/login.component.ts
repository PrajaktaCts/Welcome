import { Component } from '@angular/core';
import { VoiceRecognitionServiceService } from '../voice-recognition-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  text: string;

  constructor(
    public service : VoiceRecognitionServiceService
  ) { 
    this.service.init()
   }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }
}
