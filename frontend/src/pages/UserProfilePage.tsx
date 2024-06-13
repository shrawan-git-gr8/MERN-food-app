import { useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/form/user-profile-form/UserProfileForm";

export default function UserProfilePage() {
  const {updateUser, isLoading } = useUpdateMyUser();
  return( <UserProfileForm onSave={updateUser} isLoading ={isLoading} />)
}
