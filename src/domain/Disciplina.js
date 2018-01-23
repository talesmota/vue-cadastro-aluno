export default class Disciplina{
    constructor(name='',code='',students=false){
        this.name=name;
        this.code=code;
        this.students=students||[];
    }
}