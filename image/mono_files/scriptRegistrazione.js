function setRegistrazione(e,r){$("#registrati").submit(function(){"false"==$("#div_checkbox_privacy .check_custom").attr("aria-checked")||void 0==$("#div_checkbox_privacy .check_custom").attr("aria-checked")?$("#label_check_informativa").addClass("errorlabel"):$("#label_check_informativa").removeClass("errorlabel")}),jQuery.validator.addMethod("formatoPassword",function(e,r){return!$.isNumeric(e)&&!/^[a-z]+$/i.test(e)},"La nuova password deve contenere al suo interno almeno una lettera e almeno un numero."),jQuery.validator.addMethod("checkUserReg",function(e,r){var a="email="+e,t=!1;return $.ajax({type:"POST",async:!1,url:baseUrlLingua+areaPrivataUrl+"/ajax/controlloUser",data:a,success:function(e){"esiste"!=e&&(t=!0)}}),t},"Utente già registrato!"),$("#registrati").validate({ignore:[],errorPlacement:function(e,r){"privacy_imm"==r.attr("name")?$(" label[for="+r.attr("id")+"]").attr("style","color:red"):e.insertAfter(r)},rules:{email:{required:!0,verifyemail:!0},password:{required:!0,formatoPassword:!0,minlength:8},privacy_imm:{required:!0}},messages:{email:{required:aLang.emailObbligatoria,verifyemail:aLang.emailValida},password:{required:aLang.pswObbligatoria,formatoPassword:aLang.errorPsw}}}),$("#registrati").on("change","input",function(){"labelfc_privacy_immReg"==$(this).attr("id")&&($(this).valid()?$("label[for=labelfc_privacy_immReg]").removeAttr("style"):$("label[for=labelfc_privacy_immReg]").attr("style","color:red"))}),$("#registrati").on("click","#annulla_form_registrati",function(e){e.preventDefault(),$("#modalRegistrati").length>0&&$("#modalRegistrati").modal("hide"),setTimeout(function(){$("#modalLogin").modal("show"),$("body").attr("style","overflow: hidden"),$("#modalLogin").css({"overflow-y":"auto"})},500)}),$("#registrati").on("click","#invia_form_registrati",function(){if($("#registrati").valid()){var e=$("#modalRegistrati .loader");e.stop().fadeIn(300);var r=$("#registrati").serialize();return $.ajax({type:"POST",url:baseUrlLingua+areaPrivataUrl+"/ajax/setRegistrazione",data:r,dataType:"json",success:function(r){if(422==r.response.status_code)return e.stop().fadeOut(300),$("#errorRegistrazione").html(aLang.erroreGenerico).show(),!1;200==r.response.status_code||201==r.response.status_code?location.href=baseUrlLingua+areaPrivataUrl+"/enregistrez/complete":(e.stop().fadeOut(300),$("#errorRegistrazione").html(aLang.erroreRegistrazione).show())},error:function(r,a,t){e.stop().fadeOut(300),$("#errorRegistrazione").html(aLang.erroreGenerico).show()}}),!1}}),$(document).keypress(function(e){"block"==$("#modalRegistrati").css("display")&&13==e.which&&$("#invia_form_registrati").trigger("click")})}$(document).ready(function(){setRegistrazione("#registrati",!1)});