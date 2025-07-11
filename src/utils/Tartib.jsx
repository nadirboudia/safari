export function paginate(length,list, currentPage){
    
    const TOUR_PER_PAGE = 6;
    const pages = Math.ceil(length / TOUR_PER_PAGE);
    const startIndex = (currentPage - 1) * TOUR_PER_PAGE;
    const finishIndex = currentPage * TOUR_PER_PAGE;

    const OrderedTourList = list.slice(startIndex, finishIndex);

    return {
        pages,
       OrderedTourList
    }
}