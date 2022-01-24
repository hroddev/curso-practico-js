// the original workshop is in spanish, but I need practices my english classes too, so I change the code to english, forgive me if you see some translate errors XD

function calcPriceWithDiscount (price, discount) {

    const pricePercentWithDiscount = 100 - discount;
    const priceWithDiscount = (price * pricePercentWithDiscount) / 100;
    
    return priceWithDiscount;
}

function onClicButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon= document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];

    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("The coupon '" +  couponValue + "' it's not valid");
        
    } else {
        const discount = userCoupon.discount;
        const priceWithDiscount = calcPriceWithDiscount(priceValue,discount);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "The price with discount is: $" + priceWithDiscount;
    }
}

