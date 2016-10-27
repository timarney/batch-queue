
let q = {
    items: [],
    maxItems: 2,
    current: 0,
    setItems: function(arr){
      this.items = arr;
    },
    doAction: function (cb){
      let items = this.getItems();

      if(items === false){
        console.log('done');
        return;
      }

      cb(items);

    },
    getItems: function(){
        let arr = this.items.slice(this.current,this.maxItems + this.current);
        this.current+= this.maxItems;

        if(arr.length >=1){
            return arr;
        }

        return false;
    }

}


var cb = function(items){
    console.log('send items', items);
    setTimeout(function(){q.doAction(cb); }, 300);
}


q.setItems([1,2,3,4,5,6,7,8,9,10,11]);
q.doAction(cb);
