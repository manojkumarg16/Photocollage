$(function() {

var array=[];
    $(document).ready(function() {

         $("#main").hide();
         function showMessage(){
            alert('message box');
         }
        function triggerClick(elem) {
            $(elem).click();
        }
        var $progressWizard = $('.stepper'),
            $tab_active,
            $tab_prev,
            $tab_next,
            $btn_prev = $progressWizard.find('.prev-step'),
            $btn_next = $progressWizard.find('.next-step'),
            $tab_toggle = $progressWizard.find('[data-toggle="tab"]'),
            $tooltips = $progressWizard.find('[data-toggle="tab"][title]');
        // To do:
        // Disable User select drop-down after first step.
        // Add support for payment type switching.

        //Initialize tooltips
        $tooltips.tooltip();

        //Wizard
        $tab_toggle.on('show.bs.tab', function(e) {
            var $target = $(e.target);

            if (!$target.parent().hasClass('active, disabled')) {
                $target.parent().prev().addClass('completed');
            }
            if ($target.parent().hasClass('disabled')) {
                return false;
            }
        });

                    $('input[id=radiobtn1]').click(function() {
                        // alert('next btn enabled');
             $("#nextbtn").css('display','block');
         });
                    $('input[id=radiobtn2]').click(function() {
                        // alert('next btn enabled');
             $("#nextbtn1").css('display','block');
         });
                    $('input[id=radiobtn3]').click(function() {
                        // alert('next btn enabled');
             $("#nextbtn2").css('display','block');
         });
                    $('input[id=radiobtn4]').click(function() {
                        // alert('next btn enabled');
             $("#submitbtn").css('display','block');
         });
   
        $btn_next.on('click', function() {
            var radioValue = $("input[name='optradio']:checked").val();
            console.log(radioValue);
            array.push(radioValue);
            $tab_active = $progressWizard.find('.active');
          
            $tab_next = $tab_active.next().find('a[data-toggle="tab"]');
            triggerClick($tab_next);
            var radio = document.getElementsByName('optradio');
            for(i=0;i<radio.length;i++)
            {
                if(radio[i].checked){
                    $tab_active = $progressWizard.find('.active');

                    $tab_active.next().removeClass('disabled');

                    $tab_next = $tab_active.next().find('a[data-toggle="tab"]');
                    triggerClick($tab_next);
                }
            }
        });
        $btn_prev.click(function() {
            $tab_active = $progressWizard.find('.active');
            $tab_prev = $tab_active.prev().find('a[data-toggle="tab"]');
            triggerClick($tab_prev);
        });
        
        $('#enter').on('click',function() {
            var name=$('#name').val();
            if(name==""){
                $('#first').show();
                $('#main').hide();
                setTimeout(function () {
                    document.getElementById('name').setAttribute('style','width:500px;height:60px;border-radius:5px;font-size: large;background-color:red;');
                },0);
                setTimeout(function () {
                    document.getElementById('name').setAttribute('style','width:500px;height:60px;border-radius:5px;font-size: large;');
                },500);
                setTimeout(function () {
                    document.getElementById('name').setAttribute('style','width:500px;height:60px;border-radius:5px;font-size: large;background-color:red;');
                },1000);
                setTimeout(function () {
                    document.getElementById('name').setAttribute('style','width:500px;height:60px;border-radius:5px;font-size: large;');
                },1500);
            }
            else{
            $('#first').hide();
            $('#main').show();
            $(".client").text(name);
        
            document.getElementById('h').innerHTML= '<h2 style="display:block;color:#fff;font-size:20px;margin-top:8px;">Hey ,<span class="client"></span></h2>';
            // document.getElementById('h').append(name)
            document.getElementsByTagName('body')[0].setAttribute("style",  style="background-image:url('images/ques/firework1.jpg');background-repeat: no-repeat fixed;background-size: 100% 100%;")
            }
        });
        $('#submitbtn').on('click',function() {
            $("#sound").trigger('load');
            $("#sound").trigger('play');

            document.getElementById('A').innerHTML = '<img class="img-responsive he" style="border-radius:5px;border-style:solid;border-color:white;border-width:5px 5px 5px 10px;" src="'+array[0]+'">';
            document.getElementById('main').setAttribute('style','display:none');
            document.getElementsByTagName('body')[0].setAttribute("style", "background-image:url('images/ques/fireworks2.jpg');background-repeat: no-repeat fixed;background-size: 100% 100%;");
            document.getElementById('mymodal').setAttribute('class','mymodalclass');
            document.getElementById('mymodal').setAttribute('style','display:block;');

            $('#A').addClass('animated rotateInDownLeft');
            setTimeout(function () {
            document.getElementById('B').innerHTML = '<img class="img-responsive he" style="border-radius:5px;border-style:solid;border-color:white;border-width:5px 5px 5px 10px;" src="'+array[1]+'">';
            $('#B').show().addClass('animated rotateInDownRight');},1000
            );

            setTimeout(function () {
            document.getElementById('Y').innerHTML = '<h1 id="heading" style="color: white; width:50%;" >HAPPY NEW YEAR 2017</h1>';
            $('#heading').show().addClass('animated swing');},4000
            );
            
            setTimeout(function() {
            $('#Y').append('<h3 id="subheading" style="color: white; width:90%;">No matter who you are and what holiday you celebrate, all of us at Wipro Digital and Design it wish you a very happy holiday season and all the best for 2017</h3>');
            $('#subheading').show().addClass('animated fadeInLeft');},5000
            );

            setTimeout(function () {
            document.getElementById('C').innerHTML = '<img class="img-responsive he" style="border-radius:5px;border-style:solid;border-color:white;border-width:5px 5px 5px 10px;" src="'+array[2]+'">';
            $('#C').show().addClass('animated bounceInLeft');},2000
            );

            setTimeout(function () {
            document.getElementById('D').innerHTML = '<img class="img-responsive he" style="border-radius:5px;border-style:solid;border-color:white;border-width:5px 5px 5px 10px;" src="'+array[3]+'">';
            $('#D').show().addClass('animated bounceInRight');},3000
            );
        });
    });
});
