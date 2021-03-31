function compute()
{
    //Calculating the interest

    var principal = document.getElementById("principal").value ; //Getting the amount
    var rate      = document.getElementById("rate").value      ; //Getting the rate
    var years     = document.getElementById("years").value     ; //Getting the years
    var result    = document.getElementById("result")          ; 
    var yearFuture  ;

    var interest  = principal * years * rate / 100             ;

    yearFuture = new Date().getFullYear() + parseInt( years )              ;
    //alert(yearFuture)
    p = document.getElementById("principal").value             ;

    if(principal <= 0){
        alert("Enter a positive number") ;
        //principal.focus() ;
        document.getElementById("principal").focus();
        return false ;
    }
    //Printing the computed interest
    result.innerHTML =  "<p>If you deposit <mark><b>" + principal + "</b></mark>,</p>" + 
                        "<p>at an interest rate of <mark><b>" + rate + "%</b></mark>.</p>" + 
                        "<p>You will receive an amount of <mark><b>" + interest + "</b></mark>,</p>" + 
                        "<p>in the year <mark><b>" + yearFuture + "</b></mark></p>" + 
                        "<p></p>" ;
}

function printRate(){
    //Printing the rate selected
    var rate       = document.getElementById("rate").value      ;
    var rate_value = document.getElementById("rate_value")      ;
    rate_value.innerHTML = rate + " %";
    //alert(rate)
}
        