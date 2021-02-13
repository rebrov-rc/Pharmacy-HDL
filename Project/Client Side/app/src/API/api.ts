import  axios from 'axios'


const instance = axios.create({
     baseURL : "http://localhost:3219",
});

export const getProducts = async(props : string) => {
     try{
          return await instance.get( props + "?_limit=2")
          .then(response => response.data )
          .catch(err => console.log(err))
     } catch (err) {
          console.log(err);
     }
}
export const getSlidesList = async(props : string) => {
     try{
          return await instance.get(props)
                    .then(response => response.data )
                    .catch(err => console.log(err))
          } catch(err){
               console.log(err);
          }
}

// export const getProducts = async() => {
//      let req = await fetch('https://jsonplaceholder.typicode.com/todos/1') as any;
//      let data : any = await req.then((response : any) =>{ return response.json()} );
//      let dataE : any = await data.then((e : any) =>{console.log(e);
//      } );
//      await req.catch((err : any ) => console.log(err));
//      return await   data;
// }