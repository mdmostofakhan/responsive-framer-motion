import { useQuery } from "@tanstack/react-query";
import { addServices, getServices } from "./services.api";

 export const useGetServices = () => {
  const servicesInfo =   useQuery({
        queryKey: ['services'],
        queryFn: getServices,
        select: (data) => {
           const services = data.data.map(item => ({
               id: item._id,
               name: item.name
           }))
           return services;
        }
   })
   return servicesInfo;
}


  // data?.data?.map(item => (
    //     <div key={item.id}>
    //        <p className="text-lg"> {item.name}</p>
           
    //     </div>
    //   ))


   //  add services ......

  export const useAddServices = () => {
     const addServicesInfo =useQuery({
         queryKey: ["services"],
         queryFn: addServices,
         select: (data) => {
             return data?.data?.map(item => ({
                  id: item?.id,
                  name: item.name,
                  price: item.price
             }))
   
            }
         })
         return addServicesInfo
   }