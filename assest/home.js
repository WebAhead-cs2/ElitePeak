//const db = require("../database/connection.js");
//import {db} from "../database/connection.js";
//import {getroomList} from "../hotelRoomsPage/hotelRooms.js";



const searchBtn = document.getElementById('search-btn');
const hotelList = document.getElementById('hotel');
const hotelDetailsContent = document.querySelector('.hotel-details-content');
const roomsCloseBtn = document.getElementById('rooms-close-btn');

// event listeners
searchBtn.addEventListener('click',gethotelList);
hotelList.addEventListener('click', gethotelrooms);
roomsCloseBtn.addEventListener('click', () => {
    hotelDetailsContent.parentElement.classList.remove('showrooms');
});

let html = "";

// get hotel list that matches with the ingredients
function getIdDesFromLocation(location)
{ let desId;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e6aa3198d3msh586bfddf926f020p191742jsnd77f2ff2dc0c',
            'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        }
    };
    
    return fetch(`https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=${location}&languagecode=en-us`, options)
        .then(response => response.json())
        .then(response =>
            //{
             //console.log(response)
            // desId=
             response[0].dest_id

        //}
        )
        .catch(err => console.error(err));
//return desId;
}
async function  gethotelList()
{
    let searchInputTxtLocation = document.getElementById('search-location').value.trim();
    let desId= await getIdDesFromLocation(searchInputTxtLocation)
    let searchInputTxtCheckIn = document.getElementById('search-checkIn').value.trim();
    let searchInputTxtCheckOut = document.getElementById('search-checkOut').value.trim();
    let searchInputTxtNumGuest = document.getElementById('search-numOfpeople').value.trim();
    console.log(searchInputTxtCheckIn);
    console.log(desId)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e6aa3198d3msh586bfddf926f020p191742jsnd77f2ff2dc0c',
            'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        }
    };
    
    await fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/list?offset=0&arrival_date=${searchInputTxtCheckIn}&departure_date=${searchInputTxtCheckOut}&guest_qty=${searchInputTxtNumGuest}&dest_ids=${desId}&room_qty=1&search_type=city&children_qty=2&children_age=5%2C7&search_id=none&price_filter_currencycode=USD&order_by=popularity&languagecode=en-us&travel_purpose=leisure`, options)
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
            //    callback(hotel.hotel_id)
            //    .then(
               // (imageUrl)=>{console.log(imageUrl);
               let result = hotel.main_photo_url.replace("square60", "square1000");
               let priceInShekel=hotel.price_breakdown.gross_price*3.62;
               html += `
                    <div class = "hotel-item" data-id = "${hotel.hotel_id
                    }/${searchInputTxtCheckIn}/${searchInputTxtCheckOut}/${searchInputTxtNumGuest}">
                        <div class = "hotel-img">
                            <img src = "${result}" alt = "food">
                        </div>
                        <div class = "hotel-name">
                            <h3>${hotel.hotel_name}</h3>
                            <div class = "reviews">
                            <p hidden> ${hotel.hotel_id}</p>
                            <p hidden> ${searchInputTxtCheckIn}</p>
                            <p hidden>${searchInputTxtCheckOut}</p>
                            <p hidden>${searchInputTxtNumGuest}</p>
                            <p>City : ${hotel.city}</p>
                            <p>★${hotel.review_score}</p>
                            <p>${hotel.review_score_word
                            }</p>
                            <p>${priceInShekel
                            }₪</p>
                            </div>
                            <a href = "#" class = "rooms-btn">See availability</a>
                        </div>
                    </div>
                `;
                console.log("done");
            //}
                //).catch(console.log("image not download"));
            });
            hotelList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any hotel!";
            hotelList.classList.add('notFound');
        }
    //};
        {console.log("final")
        hotelList.innerHTML = html;}//)
    });
}
// function gethotelrooms()
// {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '404cb97ca6msh0efa166abb29578p1c01dajsn24f3d99b70ca',
//             'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=hanoi&languagecode=en-us', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }
// export let hotel_id;
// export let departure_date;
// export let arrival_date;
// export let rec_guest_qty;

function gethotelrooms(e)
{
    
    e.preventDefault();
    if(e.target.classList.contains('rooms-btn'))
    {
       let hotelItem = e.target.parentElement.parentElement;
       let hotelItemDetails=hotelItem.dataset.id.split("/");
       hotel_id =hotelItemDetails[0]
       departure_date=hotelItemDetails[1]
       arrival_date=hotelItemDetails[2]
       rec_guest_qty=hotelItemDetails[3]
       console.log(departure_date);
       // exported fun
       
       //db.query(`INSERT INTO reservation (hotel_id, departure_date, arrival_date, rec_guest_qty) VALUES ($1, $2, $3, $4) RETURNING *`, [hotel_id, departure_date, arrival_date, rec_guest_qty])
       //getroomList(hotel_id,departure_date,arrival_date,letrec_guest_qty);
       console.log("hiii"); 
       // gethotelList(hotel_id,departure_date,arrival_date,letrec_guest_qty)
    }
}