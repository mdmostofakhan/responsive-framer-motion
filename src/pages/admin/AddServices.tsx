import { useAddServices } from "@/api/admin/services.hooks"; // Consider renaming this
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCaption, TableCell,
  TableFooter, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Trash2Icon } from "lucide-react";

const AddServices = () => {
  const { isLoading, isError, error, data } = useAddServices();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const total = data?.reduce((sum, total) => sum + (total.price || 0), 0)
  
  return (
    <Container className="border mt-20 p-0 h-[40vh]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((items) => (
            <TableRow key={items.id}>
              <TableCell className="font-medium">{items.name}</TableCell>
              <TableCell>{items.status || "Active"}</TableCell>
              <TableCell>{items.method || "N/A"}</TableCell>
              <TableCell>${items.price?.toFixed(2)}</TableCell>
              <TableCell className="text-right">
                <Button variant="destructive" size="sm">
                  <Trash2Icon className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right" colSpan={2}>
             ${total?.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};

export default AddServices;
