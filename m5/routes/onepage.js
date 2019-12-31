var cool = require("cool-ascii-faces");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.render("onepage4", {
        cool: cool(),
        title: "アーケード｜騎樓雞排|riding268go",
        title_jp: "アーケード",
        title_tw: "騎樓雞排",
        title_en: "riding268go",
        ig: "https://www.instagram.com/riding268go/?hl=zh-tw",
        fb: "https://www.facebook.com/112517263482330/",
        layout: "_fullpage-layout" //指定layout名可不需副名.ejs
    });
});

module.exports = router;