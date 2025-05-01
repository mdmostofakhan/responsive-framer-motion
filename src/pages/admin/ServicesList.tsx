import { getServices } from "@/api/admin/services.api";
import { useGetServices } from "@/api/admin/services.hooks";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";

const ServicesList = () => {
   const {data: services, isLoading, isError} = useGetServices()

   if(isLoading) {
    return <p>Loading...</p>
   }

    if(isError) {
        return <p>some thins went wrong</p>
    }

    return(
       <Container className="p-0 mt-20 border rounded-lg">
         <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{}</TableCell>
              <TableCell>{}</TableCell>
              <TableCell className="text-right">
              <Button variant="destructive" className="p-2"><Trash2 /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
       </Container>
    )
}

export default ServicesList;