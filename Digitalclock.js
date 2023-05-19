function clk()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var dy=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
       am_pm="PM"
       if(hh>=13)
       {
        hh-=12;
       }
    }
    if(hh=0)
    {
        hh=12;
    }
    var fulltime=`${hh}:${mm} ${am_pm}`
    document.getElementById("Time").innerHTML=fulltime
    document.getElementById("sec").innerHTML=ss
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Aprl"
    }
    else if(mo==4)
    {
        mo="may"
    }
    else if(mo==5)
    {
        mo="june"
    }
    else if(mo==6)
    {
        mo="july"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sept"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else if(mo==11)
    {
        mo="Dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    var bdy=document.querySelector("body")
    document.getElementById("Date").innerHTML=fullDate
    switch(dy)
    {
        case 0:dy="Sunday"
        bdy.style.backgroundImage="url(sunday.jpeg)"
        break;
        case 1:dy="Monday"
        bdy.style.backgroundImage="url(monday.webp)"
        break;
        case 2:dy="Tuesday"
        bdy.style.backgroundImage="url(tuesday.jpeg)"
        break;
        case 3:dy="Wednessday"
        bdy.style.backgroundImage="url(wednessday.jpeg)"
        break;
        case 4:dy="Thursday"
        bdy.style.backgroundImage="url(thursday.webp)"
        break;
        case 5:dy="Friday"
        bdy.style.backgroundImage="url(friday.jpeg)"
        break;
        case 6:dy="Saturday"
        bdy.style.backgroundImage="url(saturday.jpeg)"
        break;
    }
    document.getElementById("Day").innerHTML=dy
    setTimeout(clk,1000)
}
