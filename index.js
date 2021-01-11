async function getmovies(){
    var title = document.getElementById("input-field").value;
    var year = document.getElementById("input-field2").value;
    if (title == "") return
    var poster = document.getElementById("poster")
    poster.src  = "https://cdn.lowgif.com/medium/76aaf121d5d74581-loop-loading-gif-by-derek-fitzpatrick-find-share-on-giphy.gif"

    var Title = document.getElementById("Title")
    var Genre = document.getElementById("Genre")
    var Actors = document.getElementById("Actors")
    var Plot = document.getElementById("Plot")
    var Ratings = document.getElementById("Ratings")
    var RunTime = document.getElementById("RunTime")
    var Director = document.getElementById("Director")
    var info = document.getElementById("info")
    Title.previousSibling.previousSibling.innerHTML = "" ;
    Genre.previousSibling.previousSibling.innerHTML = "" ;
    Actors.previousSibling.previousSibling.innerHTML = "" ;
    Plot.previousSibling.previousSibling.innerHTML = "" ;
    Ratings.previousSibling.previousSibling.innerHTML = "" ;
    RunTime.previousSibling.previousSibling.innerHTML = "" ;
    Director.previousSibling.previousSibling.innerHTML = "" ;
    info.innerHTML = "" ;
    Title.innerHTML = "" ;
    Genre.innerHTML = "" ;
    Actors.innerHTML = "" ;
    Plot.innerHTML = "" ;
    Ratings.innerHTML = "" ;
    RunTime.innerHTML = "" ;
    Director.innerHTML = "" ;

    try{
    var res1 = await fetch(`https://www.omdbapi.com/?s=${title}&plot=full&y=${year}&apikey=aab51e76`);
    var data1 = await res1.json();
    if(data1.Response == "False" ) {
        Title.innerText = data1.Error;
        poster.src  = "";
        return
    }
    console.log(data1)
    var id = data1.Search[0].imdbID
    var res2 = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=aab51e76`);
    var data2 = await res2.json()
    }
    catch(err){
        console.log(err)
        poster.src  = "";
    }
    
    Title.previousSibling.previousSibling.innerHTML = "Title" ;
    Title.innerText = data2.Title +" ("+ data2.Year + ")"

    Genre.previousSibling.previousSibling.innerHTML = "Genre" ;
    Genre.innerText = data2.Genre

    Actors.previousSibling.previousSibling.innerText = "Actors"
    Actors.innerText = data2.Actors

    Plot.previousSibling.previousSibling.innerText = "Plot"
    Plot.innerText = data2.Plot

    Ratings.previousSibling.previousSibling.innerText = "Ratings"
    Ratings.innerText = data2.Ratings[0].Value

    RunTime.previousSibling.previousSibling.innerText = "RunTime"
    RunTime.innerText = data2.Runtime

    Director.previousSibling.previousSibling.innerText = "Director"
    Director.innerText = data2.Director;
    poster.src = data2.Poster;
    

    info.innerHTML=  "Info"
    console.log(data2)
}