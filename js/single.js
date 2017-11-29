jQuery(document).ready(function($) {
	
	"use strict";


// function start_bg(){
// 	var body 			= document.body,
// 		body_bg 		= body.style.backgroundColor = "#000000",
// 		div1 			= document.createElement("div"),
// 		div2			= document.createElement("div"),
// 		div3			= document.createElement("div"),
// 		div1_style 		= div1.style.cssText = "width:200px;height:200px;border-radius:50%;margin:17% auto;text-align:center;display:table;vertical-align:middle;background:rgba(255,255,255,0.3);padding:50px;",
// 		div2_style 		= div2.style.cssText = "width:100px;height:100px;border-radius:50%;margin:0% auto;text-align:center;vertical-align:middle;background:rgba(255,255,255,0.7);overflow:hidden;position:relative;padding:35px;",
// 		div3_style 		= div3.style.cssText = "width:30px;height:30px;border-radius:50%;margin:0% auto;text-align:center;display:table;vertical-align:middle;background:rgba(255,255,255,0.3);position:relative;",		
// 		span1			= document.createElement("span"),
// 		span2			= document.createElement("span"),
// 		span3			= document.createElement("span"),
// 		span3_class		= span3.classList.add("glyphicon","glyphicon-user"),			
// 		span1_style 	= span1.style.cssText = "width:3px;height:100%;background:rgba(0,0,0,0.7);position:absolute;top:0;bottom:0;left:calc(50% - 1.5px);",
// 		span2_style 	= span2.style.cssText = "width:100%;height:3px;background:rgba(0,0,0,0.7);position:absolute;left:0;right:0;top:calc(50% - 1.5px);",
// 		span3_style 	= span3.style.cssText = "font-size:90px;text-align:center;margin:0 auto;position:absolute;left:calc(50% - 45px);top:calc(50% - 35px);",
// 		span3_append 	= div2.appendChild(span3),
// 		span2_append 	= div2.appendChild(span2),
// 		span1_append 	= div2.appendChild(span1),
// 		div3_append 	= div2.appendChild(div3),
// 		div2_append 	= div1.appendChild(div2),
// 		div1_append 	= body.insertBefore(div1,body.firstElementChild);

// 			var sp = Math.floor((Math.random()*2000) + 100);
// 			setTimeout(function(){div1.style.display = "none";},200);
// 			setTimeout(function(){div1.style.display = "block";},600);
// 			setTimeout(function(){div1.style.display = "none";},1000);
// 			setTimeout(function(){div1.style.display = "block";},1400);
// 			setTimeout(function(){div1.style.display = "none";},1600);
// 			setTimeout(function(){div1.style.display = "block";},1800);
// 			setTimeout(function(){div1.style.display = "none"; body.style.backgroundColor = "";},2000);
// }
// start_bg();

// =========================================

// // console.log( window.location.pathname.split('/'),window.location.pathname.split('/').pop() );
// if ( window.location.pathname.split('/').pop() == 'single.html' ) {

// 	$(window).on('scroll', function() {
// 		$("#logo-obj").animate({width:'70%'}, 300);

// 		if ( $(window).scrollTop() == 0 ) {
// 			$("#logo-obj").animate({width:'100%'}, 300);
// 		};
// 	});

// };

// ==========================================
//		single_page-start-anime-classes
// ==========================================

function single_page_start_anime(){

	var e_con 				= document.querySelector(".entry-content"),
		e_con_con 			= e_con.querySelector(".content"),
		aside_con 			= document.querySelector(".aside-content"),
		single_side_nav 	= document.querySelector(".single-side-nav"),
		single_side_gear 	= document.querySelector(".side-gear");

	setTimeout(function(){
		e_con_con.classList.add("content-anime");
			aside_con.classList.add("aside-content-anime");
				single_side_nav.classList.add("single-side-navi-anime");
					single_side_gear.classList.add("side-gear-anime");
	},2000);

}
single_page_start_anime();


// =====================================
// 		single-tooltipster-init
// =====================================
/*window.onload = */function header_tool_tipster(){

	$('.right-tipster').tooltipster({
				animation 				: 'fade', // 'fade','grow','swing','slide','fall'
			    delay 					: 3,
			    theme 					: 'tooltipster-noir',
			    trigger 				: 'hover',
			    interactive 			: true, // Give users the possibility to interact with the content of the tooltip.
			    maxWidth 				: '300', // Set a maximum width for the tooltip. Default: null (no max width).
			    side 					: 'right', // Sets the side of the tooltip. The value may one of the following: 'top', 'bottom', 'left', 'right'. It may also be an array containing one or more of these values.
			    // distance 			: ,  // The distance between the origin and the tooltip, in pixels. The value may be an integer or an array of integers.Default: 6
			    contentAsHTML 			: true , // If the content should actually be interpreted as HTML, set this option to true. Default: false
			    // repositionOnScroll 	: , // Repositions the tooltip if it goes out of the viewport when the user scrolls the page, in order to keep it visible as long as possible. Default: false
			});


	$('.left-tipster').tooltipster({
				animation 				: 'fade', // 'fade','grow','swing','slide','fall'
			    delay 					: 3,
			    theme 					: 'tooltipster-noir',
			    trigger 				: 'hover',
			    interactive 			: true, // Give users the possibility to interact with the content of the tooltip.
			    maxWidth 				: '300', // Set a maximum width for the tooltip. Default: null (no max width).
			    side 					: 'left', // Sets the side of the tooltip. The value may one of the following: 'top', 'bottom', 'left', 'right'. It may also be an array containing one or more of these values.
			    // distance 			: ,  // The distance between the origin and the tooltip, in pixels. The value may be an integer or an array of integers.Default: 6
			    contentAsHTML 			: true , // If the content should actually be interpreted as HTML, set this option to true. Default: false
			    // repositionOnScroll 	: , // Repositions the tooltip if it goes out of the viewport when the user scrolls the page, in order to keep it visible as long as possible. Default: false
			});


		//===================================
		// comment parent media-left after class/ replies link toggleClass

		function replies_link(){
			
			var comm = $(".comments").find('.parent'),
				i;

			for ( i = 0; i < comm.length; i++) {
				var el 					= comm[i],
					lmedia_a 			= $(el).find(' > .media-left > a'),
					nested_container 	= $(el).find(".nested-container"),
					nested_media 		= $(el).find('.media.nested'),
					replies_a 			= $(el).find('.reply a.replies'),
					reply_a 			= $(el).find('.reply a.reply-link');

					$(reply_a).attr('title', 'reply');
						
				if (!nested_media.length) { $(replies_a).css('display', 'none'); return false }; //if u don't find this ele return;

					$(replies_a).attr('title', $(replies_a).text()+' replies on this comment'); //creat an init title
						var ttl = $(replies_a).attr('title'); // cache this title
							$(replies_a).attr('data-tooltip-content',"<p id=\'com-replies\' style=\'margin-bottom:0;font-weight:bold;\'>"+ttl+"</p>"); // creat a data-content from this title to include an html content with a unique id to target this element with

						// $('[class*="single-tipster"]').tooltipster({theme: 'tooltipster-borderless'});


				$(replies_a).on("click touchstart", function(event) {
					event.preventDefault();
						$(lmedia_a).toggleClass('parent-com-after');
							$(this).text() == 'show' ? 
								$(this).children('span.label-info').text('hide') + $(nested_container).show("highlight", 500) + $("#com-replies").text($(this).text()+' replies on this comment') : 
								$(this).children('span.label-info').text('show') + $(nested_container).hide("highlight", 500) + $("#com-replies").text($(this).text()+' replies on this comment');

							var i 		= 0,
								speed 	= Math.floor((Math.random() * 700) + 100 ); // random number between 100 - 700

							var init = setInterval(function(){
								if ( i < nested_media.length ) {
									var ele 	= nested_media[i],
										lmedia 	= $(ele).find(" > .media-left > a");

									$(ele).toggleClass('show');
										$(lmedia).toggleClass("after before hovered");
											setTimeout(function(){$(lmedia).toggleClass("after before hovered");},1000);

								i++
								}else{
									clearInterval(init);
								}
							},setInterval(function(){speed},speed));
				});

			};

		}
		replies_link();



	// =================================
	// tipster_dynamic_inject_class
	//==================================

	function single_tipster_dynamic_inject(class_els){

		var classes  = document.querySelectorAll(class_els),
		// var admin_c = document.querySelectorAll('.admin');
			i;
				// class_els.search('admin') ? document.setAttribute("title","admin") : '';
				// console.log(class_els.includes("admin"));
			for (i = 0; i < classes.length; i++) {
				var all = classes[i];
				// var admin_c = classes.split(",");
				if (all) {
					all.classList.add("single-tipster"+i);
					// var cr = document.createAttribute("title");
					// var attr = cr.value = "admin";
						// all.classList.contains('admin') ? admin_c.setAttribute(attr) : '';
					
						
						$('.single-tipster'+i).tooltipster({
							animation 				: 'fade', // 'fade','grow','swing','slide','fall'
						    delay 					: 1,
						    theme 					: 'tooltipster-borderless',
						    trigger 				: 'hover',
						    interactive 			: true, // Give users the possibility to interact with the content of the tooltip.
						    maxWidth 				: '300', // Set a maximum width for the tooltip. Default: null (no max width).
						    // side 				: 'left', // Sets the side of the tooltip. The value may one of the following: 'top', 'bottom', 'left', 'right'. It may also be an array containing one or more of these values.
						    // distance 			: ,  // The distance between the origin and the tooltip, in pixels. The value may be an integer or an array of integers.Default: 6
						    contentAsHTML 			: true , // If the content should actually be interpreted as HTML, set this option to true. Default: false
						    // repositionOnScroll 	: , // Repositions the tooltip if it goes out of the viewport when the user scrolls the page, in order to keep it visible as long as possible. Default: false
						});
				};
				
			};
	}
	single_tipster_dynamic_inject('.share-tab, .share-link, .description-tab, .about-tab, .like, .dislike, .reply-like, .reply-dislike, .reply-link, .replies, .random, .comment-flag, .admin');



} //\\ window.onload //\\
header_tool_tipster();


// =====================================
			// content js //
//======================================

// function content_img_cover() {

// 	var po_content  = document.querySelector('.post-content'),
// 		video 		= po_content.querySelector('.video');

// 		if (video) return false;

// 		var scr_id 		= document.getElementById('ascrail2002');



// 		var ns = $('[id^="ascrail"]').css('opacity', '0');
// 		setTimeout(function(){
// 			$('[id^="ascrail"]').not(scr_id).css('opacity', '1');
// 		}, 2000);

// 		// hide on page ready
// 		// function on_load(){
// 			// scr_id.style.opacity = 0;
// 			// scr_id.style.filter = "alpha(opacity=0)";
// 		// }
// 		// if(document.readyState == "complete") {
// 		// 	scr_id.style.opacity = 0;
// 		// 	scr_id.style.filter = "alpha(opacity=0)";
// 		// }
// 		// document.addEventListener("mouseover",on_load);

// 		// function scrId_style_on() { 
// 		// 	scr_id.style.opacity = 1;
// 		// 	scr_id.style.filter = "alpha(opacity=1)";
// 		// }
// 		// function scrId_style_off() { 
// 		// 	scr_id.style.opacity = 0;
// 		// 	scr_id.style.filter = "alpha(opacity=0)"; 
// 		// }
// 		// po_content.addEventListener("mouseover", scrId_style_on);
// 		// po_content.removeEventListener("mouseout", scrId_style_on);
// 		// po_content.addEventListener("mouseout", scrId_style_off);
// 		// po_content.removeEventListener("mouseover", scrId_style_off);

// }
// content_img_cover();


// -------------------------------------------

function author_img_svg(){

	var po_auth = document.querySelector('.post-author'),
		svg 	= po_auth.querySelector('svg#crcls'),
		g 		= po_auth.getElementsByTagName('g')[0],
		rect 	= svg.getElementsByTagName('rect'),
		i 		= 0;

	function loop(){
		while(i < rect.length){
			rect[i].classList.add("forwards"+[i+1]);
			i++
		}
	}

	g.addEventListener("mouseover",loop);
	g.removeEventListener("mouseleave",loop);

}author_img_svg();


// =================================
// post list ttl
//==================================

function po_li_ttl(){
	var pls = document.querySelector('.post-list'),
		li 	= $(pls).find('ul.ls-ul > li'),
		i;

		for (i = 0; i < li.length; i++) {
			var el 				= li[i],
				mediaheading 	= $(el).find('.media-body > .media-heading > a'),
				mediapic 		= $(el).find('.media-pic > a'),
				txt 			= $(mediaheading).find('h5').text(),
				ttl 			= $(mediaheading).find('h5'),
				mObj 			= $(".media").find('.media-object').width(),
				elW 			= Math.floor($(el).width()/3.8);

			$(mediaheading).attr('title',txt);
				$(mediapic).attr('title',txt);
			
			// txt ellipses custom
			(txt.length >= elW) ? $(ttl).removeClass('normal').addClass('multi') : $(ttl).removeClass('multi').addClass('normal');
			// console.log('txtlen '+txt.length,' > liwidth '+elW);
		};

// ----------------------

	


}
po_li_ttl();
//----------v
//			v
// re-execute on resize
$(window).on('resize',function(){
	po_li_ttl();
});

// ====================================

function po_sort(){
	var p_s 		= document.querySelector('.post-sort'),
		input 		= $(p_s).find('.sort-check input'),
		chek_crcl 	= $(p_s).find('.sort-check .check-crcl'),
		active 		= true;

	$(chek_crcl).on("click touchstart", function(event) {
		event.preventDefault();

		$(chek_crcl).toggleClass('toggle');
		
		if ( active == true ) {
				$(input).attr('checked',true);
					$(chek_crcl).css('background','#262626');
						active = false;
						// console.log(input);
		}else{
				$(input).attr('checked',false);
					$(chek_crcl).css('background','#808080');
						active = true;
						// console.log(chek_crcl);
		}
	});

}
po_sort();

// ==================================
// single embed link

function embed_link(){

	var div 	= document.querySelector('.tabs'),
		link 	= div.querySelector('input[name=embed]'),
		format  = document.querySelector('.video-format');

		if (format == true) {
			// $(link).val(window.location.href/*+'/category/posts/post_id'*/);
			link.value 	= '<iframe width="560" height="315" src="'+window.location.href+'" frameborder="0" allowfullscreen></iframe>';
		}else{
			link.value = window.location.href;
		};

};
embed_link();

// ==================================
// textarea wrapper before

function txtarea_before(event){
	var body 	= document.getElementsByTagName('body'),
		wr_div 	= document.querySelector('.textarea-wrapper'),
		txtarea = wr_div.getElementsByTagName('textarea');
	
	// $(txtarea).on('focus', function(event) {
	// 	$(wr_div).addClass('active');
	// });
	// $(txtarea).on('focusout', function(event) {
	// 	$(wr_div).removeClass('active');
	// });

	function focus_out(){
		$(body).on("click.bodyclck touchstart.ts",function(event) {
			if ($(wr_div).hasClass('active') && $(txtarea).has(event.target).length == 0 && $(txtarea).is(event.target) == false) {
					$(wr_div).removeClass('active');
						$(body).off('click.bodyclck touchstart.ts');
			}
		});
	}

	$(txtarea).on('focus', function() {
		$(wr_div).addClass('active',function(){
				focus_out();
		});
	});

}
txtarea_before();



// =====================================


}); //ready fn close

