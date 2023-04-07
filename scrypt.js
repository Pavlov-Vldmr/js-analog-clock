const degree = 6;
// const hr = $("#hr");
// const min = $("#min");
// const sec = $("#sec");

const hr =  $(".clock__hour");
const min = $(".clock__minute");
const sec = $(".clock__second");

// const hh = 180;
// const mm = 3;
// hr.css('transform' ,`rotateZ(${hh * (mm / 60)}deg)` );
// hr.css('transform' ,`rotateZ(${hh * (mm / 12)}deg)` );

setInterval(() => {

    const date = new Date();
    const ss = date.getSeconds() * degree +180;
    const mm = (date.getMinutes() + (1/60) * date.getSeconds()) * degree + 180;
    const hh = (date.getHours() + (1/60) *date.getMinutes()) * degree*5 + 180;

    // hr.css('transform' ,`rotateZ(${hh * (mm / 12)}deg)` );
    // // min.css('transform' , `rotateZ(${hh}deg)`);
    // // console.log(hh);
    hr.css('transform' , `rotateZ(${hh}deg)`);
    min.css('transform' , `rotateZ(${mm}deg)`);
    sec.css('transform' , `rotateZ(${ss }deg)`);





})