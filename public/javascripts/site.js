;
(function($) {
  $(document).ready(function() {

    var selectedContributor;

    $('li.contributor').each(function(index,contributor){
        
        $(contributor).bind('click',function(){
            var self = $(this);
            selectedContributor = self;
            $('#contributorDetailsSlider').append(self.find('.details').show()).show();
            self.addClass('highlighted');

        });

//        $(contributor).click(function(){
//            var self = $(this);
//            self.find('.details').show();
//            self.addClass('highlighted');
//        });

    });


    $('#contributorDetailsSlider').click(function(){
        var self = $(this);
        self.hide();
        selectedContributor.removeClass('highlighted');
        
    });

  });
})(jQuery);

