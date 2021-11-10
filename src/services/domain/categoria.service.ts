import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { CategoriaDTO } from "../../models/categoria.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){}

    //Observable posibilita fazer essa requisição e ficar aguardando a resposta
    findAll() : Observable<CategoriaDTO[]>  {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}