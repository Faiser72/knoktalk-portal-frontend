import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatRadioChange, TooltipPosition } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
declare var $: any;
interface Transaction {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    $(document).ready(function () {
      //Pagination numbers
      // $.fn.dataTable.ext.classes.sPageButton = 'button button-primary';
      $('#paginationSimpleNumbers').DataTable({
        "pagingType": "simple_numbers"
      });
    });
  }

  //for popup View Rounds
  openDialog(userDetails: any): void {
    // console.log('The dialog was open.');
    const dialogRef = this.dialog.open(GiftAndCoin, {
      width: "700px",
      height: "600px",
      data: { pageValue: userDetails }
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed.');
    });
  }

}

// giftandcoin Component
@Component({
  selector: "giftandcoin",
  templateUrl: "giftandcoin.html",
  styleUrls: ['./listusers.component.scss']
})
export class GiftAndCoin {
  userObject: any;
  noOfGifts: any;
  noOfCoins: any;
  giftOrCoinValue: String;
  selectedValue: string;

  giftForm: FormGroup;
  coinForm: FormGroup



  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GiftAndCoin>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.userObject = data.pageValue;
  }

  gift: Transaction[] = [
    { value: 'addGift', viewValue: 'Add Gift' },
    { value: 'substractGift', viewValue: 'Substract Gift' },
  ];

  coin: Transaction[] = [
    { value: 'addCoin', viewValue: 'Add Coin' },
    { value: 'substractCoin', viewValue: 'Substract Coin' },
  ];

  ngOnInit() {
    this.giftFormBuilder();
    this.coinFormBuilder();
    console.log(this.userObject);
  }

  giftFormBuilder() {
    this.giftForm = this.fb.group({
      rewardUpdate: [null, [Validators.required]]
    })
  }

  coinFormBuilder() {
    this.coinForm = this.fb.group({
      rewardUpdate: [null, [Validators.required]]
    })
  }

  // to get value from radio button of gift or coin
  giftOrCoin(gcradio: MatRadioChange) {
    this.giftOrCoinValue = gcradio.value;
  }

  // gift form submit
  giftFormSubmit() {

  }

  // coin form submit
  coinFormSubmit() {

  }

  close(): void {
    this.dialogRef.close();
  }
}

