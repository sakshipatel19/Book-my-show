export const fetchMovieList = async () =>{
    const response = await fetch('https://www.omdbapi.com/?apikey=9c22ae49&s=avenger');
    const data = await response.json();
    console.log(data);
    return data;
}

export const fetchBookMyShowData= async () =>{
    const response = await fetch('https://in.bookmyshow.com/serv/getData?cmd=QUICKBOOK&type=MT&getRecommendedData=1&_=1574663739873');
    const data = await response.json();
    console.log(data);
    return data;
}