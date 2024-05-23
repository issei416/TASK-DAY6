class Movie {
    constructor(title,studio,rating="PG"){     //  a) & b) constructor with title,studio,rating(default:"PG")
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(array){ // c) getPG method which returns array of movies with PG rating and arrgument of array of movie objects
        let PGarr = [];
        for(let obj of array){
            if(obj.rating === "PG"){
                PGarr.push(obj);
            }
        }
        return PGarr; //returns new array
    }
}


movieArray = []; // movie array has all movie
function addMovie(title,studio,rating){  //addmovie will add the given movie to the movie array
    movieArray.push(new Movie(title,studio,rating));
}
addMovie("Casino Royale","Eon Productions","PG"); //  instance of Movie with required properties
addMovie("Demon Slayer","Ufotable","TV-14");
addMovie("The Revenant","Netflix Studios","NC-17");
addMovie("Kung Fu Panda-4","DreamWorks"); // this doesn't have rating so the default will be assigned

console.log("Movies with PG rating :");
console.log(Movie.getPG(movieArray)); // only prints the movies which has PG rating


