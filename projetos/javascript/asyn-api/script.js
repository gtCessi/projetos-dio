const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const button = document.getElementById('change-pet');


const getPets = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        
        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const petImg = document.getElementById('pet');
    petImg.src = await getPets();
};

button.addEventListener('click', loadImg);

loadImg();
