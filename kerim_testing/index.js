const carousel = document.querySelector('.carousel');
const mainView = document.querySelector('.main-view .item');
const thumbnails = document.querySelectorAll('.thumbnails .item');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

const items = [
    {
        img: 'https://wallpaperaccess.com/full/3883123.jpg',
        author: 'Shameik Moore',
        title: 'Across the spider verse',
        topic: 'Miles Morales',
        des: 'In "Spider-Man: Into the Spider-Verse," Miles Morales is a regular teen from Brooklyn who becomes a superhero after being bitten by a radioactive spider. He balances school life with newfound responsibilities, becoming a symbol of inclusivity in the superhero world.',
        bgColor: '#FF6347' // Tomato
    },
    {
        img: 'https://wallpaperaccess.com/full/1902534.jpg',
        author: 'Hailee Steinfeld',
        title: 'Across the spider verse',
        topic: 'Gwen Stacy',
        des: 'In "Spider-Man: Into the Spider-Verse," Spider-Gwen, also known as Gwen Stacy, is a dynamic hero from another universe. With her skills and determination, she adds diversity and strength to the team, intertwining her story with Miles Morales\' journey.',
        bgColor: '#FFD700' // Gold
    },
    {
        img: 'https://images.hdqwalls.com/download/peter-b-parker-in-spiderman-across-the-spider-verse-2023-9b-2048x1152.jpg',
        author: 'Jake Johnson',
        title: 'Across the spider verse',
        topic: 'Peter B. Parker',
        des: 'In "Spider-Man: Into the Spider-Verse," Peter B. Parker is a seasoned Spider-Man from an alternate universe who reluctantly mentors Miles Morales. He undergoes a journey of redemption, rediscovering his sense of heroism and healing from past struggles.',
        bgColor: '#4682B4' // SteelBlue
    },
    {
        img: 'https://images.hdqwalls.com/download/miguel-o-hara-spider-man-2099-5k-2560x1440.jpg',
        author: 'Oscar Isaac',
        title: 'Across the spider verse',
        topic: 'Miguel O’Hara',
        des: 'Miguel O\'Hara, aka Spider-Man 2099, is a brilliant scientist from a dystopian future in "Spider-Man: Into the Spider-Verse." He gains spider-like abilities through a genetic experiment and fights crime in his futuristic world, joining forces with other Spider-People to save the multiverse.',
        bgColor: '#8A2BE2' // BlueViolet
    }
];

function updateMainView() {
    const item = items[currentIndex];
    mainView.innerHTML = `
        <img src="${item.img}">
        <div class="content">
            <div class="author">${item.author}</div>
            <div class="title">${item.title}</div>
            <div class="topic">${item.topic}</div>
            <div class="des">${item.des}</div>
            <div class="buttons">
                <button>BEKIJK MEER</button>
                <button>GALLERY</button>
            </div>
        </div>
    `;
    document.body.style.backgroundColor = item.bgColor;
}

function updateThumbnails() {
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateMainView();
    updateThumbnails();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateMainView();
    updateThumbnails();
});

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateMainView();
        updateThumbnails();
    });
});

updateMainView();
updateThumbnails();
