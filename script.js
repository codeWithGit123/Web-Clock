var t =document.getElementById('time')
let time;
var a;
let h;
let s;
func = ()=>{
        a =new Date();
        h = a.getHours();
        s = h>= 12 ? 'pm' : 'am';
        h=h%12;
        h=h?h:12;
        time=h+':'+a.getMinutes()+':'+a.getSeconds()+" "+s;
        t.innerHTML=time}
setInterval(func,1000)