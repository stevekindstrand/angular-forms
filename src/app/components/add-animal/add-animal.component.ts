import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {
  //FormControl  
  name = new FormControl('');
  type = new FormControl('');
  description = new FormControl('');

  changeName() {
    this.name.setValue('Steve');
  }

  //FormGroup
  userFormGroup = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl('')
  });

  //FormBuilder
  userFormBuilder = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    type: [''],
    description: [''],
    nicknames: this.fb.array([this.fb.control('')])
  });

  constructor(private fb: FormBuilder) { }

  get nicknames(): FormArray {
    return this.userFormBuilder.get('nicknames') as FormArray;
  }

  addNickname() {
    this.nicknames.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.userFormBuilder.value);
  }

  ngOnInit(): void {
  }
}
