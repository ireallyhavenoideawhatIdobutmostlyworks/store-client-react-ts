export class RegisterService {

    isFieldValid(value: string): boolean {
        return value !== '' && value !== 'undefined';

    }

    isValidEmail(email: string): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
    
   
    
  }
   
