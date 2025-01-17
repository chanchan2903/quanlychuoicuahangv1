function increaseValue(e){
    var id = e.getAttribute("data-cart-id");
    var productId = e.getAttribute("data-product-id");
    var currentValue = document.getElementById(id);
    var price = e.getAttribute("data-price");
    currentValue.value = parseInt(currentValue.value) + 1;
    var priceElement = document.getElementById("price-product-" + productId);
    var req = new XMLHttpRequest();
    req.open("POST", "Menu/addCart", true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
            priceElement.innerHTML = "Đơn giá: " + parsePrice(String(currentValue.value * price)) + "đ";
        } 
    }
    req.send("id=" + productId);
}
function decreaseValue(e){
    var id = e.getAttribute("data-cart-id");
    var productId = e.getAttribute("data-product-id");
    var currentValue = document.getElementById(id);
    var price = e.getAttribute("data-price");
    var priceElement = document.getElementById("price-product-" + productId);
    if(currentValue.value > 1){
        currentValue.value = parseInt(currentValue.value) - 1;
        var req = new XMLHttpRequest();
        req.open("POST", "Menu/addCart", true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
                priceElement.innerHTML = "Đơn giá: " + parsePrice(String(currentValue.value * price)) + "đ";
            } 
        }
        req.send("id=" + productId + "&decrease=true");
    }
}
function removeCart(e){
    var id = e.getAttribute("data-product-id");
    var req = new XMLHttpRequest();
    req.open("POST", "cart/delete", true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
            location.reload();
        } 
    }
    console.log(id);
    req.send("id=" + id );
}
function price(e){
    var id = e.getAttribute("data-product-id");
    var price = e.getAttribute("data-price");
    var currentValue = document.getElementById("cart-id-"+id);
    var priceElement = document.getElementById("price-product-" + id);
    priceElement.innerHTML = "Đơn giá: " + parsePrice(String(currentValue.value * price)) + "đ";
}
function parsePrice(price){
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}