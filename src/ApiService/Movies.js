async function getMoviesByStatus(status){
    try{
        const rawResponse = await fetch(`http://localhost:8085/api/v1/movies?page=1&limit=20&status=${status}`,{
            method: "GET",
            headers: {  
                "Accept": "application/json;charset=UTF-8"
            }
        });
        const result = await rawResponse.json();
        if(rawResponse.ok){
            return result;
        }else{
            const error =  new Error();
            error.message = result.message || 'Invalid Data'
            throw error;
        }
    }
    catch(e){
        alert(e);
    }

}

async function getMovieByID(id){
    try{
        const rawResponse = await fetch(`http://localhost:8085/api/v1/movies/${id}`,{
            method: "GET",
            headers: {  
                "Accept": "application/json;charset=UTF-8"
            }
        });
        const result = await rawResponse.json();
        if(rawResponse.ok){
            return result;
        }else{
            const error =  new Error();
            error.message = result.message || 'Invalid Data'
            throw error;
        }
    }
    catch(e){
        alert(e);
    }

}

export default[getMoviesByStatus, getMovieByID]