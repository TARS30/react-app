import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: addCabin, isLoading: isAdding } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("new cabin added");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addCabin };
};
