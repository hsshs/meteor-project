/**
 * Created by kimjungmin on 2016. 6. 10..
 */
Template.china.helpers({
    search(){
        return List.find({kind:"중국집"});
    },
});

Router.route("china_list",{name:"china"});