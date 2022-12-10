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
  try{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f3acca786cmsh47ff34d512304a5p1bfe56jsn738eb88fb70f',
            'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        }
    };
   let resultData=await fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/list?offset=0&arrival_date=${searchInputTxtCheckIn}&departure_date=${searchInputTxtCheckOut}&guest_qty=${searchInputTxtNumGuest}&dest_ids=-3712125&room_qty=1&search_type=city&children_qty=2&children_age=5%2C7&search_id=none&price_filter_currencycode=USD&order_by=popularity&languagecode=en-us&travel_purpose=leisure`, options);
    let jsonData=await resultData.json();
    let hotelinfo=jsonData.result;
    let result;
    if(hotelinfo){
        hotelinfo.forEach(info=>{
             result = info.main_photo_url.replace("square60", "square1000");
            html += `
                 <div class = "hotel-item" data-id = "${info.hotel_id
                 }">
                     <div class = "hotel-img">
                         <img src = "${result}" alt = "hotel">
                     </div>
                     <div class = "hotel-name">
                         <h3>${info.hotel_name}</h3>
                         <div class = "reviews">
                         <p>${info.review_score}</p>
                         <p>${info.review_score_word
                         }</p>
                         </div>
                         <button onclick='' id='room' class = "rooms-btn">See availability</button>
                     </div>
                 </div>
             `;
             console.log("done");
            })
         hotelList.classList.remove('notFound');
        }else{
            html = "Sorry, we didn't find any hotel!";
            hotelList.classList.add('notFound');
        }
        {console.log("final")
        hotelList.innerHTML = html;}
    }catch(err){
      throw new Error(`${err}`)
    }
  }

