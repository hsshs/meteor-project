/**
 * Created by kimjungmin on 2016. 6. 10..
 */
Template.pizza.helpers({
    search(){
        return List.find({kind:"피자"});
    },
});

Router.route("pizza_list",{name:"pizza"});
