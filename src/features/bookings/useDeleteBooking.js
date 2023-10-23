import { toast } from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const UseDeleteBooking = () => {
  const queryClient = useQueryClient();
  

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success(`Booking deleted`);
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
      
    
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    isDeleting,
    deleteBooking,
  };
};
