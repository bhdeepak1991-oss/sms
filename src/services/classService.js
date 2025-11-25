import axiosInstance from "../axioshelpers/axioshelper";

export const getAllClass = async () => {
  return await axiosInstance.get("api/class-batch/fetchClas");
};
