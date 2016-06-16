

Template.notice.helpers({
    noticeList : function () {
        return Notice.find({}, {sort: {time:-1 }});
    },
    find:function(){
        if(Meteor.user().emails[0].address=='hsshs2003@naver.com'){

            return true;
        }else{

            return false;
        }
    }

});
Template.notice_create.helpers({
    find:function(){
        if(Meteor.user().emails[0].address=='hsshs2003@naver.com'){
            console.log(Meteor.user().username);
            return true;
        }else{
            console.log(Meteor.user().username);
            return false;
        }

    }
});
Template.notice_item.helpers({
    find:function(){
        if(Meteor.user().emails[0].address=='hsshs2003@naver.com'){

            return true;
        }else{

            return false;
        }
    },
});
var Number = 1;
Template.notice_item.events({
    'click .delBtn' : function(events) {
        event.preventDefault(); //���ΰ�ħ�� �Ǵµ� �װ� ������


        Notice.remove({_id: this._id});
    }
});

Template.notice_create.events({
    'click .addBtn' : function(events)
    {
        event.preventDefault(); //���ΰ�ħ�� �Ǵµ� �װ� ������
        var title=$('.board_title').val();
        console.log(title);
        Notice.insert({
            no:Number,
            title:$('.board_title').val(),
            writer :$('.board_writer').val(),
            day:new Date(),
            email:Meteor.user().emails[0].address,
            section:$('.board_section').val()
        });

        var a=Notice.find({title:$('.board_title').val()});
        console.log(a);

        $('.board_title').val(null)
        $('.board_writer').val(null)
        $('.board_section').val(null)
        Number++;

        $(events.target.parentNode.parentNode).hide();

    },
   
    'click .deep_section' : function(evt)
    {
        $('.board_title').val(this.title);
        $('.board_writer').val (this.writer);
        $('.board_section').val(this.section);
        console.log(this.title + this.writer + this.section );
    }
})

Template.notice.events({
   'click .notice-add' : function(events)
   {
      event.preventDefault();
      $('.table-bordered').show();
      console.log(Meteor.user().emails[0].address);
   }
});

Router.route('/notice');
                                                                                                               