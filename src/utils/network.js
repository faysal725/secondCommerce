const baseUrl = "https://fakestoreapi.com"

export const  networkPost = async({method , path ,heads , body }) => {
    //Authorization: `Bearer ${token}`
    var errorMessage = "";
    var response;
    var errors= [];
    var errorStatus
    let flag = 200;

    await fetch(baseUrl + path, {
        method: method,
        headers: heads,
        body: body, 
    }).then(async(res)=>{
        if (!res.ok) {
            errorStatus = await res.json()

          throw new Error(`Error: ${errorStatus}`);
        }
        response = res;
    }).catch((error)=>{
        flag = 422;
        errorMessage = errorStatus
        errors = errorStatus
    });
    if(flag == 422){
        return {
            'status' : 422,
            'errors': errors,
            'message': errorMessage,
        }
    }else{
        return {
            'status' : 200,
            'res': response,
            'message': "Network Responded Successfully",
        }
    }
}




export const  networkGet = async({method , path ,heads }) => {
    
    var errorMessage = "Error Internal";
    var response;
    var errors= [];
    var errorStatus
    let flag = 200;

    if (method == 'GET') {
        // await fetch(baseUrl + path, {
        //     headers: heads 
        // })
        // .then(async(res) => {
        //     if (!res.ok) {
        //         errorStatus = await res.json()
    
        //       throw new Error(`Error: ${errorStatus}`);
        //     }
        //     console.log('network', res)
        //     response = res
        // })
        // .catch(function (error) {
        //     flag = 422;
        //     errorMessage = errorStatus
        //     errors = errorStatus
        // });

      try {
        const response = await fetch(baseUrl + path);
        if (!response.ok) {
          errorStatus = await response.json()

          throw new Error(`Error: ${errorStatus}`);
        //   throw new Error(`Error: ${response.statusText}`);
        }
        
        const responseData = await response.json();
        return responseData
      } catch (err) {
        flag = 422;
        errorMessage = errorStatus
        errors = errorStatus
      } 
    }else if(method == 'DELETE'){
        await fetch(baseUrl + path, {
            headers: heads 
        })
        .then((res) => response = res)
        .catch(function (error) {
            flag = 422;
            errorMessage = errorStatus
            errors = errorStatus
        });
    }


    
    if(flag == 422){
        return {
            'status' : 422,
            'errors': errors,
            'message': errorMessage,
        }
    }else{
        return {
            'status' : 200,
            'res': response,
            'message': "Network Responded Successfully",
        }
    }
}