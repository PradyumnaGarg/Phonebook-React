import { useEffect, useRef, useState } from "react";
import homeService from "../home/home.service";
import { useLoading } from '../../contexts/loaderContext'
import { useForm } from "react-hook-form";
import Cropper from "react-easy-crop";

const Profile = () => {
    let user ={
    firstName: '',
    lastName: '',
    username: '',
    profilePicture: '',
    mobileNumber: ''
    }
    const {register, handleSubmit, formState : { errors }, watch, getValues ,reset} = useForm();
    const [userDetails, setUser] = useState(user);
    const [isPasswordFormVisible, showPasswordForm] = useState(false);
    const [crop, setCrop] = useState({x:0, y:0});
    const { setLoading } = useLoading();
    const password = useRef({});
    password.current = watch("password", "");
    
    useEffect(async() => {
        setLoading(true);
        try{
            const {result} = await homeService.getProfile();
            if(result){
                user = (({
                        firstName,
                        lastName,
                        username,
                        mobileNumber
                        })=>({
                        firstName,
                        lastName,
                        username,
                        mobileNumber
                        }))(result)
                setUser(user);
                setLoading(false)
            }
        }
        catch(error){
            setLoading(false);
            console.log(error);
        }
        
    },[])

    const changePassword = async (data) => {
        try{

            const user = await homeService.changePassword(data);
            console.log(user, 'Password updated');
            reset({password:'',newPassword:'', confirmPassword:''});
            showPasswordForm(false)
        }
        catch (error){
            console.log("error" , error);
        }
    }

    const onCropComplete = ((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
      }, []);
    const showCropper = (event) => {
        console.log(event.target);
          return (
            <Cropper
              image={event.target.files[0]}
              crop={crop}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
            />
          )
    }

    const passwordForm = () => {
        if(isPasswordFormVisible){
           return (
               <div className="w-full  p-2 space-y-4">
                   <p className="text-xl">Change Password</p>
                   <form onSubmit={handleSubmit(changePassword)} className="flex flex-col space-y-3" >
                       <label className="w-1/4 flex flex-col space-y-2" >
                           Current Password
                           <input {...register('password', {required: true})} className="ms-4 rounded  border-1" type="password" placeholder="Enter Current Password" />
                           { errors.password && <span className='text-red-500 text-sm'>Current Password is required</span>}
                       </label>
                       <label className="w-1/4 flex flex-col space-y-2" >
                           New Password
                           <input {...register('newPassword', {required: true})} className="ms-4 rounded  border-1" type="password" placeholder="Enter New Password" />
                           { errors.newPassword && <span className='text-red-500 text-sm'>New Password is Required</span>}
                       </label>
                       <label className="w-1/4 flex flex-col space-y-2" >
                           Confirm New Password
                           <input {...register('confirmPassword',{required:"Confirm Password is required" ,validate: {
                               matchesPreviousPassword: (value) => {
                                   const { newPassword } = getValues();
                                   return newPassword === value || "Password does not match"
                                }
                            } })} className="ms-4 rounded  border-1" type="password" placeholder="Confirm New Password" />
                             <span className='text-red-500 text-sm'> {errors?.confirmPassword?.message} </span> 

                       </label>
                       <button type="submit" className='w-1/5 bg-green-500 hover:bg-green-600 text-white px-4 py-1 my-1 rounded-lg'  >Update password</button>
                   </form>
               </div>
           )
        }
    }

    return (
        <div className="w-full custom-box-shadow rounded-lg p-5 space-y-4" >
            <h3 className="text-3xl" >My Profile</h3>
            <div className="mt-4 border-b" ></div>
            <div className="mt-4 flex">
                <div className="w-1/6">
                    <div className="border rounded-xl p-2 flex flex-col items-center">
                        <img width={150} height={150} className=" border-none" src={userDetails.profilePicture} alt="" />
                        <input onChange={(e)=>showCropper(e)} className="w-full opacity-0 h-8 mt-4"  type="file" />
                        <button type="submit" className='bg-green-500 hover:bg-green-600 text-white px-4 py-1 mb-1 -mt-8 rounded-lg'> Upload Image</button>
                    </div>
                </div>
                <div className="w-3/4 p-2">
                    <div className="w-full space-y-4">
                        <div className="flex justify-between">
                        <h5 className="text-xl font-bold">{`${userDetails.firstName} ${userDetails.lastName}`}</h5>
                        {
                            !isPasswordFormVisible?
                        <button onClick={()=>showPasswordForm(true)} className='bg-green-500 hover:bg-green-600 text-white px-4 py-1 my-1 rounded-lg'>Change Password</button>
                        : ''
                        }
                        </div>
                        <p>{userDetails.username}</p>
                        <p>{userDetails.mobileNumber}</p>
                    </div>
                </div>
            </div>
                {
                 passwordForm()
                }
        </div>
    )
}
export default Profile;