var Codeforces = {
    userinfo_url: "https://codeforces.com/api/user.info",
    handle: "sanjeev1779",

    getUserInfo: function() {
        final_url = Codeforces.userinfo_url + "?handles=" + Codeforces.handle
        $.ajax({
            url: final_url,
            type: 'get',
            success: function(data) {
                if (data["status"] == "OK") {
                    userinfo = data["result"][0];
                    $(".codeforces .max_rating").text(userinfo["maxRating"]);
                    $(".codeforces .max_rating_category").text(userinfo["maxRank"]);
                    $(".codeforces .cur_rating").text(userinfo["rating"]);
                    $(".codeforces .cur_rating_category").text(userinfo["rank"]);
                }
            },
            error: function(data) {
                console.log(data);
            }
        });
    }
};

$(document).ready(function() {
    Codeforces.getUserInfo()
});
