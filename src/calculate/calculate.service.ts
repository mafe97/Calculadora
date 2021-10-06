import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateService {

    //Get
    sumar2Digitos(datos):number{
        let suma:number = (+datos['digit1'])+(+datos['digit2']);
        return suma;
    }
    restar2Digitos(datos):number{
        let resta:number = (-datos['digit1'])-(-datos['digit2']);
        return resta;
    }
    mult2Digitos(datos):number{
        let mult:number = (datos['digit1'])*(datos['digit2']);
        return mult;
    }
    div2Digitos(datos):number{
        let div:number = (datos['digit1'])/(datos['digit2']);
        return div;
    }

    //Post
    sum2Digitos(body):number{
        let sum: number =(+body['digit1'])+(+body['digit2']);
        return sum;
    }
    res2Digitos(body):number{
        let res: number =(-body['digit1'])-(-body['digit2']);
        return res;
    }
    mul2Digitos(body):number{
        let mul:number =(body['digit1'])*(body['digit2']);
        return mul;
    }
    di2Digitos(body):number{
        let di:number =(body['digit1'])/(body['digit2']);
        return di;
    }
}
