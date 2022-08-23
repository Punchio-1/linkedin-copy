function searchOpen() {
    content.classList.add("active");
    document.getElementById("home").style.zIndex = "7"
    // scroll bar aşağı doğru gittiğinde navbar karanlığın altında kalmasın diye zındenx'ini karanlık yüzeyden daha yüksek yaptık.
    if(content.classList.contains("active1")){
        content.classList.remove("active1");
        //WORK AÇIKSA ONU DA KAPATSIN ÜST ÜSTE GELMESİNLER.
        closeNav();
    }
    triggerSearch();
}

search_text.addEventListener("click", () => { searchOpen(); })

search_responsive.addEventListener("click", () => {
    searchOpen();
    triggerSearchResponsive();
});
window.addEventListener("resize", changeSearchButton);

let triggerSearchResponsive = () => {
    search_responsive.style.display = "none";
    search_input.style.display = "block";
    main_search.classList.remove("col-3")
    main_search.classList.add("col-12")
    nav_list.style.display = "none";
    search_icon.style.top = "30%";
    search_icon.style.left = "4%";
}
let triggerSearch = () => {
    main_search.classList.remove("col-3")
    main_search.classList.add("col-5")
    nav_list.classList.remove("col-9")
    nav_list.classList.add("col-7")
    search_icon.style.transform = "translate(-5px, 0px)";
    search_text.style.border = "2px solid #000";
    search_icon.style.top = "30%";
    search_icon.style.left = "4%";
    openResponsiveList.style.display = "block"
    work.style.display = "none"
    me.style.display = "none"
    get_premium.style.display = "none"
}

let reverseSearchChanges = () => {
    main_search.classList.remove("col-5")
    main_search.classList.add("col-3")
    search_text.style.border = "none";
    nav_list.classList.remove("col-7")
    nav_list.classList.add("col-9")
    if (mediaQueryMin576.matches) {
        openResponsiveList.style.display = "none"
     //yoksa temelli kapatır.   
    }
    work.style.display = "block"
    get_premium.style.display = "block"

    nav_list.style.display = "block";
    main_search.classList.remove("col-12")
    main_search.classList.add("col-3")
}

function openNav() {
    mySidenav.style.width = "35rem";
    mySidenav.style.opacity = "1"
    content.classList.add("active1");
    body.style.overflow = "hidden"
    
}

function closeNav() {
    mySidenav.style.width = "0";
    mySidenav.style.opacity ="0"
    content.classList.remove("active1");
    //yandaki scrollbar'ı kaldırmak için.
    body.style.overflow="visible"
    content.classList.remove("active1");
}

worker.addEventListener("click", function () {
    if(content.classList.contains("active1")){
        closeNav();

    } else {
        openNav();
    }
    if (content.classList.contains("active")) {
        content.classList.remove("active");
        //SEARCH BUTONUNUN KARANLIĞINI DA KAPATMAMIZ LAZIM TABİ.
    }
    reverseDropdownChanges();
});




main.addEventListener("click", function () {
    content.classList.remove("active")
    content.classList.remove("active1")
    closeNav();
    body.style.overflow = "visible";
    reverseSearchChanges();
    // boşluğa tıkladığımız anda offcanvas'ı kapatmak için bu fonksiyonu kullandı
    changeSearchButton();
    reverseDropdownChanges();
    closeTheNavList();
});
// !!önemli. main'in içine content diye bir section açtım. Çünkü biz search butonuna bastığımızda, tekrardan siyah alanı yok etmemiz için active classını silmemiz gerekiyor. Ama biz click için body'i seçersek body search buttonlarını da kapsayacağı için arka plan hiç gelmeyecektir. Yani  aslında biz body'e her bastığımızda search1 serach2 ve sonra main tuşuna basmış olacağız. bu yüzden biz arka planı content'tin beforuna ekledik. böylece main'e bastığımız zaman active clasını silmiş olacaktır. Ve en önemlisi, main, bizim search butonlarımızı kapsamadığı için searchlarin çalışmasında bir sorun yaşamayacaktır. Eğer onları da kapsamış olsaydı aynı anda content'e active classı gelip gitmiş olacaktı. saliseler içinde olacağı için bunu fark etmiş dahi olmayacaktık.


/////////////////// media-query ayarlama yöntemi- buradaki matches bir özelliktir. değişken, parametre ve function adlarını ise uyduruyoruz.
function changeSearchButton() {
    if (mediaQueryMin992.matches) { // If media query matches
        search_input.style.display = "block";
        search_responsive.style.display = "none";
        
    } else {
        search_input.style.display = "none";
        search_responsive.style.display = "block";
    }
}
//Direk dışardan gelen değişkeni aldık. hiç parametreyle uğraşmadık.
//////////////////////////////////////////////////////////////////////////////////////





// below, I move an Html element in another with JS by ellipsis icon. before ı construct this function, I add an onclick in openResponsiveList's attribue.


/// navbar içerisindeki me'yi dropdown'a çeviriyoruz.
let isDropdownOpen = true;
dropdownToggle.addEventListener("click", function() {
    if (isDropdownOpen) {
        me_list.style.opacity = "1";
        me_list.style.pointerEvents = "auto";
        isDropdownOpen = false;
        // offcanvas açıksa o da kapansın diye alttaki kodu yukarıdan aldım.
        if(content.classList.contains("active1")){
            content.classList.remove("active1");
            closeNav();
            body.style.overflow="visible"
    
        }
    } else {
        reverseDropdownChanges();
    }
})

// dropdown'ın açılış ve kapanış animasyonlarını uyguluyoruz
//başlamadan önce küçük bir not, eğer biz dropdown toggle yerine me'ye listner ekleseydik, açılan me list zaten me'nin içinde olduğu için liste elemanlarına tıklayamayacaktık. Çünkü me-liste tıkladığımız her an me ye tıklamış olacaktık. ve böylece me'ye yüklediğimiz lisnter sayesinde me melist kapanacaktı.
let isScale1 = true;
dropdownToggle.addEventListener("click", function () {
    if (isScale1) {
        me_list.style.transform = "scale(1)"
        isScale1 = false;
    } else {
        // zaten kapandığı zaman reverseDropdownChanges() metodunu bir üst addEventListener() metodunda kullandık bir daha burada kullanmaya gerek yok ama kullansak da ziyanı yok.
    }
});
//bir fonksiyon oluşturmamızın nedeni, tek tek bir daha main içerisine yazmamaktır. direk metodu oraya kopyalayacağız
let reverseDropdownChanges = () => {
    me_list.style.opacity = "0";
    me_list.style.pointerEvents = "none";
    isDropdownOpen = true;

    me_list.style.transform = "scale(0.8)"
    isScale1 = true;
}

let isNavListClose = true;
let openNavList = () => {
    if (isNavListClose) {
        navİtemResponsiveMenu.appendChild(work);
        navİtemResponsiveMenu.appendChild(me);
        // work'ten önce koyarsan, d-none değil de opacity ile kurduğumuz için work'ın dengesini bozuyor. bu yüzden work'u bunun önüne koymalıyız ki dengesi bozulmasın. es-kaza buldum mk.
        navİtemResponsiveMenu.appendChild(get_premium);
        work.style.display = "block"
        get_premium.style.display = "block"
        me.style.display = "block"
        isNavListClose = false;
    } else {
        console.log("merhaba")
        closeTheNavList();
    }
};
let closeTheNavList = () => {
    if (mediaQueryMax576.matches) {
        console.log("576 alınta")
        work.style.display = "none"
        get_premium.style.display = "none"
        me.style.display = "none"
        isNavListClose = true;
    } else {
        //ben her main'e tıkladığımda CloseTheNavListFonksiyonunu çalıştıracağım için, mediaQuery 576'ının altında değilse displayları block olsun. Alttakileri yazmazsak tıkladığımız anda displaylari none olacağından görünmeyeceklerdir.
        work.style.display = "block"
        get_premium.style.display = "block"
        me.style.display = "block"
    }
}
// windows her resize edildiğinde eğer 576'ın üstündeysel block olacak, değilse görünmeyecektir. Ancak bir openNavListe bastığımzda zaten oradaki kodlar aracılığıyla görünmeye başlayacaktır.
window.addEventListener("resize", function () {
    if (mediaQueryMin576.matches) {
        work.style.display = "block"
        get_premium.style.display = "block"
        me.style.display = "block"
        nav_list_item.appendChild(work);
        nav_list_item.appendChild(me);
        nav_list_item.appendChild(get_premium);
        openResponsiveList.style.display="none"
    } else {
        work.style.display = "none"
        get_premium.style.display = "none"
        me.style.display = "none"
        openResponsiveList.style.display="block"
    }
})

//toggle kullanmak varken bütün kodları add ve remove ile yapman harika dostum.
let isPrivacyListActive = false;
let openPrivacyList = () => {
    privacyList.classList.toggle("active")
};

// yukarıdaki bütün ayarları bununla değiştirmek zorunda kalacağım çünkü baya kestirme ve basit bir yöntem. kolay yolu varken baya uğraşmışım :) aşağıda document benim belgemi temsil ediyor. onclick ise documente het mouse clicklediğimi. Documente her click olduğumda bir fonksiyon çalıştırılacak. fonksiyonun içindeki event ise onclick yaptığımız mouse'ın eventidir. yani uydurduğumuz bir parametre değildir. ve eğer event'in targeti, yani mouse'ı tıkladığımız alan/yer privacyList adındaki elementimize eşit değilse(yanı dışında bir yerde ise) ... codlarını çalıştır diyoruz.

document.onclick = function (event) {
    if (privacyTerms.contains(event.target)) {
        console.log("İÇERİDE")
    } else {
        privacyList.classList.remove("active")
        console.log("dışarıda")
    }
    if (!businessServices.contains(event.target)) {
        bussinessServicesDropdown.classList.remove("active")
        businessServices.querySelector("a i").className="fas fa-chevron-down"
    }
};



businessServices.children[0].addEventListener("click", function () {
    document.getElementById("bussinessServicesDropdown").classList.toggle("active");
    businessServices.querySelector("a i").className="fas fa-chevron-up"
});
