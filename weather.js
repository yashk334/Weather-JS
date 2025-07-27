const input = document.querySelector("#input");
const weatherInfo = document.querySelector("#weatherInfo");


const API_KEY = "d603edec860d41d02356bef985423850";


const handleclick = async() =>{
       const cityName = input.value;
       if(input.value == ""){
            return;
       }

       try{
        const info = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
         const temp = info.data.main.temp;
         const description = info.data.weather[0].description;
         weatherInfo.innerText = `Temperature:${temp}C and Condition: ${description}`;
       }catch(error){
          weatherInfo.innerText = "city not found or error occured";
          console.log(error);
       }     
};




