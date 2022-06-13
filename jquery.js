$(document).ready(function(){

    let turno=0;
       
    $('.tabla').click(function(){
        
        turno++;
         $(this).addClass(turno % 2 ?'casillaElegida':'casillaRandom');
       
        let numTurno=turno % 2 ?'1':'2';
        $(this).data('turno', numTurno);
        $('.turno').text('Número movimiento: ' + turno);
        
        let div1=parseInt($('#div1').data('turno'));
        let div2=parseInt($('#div2').data('turno'));
        let div3=parseInt($('#div3').data('turno'));
        let div4=parseInt($('#div4').data('turno'));
        let div5=parseInt($('#div5').data('turno'));
        let div6=parseInt($('#div6').data('turno'));
        let div7=parseInt($('#div7').data('turno'));
        let div8=parseInt($('#div8').data('turno'));
        let div9=parseInt($('#div9').data('turno'));

        if(
            (div1+div2+div3)==3 || (div1+div2+div3)==6 ||
            (div1+div5+div9)==3 || (div1+div5+div9)==6 ||
            (div1+div4+div7)==3 || (div1+div4+div7)==6 ||
            (div2+div5+div8)==3 || (div2+div5+div8)==6 ||
            (div3+div5+div7)==3 || (div3+div5+div7)==6 ||
            (div3+div6+div9)==3 || (div3+div6+div9)==6 ||
            (div4+div5+div6)==3 || (div4+div5+div6)==6 ||
            (div7+div8+div9)==3 || (div7+div8+div9)==6){
                $('#mensaje').append("Has ganado en " + Math.round(turno/2) + " movimientos!").addClass('resultado animate__heartBeat');
                $('.todaTabla').addClass('animate__heartBeat');
                setTimeout('location.reload()',3000);
            }else if((turno==9) && (div1+div2+div3+div4+div5+div6+div7+div8+div9)==13){
                $('#mensaje').append("Intentalo otra vez y que tengas suerte!").addClass('resultado animate__wobble');
                $('.tabla').addClass('animate__hinge');
                setTimeout('location.reload()',2000);
            }
    });

$('#limpiar').click(function(){
    location.reload();
});

});//cierre document.ready