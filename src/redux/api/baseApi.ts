import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://contract-management-server.vercel.app/api/v1' }),
  tagTypes: ['contract'],
  endpoints: (builder) => ({
   getAllContract: builder.query({
      query: () =>{
        return {
            url:"/contract/",
            method:"GET"
        }
      },
      transformResponse: (response:any) => {
        return {
          data: response,
        };
    },
     providesTags:['contract']
      
    }),
    //post data 
    addToContrcat:builder.mutation({
        query:(data)=>{
            return {
                url:"/contract/",
                method:"POST",
                headers:{
                    "content-type": "application/json",
                },
                body:data
            }
        },
        invalidatesTags:['contract']
        
    }),
    // specificed contrcat id 
    specificedContrcatData:builder.query({
        query:(id)=>{
            return{
                url:`/contract/${id}`,
                method:"GET"
            }
        },
        providesTags:['contract']
    }),
    // update Contrcat Information 
    updateContractInfo:builder.mutation({
        query:(data)=>{
            return {
                url:`/contract/${data.id}`,
                method:"PATCH",
                headers:{
                    "content-type": "application/json",
                },
                
                body:data.updateContract
            }
        },
        invalidatesTags:['contract']
    }),
    // delete contrcat list 
    deleteContract:builder.mutation({
        query:(id)=>{
            return {
                url:`/contract/${id}`,
                method:"DELETE"
            }
        },
        invalidatesTags:['contract']
    }),
    // favorite contrcat Number 
  
    favoriteContract:builder.mutation({
        query:(id)=>{
            return {
                url:`/contract/favorite/${id}`,
                method:"PATCH"
            }
        },
        invalidatesTags:['contract']
    })
  }),
  
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllContractQuery,useAddToContrcatMutation,useSpecificedContrcatDataQuery,
    useUpdateContractInfoMutation,useDeleteContractMutation,useFavoriteContractMutation
 } =baseApi