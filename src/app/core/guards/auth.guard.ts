import { inject } from "@angular/core"
import { UserService } from "../services/user.service"
import { Router } from "@angular/router"

export const authguard = () =>{
    const userService = inject(UserService)
    const router = inject(Router)

    if(userService.estaLogado()){
        return true;
    }else{
        router.navigate(['/login']);
        return false;
    }
}