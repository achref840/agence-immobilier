var accessToken="",nMutuoPerc=0,nMutuoPercAnticipo=0;function aggiornaRiepilogoSalvaRicerca(){$("#contentRiepilogo").find("p").hide(),campiInput=$("form#salvaRicercaForm #filtri").find("input"),campiSelect=$("form#salvaRicercaForm #filtri .selectpicker"),campiSelectMulti=$("form#salvaRicercaForm #filtri").find('select[multiple="multiple"]'),valori={},$.each(campiInput,function(){"text"==$(this).attr("type")||"number"==$(this).attr("type")?valori[$(this).attr("name")]=$(this).val().trim():"checkbox"==$(this).attr("type")&&$(this).is(":checked")&&(valori[$(this).attr("name")]=aLang.si)}),$.each(campiSelect,function(){nome=$(this).attr("name"),selezionato=$(this).find("option:selected"),testo=selezionato.text().trim(),testo!=aLang.qualsiasi&&"ricercaZona[]"!=nome&&(valori[nome]=testo)}),$.each(campiSelectMulti,function(){nome=$(this).attr("name"),selected=$(this).find("option:selected"),testoMulti=new Array,$.each(selected,function(){testoMulti.push($(this).text())}),jQuery.isEmptyObject(testoMulti)||(valori[nome]=testoMulti.join(", "))}),$.each(valori,function(a,e){""!==e&&e!==aLang.qualsiasi&&(a=a.replace("[]",""),paragrafo=$("#"+a+"Riepilogo").slideDown(),paragrafo.find("span").text(e))})}$(document).ready(function(){function a(a,i,r,t,c){$.post(baseUrlLingua+"ajax/ricercaZone",{ricercaTipo:a,ricercaId:i,ricercaValore:r,ricercaZona:t,ricercaComuneId:c}).done(function(a){$("#boxSearchArea").html(a),$("#boxSearchArea .list-group").listgroup(),"comune"==$("#boxSearchAreaList").attr("ricercatipo")?1==$("#boxSearchArea .list-group .list-group-item").length?setTimeout(function(){e($("#boxSearchArea .list-group .list-group-item"),1)},100):$("#boxSearchArea, #boxSearchOverlay").show():"zona"==$("#boxSearchAreaList").attr("ricercatipo")?(setTimeout(function(){var a=$("#boxSearchAreaList").offset().top,e=$("a[name='"+$("#boxSearchAreaList").attr("ricercaid")+"']"),i=e.offset().top-a-e.outerHeight();$("#boxSearchAreaList").animate({scrollTop:i},"slow")},100),$("#boxSearchArea, #boxSearchOverlay").show()):"provincia"==$("#boxSearchAreaList").attr("ricercatipo")?($("#boxSearchArea, #boxSearchOverlay").hide(),e($("#boxSearchArea .list-group .boxSearchAreaOptionProvincia"),1)):"localita"==$("#boxSearchAreaList").attr("ricercatipo")&&e($("#boxSearchArea .list-group .boxSearchAreaOptionLocalita"),1),$("#boxSearchArea .list-group .list-group-item").click(function(){"Provincia"==$(this).attr("tipo")||"Comune"==$(this).attr("tipo")?(e($(this)),$(".boxSearchAreaOptionZona").removeClass("active")):"Zona"==$(this).attr("tipo")&&($(".boxSearchAreaOptionComune").removeClass("active"),$(".boxSearchAreaOptionProvincia").removeClass("active"),$("#ricercaTesto").val($(this).html()),$("#ricercaStringa").val($(this).attr("comunenome")),$("#boxSearchArea, #boxSearchOverlay").show()),setTimeout(function(){0==$("#boxSearchArea .list-group .list-group-item.active").length?$("#boxSearchAreaConferma").prop("disabled",!0):$("#boxSearchAreaConferma").prop("disabled",!1)},100)})})}function e(a,e){$("#ricercaInput").val(a.html()),$("#ricercaTipo").val(a.attr("tipo").toLowerCase()),$("#ricercaKeyUrl").val(a.attr("keyurl")),$("#ricercaValore").val(a.attr("value")),$("#ricercaStringa").val(a.attr("nome")),$("#ricercaTesto").val(a.html()),$("#ricercaZona").val(""),valRicercaInput=$("#ricercaInput").val(),1!=e?$("#boxSearchAreaModifica").show():$("#boxSearchAreaModifica").hide(),"area-riservata"!=$("body").attr("id")&&$("#ricercaImmobili").submit()}if("zona"==sRicercaModalita){var i=$("#ricercaTipo").val(),r=$("#ricercaNazione").val(),t=$("#ricercaKeyUrl").val(),c=$("#ricercaValore").val(),o=$("#ricercaTesto").val(),n=($("#ricercaCategoria").val(),$("#ricercaStringa").val()),l=$("#ricercaInput").val(),s=0;$("#ricercaInput").length&&($("#ricercaInput").autocomplete({autoFocus:!0,minLength:3,source:function(a,e){var i=$("#ricercaInput").val().replace("’","'");$.ajax({type:"post",url:baseUrlLingua+"ajax/ricercaImmobiliAutocomplete",dataType:"json",data:{ricercaTesto:i,ricercaCategoria:$("#ricercaCategoria").val(),ricercaContratto:$("#ricercaContratto").val()},success:function(a){if(a.length)e(a.slice(0,50));else{var i=[{label:$("#immobiliNoResult").attr("msg"),value:e.term}];e(i)}}}),$(".imgImmobiliRicercaWait").css("display","block")},response:function(a,e){$(".imgImmobiliRicercaWait").hide(),provinceCount=0,comuniCount=0,zoneCount=0,localitaCount=0,precisoCount=0},close:function(a,e){1!=s?($("#ricercaTipo").val(i),$("#ricercaNazione").val(r),$("#ricercaKeyUrl").val(t),$("#ricercaValore").val(c),$("#ricercaTesto").val(o),$("#ricercaStringa").val(n),0==$("#ricercaInput").is(":focus")&&$("#ricercaInput").val(l),s=0):($("#ricercaTipo").val(valRicercaTipo),$("#ricercaNazione").val(valRicercaNazione),$("#ricercaKeyUrl").val(valRicercaKeyUrl),$("#ricercaValore").val(valRicercaValore),$("#ricercaTesto").val(valRicercaTesto),$("#ricercaStringa").val(valRicercaStringa),0==$("#ricercaInput").is(":focus")&&$("#ricercaInput").val(l))},select:function(e,i){if(void 0===i.item.data)return!1;aData=i.item.data.split("|"),"riferimento"==aData[0]?(aData=i.item.data.split("|"),$("#ricercaTipo").val(aData[0]),$("#ricercaNazione").val(aData[1]),$("#ricercaKeyUrl").val(aData[2]),$("#ricercaValore").val(aData[2]),$("#ricercaTesto").val(i.item.label),$("#ricercaStringa").val(i.item.data),$("#ricercaInput").val(i.item.label),s=1,valRicercaTipo=aData[0],valRicercaNazione=aData[1],valRicercaKeyUrl=aData[2],valRicercaValore=aData[2],valRicercaTesto=i.item.label,valRicercaStringa=i.item.data,valRicercaInput=i.item.label,$("#boxSearchAreaModifica").hide()):a(aData[0],aData[3],aData[4],null,aData[5])},open:function(a,e){navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&$(".ui-autocomplete").off("menufocus")},focus:function(a,e){return!1}}).autocomplete("instance")._renderItem=function(a,e){return void 0===e.data?$("<li>").append("<div class='ricercaLabel'>"+$("#immobiliNoResult").attr("msg")+"</div>").appendTo(a):(aData=e.data.split("|"),sLabel=e.label,sDesc=e.desc,sTitolo="",1==aData[6]?(0==precisoCount&&(sTitolo="<div class='ricercaLabelTitolo'>"+aLang.risultatiMigliori+"</div><div style='clear:both'></div>",precisoCount++),sLabel="<strong>"+sLabel+" ("+aLang[aData[0]]+")</strong>"):"provincia"==aData[0]&&0==provinceCount?(sTitolo="<div class='ricercaLabelTitolo'>"+aLang.province+"</div><div style='clear:both'></div>",provinceCount++):"comune"==aData[0]&&0==comuniCount?(sTitolo="<div class='ricercaLabelTitolo'>"+aLang.comuni+"</div><div style='clear:both'></div>",comuniCount++):"zona"==aData[0]&&0==zoneCount?(sTitolo="<div class='ricercaLabelTitolo'>"+aLang.zone+"</div><div style='clear:both'></div>",zoneCount++):"localita"==aData[0]&&0==localitaCount&&(sTitolo="<div class='ricercaLabelTitolo'>"+aLang.localitas+"</div><div style='clear:both'></div>",localitaCount++),$("<li>").append(sTitolo+"<div class='ricercaLabel'>"+sLabel+"</div><div class='ricercaDesc'>"+sDesc+"</div><div style='clear:both'></div>").appendTo(a))}),$("#ricercaImmobili").submit(function(){$("#ricercaButton").unbind("click"),$("#cercaMappa").prop("disabled",!0),$("#modificaMappa").prop("disabled",!0),$("#boxSearchAreaConferma").prop("disabled",!0);var a=$(this).serialize();salvaRicercaRecente(a)}),$("#ricercaButton").on("click",function(){controlloPulsante=1,""!==$("#ricercaValore").val()&&$("#ricercaImmobili").submit()}),$("input.listaImmobiliAjax, select.listaImmobiliAjax").on("change",function(){var a=$("#ricercaImmobili").serialize();console.log(a),$(".immobiliListaAnnunciCaricamento").show(),eseguiRicerca(a)}),$("form#ricercaImmobili").find(".valoreRange").on("focusout",function(){sNomeCampo=$(this).data("id"),sNomeCampoM=sNomeCampo.substr(0,1).toUpperCase()+sNomeCampo.substr(1),sValoreMin=$("form#ricercaImmobili").find("input[name='ricerca"+sNomeCampoM+"Min']").val(),sValoreMax=$("form#ricercaImmobili").find("input[name='ricerca"+sNomeCampoM+"Max']").val(),""==sValoreMin&&""==sValoreMax?sContenutoRange=aLang[sNomeCampo+"RangeTitolo"]:""!=sValoreMin&&""!=sValoreMax?(sContenutoRange=aLang[sNomeCampo+"DaA"].replace("{0}",sValoreMin),sContenutoRange=sContenutoRange.replace("{1}",sValoreMax)):""!=sValoreMin?sContenutoRange=aLang[sNomeCampo+"Da"].replace("{0}",sValoreMin):sContenutoRange=aLang[sNomeCampo+"A"].replace("{0}",sValoreMax),$("form#ricercaImmobili").find("#"+sNomeCampo+"RangeTesto").html(sContenutoRange)}),$("form#ricercaImmobili").find(".valoreRange").trigger("focusout"),$("#ricercaInput").focus(function(){""!=$(this).val()&&(valRicercaInput=$(this).val(),$(this).val(""))}),$("#ricercaInput").blur(function(){"undefined"!=typeof valRicercaInput&&$(this).val(valRicercaInput)}),$(document).on("click","#boxSearchOverlay",function(){u(),$("#boxSearchArea, #boxSearchOverlay").hide()}),$(document).on("click","#boxSearchAreaConferma",function(a){u(),"area-riservata"==$("body").attr("id")&&(a.preventDefault(),$("#boxSearchArea, #boxSearchOverlay").hide())}),$("#boxSearchAreaModifica").click(function(){valRicercaInput=$("#ricercaInput").val(),a($("#ricercaTipo").val(),$("#ricercaValore").val(),$("#ricercaStringa").val(),$("#ricercaZona").val(),$("#ricercaComuneId").val())}),("zona"==$("#ricercaTipo").val()||"comune"==$("#ricercaTipo").val()&&""!=$("#ricercaZona").val())&&$("#boxSearchAreaModifica").show()}function u(){var a=0,i="",r="";$("#boxSearchArea .list-group .list-group-item").each(function(){$(this).hasClass("active")&&("Zona"==$(this).attr("tipo")?(r=$(this).attr("tipo").toLowerCase(),i+=$(this).attr("value")+"|",sComuneNome=$(this).attr("comunenome"),sComuneKeyUrl=$(this).attr("comunekeyurl"),sComuneId=$(this).attr("comuneid"),sNazione=$(this).attr("nazione"),a++):e($(this)))}),i=i.substring(0,i.length-1),a>0&&(1==a?(oZonaSelect=$("#boxSearchArea .list-group .list-group-item[value='"+i+"']"),$("#ricercaTipo").val(r),$("#ricercaInput").val(oZonaSelect.html()),$("#ricercaKeyUrl").val(oZonaSelect.attr("keyurl")),$("#ricercaValore").val(i),$("#ricercaNazione").val(oZonaSelect.attr("nazione")),$("#ricercaZona").val(""),$("#ricercaComuneId").val(sComuneId)):($("#ricercaTipo").val("comune"),$("#ricercaInput").val(sComuneNome.toUpperCase()+" ("+a+" "+$("#ricercaInput").attr("labelzone").toLowerCase()+")"),$("#ricercaKeyUrl").val(sComuneKeyUrl),$("#ricercaValore").val(sComuneId),$("#ricercaZona").val(i),$("#ricercaNazione").val(sNazione)),$("#ricercaTesto").val($("#ricercaInput").val()),$("#boxSearchAreaModifica").show())}if($(".selectpicker").selectpicker(),contratto=$(".immobiliLista").attr("contratto"),$("input#contratto").val(contratto),$("#"+contratto).addClass("active"),$('#immobiliSelectStrutturaTab a[href="#'+contratto+'"]').tab("show"),$(".tabContratto").click(function(){contratto=$(this).attr("contratto"),$(".buttonSelectStruttura").attr("contratto",contratto),$("input#contratto").val(contratto)}),$("body").on("change","#listaOrdinaSelect",function(){$.post(baseUrlLingua+"ajax/immobiliOrdina",{sImmobiliOrdina:$(this).val()}),setTimeout(function(){location.reload()},500)}),$(".imgPlanimetriaImmagine").click(function(a){$(".imgPlanimetriaImmagineModal").attr("src",$(this).attr("data-img-url"))}),$(".link_aggiungiListaDesideri").click(function(a){var e=$(this),i=$(this).attr("rel"),r=e.closest(".immobile").find(".loader");if(0!=utenteLogin&&r.stop().fadeIn(100),e.removeClass("link_aggiungiListaDesideri"),e.hasClass("aggiuntoDesidero")){var t="idImmobile="+i;$.ajax({type:"POST",url:baseUrlLingua+areaPrivataUrl+"/ajax/eliminaListaDesideri",data:{idImmobile:i},success:function(a){if(r.stop().fadeOut(100),"ok"==a){$("."+e.attr("id")).removeClass("aggiuntoDesidero").find(".listaTxt").html('<i class="fa fa-heart-o" aria-hidden="true"></i>');var i=$(".contoAnnunciSalvati .numero").text();$(".contoAnnunciSalvati .numero").text(i-1),e.addClass("link_aggiungiListaDesideri")}}})}else if($(this).hasClass("loggato")){t="idImmobile="+i;var c=$("#modalListaDesideriLogin");$.ajax({type:"POST",url:baseUrlLingua+areaPrivataUrl+"/ajax/aggiungiListaDesideri",data:t,success:function(a){if(r.stop().fadeOut(100),"esiste"==a)c.modal("hide");else{c.modal("hide"),$("."+e.attr("id")).addClass("aggiuntoDesidero").find(".listaTxt").html('<i class="fa fa-heart" aria-hidden="true"></i>');var i=$(".contoAnnunciSalvati .numero").text();$(".contoAnnunciSalvati .numero").text(parseInt(i)+1),e.addClass("link_aggiungiListaDesideri")}}})}else $("#idImmLoginDesideri").val(i)}),$("#salvaRicercaModal").on("shown.bs.modal",function(){$("#salvaRicercaForm").validate({ignore:[],errorPlacement:function(a,e){return e.attr("name")&&("email"==e.attr("name")&&a.insertAfter("#email"),"privacy"==e.attr("name")?$("#salvaRicercaForm label[for=privacyimmSalvaRicerca]").attr("style","color:red"):"privacy_imm"==e.attr("name")?$("#salvaRicercaForm label[for=labelfc_privacySalvaRicerca]").find("a").attr("style","color:red!important"):$("#salvaRicercaForm label[for=labelfc_privacySalvaRicerca]").attr("style","color:red")),!0},rules:{email:{required:!0,verifyemail:!0},privacy:{required:!0},privacy_imm:{}}}),$("#salvaRicercaForm").on("change","input",function(){var a=$(this).attr("id");"privacyimmSalvaRicerca"==a?$(this).valid()?$("#salvaRicercaForm label[for=privacyimmSalvaRicerca]").removeAttr("style"):$("#salvaRicercaForm label[for=privacyimmSalvaRicerca]").attr("style","color:red"):"labelfc_privacySalvaRicerca"==a&&($(this).valid()?$("#salvaRicercaForm label[for=labelfc_privacySalvaRicerca]").find("a").removeAttr("style"):$("#salvaRicercaForm label[for=labelfc_privacySalvaRicerca]").find("a").attr("style","color:red!important"))})}),$(".modal-body").on("click","#inviaSalvaRicerca",function(){var a=$("#salvaRicercaForm"),e=$(this);if(a.valid()){$(this).prop("disabled",!0);var i=a.serialize();$.ajax({type:"POST",async:!1,url:baseUrlLingua+areaPrivataUrl+"/ajax/salvaRicerca",data:i,dataType:"json",success:function(a){"error"==a.status?e.text(aLang.ricercaGiaSalvata).prop("disabled",!0):"devi-registrarti"==a.status?(e.prop("disabled",!0),$("#salvaRicercaModal .messaggio-successo").hide().html(a.msg).slideDown(200)):(e.prop("disabled",!0).text(a.msg),setTimeout(function(){e.text(aLang.attiva).prop("disabled",!1)},4200),0==utenteLogin&&"ok"==a.status&&$("#salvaRicercaModal .messaggio-successo").hide().text(aLang.saraCancellataIn48Ore).slideDown(200).delay(4e3).slideUp(200),"undefined"!=typeof ga&&ga("send","pageview","/obiettivi/form/alertemail/compilato/"))}})}}),$("#salvaRicercaModal").on("hidden.bs.modal",function(){"<p>Ricerca salvata con successo!</p>"==$("#salvaRicercaModal .modal-body").html()&&location.reload(),"<p>Ricerca già salvata!</p>"==$("#salvaRicercaModal .modal-body").html()&&location.reload()}),$(document).on("click","#nascondiImm",function(){var a=$(this),e=a.attr("rel"),i="idImmobile="+e,r=a.closest(".immobile").find(".loader");r.stop().fadeIn(300),$.ajax({type:"POST",url:baseUrlLingua+areaPrivataUrl+"/ajax/salvaNascondi",data:i,success:function(a){r.stop().fadeOut(300),"ok"==a&&($(".dettaglioNascondi").fadeOut(300),$(".schedaImmobile").length>0?$("#infoNascondi").show("slow"):$("#contRow"+e).fadeOut("slow"))}})}),$(document).on("change","#ricercaCategoria",function(){var a=$(this).val();$("#ricercaCategoria").val(a),"can"==a?$("#contRicerca").hide():"none"==$("#contRicerca").css("display")&&$("#contRicerca").show()}),$("#ricercaImmobili").length>0){var m="area-riservata"==$("body").attr("id");$("#ricercaImmobili").validate({ignore:[],rules:{nomeRicerca:{required:!0},ricercaInput:{required:m}}})}function d(){var a=$(".schedaAnnuncioGalleriaImmagini").width(),e=$(".schedaAnnuncioGalleriaImmagini").height();$(".galleriaPlanimetrieContent").each(function(){var i=$(this).width(),r=$(this).height(),t=r;if(i>a){var c=a-20;t=e*(o=c/i-.005);$(this).css("width",c+"px"),$(this).children().css("background-size",c+"px Auto"),$(this).find(".iconaPlanimetriaFoto").each(function(){nIconaLeft=v[$(this).attr("id")+"_left"]*o,nIconaTop=v[$(this).attr("id")+"_top"]*o,$(this).css("left",nIconaLeft+"px"),$(this).css("top",nIconaTop+"px")}),$(this).css("margin","initial")}if(t>e){var o=(t=e-20)/r-.005;$(this).css("width",t+"px"),$(this).children().css("background-size","Auto "+t+"px"),$(this).find(".iconaPlanimetriaFoto").each(function(){nIconaLeft=v[$(this).attr("id")+"_left"]*o,nIconaTop=v[$(this).attr("id")+"_top"]*o,$(this).css("left",nIconaLeft+"px"),$(this).css("top",nIconaTop+"px")}),$(this).css("margin","initial")}})}$(document).on("click","#salvaRicercaAreaRiservata",function(){if(form=$("#ricercaImmobili"),form.valid()){form.closest(".immobilifiltroRicerca").find(".loader").show();$.ajax({type:"POST",url:baseUrlLingua+areaPrivataUrl+"/ajax/salvaRicerca",data:form.serialize(),dataType:"json",success:function(a){"ok"==a.status?(form[0].reset(),location.reload()):"esiste"==a.status&&$("#msgForm").html(a.msg)}})}}),$(document).on("click",".eliminaRicerca",function(){$("#inputIDricerca").val($(this).data("id")),$("#inputCodice").val($(this).data("codice")),$("#modalDeleteRicerca").modal("show")}),$(document).on("click","#confermaCancellaRicerca",function(){var a="idRicerca="+$("#inputIDricerca").val()+"&codice="+$("#inputCodice").val();$.ajax({type:"POST",async:!1,url:baseUrlLingua+areaPrivataUrl+"/ajax/cancellaRicerca",data:a,dataType:"json",success:function(a){200==a.response.status_code?($("#modalDeleteRicerca").modal("hide"),location.reload()):$("#msgForm").html("<p>Error "+a.response.message+"!</p>")}})}),$(document).on("change",".frequenza_invio",function(){var a="idRicerca="+$(this).attr("rel")+"&frequenza_invio="+$(this).val();$.ajax({type:"POST",async:!1,url:baseUrlLingua+areaPrivataUrl+"/ajax/aggiornaFrequenzaRicerca",data:a,success:function(a){"ok"==a&&location.reload()}})}),$(".salvaRicercaRecente").click(function(){var a=$(this).off("click").attr("rel");$.ajax({url:baseUrlLingua+"ajax/getRicercaRecente",data:{idRicerca:a},dataType:"json",success:function(a){!function(a){$.ajax({url:baseUrlLingua+areaPrivataUrl+"/ajax/salvaRicerca",method:"post",data:{ricerca:a},success:function(a){location.reload()}})}(a)}})});var v=new Array;$(".galleriaPlanimetrieContent").each(function(){$(this).find(".iconaPlanimetriaFoto").each(function(){sIconaId=$(this).attr("id"),v[sIconaId+"_left"]=parseInt($(this).css("left"),10),v[sIconaId+"_top"]=parseInt($(this).css("top"),10)})}),d(),$(window).resize(function(){d()}),$("input#prossimo_invio").remove()}),jQuery(document).ready(function(a){a("form#salvaRicercaForm select.ricercaTipologia option").first().text(aLang.qualsiasi),a("form#ricercaImmobili input").on("change",function(){$this=a(this),nome=$this.attr("name"),sInput=a("form#salvaRicercaForm input[name="+nome+"]"),valore=$this.val(),"checkbox"==$this.attr("type")?$this.is(":checked")?sInput.prop("checked",!0):sInput.prop("checked",!1):sInput.val(valore)}),a("form#ricercaImmobili select").on("change",function(){var e=a(this),i=e.attr("name"),r=e.val(),t=a("form#salvaRicercaForm select[name="+i+"]"),c=t.find("option[value="+r+"]");t.find("option").removeAttr("selected"),c.attr("selected",!0),t.selectpicker("val",r)}),a("#salvaRicercaModal").on("shown.bs.modal",aggiornaRiepilogoSalvaRicerca),a("#pulsante-riepilogo").on("click",aggiornaRiepilogoSalvaRicerca);var e=a("#selectZoneContainer .selectpicker");e.on("change",function(){var i=e.val()?e.val().length:0,r=a("#salvaRicercaForm #ricercaInput"),t=a("#salvaRicercaForm input[name=ricercaStringa]"),c=a("#salvaRicercaForm input[name=ricercaTesto]"),o=1==i?aLang.zonaSelezionata:aLang.zoneSelezionate,n=r.attr("placeholder").replace(/\(.+(?=\))/,"("+i+" "+o);0==i?(n=r.attr("placeholder").replace(/\(.+(?=\))/,"("+aLang.comune).toUpperCase(),r.attr("placeholder",n),t.val(n),c.val(n)):(r.attr("placeholder",n),t.val(n),c.val(n))})});