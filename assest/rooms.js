const details = document.getElementById('details');//<<<<<<<<<<<<<<<<

const roomList = document.getElementById('room');
getroomList();
//export function  getroomList(hotel_id,departure_date,arrival_date,rec_guest_qty){
//db.query(`INSERT INTO reservation (hotel_id, departure_date, arrival_date, rec_guest_qty) VALUES ($1, $2, $3, $4) RETURNING *`, [hotel_id, departure_date, arrival_date, rec_guest_qty])    
roomList.addEventListener('click', paymentPage);  
function getroomList(dataFromHotels)
 { //<<<<<<<<<<<<<<<<<
    let hotelItemDetails=details.className.split("/");
    console.log(hotelItemDetails);
    let hotel_id =hotelItemDetails[0]
    let departure_date=hotelItemDetails[1]
    let arrival_date=hotelItemDetails[2]
    let rec_guest_qty=hotelItemDetails[3]
    //<<<<<<<<<<<<<<<<<
    // db.query(`SELECT * FROM reservation WHERE id=(SELECT max(id) FROM reservation);`,function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //   }); 
    // console.log(hotel_id);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e6aa3198d3msh586bfddf926f020p191742jsnd77f2ff2dc0c',
            'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        }
    };
    
   //fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/v2/get-rooms?room_id=${hotel_id}&departure_date=${departure_date}&arrival_date=${arrival_date}&rec_guest_qty=${rec_guest_qty}&rec_room_qty=1&currency_code=USD&languagecode=en-us&units=imperial`, options)
   //fetch('https://apidojo-booking-v1.p.rapidapi.com/properties/v2/get-rooms?hotel_id=1720410&departure_date=2023-1-20&arrival_date=2023-1-10&rec_guest_qty=2&rec_room_qty=1&currency_code=USD&languagecode=en-us&units=imperial', options)
     fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/v2/get-rooms?hotel_id=${hotel_id}&departure_date=${departure_date}&arrival_date=${arrival_date}&rec_guest_qty=${rec_guest_qty}&rec_room_qty=1&currency_code=USD&languagecode=en-us&units=imperial`, options)     
   .then(response => response.json())
        .then(async data => {
            console.log(data);
         //   callback2(data,callback1).then(()=>
              let html = "";
            // await cards();
            // function cards(){
                 if(data[0].rooms){
                    data=data[0]
                Object.keys(data.rooms).forEach(room => {
                    let imageUrl
                //    callback(room.room_id)
                //    .then(
                   // (imageUrl)=>{console.log(imageUrl);   
                   let result = data.rooms[`${room}`].photos[0].url_original

                   //let priceInShekel=data.rooms[`${room}`].price_breakdown.gross_price*3.62;
                   html += `
                        <div class = "room-item" data-id = "${data.rooms[`${room}`].description
                        }">
                            <div class = "room-img">`
                            html += `<img src = "${data.rooms[`${room}`].photos[0].url_original}" alt = "food">`
                           //data.rooms[`${room}`].photos.forEach(photo =>{ html += `<img src = "${photo.url_original}" alt = "food">`;})
                               
                         html += ` </div>
                            <div class = "room-name">
                                <h3>${data.rooms[`${room}`].description}</h3>
                                <div class = "reviews">
                                <p>`

                                data.rooms[`${room}`].highlights.forEach(highlight =>{ html += `${highlight.translated_name}●`})
                             
                                html += ` </p>
                                </div>
                                <a href = "" class = "rooms-btn">Reserve</a>
                            </div>
                        </div>
                    `;
                    console.log("done");
                //}
                    //).catch(console.log("image not download"));
                });
                roomList.classList.remove('notFound');
            } else{
                html = "Sorry, we didn't find any room!";
                roomList.classList.add('notFound');
            }
        //};
            {console.log("final")
            roomList.innerHTML = html;}//)
        })
        .catch(err => console.error(err));
}
//export default {getroomList};
function paymentPage(e)
{
    
    e.preventDefault();
    if(e.target.classList.contains('rooms-btn'))
    {
       window.location.href = "/payment";
    }
}