function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// news
const filePath = 'sk.json';

function activeSlide() {

    //service section owl carousel
    $("m-post").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        autoHeight: true,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
            '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            991: {
                items: 4,
            },
        },
    });
}
let titlearea = document.getElementById('poster')
function createItemElement(itemData) {
    itemData && itemData.map((item) => {
        let itemTemplate = `  
            <div id="m-post" style="width : 326px; background-color : black;">
                <img id="img-title" src="${item.image}" alt="">

                <div class="p-title">
                    <h6 style="font-size : 15px; color : white; margin : 10px;">${item.title}</h6>

                </div>
                <div>
                    <p style="color : white; font-size : 11px; margin : 10px;">
                    ${item.text}
                    </p>
                </div>
            </div>
        `;
        titlearea.innerHTML += itemTemplate;
    });
}
init()

function init() {
    getPlayerAPI()
}

async function getPlayerAPI() {
    let data = await fetch(filePath)
        .then(response => response.json()) // lấy dữ liệu từ fetch('link j đó)lưu vào data
        .then(json => json)//chuyển response thành json sau đó đổi thành array/object và lưu vào biến data
    console.log(data)
    createItemElement(data)
}

var elem = document.querySelector('.collapsible');
var instance = M.Collapsible.init(elem, {
    accordion: true
});
// news