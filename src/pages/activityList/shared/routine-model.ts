export class RoutineModel{
    constructor(
        public name:string,
        public description:string,
        public image:string,
        public activities:string,
        public id:number
    ){}

    static fromJson(data:any){
        if(!data.name || !data.id){
            throw(new Error("Invalid argument: argument structure do not match with model"));
        }

        return new RoutineModel(data.name, data.description, data.image, data.activities, data.id);
    }
}
