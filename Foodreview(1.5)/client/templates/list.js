/**
 * Created by kimjungmin on 2016. 6. 5..
 */
Template.list.helpers({
    search() {
        return List.find({}); 
    }
});
Router.route('list',{name:'list'});