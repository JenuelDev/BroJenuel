/**
 * This will throw a error response
 * @param message
 * @param status
 */
function throwError(message: string, status = 200) {
    throw createError({
        statusCode: status,
        statusMessage: message,
    });
}

export default defineEventHandler(async (event) => {
    // try {
    // const query = getQuery(event);
    // const limit = query.limit ?? 10;
    // const search = query.search ?? null;

    // const content =
    // const blogQuery = queryContent("articles");
    // const blogs = useBlogs();

    // return await blogs;
    // } catch {
    //     throwError("Their is an error getting data.", 422);
    // }

    return {
        message: "Sorry This API is under Construction",
    };
});
