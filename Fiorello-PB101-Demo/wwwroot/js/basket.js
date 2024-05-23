$(function() {

    $(document).on("click", "product h6", function () ) {
        let id = parseInt($(this).("data-id"))

        $.ajax({
            type: "POST",
            url: `home/addproducttobasket?id=${id} `,
            success: function (response) {
                $(".rounded-circle").text(response.text)
                $(".rounded-circle").next().text(`CART ($${response.totalPrice})`)
            }
        })
    }


})
