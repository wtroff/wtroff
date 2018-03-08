$(document).ready(function () {

    $('.hide-start-button').click(function () {
        $('.hide-start-button').hide();
        $('#show-test').load('test.html .include-test',function () {
             count = 0;
             countInTab = 0;
             sourceKey = [];
             index = 0;
             
             $('.modal-click-timer').click(function () {
                 $('.click-me').each(function (key,value) {
                     $(value).attr('data-target','false');
                 })


             });

            $('.click-me').click(function () {
                if($('.click-me').attr('data-target') == '#exampleModal') return;
                if(count == 0) {
                    $('.show-main').show();
                    $('.show-main-button').hide();
                    $('.add-count').empty();
                    // for(var x = 0; x< sourceKey.length; x++){
                    //     delete sourceKey[x];
                    // }
                    $.each(sourceKey,function (key,value) {
                        delete sourceKey[key];
                    })
                }
                count++;
                countInTab++;
                CounterTimer();
            });
            $('html').keyup(function (event) {
                if (event.keyCode == 32){
                    $('.click-me').each(function (key,value) {
                        $(value).attr('data-target','false');
                    })
                    count++;
                    countInTab++;
                    CounterTimer();

                }
            })
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
                            if(countInTab < 13){
                                $('#warning-timer').text('Не теряй темп! Ты сможешь ^_^ ');
                            }else if(countInTab > 55){
                                $('#warning-timer').text('Очень высокий темп Waw ');
                            } else if(countInTab > 40){
                                $('#warning-timer').text('Превосходный темп :D ');
                            } else if (countInTab > 30) {
                                $('#warning-timer').text('Неплохой средний темп!');
                            } else {
                                $('#warning-timer').text('Лучше прибавить скорости');
                            }
                            $('.add-count').append('<li class="list-group-item list-group-item-primary">'+ countInTab +'</li>');
                            countInTab = 0;
                        }, i*1000);

                    }
                }

            }


            $('#result-alg').click(function () {
                $('body').load('result.html .include-result-test',function () {
                    var Equal = 0, resultSum = 0,
                    averageFiveSec = 0, avarageOneSec = 0, sumAllPoints = 0;
                    for(var beg = 0; beg < sourceKey.length; beg++){
                        resultSum+= (sourceKey[beg] - sourceKey[0]);
                        sumAllPoints+= sourceKey[beg];

                    }
                    if((Equal == 6)&&(resultSum > 0)) {
                        Equal = 0;
                    }
                    averageFiveSec = parseInt(sumAllPoints/6);
                    avarageOneSec = parseInt(sumAllPoints/30);

                    if(Equal < 6) {
                        var plus = 1.2;
                        Equal = Math.abs(resultSum);
                        for (var num = 0, sizeTab = 0; num < 26; ++num, sizeTab += plus) {
                            if ((sizeTab - plus <= Equal) && (sizeTab > Equal)) {
                                Equal = Math.floor(num / 5);
                            }
                            if (num == 5) plus = 1.8;
                            if (num == 10) plus = 2.2;
                            if (num == 15) plus = 2.8;
                            if (num == 20) plus = 4;
                        }
                        console.info('Eqal', Equal);
                        console.info('reselt', resultSum);
                        if (resultSum < 0) {
                            Equal *= (-1);
                            if ((Equal == resultSum)) Equal = -5;
                        }
                        if ((Equal == resultSum)) Equal = 5;
                    }
                    switch (Equal){
                        case 0:
                                $('.show-result').empty();
                                $('.show-result').append("Средняя нервная система</br>Ваш КСНС " + resultSum );
                                $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                                $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                                break;
                        case 1:
                                $('.show-result').empty();
                                $('.show-result').append("Небольшая выраженность силы нервной системы</br>Ваш КСНС " + resultSum );
                            $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;
                        case 2:
                            $('.show-result').empty();
                            $('.show-result').append("Средне-сильная нервная система</br>Ваш КСНС " + resultSum  );
                            $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;
                        case 3:
                            $('.show-result').empty();
                            $('.show-result').append("Сильная нервная система</br>Ваш КСНС " + resultSum );
                            $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;
                        case 4:
                            $('.show-result').empty();
                            $('.show-result').append("Сильная нервная система</br>Ваш КСНС " + resultSum );
                            $('.show-result').append("</br>Ваш средний темп состavarageOneSecавляет" + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;
                        case 5:
                            $('.show-result').empty();
                            $('.show-result').append("Очень сильная нервная система</br>Ваш КСНС " + resultSum );
                            $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;
                        case -1:
                            $('.show-result').empty();
                            $('.show-result').append("Небольшая выраженность слабости нервной системы</br>Ваш КСНС " + resultSum );
                            $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;
                        case -2:
                            $('.show-result').empty();
                            $('.show-result').append("Средне-слабая нервная система</br>Ваш КСНС " + resultSum );
                            $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;
                        case -3:
                            $('.show-result').empty();
                            $('.show-result').append("Слабая нервная система</br>Ваш КСНС " + resultSum );
                            $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;
                        case -4:
                            $('.show-result').empty();
                            $('.show-result').append("Очень слабая нервная система</br>Ваш КСНС " + resultSum );
                            $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;
                        case -5:
                            $('.show-result').empty();
                            $('.show-result').append("Очень слабая нервная система</br>Ваш КСНС " + resultSum );
                            $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;
                        case 6:
                            $('.show-result').empty();
                            $('.show-result').append("Вы слишком рано сдались: </br>Очень слабая нервная система</br>Ваш КСНС " + resultSum );
                            $('.show-result').append("</br>Ваш средний темп составляет  " + averageFiveSec + "  кликов за пять секунд");
                            $('.show-result').append("</br>Или " + avarageOneSec + "  кликов в секунду");
                            break;

                    }
                   if(averageFiveSec > 59) {

                       $('.show-result').append("</br>Очень быстрый темп. Высокая подвижность нервной системы");
                   }else if (averageFiveSec > 44) {
                       $('.show-result').append("</br>Быстрый темп. подвижная нервная система");
                   } else if (averageFiveSec > 31) {
                       $('.show-result').append("</br>Средней подвижности нервная система");
                   } else {
                            $('.show-result').append("</br>Малоподвижная нервная система");
                    }


                });
            });

        });
    });

});