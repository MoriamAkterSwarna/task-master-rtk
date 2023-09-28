import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Tasks'],
    endpoints: () => ({
    // endpoints: (builder) => ({
        // getTasks: builder.query({
        //     query: () => '/tasks',
        //     providesTags: ["Tasks"]
        // }),
        // updateTask: builder.mutation({
        //     query: ({id, data}) => ({
        //         url: `/tasks/${id}`,
        //         method: 'PATCH',
        //         body: data,
        //     }),
        //     invalidatesTags:['Tasks']
        // }),
        // addTask: builder.mutation({
        //     query: (task) => ({
        //         url: '/tasks',
        //         method: 'POST',
        //         body: task,
        //     }),
        //     invalidatesTags:['Tasks']
        // })
    }),
});
export const { useGetTasksQuery, useUpdateTaskMutation, useAddTaskMutation} = baseApi;
export default baseApi;