import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ServiceModuleService {

  constructor(private http:HttpClient) {}

  GetCreateNewAccount():Observable<any[]>{//get data from customer table
    return this.http.get<any>('http://localhost:16047/api/Customers');
  }

  PostCreateNewAccount(val:any):Observable<any>{//adds data to customer table
    console.log('reached');
    console.log(val);
    return this.http.post('http://localhost:16047/api/Customers',val);
  }

  DeleteCreateNewAccount(CustomerId:any):Observable<any>{ //updates data in InternetBanking table
    let uri = 'http://localhost:16047/api/Customers/' + CustomerId
    console.log(uri)
    return this.http.delete<any>(uri);
  }
 
  GetRegister():Observable<any[]>{//gets data from register table
    return this.http.get<any>('http://localhost:16047/api/Registers');
  }
 
  PostRegister(val:any):Observable<any>{//adds data to register table
    return this.http.post('http://localhost:16047/api/Registers',val);
  }

  PutRegister(registerId:any,val:any):Observable<any>{ //updates data in register table
    let uri = 'http://localhost:16047/api/Registers/' + registerId
    console.log(uri)
    return this.http.put<any>(uri,val);
  }

// this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
//.subscribe(data => this.postId = data.id);

  GetLogin():Observable<any[]>{//gets data from customer table
    return this.http.get<any>('http://localhost:16047/api/Customers');
  }

  GetTransactionDetails():Observable<any[]>{//get data from transaction table
    return this.http.get<any>('http://localhost:16047/api/Transactions');
}
 GetBeneficiary():Observable<any[]>{//gets data from beneficiary table
  return this.http.get<any>('http://localhost:16047/api/Beneficiaries');
}
  Postbeneficiary(val:any):Observable<any>{//adds data to beneficiary table
  return this.http.post('http://localhost:16047/api/Beneficiaries',val);

}
  Postaccount(val:any):Observable<any>{//adds data to accounts table
  return this.http.post('http://localhost:16047/api/Beneficiaries',val);}

  getaccount():Observable<any[]>{//gets data from account table
    return this.http.get<any>('http://localhost:16047/api/Accounts');
}
PutAccount(accountNumber:any,val:any):Observable<any>{ //updates data in account table
  let uri = 'http://localhost:16047/api/Accounts/' + accountNumber
  console.log(uri)
  return this.http.put<any>(uri,val);
}

    PostImps(val:any):Observable<any>{//adds data to transactions table
      return this.http.post('http://localhost:16047/api/Transactions',val);
    }
    PostNeft(val:any):Observable<any>{//adds data to transactions table
      return this.http.post('http://localhost:16047/api/Transactions',val);
    }
    PostRtgs(val:any):Observable<any>{//adds data to transactions table
      return this.http.post('http://localhost:16047/api/Transactions',val);
    }

    getInternetBanking():Observable<any[]>{//gets data from Internet Banking table
      return this.http.get<any>('http://localhost:16047/api/InternetBankings');
  }

  PostInternetBanking(val:any):Observable<any>{//adds data from Internet Banking table
    return this.http.post('http://localhost:16047/api/InternetBankings',val);
  }

  PutInternetBanking(InternetBankingId:any,val:any):Observable<any>{ //updates data in InternetBanking table
    let uri = 'http://localhost:16047/api/InternetBankings/' + InternetBankingId
    console.log(uri)
    return this.http.put<any>(uri,val);
  }


}

