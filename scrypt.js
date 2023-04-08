const degree = 6;
const hr =  $(".clock__hour");
const min = $(".clock__minute");
const sec = $(".clock__second");


setInterval(() => {
    const date = new Date();
    const ss = date.getSeconds() * degree +180;
    const mm = (date.getMinutes() + (1/60) * date.getSeconds()) * degree + 180;
    const hh = (date.getHours() + (1/60) *date.getMinutes()) * degree*5 + 180;

    hr.css('transform' , `rotateZ(${hh}deg)`);
    min.css('transform' , `rotateZ(${mm}deg)`);
    sec.css('transform' , `rotateZ(${ss }deg)`);

})