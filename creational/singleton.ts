class Database{
    private static instance: Database;
    public config: any;
    constructor(){
        if(Database.instance) {
            return Database.instance;
        }
        this.config = Date.now();
        Database.instance = this;
    }
}


const database1 = new Database();
setTimeout(() => {
    const database2 = new Database();
    setTimeout(() =>{
        console.log('instance 1');
        console.log(database1);
        console.log('instance 2');
        console.log(database2);    
    },100);
},1000);