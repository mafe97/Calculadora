import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { CalculateService } from './calculate.service';

@Controller('calculate')
export class CalculateController {
    constructor(private readonly calculateService: CalculateService){}

    //ENDPOINTS @GET (QUERY)
    @Get('sumar')
    //Digitos (digit1=0)(digit2=1)
    getSumar(@Query() datosQuery) {
        let results: number = this.calculateService.sumar2Digitos(datosQuery);
        return {
            'status': true,
            'nameQuery': datosQuery['name'],
            'operation': datosQuery['digit1']+'+'+datosQuery['digit2'],
            'result': results
        };
    }

    @Get('restar')
    //Digitos (digit1=0)(digit2=1)
    getRestar(@Query() datosQuery) {
        let results: number = this.calculateService.restar2Digitos(datosQuery);
        return {
            'status': true,
            'nameQuery': datosQuery['name'],
            'operation': datosQuery['digit1']+'-'+datosQuery['digit2'],
            'result': results
        };
    }

    @Get('multiplicar')
    //Digitos (digit1=0)(digit2=1)
    getMult(@Query() datosQuery) {
        let results: number = this.calculateService.mult2Digitos(datosQuery);
        return {
            'status': true,
            'nameQuery': datosQuery['name'],
            'operation': datosQuery['digit1']+'*'+datosQuery['digit2'],
            'result': results
        };
    }

    @Get('dividir')
    //Digitos (digit1=0)(digit2=1)
    getDiv(@Query() datosQuery) {
        let results: number = this.calculateService.div2Digitos(datosQuery);
        return {
            'status': true,
            'nameQuery': datosQuery['name'],
            'operation': datosQuery['digit1']+'/'+datosQuery['digit2'],
            'result': results
        };
    }
    //ENDPOINTS @POST (Body)
/*
    @Post('suma')
    createSumar(@Body() body){
        return this.calculateService.sum2Digitos(body);
    }
*/
 
    @Post('sum')
    createSumar(@Body() Body){
        let results: number = this.calculateService.sum2Digitos(Body);
        return {
            'status': true,
            'namePost': Body['nameP'],
            'operation': Body['digit1']+'+'+Body['digit2'],
            'result': results
        };
    }
    @Post('res')
    createRestar(@Body() Body){
        let results: number = this.calculateService.res2Digitos(Body);
        return {
            'status': true,
            'namePost': Body['nameP'],
            'operation': Body['digit1']+'-'+Body['digit2'],
            'result': results
        };
    }
    @Post('mul')
    createMult(@Body() Body){
        let results: number = this.calculateService.mul2Digitos(Body);
        return {
            'status': true,
            'namePost': Body['nameP'],
            'operation': Body['digit1']+'*'+Body['digit2'],
            'result': results
        };
    }
    @Post('di')
    createDiv(@Body() Body){
        let results: number = this.calculateService.di2Digitos(Body);
        return {
            'status': true,
            'namePost': Body['nameP'],
            'operation': Body['digit1']+'/'+Body['digit2'],
            'result': results
        };
    }    
}
