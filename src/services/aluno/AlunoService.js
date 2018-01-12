export default class AlunoService{

    constructor(resource){
        this._resource = resource;
    }
    lista(){
        let resource = this._resource('aluno/all');
        return resource
            .query()
            .then(res=>res.json(),
                err=>{
                    console.log(err);
                    throw new Error('Não foi possível listar as fotos');
                });
    }
    cadastra(foto){
        if(foto._id){
            return this._resource.update({id:foto._id}, foto).then(
                null, 
                err=>{
                    console.log(err);
                    throw new Error('Não foi possível alterar a foto');
                });
        }
        else
            return this._resource.save(foto).then(
                null, 
                err=>{
                    console.log(err);
                    throw new Error('Não foi possível cadastrar a foto');
                });
    }
    apaga(id){
        return this._resource.delete({id:id})
            .then(
                null, 
                err=>{
                    console.log(err);
                    throw new Error('Não foi possível apagar a foto');
                });
    }
    busca(id){
        return this._resource.get({id}).then(
            res=>res.json(),
            err=>{
                    console.log(err);
                    throw new Error('Não foi possível buscar a foto');
                }
        );
    }
};