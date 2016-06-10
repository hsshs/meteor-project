/**
 * Created by kimjungmin on 2016. 6. 10..
 */
Template.iokbal.helpers({
    search(){
        return List.find({kind:"족발"});
    },
});

Router.route("iokbal_list",{name:"iokbal"});