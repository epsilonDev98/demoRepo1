import { Injectable } from '@angular/core';
import {Contact} from './contact'
import {HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http'



@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ContactService {



  constructor(private http:HttpClient) {}
    //retrieving contacts
    getContacts(){
      return this.http.get('http://localhost:3000/api/contacts')
      
    }
    //add contact
    addContact(newContact)
    {
      let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, { headers: headers });
  
    }

    //delete contact
    deleteContact(id){
      return this.http.delete('http://localhost:3000/api/contact/'+id)
    }
   }

