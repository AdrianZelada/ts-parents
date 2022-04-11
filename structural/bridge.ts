interface IViewNotify{    
    render(data: any): string;    
}

class BeginNotify implements IViewNotify{
    render(data: any): string {
        return `<div>
        <h1>User: ${data.user}</h1>
        <h2>Begin: ${data.title}</h2>
        <p>${data.body}</p>
        </div>`
    }
}


class FinishNotify implements IViewNotify{
    render(data: any): string {
        return `<div>
        <h1>User: ${data.user}</h1>
        <h2>Finish: ${data.title}</h2>
        <p>${data.body}</p>
        </div>`
    }
}

abstract class BaseItemListAbstract {
    item: IViewNotify;
    render(data: any): string{
        const html = this.item.render(data);        
        return html;
    }
}


class SimpleItemList extends BaseItemListAbstract{
    constructor(item: IViewNotify){
        super();
        this.item = item;        
    }
}


class ImportantItemList extends BaseItemListAbstract{
    constructor(item: IViewNotify){
        super();
        this.item = item;        
    }

    render(data: any): string {
        const html = this.item.render(data);    
        return `<div class="color-red">${html}</div>`;
     }
}


let data = [
    {
        user: 'Adrian ',
        title: "Initial",
        type: 1,
        body: "asdfasdfasdfasdf",
        priority: 1,
    },
    {
        user: 'Walter',
        title: "Initial",
        type: 1,
        body: "asdfasdfasdfasdf",
        priority: 2,
    },
    {
        user: 'Adrian ',
        title: "Finish",
        type: 2,
        body: "asdfasdfasdfasdf",
        priority: 2,
    },
    {
        user: 'Walter',
        title: "Finishhhhhh",
        type: 2,
        body: "asdfasdfasdfasdf",
        priority: 1,
    }
]

let datax = data.map((item:any) =>{
    let notify: IViewNotify;
    if(item.type == 1){
        notify = new BeginNotify();
    }
    if(item.type == 2){
        notify = new FinishNotify();
    }

    let itemList: BaseItemListAbstract;
    if(item.priority == 1){
        itemList = new SimpleItemList(notify);        
    }
    if(item.priority == 2){
        itemList = new ImportantItemList(notify);        
    }
    return itemList.render(item);
});


console.log(datax);