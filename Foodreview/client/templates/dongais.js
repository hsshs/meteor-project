/**
 * Created by kimjungmin on 2016. 6. 10..
 */
Template.dongais.helpers({
    search(){
        return List.find({kind:"돈까스"});
    },
});

Router.route("dongais_list",{name:"dongais"});