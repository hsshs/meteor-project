/**
 * Created by kimjungmin on 2016. 6. 10..
 */
Template.fastfood.helpers({
    search(){
        return List.find({kind:"패스트푸드"});
    },
});

Router.route("fastfood_list",{name:"fastfood"});