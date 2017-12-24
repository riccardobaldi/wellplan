export class ActivityModel{
    constructor(
        public name:string,
        public description:string,
        public image1:string,
        public image2:string,
        public image3:string,
        public image4:string,
        public image5:string,
        public category:string,
        // public listId:number,
        // public isImportant:boolean = false,
        // public isDone:boolean = false,
        public id:number = 0
    ){}

    static clone(activity:ActivityModel){
        return new ActivityModel(activity.name, activity.description, activity.image1, activity.image2, activity.image3, activity.image4, activity.image5, activity.category, activity.id);
    }

    static fromJson(data:any){
        if(!data.description || ! data.id || ! data.name){ //data.listId){
            throw(new Error("Invalid argument: argument structure do not match with model fields"));
        }

        return new ActivityModel(data.name, data.description, data.image1, data.image2, data.image3, data.image4, data.image5, data.category, data.id);
    }
}
