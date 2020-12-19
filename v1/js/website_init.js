var WebsiteInit = {
    setLastUpdatedAt: function() {
        var update_info_file = "/config/last_updated"
        $.get(update_info_file, function(data) {
            $(".website_info  #last_updated_at").text(data);
        });
    }
}

$(document).ready(function() {
    WebsiteInit.setLastUpdatedAt();
});
