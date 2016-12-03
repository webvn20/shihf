$(window).load(function() {

	//megamenu dropdown
	$('.mega-menu-content li.sub-menu i').click(function(){
		$(this).parent('.sub-menu').find('.megamenu-dropdown').toggle(500);
		$(this).toggleClass('fa-angle-right');
		$(this).toggleClass('fa-angle-down');
	});

});

// top link toggle
$(window).load(function() {
	if($(window).width() <= 1024){
		$('.sdcollections-list span.icon-arrow-right').click(function(){
			$(this).parent().siblings().find('.site-nav__dropdown').removeClass('mega-open');
			$(this).parent().find('.site-nav__dropdown').toggleClass('mega-open');
		});	

		/*** Event for menu on 1024px ***/
		/*
		function removeOpen(){
			var subOpen = $('#primary-menu > ul > li.sub-menu.isOpen ul');
			if (subOpen.css("display") == "block"){
				subOpen.css("display","none");
				$('#primary-menu > ul > li.sub-menu').removeClass('isOpen');
			}	
		}
		
		$('body').click(function(e){
			if($(e.target).closest('#primary-menu > ul > li.sub-menu.isOpen').length){
				return; 
			}
			removeOpen();
		});

		$('#primary-menu > ul > li.sub-menu a.menu').click(function(e){
			var subMenu = $(this).parent().find('ul');
			if (subMenu.css("display") == "none"){
				e.preventDefault();
				removeOpen();
				subMenu.css("display","block");
				$(this).parent().addClass('isOpen');
			}
		});

		$('body').click(function(e){
			if($(e.target).closest('.mega-menu.sub-menu').length){
				return; 
			}
			var subContent = $('#primary-menu > ul > li.mega-menu .mega-menu-content');
			if (subContent.css("display") == "block"){
				subContent.css("display","none");
			}
		});

		$('#primary-menu > ul > li.mega-menu a.menu_link').click(function(e){
			var subContent = $(this).parent().find('.mega-menu-content');
			if (subContent.css("display") == "none"){
				e.preventDefault();
				subContent.css("display","block");
			}
		}); */
		
		/*** End Event for menu on 1024px ***/
	}
	if($(window).width() <= 991) {
		$(document).click(function() {
			$('.top-links').hide();
		});
		$('#top_link_trigger').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			$('.top-links').toggle();
		});
		//responsive menu
		$("#menu-toggle, .body_overlay, .drawer__close").click(function(e) {
			e.preventDefault();
			var $show_menu = $('#menu_xs, #menu-toggle, .body_overlay, body');
			$show_menu.toggleClass("toggled");
		});
		$('.mobile-nav__toggle').click(function(){
			$(this).parent().toggleClass('mobile-nav--expanded');
		});

		$('.drawer__header .mobile-nav__toggle').unbind('click');

		//end responsive menu
	}
	if($(window).width() <= 767) {
		$('.filter_list').removeClass('in');
		// mobile filter
		$('#filter_group').removeClass('in');
		$(".widget_links li input").click(function(){
			$('#filter_group').removeClass('in');
		});

		// category menu
		$('.left_menu .nav-pills > li > a i').click(function(e) {
			e.preventDefault();
			var $show_menu = $(this).closest('li.menu').find('.submenu');
			$('.submenu').slideUp();
			if($show_menu.css('display') == 'none') {
				$show_menu.slideDown();
			}
			else {
				$show_menu.slideUp();
			}
		})
		// endcategory menu
	}
});
// end top link toggle

// sidebar menu
$('.sidebar_menu > li > i').click(function() {
	//$(this).closest('li').find('ul').toggleClass('toggled');
	$(this).closest('li').find('ul').toggle('slow');
});
// end sidebar menu

// change state of collapse arrow
$('.filter_group a').click(function() {
	$(this).find('i').toggleClass('fa-angle-down');
	$(this).find('i').toggleClass('fa-angle-right');
});
// end change state of collapse arrow

// mark the chosen color
$('.color_block').click(function() {
	$(this).parent().toggleClass('bordercolor');
});
// end mark the chosen color 


/*** top search ***/

$(window).load(function() {
	$(this).scroll(function() {
		if($('#header').hasClass('sticky-header')) {
			$('.top_search').addClass('top_search_sticker');
		}
		else {
			$('.top_search').removeClass('top_search_sticker');
		}
	});
});

/*** submenu toggle ***/
$('.submenu_toggle').click(function() {
	$(this).next().toggle(500)
});
/*** end submenu toggle ***/


/**** product overlay ****/

$('.product_overlay').click(function(e) {
	if(!$(e.target).is('.product_quick_add') && !$(e.target).is('.item-quick-view')) {
		var url = $(this).attr('product_url');
		location.href=url;
	}
})
/**** end product overlay ****/


$('.product-grid').slick({
	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 917,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 615,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

/* top search */

$('.search_text').click(function(){
	$(this).next().slideToggle(200);
	$('.list_search').show();
})


$('.list_search .search_item').on('click', function (e) {
	$('.list_search').hide();

	var optionSelected = $(this);

	/*
  var id = optionSelected.attr('data-coll-id');
  var handle = optionSelected.attr('data-coll-handle');
  var coll_name = optionSelected.attr('data-coll-name');
  */

	var title = optionSelected.text();
	//var filter = '(collectionid:product' + (id == 0 ? '>=0' : ('=' + id)) + ')';


	//console.log(coll_name);
	$('.search_text').text(title);

	/*
  $('.ultimate-search .collection_id').val(filter);
  $('.ultimate-search .collection_handle').val(handle);
  $('.ultimate-search .collection_name').val(coll_name);
  */

	$(".search-text").focus();
	optionSelected.addClass('active').siblings().removeClass('active');
	//console.log($('.kd_search_text').innerWidth());


	//$('.list_search').slideToggle(0);

	/*
  sessionStorage.setItem('last_search', JSON.stringify({
    title: title,
    handle: handle,
    filter: filter,
    name: coll_name
  }));
  */	
});


$('.header_search form button').click(function(e) {
	e.preventDefault();
	searchCollection();
	setSearchStorage('.header_search form');
});

$('#mb_search').click(function(){
	$('.mb_header_search').slideToggle('fast');
});

$('.fi-title.drop-down').click(function(){
	$(this).toggleClass('opentab');
});


if($(window).width() < 991){
	$('.collection-name .catelogry-xs').click(function(e){
		var check = $(this).parent().next().find('ul.bh-tags').hasClass('show-xs');
		if(check){
			$(this).parent().next().find('ul.bh-tags').removeClass('show-xs');
		}else{
			$(this).parent().next().find('ul.bh-tags').addClass('show-xs');
		}
	})
}

function searchCollection() {
	var collectionId = $('.list_search .search_item.active').attr('data-coll-id');
	var searchVal = $('.header_search input[type="search"]').val();
	var url = '';
	if(collectionId == 0) {
		url = '/search?q='+ searchVal;
	}
	else {
		url = '/search?q=collections:'+ collectionId +' AND name:' + searchVal;
		/*
		if(searchVal != '') {
			url = '/search?type=product&q=' + searchVal + '&filter=(collectionid:product=' + collectionId + ')';
		}
		else {
			url = '/search?type=product&q=filter=(collectionid:product=' + collectionId + ')';
		}
		*/
	}
	window.location=url;
}


/*** Search Storage ****/

function setSearchStorage(form_id) {
	var seach_input = $(form_id).find('.search-text').val();
	var search_collection = $(form_id).find('.list_search .search_item.active').attr('data-coll-id');
	sessionStorage.setItem('search_input', seach_input);
	sessionStorage.setItem('search_collection', search_collection);
}
function getSearchStorage(form_id) {
	var search_input_st = ''; // sessionStorage.getItem('search_input');
	var search_collection_st = ''; // sessionStorage.getItem('search_collection');
	if(sessionStorage.search_input != '') {
		search_input_st = sessionStorage.search_input;
	}
	if(sessionStorage.search_collection != '') {
		search_collection_st = sessionStorage.search_collection;
	}
	$(form_id).find('.search-text').val(search_input_st);
	$(form_id).find('.search_item[data-coll-id="'+search_collection_st+'"]').addClass('active').siblings().removeClass('active');
	var search_key = $(form_id).find('.search_item[data-coll-id="'+search_collection_st+'"]').text();
	if(search_key != ''){
		$(form_id).find('.collection-selector .search_text').text(search_key);
	}
	//$(form_id).find('.search_collection option[value="'+search_collection_st+'"]').prop('selected', true);
}
function resetSearchStorage() {
	sessionStorage.removeItem('search_input');
	sessionStorage.removeItem('search_collection');
}
$(window).load(function() {
	getSearchStorage('.header_search form');
	resetSearchStorage();
});