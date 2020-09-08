import { Injectable } from '@angular/core';
import { Api } from 'src/app/api.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private baseUrl = Api.baseUrl;
  constructor(private http: HttpClient) { }

  // get WalletDetails by id
  getWalletDetailsByUserId(userId: number) {
    return this.http.get(`${this.baseUrl}/admin/wallet/getWalletDetailsByUserId/${userId}`)
  }

  // update Gift Details
  updateWalletGifts(walletDetails: any, userId: number) {
    return this.http.put(`${this.baseUrl}/admin/wallet/updateWalletGifts/${userId}`, walletDetails);
  }

  // update Coin Details
  updateWalletCoin(walletDetails: any, userId: number) {
    return this.http.put(`${this.baseUrl}/admin/wallet/updateWalletCoin/${userId}`, walletDetails);
  }
}
