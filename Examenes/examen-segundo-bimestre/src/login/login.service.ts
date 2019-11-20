import { Injectable, Req, Res } from '@nestjs/common';

@Injectable()
export class LoginService {
    public existeCookie(@Req() req,@Res() res):boolean{
        const cookieSeg = req.signedCookies;
        
        if(cookieSeg.nombre){
          return true;
        }
        else{
          res.redirect('/api/auth/login');
          return false;
        }
    }
}