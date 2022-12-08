const searchBtn = document.getElementById('search-btn');
const hotelList = document.getElementById('hotel');
const hotelDetailsContent = document.querySelector('.hotel-details-content');
const roomsCloseBtn = document.getElementById('rooms-close-btn');

// event listeners
searchBtn.addEventListener('click', gethotelList);
roomsCloseBtn.addEventListener('click', () => {
    hotelDetailsContent.parentElement.classList.remove('showrooms');
});

let html = "";

// get hotel list that matches with the ingredients
async function  gethotelList()
{
    let searchInputTxtLocation = document.getElementById('search-location').value.trim();
    let searchInputTxtCheckIn = document.getElementById('search-checkIn').value.trim();
    let searchInputTxtCheckOut = document.getElementById('search-checkOut').value.trim();
    let searchInputTxtNumGuest = document.getElementById('search-numOfpeople').value.trim();
    console.log(searchInputTxtCheckIn);
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '404cb97ca6msh0efa166abb29578p1c01dajsn24f3d99b70ca',
            'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        }
    };
    
    await fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/list?offset=0&arrival_date=${searchInputTxtCheckIn}&departure_date=${searchInputTxtCheckOut}&guest_qty=${searchInputTxtNumGuest}&dest_ids=-3714993&room_qty=1&search_type=city&children_qty=2&children_age=5%2C7&search_id=none&price_filter_currencycode=USD&order_by=popularity&languagecode=en-us&travel_purpose=leisure`, options)
    .then(response => response.json())
    .then(async data => {
        console.log(data);
     //   callback2(data,callback1).then(()=>
          let html = "";
        // await cards();
        // function cards(){
             if(data.result){
            data.result.forEach(hotel => {
                let imageUrl
            
               let result = hotel.main_photo_url.replace("square60", "square1000");
               html += `
                    <div class = "hotel-item" data-id = "${hotel.hotel_id
                    }">
                        <div class = "hotel-img">
                            <img src = "${result}" alt = "food">
                        </div>
                        <div class = "hotel-name">
                            <h3>${hotel.hotel_name}</h3>
                            <div class = "reviews">
                            <p>${hotel.review_score}</p>
                            <p>${hotel.review_score_word
                            }</p>
                            </div>
                            <a href = "#" id='room' class = "rooms-btn">See availability</a>
                        </div>
                    </div>
                `;
                console.log("done");
           
            });
            hotelList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any hotel!";
            hotelList.classList.add('notFound');
        }

        {console.log("final")
        hotelList.innerHTML = html;}
    });

   

}


