/**
 * Created by kimjungmin on 2016. 6. 10..
 */
Template.korea.helpers({
    search(){
        return List.find({kind:"한식,일식"});
    },
});

Router.route("korea_list",{name:"korea"});