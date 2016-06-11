Template.notice.helpers({
    noticeList : function () {
        return Notice.find({}, {sort: {time:-1 }});
    }
    ,
    find:function(){
        if(Meteor.user().username=='hsshs2003@naver.com'){

            return true;
        }else{

            return false;
        }
    }
});
Template.notice_create.helpers({
    find:function(){
        if(Meteor.user().username=='hsshs2003@naver.com'){

            return true;
        }else{

            return false;
        }
    }
});
Template.notice_item.helpers({
    find:function(){
        if(Meteor.user().username=='hsshs2003@naver.com'){

            return true;
        }else{

            return false;
        }
    }
});
var Number = 1;
Template.notice_item.events({
    'click button' : function(evt,tmpl)
    {
        event.preventDefault(); //���ΰ�ħ�� �Ǵµ� �װ� ������
        Notice.remove(this._id);
    }
});

Template.notice.events({

    'click .addBtn' : function(events)
    {
        event.preventDefault(); //���ΰ�ħ�� �Ǵµ� �װ� ������
        Notice.insert({
            no:Number,
            title:$('.board_title').val(),
            writer :$('.board_writer').val(),
            day:new Date(),
            section:$('.board_section').val()
        });

        $('.board_title').val(null)
        $('.board_writer').val(null)
        $('.board_section').val(null)
        Number++;

        //$(events.target.parentNode.parentNode).hide();
    },
    'click .notice-add' : function(events)
    {
        event.preventDefault();
    },
    'click .deep_section' : function(evt)
    {
        $('.board_title').val(this.title);
        $('.board_writer').val (this.writer);
        $('.board_section').val(this.section);
        console.log(this.title + this.writer + this.section );
    }
})


Router.route('/notice');