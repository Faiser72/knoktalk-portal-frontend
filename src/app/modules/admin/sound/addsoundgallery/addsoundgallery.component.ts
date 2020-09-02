import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsoundgallery',
  templateUrl: './addsoundgallery.component.html',
  styleUrls: ['./addsoundgallery.component.scss']
})
export class AddsoundgalleryComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
  }
  openDialog() {
    this.dialog.open(PublishSound, {
      width: "600px",
      data: {
        animal: 'panda'
      }
    });
  }
  
}

@Component({
  selector: 'publish-sound',
  templateUrl: 'publish.html',
  styleUrls: ['./addsoundgallery.component.scss']
})
export class PublishSound {

  constructor(
    public dialogRef: MatDialogRef<PublishSound>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
   
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //email validation for forgot password
  emailError: string;
  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/;

  close() {
    this.dialogRef.close();
  }
  base64File: string = null;
  filename: string = null;

  onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      const fReader = new FileReader()
      fReader.readAsDataURL(file)
      fReader.onloadend = (_event: any) => {
        this.filename = file.name;
        this.base64File = _event.target.result;
      }
    } catch (error) {
      this.filename = null;
      this.base64File = null;
      console.log('no file was selected...');
    }
  }
}
