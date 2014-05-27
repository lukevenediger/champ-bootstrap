$(document).ready(function(){
    // Simple shim to mark the current page as active
    (function(){
        var pageUrl = location.href, linkFound = false;
        // Attempt 1 - Check the top level page URLS
        $('ul.nav > li').each(function(idx, li){
            if(linkFound) return;
            var linkHref = $(li).find('a').attr('href').replace('../', '');
            if(pageUrl.indexOf(linkHref) >= 0) { $(li).addClass('active'); linkFound = true; }
        });
        
        // Attempt 2 - Check child pages
        if(!linkFound) {
            pageUrl = location.pathname;
            $('ul.nav > li').each(function(idx, li){
                if(linkFound) return;
                var linkHref = $(li).find('a').attr('href').replace('../', '');
                var baseUrl = linkHref.substring(0, linkHref.lastIndexOf('/') + 1);
                if(baseUrl.length > 0 && pageUrl.indexOf(baseUrl) >= 0) { $(li).addClass('active'); linkFound = true; }
            }); 
        }
        
        // Attempt 3 - Check drop downs
        if(!linkFound) {
            $('ul.nav > li > ul > li').each(function(idx, li){
                if(linkFound) return;
                var linkHref = $(li).find('a').attr('href').replace('../', '');
                var baseUrl = linkHref.substring(0, linkHref.lastIndexOf('/') + 1);
                if(pageUrl.indexOf(baseUrl) >= 0) { $(li).parent().parent().addClass('active');}
                if(pageUrl.indexOf(linkHref) >= 0){ $(li).addClass('active'); linkFound = true; }
            }); 
        }
    }());
});