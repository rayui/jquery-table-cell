/*
*
* jQuery table-cell display simulator for ie6+7 
* (C) Raymond Brooks 2011
*
*/

(function($){

  $.fn.tableCell = function(type) {  
    
  	//ensure we have the correct browser (IE6 && 7)
  	if (!($.browser.msie && parseInt($.browser.version, 10) < 8)) {
		return this.each(function() {
			//empty
		});
  	}

  	var width = $(this).width();
  	var $lis = $(this).find('li').each(function() {
		if ($(this).css("display") === "table-cell") {
			return this;
		}
  	});
  	
    return this.each(function() {
    	//take basic steps to ensure we removed padding, borders
    	var liWidth = parseInt(width / $lis.length, 10) - ( $lis.outerWidth() - $lis.innerWidth() );
    	$lis.width(liWidth).css({display:"inline", float:"left"});
    });
    
  }; 
})(jQuery);
