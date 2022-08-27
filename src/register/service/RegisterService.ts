import RegisterDto from './RegisterDto'
import axios from 'axios';

export function register(registerDto: RegisterDto): void {
    axios({
        url: "http://localhost:3000/api/user",
        method: "POST",
        data: registerDto,
    })      
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});

    console.log("registerDto")
    console.log(registerDto)
}
   