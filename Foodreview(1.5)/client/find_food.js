/**
 * Created by kimjungmin on 2016. 6. 10..
 */
Template.find_food.helpers({
    star:function(){
        var i=Number(this.star);
        var o="★";
        var total="";
        for(var ii=0;ii<i;ii++)
        {
            total=total+o;
        }

        
        return total;
    }
})