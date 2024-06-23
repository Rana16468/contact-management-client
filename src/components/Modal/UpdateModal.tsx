'use client'
import { useSpecificedContrcatDataQuery, useUpdateContractInfoMutation } from '@/redux/api/baseApi';
import { TypeOfImage } from '@/utils/ExtentionType';
import React, { useRef } from 'react';
import { FieldValues } from 'react-hook-form';
import GenerateImage from '../FatchAction/GenerateImage';
import { toast } from 'sonner';

const UpdateModal = ({ contractId }: { contractId: string }) => {
    const { data, isLoading, error } = useSpecificedContrcatDataQuery(contractId, { refetchOnMountOrArgChange: true });
    const [updateContractInfo, { isLoading: UpdateLoading }] = useUpdateContractInfoMutation();
    const modalRef = useRef<HTMLDialogElement>(null);

    const handleUpdateContract = async (event: FieldValues) => {
        event.preventDefault();
        const element = event.target;
        const name = element.name.value;
        const email = element.email.value;
        const address = element.address.value;
        const phoneNumber = element.phoneNumber.value;
        let image = element.photo.files[0] || data?.data?.photo;

        if (TypeOfImage.includes(image?.name?.split(".")?.pop()?.toLowerCase())) {
            image = await GenerateImage(image);
        } 

        const updateContract = { name, email, address, phoneNumber, photo: image };
        const result = await updateContractInfo({ id: data?.data?._id,updateContract }).unwrap();
        if (result) {
            toast.success("Successfully Updated Contract");
            element.reset();
            if (modalRef.current) {
                modalRef.current.close();
            }
        }
    };

    return (
        <>
            {isLoading && <p className='text-xl font-serif text-center'>loading</p>}
            {error && <p>Something went wrong, server issues</p>}

            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Update Contract</h3>
                    {/* form */}
                    <form onSubmit={handleUpdateContract} className="grid grid-cols-1 gap-3 md:grid-cols-1">
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="name"
                            defaultValue={data?.data?.name}
                            placeholder="Name"
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email"
                            name="email"
                            defaultValue={data?.data?.email}
                            placeholder="Email"
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="phoneNumber"
                            defaultValue={data?.data?.phoneNumber}
                            placeholder="Phone Number"
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="address"
                            defaultValue={data?.data?.address}
                            placeholder="Address"
                        />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            defaultValue={new Date().toString()}
                            readOnly
                            placeholder="Release Date"
                        />
                        <div>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 "
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="photo"
                                            className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>Upload a Photo</span>
                                            <input
                                                id="photo"
                                                type="file"
                                                name="photo"
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs">PNG, JPG, GIF up to 800kb</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-3">
                            {UpdateLoading ? <p>Loading ...</p> : <button
                                type="submit"
                                className="btn btn-outline bg-blue-900 text-white"
                            >
                                Update Contract
                            </button>}
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default UpdateModal;
