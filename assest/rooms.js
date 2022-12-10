

const roomList = document.getElementById('room');
//getroomList();
 async function  getroomList(hotel_id,departure_date,arrival_date,rec_guest_qty){
//db.query(`INSERT INTO reservation (hotel_id, departure_date, arrival_date, rec_guest_qty) VALUES ($1, $2, $3, $4) RETURNING *`, [hotel_id, departure_date, arrival_date, rec_guest_qty])    

// function  getroomList()
// 


try{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f3acca786cmsh47ff34d512304a5p1bfe56jsn738eb88fb70f',
            'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        }
    };
    debugger;
    let roomsdata=await fetch('https://apidojo-booking-v1.p.rapidapi.com/properties/v2/get-rooms?hotel_id=1720410&departure_date=2022-10-10&arrival_date=2022-10-5&rec_guest_qty=2&rec_room_qty=1&currency_code=USD&languagecode=en-us&units=imperial', options);
    let jsonroom = await roomsdata.json();
    console.log(jsonroom) ; 
    // if(roominfo){
    //     roominfo.forEach(info=>{
    //         let html = "";
    //         // await cards();
    //         // function cards(){
    //              if(data[0].rooms){
    //                 data=data[0]
    //             Object.keys(data.rooms).forEach(room => {
    //                 let imageUrl
    //             //    callback(room.room_id)
    //             //    .then(
    //                // (imageUrl)=>{console.log(imageUrl);   
    //                let result = data.rooms[`${room}`].photos[0].url_original

    //                //let priceInShekel=data.rooms[`${room}`].price_breakdown.gross_price*3.62;
    //                html += `
    //                     <div class = "room-item" data-id = "${data.rooms[`${room}`].description
    //                     }">
    //                         <div class = "room-img">`
    //                         html += `<img src = "${data.rooms[`${room}`].photos[0].url_original}" alt = "food">`
    //                        //data.rooms[`${room}`].photos.forEach(photo =>{ html += `<img src = "${photo.url_original}" alt = "food">`;})
                               
    //                      html += ` </div>
    //                         <div class = "room-name">
    //                             <h3>${data.rooms[`${room}`].description}</h3>
    //                             <div class = "reviews">
    //                             <p>`

    //                             data.rooms[`${room}`].highlights.forEach(highlight =>{ html += `${highlight.translated_name}●`})
                             
    //                             html += ` </p>
    //                             </div>
    //                             <a href = "" class = "rooms-btn">Reserve</a>
    //                         </div>
    //                     </div>
    //                 `;
    //                 console.log("done");
    //             //}
    //                 //).catch(console.log("image not download"));
    //             });
    //             roomList.classList.remove('notFound');
    //         } else{
    //             html = "Sorry, we didn't find any room!";
    //             roomList.classList.add('notFound');
    //         }
    //     //};
    //         {console.log("final")
    //         roomList.innerHTML = html;}//)
    //     });   

    //}
    }
 catch(err){
    throw new Error(`${err}`);
  }
   
    
   
       
}
