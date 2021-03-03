function eligible(sec){
    var text;
    var sec=document.getElementById("section");
    var gpa=document.getElementById("overallCgpa").value;
    if(sec.value==1){
        if (gpa>=4.80 && gpa<=5.00){
            document.getElementById("output").style.color="green"
            text="MashaAlalh, you are eligible for scholarshiop due to SSC result"
        }
        else if(gpa<4.80){
            document.getElementById("output").style.color="red"
            text="Sorry, you are not Eligible due to SSC result"
        }
        else if(isNaN(sec) || isNaN(gpa) || gpa<0.00 || gpa>5.00){
            document.getElementById("output").style.color="black"
            text="invalid"
        }
        else{
            text="";
        }
    }
    else if(sec.value==2){
        if (gpa>=4.80 && gpa<=5.00){
            document.getElementById("output").style.color="green"
            text="MashaAlalh, you are eligible for scholarshiop due to HSC result"
        }
        else{
            document.getElementById("output").style.color="red"
            text="Sorry, you are not Eligible due to HSC result";
        }
    }
    else if(isNaN(sec) || isNaN(gpa) || gpa<0.00 || gpa>5.00){
        text="invalid"
    }
    else if(sec=2 && gpa>=4.80 && gpa<=5.00){
        text="MashaAlalh, you are eligible for scholarshiop due to HSC result"
    }
    else {
        text="";
    }
    document.getElementById("output").innerHTML=text;
}

