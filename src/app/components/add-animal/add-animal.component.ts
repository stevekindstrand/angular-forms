import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {
  userFormBuilder = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
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

  get name() {
    return this.userFormBuilder.get('name');
  }

  ngOnInit(): void {
  }
}
