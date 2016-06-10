/**
 * Created by kimjungmin on 2016. 6. 10..
 */
Template.chiken.helpers({
    search(){
        return List.find({kind:"치킨"});
    },
});

Router.route("chiken_list",{name:"chiken"});