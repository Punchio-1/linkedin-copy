let body = document.querySelector("body *");
let main = document.querySelector("main");
let content = document.getElementById("content");
let main_search = document.querySelector("#main-search");
let nav_list = document.getElementById("nav-list");
//navlisti get element by id şeklinde tam karşılığıyla (aratmazsan query falan olmayacak yani) bulmuyor. DOM'un yapısı bu. bundan sonra style'ına ulaşmadığında bunu yap.
let nav_list_item = document.getElementById("navListItem");
let input_group = document.getElementById("search-input");
let search_text = document.getElementById("search-text");
let search_input = document.getElementById("search-input");
let search_responsive = document.getElementById("search-responsive");
let search_icon = document.getElementById("search-icon");
let get_premium = document.getElementById("getPremium");
let worker = document.getElementById("worker");
let work = document.getElementById("work");
let navİtemResponsiveMenu = document.getElementById("navİtemResponsiveMenu");
let mySidenav = document.getElementById("mySidenav");
let closeBtn = document.getElementById("closeBtn");
// aslında ben mysidenav tuşuna bastığımda her defasında work tuşuna da basmış oluyorum. çünkü mysidenav, html kısmında work tuşunun içinde. dolayısıyla mysidenav içinde herhangi bir yere tıkladığımı anda work'e basmış gibi olacağımdan dolayı mysidenav offcanvasını da kapatmış olacağım. Çünkü aşağıdaa worke basınca kapansın diye komut verdim. mk bir saattir neden kaapnıyor diye düşünüyorum. o yüzden work değişkeninin mysidenav'i kapsamamasına dikkat et. harici bir şey seç ki work mysidenavin container/wrap elemanı olmasın.
let me = document.getElementById("me");
let nav_dropdown = document.getElementById("navDropdown");
let me_list = document.getElementById("me-list");
let dropdownToggle = document.getElementById("dropdownToggle");
let openResponsiveNavList = document.querySelector("openResponsiveList");
let openResponsiveList = document.getElementById("openResponsiveList");
let btnPrivacy = document.getElementById("btnPrivacy");
let privacyList = document.getElementById("privacyList");
let privacyTerms = document.getElementById("privacyTerms")
let advertisement = document.getElementById("advertisement")
let businessServices = document.getElementById("businessServices");
//mediaQueries
let mediaQueryMax576 = window.matchMedia('(max-width: 575px)');
let mediaQueryMin576 = window.matchMedia('(min-width: 576px)');
let mediaQueryMin768 = window.matchMedia('(min-width: 768px)');
let mediaQueryMin992 = window.matchMedia('(min-width: 992px)');
let mediaQueryMin1200 = window.matchMedia('(min-width: 1200px)');
