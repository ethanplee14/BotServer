
module.exports = function(dataCount, query) {
    let pagination = {};

    let querySize = query['end'] - query['start'];
    let activeIndex = query['start'] / querySize;
    pagination.pages = pages(Math.ceil(dataCount/querySize), querySize, activeIndex);
    pagination.arrows = arrows(activeIndex, pagination.pages.length-1, querySize);
    return pagination;
};


function pages(pageCount, querySize, activeIndex) {
    let pages = [];

    for(let i = 0; i < pageCount && pageCount > 1; i++) {
        let page = {'query': query(i, querySize)};
        if (i == activeIndex)
            page.active = true;
        pages.push(page);
    }
    return pages;
}

function arrows(activeIndex, maxIndex, querySize) {
    let arrows = {};
    arrows.left = {'query': query(activeIndex - 1, querySize)};
    arrows.right = {'query': query(activeIndex + 1, querySize)};

    if (activeIndex == 0) {
        delete arrows.left.query;
        arrows.left.disabled = true;
    } else if (activeIndex == maxIndex) {
        delete arrows.right.query;
        arrows.right.disabled = true;
    }

    return arrows;
}

let query = (index, size) => ({'start': index * size, 'end': index*size + size});


