import { Component, OnInit } from '@angular/core';

interface trans{
  date:string;
  Narration:string;
  Cheque:string;
  Debit:number;
  Credit:number;
  Balance:number;
}
const transaction : trans[] =[
  {
   date:"30/09/2021",
   Narration:"To TRANSFER UPI/DR/12424523326/PAYTM/2331/PAYME",
   Cheque:"TRANSFER TO 78172317931",
   Debit:56.00,
   Credit:7832.98,
   Balance:2109.76
  },
  {
    date:"20/05/2021",
    Narration:"To TRANSFER UPI/DR/1DGHA23326/PAYTM/23W1/PAYME",
    Cheque:"TRANSFER TO 77383317931",
    Debit:78.00,
    Credit:9032.71,
    Balance:7109.36
   },
   {
    date:"10/08/2021",
    Narration:"To TRANSFER UPI/DR/1DGHA23326/PAYTM/23W1/PAYME",
    Cheque:"TRANSFER TO 77383317931",
    Debit:78.00,
    Credit:9032.71,
    Balance:7109.36
   },
   {
    date:"01/05/2021",
    Narration:"To TRANSFER UPI/DR/1DGHA23326/PAYTM/23W1/PAYME",
    Cheque:"TRANSFER TO 77383317931",
    Debit:78.00,
    Credit:9032.71,
    Balance:7109.36
   },
   {
    date:"11/08/2021",
    Narration:"To TRANSFER UPI/DR/1DGHA23326/PAYTM/23W1/PAYME",
    Cheque:"TRANSFER TO 77383317931",
    Debit:78.00,
    Credit:9032.71,
    Balance:7109.36
   },
   {
    date:"21/10/2021",
    Narration:"To TRANSFER UPI/DR/1DGHA23326/PAYTM/23W1/PAYME",
    Cheque:"TRANSFER TO 77383317931",
    Debit:78.00,
    Credit:9032.71,
    Balance:7109.36
   },
   {
    date:"22/07/2021",
    Narration:"To TRANSFER UPI/DR/1DGHA23326/PAYTM/23W1/PAYME",
    Cheque:"TRANSFER TO 77383317931",
    Debit:78.00,
    Credit:9032.71,
    Balance:7109.36
   }
];

@Component({
  selector: 'app-account-statement2',
  templateUrl: './account-statement2.component.html',
  styleUrls: ['./account-statement2.component.css']
})
export class AccountStatement2Component implements OnInit {
  public Accno:string= "00000675448784231";
  public AccType:string= "Savings";
  public branch:string= "Chrompet,Chennai";
  public address:string="Bashyam Street,Opposite to MIT campus,Chrompet,Chennai 600048";
  public AccountName:string="Mr.OM PPRAKASH DEVARAJ";
  public InterestRate:number=2.7;
  public DrawingPower:string="0.00";
  public MODBalance:string="0.00";
  public CustomerID:string="08972562431";
  public IFSCCode:string="BANK92830214";
  public MICRCode:string="324SDFGF2123";
  public Nomination:string="Yes";
  public Balance:number=1387.80;
  public noOfTransactions:number=7;
  public Transactions = transaction;
  public transFlag:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
