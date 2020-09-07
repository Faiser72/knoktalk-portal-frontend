import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatRadioChange, TooltipPosition, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/modules/service/users/userservice.service';
import { WalletService } from 'src/app/modules/service/wallet/wallet.service';
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

  usersList: any;

  constructor(public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public userService: UserserviceService) { }

  ngOnInit() {
    //This method is used to get the data from back end and to display in fornt end 
    this.getAllUserDetails();
  }

  //This method is used to get the data from back end and to display in fornt end 
  getAllUserDetails() {
    this.userService.getAllUsersDetails().subscribe((data: any) => {
      if (data.success) {
        this.usersList = data['listObject'];
        $(document).ready(function () {
          $('#paginationSimpleNumbers').DataTable();
        });
      }
    })
  }

  blockUser(user) {
    if (confirm(`Block ${user.username} user`)) {
      this.userService.blockUser(user.userId).subscribe((response: any) => {
        if (response.success) {
          this.getAllUserDetails();
        }
        this._snackBar.open(user.username, response.message, { duration: 2500, });
      })
    }
  }

  unblockUser(user) {
    if (confirm(`UnBlock ${user.username} user`)) {
      this.userService.unBlockUser(user.userId).subscribe((response: any) => {
        if (response.success) {
          this.getAllUserDetails();
        }
        this._snackBar.open(user.username, response.message, { duration: 2500, });
      })
    }
  }

  deleteUser(user){
    if (confirm(`Delete ${user.username} user`)) {
      let index = this.usersList.findIndex((data: any) => data.userId === user.userId);
      this.userService.deleteUser(user.userId).subscribe((response: any) => {
        if (response.success) {
          this.usersList.splice(index, 1);
          this.getAllUserDetails();
          // this.customFilter();
        }
        this._snackBar.open(user.username, response.message, { duration: 2500, });
      })
    }
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
  walletObject: any;



  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private walletService:WalletService,
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
    this.walletService.getWalletDetailsByUserId(this.userObject.userId).subscribe((response: any) => {
      if (response.success) {
        this.walletObject=response.object;
        console.log(this.walletObject);
      }
    })
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

