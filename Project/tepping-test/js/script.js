$(document).ready(function () {

    $('.hide-start-button').click(function () {
        $('.hide-start-button').hide();
        $('#show-test').load('test.html .include-test',function () {
             count = 0;
             countInTab = 0;
             sourceKey = [];
             index = 0;
             
             $('.modal-click-timer').click(function () {
                 $('.click-me').attr('data-target', 'false');
             });

            $('.click-me').click(function () {

                if($('.click-me').attr('data-target') == '#exampleModal') return;
                if(count == 0) {
                    $('.show-main').show();
                    $('.show-main-button').hide();
                    $('.add-count').empty();
                    for(var x = 0; x< sourceKey.length; x++){
                        delete sourceKey[x];
                    }
                }
                count++;
                countInTab++;
                CounterTimer();
            });
            CounterTimer = function () {
                $('.show-main').empty();
                $('.show-main').text(count);
                if(count == 1){
                     var countTimer = 0;
                    var showTimer = setInterval(function() {
                        countTimer++;
                        $('.timer-show').empty();
                        $('.timer-show').text(countTimer);
                    }, 1000);
                    setTimeout(function() {
                        $('.show-main').hide();
                        $('.show-main-button').show();
                        $('.click-me').attr('data-target', '#exampleModal');
                        count = 0;
                        countInTab = 0;
                        clearInterval(showTimer);
                    }, 30900);
                    var i = 5;
                    for(i=5; i <= 30; i+=5){
                        console.info('i',i);
                        index = 0;
                        setTimeout(function() {
                            sourceKey[index] = countInTab;
                            index++;
                            console.info('keys',sourceKey);
                            $('.add-count').append('<li class="list-group-item list-group-item-primary">'+ countInTab +'</li>');
                            countInTab = 0;
                        }, i*1000);

                    }
                }

            }
            resultSum = 0;
            $('#result-alg').click(function () {
                $('body').load('result.html .include-result-test',function () {
                    alert();

                    for(var beg = 0; beg < sourceKey.length; beg++){
                        resultSum+= (sourceKey[beg] - sourceKey[0]);
                    }
                    var plus = 1.2;
                    var Equal = Math.abs(resultSum);
                    for(var num = 0, sizeTab = 0; num <26; ++num, sizeTab+=plus){
                        if((sizeTab - plus <= Equal)&&(sizeTab > Equal)) {
                            Equal = Math.floor(num/5);

                        }
                        if(num == 5) plus = 1.8;
                        if(num == 10) plus = 2.2;
                        if(num == 15) plus = 2.8;
                        if(num == 20) plus = 4;
                    }
                    console.info('Eqal',Equal);
                    console.info('reselt',resultSum);
                    if(resultSum < 0) Equal*= (-1);
                    switch (Equal){
                        case 0:
                                $('.show-result').empty();
                                $('.show-result').append("Средняя нервная система</br>Ваш КСНС " + resultSum  );
                                break;
                        case 1:
                                $('.show-result').empty();
                            $('.show-result').append("Небольшая выраженность силы нервной системы</br>Ваш КСНС " + resultSum );
                            break;
                        case 2:
                            $('.show-result').empty();
                            $('.show-result').append("Средне-сильная нервная система</br>Ваш КСНС " + resultSum  );
                            break;
                        case 3:
                            $('.show-result').empty();
                            $('.show-result').append("Сильная нервная система</br>Ваш КСНС " + resultSum );
                            break;
                        case 4:
                            $('.show-result').empty();
                            $('.show-result').append("Сильная нервная система</br>Ваш КСНС " + resultSum );
                            break;
                        case 5:
                            $('.show-result').empty();
                            $('.show-result').append("Очень сильная нервная система</br>Ваш КСНС " + resultSum );
                            break;
                        case -1:
                            $('.show-result').empty();
                            $('.show-result').append("Небольшая выраженность слабости нервной системы</br>Ваш КСНС " + resultSum );
                            break;
                        case -2:
                            $('.show-result').empty();
                            $('.show-result').append("Средне-слабая нервная система</br>Ваш КСНС " + resultSum );
                            break;
                        case -3:
                            $('.show-result').empty();
                            $('.show-result').append("Слабая нервная система</br>Ваш КСНС " + resultSum );
                            break;
                        case -4:
                            $('.show-result').empty();
                            $('.show-result').append("Очень слабая нервная система</br>Ваш КСНС " + resultSum );
                            break;
                        case -5:
                            $('.show-result').empty();
                            $('.show-result').append("Очень слабая нервная система</br>Ваш КСНС " + resultSum );
                            break;


                    }


                });
            });

        });
    });

});