import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQuestion = 'pet'; 
  answer = ''; 
  genders = ['male', 'female']; 
  genderSelected = 'male';
  user = {
    username:'', 
    email: '', 
    sercretQuestion: '', 
    answer: '', 
    gender: ''
  };
  
  @ViewChild('f') signupForm:NgForm;

  onSubmit(){
    console.log('25- signupForm =', this.signupForm);
    console.log('26-  now lets update our html page with the values. ');
    this.user.username = this.signupForm.value.userData.username; 
    this.user.email = this.signupForm.value.userData.email; 
    this.user.sercretQuestion = this.signupForm.value.sercret; 
    this.user.answer = this.signupForm.value.questionAnswer; 
    this.user.gender = this.signupForm.value.gender; 
    console.log('32-  user = ', this.user);
  }


  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName, 
    //     email: ''
    //   }, 
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    this.signupForm.form.patchValue({
        userData: {
          username: suggestedName
        }
    }); 

  }

  // onSubmit(form: NgForm){
  //   console.log('15- on Submit called n  form =', form.value);


}
 