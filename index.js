const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=46cb0826bc9d924445bc90903e183ebf"

const movie = fetch(url, {
    headers: {
        "Content-Type": "application/json",
    }
})

movie.then(data => data.json())
     .then(function(data) {
            console.log(data, "THIS IS THE DATA");
            data.results.map(function(data, i) {
                
                let card = document.createElement('div');
                card.className = "card";
                card.style = "width: 18rem;"
            let cardBody = document.createElement('div');
                cardBody.className = "card-body";
            let img = document.createElement('img');
                img.src = "https://image.tmdb.org/t/p/w500"+ data.poster_path;
                img.style = "height: 250px"
            let h5 = document.createElement('h5');
                h5.innerHTML = data.original_title;
            let p = document.createElement('p');
                p.innerHTML = data.overview;
                p.style = "height: 150px; overflow: hidden;text-overflow: ellipsis;"
            let button = document.createElement('button')
                button.className = "btn btn-primary";
                button.innerHTML = "BOOK"

            card.appendChild(img);
            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            cardBody.appendChild(button)
            card.appendChild(cardBody);

            document.getElementById('app').appendChild(card)
                
                
            })
            
            document.getElementById('app').className = "container-fluid"
            document.getElementById('app').style = "display: flex; flex-wrap: wrap;"

     })

     console.log("this will get printed first.!!!")

     