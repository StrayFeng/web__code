// TODO：请补充代码
function startGame() {
    $("img").show(500);
    $("#start").hide();
    $("img").hide(500);
    let i = 0;
    let clickImg = [];
    [...$(".img-box")].forEach((item) => {
        item.onclick = function () {
            i++;
            if (i <= 2) {
                $(item.children).show();
                clickImg.push(item);

                if (i === 2) {
                    setTimeout(() => {
                        let score = $("#score")[0];

                        if (
                            clickImg[0].children[0].alt ===
                            clickImg[1].children[0].alt
                        ) {
                            score.innerHTML = Number(score.innerHTML) + 2;
                            $(clickImg[0]).css({
                                visibility: "hidden",
                            });
                            $(clickImg[1]).css({
                                visibility: "hidden",
                            });
                        } else {
                            score.innerHTML = Number(score.innerHTML) - 2;
                            $(clickImg[0].children[0]).hide();
                            $(clickImg[1].children[0]).hide();
                        }
                        clickImg = [];
                        i = 0;
                    }, 400);
                }
            }
        };
    });
}

