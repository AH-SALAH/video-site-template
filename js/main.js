$.noConflict();
jQuery(document).ready(function($) {
	
	"use strict";


	var check_single = document.querySelector(".single-side-nav"); // to check with it the special single page content js - (if exist don't excute the main page special content js "return false;" )

//==========================
	// quick start bg //
//==========================
function start_bg(){

	if (check_single) return false;

	var body 			= document.body,
		body_bg 		= body.style.backgroundColor = "#000000",
		div1 			= document.createElement("div"),
		div2			= document.createElement("div"),
		div3			= document.createElement("div"),
		div1_style 		= div1.style.cssText = "width:200px;height:200px;border-radius:50%;margin:17% auto;text-align:center;display:table;vertical-align:middle;background:rgba(255,255,255,0.3);padding:50px;",
		div2_style 		= div2.style.cssText = "width:100px;height:100px;border-radius:50%;margin:0% auto;text-align:center;vertical-align:middle;background:rgba(255,255,255,0.7);overflow:hidden;position:relative;padding:35px;",
		div3_style 		= div3.style.cssText = "width:30px;height:30px;border-radius:50%;margin:0% auto;text-align:center;display:table;vertical-align:middle;background:rgba(255,255,255,0.3);position:relative;",		
		span1			= document.createElement("span"),
		span2			= document.createElement("span"),
		span3			= document.createElement("span"),
		span3_class		= span3.classList.add("glyphicon","glyphicon-user"),			
		span1_style 	= span1.style.cssText = "width:3px;height:100%;background:rgba(0,0,0,0.7);position:absolute;top:0;bottom:0;left:calc(50% - 1.5px);",
		span2_style 	= span2.style.cssText = "width:100%;height:3px;background:rgba(0,0,0,0.7);position:absolute;left:0;right:0;top:calc(50% - 1.5px);",
		span3_style 	= span3.style.cssText = "font-size:90px;text-align:center;margin:0 auto;position:absolute;left:calc(50% - 45px);top:calc(50% - 35px);",
		span3_append 	= div2.appendChild(span3),
		span2_append 	= div2.appendChild(span2),
		span1_append 	= div2.appendChild(span1),
		div3_append 	= div2.appendChild(div3),
		div2_append 	= div1.appendChild(div2),
		div1_append 	= body.insertBefore(div1,body.firstElementChild);

			var sp = Math.floor((Math.random()*2000) + 100);
			setTimeout(function(){div1.style.display = "none";},200);
			setTimeout(function(){div1.style.display = "block";},600);
			setTimeout(function(){div1.style.display = "none";},1000);
			setTimeout(function(){div1.style.display = "block";},1400);
			setTimeout(function(){div1.style.display = "none";},1600);
			setTimeout(function(){div1.style.display = "block";},1800);
			setTimeout(function(){div1.style.display = "none"; body.style.backgroundColor = "";},2000);
}
// start_bg();


// ==========================================
//		main_page-start-anime-classes
// ==========================================

function main_page_start_anime(){

	var side_nav 	= document.querySelector(".side-nav"),
		side_gear 	= document.querySelector(".side-gear");
// console.log(side_nav);
		side_nav ? side_nav.classList.add("side-navi-anime") : '';
			side_gear.classList.add("side-gear-anime");

}
/*setTimeout(function(){*/main_page_start_anime();/*},2000);*/


// *************************
		// masonry //
// *************************

	var $grid = $('.grid')/*.masonry({
			itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
			columnWidth: '.grid-sizer',
			percentPosition: true,
			// isFitWidth: true,
			isAnimated: reveal_items(),
			// 	animationOptions: {
			//   		duration: 1000,
			//   		easing: 'linear',
			//   		queue: false
			// },
			transitionDuration: 0, // '0.7s'
			// stagger: 30,
			// fromBottom: true,
		})*/;


		// layout Masonry after each image loads
		$grid.imagesLoaded().progress(function() {
			var $grid = $('.grid').masonry({
				itemSelector: '.grid-item',
				columnWidth: '.grid-sizer',
				percentPosition: true,
				// isFitWidth: true,
				isAnimated: reveal_items(),
					/*animationOptions: {
				  		duration: 1000,
				  		easing: 'linear',
				  		queue: false
				},*/
				transitionDuration: 0/*'0.7s'*/,
				// stagger: 30,
				// fromBottom: true,
			})
		  // layout
		  .masonry('reloadItems')
		  .masonry('layout');
			// reveal_items();
		});
	// var isActive = true;

	function reveal_items() {

		var masonry = $(".masonry-container").find('.masonry-grid'),
			c 		= 0;

		if ( c >= masonry.length ) return false;
		setInterval(function(){
			var ele 		= masonry[c],
				cont 		= $(ele).find(".grid"),
				items 		= $(cont).find('.grid-item:not(.reveal)'),
				items_l 	= $(items).length,
				i 			= items_l;

			if ( i <= 0 ) return false;

			setInterval(function(){
				var el = items[i];
					$(el).addClass('reveal');
					// console.log($(this));
					i--
		  	},320);
		c++
		},c+1*320);

	}
	// reveal_items();

	// init Masonry
	$(window).on('resize',function() { // handle the margin-bottom issue
		// $(".grid-item").fadeIn();
		var $grid = $('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true,
			// isAnimated: true,
			// transitionDuration: '0.8s',
			// stagger : 30,
		})
		  // layout
		  .masonry('bindResize')
		  .masonry('reloadItems')
		  .masonry('layout');
		  // .masonry('reload');
		  // layout Masonry after each image loads
			/*$grid.imagesLoaded().progress( function() {
				$grid.masonry()
			  // layout
			  .masonry('reloadItems')
			  .masonry('layout');
			});*/
	});

			// =========================================== //
						// page scroll events //


// out of the scroll events
// ===========================================
//  side-nav gear js

function gear_fn() {

	var gear 		= $('.side-gear'),
		gear_btn 	= gear.find('.to-top');

	// -------------
	// page ready event
	$(gear_btn).one('click touchstart', function(event) {
		event.preventDefault();
		$(this).addClass('puff');
		$(gear_btn).stop().animate({top:getDocHeight()-(gear_btn.outerHeight()+5) },1200,function () {
			$("html,body").animate({scrollTop:getDocHeight()},1200);
			$(this).removeClass('puff');
		});
	});

	$(gear_btn).css('transform', 'rotate(180deg)'); // on page ready rotate to the right dir>


	$(window).on('scroll',function() {

				// *************************
					// Vertical-bar js //
				// *************************

			var side_nav 			= $(".side-nav"),
				single_side_nav 	= $(".single-side-nav"),
				bar 				= $(".v-bar"),
				logo 				= document.getElementById("logo-obj"),
				scroll_top 			= $(window).scrollTop(),
				window_outerheight 	= $(window).outerHeight();
			// var clientHeight = document.body.clientHeight;
			// var footer = $("footer.entry-meta");
			// var footer_bottom = footer.offset().top + footer.height();
	        // bar.height( Math.round( scroll_top *1.1));

	        if( scroll_top <= 10 ) {
	            $(bar).hide("highlight",{color:"#9f0342"},"easeInOutElastic",100);
	        } else {
	            $(bar).show("highlight",{color:"#9f0342"},"easeInOutElastic",50);
	        }

			if( scroll_top ==  getDocHeight() - window_outerheight ) {
			        $(bar).stop().animate({height:getDocHeight()},300);
			           // console.log(footer_bottom);
			}else{
					// bar.height( Math.round( scroll_top *1.2));
					$(bar).stop().animate({height: scroll_top + (window_outerheight/2)},500);
					// console.log("return");
			}

			// *******************************************************//
							// *************************
								// side-nav gear scroll js //
							// *************************

	    	
	    	if ( scroll_top == (getDocHeight() - window_outerheight ) ) { 
	    		$(gear_btn).stop().animate({top:getDocHeight()-(gear_btn.outerHeight()+5) },1000);

	    	}else if (scroll_top < 30 ) {
				$(gear_btn).stop().animate({top:'30px'},1000);
				if ( $(single_side_nav).length ) {
					$(single_side_nav).css({position:'absolute'});
					$(logo).stop().animate({width:'100%'},200);
				}else{
					$(side_nav).css({position:'absolute'});
					$(logo).stop().animate({width:'70%'},200);
				}
			}else{
				if ( $(single_side_nav).length ) {
					$(single_side_nav).css({position:'fixed'});
					$(logo).stop().animate({width:'85%'},200);
				}else{
					$(side_nav).css({position:'fixed'});
					$(logo).stop().animate({width:$(side_nav).width()/2},200);
				}
	    		$(gear_btn).css({boxShadow:'0 25px 5px -2px #ff4500'}).stop().animate({top:scroll_top + ($(window).height()/2) }, 700);
	    		setTimeout(function(){$(gear_btn).css({boxShadow:'0px -1px 2px 1px'});},500);
	    	};

	// ----------------------

			if ( scroll_top > ( (getDocHeight()/2) - (window_outerheight/2) ) || scroll_top == getDocHeight() ) {

				$(gear_btn).addClass('bottom-side');

				if ( $(gear_btn).hasClass('bottom-side') ) {
					$(gear_btn).on('click touchstart', function(event) {
						event.preventDefault();
						$(gear_btn).css({boxShadow:'0 25px 5px -2px #ff4500'});
						setTimeout(function(){$(gear_btn).css({boxShadow:'0px -1px 2px 1px'});},1000);
						$(gear_btn).stop().animate({top:'30px'},1200,function () {
							$("html,body").animate({scrollTop:'0'},1200);
							return false;
						});
					});
				};

				$(gear_btn).css('transform', 'rotate(0deg)');
			};

			if ( scroll_top < ( (getDocHeight()/2) - (window_outerheight/2) ) || scroll_top == 0 ) {

				$(gear_btn).removeClass('bottom-side');

				$(gear_btn).on('click touchstart', function(event) {
					event.preventDefault();
					$(gear_btn).css({boxShadow:'0 25px 5px -2px #ff4500'});
					setTimeout(function(){$(gear_btn).css({boxShadow:'0px -1px 2px 1px'});},1000);
					$(gear_btn).stop().animate({top:getDocHeight()-(gear_btn.outerHeight()+5) },1200,function () {
						$("html,body").animate({scrollTop:getDocHeight()},1200);
						return false;
					});
				});
				$(gear_btn).css('transform', 'rotate(180deg)');
			};

			// *******************************************************//

	var mozscrolltop 		= $(document).scrollTop();	
	var window_innerheight 	= $(window).innerHeight();

	var mousewheelevt=(navigator.userAgent.indexOf("firefox") != -1 ) ? mozscrolltop : scroll_top ; //FF doesn't recognize mousewheel as of FF3.x
	var isWebkit = ('Webkitouchstartapearance' in document.documentElement.style);

	function footer_anime(){
		
	      	var entry_meta 	= $("footer.entry-meta"),
				footer 		= $(".footer"),
				fo_row 		= $(".footer > .row"),
				blog_ul 	= $(entry_meta).find('.blog ul.top-blogs'),
				blog_li 	= $(entry_meta).find('.blog ul.top-blogs > li'),
				li_length 	= $(blog_li).length;
			// console.log(blog_ul);


			// footer border-top anime

			if ( isVisible( $(entry_meta) ) ) {

					entry_meta.addClass('entry-meta-after');
						footer.delay(500).addClass('footerbefore footerafter');
							fo_row.delay(500).addClass('footer-row-before');
								footer.delay(500).addClass('footer-border-class');

			}else{
					entry_meta.removeClass('entry-meta-after');
						footer.delay(500).removeClass('footerbefore footerafter');
							fo_row.delay(500).removeClass('footer-row-before');
								footer.delay(500).removeClass('footer-border-class');
			}

			// blog-li anime

			if ( isVisible( $(blog_ul) ) ) {
				var i = 0;
					if ( i >= li_length ) return false;
					setInterval(function(){
						var el = blog_li[i];
							$(el).addClass('blog-li-anime');
							i++
					},420);

			}else{
				/*var i = li_length;
					if ( i <= 0 ) return false;
					setInterval(function(){
						var el = blog_li[i];*/
							$(blog_li).removeClass('blog-li-anime');
							/*i--
					},320);*/

			}


		}footer_anime();



	}); // scroll events fn end.

}gear_fn();
// ===========================================

// *************************
		// header js //
// *************************


function header_anime(){

	var msn 	= $(".masonry-grid"),
		rows 	= $(".top-bars-wrapper .row"),
		i 		= 0;

	if (i < rows.length) {
		if (i >= rows.length) return false;
		setInterval(function(){
			var el = rows[i];
			$(el).addClass('shelfed');
			i++
		},500);

			$(msn).addClass('return-view');
	};

}/*setTimeout(function(){*/header_anime();/*},2000);*/

// -----------------------------

// search js 
function form_fn(){

	function form_group_click(){
		$("form.navbar-form .form-group").addClass('pseudo-reveal');
		setTimeout(function(){
			$("form.navbar-form .form-group").addClass('pseudo-reveal-bg').focus();
				$("form.navbar-form .form-group .search-input").focus();
		},2000);
	}

	function form_group_focusout(){
		$("form.navbar-form .form-group").delay(1000).removeClass('pseudo-reveal');
			$("form.navbar-form .form-group").delay(1000).removeClass('pseudo-reveal-bg');
				$("form.navbar-form .search-icon").css({background:""});
					$("form.navbar-form .search-icon i").css({color:""});
	}


	$("form.navbar-form .form-group").on('click touchstart',function(){
		form_group_click();
	});

	$("form.navbar-form").on('focusout',function(){
		form_group_focusout();
	});

	// **************

	$("form.navbar-form .form-group .search-input").on('keyup keypress',function(){
		var val = $("form.navbar-form .form-group .search-input").val();

		$("form.navbar-form .form-group .search-input").attr('value',val);
			$(".search-icon i").css({color:"#3cb371"});

	});


	// ************

	$("form.navbar-form").on('submit',function(){
		// console.log("submitted");
		var val 		= $("form.navbar-form .form-group .search-input").val(),
			plholder 	= $(function(){$(".form-group .search-input").css({color:"#b22222"});});

		if (val == false || val == '' || val == null) {
			console.log("no search val");
			$("form.navbar-form .search-icon").css({background:"#b22222"});
			plholder;
			$("form.navbar-form .form-group .search-input").attr('placeholder', 'Please,put a search query..!')/*.css({fontFamily:"serif,'Lato', sans-serif"})*/;
			return false;
		}else{		
			$("form.navbar-form .search-icon i").css({color:"#000000"});
			$("form.navbar-form .search-icon").css({background:"#3cb371"});
			form_group_click();
			return true;
		}

	});

}form_fn();

// *******************************************

// left menu toggle

function left_menu_toggle_fn(){

	function left_menu_toggle_left(){
		var fullW = $(".main-body,.single-body").addClass('fullW'),
			snavW = $(".side-nav,.single-side-nav").outerWidth();


		$(".side-nav,.single-side-nav").stop().css({left:-snavW});
			$(".side-nav,.single-side-nav").stop().css({opacity:"0"});
				$(".main-body,.single-body").stop().css({width:fullW});
					$(".menu-trigger a span").addClass('menu-rotate');
					$(".menu-trigger a span").removeClass('glyphicon-circle-arrow-left').addClass('glyphicon-menu-hamburger');

	}

	function left_menu_toggle_back(){
		var fullWR = $(".main-body,.single-body").removeClass('fullW');
		
		$(".main-body,.single-body").stop().css({width:fullWR});
			$(".side-nav,.single-side-nav").stop().css({left:"0"});
				$(".side-nav,.single-side-nav").stop().css({opacity:"1"});
					$(".menu-trigger a span").removeClass('menu-rotate');
					$(".menu-trigger a span").removeClass('glyphicon-menu-hamburger').addClass('glyphicon-circle-arrow-left');

	}


	$(".menu-trigger a").on('click touchstart',function(e) {
		e.preventDefault();
		var snav 	= $(".side-nav"),
			ssnav 	= $(".single-side-nav");

		if ( snav.hasClass('toggled') || ssnav.hasClass('toggled') ) {
			left_menu_toggle_back();
				snav.removeClass('toggled');
				ssnav.removeClass('toggled');
				var $grid = $('.grid').masonry({itemSelector: '.grid-item',columnWidth: '.grid-sizer',percentPosition: true})
					  // layout
					  .masonry('reloadItems')
					  .masonry('layout');

		}else{
			left_menu_toggle_left();
					snav.addClass('toggled');
					ssnav.addClass('toggled');
					var $grid = $('.grid').masonry({itemSelector: '.grid-item',columnWidth: '.grid-sizer',percentPosition: true})
					  // layout
					  .masonry('reloadItems')
					  .masonry('layout');

		}

	});

}left_menu_toggle_fn();

// var main_w = $(".main-body").outerWidth();
// var perc = main_w / $(".main-body").parent().outerWidth()*100;


// ===========================================
// nav li svg meter & walker

function nav_svg_meter_and_walker(){

	var top_nav_ul 	= $("ul.nav-ul"),
		li 			= top_nav_ul.find('> li'),
		meter_cont 	= $(".meter-svg").clone().css({display:'block',width:li.width()}),
		i;

	for (i = 0; i < top_nav_ul.length; i++) {
		var ele = top_nav_ul[i],
			li = top_nav_ul.find('> li'),
			li_active = top_nav_ul.find('> li.active');

			$(li).append(meter_cont);
				$(li_active).find('svg#half-circle circle').addClass('meter-svg-anime');
			
				$(li).find('> a').on('click touchstart',function(){
					// event.preventDefault();
					$(this).parent().addClass('active').siblings().removeClass('active');
					$(this).parent().parent().find('svg#half-circle circle').removeClass('meter-svg-anime');
					$(this).parent().find('svg#half-circle circle').addClass('meter-svg-anime');
					
				});

	};

}nav_svg_meter_and_walker();	

// ==============================================
// filter menu walker js

var filter_ul = $(".filter-ul");

function filter_nav_walker(){	

		if (check_single) return false;

	$(filter_ul).find('> li').each(function(index, el){
		$(el).find('> a').on("click touchstart",function(){
			$(el).addClass('active').siblings().removeClass('active');
		});
	});

}filter_nav_walker();

// ==============================================
// left menu walker js

function left_nav_walker(){

	var nav_pills = $(".nav-pills");

	for (var i = 0; i < nav_pills.length; i++) {
		var el = nav_pills[i];

		$(el).find('> li a').on('click touchstart', function() {
			$(this).parent().addClass('active').siblings().removeClass('active');
		});
	};

}left_nav_walker();

// *************************
		// content js //
// *************************


// --------------------------------------

// title js
// *******************

function grid_dynamic_content_fn(){

	if (check_single) return false;

	var grid_cont = $(".grid-item-content"),
		i;
	for (i = 0; i <= grid_cont.length; i++) {
	
		var el 				= grid_cont[i],
			ttl 			= $(el).find('.title-div h4'),
			img_ttl 		= $(el).find(".vid-img-play .img"),
			play_icon 		= $(el).find('.vid-img-play .glyphicon-play-circle'),
			img_data 		= $(img_ttl).attr('data-img'),
			img_append 		= $(img_ttl).empty().append('<img class="img-bg" src="'+img_data+'" >'), // append the img before coloning
			vid_info 		= $(el).find('.vid-info span'),
			feat_img 		= $(el).find(".featured-img .vid-img-play").clone(),
			excerpt 		= $(el).find('.excerpt').prepend(feat_img),
			meta 			= $(el).find('.meta').append(excerpt),
			meta_id 		= $(meta).attr({'id':'meta'+i}),
			meta_id_index 	= $(meta).attr('id'),
		// 	meta_id_indexed = $(meta).attr('id',meta_id_index),
			stat_a 			= $(el).find(".stat .left a,.stat .right a"),
		// 	share_a 		= $(".share-icons:first").find('ul.share-buttons > li').each(function(index, el) {$(el).find(' > a').addClass('share-tipster'+index+' tooltipstered').attr('title', this.getElementsByTagName('span')[0].textContent);}),
			share_clone 	= $(".share-icons:first").clone(),
			stat 			= $(el).find(".stat").not( $(".stat:first") ).append( $(share_clone) ),
			share 			= $(el).find(".share-icons").html();
		// 	share_a 		= $(share).find('ul.share-buttons > li').each(function(index, el) {$(el).find(' > a').addClass('share-tipster'+index).attr('title', this.getElementsByTagName('span')[0].textContent);});
		

		$(ttl).attr({'title':$(ttl).text()});
			$(img_ttl).attr({'title':$(ttl).text()/*,'alt':$(ttl).text()*/});
			$(play_icon).attr({'title':$(ttl).text()});
				$(vid_info).addClass('tipster'+i).attr({'data-tooltip-content':'#'+meta_id_index });
					$(stat_a).addClass('stat-tipster'+i).attr({'title':Math.floor(Math.random()*220)});
						if ( $(stat_a).find('i').hasClass('fa-share-alt') ) { 
							$(stat_a).find(".fa-share-alt").parent().addClass('share-tipster'+i).attr({'title':'share'});
						}
						if ( $(stat_a).find('span').hasClass('fa-calendar') ) { 
							var date = new Date(),
								now = date.toDateString() +' | '+ date.toLocaleTimeString();
							$(stat_a).find(".fa-calendar").parent().attr({'title':now});
						}
		
		// console.log($(feat_img));
	


		// *************************
		/* tooltipster */

		// function tipsters_fn () {

		$('.tipster'+i).tooltipster({
			animation: 'swing', // 'fade','grow','swing','slide','fall'
		    delay: 0,
		    theme: 'tooltipster-borderless',
		    trigger: 'click',
		    interactive: true, // Give users the possibility to interact with the content of the tooltip.
		    maxWidth: '300', // Set a maximum width for the tooltip. Default: null (no max width).
		    // side: 'right', // Sets the side of the tooltip. The value may one of the following: 'top', 'bottom', 'left', 'right'. It may also be an array containing one or more of these values.
		    // distance: ,  // The distance between the origin and the tooltip, in pixels. The value may be an integer or an array of integers.Default: 6
		    contentAsHTML: true , // If the content should actually be interpreted as HTML, set this option to true. Default: false
		    // contentCloning: true, // If you provide a jQuery object to the 'content' option, this sets if it is a clone of this object that should actually be used. Default: false
		    // repositionOnScroll: , // Repositions the tooltip if it goes out of the viewport when the user scrolls the page, in order to keep it visible as long as possible. Default: false
		
		    functionReady: function(instance){ 
		        $('.tip-close').on('click touchstart',function(){
		            instance.close();
		        });
		    },
		});

		// function close_tip(){ 
		//         $('.tip-close').on('click touchstart',function(){
		//             $('.tooltipster-base').tooltipster('hide');
		//         });
		//  }close_tip();

		$('.stat-tipster'+i).tooltipster({
			animation: 'fade', // 'fade','grow','swing','slide','fall'
		    delay: 3,
		    theme: 'tooltipster-noir',
		    trigger: 'hover',
		    interactive: true, // Give users the possibility to interact with the content of the tooltip.
		    maxWidth: '300', // Set a maximum width for the tooltip. Default: null (no max width).
		    // side: 'right', // Sets the side of the tooltip. The value may one of the following: 'top', 'bottom', 'left', 'right'. It may also be an array containing one or more of these values.
		    // distance: ,  // The distance between the origin and the tooltip, in pixels. The value may be an integer or an array of integers.Default: 6
		    contentAsHTML: true , // If the content should actually be interpreted as HTML, set this option to true. Default: false
		    // repositionOnScroll: , // Repositions the tooltip if it goes out of the viewport when the user scrolls the page, in order to keep it visible as long as possible. Default: false
		});


			// initialize a second tooltip for the same content
			$('.share-tipster'+i).tooltipster({
				// don't forget to provide content here as the first tooltip will have deleted the original title attribute of the element
				content: share,
				animation: 'slide',
				theme: 'tooltipster-borderless',
				multiple: true,
				side: 'bottom',
				trigger: 'click',
				contentAsHTML: true,
				interactive: true,
				// contentCloning: true,

				// functionReady: function(instance, helper){ 
				// 	// var share_a = $(instance).find('ul.share-buttons > li').each(function(index, el) {$(el).find(' > a').addClass('share-tipster'+index+'-').attr('title', this.getElementsByTagName('span')[0].textContent);});
  
			 //        // the nested tooltip must be initialized once the first tooltip is open, that's why we do this inside functionReady()
			 //        instance.content().tooltipster({
			 //            content: $(instance).attr("title"),
			 //            distance: 0
			 //        });
			 //    },
			    
			});

		// }tipsters_fn();

};

}grid_dynamic_content_fn();

	// *************************
	// mouse move detecting
	// bg mouse move

function mouse_move_fn(){

	function m_v(){

			if (check_single) return false; // if not in the correct page stop jq from seeking for non exist classes/content

		var container = $(".grid").find('.grid-item-content'),
			i;
		for (i = 0; i < container.length; i++) {
			var el 	= container[i],
				img = $(el).find('.featured-img .img'),
				bg 	= $(img).attr('data-img');

				$(img).css({'background-image': 'url('+ bg +')' });

			if ( $(window).width() > 400 || ( $(window).on('resize') && $(window).width() > 400) ) {

				$(el).on('mouseover', function(event){
					var img 	= $(this).find('.featured-img .img'),
						stat 	= $(this).find('.stat');
					// console.log(webkit);
					$(img).css({'-webkit-transform':'scale(1.2)','-moz-transform':'scale(1.2)','-ms-transform':'scale(1.2)','-o-transform':'scale(1.2)','transform':'scale(1.2)'});
						$(stat).addClass('stat-before');
				}).on('mousemove.once', function(event){
					var img 	= $(this).find('.featured-img .img'),
						icon 	= $(this).find('.featured-img span.glyphicon-play-circle'),
						x 		= ( (event.pageX - $(this).offset().left) /($(this).width()) *100 +'%' ),
						y 		= ( (event.pageY - $(this).offset().top) /($(this).height()) *100 +'%' );
						// console.log(x);
						$(img).css({'transform-origin':x + y});
							// $(icon).css({'top':y ,'left': x});
							$(icon).position({
								my:"center center",
								at:"",
								of:event,
								collision:"fit"
							});
				}).on('mouseleave', function(event){
					var img = $(this).find('.featured-img .img');
					var icon = $(this).find('.featured-img span.glyphicon-play-circle');
					$(img).css({'-webkit-transform':'scale(1)','-moz-transform':'scale(1)','-ms-transform':'scale(1)','-o-transform':'scale(1)','transform':'scale(1)'});
						$(icon).css({'top':'50%' ,'left': '50%'});
							$(this).off('mousemove.once',mouse_move_fn);
				});
				
			} /*endif*/
		
		} /*endfor*/

	} m_v();

//  stop any default link action
if ( $('a[href*="#"]') ) {
	$('a[href*="#"]').on('click touchstart',function(e){
		e.preventDefault();
	});
};

}mouse_move_fn();
	

	// *************************



// ============================================


// ============================================


// *************************
		// footer js //
// *************************


/* isvisible func */

function isVisible(element){
  
  var scroll_pos 	= $(window).scrollTop(),
  	window_height 	= $(window).height(),
  	el_top 			= $(element).offset().top,
  	el_height 		= $(element).height(),
  	el_bottom 		= el_top + el_height;
  return ( (el_bottom - el_height*0.25 > scroll_pos ) && ( el_top < ( scroll_pos+0.5+window_height ) ) );

}

// -----------------------------

/* scroll function */

// -----------------------------
// get doc height fn = document bottom 
function getDocHeight(){
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

// ---------------------------
// -----------------------------------------
// footer blog tipster


function footer_fn(){

		var blog 	= $(".blog"),
			blog_li = $(blog).find('.top-blogs li,.bottom-blogs li'),
			i;
		for (i = 0; i < blog_li.length; i++) {
			var el 			= blog_li[i],
				blog_links 	= $(el).find('.blog-img-link'),
				blog_img 	= $(el).find('.blog-img-link img'),
				blog_ttl 	= $(el).find('.blog-ttl h4').clone(),
				blo_img 	= $(blog_li).eq(i).find(blog_img).attr({'title': $(blog_ttl).text()});

				$(blog_links).addClass('footer-blog-tipster').attr({'title':$(blog_li).eq(i).html() });

				// blog_li.eq(i).append(blog_img.attr('title'));

		};
		
	function footer_tipster(){

	$('.footer-blog-tipster').tooltipster({
		animation: 'grow', // 'fade','grow','swing','slide','fall'
	    delay: 3,
	    theme: 'tooltipster-shadow',
	    trigger: 'hover',
	    interactive: true, // Give users the possibility to interact with the content of the tooltip.
	    maxWidth: '300', // Set a maximum width for the tooltip. Default: null (no max width).
	    // side: 'right', // Sets the side of the tooltip. The value may one of the following: 'top', 'bottom', 'left', 'right'. It may also be an array containing one or more of these values.
	    // distance: ,  // The distance between the origin and the tooltip, in pixels. The value may be an integer or an array of integers.Default: 6
	    contentAsHTML: true , // If the content should actually be interpreted as HTML, set this option to true. Default: false
	    // repositionOnScroll: , // Repositions the tooltip if it goes out of the viewport when the user scrolls the page, in order to keep it visible as long as possible. Default: false
	});

	}footer_tipster();


}footer_fn();

// ============================================
// nice scroll js
function niceScroll(){

  $("html,.side-nav,.single-side-nav,.post-insider").niceScroll({   
	  autohidemode: false,
	  cursorcolor: "#9f0342",
	  cursorborder:"",
	  background: "#262626",
	  bouncescroll: true,
	  // boxzoom: true,
	  // dblclickzoom: true,
	  horizrailenabled: false,
	  mousescrollstep : 20,
	  scrollspeed : 10,
	  // touchbehavior : true,
	  // grabcursorenabled: false,
	});

// ============================================
// single page / (normal) post related scroll calc and check

function scroll_bar_custom() {

		$('[id^="ascrail"]').css('opacity', '0');  //hide on readyState
// ---------------------------
		if (!check_single){ 
			setTimeout(function(){
				$('[id^="ascrail"]').css('opacity', '1');
			}, 2000);			
			return false;
		}
// ---------------------------
		// var isWebkit = ('Webkitouchstartapearance' in document.documentElement.style);
		var firefox = (navigator.userAgent.search(/firefox/gi)); //firefox		
		var webkit 	= (navigator.userAgent.search(/(applewebkit|khtml)/gi)); //chrome

	var po_content 	= document.querySelector('.post-content'),
		po_body  	= po_content.querySelector('.post-body'),
		po_insider 	= po_body.querySelector('.post-insider'),
		namasou 	= document.querySelector('.namasou'),
		video 		= po_body.querySelector('.video');

		if (video){ 
			setTimeout(function(){
				$('[id^="ascrail"]').css('opacity', '1');
			}, 2000);
			return false;
		}
// ---------------------------
		var scr_id 		= document.getElementById('ascrail2002'),
			media_head	= po_body.querySelector('.media-heading'),
			reading 	= po_body.querySelector('.reading'),
			up 			= po_body.querySelector('.up'),
			down 		= po_body.querySelector('.down');
		setTimeout(function(){
				$('[id^="ascrail"]').not(scr_id).css('opacity', '1');
			}, 2000);

			var active = true;

		function scrId_style_on() { 
			scr_id.style.opacity = 1;
			scr_id.style.filter = "alpha(opacity=1)";
			scr_id.style.WebkitTransition = "all 1s 0.5s";
			scr_id.style.transition = "all 1s 0.5s";
				var lf = scr_id.style.left;
				var top = scr_id.style.top;
				var parse_lf = parseInt(lf,10) + 7 + "px";
				var parse_top = parseInt(top,10) - 20 + "px";
				if (active == true) {
					scr_id.style.left = parse_lf;
					scr_id.style.top = parse_top;
					active = false;
				}

			up.classList.add('up-reveal');
			down.classList.add('down-reveal');		
			media_head.classList.add('after-reading');
			namasou.classList.add('namasou-before','namasou-after');
			reading.classList.add('visible');
		}
		function scrId_style_off() { 
			scr_id.style.opacity = 0;
			scr_id.style.filter = "alpha(opacity=0)";
			scr_id.style.WebkitTransition = "all 0.2s";
			scr_id.style.transition = "all 0.2s";

			up.classList.remove('up-reveal');
			down.classList.remove('down-reveal');
			media_head.classList.remove('after-reading');
			namasou.classList.remove('namasou-before','namasou-after');
			reading.classList.remove('visible');
		}

		function resize_fn(){
			if (active !== true) {
				var lft		= scr_id.style.left,
					tp		= scr_id.style.top,
					prs_lft = parseInt(lft,10) + 7 + "px",
					prs_tp 	= parseInt(tp,10) - 20 + "px";
				scr_id.style.left = prs_lft;
				scr_id.style.top = prs_tp;
				// active = false;
				// console.log(parse,active);
			}
		}

		function not_visible() {
			if (!isVisible(po_body)) {
				scrId_style_off();
			}
		}



		function mouse_touch_wheel(event){
			var y 		= event.deltaY,
				t 		= event.touchmove;

			if (y > 0 || t) {
				scrId_style_on();
			}
		}

		function prevent(e) {
		 //    var sh 	= po_insider.scrollHeight;
			// var top = po_insider.scrollTop;
			// var ch 	= po_insider.clientHeight;

			if (e.currentTarget.scrollTop >= (e.currentTarget.scrollHeight-e.currentTarget.clientHeight) && e.deltaY > 0) {
				e.preventDefault();
				e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
				return false;
			}else if((e.currentTarget.scrollTop+e.deltaY) <= 0){
				e.preventDefault();
				e.currentTarget.scrollTop = 0;
				return false;
			}

		}

		if (webkit >= 0){
			// console.log("webkit");
			po_body.addEventListener("DOMMouseScroll",mouse_touch_wheel);
			po_insider.addEventListener("DOMMouseScroll",prevent);
			po_body.addEventListener("mousewheel",mouse_touch_wheel);
			po_insider.addEventListener("mousewheel",prevent);
		}else/* if (firefox)*/{
			// console.log("other");
			po_body.addEventListener("DOMMouseScroll",mouse_touch_wheel);
			po_insider.addEventListener("DOMMouseScroll",prevent);
			po_body.addEventListener("mousewheel",mouse_touch_wheel);
			po_insider.addEventListener("mousewheel",prevent);
			po_body.addEventListener("wheel",mouse_touch_wheel);
			po_insider.addEventListener("wheel",prevent);
		}
		window.addEventListener("scroll",not_visible);
		window.addEventListener("resize", resize_fn);

}
scroll_bar_custom();

}
niceScroll();

// $(window).on('load',function() {

// 	$(".cate-title-div a,.cate-post-num span").css('lineHeight', '20px'); // redesign after load to fix the niceScroll design messing on load in firefox.

// });

// -----------------------------
// num div js

function num_div(){

		if (check_single) return false;

	var num_div = $(".cate-post-num .num"),
		$body 	= $("body");

	num_div.on('click touchstart', function(event){
		event.preventDefault();
		$(this).toggleClass('cate-num-after',function(){
			if ( num_div.hasClass('cate-num-after') ) {
				close_on_focus_out();
			}
		});	
	});	

	function close_on_focus_out(){

		$body.on("click.bodyclick touchstart.bodyclick", function(event){
			event.preventDefault();
			if ( num_div.has(event.target).length == 0 && num_div.is(event.target) == false ) {
				num_div.removeClass('cate-num-after');
				$body.off("click.bodyclick touchstart.bodyclick"); // removes the body click event with a bodyclick "namespace" to be specific to off this event only.
				// console.log("off");
			};
		});
					
	}
}num_div();

// ============================================
			// ajax section //
// ============================================

function ajax_fns(){

		if (check_single) return false;

	/* filter nav ajax */

	// var entry_content = $(".entry-content").find('.masonry-grid'),
	var filter_btns 	= $(filter_ul).find("> li > a"),
		featured_btn 	= $(filter_ul).find("> li > a.featured"),
		latest_btn 		= $(filter_ul).find("> li > a.latest"),
		all_btn 		= $(filter_ul).find("> li > a.all");

	var masonry_container 	= $(".masonry-container"),
		entry_masonry 		= $(masonry_container).find('.masonry-grid');

	var cc = $(".grid-item").length;

// ------------------------------------

	$(featured_btn).on("click touchstart",function(event){
		event.preventDefault();
			featured_content_fn();
	});
	$(latest_btn).on("click touchstart",function(event){
		event.preventDefault();
			latest_content_fn();
	});
	$(all_btn).on("click touchstart",function(event){
		event.preventDefault();
			original_content_fn();
	});
	// --------------------------------
	// data fn

	// featured fn
	function featured_content_fn(){
			
			$(filter_btns).css('pointerEvents', 'none').attr("disabled", true);
			$(featured_btn).off('click touchstart');

			$(masonry_container).addClass('entry-before');
			$(entry_masonry).fadeOut(300);

			$.ajax({
				url: 'content-featured.html',
				type: 'GET',
				dataType: 'html'/*'default: Intelligent Guess (Other values: xml, json, script, or html)'*/,
				data: $grid,
				isLocal: true,
				cache : false
			})
			.done(function(data) {
				// console.log("success");
				filter_nav_walker();


				var $data 			= $(data),
					entry_masonry 	= $data.filter('.masonry-grid');

					$(masonry_container).html($data);
				setTimeout(function(){
					$(entry_masonry).addClass('return-view').fadeIn(300);
					$(masonry_container).removeClass('entry-before');
				},4000);


					function counter_fn(){

						if ( !document.getElementById('items-counter') ) {
								// 
						}else{
						
							$('#items-counter').slideUp('slow').hide('slow');
						};


					cc = $(".grid-item").length; // update the counter

					}counter_fn();



				var $grid = $data.find('.grid');
				  // layout Masonry after each image loads
					$grid.imagesLoaded().progress(function(){
						$grid.masonry({
						itemSelector 		: '.grid-item',
						columnWidth 		: '.grid-sizer',
						percentPosition 	: true,
						isAnimated 			: reveal_items(),
						transitionDuration 	: 0
					})
					  // layout
					  .masonry('reloadItems')
					  .masonry('layout');
					});
						grid_dynamic_content_fn();
								mouse_move_fn();
									// tipsters_fn();
										num_div();
						// $(masonry_container).find(".cate-title-div a,.cate-post-num span").css('lineHeight', '19px'); // redesign after load to fix the niceScroll design messing on load in firefox.
					

			})
			.fail(function(textStatus){
				console.log("error",textStatus);
				$(entry_masonry).fadeIn(300);
				$(masonry_container).removeClass('entry-before');
			})
			.always(function(){
				// console.log("complete");
				var filter_btns = $(filter_ul).find("> li > a"),
					featured_btn = $(filter_ul).find("> li > a.featured");

				setTimeout(function(){$(filter_btns).css('pointerEvents', 'auto').attr("disabled", false);$(featured_btn).on('click touchstart',featured_content_fn); },4000);
				if ( $(featured_btn).parent().hasClass('active') == true || $(featured_btn).has(event.target).length == 1 && $(featured_btn).is(event.target) == true ) {
					$(featured_btn).css('pointerEvents', 'none').attr("disabled", true);
				}else{
					$(featured_btn).css('pointerEvents', 'auto').attr("disabled", false);
				}
			});
			return false;
		
	}

	// -----------------------
	// latest fn

	function latest_content_fn(){

			$(filter_btns).css('pointerEvents', 'none').attr("disabled", true);
			$(latest_btn).off('click touchstart');

			// var masonry_container = $(".masonry-container");
			// var entry_masonry = masonry_container.find('.masonry-grid');
			$(masonry_container).addClass('entry-before');
			$(entry_masonry).fadeOut(300);

				$.ajax({
					url: 'content-latest.html',
					type: 'GET',
					dataType: 'html'/*'default: Intelligent Guess (Other values: xml, json, script, or html)'*/,
					data: $grid,// data: {param1: 'value1'},
					isLocal: true,
					cache : false
				})
				.done(function(data){
					// console.log("success");
					filter_nav_walker();

					var $data = $(data),
						entry_masonry = $data.filter('.masonry-grid');

					$(masonry_container).html($data);
					setTimeout(function(){
					$(entry_masonry).addClass('return-view').fadeIn(300);
					$(masonry_container).removeClass('entry-before');
				},4000);
					
					
					function counter_fn(){

						if ( !document.getElementById('items-counter') ) {
							
							// 
						}else{
						
							$('#items-counter').slideUp('slow').hide('slow');
						};


						cc = $(".grid-item").length; // update the counter

					}counter_fn();

					
					var $grid = $data.find('.grid');
					  // layout Masonry after each image loads
						$grid.imagesLoaded().progress(function(){
							$grid.masonry({
							itemSelector 		: '.grid-item',
							columnWidth 		: '.grid-sizer',
							percentPosition 	: true,
							isAnimated 			: reveal_items(),
							transitionDuration 	: 0
						})
						  // layout
						  .masonry('reloadItems')
						  .masonry('layout');
						});
							grid_dynamic_content_fn();
								mouse_move_fn();
									// tipsters_fn();
										num_div();
						// $(masonry_container).find(".cate-title-div a,.cate-post-num span").css('lineHeight', '20px'); // redesign after load to fix the niceScroll design messing on load in firefox.

				})
				.fail(function(data){
					console.log("error",status);
					$(entry_masonry).fadeIn(300);
					$(masonry_container).removeClass('entry-before');
				})
				.always(function(){
					// console.log("complete");
					var filter_btns = $(filter_ul).find("> li > a"),
						latest_btn 	= $(filter_ul).find("> li > a.latest");

					setTimeout(function(){$(filter_btns).css('pointerEvents', 'auto').attr("disabled", false);$(latest_btn).on('click touchstart',latest_content_fn); },4000);
					if ( $(latest_btn).parent().hasClass('active') == true || $(latest_btn).has(event.target).length == 1 && $(latest_btn).is(event.target) == true ) {
						$(latest_btn).css('pointerEvents', 'none').attr("disabled", true);  
					}else{
						$(latest_btn).css('pointerEvents', 'auto').attr("disabled", false);
					}
				});
				return false;
		
	}

	// -----------------------
	// original fn

	function original_content_fn(){

			$(filter_btns).css('pointerEvents', 'none').attr("disabled", true);
			$(all_btn).off('click touchstart');
			filter_nav_walker();
			// var masonry_container = $(".masonry-container");
			// var entry_masonry = masonry_container.find('.masonry-grid');
			$(masonry_container).addClass('entry-before');
			$(entry_masonry).removeClass('return-view').fadeOut(300);
			
					$(masonry_container).load('index.html .masonry-grid',
						function(response, status, xhr) {
						var $data = $(response);

					  if ( status == "error" ) {
					    var msg = "Sorry but there was an error: ";
					    console.log( msg + xhr.status + " " + xhr.statusText );

					    filter_nav_walker();
		
					    $(entry_masonry).removeClass('content-transition').addClass('return-view');
					    $(masonry_container).removeClass('entry-before');
					    setTimeout(function(){$(filter_btns).css('pointerEvents', 'auto').attr("disabled", false);$(all_btn).on('click touchstart',original_content_fn); },3000);
					  	return false;
					  }
					// console.log("success");
					var entry_masonry = $('.masonry-container .masonry-grid');
					setTimeout(function(){
						$(entry_masonry).addClass('return-view').fadeIn(300);
						$(masonry_container).removeClass('entry-before');
						// console.log( $(entry_masonry) );
					},4000);

					
					function counter_fn(){
						
							if ( !document.getElementById('items-counter') ) {
								
								//

							}else{
							
								$('#items-counter').slideUp('slow').hide('slow');
							};


						cc = $(".grid-item").length; // update the counter

					}counter_fn();


					var $grid = $('.grid');
					  // layout Masonry after each image loads
						$grid.imagesLoaded().progress(function(){
							$grid.masonry({
							itemSelector 		: '.grid-item',
							columnWidth 		: '.grid-sizer',
							percentPosition 	: true,
							isAnimated 			: reveal_items(),
							transitionDuration 	: 0
						})
						  // layout
						  .masonry('reloadItems')
						  .masonry('layout');
						});
							grid_dynamic_content_fn();
								mouse_move_fn();
									// tipsters_fn();
										num_div();
						// $(masonry_container).find(".cate-title-div a,.cate-post-num span").css('lineHeight', '19px'); // redesign after load to fix the niceScroll design messing on load in firefox.
							
						var filter_btns = $(filter_ul).find("> li > a"),
							all_btn 	= $(filter_ul).find("> li > a.all");

							setTimeout(function(){$(filter_btns).css('pointerEvents', 'auto').attr("disabled", false);$(all_btn).on('click touchstart',original_content_fn); },4000);
							if ( $(all_btn).parent().hasClass('active') == true || $(all_btn).has(event.target).length == 1 && $(all_btn).is(event.target) == true ) {
								$(all_btn).css('pointerEvents', 'none').attr("disabled", true); 
							}else{
								$(all_btn).css('pointerEvents', 'auto').attr("disabled", false); 
							}
				});
				return false;
		
	}


	// --------------------------------------------
	//  load more btn ajax

	function load_more(){
		// var masonry_container = $(".masonry-container");
		var btn 	= $(".entry-content").find('.load-more-btn'),
			span 	= $(btn).find(".glyphicon-magnet,.dots");

		$(btn).on('click touchstart', function(event){
			event.preventDefault();
			$(this).addClass('active').attr('disabled', true);
			$(span).addClass('active');
			setTimeout(function(){ append_topics(); },2000);
			// console.log("clkd");
		});


		function append_topics(){
			var page = $(btn).data('page'),
				new_page = page+1;
			
			$.ajax({
				url: 'content-featured.html',
				type: 'GET',
				dataType: 'html',
				// data: $grid,
				// global: false,
				isLocal: true,
				cache : false
				// beforeSend : (function(){

				// })
			}).done(function(data){
				// console.log("success");
				var $these = $(data);
					$(masonry_container).append( $these );

				var masonry = $these.filter('.masonry-grid');
					$(masonry).addClass('return-view');

					$(span).removeClass('active');
					$(btn).removeClass('active').attr('disabled', false);
				
				
				var $grid = $these.find('.grid');
			  // layout Masonry after each image loads
				$grid.imagesLoaded().progress(function(){
					$grid.masonry({
					itemSelector 		: '.grid-item',
					columnWidth 		: '.grid-sizer',
					percentPosition 	: true,
					// fromBottom 		: true,
					isAnimated 			: ajax_reveal_items(),
					transitionDuration 	: 0
				})
				  // layout
				  .masonry('reloadItems')
				  .masonry('layout');
				  // .masonry('reload');
				});
				// isActive = !isActive;
			
			function ajax_reveal_items() {

				var masonry = $these.filter('.masonry-grid'),
					c 		= 0;
				if ( c >= masonry.length ) return false;
				setInterval(function(){
					var ele 	= masonry[c],	
						cont 	= $(ele).find(".grid"),
						items 	= $(cont).find('.grid-item:not(.reveal)'),
						items_l = $(items).length,
					// 	items 	= '',
						i 		= items_l;
					if ( i <= 0 ) return false;

					setInterval(function(){
						var el = items[i];
							$(el).addClass('reveal');
							// console.log($(this));
							i--
				  	},320);
				c++
				},c+1*320);

			}
			// reveal_items();
			
					
			function ajax_grid_dynamic_content_fn(){

				var grid_cont 	= $these.find(".grid-item-content"),
					p 			= cc+1,
					i;
				// console.log(p,cc);
					for (i = 0; i <= grid_cont.length; i++) {
					
						var el 				= grid_cont[i],
							ttl 			= $(el).find('.title-div h4'),
							img_ttl 		= $(el).find(".vid-img-play .img"),
							play_icon 		= $(el).find('.vid-img-play .glyphicon-play-circle'),
							img_data 		= $(img_ttl).attr('data-img'),
							img_append 		= $(img_ttl).empty().append('<img class="img-bg" src="'+img_data+'" >'), // append the img before cloning
							vid_info 		= $(el).find('.vid-info span'),
							feat_img 		= $(el).find(".featured-img .vid-img-play").clone(),
							excerpt 		= $(el).find('.excerpt').prepend(feat_img),
							meta 			= $(el).find('.meta').append(excerpt),
							meta_id 		= $(meta).attr({'id':'meta'+[i+p]}),
							meta_id_index 	= $(meta).attr('id'),
							stat_a 			= $(el).find(".stat .left a,.stat .right a"),
							share_clone 	= $(".share-icons:first").clone(),
							stat 			= $(el).find(".stat").not( $(".stat:first") ).append( $(share_clone) ),
							share 			= $(el).find(".share-icons").html();

						$(ttl).attr({'title':$(ttl).text()});
							$(img_ttl).attr({'title':$(ttl).text()/*,'alt':$(ttl).text()*/});
							$(play_icon).attr({'title':$(ttl).text()});
								$(vid_info).addClass('tipster'+[i+p]).attr({'data-tooltip-content':'#'+meta_id_index });
									$(stat_a).addClass('stat-tipster'+[i+p]).attr({'title':Math.floor(Math.random()*220)});
										if ( $(stat_a).find('i').hasClass('fa-share-alt') ) { 
											$(stat_a).find(".fa-share-alt").parent().addClass('share-tipster'+[i+p]).attr({'title':'share'});
										}
										if ( $(stat_a).find('span').hasClass('fa-calendar') ) { 
											var date = new Date(),
												now = date.toDateString() +' | '+ date.toLocaleTimeString();
											$(stat_a).find(".fa-calendar").parent().attr({'title':now});
										}						
						// console.log($(feat_img));
					

						// *************************
						/* tooltipster */

						// function tipsters_fn () {

						$('.tipster'+[i+p]).tooltipster({
							animation 				: 'swing', // 'fade','grow','swing','slide','fall'
						    delay 					: 0,
						    theme 					: 'tooltipster-borderless',
						    trigger 				: 'click',
						    interactive 			: true, // Give users the possibility to interact with the content of the tooltip.
						    maxWidth 				: '300', // Set a maximum width for the tooltip. Default: null (no max width).
						    // side 				: 'right', // Sets the side of the tooltip. The value may one of the following: 'top', 'bottom', 'left', 'right'. It may also be an array containing one or more of these values.
						    // distance 			: ,  // The distance between the origin and the tooltip, in pixels. The value may be an integer or an array of integers.Default: 6
						    contentAsHTML 			: true , // If the content should actually be interpreted as HTML, set this option to true. Default: false
						    // contentCloning 		: true, // If you provide a jQuery object to the 'content' option, this sets if it is a clone of this object that should actually be used. Default: false
						    // repositionOnScroll 	: , // Repositions the tooltip if it goes out of the viewport when the user scrolls the page, in order to keep it visible as long as possible. Default: false
						functionReady: function(instance){ 
					        $('.tip-close').on('click touchstart',function(){
					            instance.close();
					        });
					    },

						});

						$('.stat-tipster'+[i+p]).tooltipster({
							animation 				: 'fade', // 'fade','grow','swing','slide','fall'
						    delay 					: 3,
						    theme 					: 'tooltipster-noir',
						    trigger 				: 'hover',
						    interactive 			: true, // Give users the possibility to interact with the content of the tooltip.
						    maxWidth 				: '300', // Set a maximum width for the tooltip. Default: null (no max width).
						    // side 				: 'right', // Sets the side of the tooltip. The value may one of the following: 'top', 'bottom', 'left', 'right'. It may also be an array containing one or more of these values.
						    // distance 			: ,  // The distance between the origin and the tooltip, in pixels. The value may be an integer or an array of integers.Default: 6
						    contentAsHTML 			: true , // If the content should actually be interpreted as HTML, set this option to true. Default: false
						    // repositionOnScroll 	: , // Repositions the tooltip if it goes out of the viewport when the user scrolls the page, in order to keep it visible as long as possible. Default: false
						});



							// initialize a second tooltip for the same content
							$('.share-tipster'+[i+p]).tooltipster({
								// don't forget to provide content here as the first tooltip will have deleted the original title attribute of the element
								content 		: share,
								animation 		: 'slide',
								theme 			: 'tooltipster-borderless',
								multiple 		: true,
								side 			: 'bottom',
								trigger 		: 'click',
								contentAsHTML 	: true,
								interactive 	: true,
								// contentCloning 	: true,
						});

						// }tipsters_fn();

					};

						// cc = $(".grid-item").length; // update the counter

						function counter_fn(){

							if ( !document.getElementById('items-counter') ) {
								
								var N_div 	= document.createElement('div'),
									N_p 	= document.createElement("p"),
								// 	para = document.createTextNode( ( (f<2) ? ' file' : ' files')+' on the page'),
									div_css = $(N_div).css({
														width:'auto',
														height:'30px',
														padding:'5px 5px 0',
														background:'rgba(0,0,0,0.7)',
														position:'fixed',
														bottom:'0',
														right:'15px',
														zIndex:'9999',
														textAlign:'center',
														lineHeight:'25px',
														color:'#ffffff',
														fontFamily:'Lucida Console',
														'-webkit-transition':'all 0.3s ease-out',
														'-moz-transition':'all 0.3s ease-out',
														'-ms-transition':'all 0.3s ease-out',
														'-o-transition':'all 0.3s ease-out',
														'transition':'all 0.3s ease-out',
													}).hide(),
									p_css 	= $(N_p).css({backgroundColor:'rgba(159,3,66,0.7)',fontWeight:'bold',padding:'0 10px'});
								N_div.appendChild( N_p );
								// N_p.appendChild( para );
								N_div.setAttribute('id','items-counter');
								document.body.appendChild( N_div );
								$(N_div).slideDown('slow')/*.attr('id', 'items-counter').text(f++ + ( (f<2) ? ' file' : ' files')+' on the page' )*/;

							}else{
							
								var thediv = document.getElementById('items-counter');
								// $(thediv).slideUp('slow');
								thediv.innerHTML = '<p style="background-color:rgba(159,3,66,0.7);padding:0 10px;font-weight:bold;"></p>';
								// $(thediv).slideDown('slow');
								$(thediv).show('slow').slideDown('slow');
								$('#items-counter p').text('');
							};
						
							var img = '<img src="fonts/svg/ripple.svg" style="width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;">',
								f 	= cc;
							// var z = cc;

							$('#items-counter').prepend(img);
							setTimeout(function(){
								$("#items-counter img").hide();
								// console.log(cc,f,"1");

							var interval = setInterval(function(){
									// console.log(cc,f,"2");
									// if (f > cc) {f = cc;};// var f = cc;
								if ( f <= cc ) {
									// console.log(cc,f,"3");
									$('#items-counter p').text(f + ( (f<2) ? ' file' : ' files')+' loaded' );
									f++
								}else{clearInterval(interval);}

								},100);

							cc = $(".grid-item").length; // update the counter

							},3000);

					
					}counter_fn();

				}ajax_grid_dynamic_content_fn();

					mouse_move_fn();

							num_div();

				
			})
			.fail(function(data){

						$(span).removeClass('active');
						$(btn).removeClass('active').attr('disabled', false);
			})
			.always(function(data){

						$(span).removeClass('active');
						$(btn).removeClass('active').attr('disabled', false);
						 		
			});
			
			return false;

		}



	}load_more();



}ajax_fns();




// ==========================================

}); // doc ready close.