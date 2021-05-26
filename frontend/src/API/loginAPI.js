import usersAPI from './usersAPI'
import currentUserAPI from './currentUserAPI'
import getAllOrdersAPI from './getAllOrdersAPI'
async function loginAPI({
info,
setIsLoading,
setServerError,
setIsLogin,
setToken,
setIsAdmin,
history,
setCurrentUser,
setAllUsers,
setAllOrders,
setIsFormLoading,
setIsModerator,

}){
try {
setIsFormLoading(true)



    const headers = new Headers();
        headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');
   


       

        const setting = {
          method: 'POST',
            body: JSON.stringify(info),
          headers: headers,
        
        }



        let res = await fetch("/api/auth/login", setting);
       let json = await res.json()
         let {message} = json
    setIsFormLoading(false)
     
      if(res.status === 200) {
              setServerError("")
    
        
       const {token,roles,user} = json
         setToken(token) ;

        localStorage.setItem('userId',user._id);
        
      await   currentUserAPI({setCurrentUser,token})

        setIsLogin()
        
           for (let i = 0; i < roles.length ; i ++){
             
     if ( roles[i].name === 'admin') {
         setIsAdmin(true)
         setIsLoading(true)
        
        await usersAPI({setAllUsers,token})
   await getAllOrdersAPI({token,setAllOrders,setIsLoading})

           return  history.push("/dashboard/orders")
      }
     else if(roles[i].name === 'moderator'){
      setIsModerator(true)
    await getAllOrdersAPI({token,setAllOrders,setIsLoading})
          return history.push("/dashboard/myProducts")
       
      }

     }
      return history.push("/menu")
      
    }

if(res.status === 500){
   setServerError('Error en el servidor, vuelva a interntar')

}


   
     setServerError(message)

       
}catch(err){

  console.log(err)

}

}
export default loginAPI