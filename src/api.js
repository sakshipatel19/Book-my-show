import axios from 'axios';
const API_KEY ='AIzaSyBxh1zcTFAYzxEHCAHrm7Wtod5MbGVI9x4'
export const fetchMovieList = async () =>{
    const response = await axios.get('http://burger-app-99f67.firebaseio.com/');
    //const data = await response.json();
    console.log(response);
    return response;
}

export const fetchBookMyShowData= async () =>{
    const response = await fetch('https://in.bookmyshow.com/serv/getData?cmd=QUICKBOOK&type=MT&getRecommendedData=1&_=1574663739873');
    const data = await response.json();
    console.log(data);
    return data;
}