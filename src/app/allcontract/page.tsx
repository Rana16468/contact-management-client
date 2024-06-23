'use client'

import UpdateModal from '@/components/Modal/UpdateModal';
import { useDeleteContractMutation, useFavoriteContractMutation, useGetAllContractQuery } from '@/redux/api/baseApi';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import { GrFavorite } from "react-icons/gr";

const AllContractPage = () => {
    const {isLoading, data, error} = useGetAllContractQuery({}, {refetchOnMountOrArgChange:true});
    const [contractId, setContractId] = useState("");
    const [deleteContract, {isLoading: deleteLoading}] = useDeleteContractMutation();
    const [favoriteContract, {isLoading: favoriteLoading}] = useFavoriteContractMutation();

    const handleModalData = (id: string) => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            modal.showModal();
            setContractId(id);
        }
    }

    console.log(data);

    const handleDeleteContract = async (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await deleteContract(id).unwrap();
                if (result) {
                    Swal.fire({title: "Deleted!", text: "Your Contract has been deleted.", icon: "success"});
                }
            }
        });
    }

    const toggleFavorite = async (id: string) => {
        const result = await favoriteContract(id).unwrap();
        if (result) {
            toast.success("Successfully Recorded");
        }
    }

    return (
        <>
            {isLoading && <p className='text-xl font-serif text-center'>loading</p>}
            {error && <p>Something went wrong, server issues</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {!isLoading && data?.data?.data?.map((contact: any) => (
                    <div key={contact._id} className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex justify-center">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <Image
                                            src={contact.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzF32lbq4BoRPJ3bZ4FrQiFe9uhw5tRZBqxzt7G00uhbmqTW3f-PeYpIMOUzFCsYpuOMI&usqp=CAU"}
                                            alt=""
                                            width={96}
                                            height={96}
                                        />
                                    </div>
                                </div>
                            </div>
                            <h2 className="card-title text-center">{contact.name}</h2>
                            <p><strong>Email:</strong> {contact.email}</p>
                            <p><strong>Phone Number:</strong> {contact.phoneNumber}</p>
                            <p><strong>Address:</strong> {contact.address}</p>
                            <p   className={`${
                                  contact?.isfavorite ? "bg-green-500" : "bg-red-500"
                      } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}><strong></strong> {(contact?.isfavorite)?"Favorite":"Unfavorite"}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-primary btn-sm" onClick={() => handleModalData(contact._id)}>Update</button>
                                <UpdateModal contractId={contractId} />
                                {deleteLoading ? 
                                    <p className='text-xl font-serif text-center'>loading...</p> : 
                                    <button onClick={() => handleDeleteContract(contact._id)} className='btn btn-outline btn-sm btn-error'>Delete</button>
                                }

                                {
                                  favoriteLoading?  <p className='text-xl font-serif text-center'>loading...</p>:<button onClick={() => toggleFavorite(contact._id)} className='btn btn-outline btn-error btn-sm'>
                                  <GrFavorite className='text-xl'/>
                              </button>
                                }
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllContractPage;
