/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(check) {
    if (check.checked) {
        var name = document.getElementById("shippingName").value;
        var zipcode = document.getElementById("shippingZip").value;
        document.getElementById("billingName").value = name;
        document.getElementById("billingZip").value = zipcode;
    } else {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}