import { useQuery } from "@tanstack/react-query";
import { getServices } from "./services.api";

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